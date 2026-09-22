import base64
import hashlib
import hmac
import os
import re
from datetime import datetime, timedelta, timezone
from hashlib import sha256
from typing import Any

from jose import JWTError, jwt

from app.core.config import settings


ALGORITHM = "HS256"

TOKEN_POLICY_LABELS = {
    "120m": "120 分钟",
    "1d": "1 天",
    "7d": "7 天",
    "30d": "30 天",
    "180d": "半年",
    "long": "长期",
}

TOKEN_POLICY_SECONDS = {
    "120m": 120 * 60,
    "1d": 24 * 60 * 60,
    "7d": 7 * 24 * 60 * 60,
    "30d": 30 * 24 * 60 * 60,
    "180d": 180 * 24 * 60 * 60,
    "long": None,
}
CUSTOM_TOKEN_POLICY_PATTERN = re.compile(r"^custom:(\d+)$")
CUSTOM_TOKEN_MINUTES_MAX = 365 * 24 * 60


def hash_password(password: str) -> str:
    salt = os.urandom(16)
    digest = hashlib.scrypt(
        password.encode("utf-8"),
        salt=salt,
        n=2**14,
        r=8,
        p=1,
    )
    return f"scrypt$16384$8$1${base64.urlsafe_b64encode(salt).decode()}${base64.urlsafe_b64encode(digest).decode()}"


def verify_password(password: str, encoded: str) -> bool:
    try:
        algorithm, n, r, p, salt_value, digest_value = encoded.split("$")
        if algorithm != "scrypt":
            return False
        salt = base64.urlsafe_b64decode(salt_value.encode())
        expected = base64.urlsafe_b64decode(digest_value.encode())
        actual = hashlib.scrypt(
            password.encode("utf-8"),
            salt=salt,
            n=int(n),
            r=int(r),
            p=int(p),
        )
        return hmac.compare_digest(actual, expected)
    except (TypeError, ValueError):
        return False


def create_access_token(
    user_id: int,
    *,
    expires_in_seconds: int | None = None,
    token_type: str | None = None,
    token_id: str | None = None,
) -> str:
    if expires_in_seconds is None:
        expires_in_seconds = settings.jwt_access_token_expire_minutes * 60
    payload: dict[str, Any] = {"sub": str(user_id)}
    if expires_in_seconds > 0:
        payload["exp"] = datetime.now(timezone.utc) + timedelta(seconds=expires_in_seconds)
    if token_type:
        payload["typ"] = token_type
    if token_id:
        payload["jti"] = token_id
    return jwt.encode(payload, settings.jwt_secret_key, algorithm=ALGORITHM)


def decode_access_token(token: str) -> dict[str, Any]:
    try:
        return jwt.decode(token, settings.jwt_secret_key, algorithms=[ALGORITHM])
    except (JWTError, TypeError, ValueError) as exc:
        raise ValueError("Invalid access token") from exc


def get_user_id_from_token(token: str) -> int:
    try:
        payload = decode_access_token(token)
        subject = payload.get("sub")
        if subject is None:
            raise ValueError("Token subject is missing")
        return int(subject)
    except (JWTError, TypeError, ValueError) as exc:
        raise ValueError("Invalid access token") from exc


def hash_token(token: str) -> str:
    return sha256(token.encode("utf-8")).hexdigest()


def normalize_token_policy(policy: str | None) -> str:
    if policy in TOKEN_POLICY_SECONDS:
        return policy
    match = CUSTOM_TOKEN_POLICY_PATTERN.fullmatch(str(policy or "").strip())
    if match:
        minutes = int(match.group(1))
        if 1 <= minutes <= CUSTOM_TOKEN_MINUTES_MAX:
            return f"custom:{minutes}"
    return "120m"


def token_policy_seconds(policy: str | None) -> int | None:
    normalized = normalize_token_policy(policy)
    if normalized in TOKEN_POLICY_SECONDS:
        return TOKEN_POLICY_SECONDS[normalized]
    minutes = int(normalized.split(":", 1)[1])
    return minutes * 60


def token_policy_is_valid(policy: str | None) -> bool:
    return normalize_token_policy(policy) == str(policy or "").strip()
