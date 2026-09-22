from sqlalchemy import func, or_
from sqlalchemy.orm import Session

from app.models import (
    Document,
    KnowledgeBase,
    KnowledgeBaseViewer,
    TeamSpace,
    TeamSpaceMember,
    User,
)


def create_team_space(
    db: Session,
    *,
    owner: User,
    name: str,
    description: str | None = None,
) -> TeamSpace:
    knowledge_base = KnowledgeBase(
        name=f"{name}（团队空间文档库）",
        description=description or "团队空间内部文档库",
        owner_id=owner.id,
        upload_policy="all_users",
        visibility="public",
        is_team_space=True,
        status="active",
    )
    db.add(knowledge_base)
    db.flush()
    team_space = TeamSpace(
        name=name,
        description=description,
        owner_id=owner.id,
        knowledge_base_id=knowledge_base.id,
        status="active",
    )
    db.add(team_space)
    db.flush()
    return team_space


def user_can_access_team_space(db: Session, team_space_id: int, user: User) -> bool:
    if user.role == "admin":
        return True
    return (
        db.query(TeamSpace.id)
        .outerjoin(
            TeamSpaceMember,
            TeamSpaceMember.team_space_id == TeamSpace.id,
        )
        .filter(
            TeamSpace.id == team_space_id,
            TeamSpace.status == "active",
            or_(
                TeamSpace.owner_id == user.id,
                TeamSpaceMember.user_id == user.id,
            ),
        )
        .first()
        is not None
    )


def user_can_manage_team_space(db: Session, team_space_id: int, user: User) -> bool:
    if user.role == "admin":
        return True
    return (
        db.query(TeamSpace.id)
        .filter(
            TeamSpace.id == team_space_id,
            TeamSpace.owner_id == user.id,
            TeamSpace.status == "active",
        )
        .first()
        is not None
    )


def user_can_access_knowledge_base(db: Session, knowledge_base: KnowledgeBase, user: User) -> bool:
    if knowledge_base.status != "active":
        return False
    if user.role == "admin":
        return True
    if not knowledge_base.is_team_space:
        if knowledge_base.owner_id == user.id:
            return True
        if knowledge_base.view_policy == "all_users":
            return True
        if knowledge_base.view_policy == "selected_users":
            return (
                db.query(KnowledgeBaseViewer.id)
                .filter(
                    KnowledgeBaseViewer.knowledge_base_id == knowledge_base.id,
                    KnowledgeBaseViewer.user_id == user.id,
                )
                .first()
                is not None
            )
        return False
    team_space = (
        db.query(TeamSpace)
        .filter(
            TeamSpace.knowledge_base_id == knowledge_base.id,
            TeamSpace.status == "active",
        )
        .first()
    )
    return team_space is not None and user_can_access_team_space(db, team_space.id, user)


def team_space_counts(db: Session, team_space: TeamSpace) -> tuple[int, int]:
    document_count = (
        db.query(func.count(Document.id))
        .filter(
            Document.knowledge_base_id == team_space.knowledge_base_id,
            Document.deleted_at.is_(None),
            Document.status != "deleted",
        )
        .scalar()
        or 0
    )
    member_count = (
        db.query(func.count(TeamSpaceMember.id))
        .filter(TeamSpaceMember.team_space_id == team_space.id)
        .scalar()
        or 0
    )
    return int(document_count), int(member_count) + 1
