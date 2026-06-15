import { describe, it, expect } from "vitest";
import { RAG_LIMITS } from "../../src/lib/constants";

describe("Rate Limit Configuration", () => {
  it("should have sensible per-session limit", () => {
    expect(RAG_LIMITS.perSession).toBeGreaterThan(0);
    expect(RAG_LIMITS.perSession).toBeLessThanOrEqual(50);
  });

  it("should have per-IP limit higher than per-session", () => {
    expect(RAG_LIMITS.perIp).toBeGreaterThan(RAG_LIMITS.perSession);
  });

  it("should have global limit as the highest", () => {
    expect(RAG_LIMITS.global).toBeGreaterThan(RAG_LIMITS.perIp);
  });

  it("should have all limits as positive integers", () => {
    Object.values(RAG_LIMITS).forEach((limit) => {
      expect(Number.isInteger(limit)).toBe(true);
      expect(limit).toBeGreaterThan(0);
    });
  });
});
