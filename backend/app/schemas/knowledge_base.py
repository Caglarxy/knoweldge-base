from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field


class KnowledgeBaseCreate(BaseModel):
    name: str = Field(min_length=1, max_length=128)
    description: str | None = None
    upload_policy: str = Field(default="owner_only", pattern="^(owner_only|all_users)$")


class KnowledgeBaseResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    description: str | None
    owner_id: int
    upload_policy: str
    view_policy: str
    visibility: str
    status: str
    created_at: datetime
    updated_at: datetime
    owner_username: str | None = None
    document_count: int = 0
    is_owner: bool = False
