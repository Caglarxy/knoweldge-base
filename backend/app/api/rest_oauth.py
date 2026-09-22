from __future__ import annotations

from datetime import timedelta
from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit

from fastapi import APIRouter, Depends, Form, HTTPException, Query, Request, status
from fastapi.responses import HTMLResponse, JSONResponse, RedirectResponse, Response
from sqlalchemy.orm import Session

from app.core.config import settings
from app.db.session import get_db
from app.models import User
from app.schemas.rest_oauth import OAuthClientRegistrationRequest
from app.services.audit import record_audit
from app.services.rest_oauth import (
    OAUTH_SCOPE,
    RestOAuthError,
    RestOAuthService,
    render_consent_page,
    render_login_page,
)
from app.core.security import verify_password


router = APIRouter(tags=["rest-oauth"])
OAUTH_SESSION_COOKIE = "kb_rest_oauth_session"


def get_rest_oauth_service() -> RestOAuthService:
    from app.rest_api_server import rest_oauth

    return rest_oauth


def _oauth_error_response(exc: RestOAuthError) -> JSONResponse:
    headers = {"WWW-Authenticate": 'Bearer error="invalid_token"'} if exc.status_code == 401 else {}
    return JSONResponse(
        status_code=exc.status_code,
        content={"error": exc.error, "error_description": exc.description},
        headers=headers,
    )


def _redirect_error(redirect_uri: str, error: str, description: str, state: str | None) -> RedirectResponse:
    values = {"error": error, "error_description": description}
    if state:
        values["state"] = state
    parsed = urlsplit(redirect_uri)
    query = parse_qsl(parsed.query, keep_blank_values=True)
    query.extend(values.items())
    target = urlunsplit(
        (parsed.scheme, parsed.netloc, parsed.path, urlencode(query), parsed.fragment)
    )
    return RedirectResponse(target, status_code=status.HTTP_303_SEE_OTHER)


@router.get("/.well-known/oauth-authorization-server")
def oauth_authorization_server_metadata(
    oauth: RestOAuthService = Depends(get_rest_oauth_service),
) -> dict[str, object]:
    return oauth.metadata()


@router.get("/.well-known/openid-configuration")
def openid_configuration(
    oauth: RestOAuthService = Depends(get_rest_oauth_service),
) -> dict[str, object]:
    return oauth.metadata()


@router.post("/oauth/register", status_code=status.HTTP_201_CREATED)
def register_oauth_client(
    payload: OAuthClientRegistrationRequest,
    db: Session = Depends(get_db),
    oauth: RestOAuthService = Depends(get_rest_oauth_service),
) -> dict[str, object]:
    try:
        client = oauth.register_client(
            db,
            client_name=payload.client_name,
            redirect_uris=payload.redirect_uris,
            grant_types=payload.grant_types,
            response_types=payload.response_types,
            scope=payload.scope,
            token_endpoint_auth_method=payload.token_endpoint_auth_method,
        )
        return oauth.client_response(client)
    except RestOAuthError as exc:
        db.rollback()
        return _oauth_error_response(exc)


@router.get("/oauth/authorize", response_class=HTMLResponse)
def authorize(
    request: Request,
    client_id: str = Query(...),
    redirect_uri: str = Query(...),
    response_type: str = Query(default="code"),
    scope: str = Query(default=OAUTH_SCOPE),
    state: str | None = Query(default=None),
    code_challenge: str | None = Query(default=None),
    code_challenge_method: str | None = Query(default=None),
    resource: str | None = Query(default=None),
    db: Session = Depends(get_db),
    oauth: RestOAuthService = Depends(get_rest_oauth_service),
) -> Response:
    try:
        pending = oauth.create_pending_authorization(
            db,
            client_id=client_id,
            redirect_uri=redirect_uri,
            response_type=response_type,
            scope=scope,
            state=state,
            code_challenge=code_challenge or "",
            code_challenge_method=code_challenge_method or "",
            resource=resource,
        )
    except RestOAuthError as exc:
        if redirect_uri and exc.error not in {"invalid_client", "invalid_client_metadata"}:
            return _redirect_error(redirect_uri, exc.error, exc.description, state)
        return _oauth_error_response(exc)

    user = oauth.get_login_session(db, request.cookies.get(OAUTH_SESSION_COOKIE))
    if user is not None and oauth.has_grant(
        db,
        client_id=pending.client_id,
        user_id=user.id,
        scope=pending.scope,
    ):
        try:
            redirect_url = oauth.issue_authorization_code(db, pending=pending, user_id=user.id)
        except RestOAuthError as exc:
            return _oauth_error_response(exc)
        return RedirectResponse(redirect_url, status_code=status.HTTP_303_SEE_OTHER)

    if user is not None:
        return HTMLResponse(
            render_consent_page(
                action_url="/oauth/consent",
                transaction_id=pending.transaction_id,
                username=user.username,
                scope=pending.scope,
            )
        )
    return HTMLResponse(
        render_login_page(
            action_url="/oauth/login",
            transaction_id=pending.transaction_id,
        )
    )


@router.post("/oauth/login", response_class=HTMLResponse)
def oauth_login(
    request: Request,
    transaction: str = Form(...),
    username: str = Form(...),
    password: str = Form(...),
    db: Session = Depends(get_db),
    oauth: RestOAuthService = Depends(get_rest_oauth_service),
) -> Response:
    pending = oauth.get_pending(db, transaction)
    if pending is None:
        return HTMLResponse("<h1>授权请求不存在或已过期</h1>", status_code=400)

    normalized_username = username.strip()
    user = db.query(User).filter(User.username == normalized_username).first()
    if (
        user is None
        or user.status != "active"
        or not user.is_active
        or not verify_password(password, user.password_hash)
    ):
        record_audit(
            db,
            actor_id=user.id if user is not None else None,
            action="rest_oauth_login",
            resource_type="oauth",
            resource_id=pending.client_id,
            result="failure",
            error_message="Invalid username or password",
            ip_address=request.client.host if request.client else None,
            user_agent=request.headers.get("user-agent"),
        )
        db.commit()
        return HTMLResponse(
            render_login_page(
                action_url="/oauth/login",
                transaction_id=transaction,
                error="用户名或密码不正确",
            ),
            status_code=401,
        )

    session_token = oauth.create_login_session(db, user)
    oauth.save_grant(db, client_id=pending.client_id, user_id=user.id, scope=pending.scope)
    redirect_url = oauth.issue_authorization_code(db, pending=pending, user_id=user.id)
    record_audit(
        db,
        actor_id=user.id,
        action="rest_oauth_login",
        resource_type="oauth",
        resource_id=pending.client_id,
        ip_address=request.client.host if request.client else None,
        user_agent=request.headers.get("user-agent"),
    )
    db.commit()
    response = RedirectResponse(redirect_url, status_code=status.HTTP_303_SEE_OTHER)
    response.set_cookie(
        OAUTH_SESSION_COOKIE,
        session_token,
        max_age=max(1, settings.rest_api_oauth_session_expire_days) * 24 * 60 * 60,
        httponly=True,
        secure=settings.rest_api_oauth_cookie_secure,
        samesite="lax",
        path="/",
    )
    return response


@router.post("/oauth/consent", response_class=HTMLResponse)
def oauth_consent(
    request: Request,
    transaction: str = Form(...),
    db: Session = Depends(get_db),
    oauth: RestOAuthService = Depends(get_rest_oauth_service),
) -> Response:
    pending = oauth.get_pending(db, transaction)
    user = oauth.get_login_session(db, request.cookies.get(OAUTH_SESSION_COOKIE))
    if pending is None or user is None:
        return HTMLResponse("<h1>授权会话不存在或已过期，请重新连接</h1>", status_code=401)
    oauth.save_grant(db, client_id=pending.client_id, user_id=user.id, scope=pending.scope)
    redirect_url = oauth.issue_authorization_code(db, pending=pending, user_id=user.id)
    record_audit(
        db,
        actor_id=user.id,
        action="rest_oauth_consent",
        resource_type="oauth",
        resource_id=pending.client_id,
    )
    db.commit()
    return RedirectResponse(redirect_url, status_code=status.HTTP_303_SEE_OTHER)


@router.post("/oauth/token", response_model=None)
def oauth_token(
    grant_type: str = Form(...),
    client_id: str = Form(...),
    code: str | None = Form(default=None),
    redirect_uri: str | None = Form(default=None),
    code_verifier: str | None = Form(default=None),
    refresh_token: str | None = Form(default=None),
    scope: str | None = Form(default=None),
    db: Session = Depends(get_db),
    oauth: RestOAuthService = Depends(get_rest_oauth_service),
) -> dict[str, object] | JSONResponse:
    try:
        if grant_type == "authorization_code":
            if not code or not redirect_uri or not code_verifier:
                raise RestOAuthError(
                    "invalid_request",
                    "code, redirect_uri and code_verifier are required",
                )
            return oauth.exchange_authorization_code(
                db,
                client_id=client_id,
                code=code,
                redirect_uri=redirect_uri,
                code_verifier=code_verifier,
            )
        if grant_type == "refresh_token":
            if not refresh_token:
                raise RestOAuthError("invalid_request", "refresh_token is required")
            return oauth.exchange_refresh_token(
                db,
                client_id=client_id,
                refresh_token=refresh_token,
                scope=scope,
            )
        raise RestOAuthError("unsupported_grant_type", "Unsupported grant_type")
    except RestOAuthError as exc:
        db.rollback()
        return _oauth_error_response(exc)


@router.post("/oauth/revoke", status_code=status.HTTP_200_OK)
def oauth_revoke(
    token: str = Form(...),
    client_id: str = Form(...),
    db: Session = Depends(get_db),
    oauth: RestOAuthService = Depends(get_rest_oauth_service),
) -> dict[str, str]:
    oauth.revoke_token(db, client_id=client_id, token=token)
    return {"message": "revoked"}


@router.post("/oauth/logout", status_code=status.HTTP_204_NO_CONTENT)
def oauth_logout(
    request: Request,
    response: Response,
    db: Session = Depends(get_db),
    oauth: RestOAuthService = Depends(get_rest_oauth_service),
) -> Response:
    oauth.revoke_login_session(db, request.cookies.get(OAUTH_SESSION_COOKIE))
    response.delete_cookie(OAUTH_SESSION_COOKIE, path="/")
    return response
