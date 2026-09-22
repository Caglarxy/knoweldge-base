from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Text, UniqueConstraint, func

from app.db.session import Base


class TeamSpace(Base):
    __tablename__ = "team_spaces"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(128), nullable=False)
    description = Column(Text, nullable=True)
    owner_id = Column(ForeignKey("users.id"), nullable=False, index=True)
    knowledge_base_id = Column(
        ForeignKey("knowledge_bases.id"),
        nullable=False,
        unique=True,
        index=True,
    )
    status = Column(String(32), nullable=False, default="active")
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)


class TeamSpaceMember(Base):
    __tablename__ = "team_space_members"
    __table_args__ = (
        UniqueConstraint("team_space_id", "user_id", name="uq_team_space_member"),
    )

    id = Column(Integer, primary_key=True, index=True)
    team_space_id = Column(ForeignKey("team_spaces.id"), nullable=False, index=True)
    user_id = Column(ForeignKey("users.id"), nullable=False, index=True)
    role = Column(String(32), nullable=False, default="member")
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
