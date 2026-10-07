# Jelly Study

A browser-based 3D fruit playground for studying a glossy, translucent Chinese longevity peach.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/jelly-study` — Jelly Study web app

## Architecture decisions

- Keep interface, rendering, fruit geometry, and future physics code in separate modules.
- Stage one is a single whole peach with camera orbit and zoom; do not imply that disabled physics or slicing controls work.

## Product

Jelly Study is an interactive 3D study environment for sculptural fruit. The first stage focuses on the Chinese longevity peach, responsive camera controls, and its editorial interface; soft-body physics and slicing are later features.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
