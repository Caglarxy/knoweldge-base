from __future__ import annotations

import os
import sys
from pathlib import Path

import anyio
import httpx2
from mcp import ClientSession
from mcp.client.streamable_http import streamable_http_client

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

    url = os.getenv("MCP_HTTP_URL", "http://127.0.0.1:8020/mcp")
    async with httpx2.AsyncClient(
        headers={"Authorization": f"Bearer {token}"},
        timeout=30,
    ) as http_client:
        async with streamable_http_client(url, http_client=http_client) as streams:
            read_stream, write_stream = streams[:2]
            async with ClientSession(read_stream, write_stream) as session:
                await session.initialize()
                result = await session.call_tool("list_knowledge_bases", {})
                if result.is_error:
                    raise RuntimeError(f"list_knowledge_bases failed: {result.content}")
                print(f"MCP HTTP smoke test passed; url={url}")


if __name__ == "__main__":
    anyio.run(run_smoke_test)
