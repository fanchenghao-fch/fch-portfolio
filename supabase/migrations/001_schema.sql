-- FCH Portfolio: Database Schema v1
-- Run this in Supabase SQL Editor

-- 1. Visits (gate submissions + tracking)
CREATE TABLE IF NOT EXISTS visits (
  id BIGSERIAL PRIMARY KEY,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  visited_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  referrer TEXT,
  device TEXT,
  region TEXT,
  duration_sec INTEGER DEFAULT 0,
  viewed_projects JSONB DEFAULT '[]'::jsonb,
  session_id TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. RAG question logs
CREATE TABLE IF NOT EXISTS rag_logs (
  id BIGSERIAL PRIMARY KEY,
  session_id TEXT NOT NULL,
  company TEXT,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  cited_project_ids JSONB DEFAULT '[]'::jsonb,
  asked_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. Projects corpus (serves both display + RAG)
CREATE TABLE IF NOT EXISTS projects (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  title_en TEXT,
  role TEXT NOT NULL,
  role_en TEXT,
  period TEXT NOT NULL,
  tags JSONB DEFAULT '[]'::jsonb,
  summary TEXT NOT NULL,
  summary_en TEXT,
  detail_overview TEXT,
  detail_overview_en TEXT,
  detail_work JSONB DEFAULT '[]'::jsonb,
  detail_work_en JSONB DEFAULT '[]'::jsonb,
  detail_outcome TEXT,
  detail_outcome_en TEXT,
  images JSONB DEFAULT '[]'::jsonb,
  links JSONB DEFAULT '[]'::jsonb,
  sort_weight INTEGER DEFAULT 0,
  lang TEXT DEFAULT 'zh'
);

-- 4. Profile / resume corpus
CREATE TABLE IF NOT EXISTS profile (
  id BIGSERIAL PRIMARY KEY,
  section TEXT NOT NULL,
  content JSONB NOT NULL DEFAULT '{}'::jsonb,
  lang TEXT DEFAULT 'zh'
);

-- 5. Rate limit counters
CREATE TABLE IF NOT EXISTS rate_limits (
  id BIGSERIAL PRIMARY KEY,
  bucket TEXT NOT NULL,
  remaining INTEGER NOT NULL DEFAULT 200,
  reset_at TIMESTAMPTZ NOT NULL DEFAULT (now() + interval '1 day'),
  UNIQUE(bucket)
);

-- Enable RLS
ALTER TABLE visits ENABLE ROW LEVEL SECURITY;
ALTER TABLE rag_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE rate_limits ENABLE ROW LEVEL SECURITY;

-- Public read access for projects and profile
CREATE POLICY "Public can read projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Public can read profile" ON profile FOR SELECT USING (true);

-- Service role has full access (handled by Supabase automatically)
-- Anon key can only insert visits and rag_logs (no read)
CREATE POLICY "Anon can insert visits" ON visits FOR INSERT WITH CHECK (true);
CREATE POLICY "Anon can insert rag_logs" ON rag_logs FOR INSERT WITH CHECK (true);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_visits_visited_at ON visits(visited_at DESC);
CREATE INDEX IF NOT EXISTS idx_visits_session_id ON visits(session_id);
CREATE INDEX IF NOT EXISTS idx_rag_logs_asked_at ON rag_logs(asked_at DESC);
CREATE INDEX IF NOT EXISTS idx_rag_logs_session_id ON rag_logs(session_id);
