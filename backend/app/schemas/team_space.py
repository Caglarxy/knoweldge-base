from datetime import datetime

from pydantic import BaseModel, Field


class TeamSpaceCreate(BaseModel):
    name: str = Field(min_length=1, max_length=128)
    description: str | None = Field(default=None, max_length=500)


class TeamSpaceUpdate(BaseModel):
    name: str | None = Field(default=None, min_length=1, max_length=128)
    description: str | None = Field(default=None, max_length=500)


class TeamSpaceResponse(BaseModel):
    id: int
    name: str
    description: str | None
    owner_id: int
    owner_username: str
    knowledge_base_id: int
    document_count: int
    member_count: int
    created_at: datetime
    updated_at: datetime
    is_owner: bool
    can_upload: bool


class TeamSpaceMemberCreate(BaseModel):
    user_id: int


class TeamSpaceMemberResponse(BaseModel):
    user_id: int
    username: str
    email: str | None
    role: str
    is_owner: bool
    created_at: datetime | None


class TeamSpaceMemberCandidate(BaseModel):
    user_id: int
    username: str
    email: str | None
