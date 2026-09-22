from __future__ import annotations

import secrets
import time
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from typing import Any
from urllib.parse import urlencode, urlparse

from jose import jwt
from mcp.server.auth.provider import (
    AccessToken,
    AuthorizationCode,
    AuthorizationParams,
    AuthorizeError,
    OAuthAuthorizationServerProvider,
    RefreshToken,
    RegistrationError,
    TokenError,
    construct_redirect_uri,
)
from mcp.shared.auth import OAuthClientInformationFull, OAuthToken

from app.core.config import settings
from app.core.security import ALGORITHM
from app.db.session import SessionLocal, get_engine
from app.services.knowledge_query import authenticate_mcp_credentials


OAUTH_SCOPE = "knowledge:read"
AUTHORIZATION_CODE_TTL_SECONDS = 300
REFRESH_TOKEN_TTL_SECONDS = 30 * 24 * 60 * 60


@dataclass
class _PendingAuthorization:
    transaction_id: str
    client_id: str
    params: AuthorizationParams
    expires_at: float


class DialogueOAuthProvider(
    OAuthAuthorizationServerProvider[AuthorizationCode, RefreshToken, AccessToken]
):
    """In-memory OAuth provider for the standalone 8024 dialogue service.

    The MCP client owns the returned refresh token, so a WorkBuddy session can be
    recreated without asking for the knowledge-base password again. Refresh tokens
    are intentionally kept in this process for the first iteration; persistence can
    be added later without changing the OAuth endpoints.
    """

    def __init__(self, issuer_url: str, login_path: str = "/oauth/login") -> None:
        self.issuer_url = issuer_url.rstrip("/")
        self.login_url = f"{self.issuer_url}{login_path}"
        self._clients: dict[str, OAuthClientInformationFull] = {}
        self._pending: dict[str, _PendingAuthorization] = {}
        self._authorization_codes: dict[str, AuthorizationCode] = {}
        self._refresh_tokens: dict[str, RefreshToken] = {}
        self._access_tokens: dict[str, AccessToken] = {}

    async def get_client(self, client_id: str) -> OAuthClientInformationFull | None:
        return self._clients.get(client_id)

    async def register_client(self, client_info: OAuthClientInformationFull) -> None:
        redirect_uris = client_info.redirect_uris or []
        if not redirect_uris:
            raise RegistrationError(
                error="invalid_client_metadata",
                error_description="At least one redirect URI is required",
            )

        for redirect_uri in redirect_uris:
            parsed = urlparse(str(redirect_uri))
            is_loopback = parsed.hostname in {"localhost", "127.0.0.1", "::1"}
            if parsed.scheme not in {"https"} and not is_loopback:
                raise RegistrationError(
                    error="invalid_redirect_uri",
                    error_description=(
                        "Only HTTPS or loopback HTTP redirect URIs are allowed"
                    ),
                )

        self._clients[client_info.client_id] = client_info

    async def authorize(
        self,
        client: OAuthClientInformationFull,
        params: AuthorizationParams,
    ) -> str:
        if not params.code_challenge:
            raise AuthorizeError(
                error="invalid_request",
                error_description="PKCE code_challenge is required",
            )

        transaction_id = secrets.token_urlsafe(32)
        self._pending[transaction_id] = _PendingAuthorization(
            transaction_id=transaction_id,
            client_id=client.client_id,
            params=params,
            expires_at=time.time() + AUTHORIZATION_CODE_TTL_SECONDS,
        )
        query = urlencode({"transaction": transaction_id})
        return f"{self.login_url}?{query}"

    def get_pending(self, transaction_id: str | None) -> _PendingAuthorization | None:
        if not transaction_id:
            return None
        pending = self._pending.get(transaction_id)
        if pending is None:
            return None
        if pending.expires_at < time.time():
            self._pending.pop(transaction_id, None)
            return None
        return pending

    async def complete_login(
        self,
        transaction_id: str,
        username: str,
        password: str,
    ) -> str:
        pending = self.get_pending(transaction_id)
        if pending is None:
            raise PermissionError("授权请求不存在或已过期，请重新连接 MCP")

        db = SessionLocal(bind=get_engine())
        try:
            user, _ = authenticate_mcp_credentials(db, username, password)
        finally:
            db.close()

        self._pending.pop(transaction_id, None)
        code = secrets.token_urlsafe(40)
        params = pending.params
        scopes = params.scopes or [OAUTH_SCOPE]
        self._authorization_codes[code] = AuthorizationCode(
            code=code,
            scopes=scopes,
            expires_at=time.time() + AUTHORIZATION_CODE_TTL_SECONDS,
            client_id=pending.client_id,
            code_challenge=params.code_challenge,
            redirect_uri=params.redirect_uri,
            redirect_uri_provided_explicitly=params.redirect_uri_provided_explicitly,
            resource=params.resource,
            subject=str(user.id),
        )
        return construct_redirect_uri(
            str(params.redirect_uri),
            code=code,
            state=params.state,
        )

    async def load_authorization_code(
        self,
        client: OAuthClientInformationFull,
        authorization_code: str,
    ) -> AuthorizationCode | None:
        code = self._authorization_codes.get(authorization_code)
        if code is None or code.client_id != client.client_id:
            return None
        return code

    async def exchange_authorization_code(
        self,
        client: OAuthClientInformationFull,
        authorization_code: AuthorizationCode,
    ) -> OAuthToken:
        code = self._authorization_codes.pop(authorization_code.code, None)
        if code is None or code.client_id != client.client_id or not code.subject:
            raise TokenError(
                error="invalid_grant",
                error_description="authorization code does not exist",
            )
        return self._issue_tokens(
            client_id=client.client_id,
            subject=code.subject,
            scopes=code.scopes,
            resource=code.resource,
        )

    async def load_refresh_token(
        self,
        client: OAuthClientInformationFull,
        refresh_token: str,
    ) -> RefreshToken | None:
        token = self._refresh_tokens.get(refresh_token)
        if token is None or token.client_id != client.client_id:
            return None
        return token

    async def exchange_refresh_token(
        self,
        client: OAuthClientInformationFull,
        refresh_token: RefreshToken,
        scopes: list[str],
    ) -> OAuthToken:
        current = self._refresh_tokens.pop(refresh_token.token, None)
        if current is None or current.client_id != client.client_id or not current.subject:
            raise TokenError(
                error="invalid_grant",
                error_description="refresh token does not exist",
            )
        return self._issue_tokens(
            client_id=client.client_id,
            subject=current.subject,
            scopes=scopes,
            resource=None,
        )

    async def load_access_token(self, token: str) -> AccessToken | None:
        access_token = self._access_tokens.get(token)
        if access_token is None:
            return None
        if access_token.expires_at and access_token.expires_at < int(time.time()):
            self._access_tokens.pop(token, None)
            return None
        return access_token

    async def revoke_token(self, token: AccessToken | RefreshToken) -> None:
        if isinstance(token, AccessToken):
            client_id = token.client_id
            subject = token.subject
        else:
            self._refresh_tokens.pop(token.token, None)
            client_id = token.client_id
            subject = token.subject

        access_keys = [
            key
            for key, access in self._access_tokens.items()
            if access.client_id == client_id and access.subject == subject
        ]
        refresh_keys = [
            key
            for key, refresh in self._refresh_tokens.items()
            if refresh.client_id == client_id and refresh.subject == subject
        ]
        for key in access_keys:
            self._access_tokens.pop(key, None)
        for key in refresh_keys:
            self._refresh_tokens.pop(key, None)

    def _issue_tokens(
        self,
        *,
        client_id: str,
        subject: str,
        scopes: list[str],
        resource: str | None,
    ) -> OAuthToken:
        now = int(time.time())
        expires_at = now + settings.jwt_access_token_expire_minutes * 60
        access_token = jwt.encode(
            {
                "sub": subject,
                "exp": datetime.now(timezone.utc)
                + timedelta(seconds=settings.jwt_access_token_expire_minutes * 60),
                "iat": now,
                "jti": secrets.token_hex(16),
            },
            settings.jwt_secret_key,
            algorithm=ALGORITHM,
        )
        access_info = AccessToken(
            token=access_token,
            client_id=client_id,
            scopes=scopes,
            expires_at=expires_at,
            resource=resource,
            subject=subject,
            claims={"iss": self.issuer_url},
        )
        refresh_value = secrets.token_urlsafe(48)
        refresh_info = RefreshToken(
            token=refresh_value,
            client_id=client_id,
            scopes=scopes,
            expires_at=now + REFRESH_TOKEN_TTL_SECONDS,
            subject=subject,
        )
        self._access_tokens[access_token] = access_info
        self._refresh_tokens[refresh_value] = refresh_info
        return OAuthToken(
            access_token=access_token,
            expires_in=max(1, expires_at - now),
            scope=" ".join(scopes),
            refresh_token=refresh_value,
        )


def render_login_page(
    *,
    action_url: str,
    transaction_id: str,
    error: str | None = None,
) -> str:
    error_html = (
        f'<p class="error">{_escape_html(error)}</p>' if error else ""
    )
    return f"""<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>知识库授权登录</title>
  <style>
    :root {{ color-scheme: light; font-family: system-ui, -apple-system, "Segoe UI", sans-serif; }}
    body {{ margin: 0; min-height: 100vh; display: grid; place-items: center; background: #f5f7fb; color: #1f2937; }}
    main {{ width: min(420px, calc(100vw - 32px)); background: #fff; border: 1px solid #e5e7eb; padding: 28px; box-sizing: border-box; }}
    h1 {{ margin: 0 0 8px; font-size: 22px; }}
    p {{ color: #6b7280; line-height: 1.6; }}
    label {{ display: block; margin: 16px 0 6px; font-size: 14px; font-weight: 600; }}
    input {{ width: 100%; box-sizing: border-box; padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 15px; }}
    button {{ width: 100%; margin-top: 22px; padding: 11px 12px; border: 0; border-radius: 6px; background: #2563eb; color: #fff; font-size: 15px; cursor: pointer; }}
    .error {{ padding: 10px 12px; background: #fef2f2; color: #b91c1c; border: 1px solid #fecaca; }}
    .hint {{ font-size: 13px; }}
  </style>
</head>
<body>
  <main>
    <h1>知识库授权登录</h1>
    <p>登录后，智能体可以在授权范围内检索和读取你的知识库文档。</p>
    {error_html}
    <form method="post" action="{_escape_html(action_url)}">
      <input type="hidden" name="transaction" value="{_escape_html(transaction_id)}">
      <label for="username">用户名</label>
      <input id="username" name="username" autocomplete="username" required>
      <label for="password">密码</label>
      <input id="password" name="password" type="password" autocomplete="current-password" required>
      <button type="submit">授权并继续</button>
    </form>
    <p class="hint">密码只用于本次授权，不会写入 MCP 配置或返回给智能体。</p>
  </main>
</body>
</html>"""


def _escape_html(value: Any) -> str:
    import html

    return html.escape(str(value), quote=True)
