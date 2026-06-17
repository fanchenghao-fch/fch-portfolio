// ── Detail section (for projects with custom block structure) ──
export interface DetailSection {
  title: string;
  titleEn: string;
  text?: string;
  textEn?: string;
  items?: string[];
  itemsEn?: string[];
  url?: string;
  video?: string;
  videoWidth?: number;
  videoHeight?: number;
}

// ── Project (serves both display + RAG corpus) ──
export interface Project {
  slug: string;
  title: string;
  titleEn: string;
  role: string;
  roleEn: string;
  period: string;
  periodLabel?: string;
  periodLabelEn?: string;
  tags: string[];
  summary: string;
  summaryEn: string;
  detailOverview: string;
  detailOverviewEn: string;
  detailWork: string[];
  detailWorkEn: string[];
  detailOutcome: string;
  detailOutcomeEn: string;
  detailSections?: DetailSection[];
  images: string[];
  links: { label: string; url: string; labelEn?: string }[];
  sortWeight: number;
}

// ── Visit record ──
export interface VisitRecord {
  id: number;
  company: string;
  role: string;
  visitedAt: Date;
  referrer?: string;
  device?: string;
  region?: string;
  durationSec: number;
  viewedProjects: string[];
  sessionId: string;
}

// ── RAG log ──
export interface RagLog {
  id: number;
  sessionId: string;
  company?: string;
  question: string;
  answer: string;
  citedProjectIds: string[];
  askedAt: Date;
}

// ── Profile section ──
export interface ProfileSection {
  section: string;
  content: Record<string, unknown>;
}

// ── Gate form input ──
export interface GateFormData {
  company: string;
  role: string;
}

// ── RAG request / response ──
export interface RagRequest {
  question: string;
  history?: { role: "user" | "assistant"; content: string }[];
}

export interface RagResponse {
  answer: string;
  citedProjectIds: string[];
  citedProjects: Pick<Project, "slug" | "title" | "tags">[];
}

// ── Admin overview ──
export interface AdminOverview {
  totalCompanies: number;
  totalVisits: number;
  deepBrowsers: number;
  totalRagQuestions: number;
}
