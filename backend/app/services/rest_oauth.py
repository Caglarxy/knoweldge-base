from __future__ import annotations

import base64
import hashlib
import html
import json
import secrets
import time
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit

from jose import JWTError, jwt
from sqlalchemy.orm import Session

from app.core.config import settings
from app.core.security import ALGORITHM, hash_token, verify_password
from app.models import (
    RestOAuthAccessToken,
    RestOAuthAuthorizationCode,
    RestOAuthClient,
    RestOAuthGrant,
    RestOAuthLoginSession,
    RestOAuthPendingAuthorization,
    RestOAuthRefreshToken,
    User,
)


OAUTH_SCOPE = "knowledge:read"
AUTHORIZATION_CODE_TTL_SECONDS = 300
OAUTH_ACCESS_TOKEN_TTL_SECONDS = max(
    60,
    settings.rest_api_oauth_access_token_expire_minutes * 60,
)


class RestOAuthError(Exception):
    def __init__(self, error: str, description: str, status_code: int = 400):
        super().__init__(description)
        self.error = error
        self.description = description
        self.status_code = status_code


@dataclass(frozen=True)
class OAuthPrincipal:
    user: User
    client_id: str
    scopes: frozenset[str]
    auth_method: str = "oauth"


def _now() -> datetime:
    return datetime.now(timezone.utc)


def _as_utc(value: datetime | None) -> datetime | None:
    if value is None:
        return None
    return value.replace(tzinfo=timezone.utc) if value.tzinfo is None else value.astimezone(timezone.utc)


def _json_list(value: str | None, default: list[str] | None = None) -> list[str]:
    try:
        parsed = json.loads(value or "")
    except json.JSONDecodeError:
        return list(default or [])
    return parsed if isinstance(parsed, list) else list(default or [])


def _json_text(values: list[str]) -> str:
    return json.dumps(values, ensure_ascii=False, separators=(",", ":"))


def _scope_values(value: str | None) -> set[str]:
    return {item for item in (value or "").split() if item}


def _hash_pkce_verifier(verifier: str) -> str:
    digest = hashlib.sha256(verifier.encode("ascii")).digest()
    return base64.urlsafe_b64encode(digest).decode("ascii").rstrip("=")


def _append_query(url: str, values: dict[str, str]) -> str:
    parsed = urlsplit(url)
    query = parse_qsl(parsed.query, keep_blank_values=True)
    query.extend(values.items())
    return urlunsplit(
        (parsed.scheme, parsed.netloc, parsed.path, urlencode(query), parsed.fragment)
    )


def _safe_html(value: object) -> str:
    return html.escape(str(value), quote=True)


class RestOAuthService:
    def __init__(self, issuer_url: str):
        self.issuer_url = issuer_url.rstrip("/")
        self.authorization_endpoint = f"{self.issuer_url}/oauth/authorize"
        self.token_endpoint = f"{self.issuer_url}/oauth/token"
        self.revocation_endpoint = f"{self.issuer_url}/oauth/revoke"
        self.registration_endpoint = f"{self.issuer_url}/oauth/register"

    def metadata(self) -> dict[str, object]:
        return {
            "issuer": self.issuer_url,
            "authorization_endpoint": self.authorization_endpoint,
            "token_endpoint": self.token_endpoint,
            "revocation_endpoint": self.revocation_endpoint,
            "registration_endpoint": self.registration_endpoint,
            "scopes_supported": [OAUTH_SCOPE],
            "response_types_supported": ["code"],
            "grant_types_supported": ["authorization_code", "refresh_token"],
            "code_challenge_methods_supported": ["S256"],
            "token_endpoint_auth_methods_supported": ["none"],
        }

    def register_client(
        self,
        db: Session,
        *,
        client_name: str,
        redirect_uris: list[str],
        grant_types: list[str] | None = None,
        response_types: list[str] | None = None,
        scope: str | None = None,
        token_endpoint_auth_method: str | None = None,
    ) -> RestOAuthClient:
        if not redirect_uris:
            raise RestOAuthError(
                "invalid_client_metadata",
                "At least one redirect URI is required",
            )
        for redirect_uri in redirect_uris:
            self._validate_redirect_uri(redirect_uri)
        requested_grants = grant_types or ["authorization_code", "refresh_token"]
        if set(requested_grants) - {"authorization_code", "refresh_token"}:
            raise RestOAuthError("invalid_client_metadata", "Unsupported grant type")
        requested_responses = response_types or ["code"]
        if requested_responses != ["code"] and set(requested_responses) != {"code"}:
            raise RestOAuthError("invalid_client_metadata", "Unsupported response type")
        requested_scope = scope or OAUTH_SCOPE
        if _scope_values(requested_scope) - {OAUTH_SCOPE}:
            raise RestOAuthError("invalid_scope", "Unsupported scope")
        auth_method = token_endpoint_auth_method or "none"
        if auth_method != "none":
            raise RestOAuthError(
                "invalid_client_metadata",
                "Only public PKCE clients are supported",
            )

        client = RestOAuthClient(
            client_id=f"kb_{secrets.token_urlsafe(24)}",
            client_name=(client_name or "Knowledge Base Client").strip()[:255],
            redirect_uris=_json_text(redirect_uris),
            grant_types=_json_text(requested_grants),
            response_types=_json_text(requested_responses),
            scope=requested_scope,
            token_endpoint_auth_method=auth_method,
        )
        db.add(client)
        db.commit()
        db.refresh(client)
        return client

    def client_response(self, client: RestOAuthClient) -> dict[str, object]:
        created_at = _as_utc(client.created_at)
        return {
            "client_id": client.client_id,
            "client_name": client.client_name,
            "redirect_uris": _json_list(client.redirect_uris),
            "grant_types": _json_list(client.grant_types, ["authorization_code", "refresh_token"]),
            "response_types": _json_list(client.response_types, ["code"]),
            "scope": client.scope,
            "token_endpoint_auth_method": client.token_endpoint_auth_method,
            "client_id_issued_at": int(created_at.timestamp()) if created_at else int(time.time()),
        }

    def create_pending_authorization(
        self,
        db: Session,
        *,
        client_id: str,
        redirect_uri: str,
        response_type: str,
        scope: str,
        state: str | None,
        code_challenge: str,
        code_challenge_method: str,
        resource: str | None,
    ) -> RestOAuthPendingAuthorization:
        client = db.query(RestOAuthClient).filter(RestOAuthClient.client_id == client_id).first()
        if client is None:
            raise RestOAuthError("invalid_client", "Unknown client_id")
        if response_type != "code":
            raise RestOAuthError("unsupported_response_type", "Only response_type=code is supported")
        if redirect_uri not in _json_list(client.redirect_uris):
            raise RestOAuthError("invalid_request", "redirect_uri is not registered")
        if not code_challenge or code_challenge_method != "S256":
            raise RestOAuthError(
                "invalid_request",
                "PKCE with code_challenge_method=S256 is required",
            )
        requested_scopes = _scope_values(scope or OAUTH_SCOPE)
        allowed_scopes = _scope_values(client.scope)
        if not requested_scopes or not requested_scopes.issubset(allowed_scopes):
            raise RestOAuthError("invalid_scope", "Requested scope is not allowed")

        pending = RestOAuthPendingAuthorization(
            transaction_id=secrets.token_urlsafe(32),
            client_id=client_id,
            redirect_uri=redirect_uri,
            response_type=response_type,
            scope=" ".join(sorted(requested_scopes)),
            state=state,
            code_challenge=code_challenge,
            code_challenge_method=code_challenge_method,
            resource=resource,
            expires_at=_now() + timedelta(seconds=AUTHORIZATION_CODE_TTL_SECONDS),
        )
        db.add(pending)
        db.commit()
        db.refresh(pending)
        return pending

    def get_pending(
        self,
        db: Session,
        transaction_id: str | None,
    ) -> RestOAuthPendingAuthorization | None:
        if not transaction_id:
            return None
        pending = (
            db.query(RestOAuthPendingAuthorization)
            .filter(RestOAuthPendingAuthorization.transaction_id == transaction_id)
            .first()
        )
        if pending is None:
            return None
        if (_as_utc(pending.expires_at) or _now()) <= _now():
            db.delete(pending)
            db.commit()
            return None
        return pending

    def get_login_session(self, db: Session, raw_session: str | None) -> User | None:
        if not raw_session:
            return None
        session = (
            db.query(RestOAuthLoginSession)
            .filter(
                RestOAuthLoginSession.session_hash == hash_token(raw_session),
                RestOAuthLoginSession.revoked_at.is_(None),
            )
            .first()
        )
        if session is None:
            return None
        if (_as_utc(session.expires_at) or _now()) <= _now():
            session.revoked_at = _now()
            db.commit()
            return None
        user = (
            db.query(User)
            .filter(User.id == session.user_id, User.status == "active", User.is_active.is_(True))
            .first()
        )
        if user is None:
            session.revoked_at = _now()
            db.commit()
            return None
        session.last_used_at = _now()
        db.commit()
        return user

    def create_login_session(self, db: Session, user: User) -> str:
        raw_session = secrets.token_urlsafe(48)
        db.add(
            RestOAuthLoginSession(
                session_hash=hash_token(raw_session),
                user_id=user.id,
                expires_at=_now() + timedelta(days=max(1, settings.rest_api_oauth_session_expire_days)),
            )
        )
        db.commit()
        return raw_session

    def revoke_login_session(self, db: Session, raw_session: str | None) -> None:
        if not raw_session:
            return
        session = (
            db.query(RestOAuthLoginSession)
            .filter(RestOAuthLoginSession.session_hash == hash_token(raw_session))
            .first()
        )
        if session is not None:
            session.revoked_at = _now()
            db.commit()

    def has_grant(self, db: Session, *, client_id: str, user_id: int, scope: str) -> bool:
        grant = (
            db.query(RestOAuthGrant)
            .filter(
                RestOAuthGrant.client_id == client_id,
                RestOAuthGrant.user_id == user_id,
                RestOAuthGrant.revoked_at.is_(None),
            )
            .first()
        )
        return grant is not None and _scope_values(scope).issubset(_scope_values(grant.scope))

    def save_grant(self, db: Session, *, client_id: str, user_id: int, scope: str) -> None:
        grant = (
            db.query(RestOAuthGrant)
            .filter(
                RestOAuthGrant.client_id == client_id,
                RestOAuthGrant.user_id == user_id,
            )
            .first()
        )
        if grant is None:
            grant = RestOAuthGrant(client_id=client_id, user_id=user_id, scope=scope)
            db.add(grant)
        else:
            grant.scope = scope
            grant.revoked_at = None
        db.commit()

    def issue_authorization_code(
        self,
        db: Session,
        *,
        pending: RestOAuthPendingAuthorization,
        user_id: int,
    ) -> str:
        if self.get_pending(db, pending.transaction_id) is None:
            raise RestOAuthError("invalid_request", "Authorization request expired")
        code = secrets.token_urlsafe(48)
        db.add(
            RestOAuthAuthorizationCode(
                code_hash=hash_token(code),
                client_id=pending.client_id,
                user_id=user_id,
                redirect_uri=pending.redirect_uri,
                scope=pending.scope,
                code_challenge=pending.code_challenge,
                code_challenge_method=pending.code_challenge_method,
                resource=pending.resource,
                expires_at=_now() + timedelta(seconds=AUTHORIZATION_CODE_TTL_SECONDS),
            )
        )
        redirect_uri = pending.redirect_uri
        state = pending.state
        db.delete(pending)
        db.commit()
        values = {"code": code}
        if state:
            values["state"] = state
        return _append_query(redirect_uri, values)

    def exchange_authorization_code(
        self,
        db: Session,
        *,
        client_id: str,
        code: str,
        redirect_uri: str,
        code_verifier: str,
    ) -> dict[str, object]:
        record = (
            db.query(RestOAuthAuthorizationCode)
            .filter(
                RestOAuthAuthorizationCode.code_hash == hash_token(code),
                RestOAuthAuthorizationCode.client_id == client_id,
                RestOAuthAuthorizationCode.used_at.is_(None),
            )
            .first()
        )
        if record is None:
            raise RestOAuthError("invalid_grant", "Authorization code is invalid")
        if (_as_utc(record.expires_at) or _now()) <= _now():
            raise RestOAuthError("invalid_grant", "Authorization code has expired")
        if record.redirect_uri != redirect_uri:
            raise RestOAuthError("invalid_grant", "redirect_uri does not match")
        if not code_verifier:
            raise RestOAuthError("invalid_grant", "code_verifier is required")
        if not secrets.compare_digest(_hash_pkce_verifier(code_verifier), record.code_challenge):
            raise RestOAuthError("invalid_grant", "PKCE verification failed")

        user = self._active_user(db, record.user_id)
        record.used_at = _now()
        token_response = self._issue_token_pair(
            db,
            client_id=client_id,
            user_id=user.id,
            scope=record.scope,
            resource=record.resource,
        )
        db.commit()
        return token_response

    def exchange_refresh_token(
        self,
        db: Session,
        *,
        client_id: str,
        refresh_token: str,
        scope: str | None,
    ) -> dict[str, object]:
        record = (
            db.query(RestOAuthRefreshToken)
            .filter(
                RestOAuthRefreshToken.token_hash == hash_token(refresh_token),
                RestOAuthRefreshToken.client_id == client_id,
                RestOAuthRefreshToken.revoked_at.is_(None),
            )
            .first()
        )
        if record is None:
            raise RestOAuthError("invalid_grant", "Refresh token is invalid")
        if (_as_utc(record.expires_at) or _now()) <= _now():
            raise RestOAuthError("invalid_grant", "Refresh token has expired")
        requested_scope = _scope_values(scope or record.scope)
        current_scope = _scope_values(record.scope)
        if not requested_scope.issubset(current_scope):
            raise RestOAuthError("invalid_scope", "Requested scope exceeds the grant")

        user = self._active_user(db, record.user_id)
        record.revoked_at = _now()
        token_response = self._issue_token_pair(
            db,
            client_id=client_id,
            user_id=user.id,
            scope=" ".join(sorted(requested_scope)),
            resource=None,
        )
        record.replaced_by_hash = hash_token(str(token_response["refresh_token"]))
        record.last_used_at = _now()
        db.commit()
        return token_response

    def authenticate_access_token(self, db: Session, raw_token: str) -> OAuthPrincipal:
        try:
            payload = jwt.decode(
                raw_token,
                settings.jwt_secret_key,
                algorithms=[ALGORITHM],
                issuer=self.issuer_url,
                audience=self.issuer_url,
            )
        except (JWTError, TypeError, ValueError) as exc:
            raise RestOAuthError("invalid_token", "OAuth access token is invalid", 401) from exc

        if payload.get("typ") != "oauth":
            raise RestOAuthError("invalid_token", "Not an OAuth access token", 401)
        token_id = str(payload.get("jti") or "")
        subject = payload.get("sub")
        scopes = frozenset(_scope_values(str(payload.get("scope") or "")))
        if not token_id or subject is None or OAUTH_SCOPE not in scopes:
            raise RestOAuthError("invalid_token", "OAuth access token claims are invalid", 401)
        try:
            user_id = int(subject)
        except (TypeError, ValueError) as exc:
            raise RestOAuthError("invalid_token", "OAuth access token subject is invalid", 401) from exc

        record = (
            db.query(RestOAuthAccessToken)
            .filter(
                RestOAuthAccessToken.token_hash == hash_token(raw_token),
                RestOAuthAccessToken.token_id == token_id,
                RestOAuthAccessToken.revoked_at.is_(None),
            )
            .first()
        )
        if record is None or (_as_utc(record.expires_at) or _now()) <= _now():
            raise RestOAuthError("invalid_token", "OAuth access token is expired or revoked", 401)
        user = self._active_user(db, user_id)
        record.last_used_at = _now()
        return OAuthPrincipal(user=user, client_id=record.client_id, scopes=scopes)

    def revoke_token(self, db: Session, *, client_id: str, token: str) -> None:
        token_hash = hash_token(token)
        access = (
            db.query(RestOAuthAccessToken)
            .filter(
                RestOAuthAccessToken.token_hash == token_hash,
                RestOAuthAccessToken.client_id == client_id,
            )
            .first()
        )
        if access is not None:
            access.revoked_at = _now()
        refresh = (
            db.query(RestOAuthRefreshToken)
            .filter(
                RestOAuthRefreshToken.token_hash == token_hash,
                RestOAuthRefreshToken.client_id == client_id,
            )
            .first()
        )
        if refresh is not None:
            refresh.revoked_at = _now()
        db.commit()

    def _issue_token_pair(
        self,
        db: Session,
        *,
        client_id: str,
        user_id: int,
        scope: str,
        resource: str | None,
    ) -> dict[str, object]:
        now = int(time.time())
        token_id = secrets.token_urlsafe(24)
        access_token = jwt.encode(
            {
                "iss": self.issuer_url,
                "aud": self.issuer_url,
                "sub": str(user_id),
                "typ": "oauth",
                "scope": scope,
                "jti": token_id,
                "iat": now,
                "exp": now + OAUTH_ACCESS_TOKEN_TTL_SECONDS,
            },
            settings.jwt_secret_key,
            algorithm=ALGORITHM,
        )
        refresh_token = secrets.token_urlsafe(64)
        expires_at = _now() + timedelta(days=max(1, settings.rest_api_oauth_refresh_token_expire_days))
        db.add(
            RestOAuthAccessToken(
                token_hash=hash_token(access_token),
                token_id=token_id,
                client_id=client_id,
                user_id=user_id,
                scope=scope,
                expires_at=_now() + timedelta(seconds=OAUTH_ACCESS_TOKEN_TTL_SECONDS),
            )
        )
        db.add(
            RestOAuthRefreshToken(
                token_hash=hash_token(refresh_token),
                client_id=client_id,
                user_id=user_id,
                scope=scope,
                expires_at=expires_at,
            )
        )
        return {
            "access_token": access_token,
            "token_type": "Bearer",
            "expires_in": OAUTH_ACCESS_TOKEN_TTL_SECONDS,
            "refresh_token": refresh_token,
            "scope": scope,
        }

    def _active_user(self, db: Session, user_id: int) -> User:
        user = (
            db.query(User)
            .filter(User.id == user_id, User.status == "active", User.is_active.is_(True))
            .first()
        )
        if user is None:
            raise RestOAuthError("invalid_grant", "User is not active", 401)
        return user

    @staticmethod
    def _validate_redirect_uri(redirect_uri: str) -> None:
        parsed = urlsplit(redirect_uri)
        is_loopback = parsed.hostname in {"localhost", "127.0.0.1", "::1"}
        if parsed.scheme != "https" and not (is_loopback and parsed.scheme == "http"):
            raise RestOAuthError(
                "invalid_client_metadata",
                "Redirect URI must use HTTPS or loopback HTTP",
            )
        if not parsed.netloc:
            raise RestOAuthError("invalid_client_metadata", "Redirect URI is invalid")


def render_login_page(
    *,
    action_url: str,
    transaction_id: str,
    error: str | None = None,
) -> str:
    error_html = f'<p class="error">{_safe_html(error)}</p>' if error else ""
    return f"""<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>知识库授权登录</title>
  <style>
    body {{ margin: 0; min-height: 100vh; display: grid; place-items: center; background: #f4f6f8; color: #17202a; font-family: system-ui, sans-serif; }}
    main {{ width: min(420px, calc(100vw - 32px)); background: #fff; padding: 28px; border: 1px solid #dfe4ea; box-shadow: 0 12px 36px rgba(23,32,42,.12); }}
    h1 {{ margin: 0 0 10px; font-size: 22px; }}
    p {{ color: #5d6875; line-height: 1.6; }}
    label {{ display: block; margin: 16px 0 6px; font-size: 14px; font-weight: 600; }}
    input {{ width: 100%; box-sizing: border-box; padding: 10px 12px; border: 1px solid #c9d1d9; border-radius: 5px; font-size: 15px; }}
    button {{ width: 100%; margin-top: 22px; padding: 11px 12px; border: 0; border-radius: 5px; background: #1769aa; color: #fff; font-size: 15px; cursor: pointer; }}
    .error {{ padding: 10px 12px; background: #fff1f0; color: #b42318; border: 1px solid #f4b4af; }}
    .hint {{ font-size: 13px; }}
  </style>
</head>
<body>
  <main>
    <h1>知识库授权登录</h1>
    <p>登录后，智能体可以在授权范围内检索和读取你的知识库文档。</p>
    {error_html}
    <form method="post" action="{_safe_html(action_url)}">
      <input type="hidden" name="transaction" value="{_safe_html(transaction_id)}">
      <label for="username">用户名</label>
      <input id="username" name="username" autocomplete="username" required>
      <label for="password">密码</label>
      <input id="password" name="password" type="password" autocomplete="current-password" required>
      <button type="submit">登录并授权</button>
    </form>
    <p class="hint">密码只用于本次授权，不会写入智能体配置或返回给智能体。</p>
  </main>
</body>
</html>"""


def render_consent_page(
    *,
    action_url: str,
    transaction_id: str,
    username: str,
    scope: str,
) -> str:
    return f"""<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>确认知识库授权</title>
  <style>
    body {{ margin: 0; min-height: 100vh; display: grid; place-items: center; background: #f4f6f8; color: #17202a; font-family: system-ui, sans-serif; }}
    main {{ width: min(420px, calc(100vw - 32px)); background: #fff; padding: 28px; border: 1px solid #dfe4ea; box-shadow: 0 12px 36px rgba(23,32,42,.12); }}
    h1 {{ margin: 0 0 10px; font-size: 22px; }}
    p {{ color: #5d6875; line-height: 1.6; }}
    button {{ width: 100%; margin-top: 18px; padding: 11px 12px; border: 0; border-radius: 5px; background: #1769aa; color: #fff; font-size: 15px; cursor: pointer; }}
    .scope {{ padding: 12px; background: #f1f6fb; border: 1px solid #d7e6f3; color: #24445d; }}
  </style>
</head>
<body>
  <main>
    <h1>确认授权</h1>
    <p>当前登录用户：{_safe_html(username)}</p>
    <p>智能体将获得以下权限：</p>
    <div class="scope">{_safe_html(scope)}</div>
    <form method="post" action="{_safe_html(action_url)}">
      <input type="hidden" name="transaction" value="{_safe_html(transaction_id)}">
      <button type="submit">同意并继续</button>
    </form>
  </main>
</body>
</html>"""
