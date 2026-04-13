# Ivy Match Test

[![README 中文](https://img.shields.io/badge/README-中文-2563eb)](./README.md)
[![README English](https://img.shields.io/badge/README-English-7c3aed)](./README.en.md)
[![README 日本語](https://img.shields.io/badge/README-日本語-dc2626)](./README.ja.md)
[![README Français](https://img.shields.io/badge/README-Français-059669)](./README.fr.md)
[![Live Demo](https://img.shields.io/badge/Live-Demo-22c55e)](https://yizhenglindev.github.io/ivy-match-test/)
[![Deploy Status](https://github.com/yizhenglindev/ivy-match-test/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/yizhenglindev/ivy-match-test/actions/workflows/deploy-pages.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## Overview

**Ivy Match Test** is a **Next.js**-based, frontend-only Ivy League matching quiz for fun. After **10 scenario-based multiple-choice questions**, the app accumulates scores for **all eight Ivy League schools**, shows **Top 1**, **Top 3**, and a full score table, with school logos and light animations.

> **Disclaimer**: This project is for entertainment and self-reflection only. Results are not official admissions advice or school recommendations.

---

## Features

| Feature | Description |
|--------|-------------|
| Bilingual UI | Switch `zh` / `en` via the `lang` URL parameter |
| Two question sets | `normal`: more realistic; `fun`: more exaggerated and meme-friendly |
| Per-school scoring | Harvard, Yale, Princeton, Columbia, Penn, Brown, Dartmouth, Cornell |
| Results | Rankings, logos, full score breakdown |
| Architecture | Static export (`output: "export"`), no backend |

---

## Live demo

- **Site**: [https://yizhenglindev.github.io/ivy-match-test/](https://yizhenglindev.github.io/ivy-match-test/)

On **GitHub Pages**, Next.js uses a `basePath` derived from the repository name (see `next.config.ts`).

---

## Routes

| Path | Description |
|------|-------------|
| `/` | Home |
| `/test` | Quiz (10 questions) |
| `/result` | Results |

---

## URL parameters

| Param | Values | Description |
|-------|--------|-------------|
| `lang` | `zh` \| `en` | UI language; default `zh` |
| `mode` | `normal` \| `fun` | Question set; default `normal` |

**Examples** (local dev, usually no `basePath`):

- `http://localhost:3000/?lang=en&mode=normal`
- `http://localhost:3000/?lang=zh&mode=fun`

On GitHub Pages, prefix the repo path, e.g. `https://yizhenglindev.github.io/ivy-match-test/?lang=en&mode=fun`.

---

## Requirements

- **Node.js**: **18** or **20** LTS recommended (CI uses Node 20)
- **npm**: this repo ships with `package-lock.json`

---

## Local development

### Option A: Node installed

```bash
npm install
npm run dev
```

Open **http://localhost:3000**.

### Option B: Conda

```bash
conda create -n ivy-match nodejs -y
conda activate ivy-match
npm install
npm run dev
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server with HMR |
| `npm run build` | Production build (includes static export) |
| `npm run start` | Run production server when applicable |
| `npm run lint` | ESLint (Next.js defaults) |

---

## Project layout

```text
app/                    App Router pages and layout
components/             Reusable UI (question card, result dashboard, language switch)
data/questions.ts       normal / fun questions and per-option score maps
lib/ivy-match.ts        Scoring and ranking logic
lib/i18n.ts             Bilingual helpers (`pickText`, etc.)
public/ivy-logos/       School logo assets
next.config.ts          Static export, GitHub Pages basePath
.github/workflows/      GitHub Actions deploy workflow
```

---

## Deploying to GitHub Pages

Workflow file: `.github/workflows/deploy-pages.yml`.

1. Repository should be **Public** (or match your GitHub Pages plan for private repos).
2. **Settings → Pages → Source**: **GitHub Actions**.
3. Push to **`main`** to build and deploy.

If you rename the fork, confirm `basePath` in `next.config.ts` matches your Pages URL.

---

## License

**MIT** — see [LICENSE](./LICENSE).

---

## Other README languages

- [中文](./README.md)
- [日本語](./README.ja.md)
- [Français](./README.fr.md)
