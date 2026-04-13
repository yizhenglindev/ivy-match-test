# Ivy Match Test

[![README 中文](https://img.shields.io/badge/README-中文-2563eb)](./README.md)
[![README English](https://img.shields.io/badge/README-English-7c3aed)](./README.en.md)
[![README 日本語](https://img.shields.io/badge/README-日本語-dc2626)](./README.ja.md)
[![README Français](https://img.shields.io/badge/README-Français-059669)](./README.fr.md)
[![Démo en ligne](https://img.shields.io/badge/Démo-en_ligne-22c55e)](https://yizhenglindev.github.io/ivy-match-test/)
[![Déploiement](https://github.com/yizhenglindev/ivy-match-test/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/yizhenglindev/ivy-match-test/actions/workflows/deploy-pages.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## Présentation

**Ivy Match Test** est un petit quiz de « correspondance » avec la **Ivy League**, développé en **Next.js** et entièrement côté navigateur. Après **10 questions à choix multiples** dans des situations fictives, l’application additionne les points pour **les huit universités de l’Ivy League**, affiche le **Top 1**, le **Top 3** et le tableau complet des scores, avec les logos des écoles et de légères animations.

> **Avertissement** : ce projet est purement récréatif et introspectif ; les résultats ne constituent aucun conseil d’admission ni de choix d’établissement.

---

## Fonctionnalités

| Élément | Description |
|---------|-------------|
| Interface bilingue | Basculer entre `zh` et `en` via le paramètre d’URL `lang` |
| Deux banques de questions | `normal` : plus réaliste ; `fun` : plus exagérée et humoristique |
| Score par école | Harvard, Yale, Princeton, Columbia, Penn, Brown, Dartmouth, Cornell |
| Page de résultats | Classement, logos, détail des scores |
| Architecture | Export statique (`output: "export"`), sans backend |

---

## Démo en ligne

- **Site** : [https://yizhenglindev.github.io/ivy-match-test/](https://yizhenglindev.github.io/ivy-match-test/)

Sur **GitHub Pages**, Next.js applique un `basePath` dérivé du nom du dépôt (voir `next.config.ts`).

---

## Routes

| Chemin | Rôle |
|--------|------|
| `/` | Accueil : présentation et lancement du quiz |
| `/test` | Quiz : 10 questions |
| `/result` | Résultats |

---

## Paramètres d’URL

| Paramètre | Valeurs | Description |
|-----------|---------|-------------|
| `lang` | `zh` \| `en` | Langue de l’interface ; par défaut `zh` |
| `mode` | `normal` \| `fun` | Jeu de questions ; par défaut `normal` |

**Exemples** (en local, souvent sans `basePath`) :

- `http://localhost:3000/?lang=en&mode=normal`
- `http://localhost:3000/?lang=zh&mode=fun`

Sur GitHub Pages, préfixez l’URL avec le chemin du dépôt, par ex. `https://yizhenglindev.github.io/ivy-match-test/?lang=en&mode=fun`.

---

## Prérequis

- **Node.js** : **18** ou **20** LTS recommandé (l’CI utilise Node 20)
- **npm** : le dépôt inclut un `package-lock.json`

---

## Lancer en local

### Option A : Node.js installé

```bash
npm install
npm run dev
```

Ouvrir **http://localhost:3000**.

### Option B : Conda pour installer Node

```bash
conda create -n ivy-match nodejs -y
conda activate ivy-match
npm install
npm run dev
```

---

## Scripts npm

| Commande | Rôle |
|----------|------|
| `npm run dev` | Serveur de développement avec rechargement à chaud |
| `npm run build` | Build de production (export statique inclus) |
| `npm run start` | Démarrage du serveur de production si besoin |
| `npm run lint` | ESLint (configuration Next.js par défaut) |

---

## Structure du projet

```text
app/                    Pages et layout (App Router)
components/             Composants UI réutilisables
data/questions.ts       Jeux normal / fun et cartes de points par option
lib/ivy-match.ts        Calcul des scores et classement
lib/i18n.ts             Aides bilingues (`pickText`, etc.)
public/ivy-logos/       Logos des écoles
next.config.ts          Export statique, basePath pour GitHub Pages
.github/workflows/      Workflow GitHub Actions pour le déploiement
```

---

## Déploiement sur GitHub Pages

Fichier de workflow : `.github/workflows/deploy-pages.yml`.

1. Le dépôt doit être **public** (ou conforme à votre offre GitHub Pages pour les dépôts privés).
2. Dans **Settings → Pages**, définir la **Source** sur **GitHub Actions**.
3. Pousser sur **`main`** déclenche la construction et la publication.

Si vous renommez le dépôt après un fork, vérifiez que le `basePath` dans `next.config.ts` correspond bien à l’URL publiée.

---

## Licence

**MIT** — voir [LICENSE](./LICENSE).

---

## Autres langues du README

- [中文](./README.md)
- [English](./README.en.md)
- [日本語](./README.ja.md)
