from pydantic import BaseModel


class CopyRequest(BaseModel):
    knowledge_base_id: int | None = None
    team_space_id: int | None = None
    folder_id: int | None = None


class CopyResponse(BaseModel):
    kind: str
    id: int
    name: str
    copied_documents: int
    copied_folders: int
