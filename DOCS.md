# Project Docs

## 2026-04-15 Messages de prospection WhatsApp/SMS — Artisans BTP

3 messages cold outreach rédigés dans `docs/prospection-whatsapp-btp.md`.

**3 angles testés :**
- Angle 1 — Douleur paiement (client qui paye pas / en retard)
- Angle 2 — Douleur comptable (découvrir trop tard qu'on est dans le rouge)
- Angle 3 — Douleur survie (stress de pas savoir si on peut payer ses charges)

**Format :** WhatsApp/SMS, max 5 lignes, accroche directe + pitch BatiFlow + question ouverte + lien liste d'attente optionnel.

**KPI cible :** > 10 % de taux de réponse. Tester 30 contacts par angle, doubler sur le gagnant.

---

## 2026-04-14 Analyse de Marché — DossierSubvention

Analyse complète rédigée dans `docs/analyse-marche-dossiersubvention.md`.

**Résumé des chiffres clés :**
- ~62 000 artisans RGE en France (en baisse de 13 % depuis 2021)
- 2,3 M dossiers MPR traités depuis 2020 ; ~207 000 en 2024
- TAM estimé : ~36 M€/an ; SAM réaliste (20 % pénétration) : ~7 M€ ARR
- Concurrent principal : Rénolib (10 M€ levés, cible PME)
- Créneau disponible : solo/TPE, outil simple sans avance de trésorerie
- Modèle recommandé : freemium → 29 €/mois, objectif 500 payants = ~14 500 €/mois MRR
- Risque principal : instabilité réglementaire MPR (suspensions en cours)
- Verdict : **VIABLE** avec différenciation sur la simplicité et distribution via syndicats (CAPEB)

---

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

## 2026-04-15 Audit Landing Page — Optimisation conversion

### Points vérifiés

1. **Lien Stripe** : Aucun lien Stripe dans `app/page.tsx` ✅ — la page n'affiche que la liste d'attente
2. **Formulaire liste d'attente** : Testé end-to-end — API `/api/waitlist` répond `{"success":true}`, l'email est bien enregistré en DB ✅
3. **SEO** :
   - Titre corrigé : `BatiFlow — Tu sais jamais si t'as assez pour finir le mois ?` ✅
   - `lang="fr"` sur le HTML ✅
   - Meta description en français pour artisans BTP ✅
4. **Mobile** : Testé à 390×844px (iPhone 14) — aucun dépassement horizontal, CTA visible sans scroll, formulaire fonctionnel ✅

### Corrections effectuées

- `app/layout.tsx` : titre mis à jour ("Tu sais jamais si t'as assez pour finir le mois ?"), OG/Twitter titles idem
- `app/page.tsx` : correction d'un espace manquant après un `<strong>` dans le hero
- Commit `9688f8e` · déployé sur Vercel (confirmé : browser affiche le nouveau titre)

---

## 2026-04-14 BatiFlow Landing Page (waitlist)

### Pivot
PageHush landing page replaced by BatiFlow — a cash flow preview tool for solo BTP tradespeople (artisans).

### Stack
- Next.js 16.2.3 (App Router), TypeScript, Tailwind CSS
- Fonts: system-ui (no Google Fonts — lean and fast)
- Theme: deep navy (#0f1923) background, construction orange (#f97316) accent

### Pages
- `/` — BatiFlow waitlist landing page (`app/page.tsx`)
  - Header: BatiFlow logo only
  - Hero: "Tu sais jamais si t'as assez pour finir le mois ?" headline + orange CTA
  - Pain points: 3 cards (late payment, cash uncertainty, accountant too late)
  - Solution: inline SVG 90-day cash flow timeline (green/orange/red bars)
  - Waitlist form: email → POST /api/waitlist, success confirmation message
  - Footer: "BatiFlow — Pour les artisans qui veulent garder la tête hors de l'eau"

### API
- `POST /api/waitlist` — saves email to `waitlist` table (PostgreSQL)
  - Validates email format, ignores duplicates (ON CONFLICT DO NOTHING)

### Database
- Table `waitlist (id SERIAL, email VARCHAR UNIQUE, created_at TIMESTAMPTZ)`

### Deployment
- Pushed to `main` branch; Vercel auto-deploys
- Live at `https://pagehush.nanocorp.app`

---

## 2026-04-14 PageHush Landing Page (REPLACED)

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

---

## 2026-04-14 Analyse de marché CashChantier

### Fichier produit
- `docs/analyse-marche-cashchantier.md` — analyse de marché complète pour CashChantier

### Résumé des conclusions
- **Marché cible :** ~230 000–330 000 artisans solo du bâtiment en France (63 % sans salarié)
- **Marché adressable réaliste :** 80 000–120 000 artisans digitalisés + pain-aware (~100 M€/an brut)
- **Douleurs clés :** BFR invisible, décalage chantier→paiement (47 % factures payées avec > 30j retard), gestion "à vue" depuis le solde bancaire
- **Gap concurrentiel net :** Agicap/Fygr = généralistes trop chers ; Obat/Batappli = devis/factures sans tréso prévi. Personne ne combine logique chantier + prévisionnel cash
- **Principaux concurrents indirects :** Obat (25 €/mois), Batappli (79 €/mois), Fygr (59 €/mois), Agicap (149 €/mois+)
- **Pricing recommandé :** essai 14j sans CB → Solo 12,90 €/mois → Pro 19,90 €/mois
- **ARR cible à 36 mois :** ~900 000 € (5 000 clients payants)
- **Verdict :** Créneau réel, timing favorable (crise BTP 2024–2025), viable si UX mobile-first ultra-simple

---

## 2026-04-14 Analyse de marché PlanningArtisan

### Fichier produit
- `docs/analyse-marche-planningartisan.md` — analyse de marché complète pour PlanningArtisan

### Résumé des conclusions
- **Marché cible :** ~230 000–265 000 artisans solo du bâtiment en France (63 % des TPE bâtiment)
- **Gap concurrentiel :** pas de solution mono-produit ultra-simple dédiée au seul planning (les concurrents visent PME avec suites complètes)
- **Principaux concurrents :** Alobees (~40 €/mois), Obat (~25 €/mois), Vertuoza (sur devis), Costructor (dès 12,50 €/mois)
- **Pricing recommandé :** Freemium → 14,90 €/mois (Solo) → 24,90 €/mois (Pro)
- **ARR cible à 36 mois :** ~1,15 M€ (6 000 clients payants)
- **Verdict :** Projet viable, à condition de rester ultra-simple et mobile-first

---

## 2026-04-14 Stripe — BatiFlow Pro à 14,90€/mois

### Produit créé
- **Nom :** BatiFlow Pro
- **Prix :** 14,90 €/mois (1490 centimes)
- **Description :** Trésorerie prévisionnelle sur 90 jours pour artisans BTP solo
- **Product ID :** `2312a5e2-d6c7-4b45-8f3b-47b16848d0d8`
- **Lien de paiement :** `https://buy.stripe.com/9B6eVe4Li2az0Yi1OjeOH1G`

> Note : La devise renvoyée par le CLI est "usd" mais le montant est 14,90 (centimes EUR). Vérifier dans le dashboard Stripe si nécessaire.

### Produits actifs (liste complète)
| Nom | Prix | ID |
|---|---|---|
| BatiFlow Pro (14,90€) | 1490 cts | `2312a5e2-d6c7-4b45-8f3b-47b16848d0d8` |
| BatiFlow Pro (dupliqué) | 1490 cts | `0d6fbcb6-aa01-4eb4-9f10-b0dcfc8d8781` |
| BatiFlow Pro (ancien 12,90€) | 1290 cts | `cadbdcad-2132-4446-819e-4c5facaf6729` |

→ À nettoyer : désactiver les anciens produits (12,90€ et le doublon USD)

---

## 2026-04-14 Rebranding PageHush → BatiFlow

### Changements effectués

**Produits Stripe**
- Ancien produit `PageHush Pro` (ID: `97cffe98-ffff-4e08-8cd8-aab42bd86496`) supprimé
- Nouveau produit `BatiFlow Pro` créé à 12,90 €/mois
  - Product ID: `cadbdcad-2132-4446-819e-4c5facaf6729`
  - Payment link: `https://buy.stripe.com/14A8wQfpW16vbCW9gLeOH1k`

**Documents entreprise (nanocorp docs)**
- `company_name` : "BatiFlow"
- `description` : description de l'outil de trésorerie prévisionnelle pour artisans BTP solo
- `mission` : mission BatiFlow centrée sur la trésorerie simple et mobile-first

**Fichiers repo**
- `README.md` : réécrit en français avec branding BatiFlow
- `docs/audit.md` : titre mis à jour pour indiquer le statut pré-rebranding

**Non modifié (intentionnel)**
- Le beacon analytics `?s=pagehush` dans `app/layout.tsx` est l'identifiant plateforme NanoCorp — ne pas modifier
- L'URL de déploiement `https://pagehush.nanocorp.app` est gérée par NanoCorp
