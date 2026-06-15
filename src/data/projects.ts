import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "happiness-model",
    title: "城市居民生活圈幸福度智能监测与推演模型",
    titleEn: "Urban Living Circle Happiness Monitoring & Inference Model",
    role: "数据 + 建模",
    roleEn: "Data + Modeling",
    period: "2026.3 – 2026.5",
    tags: ["AI", "城市", "机器学习"],
    summary:
      "融合 POI、街景影像与居民文本，用 XGBoost 等模型识别影响因子并推演优化策略。",
    summaryEn:
      "Integrates POI, street view imagery, and resident text data with XGBoost to identify impact factors and infer optimization strategies.",
    detailOverview:
      "融合 POI、街景影像与居民文本数据，构建生活圈幸福度评价体系；运用空间分析、机器学习与大语言模型，识别影响因子并推演优化策略，支持城市精细化治理。",
    detailOverviewEn:
      "Built a living circle happiness evaluation system integrating POI, street view imagery, and resident text data. Applied spatial analysis, machine learning, and LLMs to identify impact factors and infer optimization strategies for urban governance.",
    detailWork: [
      "机器学习变量的数据清洗与特征处理",
      "完成 XGBoost 等模型的训练、调参与结果解释",
      "结合大语言模型对居民文本做语义层面的影响因子识别",
    ],
    detailWorkEn: [
      "Data cleaning and feature engineering for ML variables",
      "Trained, tuned, and interpreted XGBoost and other models",
      "Used LLMs for semantic-level impact factor identification from resident texts",
    ],
    detailOutcome:
      "一套可解释的幸福度评价与推演模型，可定位影响生活圈幸福度的关键因子，并给出可落地的空间优化方向。",
    detailOutcomeEn:
      "An interpretable happiness evaluation and inference model that identifies key factors affecting living circle happiness and provides actionable spatial optimization directions.",
    images: [],
    links: [{ label: "查看 Demo", url: "#", labelEn: "View Demo" }],
    sortWeight: 1,
  },
  {
    slug: "ai-hot-monitor",
    title: "AI 热点监控 & 定时推送工具",
    titleEn: "AI Trend Monitor & Scheduled Push Tool",
    role: "全栈开发",
    roleEn: "Full-stack Developer",
    period: "2026.1 – 2026.3",
    tags: ["AI 产品", "工具"],
    summary:
      "第一时间抓取全球 AI 动态（如大模型更新），定时向用户推送，响应式 Web + Agent Skills。",
    summaryEn:
      "Real-time global AI news monitoring (e.g., LLM updates) with scheduled push notifications. Responsive web app with Agent Skills.",
    detailOverview:
      "构建了一套自动化 AI 热点监控系统：定时抓取全球 AI 动态（大模型发布、技术突破、产品更新等），整理关键变化点，通过多种渠道推送给用户。响应式 Web 界面 + Agent Skills 驱动。",
    detailOverviewEn:
      "An automated AI trend monitoring system: periodically fetches global AI news (model releases, breakthroughs, product updates), distills key changes, and pushes to users via multiple channels. Driven by responsive web UI + Agent Skills.",
    detailWork: [
      "设计并实现多源爬取架构（公众号、Twitter、GitHub、官网）",
      "搭建 Agent Skills 驱动的智能摘要与分级推送逻辑",
      "响应式 Web 前端 + 定时任务调度",
    ],
    detailWorkEn: [
      "Designed multi-source crawling architecture (WeChat, Twitter, GitHub, official sites)",
      "Built Agent Skills-driven intelligent summarization and tiered push logic",
      "Responsive web frontend + scheduled task orchestration",
    ],
    detailOutcome:
      "已稳定运行，日均抓取 50+ 条 AI 动态，智能筛选后推送 5-8 条高质量摘要。",
    detailOutcomeEn:
      "Running stably, capturing 50+ AI news items daily, pushing 5-8 high-quality summaries after intelligent filtering.",
    images: [],
    links: [{ label: "查看 Demo", url: "#", labelEn: "View Demo" }],
    sortWeight: 2,
  },
  {
    slug: "workflow-agent",
    title: "可研 Work Flow & 项目谋划 Agent",
    titleEn: "Feasibility Study Work Flow & Project Planning Agent",
    role: "AI 工作流搭建",
    roleEn: "AI Workflow Builder",
    period: "2025.9 – 2026.2",
    tags: ["AI 工作流", "Agent"],
    summary:
      "把可研编制与项目谋划流程沉淀成可复用的工作流与 Agent，并编写策划生图指南。",
    summaryEn:
      "Codified feasibility study and project planning workflows into reusable agents, with illustrated planning guides.",
    detailOverview:
      "在同济咨询实习期间，将可研编制（10万+字/份）和项目谋划的复杂流程，沉淀为可复用的 Work Flow 与 Agent。同时编写策划生图指南，帮助团队用 AI 提升产出质量与效率。",
    detailOverviewEn:
      "During internship at Tongji Consulting, codified complex feasibility study processes (100k+ words each) and project planning into reusable Work Flows and Agents. Authored illustrated planning guides to help teams leverage AI for quality and efficiency.",
    detailWork: [
      "拆解可研编制流程，抽象为模块化 Work Flow",
      "搭建项目谋划 Agent，自动化生成谋划框架与要点",
      "编写策划生图指南，培训团队用 AI 辅助策划",
    ],
    detailWorkEn: [
      "Deconstructed feasibility study processes into modular Work Flows",
      "Built a Project Planning Agent that auto-generates planning frameworks",
      "Authored illustrated planning guides, trained team on AI-assisted planning",
    ],
    detailOutcome:
      "将单份可研编制时间缩短约 40%，项目谋划前期框架可自动生成，团队 AI 工具使用率大幅提升。",
    detailOutcomeEn:
      "Reduced per-report feasibility study time by ~40%, auto-generated planning frameworks, significantly improved team AI tool adoption.",
    images: [],
    links: [],
    sortWeight: 3,
  },
  {
    slug: "wuwei-commercial",
    title: "无为市商业街区业态策划",
    titleEn: "Wuwei City Commercial District Format Planning",
    role: "策划 + 数据分析",
    roleEn: "Planning + Data Analysis",
    period: "2025.6 – 2025.10",
    tags: ["产业", "策划"],
    summary:
      "结合政策导向、资源禀赋与市场动向，独立完成 5 万+字业态策划报告及汇报 PPT。",
    summaryEn:
      "Independently completed a 50k+ word commercial format planning report and presentation, integrating policy, resources, and market trends.",
    detailOverview:
      "结合国家政策导向、无为市资源禀赋与长三角市场动向，独立完成了 5 万+字的商业街区业态策划报告及汇报 PPT。涵盖业态定位、空间布局、招商策略与运营建议。",
    detailOverviewEn:
      "Integrated national policy direction, Wuwei's resource endowments, and Yangtze River Delta market trends to independently complete a 50k+ word commercial district format planning report and presentation. Covered format positioning, spatial layout, investment strategy, and operations.",
    detailWork: [
      "多源数据收集与分析（政策、市场、竞品）",
      "业态定位与空间布局方案设计",
      "独立撰写 5 万+字策划报告及汇报 PPT",
    ],
    detailWorkEn: [
      "Multi-source data collection and analysis (policy, market, competitors)",
      "Format positioning and spatial layout design",
      "Independently authored 50k+ word planning report and presentation",
    ],
    detailOutcome: "报告已交付甲方，业态方案被部分采纳进入后续深化阶段。",
    detailOutcomeEn:
      "Report delivered to client; format proposals partially adopted for further development.",
    images: [],
    links: [],
    sortWeight: 4,
  },
  {
    slug: "shanghai-rural-industry",
    title: "大都市乡村新产业新业态研究（上海）",
    titleEn:
      "New Rural Industries and Formats in Metropolitan Areas (Shanghai)",
    role: "数据 + 制图",
    roleEn: "Data + Mapping",
    period: "2024.9 – 2025.6",
    tags: ["城市", "数据"],
    summary: "负责数据清洗、空间落位与分析制图，产出项目类型图谱研究报告。",
    summaryEn:
      "Responsible for data cleaning, spatial mapping, and analysis visualization, producing a project typology atlas research report.",
    detailOverview:
      "参与上海市大都市乡村新产业新业态研究课题，负责多源数据的清洗与标准化、空间落位与分析制图，最终产出项目类型图谱研究报告，为上海乡村产业政策提供数据支撑。",
    detailOverviewEn:
      "Participated in Shanghai metropolitan rural new industries research, responsible for multi-source data cleaning/standardization, spatial mapping, and analysis visualization. Produced a project typology atlas report supporting Shanghai rural industry policy.",
    detailWork: [
      "多源数据清洗与标准化处理",
      "ArcGIS 空间分析与专题制图",
      "项目类型图谱设计与研究报告撰写",
    ],
    detailWorkEn: [
      "Multi-source data cleaning and standardization",
      "ArcGIS spatial analysis and thematic mapping",
      "Project typology atlas design and research report writing",
    ],
    detailOutcome: "研究成果被纳入上海市相关乡村产业规划参考材料。",
    detailOutcomeEn:
      "Research findings incorporated into Shanghai rural industry planning reference materials.",
    images: [],
    links: [],
    sortWeight: 5,
  },
  {
    slug: "chuansha-rural",
    title: "川沙 1+1+5 乡村振兴连片研究",
    titleEn: "Chuansha 1+1+5 Rural Revitalization Cluster Study",
    role: "实地调研 + 分析",
    roleEn: "Field Research + Analysis",
    period: "2024.6 – 2024.10",
    tags: ["城市", "规划"],
    summary:
      "实地走访 + 数据分析，梳理新浜村资源底板，评估连片发展潜力并提出策略。",
    summaryEn:
      "Field visits + data analysis to map Xinbang Village resources, assess cluster development potential, and propose strategies.",
    detailOverview:
      "参与川沙 1+1+5 乡村振兴连片研究，实地走访新浜村及周边区域，梳理资源底板（产业、空间、人文），评估连片发展潜力，提出乡村振兴策略与空间优化建议。",
    detailOverviewEn:
      "Participated in Chuansha rural revitalization cluster study. Conducted field visits to Xinbang Village and surrounding areas, mapped resource foundations (industry, space, culture), assessed cluster development potential, and proposed strategies.",
    detailWork: [
      "实地走访调研，收集一手数据",
      "梳理新浜村资源底板（产业/空间/人文）",
      "评估连片发展潜力并提出策略建议",
    ],
    detailWorkEn: [
      "Field visits and primary data collection",
      "Mapped Xinbang Village resource foundations (industry/space/culture)",
      "Assessed cluster development potential and proposed strategies",
    ],
    detailOutcome: "研究成果为川沙乡村振兴连片规划和实施提供决策参考。",
    detailOutcomeEn:
      "Research provided decision-making reference for Chuansha rural revitalization cluster planning and implementation.",
    images: [],
    links: [],
    sortWeight: 6,
  },
  {
    slug: "wupen-design",
    title: "WUPENiCity 城市设计国际竞赛 · 二等奖（一作）",
    titleEn: "WUPENiCity Urban Design International Competition · 2nd Prize",
    role: "第一作者 · 主创设计",
    roleEn: "First Author · Lead Designer",
    period: "2024",
    tags: ["竞赛", "城市设计"],
    summary:
      '以"缘"为题眼，从宏观到微观链接川沙的空间肌理、产业与社会，描绘未来创新家园。',
    summaryEn:
      'Centered on "Yuan" (connections), linked Chuansha\'s spatial fabric, industry, and society from macro to micro scale, envisioning a future innovation homeland.',
    detailOverview:
      '在 WUPENiCity 2024 城市设计国际竞赛中，以"缘"为核心概念，从宏观城市肌理到微观社区空间，链接川沙的空间、产业与社会，描绘未来创新家园蓝图。从 1000+ 队伍中脱颖而出，获二等奖。',
    detailOverviewEn:
      'In WUPENiCity 2024 Urban Design International Competition, centered on "Yuan" (connections) as core concept, linked Chuansha\'s spatial, industrial, and social dimensions from macro to micro scale. Won 2nd prize among 1000+ teams.',
    detailWork: [
      "核心概念提出与方案整体把控",
      "空间分析与城市设计方案",
      "图纸表达与方案汇报",
    ],
    detailWorkEn: [
      "Core concept development and overall scheme direction",
      "Spatial analysis and urban design",
      "Drawing production and presentation",
    ],
    detailOutcome: "国际竞赛二等奖（一作），从 1000+ 队伍中脱颖而出。",
    detailOutcomeEn:
      "2nd prize among 1000+ teams in international competition.",
    images: [],
    links: [],
    sortWeight: 7,
  },
  {
    slug: "wupen-research",
    title: "WUPENiCity 调研报告国际竞赛 · 三等奖",
    titleEn:
      "WUPENiCity Urban Sustainable Survey Report International Competition · 3rd Prize",
    role: "调研 + 分析",
    roleEn: "Research + Analysis",
    period: "2024",
    tags: ["竞赛", "调研"],
    summary:
      '聚焦"就业难"背景下青年住房困境，分析其形成机制并提出优化策略。',
    summaryEn:
      "Investigated youth housing challenges amid employment difficulties, analyzed formation mechanisms and proposed optimization strategies.",
    detailOverview:
      '在 WUPENiCity 2024 城市可持续调研报告国际竞赛中，聚焦"就业难"背景下的青年住房困境问题，通过多维度调研与数据分析，揭示困境形成机制并提出针对性优化策略。获三等奖。',
    detailOverviewEn:
      "In WUPENiCity 2024 Urban Sustainable Survey Report International Competition, focused on youth housing challenges amid employment difficulties. Through multi-dimensional research and data analysis, revealed formation mechanisms and proposed targeted strategies. Won 3rd prize.",
    detailWork: [
      "调研方案设计与问卷发放",
      "数据分析与困境形成机制梳理",
      "优化策略提出与报告撰写",
    ],
    detailWorkEn: [
      "Survey design and questionnaire distribution",
      "Data analysis and mechanism mapping",
      "Strategy proposals and report writing",
    ],
    detailOutcome: "国际竞赛三等奖，调研成果被竞赛组委会收录展示。",
    detailOutcomeEn:
      "3rd prize; research findings archived and showcased by competition committee.",
    images: [],
    links: [],
    sortWeight: 8,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCompany(company: string): Project[] {
  const lower = company.toLowerCase();
  const aiKeywords = ["ai", "科技", "智能", "产品", "tech", "intelligence"];
  const urbanKeywords = [
    "规划",
    "设计",
    "建筑",
    "城市",
    "design",
    "urban",
    "planning",
  ];

  const isAi = aiKeywords.some((k) => lower.includes(k));
  const isUrban = urbanKeywords.some((k) => lower.includes(k));

  const sorted = [...projects].sort((a, b) => a.sortWeight - b.sortWeight);

  if (isAi && !isUrban) {
    return sorted.sort((a) => (a.tags.includes("AI") ? -1 : 1));
  }
  if (isUrban && !isAi) {
    return sorted.sort((a) =>
      a.tags.includes("城市") || a.tags.includes("规划") ? -1 : 1,
    );
  }
  return sorted;
}
