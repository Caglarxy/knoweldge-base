from pydantic import BaseModel, Field


class OAuthClientRegistrationRequest(BaseModel):
    client_name: str = Field(default="Knowledge Base Client", min_length=1, max_length=255)
    redirect_uris: list[str] = Field(min_length=1, max_length=20)
    grant_types: list[str] = Field(default_factory=lambda: ["authorization_code", "refresh_token"])
    response_types: list[str] = Field(default_factory=lambda: ["code"])
    scope: str = "knowledge:read"
    token_endpoint_auth_method: str = "none"
