from collections.abc import Generator
from pathlib import Path

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.api import documents as documents_api
from app.api import folders as folders_api
from app.core.security import create_access_token, hash_password
from app.db.session import Base
from app.db.session import get_db as app_get_db
from app.main import app
from app.models import AuditLog, User
from app.services.storage import LocalStorage


@pytest.fixture
def admin_client(
    tmp_path: Path,
    monkeypatch: pytest.MonkeyPatch,
) -> Generator[tuple[TestClient, str, str], None, None]:
    engine = create_engine(
        f"sqlite:///{tmp_path / 'admin.db'}",
        connect_args={"check_same_thread": False},
    )
    Base.metadata.create_all(bind=engine)
    testing_session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    db = testing_session()
    admin = User(
        username="system-admin",
        password_hash=hash_password("password-123"),
        role="admin",
        status="active",
        is_active=True,
    )
    user = User(
        username="normal-user",
        password_hash=hash_password("password-123"),
        role="user",
        status="active",
        is_active=True,
    )
    db.add_all([admin, user])
    db.commit()
    db.refresh(admin)
    db.refresh(user)
    admin_token = create_access_token(admin.id)
    user_token = create_access_token(user.id)
    db.close()

    def override_get_db():
        session = testing_session()
        try:
            yield session
        finally:
            session.close()

    monkeypatch.setattr(documents_api, "storage", LocalStorage(tmp_path / "storage"))
    monkeypatch.setattr(folders_api, "storage", LocalStorage(tmp_path / "storage"))
    app.dependency_overrides[app_get_db] = override_get_db
    with TestClient(app) as client:
        yield client, admin_token, user_token
    app.dependency_overrides.clear()
    engine.dispose()


def test_admin_can_manage_users_and_token_policy(admin_client):
    client, admin_token, user_token = admin_client
    admin_headers = {"Authorization": f"Bearer {admin_token}"}
    user_headers = {"Authorization": f"Bearer {user_token}"}

    assert client.get("/api/v1/admin/users", headers=user_headers).status_code == 403

    users = client.get("/api/v1/admin/users", headers=admin_headers)
    assert users.status_code == 200
    target = next(item for item in users.json() if item["username"] == "normal-user")
    assert target["mcp_token_expire_policy"] == "120m"

    updated = client.patch(
        f"/api/v1/admin/users/{target['id']}",
        headers=admin_headers,
        json={"mcp_token_expire_policy": "long", "username": "normal-user-2"},
    )
    assert updated.status_code == 200
    assert updated.json()["username"] == "normal-user-2"
    assert updated.json()["mcp_token_expire_policy"] == "long"

    empty_password = client.patch(
        f"/api/v1/admin/users/{target['id']}",
        headers=admin_headers,
        json={"password": None},
    )
    assert empty_password.status_code == 422

    custom = client.patch(
        f"/api/v1/admin/users/{target['id']}",
        headers=admin_headers,
        json={"mcp_token_expire_policy": "custom:90"},
    )
    assert custom.status_code == 200
    assert custom.json()["mcp_token_expire_policy"] == "custom:90"

    invalid_custom = client.patch(
        f"/api/v1/admin/users/{target['id']}",
        headers=admin_headers,
        json={"mcp_token_expire_policy": "custom:525601"},
    )
    assert invalid_custom.status_code == 422


def test_custom_mcp_token_duration_and_recycle_retention_are_persistent(admin_client):
    client, admin_token, user_token = admin_client
    admin_headers = {"Authorization": f"Bearer {admin_token}"}
    user_headers = {"Authorization": f"Bearer {user_token}"}
    user = next(
        item
        for item in client.get("/api/v1/admin/users", headers=admin_headers).json()
        if item["username"] == "normal-user"
    )

    updated_user = client.patch(
        f"/api/v1/admin/users/{user['id']}",
        headers=admin_headers,
        json={"mcp_token_expire_policy": "custom:90"},
    )
    assert updated_user.status_code == 200

    token_response = client.post("/api/v1/auth/mcp-token", headers=user_headers)
    assert token_response.status_code == 200
    token_body = token_response.json()
    assert token_body["policy"] == "custom:90"
    assert 5300 <= token_body["expires_in"] <= 5400
    assert token_body["policy_label"] == "自定义（90 分钟）"

    settings_response = client.patch(
        "/api/v1/admin/settings",
        headers=admin_headers,
        json={"recycle_bin_retention_days": 45},
    )
    assert settings_response.status_code == 200
    assert settings_response.json()["recycle_bin_retention_days"] == 45
    loaded_settings = client.get("/api/v1/admin/settings", headers=admin_headers)
    assert loaded_settings.json()["recycle_bin_retention_days"] == 45


def test_admin_can_create_user_or_admin(admin_client):
    client, admin_token, user_token = admin_client
    admin_headers = {"Authorization": f"Bearer {admin_token}"}

    created = client.post(
        "/api/v1/admin/users",
        headers=admin_headers,
        json={
            "username": "new-admin",
            "password": "password-123",
            "role": "admin",
            "mcp_token_expire_policy": "long",
        },
    )
    assert created.status_code == 201
    body = created.json()
    assert body["role"] == "admin"
    assert body["mcp_token_expire_policy"] == "long"

    login = client.post(
        "/api/v1/auth/login",
        json={"username": "new-admin", "password": "password-123"},
    )
    assert login.status_code == 200

    rejected = client.post(
        "/api/v1/admin/users",
        headers={"Authorization": f"Bearer {user_token}"},
        json={"username": "blocked-create", "password": "password-123"},
    )
    assert rejected.status_code == 403


def test_current_user_can_issue_persistent_mcp_token(admin_client):
    client, _, user_token = admin_client
    response = client.post(
        "/api/v1/auth/mcp-token",
        headers={"Authorization": f"Bearer {user_token}"},
    )
    assert response.status_code == 200
    body = response.json()
    assert body["policy"] == "120m"
    assert body["expires_in"] > 0
    assert body["access_token"]

    logs = client.get(
        "/api/v1/admin/logs",
        headers={"Authorization": f"Bearer {user_token}"},
    )
    assert logs.status_code == 403


def test_admin_can_filter_agent_invocation_logs(admin_client):
    client, admin_token, _ = admin_client
    admin_headers = {"Authorization": f"Bearer {admin_token}"}

    logs = client.get(
        "/api/v1/admin/logs?category=agent",
        headers=admin_headers,
    )

    assert logs.status_code == 200
    assert logs.json() == []


def test_user_can_change_password(admin_client):
    client, _, user_token = admin_client
    headers = {"Authorization": f"Bearer {user_token}"}

    wrong_current = client.post(
        "/api/v1/auth/change-password",
        headers=headers,
        json={"current_password": "wrong-password", "new_password": "new-password-123"},
    )
    assert wrong_current.status_code == 400

    changed = client.post(
        "/api/v1/auth/change-password",
        headers=headers,
        json={"current_password": "password-123", "new_password": "new-password-123"},
    )
    assert changed.status_code == 200

    old_login = client.post(
        "/api/v1/auth/login",
        json={"username": "normal-user", "password": "password-123"},
    )
    assert old_login.status_code == 401

    new_login = client.post(
        "/api/v1/auth/login",
        json={"username": "normal-user", "password": "new-password-123"},
    )
    assert new_login.status_code == 200


def test_admin_can_configure_knowledge_base_upload_policy(admin_client):
    client, admin_token, user_token = admin_client
    admin_headers = {"Authorization": f"Bearer {admin_token}"}
    user_headers = {"Authorization": f"Bearer {user_token}"}

    owner_created = client.post(
        "/api/v1/admin/users",
        headers=admin_headers,
        json={"username": "knowledge-owner", "password": "password-123"},
    )
    assert owner_created.status_code == 201
    owner_login = client.post(
        "/api/v1/auth/login",
        json={"username": "knowledge-owner", "password": "password-123"},
    )
    assert owner_login.status_code == 200
    owner_headers = {"Authorization": f"Bearer {owner_login.json()['access_token']}"}
    knowledge_base = client.get(
        "/api/v1/knowledge-bases",
        headers=owner_headers,
    ).json()[0]
    knowledge_base_id = knowledge_base["id"]

    forbidden = client.post(
        "/api/v1/documents/upload",
        headers=user_headers,
        data={"knowledge_base_id": str(knowledge_base_id)},
        files={"file": ("before.txt", b"before", "text/plain")},
    )
    assert forbidden.status_code == 403

    listed = client.get("/api/v1/admin/knowledge-bases", headers=admin_headers)
    assert listed.status_code == 200
    listed_item = next(item for item in listed.json() if item["id"] == knowledge_base_id)
    assert listed_item["owner_username"] == "knowledge-owner"
    assert listed_item["upload_policy"] == "owner_only"

    enabled = client.patch(
        f"/api/v1/admin/knowledge-bases/{knowledge_base_id}",
        headers=admin_headers,
        json={"upload_policy": "all_users"},
    )
    assert enabled.status_code == 200
    assert enabled.json()["upload_policy"] == "all_users"

    allowed = client.post(
        "/api/v1/documents/upload",
        headers=user_headers,
        data={"knowledge_base_id": str(knowledge_base_id)},
        files={"file": ("after.txt", b"after", "text/plain")},
    )
    assert allowed.status_code == 201
    current_user = client.get("/api/v1/auth/me", headers=user_headers)
    assert current_user.status_code == 200
    assert allowed.json()["owner_id"] == current_user.json()["id"]

    disabled = client.patch(
        f"/api/v1/admin/knowledge-bases/{knowledge_base_id}",
        headers=admin_headers,
        json={"upload_policy": "owner_only"},
    )
    assert disabled.status_code == 200
    assert disabled.json()["upload_policy"] == "owner_only"

    forbidden_again = client.post(
        "/api/v1/documents/upload",
        headers=user_headers,
        data={"knowledge_base_id": str(knowledge_base_id)},
        files={"file": ("after-disabled.txt", b"blocked", "text/plain")},
    )
    assert forbidden_again.status_code == 403


def test_admin_can_configure_knowledge_base_viewers(admin_client):
    client, admin_token, user_token = admin_client
    admin_headers = {"Authorization": f"Bearer {admin_token}"}
    viewer_headers = {"Authorization": f"Bearer {user_token}"}
    viewer_id = client.get("/api/v1/auth/me", headers=viewer_headers).json()["id"]

    owner_created = client.post(
        "/api/v1/admin/users",
        headers=admin_headers,
        json={"username": "view-owner", "password": "password-123"},
    )
    assert owner_created.status_code == 201
    owner_login = client.post(
        "/api/v1/auth/login",
        json={"username": "view-owner", "password": "password-123"},
    )
    owner_headers = {"Authorization": f"Bearer {owner_login.json()['access_token']}"}
    owner_kb = client.get("/api/v1/knowledge-bases", headers=owner_headers).json()[0]
    knowledge_base_id = owner_kb["id"]

    listed = client.get("/api/v1/admin/knowledge-bases", headers=admin_headers)
    item = next(entry for entry in listed.json() if entry["id"] == knowledge_base_id)
    assert item["view_policy"] == "all_users"

    owner_only = client.patch(
        f"/api/v1/admin/knowledge-bases/{knowledge_base_id}",
        headers=admin_headers,
        json={
            "upload_policy": "owner_only",
            "view_policy": "owner_only",
            "viewer_ids": [],
        },
    )
    assert owner_only.status_code == 200
    assert owner_only.json()["view_policy"] == "owner_only"
    assert client.get(
        f"/api/v1/documents?knowledge_base_id={knowledge_base_id}",
        headers=viewer_headers,
    ).status_code == 403

    selected = client.patch(
        f"/api/v1/admin/knowledge-bases/{knowledge_base_id}",
        headers=admin_headers,
        json={
            "upload_policy": "owner_only",
            "view_policy": "selected_users",
            "viewer_ids": [viewer_id],
        },
    )
    assert selected.status_code == 200
    assert selected.json()["viewer_ids"] == [viewer_id]
    assert client.get(
        f"/api/v1/knowledge-bases",
        headers=viewer_headers,
    ).status_code == 200
    assert any(
        item["id"] == knowledge_base_id
        for item in client.get("/api/v1/knowledge-bases", headers=viewer_headers).json()
    )

    all_users = client.patch(
        f"/api/v1/admin/knowledge-bases/{knowledge_base_id}",
        headers=admin_headers,
        json={
            "upload_policy": "owner_only",
            "view_policy": "all_users",
            "viewer_ids": [],
        },
    )
    assert all_users.status_code == 200
    assert all_users.json()["visibility"] == "public"


def test_admin_can_update_view_policy_without_resetting_upload_policy(admin_client):
    client, admin_token, _ = admin_client
    admin_headers = {"Authorization": f"Bearer {admin_token}"}

    created = client.post(
        "/api/v1/admin/users",
        headers=admin_headers,
        json={"username": "partial-owner", "password": "password-123"},
    )
    assert created.status_code == 201
    login = client.post(
        "/api/v1/auth/login",
        json={"username": "partial-owner", "password": "password-123"},
    )
    knowledge_base = client.get(
        "/api/v1/knowledge-bases",
        headers={"Authorization": f"Bearer {login.json()['access_token']}"},
    ).json()[0]

    updated = client.patch(
        f"/api/v1/admin/knowledge-bases/{knowledge_base['id']}",
        headers=admin_headers,
        json={"view_policy": "owner_only"},
    )

    assert updated.status_code == 200
    assert updated.json()["view_policy"] == "owner_only"
    assert updated.json()["upload_policy"] == "owner_only"
