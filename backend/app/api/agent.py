from __future__ import annotations

import time
from dataclasses import dataclass
from typing import Any
from urllib.parse import quote

from fastapi import APIRouter, Depends, HTTPException, Query, status
from fastapi.responses import FileResponse
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jose import JWTError, jwt
from pydantic import BaseModel, Field
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models import User
from app.services.audit import record_audit
from app.services.container import storage
from app.services.knowledge_query import (
    accessible_document,
    accessible_documents,
    accessible_knowledge_bases,
    build_search_snippet,
    document_to_markdown,
    limit_content,
    load_folder_map,
    search_document_text,
    serialize_document,
    serialize_knowledge_base,
    authenticate_mcp_user,
)
from app.services.rest_oauth import RestOAuthError, RestOAuthService


router = APIRouter(prefix="/agent", tags=["agent"])
bearer_scheme = HTTPBearer(auto_error=False, scheme_name="bearerAuth")


@dataclass(frozen=True)
class AgentPrincipal:
    user: User
    auth_method: str
    client_id: str | None = None
    scopes: frozenset[str] = frozenset()


class SearchRequest(BaseModel):
    query: str = Field(min_length=1, max_length=500)
    knowledge_base_id: int | None = None
    folder_id: int | None = None
    limit: int = Field(default=10, ge=1, le=50)


def get_rest_oauth_service() -> RestOAuthService:
    from app.rest_api_server import rest_oauth

    return rest_oauth


def get_current_agent_principal(
    credentials: HTTPAuthorizationCredentials | None = Depends(bearer_scheme),
    db: Session = Depends(get_db),
    oauth: RestOAuthService = Depends(get_rest_oauth_service),
) -> AgentPrincipal:
    if credentials is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authentication required",
            headers={"WWW-Authenticate": "Bearer"},
        )
    token = credentials.credentials.strip()
    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authentication required",
            headers={"WWW-Authenticate": "Bearer"},
        )

    try:
        # Only use the unverified type to select the validator below. The
        # selected validator performs the complete cryptographic checks.
        claims = jwt.get_unverified_claims(token)
    except (JWTError, TypeError, ValueError):
        claims = {}

    if claims.get("typ") == "oauth":
        try:
            principal = oauth.authenticate_access_token(db, token)
        except RestOAuthError as exc:
            raise HTTPException(
                status_code=exc.status_code,
                detail={"code": "INVALID_OAUTH_TOKEN", "message": exc.description},
                headers={"WWW-Authenticate": "Bearer"},
            ) from exc
        return AgentPrincipal(
            user=principal.user,
            auth_method="oauth",
            client_id=principal.client_id,
            scopes=principal.scopes,
        )

    try:
        user = authenticate_mcp_user(db, token)
    except PermissionError as exc:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail={"code": "INVALID_BEARER_TOKEN", "message": str(exc)},
            headers={"WWW-Authenticate": "Bearer"},
        ) from exc
    return AgentPrincipal(user=user, auth_method="bearer")


def _audit(
    db: Session,
    principal: AgentPrincipal,
    *,
    endpoint: str,
    started_at: float,
    result: str = "success",
    error_message: str | None = None,
) -> None:
    message = error_message
    if message and len(message) > 1000:
        message = message[:1000]
    record_audit(
        db,
        actor_id=principal.user.id,
        action="agent_api_call",
        resource_type="rest_api",
        resource_id=endpoint,
        result=result,
        error_message=message,
    )
    db.commit()


def _raise_document_error(exc: Exception) -> HTTPException:
    return HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail={"code": "DOCUMENT_NOT_FOUND", "message": str(exc)},
    )


@router.get(
    "/knowledge-bases",
    operation_id="list_knowledge_bases",
    summary="List accessible knowledge bases",
)
def list_agent_knowledge_bases(
    page: int = Query(default=1, ge=1),
    page_size: int = Query(default=100, ge=1, le=500),
    db: Session = Depends(get_db),
    principal: AgentPrincipal = Depends(get_current_agent_principal),
) -> dict[str, Any]:
    started_at = time.time()
    try:
        all_items = accessible_knowledge_bases(db, principal.user)
        total = len(all_items)
        start = (page - 1) * page_size
        items = [
            serialize_knowledge_base(db, item, principal.user)
            for item in all_items[start : start + page_size]
        ]
        result = {"items": items, "total": total, "page": page, "page_size": page_size}
        _audit(db, principal, endpoint="GET /api/v1/agent/knowledge-bases", started_at=started_at)
        return result
    except Exception as exc:
        db.rollback()
        _audit(
            db,
            principal,
            endpoint="GET /api/v1/agent/knowledge-bases",
            started_at=started_at,
            result="failure",
            error_message=str(exc),
        )
        raise


@router.post(
    "/search",
    operation_id="search_knowledge",
    summary="Search accessible knowledge",
)
def search_agent_knowledge(
    payload: SearchRequest,
    db: Session = Depends(get_db),
    principal: AgentPrincipal = Depends(get_current_agent_principal),
) -> dict[str, Any]:
    started_at = time.time()
    try:
        keyword = payload.query.strip()
        if not keyword:
            raise HTTPException(status_code=422, detail="query cannot be blank")
        candidates = accessible_documents(
            db,
            principal.user,
            knowledge_base_id=payload.knowledge_base_id,
            folder_id=payload.folder_id,
        )
        folders = load_folder_map(db, principal.user, payload.knowledge_base_id)
        matches: list[dict[str, Any]] = []
        for document in candidates:
            metadata = serialize_document(
                document,
                user=principal.user,
                folders=folders,
                db=db,
            )
            metadata_text = " ".join(
                [
                    document.name,
                    document.original_filename,
                    document.description or "",
                    metadata.get("folder_path") or "",
                    " ".join(metadata["tags"]),
                ]
            )
            try:
                content = search_document_text(document)
            except ValueError:
                content = ""
            metadata_match = keyword.casefold() in metadata_text.casefold()
            content_match = keyword.casefold() in content.casefold()
            if not metadata_match and not content_match:
                continue
            matches.append(
                {
                    **metadata,
                    "match_in": [
                        value
                        for value, matched in (
                            ("metadata", metadata_match),
                            ("content", content_match),
                        )
                        if matched
                    ],
                    "snippet": build_search_snippet(
                        content if content_match else metadata_text,
                        keyword,
                    ),
                }
            )
            if len(matches) >= payload.limit:
                break
        result = {
            "query": keyword,
            "results": matches,
            "count": len(matches),
            "truncated": len(matches) >= payload.limit and len(candidates) > len(matches),
        }
        _audit(db, principal, endpoint="POST /api/v1/agent/search", started_at=started_at)
        return result
    except Exception as exc:
        db.rollback()
        _audit(
            db,
            principal,
            endpoint="POST /api/v1/agent/search",
            started_at=started_at,
            result="failure",
            error_message=str(exc),
        )
        raise


@router.get(
    "/documents/{document_id}",
    operation_id="get_document",
    summary="Get accessible document summary",
)
def get_agent_document(
    document_id: int,
    db: Session = Depends(get_db),
    principal: AgentPrincipal = Depends(get_current_agent_principal),
) -> dict[str, Any]:
    started_at = time.time()
    try:
        document = accessible_document(db, principal.user, document_id)
        folders = load_folder_map(db, principal.user, document.knowledge_base_id)
        content, source = document_to_markdown(document)
        summary, truncated = limit_content(content, 2000)
        result = {
            "document": serialize_document(
                document,
                user=principal.user,
                folders=folders,
                db=db,
            ),
            "summary": summary,
            "content_source": source,
            "summary_truncated": truncated,
        }
        _audit(
            db,
            principal,
            endpoint="GET /api/v1/agent/documents/{document_id}",
            started_at=started_at,
        )
        return result
    except LookupError as exc:
        db.rollback()
        _audit(
            db,
            principal,
            endpoint="GET /api/v1/agent/documents/{document_id}",
            started_at=started_at,
            result="failure",
            error_message=str(exc),
        )
        raise _raise_document_error(exc) from exc
    except ValueError as exc:
        db.rollback()
        _audit(
            db,
            principal,
            endpoint="GET /api/v1/agent/documents/{document_id}",
            started_at=started_at,
            result="failure",
            error_message=str(exc),
        )
        raise HTTPException(status_code=422, detail=str(exc)) from exc


@router.get(
    "/documents/{document_id}/markdown",
    operation_id="get_document_markdown",
    summary="Get accessible document Markdown",
)
def get_agent_document_markdown(
    document_id: int,
    max_chars: int = Query(default=30000, ge=1000, le=100000),
    db: Session = Depends(get_db),
    principal: AgentPrincipal = Depends(get_current_agent_principal),
) -> dict[str, Any]:
    started_at = time.time()
    endpoint = "GET /api/v1/agent/documents/{document_id}/markdown"
    try:
        document = accessible_document(db, principal.user, document_id)
        content, source = document_to_markdown(document)
        content, truncated = limit_content(content, max_chars)
        folders = load_folder_map(db, principal.user, document.knowledge_base_id)
        result = {
            "document": serialize_document(
                document,
                user=principal.user,
                folders=folders,
                db=db,
            ),
            "content_markdown": content,
            "content_source": source,
            "content_chars": len(content),
            "truncated": truncated,
        }
        _audit(db, principal, endpoint=endpoint, started_at=started_at)
        return result
    except LookupError as exc:
        db.rollback()
        _audit(db, principal, endpoint=endpoint, started_at=started_at, result="failure", error_message=str(exc))
        raise _raise_document_error(exc) from exc
    except ValueError as exc:
        db.rollback()
        _audit(db, principal, endpoint=endpoint, started_at=started_at, result="failure", error_message=str(exc))
        raise HTTPException(status_code=422, detail=str(exc)) from exc


@router.get(
    "/documents/{document_id}/download",
    operation_id="download_document",
    summary="Download accessible original document",
)
def download_agent_document(
    document_id: int,
    db: Session = Depends(get_db),
    principal: AgentPrincipal = Depends(get_current_agent_principal),
) -> FileResponse:
    started_at = time.time()
    endpoint = "GET /api/v1/agent/documents/{document_id}/download"
    try:
        document = accessible_document(db, principal.user, document_id)
        path = storage.path(document.storage_key)
        if not path.is_file():
            raise HTTPException(status_code=404, detail="Stored file not found")
        record = FileResponse(
            path,
            media_type=document.mime_type,
            headers={
                "Content-Disposition": (
                    f"attachment; filename*=UTF-8''{quote(document.original_filename)}"
                )
            },
        )
        _audit(db, principal, endpoint=endpoint, started_at=started_at)
        return record
    except LookupError as exc:
        db.rollback()
        _audit(db, principal, endpoint=endpoint, started_at=started_at, result="failure", error_message=str(exc))
        raise _raise_document_error(exc) from exc
    except HTTPException as exc:
        db.rollback()
        _audit(db, principal, endpoint=endpoint, started_at=started_at, result="failure", error_message=str(exc.detail))
        raise
