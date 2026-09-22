from sqlalchemy.orm import Session

from app.core.config import settings
from app.models import SystemSetting


RECYCLE_BIN_RETENTION_KEY = "recycle_bin_retention_days"


def get_recycle_bin_retention_days(db: Session) -> int:
    setting = db.get(SystemSetting, RECYCLE_BIN_RETENTION_KEY)
    if setting is None:
        return max(1, settings.recycle_bin_retention_days)
    try:
        return max(1, int(setting.value))
    except (TypeError, ValueError):
        return max(1, settings.recycle_bin_retention_days)


def set_recycle_bin_retention_days(db: Session, days: int) -> int:
    normalized = max(1, int(days))
    setting = db.get(SystemSetting, RECYCLE_BIN_RETENTION_KEY)
    if setting is None:
        setting = SystemSetting(key=RECYCLE_BIN_RETENTION_KEY, value=str(normalized))
        db.add(setting)
    else:
        setting.value = str(normalized)
    return normalized
