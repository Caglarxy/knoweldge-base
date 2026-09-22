from datetime import datetime, timedelta, timezone

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.dependencies import get_current_user
from app.db.session import get_db
from app.models import Document, Folder, KnowledgeBase, User
from app.schemas.recycle_bin import RecycleBinItem
from app.services.audit import record_audit
from app.services.container import storage
from app.services.system_settings import get_recycle_bin_retention_days
from app.services.team_spaces import user_can_access_knowledge_base


router = APIRouter(prefix="/recycle-bin", tags=["recycle-bin"])


def _as_utc(value: datetime) -> datetime:
    return (
        value.replace(tzinfo=timezone.utc)
        if value.tzinfo is None
        else value.astimezone(timezone.utc)
    )


def _expires_at(db: Session, deleted_at: datetime) -> datetime:
    return _as_utc(deleted_at) + timedelta(days=get_recycle_bin_retention_days(db))


def _owner(db: Session, owner_id: int) -> User:
    return db.get(User, owner_id)


def _knowledge_base(db: Session, knowledge_base_id: int) -> KnowledgeBase:
    return db.get(KnowledgeBase, knowledge_base_id)


def _document_item(document: Document, db: Session, current_user: User) -> RecycleBinItem:
    knowledge_base = _knowledge_base(db, document.knowledge_base_id)
    owner = _owner(db, document.owner_id)
    if document.deleted_at is None or knowledge_base is None or owner is None:
        raise HTTPException(status_code=404, detail="Recycle bin item not found")
    return RecycleBinItem(
        kind="document",
        id=document.id,
        knowledge_base_id=document.knowledge_base_id,
        knowledge_base_name=knowledge_base.name,
        owner_id=document.owner_id,
        owner_username=owner.username,
        name=document.name,
        original_filename=document.original_filename,
        extension=document.extension,
        mime_type=document.mime_type,
        size_bytes=document.size_bytes,
        deleted_at=_as_utc(document.deleted_at),
        expires_at=_expires_at(db, document.deleted_at),
        is_owner=document.owner_id == current_user.id,
    )


def _folder_item(folder: Folder, db: Session, current_user: User) -> RecycleBinItem:
    knowledge_base = _knowledge_base(db, folder.knowledge_base_id)
    owner = _owner(db, folder.owner_id)
    if folder.deleted_at is None or knowledge_base is None or owner is None:
        raise HTTPException(status_code=404, detail="Recycle bin item not found")
    return RecycleBinItem(
        kind="folder",
        id=folder.id,
        knowledge_base_id=folder.knowledge_base_id,
        knowledge_base_name=knowledge_base.name,
        owner_id=folder.owner_id,
        owner_username=owner.username,
        name=folder.name,
        size_bytes=0,
        deleted_at=_as_utc(folder.deleted_at),
        expires_at=_expires_at(db, folder.deleted_at),
        is_owner=folder.owner_id == current_user.id,
    )


def _owned_document(db: Session, resource_id: int, user: User) -> Document:
    query = db.query(Document).filter(
        Document.id == resource_id,
        Document.deleted_at.isnot(None),
        Document.status == "deleted",
    )
    if user.role != "admin":
        query = query.filter(Document.owner_id == user.id)
    item = query.first()
    if item is None:
        raise HTTPException(status_code=404, detail="Recycle bin item not found")
    return item


def _owned_folder(db: Session, resource_id: int, user: User) -> Folder:
    query = db.query(Folder).filter(
        Folder.id == resource_id,
        Folder.deleted_at.isnot(None),
        Folder.status == "deleted",
    )
    if user.role != "admin":
        query = query.filter(Folder.owner_id == user.id)
    item = query.first()
    if item is None:
        raise HTTPException(status_code=404, detail="Recycle bin item not found")
    return item


def _validate_kind(kind: str) -> None:
    if kind not in {"document", "folder"}:
        raise HTTPException(status_code=422, detail="Unsupported recycle bin item type")


@router.get("", response_model=list[RecycleBinItem])
def list_recycle_bin(
    knowledge_base_id: int | None = None,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[RecycleBinItem]:
    document_query = db.query(Document).filter(
        Document.deleted_at.isnot(None),
        Document.status == "deleted",
    )
    folder_query = db.query(Folder).filter(
        Folder.deleted_at.isnot(None),
        Folder.status == "deleted",
    )
    if current_user.role != "admin":
        document_query = document_query.filter(Document.owner_id == current_user.id)
        folder_query = folder_query.filter(Folder.owner_id == current_user.id)
    if knowledge_base_id is not None:
        knowledge_base = _knowledge_base(db, knowledge_base_id)
        if current_user.role != "admin" and not user_can_access_knowledge_base(db, knowledge_base, current_user):
            raise HTTPException(status_code=403, detail="无权访问该知识库")
        document_query = document_query.filter(Document.knowledge_base_id == knowledge_base_id)
        folder_query = folder_query.filter(Folder.knowledge_base_id == knowledge_base_id)

    items = [
        *(_document_item(item, db, current_user) for item in document_query.all()),
        *(_folder_item(item, db, current_user) for item in folder_query.all()),
    ]
    return sorted(items, key=lambda item: item.deleted_at, reverse=True)


@router.post("/{kind}/{resource_id}/restore")
def restore_recycle_item(
    kind: str,
    resource_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> dict[str, int | str]:
    _validate_kind(kind)
    if kind == "document":
        item = _owned_document(db, resource_id, current_user)
        item.deleted_at = None
        item.status = "ready"
        record_audit(db, actor_id=current_user.id, action="restore", resource_type=kind, resource_id=str(item.id))
        db.commit()
        return {"kind": kind, "id": item.id, "status": "restored"}

    item = _owned_folder(db, resource_id, current_user)
    if item.parent_id is not None:
        parent = db.get(Folder, item.parent_id)
        if parent is None or parent.deleted_at is not None or parent.status != "active":
            item.parent_id = None
    item.deleted_at = None
    item.status = "active"
    storage.ensure_dir(f"folders/{item.id}")
    record_audit(db, actor_id=current_user.id, action="restore", resource_type=kind, resource_id=str(item.id))
    db.commit()
    return {"kind": kind, "id": item.id, "status": "restored"}


def _purge_document(document: Document, db: Session, current_user: User) -> None:
    storage.delete_dir(f"documents/{document.id}")
    record_audit(db, actor_id=current_user.id, action="purge", resource_type="document", resource_id=str(document.id))
    db.delete(document)


def _purge_folder(folder: Folder, db: Session, current_user: User) -> None:
    for document in db.query(Document).filter(Document.folder_id == folder.id).all():
        document.folder_id = None
    storage.delete_dir(f"folders/{folder.id}")
    record_audit(db, actor_id=current_user.id, action="purge", resource_type="folder", resource_id=str(folder.id))
    db.delete(folder)


@router.delete("/{kind}/{resource_id}", status_code=status.HTTP_204_NO_CONTENT)
def purge_recycle_item(
    kind: str,
    resource_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> None:
    _validate_kind(kind)
    item = _owned_document(db, resource_id, current_user) if kind == "document" else _owned_folder(db, resource_id, current_user)
    if kind == "document":
        _purge_document(item, db, current_user)
    else:
        _purge_folder(item, db, current_user)
    db.commit()


@router.delete("", status_code=status.HTTP_204_NO_CONTENT)
def empty_recycle_bin(
    knowledge_base_id: int | None = None,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> None:
    document_query = db.query(Document).filter(
        Document.deleted_at.isnot(None),
        Document.status == "deleted",
    )
    folder_query = db.query(Folder).filter(
        Folder.deleted_at.isnot(None),
        Folder.status == "deleted",
    )
    if current_user.role != "admin":
        document_query = document_query.filter(Document.owner_id == current_user.id)
        folder_query = folder_query.filter(Folder.owner_id == current_user.id)
    if knowledge_base_id is not None:
        knowledge_base = _knowledge_base(db, knowledge_base_id)
        if current_user.role != "admin" and not user_can_access_knowledge_base(db, knowledge_base, current_user):
            raise HTTPException(status_code=403, detail="无权访问该知识库")
        document_query = document_query.filter(Document.knowledge_base_id == knowledge_base_id)
        folder_query = folder_query.filter(Folder.knowledge_base_id == knowledge_base_id)
    documents = document_query.all()
    folders = folder_query.all()
    for document in documents:
        _purge_document(document, db, current_user)
    for folder in folders:
        _purge_folder(folder, db, current_user)
    record_audit(db, actor_id=current_user.id, action="empty", resource_type="recycle_bin")
    db.commit()
