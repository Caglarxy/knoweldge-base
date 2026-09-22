from __future__ import annotations

from datetime import datetime, timedelta, timezone
from uuid import uuid4

from sqlalchemy.orm import Session

from app.core.security import (
    TOKEN_POLICY_LABELS,
    create_access_token,
    hash_token,
    normalize_token_policy,
    token_policy_seconds,
)
from app.models import McpToken, User
from app.services.audit import record_audit


def issue_mcp_token(db: Session, user: User) -> tuple[str, McpToken]:
    policy = normalize_token_policy(user.mcp_token_expire_policy)
    seconds = token_policy_seconds(policy)
    now = datetime.now(timezone.utc)
    expires_at = now + timedelta(seconds=seconds) if seconds is not None else None
    token_id = uuid4().hex
    token = create_access_token(
        user.id,
        expires_in_seconds=seconds if seconds is not None else 0,
        token_type="mcp",
        token_id=token_id,
    )
    token_record = McpToken(
        token_hash=hash_token(token),
        token_id=token_id,
        user_id=user.id,
        expires_at=expires_at,
    )
    db.add(token_record)
    record_audit(
        db,
        actor_id=user.id,
        action="issue_mcp_token",
        resource_type="mcp_token",
        resource_id=token_id,
    )
    db.commit()
    db.refresh(token_record)
    return token, token_record


def token_policy_label(policy: str | None) -> str:
    normalized = normalize_token_policy(policy)
    if normalized.startswith("custom:"):
        minutes = int(normalized.split(":", 1)[1])
        if minutes % (24 * 60) == 0:
            return f"自定义（{minutes // (24 * 60)} 天）"
        if minutes % 60 == 0:
            return f"自定义（{minutes // 60} 小时）"
        return f"自定义（{minutes} 分钟）"
    return TOKEN_POLICY_LABELS[normalized]
