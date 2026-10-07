#!/usr/bin/env bash
# Project-local tools: no global Node/npm installation or shell-profile changes.
set -euo pipefail
JELLY_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$JELLY_ROOT"
JELLY_NODE_VERSION=24.21.0
JELLY_PNPM_VERSION=10.18.3
JELLY_TOOLS="$JELLY_ROOT/.local"
mkdir -p "$JELLY_TOOLS"
export npm_config_cache="$JELLY_TOOLS/npm-cache"
export PNPM_HOME="$JELLY_TOOLS/pnpm"
export XDG_CACHE_HOME="$JELLY_TOOLS/cache"
export COREPACK_HOME="$JELLY_TOOLS/corepack"
export pnpm_config_store_dir="$JELLY_TOOLS/pnpm-store"
if [[ ! -x "$JELLY_TOOLS/node/bin/node" ]]; then
  if [[ "$(uname -s)" != Darwin ]]; then
    echo 'This bootstrap supports macOS. Elsewhere, install Node 24 and pnpm 10.18.3, then run pnpm install.' >&2
    exit 1
  fi
  case "$(uname -m)" in
    arm64) JELLY_ARCH=arm64; JELLY_SHA=bed7eea5325e1108f32ce5228ddd6a5f0f08a499ee42aa7442aea583702f6057 ;;
    x86_64) JELLY_ARCH=x64; JELLY_SHA=1462cb3b3046b815cf8ea436d3da450ec1a9f11dac7e5a46b0ada5305d7e8097 ;;
    *) echo 'Unsupported Mac architecture.' >&2; exit 1 ;;
  esac
  JELLY_ARCHIVE="node-v${JELLY_NODE_VERSION}-darwin-${JELLY_ARCH}.tar.gz"
  echo "Installing Node ${JELLY_NODE_VERSION} inside .local/…"
  curl --fail --location --retry 3 "https://nodejs.org/dist/v${JELLY_NODE_VERSION}/${JELLY_ARCHIVE}" -o "$JELLY_TOOLS/$JELLY_ARCHIVE"
  JELLY_ACTUAL_SHA="$(shasum -a 256 "$JELLY_TOOLS/$JELLY_ARCHIVE" | cut -d ' ' -f 1)"
  if [[ "$JELLY_ACTUAL_SHA" != "$JELLY_SHA" ]]; then
    echo 'Node download failed its SHA-256 check.' >&2; exit 1
  fi
  tar -xzf "$JELLY_TOOLS/$JELLY_ARCHIVE" -C "$JELLY_TOOLS"
  mv "$JELLY_TOOLS/node-v${JELLY_NODE_VERSION}-darwin-${JELLY_ARCH}" "$JELLY_TOOLS/node"
  rm "$JELLY_TOOLS/$JELLY_ARCHIVE"
fi
export PATH="$JELLY_TOOLS/node/bin:$JELLY_TOOLS/tools/node_modules/.bin:$PATH"
if [[ ! -f "$JELLY_TOOLS/tools/node_modules/pnpm/bin/pnpm.cjs" ]]; then
  npm install --prefix "$JELLY_TOOLS/tools" --ignore-scripts --no-audit --no-fund "pnpm@$JELLY_PNPM_VERSION"
fi
JELLY_PNPM="$JELLY_TOOLS/tools/node_modules/pnpm/bin/pnpm.cjs"
JELLY_COMMAND="${1:-dev}"
if [[ $# -gt 0 ]]; then shift; fi
if [[ "$JELLY_COMMAND" == install ]]; then
  exec node "$JELLY_PNPM" install --frozen-lockfile "$@"
fi
if [[ ! -f node_modules/.modules.yaml ]]; then
  node "$JELLY_PNPM" install --frozen-lockfile
fi
exec node "$JELLY_PNPM" "$JELLY_COMMAND" "$@"
