from __future__ import annotations

import base64
import hashlib
import os
import secrets
import sys
import tempfile
from pathlib import Path
from urllib.parse import parse_qs, urlparse

import anyio
import httpx2
import uvicorn
from mcp import ClientSession
from mcp.client.streamable_http import streamable_http_client
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

BACKEND_DIR = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(BACKEND_DIR))


def pkce_pair() -> tuple[str, str]:
    verifier = secrets.token_urlsafe(48)
    digest = hashlib.sha256(verifier.encode("ascii")).digest()
    challenge = base64.urlsafe_b64encode(digest).decode("ascii").rstrip("=")
    return verifier, challenge


async def run_smoke_test() -> None:
    with tempfile.TemporaryDirectory(prefix="kb-mcp-oauth-") as temp_dir:
        temp_path = Path(temp_dir)
        database_url = f"sqlite:///{(temp_path / 'oauth.db').as_posix()}"
        os.environ.update(
            {
                "PYTHONPATH": str(BACKEND_DIR),
                "DATABASE_URL": database_url,
                "LOCAL_STORAGE_PATH": str(temp_path / "storage"),
                "JWT_SECRET_KEY": "oauth-smoke-secret",
                "KB_MCP_TOKEN": "",
                "MCP_TRANSPORT": "streamable-http",
                "MCP_STATELESS_HTTP": "false",
                "MCP_PORT": "8024",
                "MCP_PATH": "/mcp",
                "MCP_OAUTH_ISSUER_URL": "http://127.0.0.1:8024",
            }
        )

        from app.core.security import hash_password
        from app.db.session import Base
        from app.db import session as db_session
        from app.models import KnowledgeBase, User
        from app.mcp_dialogue_server import mcp

        engine = create_engine(database_url, connect_args={"check_same_thread": False})
        Base.metadata.create_all(bind=engine)
        session_factory = sessionmaker(bind=engine, autocommit=False, autoflush=False)
        db = session_factory()
        try:
            user = User(
                username="mcp-oauth-smoke",
                password_hash=hash_password("password-123"),
                role="user",
                status="active",
                is_active=True,
            )
            db.add(user)
            db.flush()
            db.add(
                KnowledgeBase(
                    name="OAuth 测试知识库",
                    owner_id=user.id,
                    visibility="public",
                    status="active",
                )
            )
            db.commit()
        finally:
            db.close()

        mcp_app = mcp.streamable_http_app(
            streamable_http_path="/mcp",
            json_response=True,
            stateless_http=False,
            host="127.0.0.1",
        )
        server = uvicorn.Server(
            uvicorn.Config(mcp_app, host="127.0.0.1", port=8024, log_level="error")
        )
        task_group = anyio.create_task_group()
        await task_group.__aenter__()
        task_group.start_soon(server.serve)
        try:
            for _ in range(50):
                if server.started:
                    break
                await anyio.sleep(0.1)
            else:
                raise RuntimeError("MCP OAuth server did not start")

            base_url = "http://127.0.0.1:8024"
            async with httpx2.AsyncClient(
                timeout=30,
                follow_redirects=False,
            ) as http_client:
                metadata = await http_client.get(
                    f"{base_url}/.well-known/oauth-authorization-server"
                )
                assert metadata.status_code == 200, metadata.text
                metadata_json = metadata.json()
                assert metadata_json["registration_endpoint"].endswith("/register")

                registration = await http_client.post(
                    f"{base_url}/register",
                    json={
                        "client_name": "OAuth smoke client",
                        "redirect_uris": ["http://127.0.0.1:8765/callback"],
                        "response_types": ["code"],
                        "grant_types": ["authorization_code", "refresh_token"],
                        "token_endpoint_auth_method": "none",
                    },
                )
                assert registration.status_code == 201, registration.text
                client = registration.json()

                verifier, challenge = pkce_pair()
                authorization = await http_client.get(
                    f"{base_url}/authorize",
                    params={
                        "client_id": client["client_id"],
                        "redirect_uri": "http://127.0.0.1:8765/callback",
                        "response_type": "code",
                        "code_challenge": challenge,
                        "code_challenge_method": "S256",
                        "state": "oauth-smoke-state",
                        "scope": "knowledge:read",
                        "resource": f"{base_url}/mcp",
                    },
                )
                assert authorization.status_code == 302, authorization.text
                login_url = authorization.headers["location"]
                transaction = parse_qs(urlparse(login_url).query)["transaction"][0]

                login_page = await http_client.get(login_url)
                assert login_page.status_code == 200
                assert "知识库授权登录" in login_page.text

                login = await http_client.post(
                    login_url,
                    data={
                        "transaction": transaction,
                        "username": "mcp-oauth-smoke",
                        "password": "password-123",
                    },
                )
                assert login.status_code == 303, login.text
                callback_url = login.headers["location"]
                callback_params = parse_qs(urlparse(callback_url).query)
                assert callback_params["state"] == ["oauth-smoke-state"]
                authorization_code = callback_params["code"][0]

                token_response = await http_client.post(
                    f"{base_url}/token",
                    data={
                        "grant_type": "authorization_code",
                        "client_id": client["client_id"],
                        "code": authorization_code,
                        "redirect_uri": "http://127.0.0.1:8765/callback",
                        "code_verifier": verifier,
                    },
                )
                assert token_response.status_code == 200, token_response.text
                tokens = token_response.json()
                assert tokens["refresh_token"]

                async with httpx2.AsyncClient(
                    timeout=30,
                    headers={"Authorization": f"Bearer {tokens['access_token']}"},
                ) as mcp_http_client:
                    async with streamable_http_client(
                        f"{base_url}/mcp",
                        http_client=mcp_http_client,
                    ) as streams:
                        read_stream, write_stream = streams[:2]
                        async with ClientSession(read_stream, write_stream) as session:
                            await session.initialize()
                            result = await session.call_tool(
                                "list_knowledge_bases",
                                {},
                            )
                            assert not result.is_error, result.content

                refresh_response = await http_client.post(
                    f"{base_url}/token",
                    data={
                        "grant_type": "refresh_token",
                        "client_id": client["client_id"],
                        "refresh_token": tokens["refresh_token"],
                    },
                )
                assert refresh_response.status_code == 200, refresh_response.text
                refreshed = refresh_response.json()
                assert refreshed["refresh_token"] != tokens["refresh_token"]

                async with httpx2.AsyncClient(
                    timeout=30,
                    headers={"Authorization": f"Bearer {refreshed['access_token']}"},
                ) as mcp_http_client:
                    async with streamable_http_client(
                        f"{base_url}/mcp",
                        http_client=mcp_http_client,
                    ) as streams:
                        read_stream, write_stream = streams[:2]
                        async with ClientSession(read_stream, write_stream) as session:
                            await session.initialize()
                            result = await session.call_tool(
                                "list_knowledge_bases",
                                {},
                            )
                            assert not result.is_error, result.content
        finally:
            server.should_exit = True
            await task_group.__aexit__(None, None, None)
            if db_session._engine is not None:
                db_session._engine.dispose()
                db_session._engine = None
            engine.dispose()

        print("MCP OAuth dialogue smoke test passed")


if __name__ == "__main__":
    anyio.run(run_smoke_test)
