import importlib

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.core.security import verify_password


def test_init_db_creates_default_admin_idempotently(tmp_path, monkeypatch):
    init_module = importlib.import_module("app.db.init_db")
    engine = create_engine(
        f"sqlite:///{tmp_path / 'init.db'}",
        connect_args={"check_same_thread": False},
    )
    testing_session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    monkeypatch.setattr(init_module, "get_engine", lambda: engine)
    monkeypatch.setattr(init_module, "SessionLocal", testing_session)

    init_module.init_db()
    init_module.init_db()

    db = testing_session()
    try:
        admins = db.query(init_module.User).filter(
            init_module.User.username == "admin",
        ).all()
        assert len(admins) == 1
        admin = admins[0]
        assert admin.role == "admin"
        assert admin.status == "active"
        assert admin.is_active is True
        assert verify_password("zkdn@123", admin.password_hash)
        assert db.query(init_module.KnowledgeBase).filter(
            init_module.KnowledgeBase.owner_id == admin.id,
            init_module.KnowledgeBase.is_team_space.is_(False),
        ).count() == 1
        assert db.query(init_module.TeamSpace).filter(
            init_module.TeamSpace.owner_id == admin.id,
            init_module.TeamSpace.status == "active",
        ).count() == 1
    finally:
        db.close()
