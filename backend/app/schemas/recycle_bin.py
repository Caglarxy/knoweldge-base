from datetime import datetime

from pydantic import BaseModel


class RecycleBinItem(BaseModel):
    kind: str
    id: int
    knowledge_base_id: int
    knowledge_base_name: str
    owner_id: int
    owner_username: str
    name: str
    original_filename: str | None = None
    extension: str | None = None
    mime_type: str | None = None
    size_bytes: int = 0
    deleted_at: datetime
    expires_at: datetime | None
    is_owner: bool
