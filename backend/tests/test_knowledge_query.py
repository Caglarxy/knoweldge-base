from pathlib import Path

import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.core.security import create_access_token, hash_password
from app.db.session import Base
from app.models import Document, Folder, KnowledgeBase, KnowledgeBaseViewer, User
from app.services import knowledge_query
from app.services.mcp_tokens import issue_mcp_token
from app.services.storage import LocalStorage


@pytest.fixture
def query_context(tmp_path: Path, monkeypatch: pytest.MonkeyPatch):
    engine = create_engine(
        f"sqlite:///{tmp_path / 'query.db'}",
        connect_args={"check_same_thread": False},
    )
    Base.metadata.create_all(bind=engine)
    session_factory = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    storage = LocalStorage(tmp_path / "storage")
    monkeypatch.setattr(knowledge_query, "storage", storage)

    db = session_factory()
    owner = User(
        username="query-owner",
        password_hash="unused",
        role="user",
        status="active",
        is_active=True,
    )
    viewer = User(
        username="query-viewer",
        password_hash="unused",
        role="user",
        status="active",
        is_active=True,
    )
    db.add_all([owner, viewer])
    db.flush()

    public_kb = KnowledgeBase(
        name="公共知识库",
        owner_id=owner.id,
        visibility="public",
        status="active",
    )
    private_kb = KnowledgeBase(
        name="私有知识库",
        owner_id=owner.id,
        visibility="private",
        status="active",
    )
    viewer_kb = KnowledgeBase(
        name="其他人的知识库",
        owner_id=viewer.id,
        visibility="public",
        status="active",
    )
    db.add_all([public_kb, private_kb, viewer_kb])
    db.flush()

    folder = Folder(
        knowledge_base_id=public_kb.id,
        owner_id=owner.id,
        name="实验方案",
        visibility="public",
        status="active",
    )
    db.add(folder)
    db.flush()

    public_document = Document(
        knowledge_base_id=public_kb.id,
        owner_id=owner.id,
        folder_id=folder.id,
        name="实验记录.md",
        original_filename="实验记录.md",
        extension=".md",
        mime_type="text/markdown",
        size_bytes=0,
        storage_key="documents/public.md",
        tags='["实验"]',
        status="ready",
        visibility="public",
    )
    private_document = Document(
        knowledge_base_id=private_kb.id,
        owner_id=owner.id,
        name="私有设计.docx",
        original_filename="私有设计.docx",
        extension=".docx",
        mime_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        size_bytes=0,
        storage_key="documents/private.docx",
        status="ready",
        visibility="private",
    )
    inaccessible_document = Document(
        knowledge_base_id=viewer_kb.id,
        owner_id=viewer.id,
        name="不应返回.md",
        original_filename="不应返回.md",
        extension=".md",
        mime_type="text/markdown",
        size_bytes=0,
        storage_key="documents/inaccessible.md",
        status="ready",
        visibility="private",
    )
    db.add_all([public_document, private_document, inaccessible_document])
    db.commit()

    storage.put_bytes("documents/public.md", "# 实验方案\n\n这是一个关于知识库检索的实验记录。".encode("utf-8"))
    storage.put_bytes("documents/private.docx", b"not a real docx")
    storage.put_bytes("documents/inaccessible.md", b"private")

    yield {
        "db": db,
        "owner": owner,
        "viewer": viewer,
        "public_kb": public_kb,
        "private_kb": private_kb,
        "folder": folder,
        "public_document": public_document,
        "storage": storage,
    }
    db.close()
    engine.dispose()


def test_mcp_authentication_requires_valid_active_user(query_context):
    db = query_context["db"]
    with pytest.raises(PermissionError):
        knowledge_query.authenticate_mcp_user(db, None)
    with pytest.raises(PermissionError):
        knowledge_query.authenticate_mcp_user(db, "invalid-token")

    token = create_access_token(query_context["owner"].id)
    user = knowledge_query.authenticate_mcp_user(db, f"Bearer {token}")
    assert user.id == query_context["owner"].id


def test_mcp_can_authenticate_with_credentials(query_context):
    db = query_context["db"]
    owner = query_context["owner"]
    owner.password_hash = hash_password("password-123")
    db.commit()

    user, token = knowledge_query.authenticate_mcp_credentials(
        db,
        " query-owner ",
        "password-123",
    )

    assert user.id == owner.id
    assert knowledge_query.authenticate_mcp_user(db, token).id == owner.id
    with pytest.raises(PermissionError):
        knowledge_query.authenticate_mcp_credentials(db, "query-owner", "wrong-password")


def test_mcp_token_issued_from_sqlite_is_not_expired_immediately(query_context):
    db = query_context["db"]
    owner = query_context["owner"]
    token, _ = issue_mcp_token(db, owner)

    assert knowledge_query.authenticate_mcp_user(db, token).id == owner.id


def test_accessible_queries_apply_knowledge_base_and_document_permissions(query_context):
    db = query_context["db"]
    owner = query_context["owner"]
    documents = knowledge_query.accessible_documents(db, owner)
    names = {document.name for document in documents}

    assert names == {"实验记录.md", "私有设计.docx"}
    assert "不应返回.md" not in names

    folders = knowledge_query.load_folder_map(db, owner)
    serialized = knowledge_query.serialize_document(
        query_context["public_document"],
        user=owner,
        folders=folders,
    )
    assert serialized["folder_path"] == "实验方案"


def test_mcp_queries_apply_knowledge_base_view_policy(query_context):
    db = query_context["db"]
    owner = query_context["owner"]
    viewer = query_context["viewer"]
    private_kb = query_context["private_kb"]

    private_kb.view_policy = "owner_only"
    db.commit()
    viewer_docs = knowledge_query.accessible_documents(db, viewer)
    assert query_context["public_document"] in viewer_docs
    assert all(document.knowledge_base_id != private_kb.id for document in viewer_docs)

    selected_kb = KnowledgeBase(
        name="指定用户知识库",
        owner_id=owner.id,
        view_policy="selected_users",
        visibility="private",
        status="active",
    )
    db.add(selected_kb)
    db.flush()
    selected_doc = Document(
        knowledge_base_id=selected_kb.id,
        owner_id=owner.id,
        name="selected.md",
        original_filename="selected.md",
        extension=".md",
        mime_type="text/markdown",
        size_bytes=0,
        storage_key="documents/selected.md",
        status="ready",
        visibility="public",
    )
    db.add(selected_doc)
    db.add(KnowledgeBaseViewer(knowledge_base_id=selected_kb.id, user_id=viewer.id))
    db.commit()

    viewer_docs = knowledge_query.accessible_documents(db, viewer)
    assert selected_doc in viewer_docs
    assert knowledge_query.accessible_document(db, viewer, selected_doc.id).id == selected_doc.id
    assert selected_kb in knowledge_query.accessible_knowledge_bases(db, viewer)


def test_search_reads_document_body_and_returns_context(query_context):
    content = knowledge_query.search_document_text(query_context["public_document"])

    assert "知识库检索" in content
    snippet = knowledge_query.build_search_snippet(content, "知识库检索")
    assert "知识库检索" in snippet


def test_reader_result_can_be_serialized_as_markdown():
    result = {
        "kind": "docx",
        "pages": [
            {
                "number": 1,
                "blocks": [
                    {"type": "paragraph", "content": "实验标题"},
                    {"type": "table", "rows": [["名称", "结果"], ["样品 A", "通过"]]},
                ],
            }
        ],
    }

    content = knowledge_query.reader_result_to_markdown(result)

    assert "实验标题" in content
    assert "| 名称 | 结果 |" in content
    assert "| 样品 A | 通过 |" in content
