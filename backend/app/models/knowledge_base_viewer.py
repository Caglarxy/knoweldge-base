from sqlalchemy import Column, DateTime, ForeignKey, Integer, UniqueConstraint, func

from app.db.session import Base


class KnowledgeBaseViewer(Base):
    __tablename__ = "knowledge_base_viewers"
    __table_args__ = (
        UniqueConstraint(
            "knowledge_base_id",
            "user_id",
            name="uq_knowledge_base_viewer",
        ),
    )

    id = Column(Integer, primary_key=True, index=True)
    knowledge_base_id = Column(
        ForeignKey("knowledge_bases.id"),
        nullable=False,
        index=True,
    )
    user_id = Column(ForeignKey("users.id"), nullable=False, index=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
