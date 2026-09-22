from __future__ import annotations

import ipaddress
import os
import socket
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi

from app.api.agent import router as agent_router
from app.api.health import router as health_router
from app.api.rest_oauth import router as rest_oauth_router
from app.core.config import settings
from app.db.init_db import init_db
from app.services.rest_oauth import RestOAuthService


def _lan_ip() -> str | None:
    configured = os.getenv("REST_API_PUBLIC_HOST", "").strip()
    if configured:
        try:
            address = ipaddress.ip_address(configured)
            if not address.is_loopback and not address.is_unspecified:
                return configured
        except ValueError:
            return configured

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

    try:
        addresses = {
            item[4][0]
            for item in socket.getaddrinfo(socket.gethostname(), None, socket.AF_INET)
            if item[4][0] and not item[4][0].startswith(("127.", "169.254."))
        }
    except OSError:
        addresses = set()
    return sorted(addresses)[0] if addresses else None


def public_url() -> str:
    configured = (settings.rest_api_public_url or "").strip()
    if configured:
        return configured.rstrip("/")
    host = _lan_ip() or "127.0.0.1"
    scheme = os.getenv("REST_API_PUBLIC_SCHEME", "http").strip().lower() or "http"
    return f"{scheme}://{host}:{settings.rest_api_port}"


rest_oauth = RestOAuthService(public_url())


@asynccontextmanager
async def lifespan(_: FastAPI):
    init_db()
    yield


app = FastAPI(
    title="Knowledge Base Agent REST API",
    description=(
        "Knowledge-base read-only API for agents. Authenticate with a Bearer Token "
        "provided by the API connection."
    ),
    version="1.0.0",
    lifespan=lifespan,
)
app.include_router(health_router, prefix="/api/v1")
app.include_router(rest_oauth_router)
app.include_router(agent_router, prefix="/api/v1")


@app.get("/", tags=["system"])
def service_info() -> dict[str, str]:
    return {
        "service": "knowledge-base-agent-api",
        "status": "ok",
        "authentication": "Bearer Token",
    }


def custom_openapi() -> dict:
    if app.openapi_schema:
        return app.openapi_schema
    schema = get_openapi(
        title=app.title,
        version=app.version,
        description=app.description,
        routes=app.routes,
    )
    components = schema.setdefault("components", {}).setdefault("securitySchemes", {})
    components["bearerAuth"] = {
        "type": "http",
        "scheme": "bearer",
        "bearerFormat": "JWT",
    }
    for path, operations in schema.get("paths", {}).items():
        if path.startswith("/api/v1/agent/"):
            for operation in operations.values():
                if isinstance(operation, dict) and "responses" in operation:
                    operation["security"] = [{"bearerAuth": []}]
    app.openapi_schema = schema
    return schema


app.openapi = custom_openapi


def main() -> None:
    import uvicorn

    uvicorn.run(
        app,
        host=settings.rest_api_host,
        port=settings.rest_api_port,
        log_level=settings.log_level.lower(),
    )


if __name__ == "__main__":
    main()
