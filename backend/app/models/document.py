from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Text, func

from app.db.session import Base


class Document(Base):
    __tablename__ = "documents"

    id = Column(Integer, primary_key=True, index=True)
    knowledge_base_id = Column(ForeignKey("knowledge_bases.id"), nullable=False, index=True)
    owner_id = Column(ForeignKey("users.id"), nullable=False, index=True)
    folder_id = Column(ForeignKey("folders.id"), nullable=True, index=True)
    name = Column(String(255), nullable=False)
    original_filename = Column(String(255), nullable=False)
    extension = Column(String(32), nullable=False)
    mime_type = Column(String(128), nullable=False)
    size_bytes = Column(Integer, nullable=False)
    storage_key = Column(String(512), nullable=False)
    markdown_storage_key = Column(String(512), nullable=True)
    tags = Column(Text, nullable=False, default="[]")
    status = Column(String(32), nullable=False, default="pending")
    description = Column(Text, nullable=True)
    visibility = Column(String(32), nullable=False, default="public")
    deleted_at = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
