from datetime import datetime, timezone

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.dependencies import get_current_user
from app.core.config import settings
from app.db.session import get_db
from app.models import Document, Folder, KnowledgeBase, TeamSpace, User
from app.schemas.folder import FolderCreate, FolderResponse, FolderUpdate
from app.schemas.copy import CopyRequest, CopyResponse
from app.services.audit import record_audit
from app.services.container import storage
from app.services.copy_service import (
    copy_folder as copy_folder_tree,
    resolve_copy_target,
)
from app.services.team_spaces import (
    user_can_access_knowledge_base,
    user_can_access_team_space,
)


router = APIRouter(prefix="/folders", tags=["folders"])


def _folder_response(
    folder: Folder,
    current_user: User,
    db: Session,
) -> FolderResponse:
    owner = db.get(User, folder.owner_id)
    return FolderResponse(
        id=folder.id,
        knowledge_base_id=folder.knowledge_base_id,
        team_space_id=folder.team_space_id,
        owner_id=folder.owner_id,
        owner_username=owner.username if owner is not None else None,
        parent_id=folder.parent_id,
        name=folder.name,
        visibility=folder.visibility,
        status=folder.status,
        deleted_at=folder.deleted_at,
        created_at=folder.created_at,
        updated_at=folder.updated_at,
        is_owner=folder.owner_id == current_user.id,
    )


def _ensure_folder_storage(folder: Folder) -> None:
    storage.ensure_dir(f"folders/{folder.id}")


def _get_knowledge_base(db: Session, knowledge_base_id: int) -> KnowledgeBase:
    knowledge_base = (
        db.query(KnowledgeBase)
        .filter(KnowledgeBase.id == knowledge_base_id, KnowledgeBase.status == "active")
        .first()
    )
    if knowledge_base is None:
        raise HTTPException(status_code=404, detail="Knowledge base not found")
    return knowledge_base


def _get_owned_knowledge_base(
    db: Session,
    knowledge_base_id: int,
    current_user: User,
) -> KnowledgeBase:
    knowledge_base = (
        db.query(KnowledgeBase)
        .filter(
            KnowledgeBase.id == knowledge_base_id,
            KnowledgeBase.owner_id == current_user.id,
            KnowledgeBase.status == "active",
        )
        .first()
    )
    if knowledge_base is None:
        knowledge_base = _get_knowledge_base(db, knowledge_base_id)
    if knowledge_base.is_team_space:
        if not user_can_access_knowledge_base(db, knowledge_base, current_user):
            raise HTTPException(status_code=403, detail="无权在该团队空间创建文件夹")
        return knowledge_base
    if knowledge_base.owner_id != current_user.id:
        raise HTTPException(status_code=403, detail="Only the knowledge base owner can create folders")
    return knowledge_base


def _get_folder_scope(
    db: Session,
    *,
    knowledge_base_id: int | None,
    team_space_id: int | None,
    current_user: User,
) -> tuple[int, int | None]:
    if team_space_id is not None:
        if knowledge_base_id is not None:
            raise HTTPException(
                status_code=409,
                detail="团队空间文件夹不能同时指定知识库",
            )
        space = (
            db.query(TeamSpace)
            .filter(
                TeamSpace.id == team_space_id,
                TeamSpace.status == "active",
            )
            .first()
        )
        if space is None:
            raise HTTPException(status_code=404, detail="Team space not found")
        if not user_can_access_team_space(db, space.id, current_user):
            raise HTTPException(status_code=403, detail="无权在该团队空间创建文件夹")
        return space.knowledge_base_id, space.id

    if knowledge_base_id is None:
        raise HTTPException(status_code=422, detail="必须指定知识库或团队空间")
    knowledge_base = _get_owned_knowledge_base(db, knowledge_base_id, current_user)
    return knowledge_base.id, None


def _get_active_folder(
    db: Session,
    folder_id: int,
    current_user: User,
    *,
    knowledge_base_id: int | None = None,
    team_space_id: int | None = None,
) -> Folder:
    folder_visibility = (
        True
        if current_user.role == "admin"
        else (Folder.visibility == "public") | (Folder.owner_id == current_user.id)
    )
    folder = (
        db.query(Folder)
        .filter(
            Folder.id == folder_id,
            Folder.deleted_at.is_(None),
            Folder.status == "active",
            folder_visibility,
            *(
                [Folder.knowledge_base_id == knowledge_base_id]
                if knowledge_base_id is not None
                else []
            ),
            *(
                [Folder.team_space_id == team_space_id]
                if team_space_id is not None
                else [Folder.team_space_id.is_(None)]
            ),
        )
        .first()
    )
    if folder is None:
        raise HTTPException(status_code=404, detail="Folder not found")
    knowledge_base = db.get(KnowledgeBase, folder.knowledge_base_id)
    if knowledge_base is None or not user_can_access_knowledge_base(db, knowledge_base, current_user):
        raise HTTPException(status_code=404, detail="Folder not found")
    return folder


def _folder_depth(db: Session, parent_id: int | None) -> int:
    depth = 0
    visited: set[int] = set()
    current_id = parent_id
    while current_id is not None:
        if current_id in visited:
            raise HTTPException(status_code=409, detail="Folder hierarchy contains a cycle")
        visited.add(current_id)
        parent = db.query(Folder).filter(Folder.id == current_id).first()
        if parent is None or parent.deleted_at is not None or parent.status != "active":
            raise HTTPException(status_code=404, detail="Parent folder not found")
        depth += 1
        current_id = parent.parent_id
    return depth


def _folder_subtree_height(db: Session, folder_id: int) -> int:
    child_ids = [
        item.id
        for item in db.query(Folder.id)
        .filter(
            Folder.parent_id == folder_id,
            Folder.deleted_at.is_(None),
            Folder.status == "active",
        )
        .all()
    ]
    if not child_ids:
        return 1
    return 1 + max(_folder_subtree_height(db, child_id) for child_id in child_ids)


def _is_descendant(db: Session, folder_id: int, possible_descendant_id: int | None) -> bool:
    current_id = possible_descendant_id
    visited: set[int] = set()
    while current_id is not None:
        if current_id in visited:
            raise HTTPException(status_code=409, detail="Folder hierarchy contains a cycle")
        if current_id == folder_id:
            return True
        visited.add(current_id)
        parent = db.query(Folder).filter(Folder.id == current_id).first()
        if parent is None:
            return False
        current_id = parent.parent_id
    return False


@router.get("", response_model=list[FolderResponse])
def list_folders(
    knowledge_base_id: int | None = None,
    team_space_id: int | None = None,
    include_deleted: bool = False,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[FolderResponse]:
    query = db.query(Folder)
    if team_space_id is not None:
        space = (
            db.query(TeamSpace)
            .filter(
                TeamSpace.id == team_space_id,
                TeamSpace.status == "active",
            )
            .first()
        )
        if space is None:
            raise HTTPException(status_code=404, detail="Team space not found")
        if not user_can_access_team_space(db, space.id, current_user):
            raise HTTPException(status_code=403, detail="无权访问该团队空间")
        if knowledge_base_id is not None and knowledge_base_id != space.knowledge_base_id:
            raise HTTPException(status_code=409, detail="团队空间与知识库不匹配")
        query = query.filter(Folder.team_space_id == team_space_id)
    elif knowledge_base_id is not None:
        knowledge_base = _get_knowledge_base(db, knowledge_base_id)
        if not user_can_access_knowledge_base(db, knowledge_base, current_user):
            raise HTTPException(status_code=403, detail="无权访问该知识库")
        query = query.filter(
            Folder.knowledge_base_id == knowledge_base_id,
            Folder.team_space_id.is_(None),
        )
    else:
        query = query.filter(Folder.team_space_id.is_(None))
    if include_deleted:
        query = query.filter(Folder.owner_id == current_user.id, Folder.deleted_at.isnot(None))
    else:
        folder_visibility = (
            True
            if current_user.role == "admin"
            else (Folder.visibility == "public") | (Folder.owner_id == current_user.id)
        )
        query = query.filter(
            Folder.deleted_at.is_(None),
            Folder.status == "active",
            folder_visibility,
        )

    folders = query.order_by(Folder.parent_id.asc(), Folder.name.asc()).all()
    folders = [
        folder
        for folder in folders
        if (
            (knowledge_base := db.get(KnowledgeBase, folder.knowledge_base_id)) is not None
            and user_can_access_knowledge_base(db, knowledge_base, current_user)
        )
    ]
    for folder in folders:
        _ensure_folder_storage(folder)
    return [_folder_response(folder, current_user, db) for folder in folders]


@router.post("", response_model=FolderResponse, status_code=status.HTTP_201_CREATED)
def create_folder(
    payload: FolderCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> FolderResponse:
    knowledge_base_id, team_space_id = _get_folder_scope(
        db,
        knowledge_base_id=payload.knowledge_base_id,
        team_space_id=payload.team_space_id,
        current_user=current_user,
    )
    name = payload.name.strip()
    if not name:
        raise HTTPException(status_code=422, detail="Folder name cannot be blank")

    if payload.parent_id is not None:
        parent = _get_active_folder(
            db,
            payload.parent_id,
            current_user,
            knowledge_base_id=knowledge_base_id,
            team_space_id=team_space_id,
        )
        if parent.knowledge_base_id != knowledge_base_id:
            raise HTTPException(status_code=409, detail="Parent folder belongs to another knowledge base")
        if _folder_depth(db, payload.parent_id) >= settings.max_folder_depth:
            raise HTTPException(status_code=409, detail="Maximum folder depth exceeded")

    sibling_exists = (
        db.query(Folder)
        .filter(
            Folder.knowledge_base_id == knowledge_base_id,
            *(
                [Folder.team_space_id == team_space_id]
                if team_space_id is not None
                else [Folder.team_space_id.is_(None)]
            ),
            Folder.parent_id == payload.parent_id,
            Folder.name == name,
            Folder.deleted_at.is_(None),
            Folder.status == "active",
        )
        .first()
    )
    if sibling_exists is not None:
        raise HTTPException(status_code=409, detail="A folder with the same name already exists here")

    folder = Folder(
        knowledge_base_id=knowledge_base_id,
        team_space_id=team_space_id,
        owner_id=current_user.id,
        parent_id=payload.parent_id,
        name=name,
        visibility="public",
        status="active",
    )
    db.add(folder)
    db.flush()
    _ensure_folder_storage(folder)
    record_audit(
        db,
        actor_id=current_user.id,
        action="create",
        resource_type="folder",
        resource_id=str(folder.id),
    )
    db.commit()
    db.refresh(folder)
    return _folder_response(folder, current_user, db)


@router.patch("/{folder_id}", response_model=FolderResponse)
def update_folder(
    folder_id: int,
    payload: FolderUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> FolderResponse:
    folder = (
        db.query(Folder)
        .filter(Folder.id == folder_id, Folder.owner_id == current_user.id)
        .first()
    )
    if folder is None:
        raise HTTPException(status_code=404, detail="Folder not found")
    if folder.deleted_at is not None or folder.status != "active":
        raise HTTPException(status_code=409, detail="Deleted folder cannot be renamed")

    fields = payload.model_fields_set
    if not fields:
        return _folder_response(folder, current_user, db)

    name = folder.name
    if "name" in fields:
        name = (payload.name or "").strip()
        if not name:
            raise HTTPException(status_code=422, detail="Folder name cannot be blank")

    parent_id = folder.parent_id
    moving = "parent_id" in fields and payload.parent_id != folder.parent_id
    if moving:
        parent_id = payload.parent_id
        if parent_id is not None:
            parent = _get_active_folder(
                db,
                parent_id,
                current_user,
                knowledge_base_id=folder.knowledge_base_id,
                team_space_id=folder.team_space_id,
            )
            if parent.knowledge_base_id != folder.knowledge_base_id:
                raise HTTPException(status_code=409, detail="Parent folder belongs to another knowledge base")
            if _is_descendant(db, folder.id, parent_id):
                raise HTTPException(status_code=409, detail="A folder cannot be moved into itself or its descendants")
            new_depth = _folder_depth(db, parent_id) + 1
        else:
            new_depth = 1
        if new_depth + _folder_subtree_height(db, folder.id) - 1 > settings.max_folder_depth:
            raise HTTPException(status_code=409, detail="Maximum folder depth exceeded")

    duplicate = (
        db.query(Folder)
        .filter(
            Folder.id != folder.id,
            Folder.knowledge_base_id == folder.knowledge_base_id,
            *(
                [Folder.team_space_id == folder.team_space_id]
                if folder.team_space_id is not None
                else [Folder.team_space_id.is_(None)]
            ),
            Folder.parent_id == parent_id,
            Folder.name == name,
            Folder.deleted_at.is_(None),
            Folder.status == "active",
        )
        .first()
    )
    if duplicate is not None:
        raise HTTPException(status_code=409, detail="A folder with the same name already exists here")

    renamed = "name" in fields and name != folder.name
    if renamed:
        folder.name = name
    if moving:
        folder.parent_id = parent_id
    if renamed:
        record_audit(
            db,
            actor_id=current_user.id,
            action="update",
            resource_type="folder",
            resource_id=str(folder.id),
        )
    if moving:
        record_audit(
            db,
            actor_id=current_user.id,
            action="move",
            resource_type="folder",
            resource_id=str(folder.id),
        )
    db.commit()
    db.refresh(folder)
    return _folder_response(folder, current_user, db)


@router.post("/{folder_id}/copy", response_model=CopyResponse)
def copy_folder_api(
    folder_id: int,
    payload: CopyRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> CopyResponse:
    target = resolve_copy_target(
        db,
        knowledge_base_id=payload.knowledge_base_id,
        team_space_id=payload.team_space_id,
        folder_id=payload.folder_id,
        current_user=current_user,
    )
    copied_storage_keys: list[str] = []
    copied_folder_ids: list[int] = []
    try:
        (
            copied,
            copied_documents,
            copied_folders,
            copied_storage_keys,
            copied_folder_ids,
        ) = copy_folder_tree(
            db,
            folder_id=folder_id,
            target=target,
            current_user=current_user,
            storage=storage,
        )
        record_audit(
            db,
            actor_id=current_user.id,
            action="copy",
            resource_type="folder",
            resource_id=str(copied.id),
        )
        db.commit()
        db.refresh(copied)
        return CopyResponse(
            kind="folder",
            id=copied.id,
            name=copied.name,
            copied_documents=copied_documents,
            copied_folders=copied_folders,
        )
    except Exception:
        db.rollback()
        for key in copied_storage_keys:
            storage.delete(key)
        for created_folder_id in copied_folder_ids:
            storage.delete_dir(f"folders/{created_folder_id}")
        raise


@router.delete("/{folder_id}", response_model=FolderResponse)
def delete_folder(
    folder_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> FolderResponse:
    folder = (
        db.query(Folder)
        .filter(Folder.id == folder_id, Folder.owner_id == current_user.id)
        .first()
    )
    if folder is None:
        raise HTTPException(status_code=404, detail="Folder not found")
    if folder.deleted_at is not None:
        return _folder_response(folder, current_user, db)

    has_children = (
        db.query(Folder)
        .filter(
            Folder.parent_id == folder.id,
            Folder.deleted_at.is_(None),
            Folder.status == "active",
        )
        .first()
        is not None
    )
    has_documents = (
        db.query(Document)
        .filter(
            Document.folder_id == folder.id,
            Document.deleted_at.is_(None),
            Document.status != "deleted",
        )
        .first()
        is not None
    )
    if has_children or has_documents:
        raise HTTPException(status_code=409, detail="Only empty folders can be deleted")

    folder.deleted_at = datetime.now(timezone.utc)
    folder.status = "deleted"
    storage.delete_dir(f"folders/{folder.id}")
    record_audit(
        db,
        actor_id=current_user.id,
        action="delete",
        resource_type="folder",
        resource_id=str(folder.id),
    )
    db.commit()
    db.refresh(folder)
    return _folder_response(folder, current_user, db)
