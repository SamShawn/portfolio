# Portfolio

孙昕的个人作品集网站。全栈工程师，6 年经验，海洋科学转软件工程。

**线上地址**：待部署（T6.2 绑定域名后更新）

## 技术栈

- **框架**：Next.js 16（App Router）+ TypeScript
- **样式**：Tailwind CSS 4 + `@tailwindcss/typography`
- **内容**：数据驱动（`data/*.ts`）+ MDX（`content/projects/*.mdx`）
- **包管理**：pnpm Monorepo
- **CI**：GitHub Actions（lint / typecheck / build）
- **部署**：Vercel（待配置）

## 项目结构
```bash
.
├── apps/
│ └── web/ # Next.js 作品集主站
│ ├── app/ # 路由与页面
│ │ ├── projects/
│ │ │       └── [slug]/ # 项目详情页（MDX 驱动）
│ │ ├── api/contact/ # 联系表单 Route Handler（T3）
│ │ └── not-found.tsx # 自定义 404
│ ├── components/
│ │ ├── sections/ # 首页各区块
│ │ └── ui/ # 通用组件
│ ├── content/projects/ # 项目案例 MDX
│ ├── data/ # 结构化内容数据
│ └── lib/ # MDX 读取等工具
├── packages/ # 预留共享包
└── .github/workflows/ci.yml # CI 流水线
```

## 本地开发

**前置要求**：Node.js >= 22、pnpm 9。

```bash
pnpm install
pnpm --filter web dev
```

访问 `http://localhost:3000`。

**常用命令**：

```bash
pnpm --filter web lint # ESLint
pnpm --filter web typecheck # tsc --noEmit（先跑 next typegen）
pnpm --filter web build # 生产构建
```

## 架构说明

**内容与展示分离**：首页各区块从 `data/*.ts` 读取结构化数据，项目详情页从 `content/projects/*.mdx` 读取案例正文。新增项目只需改数据文件和加一个 MDX，组件层无需改动。

**静态预渲染**：三个项目详情页通过 `generateStaticParams` 在构建时预渲染，配合 `cacheComponents` 下的 `"use cache"` 处理文件读取，未知 slug 返回 404。

**质量门禁**：本地 Husky 钩子（lint-staged + commitlint）拦截格式和提交信息问题；CI 跑 lint / typecheck / build，PR 必须通过才能合并。

## Roadmap

- [x] T0: 仓库初始化与 CI
- [x] T1: 首页五个 section
- [x] T2: 项目详情页、MDX 内容与 SEO
- [ ] T3: 联系表单与后端闭环
- [ ] T4: 测试（Vitest + Playwright）
- [ ] T5: 性能与可访问性优化
- [ ] T6: 部署、域名与最终文档

## License

个人作品集，内容版权归作者所有。
