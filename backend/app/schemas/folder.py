from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field


class FolderCreate(BaseModel):
    knowledge_base_id: int | None = None
    team_space_id: int | None = None
    name: str = Field(min_length=1, max_length=255)
    parent_id: int | None = None


class FolderUpdate(BaseModel):
    name: str | None = Field(default=None, min_length=1, max_length=255)
    parent_id: int | None = None


class FolderResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    knowledge_base_id: int
    team_space_id: int | None
    owner_id: int
    owner_username: str | None
    parent_id: int | None
    name: str
    visibility: str
    status: str
    deleted_at: datetime | None
    created_at: datetime
    updated_at: datetime
    is_owner: bool
