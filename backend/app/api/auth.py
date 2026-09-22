from datetime import datetime, timezone
import ipaddress
import os
import socket

from fastapi import APIRouter, Depends, HTTPException, Request, status
from sqlalchemy.orm import Session

from app.api.dependencies import get_current_user
from app.core.config import settings
from app.core.security import create_access_token, hash_password, verify_password
from app.db.session import get_db
from app.models import McpToken, User
from app.schemas.auth import ChangePasswordRequest, LoginRequest, TokenResponse, UserResponse
from app.services.audit import record_audit
from app.services.mcp_tokens import issue_mcp_token, token_policy_label


router = APIRouter(prefix="/auth", tags=["auth"])


def _token_response(user: User) -> TokenResponse:
    return TokenResponse(
        access_token=create_access_token(user.id),
        expires_in=settings.jwt_access_token_expire_minutes * 60,
        user=UserResponse.model_validate(user),
    )


@router.post("/login", response_model=TokenResponse)
def login(
    payload: LoginRequest,
    request: Request,
    db: Session = Depends(get_db),
) -> TokenResponse:
    user = db.query(User).filter(User.username == payload.username.strip()).first()
    if user is None or not user.is_active or not verify_password(payload.password, user.password_hash):
        record_audit(
            db,
            actor_id=user.id if user is not None else None,
            action="login",
            resource_type="user",
            resource_id=payload.username.strip()[:128],
            result="failure",
            error_message="Invalid username or password",
            ip_address=request.client.host if request.client else None,
            user_agent=request.headers.get("user-agent"),
        )
        db.commit()
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    record_audit(
        db,
        actor_id=user.id,
        action="login",
        resource_type="user",
        resource_id=str(user.id),
        ip_address=request.client.host if request.client else None,
        user_agent=request.headers.get("user-agent"),
    )
    db.commit()
    return _token_response(user)


@router.get("/me", response_model=UserResponse)
def get_me(current_user: User = Depends(get_current_user)) -> User:
    return current_user


@router.post("/change-password")
def change_password(
    payload: ChangePasswordRequest,
    request: Request,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> dict[str, str]:
    if not verify_password(payload.current_password, current_user.password_hash):
        record_audit(
            db,
            actor_id=current_user.id,
            action="change_password",
            resource_type="user",
            resource_id=str(current_user.id),
            result="failure",
            error_message="Current password is invalid",
            ip_address=request.client.host if request.client else None,
            user_agent=request.headers.get("user-agent"),
        )
        db.commit()
        raise HTTPException(status_code=400, detail="当前密码不正确")

    if payload.current_password == payload.new_password:
        raise HTTPException(status_code=400, detail="新密码不能与当前密码相同")

    current_user.password_hash = hash_password(payload.new_password)
    db.query(McpToken).filter(
        McpToken.user_id == current_user.id,
        McpToken.revoked_at.is_(None),
    ).update({"revoked_at": datetime.now(timezone.utc)})
    record_audit(
        db,
        actor_id=current_user.id,
        action="change_password",
        resource_type="user",
        resource_id=str(current_user.id),
        ip_address=request.client.host if request.client else None,
        user_agent=request.headers.get("user-agent"),
    )
    db.commit()
    return {"message": "密码修改成功"}


def _server_lan_ip() -> str | None:
    configured_host = os.getenv("MCP_PUBLIC_HOST", "").strip()
    if configured_host:
        try:
            address = ipaddress.ip_address(configured_host)
            if not address.is_loopback and not address.is_unspecified:
                return configured_host
        except ValueError:
            return configured_host

    # UDP connect only asks the OS which local interface would be used; it
    # does not send a packet to the probe address.
    probe = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        probe.connect(("192.0.2.1", 80))
        address = probe.getsockname()[0]
        if address and not address.startswith(("127.", "169.254.")):
            return address
    except OSError:
        pass
    finally:
        probe.close()

    addresses = set()
    try:
        for item in socket.getaddrinfo(socket.gethostname(), None, socket.AF_INET):
            address = item[4][0]
            if address and not address.startswith(("127.", "169.254.")):
                addresses.add(address)
    except OSError:
        pass
    return sorted(addresses)[0] if addresses else None


@router.get("/server-info")
def get_server_info(
    current_user: User = Depends(get_current_user),
) -> dict[str, str | None]:
    return {"lan_ip": _server_lan_ip()}


@router.post("/mcp-token")
def issue_current_mcp_token(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
) -> dict:
    token, token_record = issue_mcp_token(db, current_user)
    policy = current_user.mcp_token_expire_policy
    expires_at = token_record.expires_at
    if expires_at is not None and expires_at.tzinfo is None:
        expires_at = expires_at.replace(tzinfo=timezone.utc)
    expires_in = (
        max(0, int((expires_at - datetime.now(timezone.utc)).total_seconds()))
        if expires_at is not None
        else None
    )
    return {
        "access_token": token,
        "token_type": "bearer",
        "expires_in": expires_in,
        "expires_at": expires_at,
        "policy": policy,
        "policy_label": token_policy_label(policy),
        "user": {
            "id": current_user.id,
            "username": current_user.username,
            "role": current_user.role,
        },
    }
