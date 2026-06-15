import crypto from "node:crypto";
import { GATE_COOKIE_NAME, GATE_COOKIE_MAX_AGE } from "./constants";

const SECRET =
  (typeof import.meta !== "undefined" && import.meta.env?.SESSION_SECRET) ||
  process.env.SESSION_SECRET ||
  "fallback-secret";

interface GatePayload {
  sessionId: string;
  company: string;
  role: string;
}

export function createSessionToken(payload: GatePayload): string {
  const data = JSON.stringify(payload);
  const iv = crypto.randomBytes(16);
  const key = crypto.scryptSync(SECRET, "salt", 32);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(data, "utf8", "hex");
  encrypted += cipher.final("hex");
  return `${iv.toString("hex")}:${encrypted}`;
}

export function verifySessionToken(token: string): GatePayload | null {
  try {
    const [ivHex, encrypted] = token.split(":");
    if (!ivHex || !encrypted) return null;

    const iv = Buffer.from(ivHex, "hex");
    const key = crypto.scryptSync(SECRET, "salt", 32);
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
    let decrypted = decipher.update(encrypted, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return JSON.parse(decrypted) as GatePayload;
  } catch {
    return null;
  }
}

export function setGateCookie(
  headers: Headers,
  payload: GatePayload,
): void {
  const token = createSessionToken(payload);
  headers.set(
    "Set-Cookie",
    `${GATE_COOKIE_NAME}=${token}; Path=/; Max-Age=${GATE_COOKIE_MAX_AGE}; HttpOnly; SameSite=Lax; Secure`,
  );
}

export function getGateCookie(cookies: string): GatePayload | null {
  const match = cookies.match(
    new RegExp(`${GATE_COOKIE_NAME}=([^;]+)`),
  );
  if (!match?.[1]) return null;
  return verifySessionToken(decodeURIComponent(match[1]));
}
