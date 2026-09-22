from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Text, UniqueConstraint, func

from app.db.session import Base


class RestOAuthClient(Base):
    __tablename__ = "rest_oauth_clients"

    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(String(128), unique=True, nullable=False, index=True)
    client_name = Column(String(255), nullable=False)
    redirect_uris = Column(Text, nullable=False)
    grant_types = Column(Text, nullable=False, default='["authorization_code","refresh_token"]')
    response_types = Column(Text, nullable=False, default='["code"]')
    scope = Column(Text, nullable=False, default="knowledge:read")
    token_endpoint_auth_method = Column(String(64), nullable=False, default="none")
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )


class RestOAuthGrant(Base):
    __tablename__ = "rest_oauth_grants"
    __table_args__ = (
        UniqueConstraint("client_id", "user_id", name="uq_rest_oauth_grant_client_user"),
    )

    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(ForeignKey("rest_oauth_clients.client_id"), nullable=False, index=True)
    user_id = Column(ForeignKey("users.id"), nullable=False, index=True)
    scope = Column(Text, nullable=False, default="knowledge:read")
    revoked_at = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
        nullable=False,
    )


class RestOAuthPendingAuthorization(Base):
    __tablename__ = "rest_oauth_pending_authorizations"

    id = Column(Integer, primary_key=True, index=True)
    transaction_id = Column(String(128), unique=True, nullable=False, index=True)
    client_id = Column(ForeignKey("rest_oauth_clients.client_id"), nullable=False, index=True)
    redirect_uri = Column(String(2048), nullable=False)
    response_type = Column(String(32), nullable=False, default="code")
    scope = Column(Text, nullable=False, default="knowledge:read")
    state = Column(Text, nullable=True)
    code_challenge = Column(String(512), nullable=False)
    code_challenge_method = Column(String(16), nullable=False, default="S256")
    resource = Column(String(2048), nullable=True)
    expires_at = Column(DateTime(timezone=True), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)


class RestOAuthAuthorizationCode(Base):
    __tablename__ = "rest_oauth_authorization_codes"

    id = Column(Integer, primary_key=True, index=True)
    code_hash = Column(String(128), unique=True, nullable=False, index=True)
    client_id = Column(ForeignKey("rest_oauth_clients.client_id"), nullable=False, index=True)
    user_id = Column(ForeignKey("users.id"), nullable=False, index=True)
    redirect_uri = Column(String(2048), nullable=False)
    scope = Column(Text, nullable=False, default="knowledge:read")
    code_challenge = Column(String(512), nullable=False)
    code_challenge_method = Column(String(16), nullable=False, default="S256")
    resource = Column(String(2048), nullable=True)
    expires_at = Column(DateTime(timezone=True), nullable=False)
    used_at = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)


class RestOAuthAccessToken(Base):
    __tablename__ = "rest_oauth_access_tokens"

    id = Column(Integer, primary_key=True, index=True)
    token_hash = Column(String(128), unique=True, nullable=False, index=True)
    token_id = Column(String(128), unique=True, nullable=False, index=True)
    client_id = Column(ForeignKey("rest_oauth_clients.client_id"), nullable=False, index=True)
    user_id = Column(ForeignKey("users.id"), nullable=False, index=True)
    scope = Column(Text, nullable=False, default="knowledge:read")
    expires_at = Column(DateTime(timezone=True), nullable=False)
    revoked_at = Column(DateTime(timezone=True), nullable=True)
    last_used_at = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)


class RestOAuthRefreshToken(Base):
    __tablename__ = "rest_oauth_refresh_tokens"

    id = Column(Integer, primary_key=True, index=True)
    token_hash = Column(String(128), unique=True, nullable=False, index=True)
    client_id = Column(ForeignKey("rest_oauth_clients.client_id"), nullable=False, index=True)
    user_id = Column(ForeignKey("users.id"), nullable=False, index=True)
    scope = Column(Text, nullable=False, default="knowledge:read")
    expires_at = Column(DateTime(timezone=True), nullable=False)
    revoked_at = Column(DateTime(timezone=True), nullable=True)
    last_used_at = Column(DateTime(timezone=True), nullable=True)
    replaced_by_hash = Column(String(128), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)


class RestOAuthLoginSession(Base):
    __tablename__ = "rest_oauth_login_sessions"

    id = Column(Integer, primary_key=True, index=True)
    session_hash = Column(String(128), unique=True, nullable=False, index=True)
    user_id = Column(ForeignKey("users.id"), nullable=False, index=True)
    expires_at = Column(DateTime(timezone=True), nullable=False)
    revoked_at = Column(DateTime(timezone=True), nullable=True)
    last_used_at = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
