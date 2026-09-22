from __future__ import annotations

import json
import time
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from sqlalchemy import and_, exists, or_, true
from sqlalchemy.orm import Query, Session

from app.core.security import (
    create_access_token,
    decode_access_token,
    hash_token,
    verify_password,
)
from app.models import (
    Document,
    Folder,
    KnowledgeBase,
    KnowledgeBaseViewer,
    McpToken,
    TeamSpace,
    TeamSpaceMember,
    User,
)
from app.services.container import storage
from app.services.document_reader import DocumentReaderError, read_document
from app.services.text_encoding import decode_text


def _utc_timestamp(value: datetime | None) -> float | None:
    if value is None:
        return None
    normalized = (
        value.replace(tzinfo=timezone.utc)
        if value.tzinfo is None
        else value.astimezone(timezone.utc)
    )
    return normalized.timestamp()


def authenticate_mcp_user(db: Session, token: str | None) -> User:
    if not token:
        raise PermissionError("KB_MCP_TOKEN is required")

    normalized_token = token.strip()
    if normalized_token.lower().startswith("bearer "):
        normalized_token = normalized_token[7:].strip()
    if not normalized_token:
        raise PermissionError("KB_MCP_TOKEN is required")

    try:
        payload = decode_access_token(normalized_token)
        subject = payload.get("sub")
        if subject is None:
            raise ValueError("Token subject is missing")
        user_id = int(subject)
    except (TypeError, ValueError) as exc:
        raise PermissionError("Invalid MCP access token") from exc

    if payload.get("typ") == "mcp":
        token_id = payload.get("jti")
        if not token_id:
            raise PermissionError("Invalid MCP access token")
        token_record = (
            db.query(McpToken)
            .filter(
                McpToken.token_hash == hash_token(normalized_token),
                McpToken.token_id == token_id,
                McpToken.revoked_at.is_(None),
            )
            .first()
        )
        if token_record is None:
            raise PermissionError("MCP access token has been revoked")
        expires_at = _utc_timestamp(token_record.expires_at)
        if expires_at is not None and expires_at <= time.time():
            raise PermissionError("MCP access token has expired")
        token_record.last_used_at = datetime.now(timezone.utc)

    user = (
        db.query(User)
        .filter(User.id == user_id, User.is_active.is_(True), User.status == "active")
        .first()
    )
    if user is None:
        raise PermissionError("MCP user is not active")
    return user


def authenticate_mcp_credentials(
    db: Session,
    username: str,
    password: str,
) -> tuple[User, str]:
    normalized_username = username.strip()
    if not normalized_username or not password:
        raise PermissionError("Username and password are required")

    user = db.query(User).filter(User.username == normalized_username).first()
    if (
        user is None
        or not user.is_active
        or user.status != "active"
        or not verify_password(password, user.password_hash)
    ):
        raise PermissionError("Invalid username or password")

    return user, create_access_token(user.id)


def accessible_knowledge_bases(db: Session, user: User) -> list[KnowledgeBase]:
    return (
        db.query(KnowledgeBase)
        .filter(KnowledgeBase.status == "active", _knowledge_base_access_filter(user))
        .order_by(KnowledgeBase.created_at.desc())
        .all()
    )


def _knowledge_base_access_filter(user: User):
    if user.role == "admin":
        return true()
    member_exists = exists().where(
        TeamSpaceMember.team_space_id == TeamSpace.id,
        TeamSpaceMember.user_id == user.id,
        TeamSpace.status == "active",
    )
    viewer_exists = exists().where(
        KnowledgeBaseViewer.knowledge_base_id == KnowledgeBase.id,
        KnowledgeBaseViewer.user_id == user.id,
    )
    personal_access = and_(
        KnowledgeBase.is_team_space.is_(False),
        or_(
            KnowledgeBase.owner_id == user.id,
            KnowledgeBase.view_policy == "all_users",
            and_(
                KnowledgeBase.view_policy == "selected_users",
                viewer_exists,
            ),
        ),
    )
    team_access = and_(
        KnowledgeBase.is_team_space.is_(True),
        or_(
            KnowledgeBase.owner_id == user.id,
            member_exists.where(TeamSpace.knowledge_base_id == KnowledgeBase.id),
        ),
    )
    return or_(personal_access, team_access)


def _accessible_documents_query(db: Session, user: User) -> Query:
    document_visibility = (
        true()
        if user.role == "admin"
        else (Document.visibility == "public") | (Document.owner_id == user.id)
    )
    return (
        db.query(Document)
        .join(KnowledgeBase, KnowledgeBase.id == Document.knowledge_base_id)
        .filter(
            Document.deleted_at.is_(None),
            Document.status != "deleted",
            KnowledgeBase.status == "active",
            _knowledge_base_access_filter(user),
            document_visibility,
        )
    )


def accessible_documents(
    db: Session,
    user: User,
    *,
    knowledge_base_id: int | None = None,
    folder_id: int | None = None,
    root: bool = False,
    metadata_query: str | None = None,
) -> list[Document]:
    query = _accessible_documents_query(db, user)
    if knowledge_base_id is not None:
        query = query.filter(Document.knowledge_base_id == knowledge_base_id)
    if root:
        query = query.filter(Document.folder_id.is_(None))
    elif folder_id is not None:
        query = query.filter(Document.folder_id == folder_id)
    if metadata_query and metadata_query.strip():
        keyword = f"%{metadata_query.strip()}%"
        query = query.filter(
            or_(
                Document.name.ilike(keyword),
                Document.original_filename.ilike(keyword),
                Document.description.ilike(keyword),
                Document.tags.ilike(keyword),
            )
        )
    return query.order_by(Document.created_at.desc()).all()


def accessible_document(db: Session, user: User, document_id: int) -> Document:
    document = (
        _accessible_documents_query(db, user)
        .filter(Document.id == document_id)
        .first()
    )
    if document is None:
        raise LookupError("Document not found or not accessible")
    return document


def _tags(document: Document) -> list[str]:
    try:
        value = json.loads(document.tags or "[]")
    except json.JSONDecodeError:
        return []
    return value if isinstance(value, list) else []


def _folder_path(
    folder_id: int | None,
    folders: dict[int, Folder],
) -> str | None:
    if folder_id is None:
        return None
    names: list[str] = []
    visited: set[int] = set()
    current_id = folder_id
    while current_id is not None and current_id not in visited:
        visited.add(current_id)
        folder = folders.get(current_id)
        if folder is None:
            break
        names.append(folder.name)
        current_id = folder.parent_id
    return "/".join(reversed(names)) or None


def serialize_document(
    document: Document,
    *,
    user: User,
    folders: dict[int, Folder] | None = None,
    db: Session | None = None,
) -> dict[str, Any]:
    knowledge_base = db.get(KnowledgeBase, document.knowledge_base_id) if db is not None else None
    uploader = db.get(User, document.owner_id) if db is not None else None
    owner = db.get(User, knowledge_base.owner_id) if db is not None and knowledge_base is not None else None
    return {
        "id": document.id,
        "knowledge_base_id": document.knowledge_base_id,
        "owner_id": document.owner_id,
        "owner_username": owner.username if owner is not None else None,
        "uploader_username": uploader.username if uploader is not None else None,
        "folder_id": document.folder_id,
        "folder_path": _folder_path(document.folder_id, folders or {}),
        "name": document.name,
        "original_filename": document.original_filename,
        "extension": document.extension,
        "mime_type": document.mime_type,
        "size_bytes": document.size_bytes,
        "tags": _tags(document),
        "status": document.status,
        "description": document.description,
        "visibility": document.visibility,
        "created_at": document.created_at.isoformat() if document.created_at else None,
        "updated_at": document.updated_at.isoformat() if document.updated_at else None,
        "is_owner": document.owner_id == user.id,
    }


def serialize_knowledge_base(db: Session, knowledge_base: KnowledgeBase, user: User) -> dict[str, Any]:
    document_count = (
        _accessible_documents_query(db, user)
        .filter(Document.knowledge_base_id == knowledge_base.id)
        .count()
    )
    return {
        "id": knowledge_base.id,
        "name": knowledge_base.name,
        "description": knowledge_base.description,
        "owner_id": knowledge_base.owner_id,
        "visibility": knowledge_base.visibility,
        "status": knowledge_base.status,
        "document_count": document_count,
        "created_at": knowledge_base.created_at.isoformat() if knowledge_base.created_at else None,
        "updated_at": knowledge_base.updated_at.isoformat() if knowledge_base.updated_at else None,
        "is_owner": knowledge_base.owner_id == user.id,
    }


def load_folder_map(db: Session, user: User, knowledge_base_id: int | None = None) -> dict[int, Folder]:
    folder_visibility = (
        true()
        if user.role == "admin"
        else (Folder.visibility == "public") | (Folder.owner_id == user.id)
    )
    query = db.query(Folder).join(
        KnowledgeBase,
        KnowledgeBase.id == Folder.knowledge_base_id,
    ).filter(
        Folder.deleted_at.is_(None),
        Folder.status == "active",
        KnowledgeBase.status == "active",
        _knowledge_base_access_filter(user),
        folder_visibility,
    )
    if knowledge_base_id is not None:
        query = query.filter(Folder.knowledge_base_id == knowledge_base_id)
    return {folder.id: folder for folder in query.all()}


def _escape_table_cell(value: object) -> str:
    return str(value).replace("|", "\\|").replace("\r", " ").replace("\n", "<br>")


def _blocks_to_markdown(blocks: list[dict[str, Any]]) -> list[str]:
    lines: list[str] = []
    for block in blocks:
        block_type = block.get("type")
        if block_type in {"text", "paragraph"}:
            content = str(block.get("content") or "").strip()
            if content:
                lines.append(content)
        elif block_type == "table":
            rows = block.get("rows") or []
            if rows:
                normalized_rows = [
                    [_escape_table_cell(cell) for cell in row]
                    for row in rows
                    if isinstance(row, list)
                ]
                if normalized_rows:
                    width = max(len(row) for row in normalized_rows)
                    normalized_rows = [row + [""] * (width - len(row)) for row in normalized_rows]
                    lines.append("| " + " | ".join(normalized_rows[0]) + " |")
                    lines.append("| " + " | ".join(["---"] * width) + " |")
                    lines.extend("| " + " | ".join(row) + " |" for row in normalized_rows[1:])
        elif block_type == "shape":
            content = str(block.get("content") or "").strip()
            if content:
                lines.append(content)
    return lines


def reader_result_to_markdown(reader_result: dict[str, Any]) -> str:
    if reader_result.get("kind") == "image":
        return "[图片文档，未提取到文本内容]"

    lines: list[str] = []
    for page in reader_result.get("pages") or []:
        title = str(page.get("title") or "").strip()
        if title:
            lines.append(f"## {title}")

        blocks = page.get("blocks")
        if blocks:
            lines.extend(_blocks_to_markdown(blocks))

        shapes = page.get("shapes") or []
        for shape in shapes:
            if shape.get("type") == "text":
                for paragraph in shape.get("paragraphs") or []:
                    runs = paragraph.get("runs") or []
                    text = "".join(str(run.get("text") or "") for run in runs).strip()
                    if text:
                        prefix = "  " * int(paragraph.get("level") or 0)
                        lines.append(f"{prefix}- {text}")
            elif shape.get("type") == "table":
                lines.extend(_blocks_to_markdown([{"type": "table", "rows": shape.get("rows")}]))

    return "\n\n".join(line for line in lines if line.strip()).strip()


def _stored_markdown(document: Document) -> str | None:
    if not document.markdown_storage_key:
        return None
    path = storage.path(document.markdown_storage_key)
    if not path.is_file():
        return None
    return decode_text(path.read_bytes()).content


def document_to_markdown(document: Document) -> tuple[str, str]:
    stored = _stored_markdown(document)
    if stored is not None:
        return stored, "stored-markdown"

    path = storage.path(document.storage_key)
    try:
        reader_result = read_document(path, document.extension)
    except DocumentReaderError as exc:
        raise ValueError(str(exc)) from exc
    return reader_result_to_markdown(reader_result), str(reader_result.get("encoding") or "utf-8")


def search_document_text(document: Document) -> str:
    content, _ = document_to_markdown(document)
    return content


def build_search_snippet(content: str, query: str, radius: int = 180) -> str:
    folded_content = content.casefold()
    folded_query = query.casefold()
    index = folded_content.find(folded_query)
    if index < 0:
        return content[: radius * 2].strip()
    start = max(0, index - radius)
    end = min(len(content), index + len(query) + radius)
    prefix = "... " if start else ""
    suffix = " ..." if end < len(content) else ""
    return f"{prefix}{content[start:end].strip()}{suffix}"


def limit_content(content: str, max_chars: int) -> tuple[str, bool]:
    safe_limit = max(1000, min(max_chars, 100000))
    if len(content) <= safe_limit:
        return content, False
    return content[:safe_limit].rstrip() + "\n\n[内容已截断]", True
