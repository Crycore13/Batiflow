# Project Docs

## 2026-04-14 Audit

### Repo state
- GitHub repo `nanocorp-hq/pagehush` contains a single tracked file: `README.md`.
- There is no application scaffold yet: no `package.json`, `next.config.*`, `app/`, `pages/`, `src/`, migrations, or deployment config files.
- The only product definition in-repo is the README description: PageHush is intended to be a status page and incident alerting tool for solo developers.

### Database state
- `DATABASE_URL` points to a Neon Postgres database (`neondb`, PostgreSQL 16.12).
- Only the `public` schema exists.
- There are no user tables and no custom routines.

### Deployment state
- `VERCEL_PROJECT_URL` is `https://pagehush.nanocorp.app`.
- `nanocorp vercel env list` shows one configured env var: `DATABASE_URL` for `production`, `preview`, and `development`.
- The live URL is not serving an application deployment from this repo. The response includes `x-vercel-error: DEPLOYMENT_NOT_FOUND`, and the fallback HTML marks `DEPLOYED:false`.

### Files added by this task
- `DOCS.md`
- `docs/audit.md`
