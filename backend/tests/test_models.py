from app.db.session import Base
from app.models import (
    AuditLog,
    Document,
    Folder,
    KnowledgeBase,
    KnowledgeBaseViewer,
    McpToken,
    TeamSpace,
    TeamSpaceMember,
    SystemSetting,
    User,
)


def test_phase_zero_models_are_registered():
    assert set(Base.metadata.tables) == {
        "users",
        "knowledge_bases",
        "knowledge_base_viewers",
        "documents",
        "folders",
        "audit_logs",
        "mcp_tokens",
        "rest_oauth_clients",
        "rest_oauth_grants",
        "rest_oauth_pending_authorizations",
        "rest_oauth_authorization_codes",
        "rest_oauth_access_tokens",
        "rest_oauth_refresh_tokens",
        "rest_oauth_login_sessions",
        "team_spaces",
        "team_space_members",
        "system_settings",
    }
    assert User.__tablename__ == "users"
    assert KnowledgeBase.__tablename__ == "knowledge_bases"
    assert KnowledgeBaseViewer.__tablename__ == "knowledge_base_viewers"
    assert Document.__tablename__ == "documents"
    assert Folder.__tablename__ == "folders"
    assert AuditLog.__tablename__ == "audit_logs"
    assert McpToken.__tablename__ == "mcp_tokens"
    assert TeamSpace.__tablename__ == "team_spaces"
    assert TeamSpaceMember.__tablename__ == "team_space_members"
    assert SystemSetting.__tablename__ == "system_settings"
