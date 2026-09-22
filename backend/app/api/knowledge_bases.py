from fastapi import APIRouter, Depends, status
from sqlalchemy import case, or_
from sqlalchemy.orm import Session

from app.api.dependencies import get_current_user
from app.db.session import get_db
from app.models import Document, KnowledgeBase, User
from app.schemas.knowledge_base import KnowledgeBaseCreate, KnowledgeBaseResponse
from app.services.audit import record_audit
from app.services.team_spaces import user_can_access_knowledge_base


router = APIRouter(prefix="/knowledge-bases", tags=["knowledge-bases"])


@router.get("", response_model=list[KnowledgeBaseResponse])
def list_knowledge_bases(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[dict]:
    knowledge_bases = (
        db.query(KnowledgeBase)
        .filter(
            KnowledgeBase.status == "active",
            KnowledgeBase.is_team_space.is_(False),
        )
        .order_by(
            case((KnowledgeBase.owner_id == current_user.id, 0), else_=1),
            KnowledgeBase.created_at.desc(),
            KnowledgeBase.id.desc(),
        )
        .all()
    )
    knowledge_bases = [
        item for item in knowledge_bases
        if user_can_access_knowledge_base(db, item, current_user)
    ]
    result = []
    for knowledge_base in knowledge_bases:
        document_filters = [
            Document.knowledge_base_id == knowledge_base.id,
            Document.deleted_at.is_(None),
            Document.status != "deleted",
        ]
        if current_user.role != "admin":
            document_filters.append(
                or_(
                    Document.visibility == "public",
                    Document.owner_id == current_user.id,
                )
            )
        result.append(
            {
                "id": knowledge_base.id,
                "name": knowledge_base.name,
                "description": knowledge_base.description,
                "owner_id": knowledge_base.owner_id,
                "upload_policy": knowledge_base.upload_policy,
                "view_policy": knowledge_base.view_policy,
                "visibility": knowledge_base.visibility,
                "status": knowledge_base.status,
                "created_at": knowledge_base.created_at,
                "updated_at": knowledge_base.updated_at,
                "owner_username": (
                    db.get(User, knowledge_base.owner_id).username
                    if db.get(User, knowledge_base.owner_id) is not None
                    else "未知用户"
                ),
                "document_count": (
                    db.query(Document)
                    .filter(*document_filters)
                    .count()
                ),
                "is_owner": knowledge_base.owner_id == current_user.id,
            }
        )
    return result


@router.post("", response_model=KnowledgeBaseResponse, status_code=status.HTTP_201_CREATED)
def create_knowledge_base(
    payload: KnowledgeBaseCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> KnowledgeBase:
    knowledge_base = KnowledgeBase(
        name=payload.name.strip(),
        description=payload.description,
        owner_id=current_user.id,
        upload_policy=payload.upload_policy,
        view_policy="all_users",
        visibility="public",
        is_team_space=False,
        status="active",
    )
    db.add(knowledge_base)
    db.flush()
    record_audit(
        db,
        actor_id=current_user.id,
        action="create",
        resource_type="knowledge_base",
        resource_id=str(knowledge_base.id),
    )
    db.commit()
    db.refresh(knowledge_base)
    return knowledge_base
