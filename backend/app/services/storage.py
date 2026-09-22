from pathlib import Path
from shutil import copy2, copyfileobj
from shutil import rmtree
from typing import BinaryIO


class LocalStorage:
    """Local filesystem storage with path traversal protection."""

    def __init__(self, root_path: str | Path):
        self.root_path = Path(root_path).resolve()
        self.root_path.mkdir(parents=True, exist_ok=True)

    def _resolve_key(self, key: str) -> Path:
        relative_key = Path(key)
        if relative_key.is_absolute() or ".." in relative_key.parts:
            raise ValueError("Storage key must stay inside the storage root")

        resolved = (self.root_path / relative_key).resolve()
        if resolved != self.root_path and self.root_path not in resolved.parents:
            raise ValueError("Storage key must stay inside the storage root")
        return resolved

    def put_bytes(self, key: str, content: bytes) -> Path:
        target = self._resolve_key(key)
        target.parent.mkdir(parents=True, exist_ok=True)
        temporary = target.with_name(f".{target.name}.tmp")
        temporary.write_bytes(content)
        temporary.replace(target)
        return target

    def put_file(self, key: str, source: BinaryIO) -> Path:
        target = self._resolve_key(key)
        target.parent.mkdir(parents=True, exist_ok=True)
        temporary = target.with_name(f".{target.name}.tmp")
        with temporary.open("wb") as destination:
            copyfileobj(source, destination)
        temporary.replace(target)
        return target

    def copy(self, source_key: str, target_key: str) -> Path:
        source = self.path(source_key)
        if not source.is_file():
            raise FileNotFoundError(source_key)
        target = self._resolve_key(target_key)
        target.parent.mkdir(parents=True, exist_ok=True)
        temporary = target.with_name(f".{target.name}.tmp")
        copy2(source, temporary)
        temporary.replace(target)
        return target

    def ensure_dir(self, key: str) -> Path:
        target = self._resolve_key(key)
        target.mkdir(parents=True, exist_ok=True)
        return target

    def path(self, key: str) -> Path:
        return self._resolve_key(key)

    def exists(self, key: str) -> bool:
        return self.path(key).is_file()

    def delete(self, key: str) -> None:
        target = self.path(key)
        if target.exists():
            target.unlink()

    def delete_dir(self, key: str) -> None:
        target = self.path(key)
        if target.exists():
            rmtree(target)
