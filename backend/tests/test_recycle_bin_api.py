from pathlib import Path

from fastapi.testclient import TestClient

from app.api import recycle_bin as recycle_bin_api
from app.api import documents as documents_api
from app.api import folders as folders_api
from app.services.storage import LocalStorage
from test_phase_one_api import client, register


def test_recycle_bin_isolated_restore_and_purge(
    client: TestClient,
    tmp_path: Path,
    monkeypatch,
):
    testing_storage = LocalStorage(tmp_path / "recycle-storage")
    monkeypatch.setattr(documents_api, "storage", testing_storage)
    monkeypatch.setattr(folders_api, "storage", testing_storage)
    monkeypatch.setattr(recycle_bin_api, "storage", testing_storage)

    owner_token, _ = register(client, "recycle_owner")
    viewer_token, _ = register(client, "recycle_viewer")
    owner_headers = {"Authorization": f"Bearer {owner_token}"}
    viewer_headers = {"Authorization": f"Bearer {viewer_token}"}
    knowledge_base_id = client.get(
        "/api/v1/knowledge-bases",
        headers=owner_headers,
    ).json()[0]["id"]

    uploaded = client.post(
        "/api/v1/documents/upload",
        headers=owner_headers,
        data={"knowledge_base_id": str(knowledge_base_id)},
        files={"file": ("purge.txt", b"purge me", "text/plain")},
    )
    assert uploaded.status_code == 201
    document_id = uploaded.json()["id"]

    deleted = client.delete(
        f"/api/v1/documents/{document_id}",
        headers=owner_headers,
    )
    assert deleted.status_code == 200
    assert (tmp_path / "recycle-storage" / "documents" / str(document_id)).is_dir()

    owner_items = client.get("/api/v1/recycle-bin", headers=owner_headers)
    assert owner_items.status_code == 200
    assert [(item["kind"], item["id"]) for item in owner_items.json()] == [
        ("document", document_id),
    ]
    assert client.get("/api/v1/recycle-bin", headers=viewer_headers).json() == []

    assert client.post(
        f"/api/v1/recycle-bin/document/{document_id}/restore",
        headers=viewer_headers,
    ).status_code == 404
    assert client.delete(
        f"/api/v1/recycle-bin/document/{document_id}",
        headers=viewer_headers,
    ).status_code == 404

    restored = client.post(
        f"/api/v1/recycle-bin/document/{document_id}/restore",
        headers=owner_headers,
    )
    assert restored.status_code == 200
    assert restored.json()["status"] == "restored"
    assert client.get("/api/v1/recycle-bin", headers=owner_headers).json() == []

    client.delete(f"/api/v1/documents/{document_id}", headers=owner_headers)
    purged = client.delete(
        f"/api/v1/recycle-bin/document/{document_id}",
        headers=owner_headers,
    )
    assert purged.status_code == 204
    assert not (tmp_path / "recycle-storage" / "documents" / str(document_id)).exists()


def test_empty_folder_can_be_restored_from_recycle_bin(client: TestClient, tmp_path: Path, monkeypatch):
    testing_storage = LocalStorage(tmp_path / "recycle-storage")
    monkeypatch.setattr(folders_api, "storage", testing_storage)
    monkeypatch.setattr(recycle_bin_api, "storage", testing_storage)

    token, _ = register(client, "recycle_folder_owner")
    headers = {"Authorization": f"Bearer {token}"}
    knowledge_base_id = client.get(
        "/api/v1/knowledge-bases",
        headers=headers,
    ).json()[0]["id"]
    folder = client.post(
        "/api/v1/folders",
        headers=headers,
        json={"knowledge_base_id": knowledge_base_id, "name": "待恢复文件夹"},
    ).json()
    assert (tmp_path / "recycle-storage" / "folders" / str(folder["id"])).is_dir()

    deleted = client.delete(f"/api/v1/folders/{folder['id']}", headers=headers)
    assert deleted.status_code == 200
    assert client.get("/api/v1/recycle-bin", headers=headers).json()[0]["kind"] == "folder"

    restored = client.post(
        f"/api/v1/recycle-bin/folder/{folder['id']}/restore",
        headers=headers,
    )
    assert restored.status_code == 200
    assert restored.json()["status"] == "restored"
    assert client.get("/api/v1/folders", headers=headers).json()[0]["status"] == "active"
