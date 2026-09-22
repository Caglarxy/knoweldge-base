from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, func

from app.db.session import Base


class Folder(Base):
    __tablename__ = "folders"

    id = Column(Integer, primary_key=True, index=True)
    knowledge_base_id = Column(ForeignKey("knowledge_bases.id"), nullable=False, index=True)
    team_space_id = Column(ForeignKey("team_spaces.id"), nullable=True, index=True)
    owner_id = Column(ForeignKey("users.id"), nullable=False, index=True)
    parent_id = Column(ForeignKey("folders.id"), nullable=True, index=True)
    name = Column(String(255), nullable=False)
    visibility = Column(String(32), nullable=False, default="public")
    status = Column(String(32), nullable=False, default="active")
    deleted_at = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
