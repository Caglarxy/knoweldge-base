from typing import Any

from mcp.server.mcpserver import MCPServer
from mcp.server.mcpserver.context import Context

from app.core.config import settings
from app.db.session import SessionLocal, get_engine
from app.services.audit import record_audit
from app.services.knowledge_query import (
    accessible_document,
    accessible_documents,
    accessible_knowledge_bases,
    authenticate_mcp_credentials,
    authenticate_mcp_user,
    build_search_snippet,
    document_to_markdown,
    limit_content,
    load_folder_map,
    search_document_text,
    serialize_document,
    serialize_knowledge_base,
)


mcp = MCPServer(
    name="knowledge-base",
    instructions=(
        "只读知识库 MCP 服务。stdio 本地模式如果没有预置 Token，必须先调用 "
        "authenticate(username, password) 登录；登录后再使用 list_knowledge_bases "
        "或 search_knowledge 定位资料，再使用 get_document 获取正文。所有结果都经过 "
        "当前用户权限过滤。"
    ),
)


_stdio_session_token: str | None = None


def _request_token(ctx: Context) -> str | None:
    if ctx is not None and ctx.headers:
        for name, value in ctx.headers.items():
            if name.lower() == "authorization" and value:
                return value
    if settings.mcp_transport == "stdio":
        return _stdio_session_token or settings.kb_mcp_token
    return None


def _require_stdio_login() -> None:
    if settings.mcp_transport != "stdio":
        raise PermissionError(
            "Remote MCP requires an Authorization: Bearer <access_token> header"
        )


def _call_with_user(callback, ctx: Context, tool_name: str):
    db = SessionLocal(bind=get_engine())
    user = None
    try:
        user = authenticate_mcp_user(db, _request_token(ctx))
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


@mcp.tool(
    description=(
        "仅用于本地 stdio MCP 的首次登录。输入知识库系统用户名和密码后，服务会在当前 "
        "MCP 进程内保存短期登录状态；不会返回或保存密码。登录成功后可直接调用其他知识库工具。"
    )
)
def authenticate(
    ctx: Context,
    username: str,
    password: str,
) -> dict[str, Any]:
    global _stdio_session_token

    _require_stdio_login()
    db = SessionLocal(bind=get_engine())
    try:
        user, token = authenticate_mcp_credentials(db, username, password)
        _stdio_session_token = token
        record_audit(
            db,
            actor_id=user.id,
            action="mcp_call",
            resource_type="mcp_tool",
            resource_id="authenticate",
        )
        db.commit()
        return {
            "authenticated": True,
            "user": {
                "id": user.id,
                "username": user.username,
                "role": user.role,
            },
            "expires_in": settings.jwt_access_token_expire_minutes * 60,
            "message": "登录成功，后续知识库工具会自动使用当前登录身份",
        }
    except Exception as exc:
        db.rollback()
        record_audit(
            db,
            actor_id=None,
            action="mcp_call",
            resource_type="mcp_tool",
            resource_id="authenticate",
            result="failure",
            error_message=str(exc)[:1000],
        )
        db.commit()
        raise
    finally:
        db.close()


@mcp.tool(
    description="列出当前用户可访问的知识库。返回知识库元数据和可读文档数量。"
)
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
        "列出当前用户可访问的文档。可按知识库、文件夹、根目录或文件名/标签/描述筛选；"
        "正文检索请使用 search_knowledge。"
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
    description=(
        "检索文档名称、标签、描述和可读取正文，返回匹配文档及上下文片段。"
        "这是智能体查找知识的首选工具。"
    )
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


@mcp.tool(
    description="读取一个当前用户可访问文档的正文，并以 Markdown 文本返回。"
)
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


@mcp.tool(description="读取一个当前用户可访问文档的元数据，不读取正文。")
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
    if transport == "stdio":
        mcp.run(transport="stdio")
        return
    if transport == "streamable-http":
        mcp.run(
            transport="streamable-http",
            host=settings.mcp_host,
            port=settings.mcp_port,
            streamable_http_path=settings.mcp_path,
            json_response=True,
            stateless_http=settings.mcp_stateless_http,
        )
        return
    raise RuntimeError("MCP_TRANSPORT must be stdio or streamable-http")


if __name__ == "__main__":
    main()
