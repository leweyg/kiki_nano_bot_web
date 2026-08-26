#!/bin/sh
set -eu
cd "$(dirname "$0")"
command -v node >/dev/null 2>&1 || { echo "node is required" >&2; exit 1; }
node sim.js