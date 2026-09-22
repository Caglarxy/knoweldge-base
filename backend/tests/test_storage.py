from pathlib import Path

import pytest

from app.services.storage import LocalStorage


def test_local_storage_writes_and_reads_bytes(tmp_path: Path):
    storage = LocalStorage(tmp_path / "storage")

    path = storage.put_bytes("documents/doc-1/source.txt", b"hello")

    assert path.read_bytes() == b"hello"
    assert storage.exists("documents/doc-1/source.txt")
    assert storage.path("documents/doc-1/source.txt") == path


def test_local_storage_rejects_path_traversal(tmp_path: Path):
    storage = LocalStorage(tmp_path / "storage")

    with pytest.raises(ValueError):
        storage.put_bytes("../outside.txt", b"blocked")
