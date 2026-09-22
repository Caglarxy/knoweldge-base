from __future__ import annotations

import os
from pathlib import Path
from urllib.parse import parse_qs
from typing import Any

import anyio
from mcp.server.auth.settings import (
    AuthSettings,
    ClientRegistrationOptions,
    RevocationOptions,
)
from mcp.server.mcpserver import MCPServer
from mcp.server.mcpserver.context import Context
from mcp.server.auth.middleware.auth_context import get_access_token
from starlette.requests import Request
from starlette.responses import HTMLResponse, RedirectResponse, Response

from app.core.config import settings
from app.db.session import SessionLocal, get_engine
from app.services.audit import record_audit
from app.services.mcp_dialogue_oauth import (
    DialogueOAuthProvider,
    render_login_page,
)
from app.services.knowledge_query import (
    accessible_document,
    accessible_documents,
    accessible_knowledge_bases,
    authenticate_mcp_user,
    build_search_snippet,
    document_to_markdown,
    limit_content,
    load_folder_map,
    search_document_text,
    serialize_document,
    serialize_knowledge_base,
)


def _dialogue_port() -> int:
    return int(os.getenv("MCP_PORT", "8024"))


def _dialogue_path() -> str:
    return os.getenv("MCP_PATH", "/mcp-dialogue")


DIALOGUE_PORT = _dialogue_port()
DIALOGUE_PATH = _dialogue_path()


def _oauth_issuer_url() -> str:
    configured = os.getenv("MCP_OAUTH_ISSUER_URL") or os.getenv("MCP_PUBLIC_URL")
    if configured:
        return configured.rstrip("/")

    configured_host = os.getenv("MCP_PUBLIC_HOST")
    if configured_host and configured_host not in {"0.0.0.0", "::"}:
        return f"http://{configured_host}:{DIALOGUE_PORT}"

    # 0.0.0.0 is a bind address, not a routable OAuth issuer. The MCP SDK
    # also requires HTTPS for non-loopback issuers, so use loopback until an
    # HTTPS MCP_PUBLIC_URL is configured for LAN access.
    return f"http://127.0.0.1:{DIALOGUE_PORT}"


oauth_provider = DialogueOAuthProvider(_oauth_issuer_url())
mcp = MCPServer(
    name="knowledge-base-dialogue-login",
    instructions=(
        "这是知识库 OAuth MCP 服务。首次连接时会打开浏览器完成授权登录，"
        "之后由 MCP 客户端自动使用和刷新令牌。使用 search_knowledge、"
        "list_documents 和 get_document 查询资料。"
    ),
    auth=AuthSettings(
        issuer_url=oauth_provider.issuer_url,
        resource_server_url=(
            f"{oauth_provider.issuer_url}{DIALOGUE_PATH}"
        ),
        client_registration_options=ClientRegistrationOptions(
            enabled=True,
            valid_scopes=["knowledge:read"],
            default_scopes=["knowledge:read"],
        ),
        revocation_options=RevocationOptions(enabled=True),
        required_scopes=["knowledge:read"],
    ),
    auth_server_provider=oauth_provider,
)


@mcp.custom_route("/oauth/login", methods=["GET", "POST"], include_in_schema=False)
async def oauth_login(request: Request) -> Response:
    if request.method == "GET":
        transaction_id = request.query_params.get("transaction")
        pending = oauth_provider.get_pending(transaction_id)
        if pending is None or transaction_id is None:
            return HTMLResponse(
                "<h1>授权请求不存在或已过期</h1><p>请返回智能体重新发起连接。</p>",
                status_code=400,
            )
        return HTMLResponse(
            render_login_page(
                action_url=oauth_provider.login_url,
                transaction_id=transaction_id,
            )
        )

    body = (await request.body()).decode("utf-8", errors="replace")
    form = parse_qs(body, keep_blank_values=True)
    transaction_id = form.get("transaction", [""])[0]
    username = form.get("username", [""])[0]
    password = form.get("password", [""])[0]
    try:
        redirect_url = await oauth_provider.complete_login(
            transaction_id,
            username,
            password,
        )
    except PermissionError as exc:
        return HTMLResponse(
            render_login_page(
                action_url=oauth_provider.login_url,
                transaction_id=transaction_id,
                error=str(exc),
            ),
            status_code=401,
        )
    return RedirectResponse(url=redirect_url, status_code=303)


def _call_with_user(callback, ctx: Context, tool_name: str):
    db = SessionLocal(bind=get_engine())
    user = None
    try:
        auth_info = get_access_token()
        token = auth_info.token if auth_info else None
        if token is None and ctx is not None and ctx.headers:
            token = next(
                (
                    value
                    for name, value in ctx.headers.items()
                    if name.lower() == "authorization"
                ),
                None,
            )
        user = authenticate_mcp_user(db, token)
        result = callback(db, user)
        record_audit(
            db,
            actor_id=user.id,
            action="mcp_call",
            resource_type="mcp_tool",
            resource_id=tool_name,
        )
        db.commit()
        return result
    except Exception as exc:
        db.rollback()
        record_audit(
            db,
            actor_id=user.id if user is not None else None,
            action="mcp_call",
            resource_type="mcp_tool",
            resource_id=tool_name,
            result="failure",
            error_message=str(exc)[:1000],
        )
        db.commit()
        raise
    finally:
        db.close()

@mcp.tool(description="列出当前会话用户可访问的知识库。")
def list_knowledge_bases(ctx: Context) -> dict[str, Any]:
    def run(db, user):
        items = [
            serialize_knowledge_base(db, knowledge_base, user)
            for knowledge_base in accessible_knowledge_bases(db, user)
        ]
        return {"knowledge_bases": items, "count": len(items)}

    return _call_with_user(run, ctx, "list_knowledge_bases")


@mcp.tool(
    description=(
        "列出当前会话用户可访问的文档。可按知识库、文件夹、根目录或文件名、"
        "标签、描述筛选。"
    )
)
def list_documents(
    ctx: Context,
    knowledge_base_id: int | None = None,
    folder_id: int | None = None,
    root: bool = False,
    query: str | None = None,
    limit: int = 100,
) -> dict[str, Any]:
    def run(db, user):
        safe_limit = max(1, min(limit, 500))
        documents = accessible_documents(
            db,
            user,
            knowledge_base_id=knowledge_base_id,
            folder_id=folder_id,
            root=root,
            metadata_query=query,
        )
        folders = load_folder_map(db, user, knowledge_base_id)
        items = [
            serialize_document(document, user=user, folders=folders, db=db)
            for document in documents[:safe_limit]
        ]
        return {
            "documents": items,
            "count": len(items),
            "total": len(documents),
            "truncated": len(documents) > safe_limit,
        }

    return _call_with_user(run, ctx, "list_documents")


@mcp.tool(
    description="检索当前会话用户可访问的文档名称、标签、描述和正文片段。"
)
def search_knowledge(
    ctx: Context,
    query: str,
    knowledge_base_id: int | None = None,
    folder_id: int | None = None,
    limit: int = 10,
) -> dict[str, Any]:
    if not query or not query.strip():
        raise ValueError("query cannot be blank")

    def run(db, user):
        safe_limit = max(1, min(limit, 50))
        keyword = query.strip()
        candidates = accessible_documents(
            db,
            user,
            knowledge_base_id=knowledge_base_id,
            folder_id=folder_id,
        )
        folders = load_folder_map(db, user, knowledge_base_id)
        matches: list[dict[str, Any]] = []
        for document in candidates:
            metadata = serialize_document(document, user=user, folders=folders, db=db)
            metadata_text = " ".join(
                [
                    document.name,
                    document.original_filename,
                    document.description or "",
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
            if len(matches) >= safe_limit:
                break
        return {
            "query": keyword,
            "results": matches,
            "count": len(matches),
            "truncated": len(matches) >= safe_limit and len(candidates) > len(matches),
        }

    return _call_with_user(run, ctx, "search_knowledge")


@mcp.tool(description="读取当前会话用户可访问文档的正文，并以 Markdown 返回。")
def get_document(
    ctx: Context,
    document_id: int,
    max_chars: int = settings.mcp_max_content_chars,
) -> dict[str, Any]:
    def run(db, user):
        document = accessible_document(db, user, document_id)
        content, source = document_to_markdown(document)
        content, truncated = limit_content(content, max_chars)
        folders = load_folder_map(db, user, document.knowledge_base_id)
        return {
            "document": serialize_document(document, user=user, folders=folders, db=db),
            "content_markdown": content,
            "content_source": source,
            "content_chars": len(content),
            "truncated": truncated,
        }

    return _call_with_user(run, ctx, "get_document")


@mcp.tool(description="读取当前会话用户可访问文档的元数据，不读取正文。")
def get_document_metadata(
    ctx: Context,
    document_id: int,
) -> dict[str, Any]:
    def run(db, user):
        document = accessible_document(db, user, document_id)
        folders = load_folder_map(db, user, document.knowledge_base_id)
        return {"document": serialize_document(document, user=user, folders=folders, db=db)}

    return _call_with_user(run, ctx, "get_document_metadata")


def main() -> None:
    transport = settings.mcp_transport.strip().lower()
    if transport != "streamable-http":
        raise RuntimeError(
            "MCP dialogue login server requires MCP_TRANSPORT=streamable-http"
        )

    certfile = os.getenv("MCP_SSL_CERTFILE", "").strip()
    keyfile = os.getenv("MCP_SSL_KEYFILE", "").strip()
    if bool(certfile) != bool(keyfile):
        raise RuntimeError("MCP_SSL_CERTFILE and MCP_SSL_KEYFILE must be configured together")

    if not certfile:
        mcp.run(
            transport="streamable-http",
            host=settings.mcp_host,
            port=DIALOGUE_PORT,
            streamable_http_path=DIALOGUE_PATH,
            json_response=True,
            stateless_http=False,
        )
        return

    cert_path = Path(certfile)
    key_path = Path(keyfile)
    if not cert_path.is_file() or not key_path.is_file():
        raise RuntimeError(
            f"MCP HTTPS certificate files not found: cert={cert_path}, key={key_path}"
        )

    async def run_https() -> None:
        import uvicorn

        starlette_app = mcp.streamable_http_app(
            streamable_http_path=DIALOGUE_PATH,
            json_response=True,
            stateless_http=False,
            host=settings.mcp_host,
        )
        config = uvicorn.Config(
            starlette_app,
            host=settings.mcp_host,
            port=DIALOGUE_PORT,
            log_level=settings.log_level.lower(),
            ssl_certfile=str(cert_path),
            ssl_keyfile=str(key_path),
        )
        await uvicorn.Server(config).serve()

    anyio.run(run_https)


if __name__ == "__main__":
    main()
