from __future__ import annotations

import os
import sys
from pathlib import Path

import anyio
from mcp import ClientSession
from mcp.client.stdio import StdioServerParameters, stdio_client

BACKEND_DIR = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(BACKEND_DIR))

from app.core.config import settings
from app.core.security import create_access_token
from app.db.session import SessionLocal, get_engine
from app.models import User


async def run_smoke_test() -> None:
    db = SessionLocal(bind=get_engine())
    try:
        user = db.query(User).filter(User.is_active.is_(True), User.status == "active").first()
        if user is None:
            raise RuntimeError("No active user exists in the local database")
        token = create_access_token(user.id)
    finally:
        db.close()

    backend_dir = BACKEND_DIR
    python = backend_dir / ".mcp-venv" / "Scripts" / "python.exe"
    if not python.is_file():
        raise RuntimeError(f"MCP environment not found: {python}")

    env = os.environ.copy()
    env.update(
        {
            "PYTHONPATH": str(backend_dir),
            "DATABASE_URL": settings.database_url,
            "LOCAL_STORAGE_PATH": settings.local_storage_path,
            "JWT_SECRET_KEY": settings.jwt_secret_key,
            "KB_MCP_TOKEN": token,
            "MCP_TRANSPORT": "stdio",
        }
    )
    server = StdioServerParameters(
        command=str(python),
        args=["-m", "app.mcp_server"],
        env=env,
        cwd=backend_dir,
    )

    async with stdio_client(server) as (read_stream, write_stream):
        async with ClientSession(read_stream, write_stream) as session:
            await session.initialize()
            tools = await session.list_tools()
            names = {tool.name for tool in tools.tools}
            expected = {
                "authenticate",
                "list_knowledge_bases",
                "list_documents",
                "search_knowledge",
                "get_document",
                "get_document_metadata",
            }
            missing = expected - names
            if missing:
                raise RuntimeError(f"MCP tools are missing: {sorted(missing)}")

            result = await session.call_tool("list_knowledge_bases", {})
            if result.is_error:
                raise RuntimeError(f"list_knowledge_bases failed: {result.content}")
            print(f"MCP stdio smoke test passed; tools={sorted(names)}")


if __name__ == "__main__":
    anyio.run(run_smoke_test)
