from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import or_
from sqlalchemy.orm import Session

from app.api.dependencies import get_current_user
from app.db.session import get_db
from app.models import KnowledgeBase, TeamSpace, TeamSpaceMember, User
from app.schemas.team_space import (
    TeamSpaceCreate,
    TeamSpaceMemberCandidate,
    TeamSpaceMemberCreate,
    TeamSpaceMemberResponse,
    TeamSpaceResponse,
    TeamSpaceUpdate,
)
from app.services.audit import record_audit
from app.services.team_spaces import (
    create_team_space,
    team_space_counts,
    user_can_access_team_space,
    user_can_manage_team_space,
)


router = APIRouter(prefix="/team-spaces", tags=["team-spaces"])


def _space_response(db: Session, space: TeamSpace, current_user: User) -> TeamSpaceResponse:
    owner = db.get(User, space.owner_id)
    document_count, member_count = team_space_counts(db, space)
    return TeamSpaceResponse(
        id=space.id,
        name=space.name,
        description=space.description,
        owner_id=space.owner_id,
        owner_username=owner.username if owner is not None else "未知用户",
        knowledge_base_id=space.knowledge_base_id,
        document_count=document_count,
        member_count=member_count,
        created_at=space.created_at,
        updated_at=space.updated_at,
        is_owner=space.owner_id == current_user.id,
        can_upload=user_can_access_team_space(db, space.id, current_user),
    )


@router.get("", response_model=list[TeamSpaceResponse])
def list_team_spaces(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[TeamSpaceResponse]:
    query = db.query(TeamSpace).filter(TeamSpace.status == "active")
    if current_user.role != "admin":
        query = (
            query.outerjoin(
                TeamSpaceMember,
                TeamSpaceMember.team_space_id == TeamSpace.id,
            )
            .filter(
                or_(
                    TeamSpace.owner_id == current_user.id,
                    TeamSpaceMember.user_id == current_user.id,
                )
            )
        )
    spaces = query.order_by(TeamSpace.created_at.desc(), TeamSpace.id.desc()).all()
    return [_space_response(db, space, current_user) for space in spaces]


@router.post("", response_model=TeamSpaceResponse, status_code=status.HTTP_201_CREATED)
def create_team_space_api(
    payload: TeamSpaceCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> TeamSpaceResponse:
    name = payload.name.strip()
    if not name:
        raise HTTPException(status_code=422, detail="Team space name cannot be blank")
    duplicate = (
        db.query(TeamSpace)
        .filter(
            TeamSpace.owner_id == current_user.id,
            TeamSpace.name == name,
            TeamSpace.status == "active",
        )
        .first()
    )
    if duplicate is not None:
        raise HTTPException(status_code=409, detail="A team space with the same name already exists")
    space = create_team_space(
        db,
        owner=current_user,
        name=name,
        description=payload.description,
    )
    record_audit(
        db,
        actor_id=current_user.id,
        action="create",
        resource_type="team_space",
        resource_id=str(space.id),
    )
    db.commit()
    db.refresh(space)
    return _space_response(db, space, current_user)


@router.patch("/{team_space_id}", response_model=TeamSpaceResponse)
def update_team_space_api(
    team_space_id: int,
    payload: TeamSpaceUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> TeamSpaceResponse:
    space = _get_active_space(db, team_space_id)
    if not user_can_manage_team_space(db, space.id, current_user):
        raise HTTPException(status_code=403, detail="只有空间所有者或管理员可以编辑团队空间")

    fields = payload.model_fields_set
    if not fields:
        return _space_response(db, space, current_user)

    name = space.name
    if "name" in fields:
        name = (payload.name or "").strip()
        if not name:
            raise HTTPException(status_code=422, detail="Team space name cannot be blank")
        duplicate = (
            db.query(TeamSpace)
            .filter(
                TeamSpace.owner_id == space.owner_id,
                TeamSpace.name == name,
                TeamSpace.id != space.id,
                TeamSpace.status == "active",
            )
            .first()
        )
        if duplicate is not None:
            raise HTTPException(status_code=409, detail="A team space with the same name already exists")

    description = space.description
    if "description" in fields:
        description = (payload.description or "").strip() or None

    space.name = name
    space.description = description
    knowledge_base = db.get(KnowledgeBase, space.knowledge_base_id)
    if knowledge_base is not None:
        knowledge_base.name = f"{name}（团队空间文档库）"
        knowledge_base.description = description or "团队空间内部文档库"

    record_audit(
        db,
        actor_id=current_user.id,
        action="update",
        resource_type="team_space",
        resource_id=str(space.id),
    )
    db.commit()
    db.refresh(space)
    return _space_response(db, space, current_user)


def _get_active_space(db: Session, team_space_id: int) -> TeamSpace:
    space = (
        db.query(TeamSpace)
        .filter(TeamSpace.id == team_space_id, TeamSpace.status == "active")
        .first()
    )
    if space is None:
        raise HTTPException(status_code=404, detail="Team space not found")
    return space


@router.get("/{team_space_id}/members", response_model=list[TeamSpaceMemberResponse])
def list_team_space_members(
    team_space_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[TeamSpaceMemberResponse]:
    space = _get_active_space(db, team_space_id)
    if not user_can_access_team_space(db, space.id, current_user):
        raise HTTPException(status_code=403, detail="无权访问该团队空间")

    owner = db.get(User, space.owner_id)
    members = [
        TeamSpaceMemberResponse(
            user_id=owner.id,
            username=owner.username,
            email=owner.email,
            role="owner",
            is_owner=True,
            created_at=space.created_at,
        )
    ] if owner is not None else []
    rows = (
        db.query(TeamSpaceMember, User)
        .join(User, User.id == TeamSpaceMember.user_id)
        .filter(
            TeamSpaceMember.team_space_id == space.id,
            User.is_active.is_(True),
            User.status == "active",
        )
        .order_by(User.username.asc(), User.id.asc())
        .all()
    )
    members.extend(
        TeamSpaceMemberResponse(
            user_id=user.id,
            username=user.username,
            email=user.email,
            role=member.role,
            is_owner=False,
            created_at=member.created_at,
        )
        for member, user in rows
    )
    return members


@router.get("/{team_space_id}/member-candidates", response_model=list[TeamSpaceMemberCandidate])
def list_team_space_member_candidates(
    team_space_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[TeamSpaceMemberCandidate]:
    space = _get_active_space(db, team_space_id)
    if not user_can_manage_team_space(db, space.id, current_user):
        raise HTTPException(status_code=403, detail="只有空间所有者或管理员可以添加成员")

    existing_ids = {
        user_id
        for (user_id,) in db.query(TeamSpaceMember.user_id)
        .filter(TeamSpaceMember.team_space_id == space.id)
        .all()
    }
    existing_ids.add(space.owner_id)
    users = (
        db.query(User)
        .filter(
            User.is_active.is_(True),
            User.status == "active",
            ~User.id.in_(existing_ids),
        )
        .order_by(User.username.asc(), User.id.asc())
        .all()
    )
    return [
        TeamSpaceMemberCandidate(user_id=user.id, username=user.username, email=user.email)
        for user in users
    ]


@router.post(
    "/{team_space_id}/members",
    response_model=TeamSpaceMemberResponse,
    status_code=status.HTTP_201_CREATED,
)
def add_team_space_member(
    team_space_id: int,
    payload: TeamSpaceMemberCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> TeamSpaceMemberResponse:
    space = _get_active_space(db, team_space_id)
    if not user_can_manage_team_space(db, space.id, current_user):
        raise HTTPException(status_code=403, detail="只有空间所有者或管理员可以添加成员")
    if payload.user_id == space.owner_id:
        raise HTTPException(status_code=409, detail="空间所有者已经是成员")
    user = (
        db.query(User)
        .filter(
            User.id == payload.user_id,
            User.is_active.is_(True),
            User.status == "active",
        )
        .first()
    )
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    if (
        db.query(TeamSpaceMember.id)
        .filter(
            TeamSpaceMember.team_space_id == space.id,
            TeamSpaceMember.user_id == user.id,
        )
        .first()
        is not None
    ):
        raise HTTPException(status_code=409, detail="用户已经在团队空间中")

    member = TeamSpaceMember(team_space_id=space.id, user_id=user.id, role="member")
    db.add(member)
    record_audit(
        db,
        actor_id=current_user.id,
        action="add_member",
        resource_type="team_space",
        resource_id=str(space.id),
    )
    db.commit()
    db.refresh(member)
    return TeamSpaceMemberResponse(
        user_id=user.id,
        username=user.username,
        email=user.email,
        role=member.role,
        is_owner=False,
        created_at=member.created_at,
    )


@router.delete("/{team_space_id}/members/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
def remove_team_space_member(
    team_space_id: int,
    user_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> None:
    space = _get_active_space(db, team_space_id)
    if not user_can_manage_team_space(db, space.id, current_user):
        raise HTTPException(status_code=403, detail="只有空间所有者或管理员可以移除成员")
    member = (
        db.query(TeamSpaceMember)
        .filter(
            TeamSpaceMember.team_space_id == space.id,
            TeamSpaceMember.user_id == user_id,
        )
        .first()
    )
    if member is None:
        raise HTTPException(status_code=404, detail="Team space member not found")
    db.delete(member)
    record_audit(
        db,
        actor_id=current_user.id,
        action="remove_member",
        resource_type="team_space",
        resource_id=str(space.id),
    )
    db.commit()
