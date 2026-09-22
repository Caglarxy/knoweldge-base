from pathlib import Path

from sqlalchemy import create_engine
from sqlalchemy.engine import make_url
from sqlalchemy.orm import declarative_base, sessionmaker

from app.core.config import settings


Base = declarative_base()
SessionLocal = sessionmaker(autocommit=False, autoflush=False)
_engine = None


def get_engine():
    global _engine
    if _engine is None:
        engine_kwargs = {"pool_pre_ping": True}
        if settings.database_url.startswith("sqlite"):
            database_path = make_url(settings.database_url).database
            if database_path and database_path != ":memory:":
                Path(database_path).parent.mkdir(parents=True, exist_ok=True)
            engine_kwargs["connect_args"] = {"check_same_thread": False}
        _engine = create_engine(settings.database_url, **engine_kwargs)
    return _engine


def get_db():
    db = SessionLocal(bind=get_engine())
    try:
        yield db
    finally:
        db.close()
