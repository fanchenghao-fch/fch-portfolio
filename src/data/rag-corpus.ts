import { projects } from "./projects";
import { profileContent } from "./profile";

/**
 * Build the full RAG corpus by concatenating all structured data.
 * This is injected as context into the DeepSeek system prompt.
 */
export function buildRagCorpus(lang: "zh" | "en" = "zh"): string {
  const profile = profileContent[lang];
  const parts: string[] = [];

  // ── Hero / About ──
  parts.push(`## 关于范诚昊
${profile.hero.subtitle}

### 能力画像
${profile.capabilities.map((c) => `- ${c.title}：${c.desc}`).join("\n")}

### 教育经历
${profile.timeline
  .filter((t) => t.title.includes("同济大学"))
  .map((t) => `- ${t.time} ${t.title}：${t.desc}`)
  .join("\n")}

### 实习经历
${profile.timeline
  .filter((t) => !t.title.includes("同济大学"))
  .map((t) => `- ${t.time} ${t.title}：${t.desc}`)
  .join("\n")}

### 技能
${profile.skills.map((s) => `- ${s.category}：${s.items.join("、")}`).join("\n")}
`);

  // ── Honors ──
  parts.push(`### 竞赛与荣誉
${profile.honors.map((h) => `- ${h.year}：${h.title}`).join("\n")}
`);

  // ── Projects (full detail) ──
  const projHeader =
    lang === "zh" ? "## 项目作品（完整语料）" : "## Projects (Full Corpus)";
  const projParts = projects.map((p) => {
    const title = lang === "zh" ? p.title : p.titleEn;
    const role = lang === "zh" ? p.role : p.roleEn;
    const summary = lang === "zh" ? p.summary : p.summaryEn;
    const overview = lang === "zh" ? p.detailOverview : p.detailOverviewEn;
    const work =
      lang === "zh"
        ? p.detailWork.map((w) => `  - ${w}`).join("\n")
        : p.detailWorkEn.map((w) => `  - ${w}`).join("\n");
    const outcome = lang === "zh" ? p.detailOutcome : p.detailOutcomeEn;

    return `### ${title}
- 角色：${role}
- 时间：${p.period}
- 标签：${p.tags.join("、")}
- 概述：${summary}
- 详细说明：${overview}
- 我的工作：
${work}
- 成果：${outcome}`;
  });

  parts.push(`${projHeader}\n${projParts.join("\n\n")}`);

  // ── Contact ──
  parts.push(
    `## 联系方式
- Email：${profile.contact.email}
- 微信：${profile.contact.wechat}`,
  );

  return parts.join("\n\n---\n\n");
}
