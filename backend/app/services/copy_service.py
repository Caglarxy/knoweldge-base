from dataclasses import dataclass
from uuid import uuid4

from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.core.config import settings
from app.models import Document, Folder, KnowledgeBase, TeamSpace, User
from app.services.team_spaces import (
    user_can_access_knowledge_base,
    user_can_access_team_space,
)


@dataclass(frozen=True)
class CopyTarget:
    knowledge_base_id: int
    team_space_id: int | None
    folder_id: int | None


def _visible_document(document: Document, current_user: User) -> bool:
    return (
        current_user.role == "admin"
        or document.visibility == "public"
        or document.owner_id == current_user.id
    )


def _visible_folder(folder: Folder, current_user: User) -> bool:
    return (
        current_user.role == "admin"
        or folder.visibility == "public"
        or folder.owner_id == current_user.id
    )


def _active_knowledge_base(db: Session, knowledge_base_id: int) -> KnowledgeBase:
    knowledge_base = (
        db.query(KnowledgeBase)
        .filter(
            KnowledgeBase.id == knowledge_base_id,
            KnowledgeBase.status == "active",
        )
        .first()
    )
    if knowledge_base is None:
        raise HTTPException(status_code=404, detail="Knowledge base not found")
    return knowledge_base


def resolve_copy_target(
    db: Session,
    *,
    knowledge_base_id: int | None,
    team_space_id: int | None,
    folder_id: int | None,
    current_user: User,
) -> CopyTarget:
    if (knowledge_base_id is None) == (team_space_id is None):
        raise HTTPException(status_code=422, detail="必须指定一个目标知识库或团队空间")

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
            raise HTTPException(status_code=403, detail="无权复制到该团队空间")
        target_kb_id = space.knowledge_base_id
    else:
        target_kb = _active_knowledge_base(db, knowledge_base_id)
        if target_kb.is_team_space or target_kb.owner_id != current_user.id:
            raise HTTPException(status_code=403, detail="只能复制到自己的个人知识库")
        target_kb_id = target_kb.id

    if folder_id is not None:
        target_folder = (
            db.query(Folder)
            .filter(
                Folder.id == folder_id,
                Folder.knowledge_base_id == target_kb_id,
                Folder.team_space_id == team_space_id,
                Folder.deleted_at.is_(None),
                Folder.status == "active",
            )
            .first()
        )
        if target_folder is None or not _visible_folder(target_folder, current_user):
            raise HTTPException(status_code=404, detail="目标文件夹不存在或无权访问")

    return CopyTarget(
        knowledge_base_id=target_kb_id,
        team_space_id=team_space_id,
        folder_id=folder_id,
    )


def _source_folder(db: Session, folder_id: int, current_user: User) -> Folder:
    folder = (
        db.query(Folder)
        .filter(
            Folder.id == folder_id,
            Folder.deleted_at.is_(None),
            Folder.status == "active",
        )
        .first()
    )
    if folder is None or not _visible_folder(folder, current_user):
        raise HTTPException(status_code=404, detail="Folder not found")
    knowledge_base = db.get(KnowledgeBase, folder.knowledge_base_id)
    if knowledge_base is None or not user_can_access_knowledge_base(
        db, knowledge_base, current_user
    ):
        raise HTTPException(status_code=404, detail="Folder not found")
    return folder


def _source_document(db: Session, document_id: int, current_user: User) -> Document:
    document = (
        db.query(Document)
        .filter(
            Document.id == document_id,
            Document.deleted_at.is_(None),
            Document.status != "deleted",
        )
        .first()
    )
    if document is None or not _visible_document(document, current_user):
        raise HTTPException(status_code=404, detail="Document not found")
    knowledge_base = db.get(KnowledgeBase, document.knowledge_base_id)
    if knowledge_base is None or not user_can_access_knowledge_base(
        db, knowledge_base, current_user
    ):
        raise HTTPException(status_code=404, detail="Document not found")
    return document


def _folder_depth(db: Session, folder_id: int | None) -> int:
    depth = 0
    visited: set[int] = set()
    current_id = folder_id
    while current_id is not None:
        if current_id in visited:
            raise HTTPException(status_code=409, detail="Folder hierarchy contains a cycle")
        visited.add(current_id)
        folder = (
            db.query(Folder)
            .filter(
                Folder.id == current_id,
                Folder.deleted_at.is_(None),
                Folder.status == "active",
            )
            .first()
        )
        if folder is None:
            raise HTTPException(status_code=404, detail="目标文件夹不存在")
        depth += 1
        current_id = folder.parent_id
    return depth


def _copy_document(
    db: Session,
    *,
    source: Document,
    target: CopyTarget,
    current_user: User,
    storage,
    copied_storage_keys: list[str],
) -> Document:
    document = Document(
        knowledge_base_id=target.knowledge_base_id,
        owner_id=current_user.id,
        folder_id=target.folder_id,
        name=source.name,
        original_filename=source.original_filename,
        extension=source.extension,
        mime_type=source.mime_type,
        size_bytes=source.size_bytes,
        storage_key="pending",
        markdown_storage_key=None,
        tags=source.tags or "[]",
        status="ready",
        description=source.description,
        visibility="public",
    )
    db.add(document)
    db.flush()

    source_name = source.storage_key.rsplit("/", 1)[-1]
    target_key = f"documents/{document.id}/source/{uuid4().hex}-{source_name}"
    storage.copy(source.storage_key, target_key)
    copied_storage_keys.append(target_key)
    document.storage_key = target_key

    if source.markdown_storage_key and storage.exists(source.markdown_storage_key):
        markdown_name = source.markdown_storage_key.rsplit("/", 1)[-1]
        markdown_key = f"documents/{document.id}/markdown/{uuid4().hex}-{markdown_name}"
        storage.copy(source.markdown_storage_key, markdown_key)
        copied_storage_keys.append(markdown_key)
        document.markdown_storage_key = markdown_key

    return document


def copy_document(
    db: Session,
    *,
    document_id: int,
    target: CopyTarget,
    current_user: User,
    storage,
) -> tuple[Document, list[str]]:
    source = _source_document(db, document_id, current_user)
    copied_storage_keys: list[str] = []
    try:
        copied = _copy_document(
            db,
            source=source,
            target=target,
            current_user=current_user,
            storage=storage,
            copied_storage_keys=copied_storage_keys,
        )
        return copied, copied_storage_keys
    except FileNotFoundError as exc:
        for key in copied_storage_keys:
            storage.delete(key)
        raise HTTPException(status_code=404, detail=f"源文件不存在: {exc}") from exc
    except Exception:
        for key in copied_storage_keys:
            storage.delete(key)
        raise


def _copy_folder_tree(
    db: Session,
    *,
    source_root: Folder,
    target: CopyTarget,
    current_user: User,
    storage,
    copied_storage_keys: list[str],
    copied_folder_ids: list[int],
    copied_document_count: list[int],
    folder_map: dict[int, Folder],
    parent_id: int | None,
    depth: int,
    is_root: bool,
) -> Folder:
    if depth > settings.max_folder_depth:
        raise HTTPException(status_code=409, detail="Maximum folder depth exceeded")

    base_name = source_root.name
    name = f"{base_name} - 副本" if is_root else base_name
    suffix = 2
    while (
        db.query(Folder.id)
        .filter(
            Folder.knowledge_base_id == target.knowledge_base_id,
            Folder.team_space_id == target.team_space_id,
            Folder.parent_id == parent_id,
            Folder.name == name,
            Folder.deleted_at.is_(None),
            Folder.status == "active",
        )
        .first()
        is not None
    ):
        name = f"{base_name} - 副本 {suffix}"
        suffix += 1

    folder = Folder(
        knowledge_base_id=target.knowledge_base_id,
        team_space_id=target.team_space_id,
        owner_id=current_user.id,
        parent_id=parent_id,
        name=name,
        visibility="public",
        status="active",
    )
    db.add(folder)
    db.flush()
    storage.ensure_dir(f"folders/{folder.id}")
    copied_folder_ids.append(folder.id)

    source_documents = (
        db.query(Document)
        .filter(
            Document.folder_id == source_root.id,
            Document.deleted_at.is_(None),
            Document.status != "deleted",
        )
        .all()
    )
    for source_document in source_documents:
        if not _visible_document(source_document, current_user):
            continue
        _copy_document(
            db,
            source=source_document,
            target=CopyTarget(
                knowledge_base_id=target.knowledge_base_id,
                team_space_id=target.team_space_id,
                folder_id=folder.id,
            ),
            current_user=current_user,
            storage=storage,
            copied_storage_keys=copied_storage_keys,
        )
        copied_document_count[0] += 1

    children = sorted(
        (item for item in folder_map.values() if item.parent_id == source_root.id),
        key=lambda item: (item.name, item.id),
    )
    for child in children:
        _copy_folder_tree(
            db,
            source_root=child,
            target=target,
            current_user=current_user,
            storage=storage,
            copied_storage_keys=copied_storage_keys,
            copied_folder_ids=copied_folder_ids,
            copied_document_count=copied_document_count,
            folder_map=folder_map,
            parent_id=folder.id,
            depth=depth + 1,
            is_root=False,
        )
    return folder


def copy_folder(
    db: Session,
    *,
    folder_id: int,
    target: CopyTarget,
    current_user: User,
    storage,
) -> tuple[Folder, int, int, list[str], list[int]]:
    source_root = _source_folder(db, folder_id, current_user)
    source_folders = (
        db.query(Folder)
        .filter(
            Folder.knowledge_base_id == source_root.knowledge_base_id,
            Folder.team_space_id == source_root.team_space_id,
            Folder.deleted_at.is_(None),
            Folder.status == "active",
        )
        .all()
    )
    folder_map = {
        item.id: item
        for item in source_folders
        if _visible_folder(item, current_user)
    }
    if source_root.id not in folder_map:
        raise HTTPException(status_code=404, detail="Folder not found")

    copied_storage_keys: list[str] = []
    copied_folder_ids: list[int] = []
    copied_document_count = [0]
    target_depth = _folder_depth(db, target.folder_id)
    try:
        root = _copy_folder_tree(
            db,
            source_root=source_root,
            target=target,
            current_user=current_user,
            storage=storage,
            copied_storage_keys=copied_storage_keys,
            copied_folder_ids=copied_folder_ids,
            copied_document_count=copied_document_count,
            folder_map=folder_map,
            parent_id=target.folder_id,
            depth=target_depth + 1,
            is_root=True,
        )
        return (
            root,
            copied_document_count[0],
            len(copied_folder_ids),
            copied_storage_keys,
            copied_folder_ids,
        )
    except Exception:
        for key in copied_storage_keys:
            storage.delete(key)
        for created_folder_id in copied_folder_ids:
            storage.delete_dir(f"folders/{created_folder_id}")
        raise
