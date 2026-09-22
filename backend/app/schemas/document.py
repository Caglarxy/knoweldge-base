from datetime import datetime

from pydantic import BaseModel, Field


class DocumentUpdate(BaseModel):
    name: str | None = Field(default=None, min_length=1, max_length=255)
    folder_id: int | None = None
    description: str | None = None
    tags: list[str] | None = None


class DocumentResponse(BaseModel):
    id: int
    knowledge_base_id: int
    owner_id: int
    owner_username: str
    uploader_username: str
    folder_id: int | None
    name: str
    original_filename: str
    extension: str
    mime_type: str
    size_bytes: int
    tags: list[str]
    status: str
    description: str | None
    visibility: str
    deleted_at: datetime | None
    created_at: datetime
    updated_at: datetime
    is_owner: bool
