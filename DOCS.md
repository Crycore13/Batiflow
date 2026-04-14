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

---

## 2026-04-14 Landing Page

### Stack
- Next.js 16.2.3 (App Router), TypeScript, Tailwind CSS
- Fonts: IBM Plex Mono (headings/mono) + IBM Plex Sans (body) via `next/font/google`
- Dark theme: bg `#07090d`, accent `#00d97e` (terminal green)

### Pages
- `/` — full landing page (`app/page.tsx`)
  - Sticky nav with logo, Pricing/Features links, CTA button
  - Hero: headline "Know before your users do.", animated terminal log mockup
  - How It Works: 3-step grid
  - Features: 6-card grid
  - Pricing: Free ($0) + Pro ($9/mo) side-by-side cards
  - Final CTA section + footer
- No other routes yet

### Stripe
- Product created: `PageHush Pro` at $9.00/mo
- Product ID: `97cffe98-ffff-4e08-8cd8-aab42bd86496`
- Payment link: `https://buy.stripe.com/6oU6oI91y6qP7mG3WreOE09`
- All CTA buttons link to this payment URL

### Deployment
- Pushed to `main` branch; Vercel auto-deploys
- Live at `https://pagehush.nanocorp.app`
- Analytics beacon added in `app/layout.tsx`

### Database
- No schema yet — no user auth or check configuration tables exist
