import type { Lang } from "@/lib/i18n";

interface HeroContent {
  line1: string;
  line2: string;
  accent: string;
  subtitle: string;
  viewWork: string;
  askAvatar: string;
}

interface Capability {
  num: string;
  title: string;
  desc: string;
}

interface TimelineItem {
  time: string;
  title: string;
  desc: string;
}

interface Honor {
  title: string;
  description: string;
  imagePlaceholder?: string; // CSS background string for card art, replace with real image later
}

interface SkillGroup {
  category: string;
  items: string[];
}

interface Contact {
  email: string;
  phone: string;
  wechat: string;
  resumeText: string;
}

interface ProfileContent {
  hero: HeroContent;
  capabilities: Capability[];
  timeline: TimelineItem[];
  honors: Honor[];
  skills: SkillGroup[];
  contact: Contact;
  footer: {
    copyright: string;
    tagline: string;
  };
  fab: string;
}

export const profileContent: Record<Lang, ProfileContent> = {
  zh: {
    hero: {
      line1: "小范的",
      line2: "",
      accent: "赛博简历",
      subtitle: "同济大学本硕～努力学习中～",
      viewWork: "查看作品",
      askAvatar: "问问我的数字分身",
    },
    capabilities: [
      {
        num: "01",
        title: "设计类专业背景",
        desc: "城乡规划 6 年设计功底训练，从城市设计到空间营造，积累了系统的设计思维与审美判断力，曾获国际设计竞赛二等奖（详见作品页）。",
      },
      {
        num: "02",
        title: "系统化解决问题",
        desc: "从产业研究到项目谋划、可研编制（单份 10 万+字），再到 AI 硬件产品需求拆解与 PRD 输出，始终用结构化思维把复杂问题拆解为可执行的路径。同时具备数据分析能力与思维，在竞赛项目中应用 XGBoost 建模解释城市空间现象（详见作品页）。",
      },
      {
        num: "03",
        title: "将想法快速落地",
        desc: "掌握 Harness Engineering 的 Vibe Coding 方法论，独立开发 AI 热点监控推送工具、AI 闯关学习微信小程序、AI 考研辅导助手（专业领域 RAG）等项目，以及你正在看的这个网站。",
      },
      {
        num: "04",
        title: "交流沟通能力在线",
        desc: "在此芯科技跨部门推动产品方案对齐，在同济咨询对接政企需求并独立汇报，在本科项目、竞赛中时常担任组长统筹协调，在校园组足球赛场上多年团队协作并屡创佳绩。",
      },
    ],
    timeline: [
      {
        time: "2026.3 – 2026.5",
        title: "此芯科技 · AI 硬件产品经理",
        desc: "围绕 AI BOX / AI NAS，开展行业研究、竞品分析、需求规划与 PRD 输出，结合 P1 芯片能力做功能方案与价值卖点表达。",
      },
      {
        time: "2025.9 – 2026.2",
        title: "同济咨询 · 咨询师助理",
        desc: "对接政企客户需求，独立拜访沟通并汇报；独立完成产业研究报告与多份可研（单份 10万+字），搭建可研编制 Work Flow 与项目谋划 Agent。",
      },
      {
        time: "2025.9 – 至今",
        title: "同济大学 · 城乡规划硕士（在读）",
        desc: "建筑与城市规划学院。核心课程：人工智能辅助空间规划、智能城市规划前沿、城市发展和城市规划的经济学原理等。",
      },
      {
        time: "2020.9 – 2025.6",
        title: "同济大学 · 城乡规划学士",
        desc: "核心课程：城市经济学、城市社会学、城市地理学、区域规划、总体规划、详细规划、城市设计、Python等。",
      },
    ],
    honors: [
      {
        title: "多次代表同济大学参加 全国 / 上海市 足球比赛",
        description:
          "作为同济大学校园组足球队成员，多次代表学校参加全国大学生足球联赛/上海市大学生足球联盟杯赛、联赛，6次夺得上海市冠军，并在全国赛中闯入四强。",
      },
      {
        title: "积极参与社会实践活动",
        description:
          `参与"一米高度看城市"儿童友好主题活动，从儿童视角探索城市规划改进方向；投身乡村规划建设实践（同期获最佳营造奖），结合专业知识服务基层空间营造。`,
      },
    ],
    skills: [
      {
        category: "AI 应用",
        items: ["Vibe Coding", "Harness Engineering", "Loop Engineering（探索中）", "AI 精细化生图", "AI 视频创作"],
      },
      {
        category: "软件",
        items: [
          "Claude Code",
          "Cursor",
          "Figma",
          "Pixso",
          "Photoshop",
          "Illustrator",
          "InDesign",
          "CAD",
          "ArcGIS",
          "SketchUp",
          "Rhino",
          "Office",
        ],
      },
      {
        category: "语言",
        items: ["英语 CET-4 · 581", "英语 CET-6 · 549"],
      },
    ],
    contact: {
      email: "2495845133@qq.com",
      phone: "+86 155-3463-9293",
      wechat: "FchFanchenghao",
      resumeText: "下载 PDF →",
    },
    footer: {
      copyright: "© 2026 范诚昊",
      tagline: "",
    },
    fab: "问数字分身",
  },
  en: {
    hero: {
      line1: "Xiao Fan's",
      line2: "",
      accent: "Cyber CV",
      subtitle: "Tongji University B.S. & M.S. ~ always learning ~",
      viewWork: "View Projects",
      askAvatar: "Ask My Digital Twin",
    },
    capabilities: [
      {
        num: "01",
        title: "Design Background",
        desc: "6 years of design training in urban-rural planning, from urban design to spatial placemaking — building systematic design thinking and aesthetic judgment. Won 2nd prize in an international design competition (see Projects).",
      },
      {
        num: "02",
        title: "Systematic Problem Solver",
        desc: "From industry research to project planning and feasibility studies (100k+ words each), to AI hardware product requirements decomposition and PRD output — always using structured thinking to break down complex problems. Also equipped with data analysis skills; applied XGBoost modeling in competition projects to explain urban spatial phenomena (see Projects).",
      },
      {
        num: "03",
        title: "Rapid Prototyping",
        desc: "Mastering Harness Engineering's Vibe Coding methodology. Independently developed an AI news monitoring & push tool, an AI-powered quiz mini-program on WeChat, an AI tutoring assistant for grad exam prep (domain-specific RAG), and — the website you're viewing right now.",
      },
      {
        num: "04",
        title: "Communication & Collaboration",
        desc: "Cross-functional alignment on product plans at CIX Technology; independent engagement with government and enterprise clients at Tongji Consulting; frequently served as team lead coordinating across undergraduate projects and competitions; years of collaborative teamwork on the football pitch with notable achievements.",
      },
    ],
    timeline: [
      {
        time: "2026.3 – 2026.5",
        title: "CIX Technology · AI Product Manager",
        desc: "Led competitive/industry research, requirements planning & PRD, and value proposition design for AI BOX / NAS products integrated with P1 chip capabilities.",
      },
      {
        time: "2025.9 – 2026.2",
        title: "Tongji Consulting · Consultant Assistant",
        desc: "Independently completed industry research reports and multiple feasibility studies (100k+ words each). Built a Feasibility Study Work Flow and Project Planning Agent.",
      },
      {
        time: "2025.9 – Present",
        title: "Tongji University · M.S. in Urban & Rural Planning",
        desc: "College of Architecture and Urban Planning. Focus: urban economics, urban geography, regional/detailed planning, urban design.",
      },
      {
        time: "2020.9 – 2025.6",
        title: "Tongji University · B.S. in Urban & Rural Planning",
        desc: "Five-year planning program building foundational capabilities in spatial analysis and urban systems thinking.",
      },
    ],
    honors: [
      {
        title:
          "Represented Tongji University in National & Shanghai Football Competitions",
        description:
          "As a member of the Tongji University campus football team, represented the university in the National University Football League / Shanghai University Football League Cup and League, won the Shanghai championship 6 times, and reached the national semi-finals.",
      },
      {
        title: "Social Practice Activities",
        description:
          `Participated in the "City at One Meter's Height" child-friendly city initiative, exploring urban planning improvements from a child's perspective; engaged in rural planning and construction practice (won Best Construction Award the same year), applying professional knowledge to grassroots spatial development.`,
      },
    ],
    skills: [
      {
        category: "AI Applications",
        items: ["Vibe Coding", "Harness Engineering", "Loop Engineering (Exploring)", "AI Image Generation", "AI Video Creation"],
      },
      {
        category: "Software",
        items: [
          "Claude Code",
          "Cursor",
          "Figma",
          "Pixso",
          "Photoshop",
          "Illustrator",
          "InDesign",
          "CAD",
          "ArcGIS",
          "SketchUp",
          "Rhino",
          "Office",
        ],
      },
      {
        category: "Languages",
        items: ["English CET-4 · 581", "English CET-6 · 549"],
      },
    ],
    contact: {
      email: "2495845133@qq.com",
      phone: "+86 155-3463-9293",
      wechat: "FchFanchenghao",
      resumeText: "Download PDF →",
    },
    footer: {
      copyright:
        "© 2026 Fan Chenghao · Built end-to-end with AI by the author",
      tagline: "AI Product Manager Who Understands Cities",
    },
    fab: "Digital Twin",
  },
};
