# FCH Portfolio · 范诚昊个人主页

AI 驱动的交互式作品集网站，支持中英双语、AI 数字分身问答、来访追踪与分析后台。

**线上地址**：[fch-portfolio.vercel.app](https://fch-portfolio.vercel.app)

---

## 功能特性

### 🚪 门禁页（Gate）
- 访问者填写「公司/团队」+「职位」后进入主页
- AES-256-CBC 加密 Cookie（7 天有效）免重复填写
- 新来访实时邮件通知

### 🌐 中英双语（i18n）
- 基于 Astro i18n routing，`/`（中文）与 `/en/`（英文）双路由
- Cookie 持久化语言偏好
- 所有数据层字段同步支持 `zh`/`en`

### 🏠 个人主页
- **能力画像** — 4 维能力卡片（AI 产品、城市研究、数据科学、空间设计）
- **个人时间线** — 教育 / 实习 / 竞赛经历
- **技能标签** — 按类别分组展示
- **作品卡片** — 8 个项目卡片，按 sortWeight 排序
- **悬浮操作按钮（FAB）** — 中英切换 + AI 问答入口

### 📂 作品详情弹层
- 点击卡片弹出详情 Overlay（支持浏览器前进/后退）
- 自定义板块结构（项目背景 / 功能介绍 / 技术选型 / GitHub 链接）
- 视频演示板块 — 双层 Overlay 播放器，原生 `<video>` 控件
- `periodLabel` 可覆盖默认"时间"标签（如"耗时"）
- SSR 静态详情页（`/project/[slug]`）作为降级方案

### 🤖 AI 数字分身问答（RAG）
- 基于 **DeepSeek** 大语言模型
- 语料自动拼接自 `profile.ts` + `projects.ts` 全量数据
- 系统提示词严格控制：仅基于语料作答、必须引用来源、不编造
- 三层频控：单会话 20 次/天 · 单 IP 50 次/天 · 全站 200 次/天
- 问答日志存入 Supabase

### 📊 后台管理（Admin）
- Supabase Auth（邮箱+密码）JWT 鉴权
- 本周数据概览：独立公司数、总访问量、深度浏览（>3min）、问答次数
- 来访记录列表 + RAG 问答日志

### 📈 来访追踪
- 门禁提交时记录：公司、职位、Referrer、UA、IP
- 浏览结束上报：停留时长、查看项目列表
- 管理后台可视化统计

---

## 技术架构

```
┌──────────────────────────────────────────────────┐
│                    Vercel (SSR)                   │
│  ┌────────────────────────────────────────────┐  │
│  │              Astro 5 Middleware             │  │
│  │    (i18n · Gate Auth · Session Injection)   │  │
│  ├────────────┬────────────┬──────────────────┤  │
│  │  Pages     │  API       │  Components      │  │
│  │  gate      │  /visit    │  ProjectDetail   │  │
│  │  home      │  /track    │  RAGOverlay      │  │
│  │  rag       │  /rag      │  ProjectCard     │  │
│  │  project   │  /admin    │  CapabilityCards │  │
│  │  admin     │            │  HonorsSkills    │  │
│  ├────────────┴────────────┴──────────────────┤  │
│  │              Data Layer                     │  │
│  │  projects.ts · profile.ts · rag-corpus.ts  │  │
│  └────────────────────────────────────────────┘  │
│                       │                           │
│        ┌──────────────┼──────────────┐            │
│        ▼              ▼              ▼            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │ DeepSeek │  │ Supabase │  │ Nodemailer│       │
│  │   API    │  │  (PG)    │  │  (SMTP)  │       │
│  └──────────┘  └──────────┘  └──────────┘       │
└──────────────────────────────────────────────────┘
```

### 技术栈

| 层级 | 技术 |
|---|---|
| **框架** | [Astro 5](https://astro.build) (SSR) |
| **语言** | TypeScript |
| **部署** | [Vercel](https://vercel.com) (Serverless) |
| **数据库** | [Supabase](https://supabase.com) (PostgreSQL) |
| **AI** | [DeepSeek](https://deepseek.com) (`deepseek-chat`) |
| **邮件** | Nodemailer (SMTP) |
| **测试** | Vitest (单元) + Playwright (E2E) |
| **认证** | Supabase Auth (JWT) + AES-256-CBC Cookie |
| **大文件** | Git LFS（.mov/.mp4 等视频） |

### 数据库表

| 表 | 用途 |
|---|---|
| `visits` | 来访记录（公司/职位/UA/IP/时长/查看项目） |
| `rag_logs` | AI 问答日志（问题/回答/引用项目） |
| `projects` | 项目语料（DB 备份，运行时从 TS 文件读取） |
| `profile` | 个人资料语料（DB 备份） |
| `rate_limits` | 频控计数器（bucket → remaining → reset_at） |

---

## 项目结构

```
.
├── astro.config.mjs              # Astro 配置（SSR + Vercel + i18n）
├── tsconfig.json
├── package.json
├── .gitattributes                # Git LFS 规则（视频文件）
├── supabase/
│   └── migrations/
│       └── 001_schema.sql        # 数据库建表 + RLS + 索引
├── public/
│   └── videos/                   # 项目演示视频（Git LFS）
├── src/
│   ├── middleware.ts              # 请求中间件（i18n + Gate 鉴权）
│   ├── env.d.ts
│   ├── styles/
│   │   └── global.css             # 全局样式（设计令牌 + JS 注入样式）
│   ├── layouts/
│   │   ├── BaseLayout.astro       # 基础布局（SEO + OG 标签）
│   │   └── AdminLayout.astro      # 管理后台布局
│   ├── pages/
│   │   ├── index.astro            # 根路径 → 重定向 /gate
│   │   ├── gate.astro             # 门禁页（公司+职位表单）
│   │   ├── home.astro             # 个人主页
│   │   ├── rag.astro              # AI 问答页（RAG 对话）
│   │   ├── project/
│   │   │   └── [slug].astro       # 项目详情 SSR 页
│   │   ├── admin/
│   │   │   ├── login.astro        # 管理后台登录
│   │   │   └── dashboard.astro    # 数据看板
│   │   ├── en/                    # 英文路由镜像
│   │   │   ├── gate.astro
│   │   │   ├── home.astro
│   │   │   └── rag.astro
│   │   └── api/
│   │       ├── visit.ts           # POST 门禁提交 + 写 Cookie
│   │       ├── track.ts           # POST 浏览追踪（时长/项目）
│   │       ├── rag.ts             # POST AI 问答（频控 + DeepSeek）
│   │       └── admin.ts           # GET 管理后台数据（JWT 鉴权）
│   ├── components/
│   │   ├── ProjectDetailOverlay.astro  # 作品详情弹层（CSR）
│   │   ├── RAGOverlay.astro            # AI 问答弹层（CSR）
│   │   ├── ProjectCard.astro           # 作品卡片
│   │   ├── CapabilityCards.astro       # 能力画像卡片
│   │   ├── HonorsSkills.astro          # 荣誉 + 技能
│   │   ├── HeroArt.astro               # 主页头部插画
│   │   ├── Timeline.astro              # 个人时间线
│   │   ├── Nav.astro                   # 导航栏
│   │   ├── Footer.astro                # 页脚
│   │   └── FAB.astro                   # 悬浮操作按钮
│   ├── data/
│   │   ├── projects.ts           # 作品数据（8 个项目）
│   │   ├── profile.ts            # 个人资料（能力/时间线/技能/荣誉）
│   │   └── rag-corpus.ts         # RAG 语料生成器
│   └── lib/
│       ├── types.ts              # TypeScript 类型定义
│       ├── constants.ts          # 设计令牌 + 配置常量
│       ├── i18n.ts               # 语言检测 + Cookie 操作
│       ├── session.ts            # AES-256-CBC 会话加密
│       ├── deepseek.ts           # DeepSeek API 客户端 + 系统提示词
│       ├── supabase.ts           # Supabase 客户端（服务端/浏览器）
│       ├── rateLimit.ts          # 三层频控逻辑
│       └── mailer.ts             # SMTP 邮件发送
├── tests/
│   └── unit/
│       ├── rateLimit.test.ts
│       ├── session.test.ts
│       └── rag-corpus.test.ts
└── 01_UI/                        # HTML/CSS 原型文件
    └── 02-home.html              # 主页原型（与 Astro 源码同步）
```

---

## 开发指南

### 环境要求

- **Node.js** ≥ 18
- **npm** / pnpm
- **Supabase** 项目（免费 tier 即可）
- **DeepSeek API Key**

### 环境变量

创建 `.env` 文件：

```bash
# Supabase
SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# DeepSeek
DEEPSEEK_API_KEY=sk-...

# Session（随机 32 位字符串）
SESSION_SECRET=your-random-secret

# SMTP 邮件通知
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_USER=alert@example.com
SMTP_PASS=your-password
ALERT_EMAIL=your@email.com

# Admin
ADMIN_EMAIL=admin@example.com
```

### 数据库初始化

1. 在 [Supabase](https://supabase.com) 创建项目
2. 在 SQL Editor 中运行 `supabase/migrations/001_schema.sql`
3. 在 Authentication 中启用 Email 登录
4. 创建 Admin 账号（在 Supabase Auth 中手动创建用户）

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev          # → http://localhost:4321

# 类型检查 + 构建
npm run build

# 预览构建产物
npm run preview
```

### 测试

```bash
npm test             # 单元测试（Vitest）
npm run test:watch   # Watch 模式
npm run test:e2e     # E2E 测试（Playwright）
```

### 部署

项目配置为 Vercel 自动部署。推送 `main` 分支即可触发。

```bash
git push origin main
```

---

## 数据驱动

所有页面内容从 `src/data/` 下的 TypeScript 文件驱动，无需 CMS：

| 文件 | 内容 |
|---|---|
| `projects.ts` | 8 个项目（标题/标签/角色/详情板块/视频/链接） |
| `profile.ts` | Hero 描述、能力画像、时间线、技能、荣誉、联系方式 |

修改 `projects.ts` 或 `profile.ts` → RAG 语料自动更新 → AI 数字分身即刻感知最新内容。

### 自定义作品板块

`DetailSection` 接口支持 5 种内容类型：

| 字段 | 渲染效果 |
|---|---|
| `text` | 段落 `<p>` |
| `items` | 无序列表 `<ul><li>` |
| `url` | 外链按钮（如 GitHub） |
| `video` | 视频播放按钮 → 弹出播放器 |
| `title` / `titleEn` | 板块标题 |

---

## 许可

MIT © 范诚昊 (FCH)
