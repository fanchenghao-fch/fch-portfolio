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
  year: string;
  title: string;
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
        title: "把 AI 做成产品",
        desc: "在此芯科技做 AI BOX / NAS 的市场研究、需求拆解到方案表达，跑通过完整的产品流程。",
      },
      {
        num: "02",
        title: "读得懂城市",
        desc: `用 POI、街景与机器学习，把"生活圈幸福度"这类城市问题，变成可量化、可推演的模型。`,
      },
      {
        num: "03",
        title: "想法当天能跑",
        desc: "Vibe Coding、Work Flow、Agent 搭建——从一个念头到一个能用的工具，常常就在同一天。",
      },
    ],
    timeline: [
      {
        time: "2026.3 – 2026.5",
        title: "此芯科技 · AI 产品经理",
        desc: "围绕 AI BOX / AI NAS，做竞品与行业研究、需求规划与 PRD、结合 P1 芯片能力做功能方案与价值卖点表达。",
      },
      {
        time: "2025.9 – 2026.2",
        title: "同济咨询 · 咨询师助理",
        desc: "独立完成产业研究报告与多份可研（单份 10万+字），搭建可研编制 Work Flow 与项目谋划 Agent。",
      },
      {
        time: "2025.9 – 至今",
        title: "同济大学 · 城乡规划硕士（在读）",
        desc: "建筑与城市规划学院。核心方向：城市经济、城市地理、区域与详细规划、城市设计。",
      },
      {
        time: "2020.9 – 2025.6",
        title: "同济大学 · 城乡规划学士",
        desc: "五年制规划训练，奠定空间分析与城市系统思维的底层能力。",
      },
    ],
    honors: [
      {
        year: "2024",
        title: "WUPENiCity 城市设计国际竞赛 · 二等奖（一作）",
      },
      {
        year: "2024",
        title: "WUPENiCity 城市可持续调研报告国际竞赛 · 三等奖",
      },
      {
        year: "2022–2026",
        title: "上海市大学生足球联盟杯赛 / 联赛冠军等",
      },
      {
        year: "2025.8",
        title: "乡村规划建设实践 · 同期最佳营造奖",
      },
    ],
    skills: [
      {
        category: "AI 应用",
        items: ["Vibe Coding", "Work Flow 搭建", "Agent 搭建"],
      },
      {
        category: "软件",
        items: [
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
      copyright: "© 2026 范诚昊 · 本站由本人用 AI 全流程搭建",
      tagline: "懂城市的 AI 产品经理",
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
        title: "Ship AI Products",
        desc: "At CIX Technology, led market research, requirements planning, and solution design for AI BOX / NAS — through the full product lifecycle.",
      },
      {
        num: "02",
        title: "Read the City",
        desc: "Using POI, street view, and machine learning to turn urban challenges like 'living circle happiness' into quantifiable, inferable models.",
      },
      {
        num: "03",
        title: "Ideas to Tools, Same Day",
        desc: "Vibe Coding, Work Flows, Agent building — from a spark of an idea to a working tool, often within the same day.",
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
        year: "2024",
        title:
          "WUPENiCity Urban Design Intl. Competition · 2nd Prize (1st Author)",
      },
      {
        year: "2024",
        title:
          "WUPENiCity Urban Sustainable Survey Intl. Competition · 3rd Prize",
      },
      {
        year: "2022–2026",
        title:
          "Shanghai University Football League Cup / League Champion & more",
      },
      {
        year: "2025.8",
        title: "Rural Planning Practice · Best Construction Award",
      },
    ],
    skills: [
      {
        category: "AI Applications",
        items: ["Vibe Coding", "Work Flow Building", "Agent Building"],
      },
      {
        category: "Software",
        items: [
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
