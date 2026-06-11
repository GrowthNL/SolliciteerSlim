-- Phase 2: Initial schema
-- Tabellen: users, resumes, cover_letters, job_posts, applications, ai_usage_logs

-- ─────────────────────────────────────────────
-- users
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS users (
  id               UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email            TEXT NOT NULL,
  full_name        TEXT,
  plan             TEXT NOT NULL DEFAULT 'free' CHECK (plan IN ('free', 'starter', 'pro')),
  stripe_customer_id TEXT UNIQUE,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users_select_own" ON users FOR SELECT USING (id = auth.uid());
CREATE POLICY "users_insert_own" ON users FOR INSERT WITH CHECK (id = auth.uid());
CREATE POLICY "users_update_own" ON users FOR UPDATE USING (id = auth.uid());

-- Automatically create a users row after signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  INSERT INTO users (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', '')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ─────────────────────────────────────────────
-- resumes
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS resumes (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title        TEXT NOT NULL DEFAULT 'Naamloos cv',
  language     TEXT NOT NULL DEFAULT 'nl',
  template_id  TEXT NOT NULL DEFAULT 'modern',
  data_json    JSONB NOT NULL DEFAULT '{}',
  ai_summary   TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_resumes_user_updated ON resumes (user_id, updated_at DESC);

ALTER TABLE resumes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "resumes_select_own" ON resumes FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "resumes_insert_own" ON resumes FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "resumes_update_own" ON resumes FOR UPDATE USING (user_id = auth.uid());
CREATE POLICY "resumes_delete_own" ON resumes FOR DELETE USING (user_id = auth.uid());

-- ─────────────────────────────────────────────
-- cover_letters
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS cover_letters (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  resume_id    UUID REFERENCES resumes(id) ON DELETE SET NULL,
  job_post_id  UUID,
  title        TEXT NOT NULL DEFAULT 'Naamloze brief',
  content      TEXT NOT NULL DEFAULT '',
  tone         TEXT NOT NULL DEFAULT 'professioneel',
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_cover_letters_user_updated ON cover_letters (user_id, updated_at DESC);

ALTER TABLE cover_letters ENABLE ROW LEVEL SECURITY;

CREATE POLICY "cover_letters_select_own" ON cover_letters FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "cover_letters_insert_own" ON cover_letters FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "cover_letters_update_own" ON cover_letters FOR UPDATE USING (user_id = auth.uid());
CREATE POLICY "cover_letters_delete_own" ON cover_letters FOR DELETE USING (user_id = auth.uid());

-- ─────────────────────────────────────────────
-- job_posts
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS job_posts (
  id                     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  company                TEXT NOT NULL DEFAULT '',
  job_title              TEXT NOT NULL DEFAULT '',
  job_text               TEXT NOT NULL DEFAULT '',
  extracted_keywords_json JSONB,
  created_at             TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at             TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_job_posts_user_updated ON job_posts (user_id, updated_at DESC);

ALTER TABLE job_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "job_posts_select_own" ON job_posts FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "job_posts_insert_own" ON job_posts FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "job_posts_update_own" ON job_posts FOR UPDATE USING (user_id = auth.uid());
CREATE POLICY "job_posts_delete_own" ON job_posts FOR DELETE USING (user_id = auth.uid());

-- ─────────────────────────────────────────────
-- applications
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS applications (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  job_post_id      UUID REFERENCES job_posts(id) ON DELETE SET NULL,
  resume_id        UUID REFERENCES resumes(id) ON DELETE SET NULL,
  cover_letter_id  UUID REFERENCES cover_letters(id) ON DELETE SET NULL,
  status           TEXT NOT NULL DEFAULT 'concept' CHECK (status IN ('concept','verstuurd','in_behandeling','afgewezen','aangenomen')),
  deadline         DATE,
  notes            TEXT,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_applications_user_status ON applications (user_id, status, deadline);

ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "applications_select_own" ON applications FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "applications_insert_own" ON applications FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "applications_update_own" ON applications FOR UPDATE USING (user_id = auth.uid());
CREATE POLICY "applications_delete_own" ON applications FOR DELETE USING (user_id = auth.uid());

-- ─────────────────────────────────────────────
-- ai_usage_logs (geen inhoud opgeslagen)
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS ai_usage_logs (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  action_type   TEXT NOT NULL,
  input_tokens  INTEGER NOT NULL DEFAULT 0,
  output_tokens INTEGER NOT NULL DEFAULT 0,
  cost_estimate NUMERIC(10,6) NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ai_usage_logs_user_created ON ai_usage_logs (user_id, created_at DESC);

ALTER TABLE ai_usage_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "ai_usage_logs_select_own" ON ai_usage_logs FOR SELECT USING (user_id = auth.uid());
-- INSERT only via service role (server-side)
