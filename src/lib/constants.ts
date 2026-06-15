// Design tokens — synced from UI prototypes
export const COLORS = {
  paper: "#FBFBFD",
  white: "#FFFFFF",
  ink: "#1D1D1F",
  graphite: "#15191B",
  muted: "#6E6E73",
  line: "rgba(0,0,0,0.09)",
  teal: "#0E8C82",
  tealDeep: "#0A6E66",
  tealSoft: "#E8F4F2",
} as const;

export const RADIUS = {
  sm: "14px",
  lg: "20px",
  full: "980px",
} as const;

export const FONT_STACK =
  '-apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text","Helvetica Neue","PingFang SC","Microsoft YaHei",sans-serif';

export const MAX_WIDTH = "1080px";

export const GATE_COOKIE_NAME = "gate_token";
export const GATE_COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days
export const LANG_COOKIE_NAME = "lang_pref";

// Rate limits
export const RAG_LIMITS = {
  perSession: 20,
  perIp: 50,
  global: 200,
} as const;

// RAG system prompt marker
export const RAG_SYSTEM_PROMPT_MARKER = "___RAG_CORPUS_BELOW___";
