import { describe, it, expect } from "vitest";
import { buildRagCorpus } from "../../src/data/rag-corpus";
import { projects } from "../../src/data/projects";

describe("RAG Corpus", () => {
  it("should build Chinese corpus with all projects", () => {
    const corpus = buildRagCorpus("zh");
    expect(corpus).toBeTruthy();
    expect(typeof corpus).toBe("string");
    // Should contain all 8 projects
    projects.forEach((p) => {
      expect(corpus).toContain(p.title);
    });
  });

  it("should build English corpus with all projects", () => {
    const corpus = buildRagCorpus("en");
    expect(corpus).toBeTruthy();
    projects.forEach((p) => {
      expect(corpus).toContain(p.titleEn);
    });
  });

  it("should contain contact info", () => {
    const corpus = buildRagCorpus("zh");
    expect(corpus).toContain("2495845133@qq.com");
    expect(corpus).toContain("FchFanchenghao");
  });

  it("should contain experience timeline", () => {
    const corpus = buildRagCorpus("zh");
    expect(corpus).toContain("此芯科技");
    expect(corpus).toContain("同济咨询");
    expect(corpus).toContain("同济大学");
  });

  it("should be non-empty for both languages", () => {
    const zh = buildRagCorpus("zh");
    const en = buildRagCorpus("en");
    expect(zh.length).toBeGreaterThan(500);
    expect(en.length).toBeGreaterThan(500);
  });

  it("should differ between languages", () => {
    const zh = buildRagCorpus("zh");
    const en = buildRagCorpus("en");
    expect(zh).not.toBe(en);
  });
});
