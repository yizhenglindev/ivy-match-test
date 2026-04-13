# Ivy Match Test（藤校匹配测试）

[![README 中文](https://img.shields.io/badge/README-中文-2563eb)](./README.md)
[![README English](https://img.shields.io/badge/README-English-7c3aed)](./README.en.md)
[![README 日本語](https://img.shields.io/badge/README-日本語-dc2626)](./README.ja.md)
[![README Français](https://img.shields.io/badge/README-Français-059669)](./README.fr.md)
[![在线演示](https://img.shields.io/badge/在线-演示-22c55e)](https://yizhenglindev.github.io/ivy-match-test/)
[![部署状态](https://github.com/yizhenglindev/ivy-match-test/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/yizhenglindev/ivy-match-test/actions/workflows/deploy-pages.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## 简介

**Ivy Match Test** 是一个基于 **Next.js** 的纯前端娱乐向「藤校匹配」小测验。用户回答 **10 道情境选择题** 后，系统会根据选项为 **8 所常春藤盟校**分别累计分数，生成匹配排名，并在结果页展示 **Top 1**、**Top 3** 以及完整分数表，配以学校 Logo 与简单动效。

> **说明**：本项目仅供娱乐与自我探索，结果不代表任何官方录取倾向或择校建议。

---

## 功能亮点

| 能力 | 说明 |
|------|------|
| 中英文界面 | 通过 URL 参数 `lang` 切换 `zh` / `en`（见下文） |
| 双题库 | `normal`：偏真实择校情境；`fun`：偏夸张与刻板印象玩梗 |
| 8 校独立计分 | 哈佛、耶鲁、普林斯顿、哥大、宾大、布朗、达特茅斯、康奈尔 |
| 结果展示 | 排名动画、学校 Logo、完整分数一览 |
| 架构 | 静态导出（`output: "export"`），无后端、无数据库 |

---

## 在线访问

- **演示地址**：[https://yizhenglindev.github.io/ivy-match-test/](https://yizhenglindev.github.io/ivy-match-test/)

部署在 **GitHub Pages** 时，Next.js 会通过 `basePath` 使用仓库名作为子路径（见 `next.config.ts`），上述链接已按当前仓库配置。

---

## 页面与路由

| 路径 | 说明 |
|------|------|
| `/` | 首页：介绍与进入测验 |
| `/test` | 测验页：10 题逐题作答 |
| `/result` | 结果页：排名与分数 |

---

## URL 参数

| 参数 | 取值 | 说明 |
|------|------|------|
| `lang` | `zh` \| `en` | 界面语言；默认 `zh` |
| `mode` | `normal` \| `fun` | 题库模式；默认 `normal` |

**示例**（本地开发时通常为站点根路径，无 `basePath`）：

- `http://localhost:3000/?lang=zh&mode=normal`
- `http://localhost:3000/?lang=en&mode=fun`

在 GitHub Pages 上请在路径前加上仓库前缀，例如：`https://yizhenglindev.github.io/ivy-match-test/?lang=zh&mode=fun`

---

## 环境要求

- **Node.js**：建议 **18** 或 **20** LTS（与 CI 中 Node 20 一致）
- **包管理**：`npm`（本仓库使用 `package-lock.json`）

---

## 本地运行

### 方式 A：已安装 Node（推荐）

```bash
npm install
npm run dev
```

浏览器打开 **http://localhost:3000**。

### 方式 B：使用 Conda 安装 Node

```bash
conda create -n ivy-match nodejs -y
conda activate ivy-match
npm install
npm run dev
```

---

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发模式，热更新 |
| `npm run build` | 生产构建（含静态导出） |
| `npm run start` | 启动生产构建后的服务（若需本地预览 `next start` 流程） |
| `npm run lint` | 运行 ESLint（Next 默认规则） |

---

## 项目结构（概要）

```text
app/                    App Router：页面与布局
components/             可复用 UI（题目卡片、结果看板、语言切换等）
data/questions.ts       normal / fun 两套题目与选项分数映射
lib/ivy-match.ts        匹配分计算与排序逻辑
lib/i18n.ts             中英文文案解析（`pickText` 等）
public/ivy-logos/       各校 Logo 静态资源
next.config.ts          静态导出、GitHub Pages 的 basePath 等
.github/workflows/      GitHub Actions 部署工作流
```

---

## 部署（GitHub Pages）

本仓库已包含 **GitHub Actions** 工作流：`.github/workflows/deploy-pages.yml`。

1. 仓库需为 **Public**（或配合 GitHub 对私有仓库 Pages 的策略）。
2. 在仓库 **Settings → Pages** 中，**Source** 选择 **GitHub Actions**。
3. 向 **`main`** 分支推送代码，工作流会自动构建并发布。

若你 fork 后更改了仓库名，请确认 `next.config.ts` 中通过 `GITHUB_REPOSITORY` 推导的 `basePath` 与 Pages 访问 URL 一致。

---

## 许可证

本项目采用 **MIT License**，详见 [LICENSE](./LICENSE)。

---

## 其他语言 README

- [English](./README.en.md)
- [日本語](./README.ja.md)
- [Français](./README.fr.md)
