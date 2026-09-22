from dataclasses import dataclass


@dataclass(frozen=True)
class DecodedText:
    content: str
    encoding: str


def decode_text(data: bytes) -> DecodedText:
    """Decode common text encodings used by Windows and web documents."""
    bom_encodings = (
        (b"\xef\xbb\xbf", "utf-8-sig"),
        (b"\xff\xfe\x00\x00", "utf-32"),
        (b"\x00\x00\xfe\xff", "utf-32"),
        (b"\xff\xfe", "utf-16"),
        (b"\xfe\xff", "utf-16"),
    )
    for bom, encoding in bom_encodings:
        if data.startswith(bom):
            return DecodedText(data.decode(encoding), encoding)

    for encoding in ("utf-8", "gb18030", "big5", "utf-16"):
        try:
            return DecodedText(data.decode(encoding), encoding)
        except UnicodeDecodeError:
            continue

    return DecodedText(data.decode("utf-8", errors="replace"), "utf-8-replace")
