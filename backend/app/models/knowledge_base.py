from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String, Text, func

from app.db.session import Base


class KnowledgeBase(Base):
    __tablename__ = "knowledge_bases"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(128), nullable=False, index=True)
    description = Column(Text, nullable=True)
    owner_id = Column(ForeignKey("users.id"), nullable=False, index=True)
    upload_policy = Column(String(32), nullable=False, default="owner_only")
    view_policy = Column(String(32), nullable=False, default="all_users")
    visibility = Column(String(32), nullable=False, default="public")
    is_team_space = Column(Boolean, nullable=False, default=False, index=True)
    status = Column(String(32), nullable=False, default="active")
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
