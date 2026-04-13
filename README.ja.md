# Ivy Match Test（アイビー・マッチテスト）

[![README 中文](https://img.shields.io/badge/README-中文-2563eb)](./README.md)
[![README English](https://img.shields.io/badge/README-English-7c3aed)](./README.en.md)
[![README 日本語](https://img.shields.io/badge/README-日本語-dc2626)](./README.ja.md)
[![README Français](https://img.shields.io/badge/README-Français-059669)](./README.fr.md)
[![デモ](https://img.shields.io/badge/デモ-サイト-22c55e)](https://yizhenglindev.github.io/ivy-match-test/)
[![デプロイ](https://github.com/yizhenglindev/ivy-match-test/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/yizhenglindev/ivy-match-test/actions/workflows/deploy-pages.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## 概要

**Ivy Match Test** は **Next.js** で作られた、ブラウザだけで動く**エンタメ向け**のアイビー・リーグマッチングクイズです。**10 問のシナリオ式の選択問題**に答えると、**8 校のアイビー・リーグ**それぞれにスコアが加算され、**トップ 1・トップ 3** と**全スコア表**が表示されます。各校のロゴと軽いアニメーション付きです。

> **注意**：本プロジェクトは娯楽・自己理解のためのものであり、公式な入試や進学の助言を表すものではありません。

---

## 主な機能

| 項目 | 内容 |
|------|------|
| 2 言語 UI | URL パラメータ `lang` で `zh` / `en` を切り替え |
| 2 種類の問題集 | `normal`：やや現実的な志望校イメージ；`fun`：誇張・ステレオタイプ寄り |
| 8 校独立採点 | ハーバード、イェール、プリンストン、コロンビア、ペン、ブラウン、ダートマス、コーネル |
| 結果画面 | ランキング、ロゴ、スコア一覧 |
| 構成 | 静的エクスポート（`output: "export"`）、バックエンドなし |

---

## デモ

- **URL**：[https://yizhenglindev.github.io/ivy-match-test/](https://yizhenglindev.github.io/ivy-match-test/)

**GitHub Pages** では、`next.config.ts` の `basePath` にリポジトリ名が使われます。

---

## ルート

| パス | 説明 |
|------|------|
| `/` | トップ：説明とテスト開始 |
| `/test` | 10 問のクイズ |
| `/result` | 結果 |

---

## URL パラメータ

| パラメータ | 値 | 説明 |
|------------|-----|------|
| `lang` | `zh` \| `en` | 表示言語。既定は `zh` |
| `mode` | `normal` \| `fun` | 問題セット。既定は `normal` |

**例**（ローカルでは通常 `basePath` なし）：

- `http://localhost:3000/?lang=en&mode=normal`
- `http://localhost:3000/?lang=zh&mode=fun`

GitHub Pages ではリポジトリ名を含むパスになります。例：`https://yizhenglindev.github.io/ivy-match-test/?lang=en&mode=fun`

---

## 動作環境

- **Node.js**：**18** または **20** LTS を推奨（CI は Node 20）
- **npm**：`package-lock.json` あり

---

## ローカル実行

### 方法 A：Node を入れている場合

```bash
npm install
npm run dev
```

ブラウザで **http://localhost:3000** を開きます。

### 方法 B：Conda で Node を入れる場合

```bash
conda create -n ivy-match nodejs -y
conda activate ivy-match
npm install
npm run dev
```

---

## npm スクリプト

| コマンド | 内容 |
|----------|------|
| `npm run dev` | 開発サーバー（HMR） |
| `npm run build` | 本番ビルド（静的エクスポート含む） |
| `npm run start` | 本番ビルド後のサーバー起動（用途に応じて） |
| `npm run lint` | ESLint（Next 既定） |

---

## ディレクトリ構成（概要）

```text
app/                    App Router：ページとレイアウト
components/             UI コンポーネント
data/questions.ts       normal / fun の問題と選択肢スコア
lib/ivy-match.ts        採点・ランキング
lib/i18n.ts             中英テキスト処理
public/ivy-logos/       各校ロゴ
next.config.ts          静的エクスポート、GitHub Pages の basePath
.github/workflows/      GitHub Actions デプロイ
```

---

## GitHub Pages へのデプロイ

ワークフロー：`.github/workflows/deploy-pages.yml`。

1. リポジトリは **Public** が前提（またはプランに応じて Pages 設定を確認）。
2. **Settings → Pages** で **Source** を **GitHub Actions** に。
3. **`main`** へプッシュするとビルド・公開が走ります。

フォーク後にリポジトリ名を変えた場合は、`next.config.ts` の `basePath` と公開 URL が一致しているか確認してください。

---

## ライセンス

**MIT License** — 詳細は [LICENSE](./LICENSE)。

---

## 他言語の README

- [中文](./README.md)
- [English](./README.en.md)
- [Français](./README.fr.md)
