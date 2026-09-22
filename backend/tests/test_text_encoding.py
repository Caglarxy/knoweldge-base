from app.services.text_encoding import decode_text


def test_decode_text_supports_utf8_bom():
    result = decode_text(b"\xef\xbb\xbf# \xe4\xb8\xad\xe6\x96\x87")

    assert result.content == "# 中文"
    assert result.encoding == "utf-8-sig"


def test_decode_text_supports_gb18030():
    result = decode_text("# 中文".encode("gb18030"))

    assert result.content == "# 中文"
    assert result.encoding == "gb18030"


def test_decode_text_supports_utf16():
    result = decode_text("# 中文".encode("utf-16"))

    assert result.content == "# 中文"
    assert result.encoding == "utf-16"
