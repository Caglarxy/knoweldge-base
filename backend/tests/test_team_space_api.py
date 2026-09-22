from fastapi.testclient import TestClient

from test_phase_one_api import client, register


def test_team_space_is_separate_and_permission_scoped(client: TestClient):
    owner_token, _ = register(client, "team-owner")
    viewer_token, _ = register(client, "team-viewer")
    owner_headers = {"Authorization": f"Bearer {owner_token}"}
    viewer_headers = {"Authorization": f"Bearer {viewer_token}"}

    owner_spaces = client.get("/api/v1/team-spaces", headers=owner_headers)
    assert owner_spaces.status_code == 200
    default_space = next(item for item in owner_spaces.json() if item["is_owner"])
    assert default_space["name"] == "team-owner的团队空间"

    created = client.post(
        "/api/v1/team-spaces",
        headers=owner_headers,
        json={"name": "研发协作空间", "description": "团队资料"},
    )
    assert created.status_code == 201
    space = created.json()
    assert space["knowledge_base_id"] != space["id"]

    team_folder = client.post(
        "/api/v1/folders",
        headers=owner_headers,
        json={"team_space_id": space["id"], "name": "团队资料"},
    )
    assert team_folder.status_code == 201
    assert team_folder.json()["team_space_id"] == space["id"]
    assert team_folder.json()["knowledge_base_id"] == space["knowledge_base_id"]
    assert client.get(
        f"/api/v1/folders?knowledge_base_id={space['knowledge_base_id']}",
        headers=owner_headers,
    ).json() == []
    listed_team_folders = client.get(
        f"/api/v1/folders?team_space_id={space['id']}",
        headers=owner_headers,
    )
    assert listed_team_folders.status_code == 200
    assert [item["id"] for item in listed_team_folders.json()] == [team_folder.json()["id"]]

    uploaded = client.post(
        "/api/v1/documents/upload",
        headers=owner_headers,
        data={"knowledge_base_id": str(space["knowledge_base_id"])},
        files={"file": ("team-note.txt", b"team content", "text/plain")},
    )
    assert uploaded.status_code == 201
    document_id = uploaded.json()["id"]

    owner_documents = client.get(
        f"/api/v1/documents?knowledge_base_id={space['knowledge_base_id']}",
        headers=owner_headers,
    )
    assert owner_documents.status_code == 200
    assert [item["id"] for item in owner_documents.json()] == [document_id]
    personal_documents = client.get(
        "/api/v1/documents?exclude_team_spaces=true",
        headers=owner_headers,
    )
    assert personal_documents.status_code == 200
    assert document_id not in {item["id"] for item in personal_documents.json()}

    viewer_spaces = client.get("/api/v1/team-spaces", headers=viewer_headers)
    assert viewer_spaces.status_code == 200
    assert all(item["owner_username"] == "team-viewer" for item in viewer_spaces.json())
    assert client.get(
        f"/api/v1/documents?knowledge_base_id={space['knowledge_base_id']}",
        headers=viewer_headers,
    ).status_code == 403

    candidates = client.get(
        f"/api/v1/team-spaces/{space['id']}/member-candidates",
        headers=owner_headers,
    )
    viewer_candidate = next(item for item in candidates.json() if item["username"] == "team-viewer")
    added = client.post(
        f"/api/v1/team-spaces/{space['id']}/members",
        headers=owner_headers,
        json={"user_id": viewer_candidate["user_id"]},
    )
    assert added.status_code == 201
    members = client.get(
        f"/api/v1/team-spaces/{space['id']}/members",
        headers=viewer_headers,
    )
    assert members.status_code == 200
    assert {item["username"] for item in members.json()} == {"team-owner", "team-viewer"}

    viewer_upload = client.post(
        "/api/v1/documents/upload",
        headers=viewer_headers,
        data={"knowledge_base_id": str(space["knowledge_base_id"])},
        files={"file": ("viewer-note.txt", b"viewer content", "text/plain")},
    )
    assert viewer_upload.status_code == 201
    viewer_document_id = viewer_upload.json()["id"]
    assert client.delete(
        f"/api/v1/documents/{viewer_document_id}",
        headers=viewer_headers,
    ).status_code == 200

    owner_upload = client.post(
        "/api/v1/documents/upload",
        headers=owner_headers,
        data={"knowledge_base_id": str(space["knowledge_base_id"])},
        files={"file": ("owner-note.txt", b"owner content", "text/plain")},
    )
    assert owner_upload.status_code == 201
    owner_document_id = owner_upload.json()["id"]
    assert client.delete(
        f"/api/v1/documents/{owner_document_id}",
        headers=owner_headers,
    ).status_code == 200

    viewer_recycle = client.get(
        f"/api/v1/recycle-bin?knowledge_base_id={space['knowledge_base_id']}",
        headers=viewer_headers,
    )
    assert viewer_recycle.status_code == 200
    assert [item["id"] for item in viewer_recycle.json()] == [viewer_document_id]

    admin_login = client.post(
        "/api/v1/auth/login",
        json={"username": "test-admin", "password": "password-123"},
    )
    admin_headers = {"Authorization": f"Bearer {admin_login.json()['access_token']}"}
    admin_spaces = client.get("/api/v1/team-spaces", headers=admin_headers)
    assert admin_spaces.status_code == 200
    assert any(item["id"] == space["id"] for item in admin_spaces.json())
    assert client.get(
        f"/api/v1/documents?knowledge_base_id={space['knowledge_base_id']}",
        headers=admin_headers,
    ).status_code == 200
    admin_recycle = client.get(
        f"/api/v1/recycle-bin?knowledge_base_id={space['knowledge_base_id']}",
        headers=admin_headers,
    )
    assert {item["id"] for item in admin_recycle.json()} == {viewer_document_id, owner_document_id}

    settings = client.get("/api/v1/admin/settings", headers=admin_headers)
    assert settings.status_code == 200
    updated_settings = client.patch(
        "/api/v1/admin/settings",
        headers=admin_headers,
        json={"recycle_bin_retention_days": 180},
    )
    assert updated_settings.status_code == 200
    assert updated_settings.json()["recycle_bin_retention_days"] == 180


def test_team_space_owner_and_admin_can_update_space_info(client: TestClient):
    owner_token, _ = register(client, "space-editor")
    member_token, member_id = register(client, "space-member")
    owner_headers = {"Authorization": f"Bearer {owner_token}"}
    member_headers = {"Authorization": f"Bearer {member_token}"}

    created = client.post(
        "/api/v1/team-spaces",
        headers=owner_headers,
        json={"name": "原始空间", "description": "原始描述"},
    )
    assert created.status_code == 201
    space = created.json()

    forbidden = client.patch(
        f"/api/v1/team-spaces/{space['id']}",
        headers=member_headers,
        json={"name": "成员不能修改"},
    )
    assert forbidden.status_code == 403

    updated = client.patch(
        f"/api/v1/team-spaces/{space['id']}",
        headers=owner_headers,
        json={"name": "研发空间", "description": "研发资料协作"},
    )
    assert updated.status_code == 200
    assert updated.json()["name"] == "研发空间"
    assert updated.json()["description"] == "研发资料协作"

    cleared = client.patch(
        f"/api/v1/team-spaces/{space['id']}",
        headers=owner_headers,
        json={"description": ""},
    )
    assert cleared.status_code == 200
    assert cleared.json()["description"] is None

    duplicate = client.post(
        "/api/v1/team-spaces",
        headers=owner_headers,
        json={"name": "重复空间"},
    )
    assert duplicate.status_code == 201
    duplicate_update = client.patch(
        f"/api/v1/team-spaces/{duplicate.json()['id']}",
        headers=owner_headers,
        json={"name": "研发空间"},
    )
    assert duplicate_update.status_code == 409

    admin_login = client.post(
        "/api/v1/auth/login",
        json={"username": "test-admin", "password": "password-123"},
    )
    admin_headers = {"Authorization": f"Bearer {admin_login.json()['access_token']}"}
    admin_update = client.patch(
        f"/api/v1/team-spaces/{space['id']}",
        headers=admin_headers,
        json={"description": "管理员维护"},
    )
    assert admin_update.status_code == 200
    assert admin_update.json()["description"] == "管理员维护"


def test_copy_document_between_personal_knowledge_base_and_team_space(client: TestClient):
    owner_token, owner_id = register(client, "copy-owner")
    member_token, _ = register(client, "copy-member")
    owner_headers = {"Authorization": f"Bearer {owner_token}"}
    member_headers = {"Authorization": f"Bearer {member_token}"}

    personal_kb_id = client.get(
        "/api/v1/knowledge-bases",
        headers=owner_headers,
    ).json()[0]["id"]
    space = client.post(
        "/api/v1/team-spaces",
        headers=owner_headers,
        json={"name": "复制空间"},
    ).json()
    added = client.post(
        f"/api/v1/team-spaces/{space['id']}/members",
        headers=owner_headers,
        json={"user_id": register(client, "copy-extra")[1]},
    )
    assert added.status_code == 201

    personal_upload = client.post(
        "/api/v1/documents/upload",
        headers=owner_headers,
        data={"knowledge_base_id": str(personal_kb_id)},
        files={"file": ("personal.txt", b"personal content", "text/plain")},
    )
    assert personal_upload.status_code == 201
    personal_document = personal_upload.json()

    copied_to_team = client.post(
        f"/api/v1/documents/{personal_document['id']}/copy",
        headers=owner_headers,
        json={"team_space_id": space["id"]},
    )
    assert copied_to_team.status_code == 200
    team_copy = copied_to_team.json()
    assert team_copy["kind"] == "document"
    assert team_copy["id"] != personal_document["id"]

    team_documents = client.get(
        f"/api/v1/documents?knowledge_base_id={space['knowledge_base_id']}",
        headers=owner_headers,
    ).json()
    team_document = next(item for item in team_documents if item["id"] == team_copy["id"])
    assert team_document["owner_id"] == owner_id

    copied_to_personal = client.post(
        f"/api/v1/documents/{team_copy['id']}/copy",
        headers=owner_headers,
        json={"knowledge_base_id": personal_kb_id},
    )
    assert copied_to_personal.status_code == 200
    personal_copy = copied_to_personal.json()
    assert personal_copy["id"] != team_copy["id"]

    personal_documents = client.get(
        f"/api/v1/documents?knowledge_base_id={personal_kb_id}",
        headers=owner_headers,
    ).json()
    copied_document = next(item for item in personal_documents if item["id"] == personal_copy["id"])
    assert copied_document["owner_id"] == owner_id
    assert client.get(
        f"/api/v1/documents/{personal_copy['id']}/download",
        headers=owner_headers,
    ).content == b"personal content"

    forbidden = client.post(
        f"/api/v1/documents/{personal_document['id']}/copy",
        headers=member_headers,
        json={"team_space_id": space["id"]},
    )
    assert forbidden.status_code == 403


def test_copy_folder_recursively_between_scopes(client: TestClient):
    token, _ = register(client, "copy-tree-owner")
    headers = {"Authorization": f"Bearer {token}"}
    personal_kb_id = client.get(
        "/api/v1/knowledge-bases",
        headers=headers,
    ).json()[0]["id"]
    space = client.post(
        "/api/v1/team-spaces",
        headers=headers,
        json={"name": "树复制空间"},
    ).json()

    root = client.post(
        "/api/v1/folders",
        headers=headers,
        json={"knowledge_base_id": personal_kb_id, "name": "项目资料"},
    ).json()
    child = client.post(
        "/api/v1/folders",
        headers=headers,
        json={
            "knowledge_base_id": personal_kb_id,
            "parent_id": root["id"],
            "name": "附件",
        },
    ).json()
    upload_root = client.post(
        "/api/v1/documents/upload",
        headers=headers,
        data={
            "knowledge_base_id": str(personal_kb_id),
            "folder_id": str(root["id"]),
        },
        files={"file": ("root.txt", b"root", "text/plain")},
    )
    upload_child = client.post(
        "/api/v1/documents/upload",
        headers=headers,
        data={
            "knowledge_base_id": str(personal_kb_id),
            "folder_id": str(child["id"]),
        },
        files={"file": ("child.txt", b"child", "text/plain")},
    )
    assert upload_root.status_code == 201
    assert upload_child.status_code == 201

    copied = client.post(
        f"/api/v1/folders/{root['id']}/copy",
        headers=headers,
        json={"team_space_id": space["id"]},
    )
    assert copied.status_code == 200
    assert copied.json()["copied_folders"] == 2
    assert copied.json()["copied_documents"] == 2
    copied_folders = client.get(
        f"/api/v1/folders?team_space_id={space['id']}",
        headers=headers,
    ).json()
    copied_root = next(item for item in copied_folders if item["id"] == copied.json()["id"])
    copied_child = next(item for item in copied_folders if item["parent_id"] == copied_root["id"])
    copied_documents = client.get(
        f"/api/v1/documents?knowledge_base_id={space['knowledge_base_id']}",
        headers=headers,
    ).json()
    assert {item["folder_id"] for item in copied_documents} == {
        copied_root["id"],
        copied_child["id"],
    }
    assert {client.get(
        f"/api/v1/documents/{item['id']}/download",
        headers=headers,
    ).content for item in copied_documents} == {b"root", b"child"}

    copied_back = client.post(
        f"/api/v1/folders/{copied_root['id']}/copy",
        headers=headers,
        json={"knowledge_base_id": personal_kb_id},
    )
    assert copied_back.status_code == 200
    assert copied_back.json()["copied_folders"] == 2
    assert copied_back.json()["copied_documents"] == 2


def test_copy_rejects_foreign_personal_knowledge_base_and_folder(client: TestClient):
    owner_token, _ = register(client, "copy-target-owner")
    other_token, _ = register(client, "copy-target-other")
    owner_headers = {"Authorization": f"Bearer {owner_token}"}
    other_headers = {"Authorization": f"Bearer {other_token}"}
    owner_kb = client.get("/api/v1/knowledge-bases", headers=owner_headers).json()[0]["id"]
    other_kb = client.get("/api/v1/knowledge-bases", headers=other_headers).json()[0]["id"]

    upload = client.post(
        "/api/v1/documents/upload",
        headers=owner_headers,
        data={"knowledge_base_id": str(owner_kb)},
        files={"file": ("copy.txt", b"copy", "text/plain")},
    )
    assert upload.status_code == 201
    document_id = upload.json()["id"]

    foreign_kb = client.post(
        f"/api/v1/documents/{document_id}/copy",
        headers=owner_headers,
        json={"knowledge_base_id": other_kb},
    )
    assert foreign_kb.status_code == 403

    own_folder = client.post(
        "/api/v1/folders",
        headers=other_headers,
        json={"knowledge_base_id": other_kb, "name": "目标"},
    ).json()
    foreign_folder = client.post(
        f"/api/v1/documents/{document_id}/copy",
        headers=owner_headers,
        json={"knowledge_base_id": owner_kb, "folder_id": own_folder["id"]},
    )
    assert foreign_folder.status_code == 404
