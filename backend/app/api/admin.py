from __future__ import annotations

from datetime import datetime, timezone

from fastapi import APIRouter, Depends, HTTPException, Request, status
from sqlalchemy import func
from sqlalchemy.orm import Session

from app.api.dependencies import get_current_admin_user
from app.core.security import hash_password, normalize_token_policy
from app.db.session import get_db
from app.models import (
    AuditLog,
    Document,
    KnowledgeBase,
    KnowledgeBaseViewer,
    McpToken,
    TeamSpace,
    User,
)
from app.schemas.admin import (
    AdminAuditLogResponse,
    AdminKnowledgeBaseResponse,
    AdminKnowledgeBaseUpdate,
    AdminUserCreate,
    AdminUserResponse,
    AdminUserUpdate,
    AdminSystemSettingsResponse,
    AdminSystemSettingsUpdate,
)
from app.services.audit import record_audit
from app.services.system_settings import (
    get_recycle_bin_retention_days,
    set_recycle_bin_retention_days,
)


router = APIRouter(prefix="/admin", tags=["admin"])


def _knowledge_base_response(db: Session, knowledge_base: KnowledgeBase) -> AdminKnowledgeBaseResponse:
    owner = db.get(User, knowledge_base.owner_id)
    document_count = (
        db.query(func.count(Document.id))
        .filter(
            Document.knowledge_base_id == knowledge_base.id,
            Document.deleted_at.is_(None),
            Document.status != "deleted",
        )
        .scalar()
        or 0
    )
    viewer_rows = (
        db.query(KnowledgeBaseViewer, User)
        .join(User, User.id == KnowledgeBaseViewer.user_id)
        .filter(KnowledgeBaseViewer.knowledge_base_id == knowledge_base.id)
        .order_by(User.username.asc(), User.id.asc())
        .all()
    )
    return AdminKnowledgeBaseResponse(
        id=knowledge_base.id,
        name=knowledge_base.name,
        description=knowledge_base.description,
        owner_id=knowledge_base.owner_id,
        owner_username=owner.username if owner is not None else None,
        upload_policy=knowledge_base.upload_policy,
        view_policy=knowledge_base.view_policy,
        viewer_ids=[viewer.user_id for viewer, _ in viewer_rows],
        viewer_usernames=[user.username for _, user in viewer_rows],
        visibility=knowledge_base.visibility,
        status=knowledge_base.status,
        document_count=int(document_count),
        created_at=knowledge_base.created_at,
        updated_at=knowledge_base.updated_at,
    )


@router.get("/knowledge-bases", response_model=list[AdminKnowledgeBaseResponse])
def list_knowledge_bases(
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin_user),
) -> list[AdminKnowledgeBaseResponse]:
    knowledge_bases = (
        db.query(KnowledgeBase)
        .filter(
            KnowledgeBase.status == "active",
            KnowledgeBase.is_team_space.is_(False),
        )
        .order_by(KnowledgeBase.created_at.desc(), KnowledgeBase.id.desc())
        .all()
    )
    return [_knowledge_base_response(db, item) for item in knowledge_bases]


@router.patch("/knowledge-bases/{knowledge_base_id}", response_model=AdminKnowledgeBaseResponse)
def update_knowledge_base(
    knowledge_base_id: int,
    payload: AdminKnowledgeBaseUpdate,
    db: Session = Depends(get_db),
    current_admin: User = Depends(get_current_admin_user),
) -> AdminKnowledgeBaseResponse:
    knowledge_base = (
        db.query(KnowledgeBase)
        .filter(
            KnowledgeBase.id == knowledge_base_id,
            KnowledgeBase.status == "active",
            KnowledgeBase.is_team_space.is_(False),
        )
        .first()
    )
    if knowledge_base is None:
        raise HTTPException(status_code=404, detail="Knowledge base not found")

    fields = payload.model_fields_set
    if "upload_policy" in fields and payload.upload_policy is not None:
        knowledge_base.upload_policy = payload.upload_policy

    if "view_policy" in fields and payload.view_policy is not None:
        viewer_ids = sorted(set(payload.viewer_ids))
        if knowledge_base.owner_id in viewer_ids:
            viewer_ids.remove(knowledge_base.owner_id)
        if viewer_ids:
            valid_ids = {
                user.id
                for user in db.query(User).filter(
                    User.id.in_(viewer_ids),
                    User.status == "active",
                    User.is_active.is_(True),
                ).all()
            }
            invalid_ids = sorted(set(viewer_ids) - valid_ids)
            if invalid_ids:
                raise HTTPException(status_code=422, detail="包含无效或已禁用的用户")

        knowledge_base.view_policy = payload.view_policy
        knowledge_base.visibility = (
            "public" if payload.view_policy == "all_users" else "private"
        )
        db.query(KnowledgeBaseViewer).filter(
            KnowledgeBaseViewer.knowledge_base_id == knowledge_base.id,
        ).delete(synchronize_session=False)
        if payload.view_policy == "selected_users":
            db.add_all(
                KnowledgeBaseViewer(
                    knowledge_base_id=knowledge_base.id,
                    user_id=user_id,
                )
                for user_id in viewer_ids
            )
    record_audit(
        db,
        actor_id=current_admin.id,
        action="admin_update_knowledge_base",
        resource_type="knowledge_base",
        resource_id=str(knowledge_base.id),
    )
    db.commit()
    db.refresh(knowledge_base)
    return _knowledge_base_response(db, knowledge_base)


@router.get("/settings", response_model=AdminSystemSettingsResponse)
def get_system_settings(
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin_user),
) -> AdminSystemSettingsResponse:
    return AdminSystemSettingsResponse(
        recycle_bin_retention_days=get_recycle_bin_retention_days(db),
    )


@router.patch("/settings", response_model=AdminSystemSettingsResponse)
def update_system_settings(
    payload: AdminSystemSettingsUpdate,
    db: Session = Depends(get_db),
    current_admin: User = Depends(get_current_admin_user),
) -> AdminSystemSettingsResponse:
    days = set_recycle_bin_retention_days(db, payload.recycle_bin_retention_days)
    record_audit(
        db,
        actor_id=current_admin.id,
        action="admin_update_settings",
        resource_type="system_settings",
        resource_id="recycle_bin_retention_days",
    )
    db.commit()
    return AdminSystemSettingsResponse(recycle_bin_retention_days=days)


def _user_response(db: Session, user: User) -> AdminUserResponse:
    active_count = (
        db.query(func.count(McpToken.id))
        .filter(
            McpToken.user_id == user.id,
            McpToken.revoked_at.is_(None),
        )
        .scalar()
        or 0
    )
    return AdminUserResponse(
        id=user.id,
        username=user.username,
        email=user.email,
        role=user.role,
        status=user.status,
        is_active=user.is_active,
        mcp_token_expire_policy=normalize_token_policy(user.mcp_token_expire_policy),
        created_at=user.created_at,
        active_mcp_token_count=int(active_count),
    )


@router.get("/users", response_model=list[AdminUserResponse])
def list_users(
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin_user),
) -> list[AdminUserResponse]:
    users = db.query(User).order_by(User.created_at.desc(), User.id.desc()).all()
    return [_user_response(db, user) for user in users]


@router.post("/users", response_model=AdminUserResponse, status_code=status.HTTP_201_CREATED)
def create_user(
    payload: AdminUserCreate,
    request: Request,
    db: Session = Depends(get_db),
    current_admin: User = Depends(get_current_admin_user),
) -> AdminUserResponse:
    username = payload.username.strip()
    if len(username) < 2:
        raise HTTPException(status_code=422, detail="Username must contain at least 2 characters")
    if db.query(User).filter(User.username == username).first() is not None:
        raise HTTPException(status_code=409, detail="Username already exists")
    if payload.email and db.query(User).filter(User.email == payload.email).first() is not None:
        raise HTTPException(status_code=409, detail="Email already exists")

    user = User(
        username=username,
        email=payload.email,
        password_hash=hash_password(payload.password),
        role=payload.role,
        status=payload.status,
        is_active=payload.status == "active",
        mcp_token_expire_policy=normalize_token_policy(payload.mcp_token_expire_policy),
    )
    db.add(user)
    db.flush()
    db.add(
        KnowledgeBase(
            name=f"{username} 的知识库",
            description="默认知识库",
            owner_id=user.id,
            visibility="public",
            status="active",
            is_team_space=False,
        )
    )
    from app.services.team_spaces import create_team_space

    create_team_space(
        db,
        owner=user,
        name=f"{username}的团队空间",
        description="默认团队协作空间",
    )
    record_audit(
        db,
        actor_id=current_admin.id,
        action="admin_create_user",
        resource_type="user",
        resource_id=str(user.id),
        ip_address=request.client.host if request.client else None,
        user_agent=request.headers.get("user-agent"),
    )
    db.commit()
    db.refresh(user)
    return _user_response(db, user)


@router.patch("/users/{user_id}", response_model=AdminUserResponse)
def update_user(
    user_id: int,
    payload: AdminUserUpdate,
    db: Session = Depends(get_db),
    current_admin: User = Depends(get_current_admin_user),
) -> AdminUserResponse:
    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    fields = payload.model_fields_set
    if user.id == current_admin.id and (
        payload.role == "user"
        or payload.is_active is False
        or payload.status == "disabled"
    ):
        raise HTTPException(status_code=409, detail="You cannot disable your own administrator account")

    if "username" in fields:
        username = (payload.username or "").strip()
        if len(username) < 2:
            raise HTTPException(status_code=422, detail="Username must contain at least 2 characters")
        existing = (
            db.query(User)
            .filter(User.username == username, User.id != user.id)
            .first()
        )
        if existing is not None:
            raise HTTPException(status_code=409, detail="Username already exists")
        user.username = username
    if "password" in fields:
        if not payload.password:
            raise HTTPException(status_code=422, detail="Password cannot be empty")
        user.password_hash = hash_password(payload.password)
    if "role" in fields and payload.role is not None:
        user.role = payload.role
    if "status" in fields and payload.status is not None:
        user.status = payload.status
        user.is_active = payload.status == "active"
    if "is_active" in fields and payload.is_active is not None:
        user.is_active = payload.is_active
        user.status = "active" if payload.is_active else "disabled"
    if "mcp_token_expire_policy" in fields:
        user.mcp_token_expire_policy = normalize_token_policy(payload.mcp_token_expire_policy)

    if {"password", "status", "is_active", "role", "mcp_token_expire_policy"} & fields:
        db.query(McpToken).filter(
            McpToken.user_id == user.id,
            McpToken.revoked_at.is_(None),
        ).update({"revoked_at": datetime.now(timezone.utc)})

    record_audit(
        db,
        actor_id=current_admin.id,
        action="admin_update_user",
        resource_type="user",
        resource_id=str(user.id),
    )
    db.commit()
    db.refresh(user)
    return _user_response(db, user)


@router.get("/logs", response_model=list[AdminAuditLogResponse])
def list_logs(
    category: str = "all",
    limit: int = 100,
    db: Session = Depends(get_db),
    _: User = Depends(get_current_admin_user),
) -> list[AdminAuditLogResponse]:
    safe_limit = max(1, min(limit, 500))
    query = (
        db.query(AuditLog, User.username)
        .outerjoin(User, User.id == AuditLog.actor_id)
    )
    if category == "login":
        query = query.filter(AuditLog.action.in_(["login", "register"]))
    elif category == "agent":
        query = query.filter(AuditLog.action == "mcp_call")
    elif category == "operation":
        query = query.filter(~AuditLog.action.in_(["login", "register", "mcp_call"]))
    elif category != "all":
        raise HTTPException(status_code=422, detail="Unknown log category")

    rows = query.order_by(AuditLog.created_at.desc(), AuditLog.id.desc()).limit(safe_limit).all()
    return [
        AdminAuditLogResponse(
            id=log.id,
            actor_id=log.actor_id,
            actor_username=username,
            action=log.action,
            resource_type=log.resource_type,
            resource_id=log.resource_id,
            result=log.result,
            error_message=log.error_message,
            ip_address=log.ip_address,
            user_agent=log.user_agent,
            created_at=log.created_at,
        )
        for log, username in rows
    ]
