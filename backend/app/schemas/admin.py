from datetime import datetime

from pydantic import BaseModel, Field, field_validator

from app.core.security import normalize_token_policy, token_policy_is_valid


class AdminUserCreate(BaseModel):
    username: str = Field(min_length=2, max_length=64)
    password: str = Field(min_length=8, max_length=128)
    email: str | None = Field(default=None, max_length=255)
    role: str = Field(default="user", pattern="^(user|admin)$")
    status: str = Field(default="active", pattern="^(active|disabled)$")
    mcp_token_expire_policy: str = Field(
        default="120m",
    )

    @field_validator("mcp_token_expire_policy")
    @classmethod
    def validate_mcp_token_expire_policy(cls, value: str) -> str:
        normalized = normalize_token_policy(value)
        if not token_policy_is_valid(value):
            raise ValueError("MCP Token 自定义时长必须为 1~525600 分钟")
        return normalized


class AdminUserUpdate(BaseModel):
    username: str | None = Field(default=None, min_length=2, max_length=64)
    password: str | None = Field(default=None, min_length=8, max_length=128)
    role: str | None = Field(default=None, pattern="^(user|admin)$")
    status: str | None = Field(default=None, pattern="^(active|disabled)$")
    is_active: bool | None = None
    mcp_token_expire_policy: str | None = Field(
        default=None,
    )

    @field_validator("mcp_token_expire_policy")
    @classmethod
    def validate_mcp_token_expire_policy(cls, value: str | None) -> str | None:
        if value is None:
            return None
        normalized = normalize_token_policy(value)
        if not token_policy_is_valid(value):
            raise ValueError("MCP Token 自定义时长必须为 1~525600 分钟")
        return normalized


class AdminUserResponse(BaseModel):
    id: int
    username: str
    email: str | None
    role: str
    status: str
    is_active: bool
    mcp_token_expire_policy: str
    created_at: datetime
    active_mcp_token_count: int = 0


class AdminAuditLogResponse(BaseModel):
    id: int
    actor_id: int | None
    actor_username: str | None
    action: str
    resource_type: str | None
    resource_id: str | None
    result: str
    error_message: str | None
    ip_address: str | None
    user_agent: str | None
    created_at: datetime


class AdminKnowledgeBaseUpdate(BaseModel):
    upload_policy: str | None = Field(default=None, pattern="^(owner_only|all_users)$")
    view_policy: str | None = Field(default=None, pattern="^(owner_only|all_users|selected_users)$")
    viewer_ids: list[int] = Field(default_factory=list)


class AdminKnowledgeBaseResponse(BaseModel):
    id: int
    name: str
    description: str | None
    owner_id: int
    owner_username: str | None
    upload_policy: str
    view_policy: str
    viewer_ids: list[int] = Field(default_factory=list)
    viewer_usernames: list[str] = Field(default_factory=list)
    visibility: str
    status: str
    document_count: int
    created_at: datetime
    updated_at: datetime


class AdminSystemSettingsResponse(BaseModel):
    recycle_bin_retention_days: int


class AdminSystemSettingsUpdate(BaseModel):
    recycle_bin_retention_days: int = Field(ge=1, le=3650)


class McpTokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    expires_in: int | None
    expires_at: datetime | None
    policy: str
    policy_label: str
    user: dict
