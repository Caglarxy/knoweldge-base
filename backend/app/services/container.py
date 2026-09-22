from app.core.config import settings
from app.services.storage import LocalStorage


storage = LocalStorage(settings.local_storage_path)
