from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    app_name: str = "knowledge-base"
    app_env: str = "dev"
    app_host: str = "0.0.0.0"
    app_port: int = 8000
    log_level: str = "INFO"

    database_url: str = "sqlite:///./data/knowledge_base.db"
    storage_backend: str = "local"
    local_storage_path: str = "./data/storage"
    max_upload_size_bytes: int = 100 * 1024 * 1024
    max_folder_depth: int = 10
    recycle_bin_retention_days: int = 90

    jwt_secret_key: str = "change-me"
    jwt_access_token_expire_minutes: int = 120
    admin_usernames: str = "任宝石"

    mcp_transport: str = "stdio"
    mcp_host: str = "127.0.0.1"
    mcp_port: int = 8020
    mcp_path: str = "/mcp"
    mcp_stateless_http: bool = True
    kb_mcp_token: str | None = None
    mcp_max_content_chars: int = 30000

    rest_api_host: str = "0.0.0.0"
    rest_api_port: int = 9030
    rest_api_public_url: str | None = None
    rest_api_oauth_access_token_expire_minutes: int = 15
    rest_api_oauth_refresh_token_expire_days: int = 30
    rest_api_oauth_session_expire_days: int = 30
    rest_api_oauth_cookie_secure: bool = False


settings = Settings()
