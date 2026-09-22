from __future__ import annotations

import base64
import hashlib
import re
from pathlib import Path
from urllib.parse import parse_qs, urlsplit

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.api import agent as agent_api
from app.api import rest_oauth as rest_oauth_api
from app.core.security import hash_password
from app.db.session import Base, get_db
from app.models import Document, KnowledgeBase, User
from app.rest_api_server import app, rest_oauth
from app.services import container
from app.services import knowledge_query
from app.services.mcp_tokens import issue_mcp_token
from app.services.rest_oauth import RestOAuthService
from app.services.storage import LocalStorage


def _pkce_pair() -> tuple[str, str]:
    verifier = "test-verifier-" + ("x" * 32)
    digest = hashlib.sha256(verifier.encode("ascii")).digest()
    challenge = base64.urlsafe_b64encode(digest).decode("ascii").rstrip("=")
    return verifier, challenge


@pytest.fixture
def rest_client(tmp_path: Path, monkeypatch: pytest.MonkeyPatch):
    engine = create_engine(
        f"sqlite:///{tmp_path / 'rest-api.db'}",
        connect_args={"check_same_thread": False},
    )
    Base.metadata.create_all(bind=engine)
    testing_session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    db = testing_session()
    user = User(
        username="agent-user",
        password_hash=hash_password("password-123"),
        role="user",
        status="active",
        is_active=True,
    )
    other = User(
        username="other-user",
        password_hash=hash_password("password-123"),
        role="user",
        status="active",
        is_active=True,
    )
    db.add_all([user, other])
    db.flush()
    knowledge_base = KnowledgeBase(
        name="Agent KB",
        description="Agent test knowledge base",
        owner_id=user.id,
        upload_policy="owner_only",
        view_policy="owner_only",
        visibility="public",
        is_team_space=False,
        status="active",
    )
    hidden_knowledge_base = KnowledgeBase(
        name="Other KB",
        description="Should not be visible",
        owner_id=other.id,
        upload_policy="owner_only",
        view_policy="owner_only",
        visibility="public",
        is_team_space=False,
        status="active",
    )
    db.add_all([knowledge_base, hidden_knowledge_base])
    db.flush()
    document = Document(
        knowledge_base_id=knowledge_base.id,
        owner_id=user.id,
        name="实验方案.txt",
        original_filename="实验方案.txt",
        extension=".txt",
        mime_type="text/plain",
        size_bytes=len("实验内容".encode("utf-8")),
        storage_key="documents/agent-test/source/experiment.txt",
        status="ready",
        visibility="public",
    )
    hidden_document = Document(
        knowledge_base_id=hidden_knowledge_base.id,
        owner_id=other.id,
        name="秘密.txt",
        original_filename="秘密.txt",
        extension=".txt",
        mime_type="text/plain",
        size_bytes=6,
        storage_key="documents/other-test/source/secret.txt",
        status="ready",
        visibility="public",
    )
    db.add_all([document, hidden_document])
    db.commit()
    user_id = user.id
    document_storage_key = document.storage_key
    hidden_document_storage_key = hidden_document.storage_key
    document_id = document.id
    db.close()

    testing_storage = LocalStorage(tmp_path / "storage")
    testing_storage.put_bytes(document_storage_key, "实验方案\n实验内容".encode("utf-8"))
    testing_storage.put_bytes(hidden_document_storage_key, "秘密内容".encode("utf-8"))
    monkeypatch.setattr(container, "storage", testing_storage)
    monkeypatch.setattr(knowledge_query, "storage", testing_storage)
    monkeypatch.setattr(agent_api, "storage", testing_storage)
    monkeypatch.setattr("app.rest_api_server.init_db", lambda: None)

    def override_get_db():
        session = testing_session()
        try:
            yield session
        finally:
            session.close()

    test_oauth = RestOAuthService("http://testserver:9030")
    app.dependency_overrides[get_db] = override_get_db
    app.dependency_overrides[agent_api.get_rest_oauth_service] = lambda: test_oauth
    app.dependency_overrides[rest_oauth_api.get_rest_oauth_service] = lambda: test_oauth
    with TestClient(app) as client:
        yield client, testing_session, user_id, document_id
    app.dependency_overrides.clear()
    engine.dispose()


def _register_client(client: TestClient) -> tuple[str, str]:
    response = client.post(
        "/oauth/register",
        json={
            "client_name": "Test Agent",
            "redirect_uris": ["http://127.0.0.1:8765/callback"],
        },
    )
    assert response.status_code == 201
    payload = response.json()
    return payload["client_id"], payload["redirect_uris"][0]


def _authorize(
    client: TestClient,
    *,
    client_id: str,
    redirect_uri: str,
    verifier: str,
    challenge: str,
) -> str:
    authorize = client.get(
        "/oauth/authorize",
        params={
            "client_id": client_id,
            "redirect_uri": redirect_uri,
            "response_type": "code",
            "scope": "knowledge:read",
            "state": "state-123",
            "code_challenge": challenge,
            "code_challenge_method": "S256",
        },
    )
    assert authorize.status_code == 200
    transaction_match = re.search(
        r'name="transaction" value="([^"]+)"',
        authorize.text,
    )
    assert transaction_match is not None
    login = client.post(
        "/oauth/login",
        data={
            "transaction": transaction_match.group(1),
            "username": "agent-user",
            "password": "password-123",
        },
        follow_redirects=False,
    )
    assert login.status_code == 303
    location = login.headers["location"]
    query = parse_qs(urlsplit(location).query)
    assert query["state"] == ["state-123"]
    return query["code"][0]


def test_oauth_authorization_refresh_revoke_and_api_access(rest_client):
    client, _, _, document_id = rest_client
    client_id, redirect_uri = _register_client(client)
    verifier, challenge = _pkce_pair()
    code = _authorize(
        client,
        client_id=client_id,
        redirect_uri=redirect_uri,
        verifier=verifier,
        challenge=challenge,
    )

    token = client.post(
        "/oauth/token",
        data={
            "grant_type": "authorization_code",
            "client_id": client_id,
            "code": code,
            "redirect_uri": redirect_uri,
            "code_verifier": verifier,
        },
    )
    assert token.status_code == 200
    token_payload = token.json()
    assert token_payload["token_type"] == "Bearer"
    assert token_payload["refresh_token"]

    headers = {"Authorization": f"Bearer {token_payload['access_token']}"}
    knowledge_bases = client.get("/api/v1/agent/knowledge-bases", headers=headers)
    assert knowledge_bases.status_code == 200
    assert [item["name"] for item in knowledge_bases.json()["items"]] == ["Agent KB"]

    search = client.post(
        "/api/v1/agent/search",
        headers=headers,
        json={"query": "实验方案"},
    )
    assert search.status_code == 200
    assert search.json()["results"][0]["id"] == document_id

    markdown = client.get(
        f"/api/v1/agent/documents/{document_id}/markdown",
        headers=headers,
    )
    assert markdown.status_code == 200, markdown.text
    assert "实验内容" in markdown.json()["content_markdown"]

    refreshed = client.post(
        "/oauth/token",
        data={
            "grant_type": "refresh_token",
            "client_id": client_id,
            "refresh_token": token_payload["refresh_token"],
        },
    )
    assert refreshed.status_code == 200
    assert refreshed.json()["refresh_token"] != token_payload["refresh_token"]

    revoked = client.post(
        "/oauth/revoke",
        data={
            "client_id": client_id,
            "token": token_payload["access_token"],
        },
    )
    assert revoked.status_code == 200
    assert client.get(
        "/api/v1/agent/knowledge-bases",
        headers=headers,
    ).status_code == 401


def test_oauth_session_reuses_authorization_without_password(rest_client):
    client, _, _, _ = rest_client
    client_id, redirect_uri = _register_client(client)
    verifier, challenge = _pkce_pair()
    _authorize(
        client,
        client_id=client_id,
        redirect_uri=redirect_uri,
        verifier=verifier,
        challenge=challenge,
    )

    second_verifier, second_challenge = _pkce_pair()
    second_authorize = client.get(
        "/oauth/authorize",
        params={
            "client_id": client_id,
            "redirect_uri": redirect_uri,
            "response_type": "code",
            "scope": "knowledge:read",
            "code_challenge": second_challenge,
            "code_challenge_method": "S256",
        },
        follow_redirects=False,
    )
    assert second_authorize.status_code == 303
    assert "code=" in second_authorize.headers["location"]
    assert second_verifier


def test_bearer_mcp_token_works_on_new_rest_api(rest_client):
    client, testing_session, user_id, _ = rest_client
    db = testing_session()
    user = db.get(User, user_id)
    token, _ = issue_mcp_token(db, user)
    db.close()

    response = client.get(
        "/api/v1/agent/knowledge-bases",
        headers={"Authorization": f"Bearer {token}"},
    )
    assert response.status_code == 200
    assert response.json()["total"] == 1


def test_oauth_rejects_invalid_pkce_and_missing_authentication(rest_client):
    client, _, _, _ = rest_client
    client_id, redirect_uri = _register_client(client)
    verifier, challenge = _pkce_pair()
    code = _authorize(
        client,
        client_id=client_id,
        redirect_uri=redirect_uri,
        verifier=verifier,
        challenge=challenge,
    )
    invalid = client.post(
        "/oauth/token",
        data={
            "grant_type": "authorization_code",
            "client_id": client_id,
            "code": code,
            "redirect_uri": redirect_uri,
            "code_verifier": "wrong-verifier",
        },
    )
    assert invalid.status_code == 400
    assert invalid.json()["error"] == "invalid_grant"
    assert client.get("/api/v1/agent/knowledge-bases").status_code == 401


def test_openapi_declares_bearer_authentication(rest_client):
    client, _, _, _ = rest_client
    schema = client.get("/openapi.json")
    assert schema.status_code == 200
    security_schemes = schema.json()["components"]["securitySchemes"]
    assert security_schemes["bearerAuth"]["scheme"] == "bearer"
    assert "oauth2" not in security_schemes
    assert schema.json()["paths"]["/api/v1/agent/search"]["post"]["security"] == [
        {"bearerAuth": []},
    ]
    assert schema.json()["paths"]["/api/v1/agent/search"]["post"]["operationId"] == "search_knowledge"
    assert schema.json()["paths"]["/api/v1/agent/knowledge-bases"]["get"]["operationId"] == "list_knowledge_bases"
