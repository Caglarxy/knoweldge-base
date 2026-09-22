import json
import mimetypes
from pathlib import Path
from urllib.parse import quote
from uuid import uuid4

from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile, status
from fastapi.responses import FileResponse, Response
from sqlalchemy import or_
from sqlalchemy.orm import Session

from app.api.dependencies import get_current_user
from app.core.config import settings
from app.db.session import get_db
from app.models import Document, Folder, KnowledgeBase, User
from app.schemas.copy import CopyRequest, CopyResponse
from app.schemas.document import DocumentResponse, DocumentUpdate
from app.services.audit import record_audit
from app.services.container import storage
from app.services.copy_service import (
    copy_document as copy_document_record,
    resolve_copy_target,
)
from app.services.document_reader import DocumentReaderError, read_document
from app.services.text_encoding import decode_text
from app.services.team_spaces import user_can_access_knowledge_base


router = APIRouter(prefix="/documents", tags=["documents"])

ALLOWED_EXTENSIONS = {
    ".pdf",
    ".txt",
    ".md",
    ".markdown",
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".ppt",
    ".pptx",
    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
    ".html",
    ".htm",
}
MAX_TAGS = 20


def _parse_tags(value: str | None) -> list[str]:
    if not value:
        return []
    result: list[str] = []
    for item in value.split(","):
        tag = item.strip()
        if tag and tag not in result:
            result.append(tag[:32])
    return result[:MAX_TAGS]


def _tags_from_document(document: Document) -> list[str]:
    try:
        tags = json.loads(document.tags or "[]")
        return tags if isinstance(tags, list) else []
    except json.JSONDecodeError:
        return []


def _document_response(
    document: Document,
    current_user: User,
    db: Session,
) -> DocumentResponse:
    knowledge_base = db.get(KnowledgeBase, document.knowledge_base_id)
    uploader = db.get(User, document.owner_id)
    return DocumentResponse(
        id=document.id,
        knowledge_base_id=document.knowledge_base_id,
        owner_id=document.owner_id,
        owner_username=(
            db.get(User, knowledge_base.owner_id).username
            if knowledge_base is not None and db.get(User, knowledge_base.owner_id) is not None
            else "未知用户"
        ),
        uploader_username=uploader.username if uploader is not None else "未知用户",
        folder_id=document.folder_id,
        name=document.name,
        original_filename=document.original_filename,
        extension=document.extension,
        mime_type=document.mime_type,
        size_bytes=document.size_bytes,
        tags=_tags_from_document(document),
        status=document.status,
        description=document.description,
        visibility=document.visibility,
        deleted_at=document.deleted_at,
        created_at=document.created_at,
        updated_at=document.updated_at,
        is_owner=document.owner_id == current_user.id,
    )


def _safe_filename(filename: str | None) -> str:
    if not filename:
        return "upload"
    normalized = filename.replace("\\", "/").split("/")[-1].strip()
    return normalized or "upload"


def _get_knowledge_base(db: Session, knowledge_base_id: int) -> KnowledgeBase:
    knowledge_base = (
        db.query(KnowledgeBase)
        .filter(KnowledgeBase.id == knowledge_base_id, KnowledgeBase.status == "active")
        .first()
    )
    if knowledge_base is None:
        raise HTTPException(status_code=404, detail="Knowledge base not found")
    return knowledge_base


def _get_uploadable_knowledge_base(
    db: Session,
    knowledge_base_id: int,
    current_user: User,
) -> KnowledgeBase:
    knowledge_base = _get_knowledge_base(db, knowledge_base_id)
    allowed = user_can_access_knowledge_base(db, knowledge_base, current_user) and (
        knowledge_base.owner_id == current_user.id
        or (
            knowledge_base.upload_policy == "all_users"
            and (
                knowledge_base.is_team_space
                or knowledge_base.visibility == "public"
            )
        )
    )
    if not allowed:
        raise HTTPException(
            status_code=403,
            detail="当前知识库不允许你上传文件",
        )
    return knowledge_base


def _get_active_document(
    db: Session,
    document_id: int,
    current_user: User,
) -> Document:
    document_visibility = (
        True
        if current_user.role == "admin"
        else (Document.visibility == "public") | (Document.owner_id == current_user.id)
    )
    document = (
        db.query(Document)
        .filter(
            Document.id == document_id,
            Document.deleted_at.is_(None),
            Document.status != "deleted",
            document_visibility,
        )
        .first()
    )
    if document is None:
        raise HTTPException(status_code=404, detail="Document not found")
    knowledge_base = db.get(KnowledgeBase, document.knowledge_base_id)
    if knowledge_base is None or not user_can_access_knowledge_base(db, knowledge_base, current_user):
        raise HTTPException(status_code=404, detail="Document not found")
    return document


def _get_active_folder(
    db: Session,
    folder_id: int,
    knowledge_base_id: int,
    current_user: User,
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
            Folder.knowledge_base_id == knowledge_base_id,
            Folder.deleted_at.is_(None),
            Folder.status == "active",
            folder_visibility,
        )
        .first()
    )
    if folder is None:
        raise HTTPException(status_code=404, detail="Folder not found")
    knowledge_base = db.get(KnowledgeBase, folder.knowledge_base_id)
    if knowledge_base is None or not user_can_access_knowledge_base(db, knowledge_base, current_user):
        raise HTTPException(status_code=404, detail="Folder not found")
    return folder


def _get_owned_document(db: Session, document_id: int, current_user: User) -> Document:
    document = (
        db.query(Document)
        .filter(Document.id == document_id, Document.owner_id == current_user.id)
        .first()
    )
    if document is None:
        raise HTTPException(status_code=404, detail="Document not found")
    return document


def _prepare_document(
    *,
    db: Session,
    file: UploadFile,
    knowledge_base_id: int,
    current_user: User,
    folder_id: int | None,
    description: str | None,
    tags: list[str],
) -> Document:
    original_filename = _safe_filename(file.filename)
    extension = Path(original_filename).suffix.lower()
    if extension not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
            detail=f"Unsupported file type: {extension or 'unknown'}",
        )

    document = Document(
        knowledge_base_id=knowledge_base_id,
        owner_id=current_user.id,
        folder_id=folder_id,
        name=original_filename,
        original_filename=original_filename,
        extension=extension,
        mime_type=file.content_type or mimetypes.guess_type(original_filename)[0] or "application/octet-stream",
        size_bytes=0,
        storage_key="pending",
        tags=json.dumps(tags, ensure_ascii=False),
        status="pending",
        description=description,
        visibility="public",
    )
    db.add(document)
    db.flush()

    storage_key = f"documents/{document.id}/source/{uuid4().hex}-{original_filename}"
    try:
        stored_path = storage.put_file(storage_key, file.file)
        size_bytes = stored_path.stat().st_size
        if size_bytes > settings.max_upload_size_bytes:
            storage.delete(storage_key)
            raise HTTPException(status_code=413, detail="File is too large")
    except HTTPException:
        raise
    except (OSError, ValueError) as exc:
        raise HTTPException(status_code=500, detail=f"Failed to store file: {exc}") from exc

    document.storage_key = storage_key
    document.size_bytes = size_bytes
    document.status = "ready"
    return document


@router.get("", response_model=list[DocumentResponse])
def list_documents(
    include_deleted: bool = False,
    knowledge_base_id: int | None = None,
    folder_id: int | None = None,
    root: bool = False,
    q: str | None = None,
    exclude_team_spaces: bool = False,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[DocumentResponse]:
    query = db.query(Document)
    if include_deleted:
        query = query.filter(Document.owner_id == current_user.id, Document.deleted_at.isnot(None))
    else:
        document_visibility = (
            True
            if current_user.role == "admin"
            else (Document.visibility == "public") | (Document.owner_id == current_user.id)
        )
        query = query.filter(
            Document.deleted_at.is_(None),
            Document.status != "deleted",
            document_visibility,
        )
    if knowledge_base_id is not None:
        knowledge_base = _get_knowledge_base(db, knowledge_base_id)
        if not user_can_access_knowledge_base(db, knowledge_base, current_user):
            raise HTTPException(status_code=403, detail="无权访问该知识库")
        query = query.filter(Document.knowledge_base_id == knowledge_base_id)
    elif exclude_team_spaces:
        query = query.filter(Document.knowledge_base_id.in_(
            db.query(KnowledgeBase.id).filter(KnowledgeBase.is_team_space.is_(False)),
        ))
    if root:
        query = query.filter(Document.folder_id.is_(None))
    elif folder_id is not None:
        query = query.filter(Document.folder_id == folder_id)
    if q and q.strip():
        keyword = f"%{q.strip()}%"
        query = query.filter(
            or_(
                Document.name.ilike(keyword),
                Document.original_filename.ilike(keyword),
                Document.description.ilike(keyword),
                Document.tags.ilike(keyword),
            )
        )

    documents = query.order_by(Document.created_at.desc()).all()
    documents = [
        document
        for document in documents
        if (
            (knowledge_base := db.get(KnowledgeBase, document.knowledge_base_id)) is not None
            and user_can_access_knowledge_base(db, knowledge_base, current_user)
        )
    ]
    return [_document_response(document, current_user, db) for document in documents]


@router.post("/upload", response_model=DocumentResponse, status_code=status.HTTP_201_CREATED)
async def upload_document(
    knowledge_base_id: int = Form(...),
    folder_id: int | None = Form(default=None),
    description: str | None = Form(default=None),
    tags: str | None = Form(default=None),
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> DocumentResponse:
    _get_uploadable_knowledge_base(db, knowledge_base_id, current_user)
    if folder_id is not None:
        _get_active_folder(db, folder_id, knowledge_base_id, current_user)
    try:
        document = _prepare_document(
            db=db,
            file=file,
            knowledge_base_id=knowledge_base_id,
            current_user=current_user,
            folder_id=folder_id,
            description=description,
            tags=_parse_tags(tags),
        )
        record_audit(
            db,
            actor_id=current_user.id,
            action="upload",
            resource_type="document",
            resource_id=str(document.id),
        )
        db.commit()
        db.refresh(document)
        return _document_response(document, current_user, db)
    except HTTPException:
        db.rollback()
        raise
    except Exception:
        db.rollback()
        raise
    finally:
        await file.close()


@router.post("/upload-batch", response_model=list[DocumentResponse], status_code=status.HTTP_201_CREATED)
async def upload_documents(
    knowledge_base_id: int = Form(...),
    folder_id: int | None = Form(default=None),
    description: str | None = Form(default=None),
    tags: str | None = Form(default=None),
    files: list[UploadFile] = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> list[DocumentResponse]:
    _get_uploadable_knowledge_base(db, knowledge_base_id, current_user)
    if folder_id is not None:
        _get_active_folder(db, folder_id, knowledge_base_id, current_user)
    if not files:
        raise HTTPException(status_code=400, detail="At least one file is required")

    documents: list[Document] = []
    stored_keys: list[str] = []
    try:
        for file in files:
            document = _prepare_document(
                db=db,
                file=file,
                knowledge_base_id=knowledge_base_id,
                current_user=current_user,
                folder_id=folder_id,
                description=description,
                tags=_parse_tags(tags),
            )
            documents.append(document)
            stored_keys.append(document.storage_key)

        for document in documents:
            record_audit(
                db,
                actor_id=current_user.id,
                action="upload",
                resource_type="document",
                resource_id=str(document.id),
            )
        db.commit()
        for document in documents:
            db.refresh(document)
        return [_document_response(document, current_user, db) for document in documents]
    except HTTPException:
        db.rollback()
        for key in stored_keys:
            storage.delete(key)
        raise
    except Exception:
        db.rollback()
        for key in stored_keys:
            storage.delete(key)
        raise
    finally:
        for file in files:
            await file.close()


@router.get("/{document_id}", response_model=DocumentResponse)
def get_document(
    document_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> DocumentResponse:
    document = _get_active_document(db, document_id, current_user)
    return _document_response(document, current_user, db)


@router.post("/{document_id}/copy", response_model=CopyResponse)
def copy_document_api(
    document_id: int,
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
    try:
        copied, copied_storage_keys = copy_document_record(
            db,
            document_id=document_id,
            target=target,
            current_user=current_user,
            storage=storage,
        )
        record_audit(
            db,
            actor_id=current_user.id,
            action="copy",
            resource_type="document",
            resource_id=str(copied.id),
        )
        db.commit()
        db.refresh(copied)
        return CopyResponse(
            kind="document",
            id=copied.id,
            name=copied.name,
            copied_documents=1,
            copied_folders=0,
        )
    except Exception:
        db.rollback()
        for key in copied_storage_keys:
            storage.delete(key)
        raise


@router.patch("/{document_id}", response_model=DocumentResponse)
def update_document(
    document_id: int,
    payload: DocumentUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> DocumentResponse:
    document = _get_owned_document(db, document_id, current_user)
    if document.deleted_at is not None:
        raise HTTPException(status_code=409, detail="Deleted document must be restored first")

    fields = payload.model_fields_set
    moving = "folder_id" in fields and payload.folder_id != document.folder_id
    if moving and payload.folder_id is not None:
        _get_active_folder(db, payload.folder_id, document.knowledge_base_id, current_user)
    if moving:
        document.folder_id = payload.folder_id
    if "name" in fields and payload.name is not None:
        name = _safe_filename(payload.name)
        if not name:
            raise HTTPException(status_code=422, detail="Document name cannot be blank")
        document.name = name
    if "description" in fields:
        document.description = payload.description
    if "tags" in fields:
        clean_tags = []
        for tag in payload.tags or []:
            value = tag.strip()
            if value and value not in clean_tags:
                clean_tags.append(value[:32])
        document.tags = json.dumps(clean_tags[:MAX_TAGS], ensure_ascii=False)

    if fields - {"folder_id"}:
        record_audit(
            db,
            actor_id=current_user.id,
            action="update",
            resource_type="document",
            resource_id=str(document.id),
        )
    if moving:
        record_audit(
            db,
            actor_id=current_user.id,
            action="move",
            resource_type="document",
            resource_id=str(document.id),
        )
    db.commit()
    db.refresh(document)
    return _document_response(document, current_user, db)


@router.delete("/{document_id}", response_model=DocumentResponse)
def delete_document(
    document_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> DocumentResponse:
    document = _get_owned_document(db, document_id, current_user)
    if document.deleted_at is None:
        from datetime import datetime, timezone

        document.deleted_at = datetime.now(timezone.utc)
        document.status = "deleted"
        record_audit(
            db,
            actor_id=current_user.id,
            action="delete",
            resource_type="document",
            resource_id=str(document.id),
        )
        db.commit()
        db.refresh(document)
    return _document_response(document, current_user, db)


@router.post("/{document_id}/restore", response_model=DocumentResponse)
def restore_document(
    document_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> DocumentResponse:
    document = _get_owned_document(db, document_id, current_user)
    if document.deleted_at is not None:
        document.deleted_at = None
        document.status = "ready"
        record_audit(
            db,
            actor_id=current_user.id,
            action="restore",
            resource_type="document",
            resource_id=str(document.id),
        )
        db.commit()
        db.refresh(document)
    return _document_response(document, current_user, db)


def _file_response(document: Document, *, download: bool) -> FileResponse:
    path = storage.path(document.storage_key)
    if not path.is_file():
        raise HTTPException(status_code=404, detail="Stored file not found")

    disposition = "attachment" if download else "inline"
    headers = {"Content-Disposition": f"{disposition}; filename*=UTF-8''{quote(document.original_filename)}"}
    return FileResponse(path, media_type=document.mime_type, headers=headers)


def _text_preview_response(document: Document, *, media_type: str = "text/plain") -> Response:
    path = storage.path(document.storage_key)
    if not path.is_file():
        raise HTTPException(status_code=404, detail="Stored file not found")

    decoded = decode_text(path.read_bytes())
    headers = {
        "Content-Disposition": f"inline; filename*=UTF-8''{quote(document.original_filename)}",
        "X-Detected-Encoding": decoded.encoding,
    }
    return Response(content=decoded.content, media_type=media_type, headers=headers)


@router.get("/{document_id}/reader")
def read_document_for_app(
    document_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> dict:
    document = _get_active_document(db, document_id, current_user)
    path = storage.path(document.storage_key)
    try:
        content = read_document(path, document.extension)
    except DocumentReaderError as exc:
        raise HTTPException(status_code=422, detail=str(exc)) from exc

    record_audit(
        db,
        actor_id=current_user.id,
        action="read",
        resource_type="document",
        resource_id=str(document.id),
    )
    db.commit()
    return {
        "document": _document_response(document, current_user, db).model_dump(mode="json"),
        **content,
    }


@router.get("/{document_id}/preview")
def preview_document(
    document_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> Response:
    document = _get_active_document(db, document_id, current_user)
    record_audit(
        db,
        actor_id=current_user.id,
        action="preview",
        resource_type="document",
        resource_id=str(document.id),
    )
    db.commit()
    if document.extension in {".txt", ".md", ".markdown"}:
        return _text_preview_response(document)
    if document.extension in {".html", ".htm"}:
        return _text_preview_response(document, media_type="text/html")
    return _file_response(document, download=False)


@router.get("/{document_id}/download")
def download_document(
    document_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> FileResponse:
    document = _get_active_document(db, document_id, current_user)
    record_audit(
        db,
        actor_id=current_user.id,
        action="download",
        resource_type="document",
        resource_id=str(document.id),
    )
    db.commit()
    return _file_response(document, download=True)
