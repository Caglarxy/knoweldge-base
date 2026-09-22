from __future__ import annotations

import os
import sys
import tempfile
from pathlib import Path

import anyio
from mcp import ClientSession
from mcp.client.stdio import StdioServerParameters, stdio_client
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

BACKEND_DIR = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(BACKEND_DIR))


async def run_smoke_test() -> None:
    with tempfile.TemporaryDirectory(prefix="kb-mcp-auth-") as temp_dir:
        temp_path = Path(temp_dir)
        database_url = f"sqlite:///{(temp_path / 'auth.db').as_posix()}"
        os.environ.update(
            {
                "PYTHONPATH": str(BACKEND_DIR),
                "DATABASE_URL": database_url,
                "LOCAL_STORAGE_PATH": str(temp_path / "storage"),
                "JWT_SECRET_KEY": "change-me",
                "KB_MCP_TOKEN": "",
                "MCP_TRANSPORT": "stdio",
            }
        )

        from app.core.security import hash_password
        from app.db.session import Base
        from app.models import KnowledgeBase, User

        engine = create_engine(database_url, connect_args={"check_same_thread": False})
        Base.metadata.create_all(bind=engine)
        session_factory = sessionmaker(bind=engine, autocommit=False, autoflush=False)
        db = session_factory()
        try:
            user = User(
                username="mcp-auth-smoke",
                password_hash=hash_password("password-123"),
                role="user",
                status="active",
                is_active=True,
            )
            db.add(user)
            db.flush()
            db.add(
                KnowledgeBase(
                    name="MCP 登录测试知识库",
                    owner_id=user.id,
                    visibility="public",
                    status="active",
                )
            )
            db.commit()
        finally:
            db.close()

        python = BACKEND_DIR / ".mcp-venv" / "Scripts" / "python.exe"
        server = StdioServerParameters(
            command=str(python),
            args=["-m", "app.mcp_server"],
            env=os.environ.copy(),
            cwd=BACKEND_DIR,
        )

        async with stdio_client(server) as (read_stream, write_stream):
            async with ClientSession(read_stream, write_stream) as session:
                await session.initialize()
                auth_result = await session.call_tool(
                    "authenticate",
                    {"username": "mcp-auth-smoke", "password": "password-123"},
                )
                if auth_result.is_error:
                    raise RuntimeError(f"authenticate failed: {auth_result.content}")

                list_result = await session.call_tool("list_knowledge_bases", {})
                if list_result.is_error:
                    raise RuntimeError(
                        f"list_knowledge_bases after authenticate failed: "
                        f"{list_result.content}"
                    )

        engine.dispose()
        print("MCP stdio authenticate smoke test passed")


if __name__ == "__main__":
    anyio.run(run_smoke_test)
