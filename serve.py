#!/usr/bin/env python3
"""Local preview server with Cache-Control + gzip for Lighthouse-friendly caching."""

from __future__ import annotations

import gzip
import mimetypes
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PORT = int(os.environ.get("PORT", "4173"))

LONG_CACHE = "public, max-age=31536000, immutable"
HTML_CACHE = "no-cache"

STATIC_EXTS = (
    ".css",
    ".js",
    ".webp",
    ".jpg",
    ".jpeg",
    ".png",
    ".svg",
    ".woff2",
    ".woff",
)

COMPRESSIBLE = (
    "text/",
    "application/javascript",
    "text/javascript",
    "application/json",
    "text/css",
    "image/svg+xml",
)


class CachingHandler(SimpleHTTPRequestHandler):
    extensions_map = {
        **getattr(SimpleHTTPRequestHandler, "extensions_map", {}),
        **mimetypes.types_map,
        "": "application/octet-stream",
        ".webp": "image/webp",
        ".woff2": "font/woff2",
        ".js": "text/javascript",
    }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        path = self.path.split("?", 1)[0]
        if path.endswith(".html") or path in ("/", ""):
            self.send_header("Cache-Control", HTML_CACHE)
        elif any(path.endswith(ext) for ext in STATIC_EXTS):
            self.send_header("Cache-Control", LONG_CACHE)
        self.send_header("Vary", "Accept-Encoding")
        super().end_headers()

    def do_GET(self):
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            for index in ("index.html", "index.htm"):
                candidate = os.path.join(path, index)
                if os.path.isfile(candidate):
                    path = candidate
                    break
            else:
                return super().do_GET()

        if not os.path.isfile(path):
            self.send_error(404, "File not found")
            return

        ctype = self.guess_type(path)
        try:
            raw = Path(path).read_bytes()
        except OSError:
            self.send_error(404, "File not found")
            return

        compressible = ctype.startswith("text/") or ctype in COMPRESSIBLE
        accept = self.headers.get("Accept-Encoding", "")
        body = raw
        encoding = None
        if "gzip" in accept and compressible and len(raw) > 512:
            body = gzip.compress(raw, compresslevel=6)
            encoding = "gzip"

        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        if encoding:
            self.send_header("Content-Encoding", encoding)
        try:
            self.send_header(
                "Last-Modified", self.date_time_string(os.path.getmtime(path))
            )
        except OSError:
            pass
        self.end_headers()
        self.wfile.write(body)


def main() -> None:
    server = ThreadingHTTPServer(("127.0.0.1", PORT), CachingHandler)
    print(f"Serving {ROOT} at http://127.0.0.1:{PORT}/ (cache + gzip)")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")


if __name__ == "__main__":
    main()
