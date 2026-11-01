export interface Experience {
  company: string
  role: string
  period: string
  product: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    company: '威廉欧奈尔信息科技(上海)有限公司',
    role: '全栈程序员',
    period: '2022.10-2025.7',
    product:
      'PANARAY® 量化分析终端（面向机构投资者，覆盖 82,000+ 证券、70+ 国家市场）',
    bullets: [
      '负责数据可视化模块的前后端开发与维护，支撑机构用户全球股票研究流程，技术栈 React + Python + PostgreSQL。',
      '独立完成可视化功能从交互稿到接口的交付，参与需求评审与技术方案设计。',
      '承担大数据量图表渲染与多市场数据适配，支撑 5,000+ 量化因子与 Datagraph 可视化场景。',
      '参与 Git 协作与线上问题排查。',
    ],
  },
  {
    company: '行成佳(杭州)网络科技有限公司',
    role: '前端程序员',
    period: '2019.11-2022.9',
    product: 'PlanHouse 微信小程序（累计 20 万+ 用户、8,000+ 场线下活动）',
    bullets: [
      '负责小程序前端 UI 界面的开发与迭代维护，技术栈 React + Taro。',
      '与产品、后端协作完成活动发布、报名、社群展示等功能从需求到上线。',
      '参与组件复用与多端适配等工程实践。',
    ],
  },
]
