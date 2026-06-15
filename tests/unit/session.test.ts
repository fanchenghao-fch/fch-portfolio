import { describe, it, expect } from "vitest";
import {
  createSessionToken,
  verifySessionToken,
} from "../../src/lib/session";

// Set the session secret before importing (mocked via process.env)
process.env.SESSION_SECRET = "test-secret-key-2026";

describe("Session Token", () => {
  const payload = {
    sessionId: "test-session-uuid",
    company: "Test Corp",
    role: "HR",
  };

  it("should create a valid token", () => {
    const token = createSessionToken(payload);
    expect(token).toBeTruthy();
    expect(typeof token).toBe("string");
    expect(token).toContain(":"); // iv:encrypted format
  });

  it("should verify and decode a valid token", () => {
    const token = createSessionToken(payload);
    const decoded = verifySessionToken(token);
    expect(decoded).not.toBeNull();
    expect(decoded!.sessionId).toBe(payload.sessionId);
    expect(decoded!.company).toBe(payload.company);
    expect(decoded!.role).toBe(payload.role);
  });

  it("should return null for an invalid token", () => {
    expect(verifySessionToken("invalid:token:format")).toBeNull();
    expect(verifySessionToken("")).toBeNull();
    expect(verifySessionToken("abc123")).toBeNull();
  });

  it("should return null for a tampered token", () => {
    const token = createSessionToken(payload);
    const tampered = token.slice(0, -5) + "00000";
    const decoded = verifySessionToken(tampered);
    expect(decoded).toBeNull();
  });

  it("should produce different tokens for different payloads", () => {
    const token1 = createSessionToken(payload);
    const token2 = createSessionToken({
      ...payload,
      sessionId: "different-session",
    });
    expect(token1).not.toBe(token2);
  });
});
