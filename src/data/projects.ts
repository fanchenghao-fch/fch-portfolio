import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "ai-learn-miniapp",
    title: "AI 闯关学习微信小程序-阿拉灯神丁",
    titleEn: "TODO",
    role: "独立开发",
    roleEn: "TODO",
    period: "30 h",
    periodLabel: "耗时",
    periodLabelEn: "TODO",
    tags: ["AI 产品", "微信小程序"],
    summary:
      "面向全龄学习人群的 AI 驱动闯关学习小程序，利用大语言模型+联网搜索实现“输入即学”，配合游戏化激励系统提升学习动力。",
    summaryEn: "TODO",
    detailOverview: "TODO",
    detailOverviewEn: "TODO",
    detailWork: ["TODO"],
    detailWorkEn: ["TODO"],
    detailOutcome: "TODO",
    detailOutcomeEn: "TODO",
    detailSections: [
      {
        title: "项目背景",
        titleEn: "TODO",
        text: "一款面向全龄学习人群的 AI 驱动闯关学习小程序。传统刷题 App 依赖预制题库，内容覆盖有限且更新滞后。本项目利用大语言模型 + 联网搜索实现“输入即学”——用户输入任意知识点，AI 实时生成个性化题目并给出学习诊断报告，配合游戏化激励系统提升学习动力。",
        textEn: "TODO",
      },
      {
        title: "功能介绍",
        titleEn: "TODO",
        items: [
          "AI 智能出题：用户输入任意知识点（如“量子计算”），AI 自动生成选择题/判断题，支持难度选择和题量配置",
          "联网知识增强：三段式出题流水线（联网搜索 → AI 生成 → 领域校验），弥补大模型训练数据时效缺口，搜索失败静默降级不影响核心流程",
          "游戏化答题闯关：生命值机制 + 连击系统 + 单题计时，答题后即时反馈 AI 知识点讲解",
          "AI 学习诊断报告：掌握度雷达图 + 知识要点总结 + 个性化学习建议 + 错题回顾",
          "用户成长体系：金币/经验/5 级等级 + 每日打卡 + 连续签到天数统计",
          "错题管理系统：自动收录错题、按领域分组、支持重新作答和标记已掌握",
        ],
        itemsEn: ["TODO"],
      },
      {
        title: "技术选型",
        titleEn: "TODO",
        items: [
          "前端：Taro 4.2 + React 18 + TypeScript + Zustand，适配微信小程序原生能力",
          "后端：FastAPI (Python) + LangChain + SQLAlchemy 2.0 异步 ORM + MySQL 8.0",
          "AI：DeepSeek V4 Pro（出题与分析）+ DeepSeek V4 Flash（领域校验）+ Tavily Search API（联网知识搜索）",
          "认证：微信小程序 code2session + JWT 双鉴权模式（强制/可选认证）",
          "部署：Docker Compose 容器化编排，后端 TDD 测试覆盖 91+ 用例",
        ],
        itemsEn: ["TODO"],
      },
      {
        title: "GitHub 链接",
        titleEn: "TODO",
        url: "https://github.com/fanchenghao-fch/FAN_AI_LEARN",
      },
      {
        title: "视频演示",
        titleEn: "TODO",
        video: "/videos/01_微信小程序功能演示.mp4",
        videoWidth: 780,
        videoHeight: 1634,
      },
    ],
    images: [],
    links: [],
    sortWeight: 1,
  },
  {
    slug: "ai-hot-monitor",
    title: "AI 热点监控工具",
    titleEn: "TODO",
    role: "独立开发",
    roleEn: "TODO",
    period: "5h",
    periodLabel: "耗时",
    periodLabelEn: "TODO",
    tags: ["AI 工具", "响应式 Web", "Skill"],
    summary:
      "AI 驱动热点监控系统：多源采集 + 智能鉴伪分类 + 实时推送，已封装为 Claude Code Skill 实现零依赖运行。",
    summaryEn: "TODO",
    detailOverview: "TODO",
    detailOverviewEn: "TODO",
    detailWork: ["TODO"],
    detailWorkEn: ["TODO"],
    detailOutcome: "TODO",
    detailOutcomeEn: "TODO",
    detailSections: [
      {
        title: "项目背景",
        titleEn: "TODO",
        text: "旨在第一时间获取 AI 领域最新热点（如 GPT-5、Claude、DeepSeek 等大模型更新），利用 AI 自动发现、鉴伪、分类并即时通知用户。解决信息过载与标题党泛滥的痛点，确保用户只看到真正相关的内容。",
        textEn: "TODO",
      },
      {
        title: "功能介绍",
        titleEn: "TODO",
        items: [
          "关键词智能监控：用户自定义关键词，系统自动从 RSS（8 源）、Reddit（4 子版）、Hacker News、网页搜索等多数据源持续采集最新内容",
          "AI 三级分类与鉴伪：基于 DeepSeek 大模型实现 S/A/B 三级相关度分类与假消息识别，配合三层代码硬过滤兜底，将误判率从 86% 降至 0%",
          "实时通知推送：发现真正相关热点后，通过 WebSocket 即时推送至前端，支持 Toast 弹窗与未读红点提醒",
          "采集日志 AI 自动总结：每次采集完成后由 AI 自动生成趋势总结与逐篇文章摘要，以卡片形式弹出展示",
          "信息库与日志库：全量话题检索与可视化浏览，支持分页、逐条/批量删除、展开详情等数据管理操作",
          "Agent Skill 封装：封装为 Claude Code 原生 Skill（v2.0），零外部依赖，Agent 自主完成搜索→分类→分析全流程",
          "可配置调度：支持 15 分钟至 24 小时共 6 档检查频率，自动采集开关一键切换",
        ],
        itemsEn: ["TODO"],
      },
      {
        title: "技术选型",
        titleEn: "TODO",
        items: [
          "后端：Node.js + Express v5 + Socket.IO（WebSocket 实时推送）",
          "数据库：SQLite（better-sqlite3，WAL 模式，同步 API）",
          "AI 服务：DeepSeek API（OpenAI SDK 兼容调用，deepseek-chat 模型）",
          "任务调度：node-cron（每分钟轮询，按关键词频率触发）",
          "数据采集：rss-parser（RSS/Atom）、axios（Reddit/HN API）、cheerio（网页解析）",
          "前端：原生 HTML/CSS/JS，零框架，极简设计系统 + 响应式布局",
          "Agent Skill：Claude Code Skill v2.0，Agent 原生执行搜索·分类·存储，零外部依赖",
        ],
        itemsEn: ["TODO"],
      },
      {
        title: "GitHub 链接",
        titleEn: "TODO",
        url: "https://github.com/fanchenghao-fch/FAN_AI_MONITOR",
      },
      {
        title: "视频演示",
        titleEn: "TODO",
        video: "/videos/AI 热点监测工具演示1080.mp4",
        videoWidth: 1128,
        videoHeight: 1080,
      },
    ],
    images: [],
    links: [],
    sortWeight: 2,
  },
  {
    slug: "rural-industry-atlas",
    title: "大都市乡村新产业新业态项目类型图谱构建",
    titleEn: "TODO",
    role: "独立完成",
    roleEn: "TODO",
    period: "2025.8 – 2025.12",
    tags: ["地理空间信息数据分析", "类型学研究"],
    summary:
      `对上海 149 个乡村振兴示范村内 470 个新产业新业态项目进行全量统计与深度追踪，构建 7 大类 22 小类分类体系与三维适配模型，形成可复制的超大城市乡村产业振兴"上海方案"。`,
    summaryEn: "TODO",
    detailOverview: "TODO",
    detailOverviewEn: "TODO",
    detailWork: ["TODO"],
    detailWorkEn: ["TODO"],
    detailOutcome: "TODO",
    detailOutcomeEn: "TODO",
    detailSections: [
      {
        title: "项目背景",
        titleEn: "TODO",
        text: `本项目为导师工作室承担的上海市课题研究子课题，于 2025 年 8 月至 12 月间完成。研究立足上海建设国际大都市乡村振兴先行示范区的战略高度，对全市 1-6 批共 149 个乡村振兴示范村内的 470 个典型新产业新业态项目进行了全量统计与深度追踪。研究聚焦于"新产业"（商务办公、文化展览、商业贸易等城市核心功能向乡村流动的项目）与"新业态"（传统农业基础上融合体验、教育、展销等服务业）两类对象，综合产业经济活动特点与行业管理要求，构建了涵盖 7 大类 22 小类的项目分类体系：乡居办公、文化创意、民宿酒店、餐饮服务、购物商贸、体育休闲、现代农业。核心成果为"大都市乡村新产业新业态项目类型图谱"——一套基于"资源禀赋—空间区位—市场需求"三维适配模型的适宜性评价与空间引导工具。图谱通过对各类业态核心特征的精准识别与空间选址画像的系统梳理，为政府部门制定差异化土地与产业政策提供科学底座，为市场主体规避选址风险提供决策依据，最终形成可复制、可推广的超大城市乡村产业振兴"上海方案"。`,
        textEn: "TODO",
      },
      {
        title: "研究方法体系",
        titleEn: "TODO",
        text: `采用"文献分析 + 案例借鉴 + 政策梳理 + 调查访谈"四位一体方法。调研以"面上普查 + 典型研究"两个层次展开，覆盖 59 个乡镇（工业区）、149 个示范村、122 个社会主体，兼顾 9 个涉农区共 4 类区位类型，选取 35 个重点调研村进行深度解析。`,
        textEn: "TODO",
      },
      {
        title: "空间数据库构建",
        titleEn: "TODO",
        text: "全面采集上海乡村地区新产业新业态项目的精确空间点位、规模体量、行业类型、投资运营、增收带动等核心数据，同步整合交通可达性等关键区位要素，通过统一的空间数据标准和属性关联结构，形成可动态反映项目空间分布特征与演变规律的数据库系统。",
        textEn: "TODO",
      },
      {
        title: "GIS 空间分析",
        titleEn: "TODO",
        items: [
          "核密度分析与缓冲区分析：从宏观（三大圈层分异）、中观（城镇开发边界依附、交通可达性）、微观（镇域统筹集群化）三个尺度解析项目空间分布规律",
          "关键发现一：约 70% 项目集聚于距城镇开发边界 1.5 公里圈层内，表明新产业新业态项目具有显著的城镇依附特征",
          "关键发现二：约 80% 项目通过存量用地盘活实现落地，闲置农房、旧厂房、废弃校舍等存量资产是项目空间载体的主要来源",
        ],
        itemsEn: ["TODO"],
      },
      {
        title: "三维适配模型",
        titleEn: "TODO",
        text: `构建"资源适配性（生态资源丰度 + 存量资产特征）× 区位适配性（核心辐射圈 R<15min / 城镇依附圈 D<1.5km / 远郊生态圈 >1hr）× 市场与政策适配性（用地政策约束 + 投资运营门槛）"的适宜性评价体系，将上海乡村划分为城镇紧密型、生态资源型、农业生产型三种空间基底，匹配差异化的主导业态指引。`,
        textEn: "TODO",
      },
      {
        title: "七类业态全谱系图谱",
        titleEn: "TODO",
        text: `针对乡居办公、文化创意、民宿酒店、餐饮服务、购物商贸、体育休闲、现代农业七大类业态，逐一完成特征识别（业态属性 + 用地特征）、空间选址画像（适宜基底 + 区位偏好）、准入与管控指引（正面引导 + 负面管控 + 核心指标），形成"负面清单底线管控 + 正面清单分类引导"的动态指引体系。`,
        textEn: "TODO",
      },
      {
        title: "项目图集",
        titleEn: "TODO",
        gallery: [
          { src: "/images/rural-industry-atlas/00_乡村新产业新业态的项目类型与点位分布概况.png", caption: "乡村新产业新业态的项目类型与点位分布概况" },
          { src: "/images/rural-industry-atlas/01_乡居办公类项目核密度分析.png", caption: "乡居办公类项目核密度分析" },
          { src: "/images/rural-industry-atlas/02_文化创意类项目核密度分析.png", caption: "文化创意类项目核密度分析" },
          { src: "/images/rural-industry-atlas/03_民宿酒店类项目核密度分析.png", caption: "民宿酒店类项目核密度分析" },
          { src: "/images/rural-industry-atlas/04_餐饮服务类项目核密度分析.png", caption: "餐饮服务类项目核密度分析" },
          { src: "/images/rural-industry-atlas/05_购物商贸类项目核密度分析.png", caption: "购物商贸类项目核密度分析" },
          { src: "/images/rural-industry-atlas/06_体育休闲类项目核密度分析.png", caption: "体育休闲类项目核密度分析" },
          { src: "/images/rural-industry-atlas/07_现代农业类项目核密度分析.png", caption: "现代农业类项目核密度分析" },
        ],
      },
    ],
    images: [
      "/images/rural-industry-atlas/00_乡村新产业新业态的项目类型与点位分布概况.png",
      "/images/rural-industry-atlas/01_乡居办公类项目核密度分析.png",
      "/images/rural-industry-atlas/02_文化创意类项目核密度分析.png",
      "/images/rural-industry-atlas/03_民宿酒店类项目核密度分析.png",
      "/images/rural-industry-atlas/04_餐饮服务类项目核密度分析.png",
      "/images/rural-industry-atlas/05_购物商贸类项目核密度分析.png",
      "/images/rural-industry-atlas/06_体育休闲类项目核密度分析.png",
      "/images/rural-industry-atlas/07_现代农业类项目核密度分析.png",
    ],
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
