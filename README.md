# Ivy Match Test

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

A playful **Ivy League matching quiz** built with Next.js, TypeScript, and Tailwind CSS.

Users answer 10 questions, then get:
- Top 1 best-fit Ivy school
- Top 3 ranking
- Full 8-school score breakdown

## Features

- Bilingual UI (Chinese / English) with language switch
- Two quiz modes:
  - `normal`: more formal and realistic
  - `fun`: more stereotype-based and meme-like
- Dynamic scoring across 8 Ivy schools
- Animated result dashboard
- School logo display for Top 1 and Top 3

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React

## Pages

- `/` Home
- `/test` Quiz
- `/result` Result

## URL Params

- `lang`: `zh` | `en`
- `mode`: `normal` | `fun`

Examples:
- `/?lang=zh&mode=normal`
- `/?lang=en&mode=fun`

## Local Development

### Option A: Node.js (recommended)

1. Install Node.js 18+ (LTS recommended)
2. Install dependencies:

```bash
npm install
```

3. Start dev server:

```bash
npm run dev
```

4. Open:

```text
http://localhost:3000
```

### Option B: Conda environment

```bash
conda create -n project nodejs -y
conda activate project
npm install
npm run dev
```

## Project Structure

```text
app/                  # routes and pages
components/           # UI components
data/questions.ts     # question sets (normal/fun) and scoring mapping
lib/ivy-match.ts      # scoring and ranking logic
lib/i18n.ts           # language helpers
public/ivy-logos/     # school logo assets
```

## Scripts

```bash
npm run dev      # run local dev server
npm run build    # production build
npm run start    # run production server
npm run lint     # lint checks
```

## Git Workflow (Quick)

```bash
git add .
git commit -m "your message"
git push
```

## Deployment

Recommended: **Vercel**

1. Import this GitHub repo into Vercel
2. Framework preset: Next.js
3. Click Deploy

No backend is required for this project.

### GitHub Pages (auto deploy)

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

After pushing to `main`, enable Pages in GitHub:

1. Go to `Settings` -> `Pages`
2. Under **Build and deployment**, set **Source** to `GitHub Actions`
3. Push to `main` again (or run the workflow manually)

Your site URL will be:

```text
https://<your-github-username>.github.io/<repo-name>/
```
