# Ivy Match Test

[![中文版](https://img.shields.io/badge/README-中文-blue)](#中文)
[![English](https://img.shields.io/badge/README-English-blueviolet)](#english)
[![Live Demo](https://img.shields.io/badge/Live-Demo-22c55e)](https://yizhenglindev.github.io/ivy-match-test/)
[![Deploy Status](https://github.com/yizhenglindev/ivy-match-test/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/yizhenglindev/ivy-match-test/actions/workflows/deploy-pages.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## 中文

Ivy Match Test 是一个基于 Next.js 的娱乐型藤校匹配测试网站。  
用户通过回答 10 道题，得到与 8 所藤校的匹配分，并展示 Top 1 / Top 3 结果。

### 项目亮点

- 中英文界面切换（`zh` / `en`）
- 双题库模式：
  - `normal`：更正经，偏真实择校问卷
  - `fun`：更夸张，偏刻板印象玩梗
- 8 校独立打分与排序
- 结果页动画 + 学校 Logo 展示
- 纯前端实现，不依赖后端

### 在线访问

- 演示地址：[https://yizhenglindev.github.io/ivy-match-test/](https://yizhenglindev.github.io/ivy-match-test/)

### 页面说明

- `/` 首页
- `/test` 测试页
- `/result` 结果页

### URL 参数

- `lang`: `zh` | `en`
- `mode`: `normal` | `fun`

示例：

- `/?lang=zh&mode=normal`
- `/?lang=en&mode=fun`

### 本地运行

#### 方式 A：Node.js（推荐）

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`

#### 方式 B：Conda

```bash
conda create -n project nodejs -y
conda activate project
npm install
npm run dev
```

### 常用命令

```bash
npm run dev
npm run build
npm run start
npm run lint
```

### 目录结构

```text
app/                  路由与页面
components/           UI 组件
data/questions.ts     normal/fun 两套题库与分数映射
lib/ivy-match.ts      匹配计算逻辑
lib/i18n.ts           中英文文案切换
public/ivy-logos/     学校 logo 资源
```

### 部署（GitHub Pages）

本仓库已包含自动部署工作流：`.github/workflows/deploy-pages.yml`

1. 仓库设为 Public
2. GitHub -> `Settings` -> `Pages`
3. `Source` 选择 `GitHub Actions`
4. push 到 `main` 后自动发布

---

## English

Ivy Match Test is a playful Ivy League matching quiz built with Next.js.  
Users answer 10 questions and receive a ranked fit result across all 8 Ivy schools.

### Highlights

- Bilingual UI (`zh` / `en`)
- Two quiz modes:
  - `normal`: more formal and realistic
  - `fun`: more exaggerated and stereotype-based
- Independent scoring for 8 Ivy schools
- Animated result dashboard + school logos
- Frontend-only architecture (no backend)

### Live Site

- Demo: [https://yizhenglindev.github.io/ivy-match-test/](https://yizhenglindev.github.io/ivy-match-test/)

### Routes

- `/` Home
- `/test` Quiz
- `/result` Result

### URL Parameters

- `lang`: `zh` | `en`
- `mode`: `normal` | `fun`

Examples:

- `/?lang=zh&mode=normal`
- `/?lang=en&mode=fun`

### Local Development

#### Option A: Node.js (recommended)

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

#### Option B: Conda

```bash
conda create -n project nodejs -y
conda activate project
npm install
npm run dev
```

### Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

### Project Structure

```text
app/                  routes and pages
components/           UI components
data/questions.ts     question sets (normal/fun) and score mappings
lib/ivy-match.ts      ranking and match logic
lib/i18n.ts           bilingual text helpers
public/ivy-logos/     school logo assets
```

### Deployment (GitHub Pages)

This repo includes an auto-deploy workflow: `.github/workflows/deploy-pages.yml`.

1. Set repository visibility to Public
2. Go to `Settings` -> `Pages`
3. Set `Source` to `GitHub Actions`
4. Push to `main` to trigger deployment
