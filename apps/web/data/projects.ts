export interface Project {
  slug: string
  title: string
  period: string
  role: string
  summary: string
  techStack: string[]
  highlights: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'outdoor-platform',
    title: '同城户外运动组局与交易平台',
    period: '2026.09-2026.10',
    role: '独立全栈开发',
    summary:
      '面向户外及运动爱好者的同城活动组局与交易平台，解决“想运动找不到搭子”的痛点，独立完成从架构到 CI 的全栈闭环。',
    techStack: [
      'Taro',
      'React',
      'Zustand',
      'NestJS',
      'Prisma',
      'MySQL',
      'pnpm Monorepo',
      'GitHub Actions',
    ],
    highlights: [
      '数据库交互式事务 + 行锁 (SELECT ... FOR UPDATE) 防超卖，唯一索引兜底',
      '改造 Taro.eventCenter 事件总线广播，解决 Custom TabBar 多实例状态同步',
    ],
    featured: true,
  },
  {
    slug: 'oneil-panaray',
    title: 'PANARAY 量化分析终端',
    period: '2022.10-2025.7',
    role: '全栈程序员 · 威廉欧奈尔信息科技（上海）',
    summary:
      '面向机构投资者的全球股票研究平台，覆盖 82,000+ 证券、70+ 国家市场。负责数据可视化模块的前后端开发与维护。',
    techStack: ['React', 'Python', 'PostgreSQL'],
    highlights: [
      '独立完成可视化功能从交互稿到接口的交付',
      '承担大数据量图表渲染与多市场数据适配，支撑 5,000+ 量化因子与 Datagraph 可视化',
    ],
    featured: true,
  },
  {
    slug: 'planhouse',
    title: 'PlanHouse 微信小程序活动平台',
    period: '2019.11-2022.9',
    role: '前端程序员 · 行成佳（杭州）网络科技',
    summary:
      '累计 20 万+ 用户、8,000+ 场线下活动的微信小程序活动平台。负责小程序全部前端 UI 界面的开发与迭代维护。',
    techStack: ['React', 'Taro', '微信小程序'],
    highlights: [
      '与产品、后端协作完成活动发布、报名、社群展示等功能从需求到上线',
      '参与组件复用与多端适配等工程实践',
    ],
    featured: true,
  },
]
