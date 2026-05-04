<!-- BEGIN:nextjs-agent-rules -->
# Agent Instructions — Link Shortener Project

## Critical: Read Next.js Docs First

This project uses **Next.js 16**, which has breaking changes. APIs, conventions, and file structure differ significantly from earlier versions. **Before writing any routing, caching, server component, or proxy code**, read the relevant guide in `node_modules/next/dist/docs/`.

Key docs to consult:
- `node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/15-route-handlers.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/16-proxy.md`

Heed all deprecation notices.

---

## MANDATORY: Read /docs Before Writing Any Code

> **THIS IS NON-NEGOTIABLE. You MUST read the relevant file(s) in the `/docs` directory BEFORE generating ANY code, making ANY edits, or proposing ANY implementation — no exceptions.**

Failure to read the relevant `/docs` file first will result in incorrect, inconsistent, or broken code. Do not rely on memory or assumptions about how this project works. Always read first.

**For every task, identify the relevant doc(s) below and read them in full before proceeding:**

| Area | Doc | When to read |
|------|-----|--------------|
| Auth | `docs/auth.md` | Any authentication, session, user, or Clerk-related work |
| UI | `docs/ui.md` | Any component, styling, layout, or Tailwind-related work |

If you are unsure which doc applies, **read all of them**.

---

## Quick Reference

- **Framework:** Next.js 16 App Router — no Pages Router
- **Auth:** Clerk — `<ClerkProvider>` in `app/layout.tsx`, guarded by `proxy.ts`
- **Database:** Neon PostgreSQL + Drizzle ORM — import `db` from `@/db` only
- **UI:** shadcn `radix-nova` style + Tailwind v4 — use `cn()` from `@/lib/utils`
- **Proxy file:** `proxy.ts` at root (Next.js 16 renamed Middleware → Proxy)
- **Path alias:** `@/` maps to the project root (not `src/`)
- **Params are Promises** in Next.js 16 — always `await params` and `await searchParams`
- **Default to Server Components** — add `'use client'` only when required
<!-- END:nextjs-agent-rules -->
