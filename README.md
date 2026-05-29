# RainSure — Web application (Next.js / WhoPays-grade README)

**RainSure Web** — explain parametric climate cover, educate farmers and partners, and expose roadmap status for policy + pool + payout contracts on Stellar.

---

## 🎯 What is this app?

Next.js surfaces **policy concepts**, **risk pool storytelling**, and **oracle/trigger education** so non-crypto users grasp what on-chain modules do. Insurance UX must stay conservative—numbers and disclosures should track actuarial review; this scaffold gives **structure** until compliance copy lands.

---

## ❓ Problems the **whole protocol** tackles

From the [root README](../../README.md):

- Traditional claims are slow and administratively heavy—ill-suited to **high-frequency** climate stress.
- Small ticket policies need **scale**; manual adjustment does not scale.
- Donors and insurers need **auditable** triggers and solvency visibility.

---

## ✅ Goals this frontend supports

- Issue policies from templates tuned to **crop, region, and season**.
- Pool capital with **solvency guardrails** visible to participants.
- Execute payouts when **oracle/index conditions** pass—minimizing dispute surface.
- Integrate **partner** distribution (MFIs, agtech, governments).

---

## 💡 Why a dedicated **Next.js** frontend?

- **Distribution partner pitch**: MFIs and agtech embed these pages in workshops.
- **Regulatory clarity**: Plain-language hooks before users touch wallets.
- **Investor reporting**: `/pools` becomes truth-aligned once wired to indexers.

---

## ✨ Features & surfaces (shipping roadmap)

- **📋 Policies** — catalog narrative (`/policies`).
- **🏊 Pools** — liquidity & solvency story (`/pools`).
- **⚡ Triggers** — oracle/index explanation (`/triggers`).
- **🤝 Partners** — insurer/MFI integration strip (`/partners`).
- **🗺️ Route backlog** — embedded site map on `/`.

---

## 🏗️ Architecture

| Layer | Choice |
| ----- | ------ |
| Framework | **Next.js 15** — App Router, React 19 |
| Language | **TypeScript** (strict) |
| Styling | **CSS variables** in `app/globals.css` — protocol-specific palette |
| Components | `components/expected-pages.tsx` — **site map table** synced with [`docs/SITE_MAP.md`](../../docs/SITE_MAP.md) |
| Data | Static/scaffold today → Server Components + [`../backend/`](../backend/README.md) for authenticated flows |
| Blockchain UX | Wallet demos optional — **RPC/signing secrets stay off this bundle** |

---

## 📁 Project structure

```
frontend/
├── app/
│   ├── layout.tsx       # Shell: metadata + nav links
│   ├── page.tsx         # Landing + <ExpectedPages /> site map
│   ├── globals.css      # Design tokens / theme
│   └── …                # Feature routes (see route tables below)
├── components/
│   └── expected-pages.tsx
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md            # ← you are here
```

---

## 🗺️ Routes

### Header navigation

| Route | Label | Notes |
| ----- | ----- | ----- |
| `/policies` | Policies | Primary navigation |
| `/pools` | Pools | Primary navigation |
| `/triggers` | Triggers | Primary navigation |
| `/partners` | Partners | Primary navigation |
| `/roadmap` | Roadmap | Primary navigation |
| `/docs` | Docs | Primary navigation |

### Full backlog (canonical)

Authoritative **purpose + status**: [`../../docs/SITE_MAP.md`](../../docs/SITE_MAP.md).

| Route | Purpose | Status |
| ----- | ------- | ------ |
| `/` | Landing + site map | Scaffold * |
| `/policies` | Crop and region policy catalog | Planned |
| `/pools` | Liquidity and solvency monitoring | Planned |
| `/triggers` | Index and oracle integration | Planned |
| `/partners` | Insurers and MFI integrations | Planned |
| `/roadmap` | Pilot corridors | Scaffold * |
| `/docs` | Actuarial and ops manuals | Scaffold * |

The **Expected pages** section on **`/`** mirrors this table so visitors see delivery honesty without opening GitHub.

---

## 🚀 Quick start

### Prerequisites

- **Node.js** 20.x or **22.x** (LTS)
- npm (pnpm/yarn OK if your org standardizes)

### Install & run (dev)

```bash
cd frontend
npm install
npm run dev
```

Open **http://localhost:3000**

### Run **with** the API (integration dev)

```bash
# Terminal A — backend
cd ../backend && npm install && cp .env.example .env && npm run dev

# Terminal B — frontend (this folder)
cd ../frontend && npm run dev
```

Match [`../backend/README.md`](../backend/README.md) CORS origin ↔ Next origin.

---

## 📜 Available scripts

| Command | Purpose |
| ------- | ------- |
| `npm run dev` | Dev server + hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve production output |
| `npm run lint` | ESLint (`next/core-web-vitals`) |

---

## 🔐 Environment variables

### Baseline

Static scaffold needs **no secrets**. Use `.env.local` (gitignored) for optional public config.

### Planned **browser-safe** vars (`NEXT_PUBLIC_*` only)

Never put private keys or RPC URLs here.

| Variable | Example | Purpose |
| -------- | ------- | ------- |
| `NEXT_PUBLIC_NETWORK` | `testnet` | Badge for demos. |
| `NEXT_PUBLIC_BACKEND_URL` | `http://localhost:8080` | Quote/simulation API when built. |

---

## 🔗 Integration contract

- **REST**: Call [`backend/`](../backend/README.md) under `/api/v1/*` from Route Handlers or authenticated clients—never ship server secrets to `NEXT_PUBLIC_*`.
- **Soroban**: Demonstrate wallet flows with **test keys** only; production signing patterns belong in backend or secure wallets.
- **Contracts**: Rules live in [`../../contract/`](../../contract/) — UI reflects state via Horizon/indexers/backend.

---

## 🧪 Testing & quality gates

```bash
npm run lint
npm run build
```

Fix all ESLint + TypeScript errors before merging.

---

## 🚢 Deployment (e.g. Vercel / Netlify / Cloudflare Pages)

1. Set **build command**: `npm run build`
2. Set **output**: Next.js default (`.next`)
3. Configure **`NEXT_PUBLIC_*`** env vars per environment
4. Point **`NEXT_PUBLIC_BACKEND_URL`** at your deployed API
5. Enable **preview deployments** for grant demo links

---

## 🤝 Contributing

See [`../../CONTRIBUTING.md`](../../CONTRIBUTING.md). UI changes should stay aligned with [`../../docs/SITE_MAP.md`](../../docs/SITE_MAP.md).

---

## 📄 License

Match repository license (Apache-2.0 common for OSS grants).

---

## 📞 Support & docs

| Resource | Link |
| -------- | ---- |
| Monorepo overview | [`../../README.md`](../../README.md) |
| Backend API | [`../backend/README.md`](../backend/README.md) |
| Site map | [`../../docs/SITE_MAP.md`](../../docs/SITE_MAP.md) |
| Layout plan | [`../../docs/layout-plan.md`](../../docs/layout-plan.md) |
| Milestones → issues | [`../../docs/milestones-issues.md`](../../docs/milestones-issues.md) |

---

**npm package:** `rainsure-web` · **Slug:** `rainsure` · **Stack:** Next.js App Router

**Ship it.** 🚀

<!-- Contribution check by elizabethsmith at 2025-03-29T16:10:26 -->

<!-- Contribution check by jennifer-h at 2025-06-25T00:49:11 -->

<!-- Contribution check by kulayddon at 2025-09-20T09:27:57 -->

<!-- Contribution check by patricia-m at 2025-12-16T18:06:42 -->

<!-- Contribution check by thomas-g at 2026-03-14T02:45:27 -->

<!-- Contribution check by emilyw at 2026-06-09T11:24:13 -->
