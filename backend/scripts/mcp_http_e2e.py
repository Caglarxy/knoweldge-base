from __future__ import annotations

import os
import sys
from pathlib import Path

import anyio
import httpx2
import uvicorn
from mcp import ClientSession
from mcp.client.streamable_http import streamable_http_client

BACKEND_DIR = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(BACKEND_DIR))

os.environ.update(
    {
        "PYTHONPATH": str(BACKEND_DIR),
        "MCP_TRANSPORT": "streamable-http",
        "MCP_HOST": "127.0.0.1",
        "MCP_PORT": "8021",
        "MCP_PATH": "/mcp",
        "MCP_STATELESS_HTTP": "true",
        "DATABASE_URL": "sqlite:///./data/knowledge_base.db",
        "LOCAL_STORAGE_PATH": "./data/storage",
        "JWT_SECRET_KEY": "change-me",
    }
)

from app.core.security import create_access_token
from app.db.session import SessionLocal, get_engine
from app.models import User
from app.mcp_server import mcp


async def run_e2e() -> None:
    db = SessionLocal(bind=get_engine())
    try:
        user = db.query(User).filter(User.is_active.is_(True), User.status == "active").first()
        if user is None:
            raise RuntimeError("No active user exists in the local database")
        token = create_access_token(user.id)
    finally:
        db.close()

    app = mcp.streamable_http_app(
        streamable_http_path="/mcp",
        json_response=True,
        stateless_http=True,
        host="127.0.0.1",
    )
    server = uvicorn.Server(
        uvicorn.Config(app, host="127.0.0.1", port=8021, log_level="error")
    )
    server_task = anyio.create_task_group()
    await server_task.__aenter__()
    server_task.start_soon(server.serve)
    try:
        for _ in range(50):
            if server.started:
                break
            await anyio.sleep(0.1)
        else:
            raise RuntimeError("MCP HTTP server did not start")

        async with httpx2.AsyncClient(
            headers={"Authorization": f"Bearer {token}"},
            timeout=30,
        ) as http_client:
            async with streamable_http_client(
                "http://127.0.0.1:8021/mcp",
                http_client=http_client,
            ) as streams:
                read_stream, write_stream = streams[:2]
                async with ClientSession(read_stream, write_stream) as session:
                    await session.initialize()
                    result = await session.call_tool("list_knowledge_bases", {})
                    if result.is_error:
                        raise RuntimeError(f"list_knowledge_bases failed: {result.content}")
                    print("MCP Streamable HTTP e2e test passed")
    finally:
        server.should_exit = True
        await server_task.__aexit__(None, None, None)


if __name__ == "__main__":
    anyio.run(run_e2e)
