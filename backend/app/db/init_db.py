from app.core.config import settings
from app.db.session import Base, SessionLocal, get_engine
from app.models import (
    AuditLog,
    Document,
    Folder,
    KnowledgeBase,
    KnowledgeBaseViewer,
    McpToken,
    RestOAuthAccessToken,
    RestOAuthAuthorizationCode,
    RestOAuthClient,
    RestOAuthGrant,
    RestOAuthLoginSession,
    RestOAuthPendingAuthorization,
    RestOAuthRefreshToken,
    SystemSetting,
    TeamSpace,
    TeamSpaceMember,
    User,
)
from app.core.security import hash_password
from app.services.team_spaces import create_team_space
from app.services.system_settings import RECYCLE_BIN_RETENTION_KEY
from sqlalchemy import inspect, text


DEFAULT_ADMIN_USERNAME = "admin"
DEFAULT_ADMIN_PASSWORD = "zkdn@123"


def init_db() -> None:
    # Importing models above registers all phase 0 tables on Base.metadata.
    engine = get_engine()
    Base.metadata.create_all(bind=engine)

    # Phase 1 adds tags to the existing SQLite database without requiring a
    # migration tool before the project has a production database.
    if engine.dialect.name == "sqlite":
        knowledge_base_columns = {
            column["name"] for column in inspect(engine).get_columns("knowledge_bases")
        }
        if "upload_policy" not in knowledge_base_columns:
            with engine.begin() as connection:
                connection.execute(
                    text(
                        "ALTER TABLE knowledge_bases ADD COLUMN upload_policy "
                        "VARCHAR(32) NOT NULL DEFAULT 'owner_only'"
                    )
                )
        if "is_team_space" not in knowledge_base_columns:
            with engine.begin() as connection:
                connection.execute(
                    text(
                        "ALTER TABLE knowledge_bases ADD COLUMN is_team_space "
                        "BOOLEAN NOT NULL DEFAULT 0"
                    )
                )
        if "view_policy" not in knowledge_base_columns:
            with engine.begin() as connection:
                connection.execute(
                    text(
                        "ALTER TABLE knowledge_bases ADD COLUMN view_policy "
                        "VARCHAR(32) NOT NULL DEFAULT 'all_users'"
                    )
                )
        columns = {column["name"] for column in inspect(engine).get_columns("documents")}
        if "tags" not in columns:
            with engine.begin() as connection:
                connection.execute(text("ALTER TABLE documents ADD COLUMN tags TEXT NOT NULL DEFAULT '[]'"))
        if "folder_id" not in columns:
            with engine.begin() as connection:
                connection.execute(text("ALTER TABLE documents ADD COLUMN folder_id INTEGER REFERENCES folders(id)"))
        folder_columns = {column["name"] for column in inspect(engine).get_columns("folders")}
        if "team_space_id" not in folder_columns:
            with engine.begin() as connection:
                connection.execute(
                    text(
                        "ALTER TABLE folders ADD COLUMN team_space_id "
                        "INTEGER REFERENCES team_spaces(id)"
                    )
                )
        user_columns = {column["name"] for column in inspect(engine).get_columns("users")}
        if "mcp_token_expire_policy" not in user_columns:
            with engine.begin() as connection:
                connection.execute(
                    text(
                        "ALTER TABLE users ADD COLUMN mcp_token_expire_policy "
                        "VARCHAR(16) NOT NULL DEFAULT '120m'"
                    )
                )
        mcp_token_columns = {
            column["name"] for column in inspect(engine).get_columns("mcp_tokens")
        }
        if "token_id" not in mcp_token_columns:
            with engine.begin() as connection:
                connection.execute(
                    text(
                        "ALTER TABLE mcp_tokens ADD COLUMN token_id "
                        "VARCHAR(64) NOT NULL DEFAULT ''"
                    )
                )

    admin_usernames = {
        value.strip()
        for value in (settings.admin_usernames or "").split(",")
        if value.strip()
    }
    if admin_usernames:
        with engine.begin() as connection:
            for username in admin_usernames:
                connection.execute(
                    text("UPDATE users SET role = 'admin' WHERE username = :username"),
                    {"username": username},
                )

    # Every existing account gets an independent default team space. The
    # internal knowledge base is hidden from the personal knowledge-base view.
    db = SessionLocal(bind=engine)
    try:
        default_admin = (
            db.query(User)
            .filter(User.username == DEFAULT_ADMIN_USERNAME)
            .first()
        )
        if default_admin is None:
            default_admin = User(
                username=DEFAULT_ADMIN_USERNAME,
                password_hash=hash_password(DEFAULT_ADMIN_PASSWORD),
                role="admin",
                status="active",
                is_active=True,
            )
            db.add(default_admin)
            db.flush()
        else:
            # Do not overwrite an existing password during a normal restart.
            default_admin.role = "admin"
            default_admin.status = "active"
            default_admin.is_active = True

        if db.get(SystemSetting, RECYCLE_BIN_RETENTION_KEY) is None:
            db.add(
                SystemSetting(
                    key=RECYCLE_BIN_RETENTION_KEY,
                    value=str(max(1, settings.recycle_bin_retention_days)),
                )
            )
        personal_knowledge_base = (
            db.query(KnowledgeBase)
            .filter(
                KnowledgeBase.owner_id == default_admin.id,
                KnowledgeBase.is_team_space.is_(False),
                KnowledgeBase.status == "active",
            )
            .first()
        )
        if personal_knowledge_base is None:
            db.add(
                KnowledgeBase(
                    name=f"{default_admin.username}的知识库",
                    description="默认知识库",
                    owner_id=default_admin.id,
                    upload_policy="owner_only",
                    view_policy="owner_only",
                    visibility="public",
                    is_team_space=False,
                    status="active",
                )
            )
            db.flush()
        users = (
            db.query(User)
            .filter(User.status == "active", User.is_active.is_(True))
            .all()
        )
        for user in users:
            has_space = (
                db.query(TeamSpace.id)
                .filter(
                    TeamSpace.owner_id == user.id,
                    TeamSpace.status == "active",
                )
                .first()
                is not None
            )
            if not has_space:
                create_team_space(
                    db,
                    owner=user,
                    name=f"{user.username}的团队空间",
                    description="默认团队协作空间",
                )
        # Folders created before team_space_id was introduced were attached
        # to the internal team-space knowledge base. Reclassify them into the
        # logical team-space scope.
        for space in db.query(TeamSpace).filter(TeamSpace.status == "active").all():
            db.query(Folder).filter(
                Folder.knowledge_base_id == space.knowledge_base_id,
                Folder.team_space_id.is_(None),
            ).update(
                {"team_space_id": space.id},
                synchronize_session=False,
            )
        db.commit()
    finally:
        db.close()


if __name__ == "__main__":
    init_db()
    print("Database tables initialized.")
