-- Form submissions table for contact forms, audit requests, and newsletter signups
CREATE TABLE IF NOT EXISTS form_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  form_type TEXT NOT NULL CHECK (form_type IN ('contact', 'audit', 'newsletter')),
  name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT,
  metadata JSONB,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for admin queries (newest first, filter by type and read status)
CREATE INDEX idx_form_submissions_created_at ON form_submissions (created_at DESC);
CREATE INDEX idx_form_submissions_form_type ON form_submissions (form_type);
CREATE INDEX idx_form_submissions_read ON form_submissions (read) WHERE read = FALSE;

-- Row-level security: anon can insert, authenticated can read/update
ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert (form submissions from the public site)
CREATE POLICY "Allow anonymous inserts"
  ON form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (TRUE);

-- Allow authenticated users (admin) to read all submissions
CREATE POLICY "Allow authenticated reads"
  ON form_submissions
  FOR SELECT
  TO authenticated
  USING (TRUE);

-- Allow authenticated users (admin) to update (mark as read, etc.)
CREATE POLICY "Allow authenticated updates"
  ON form_submissions
  FOR UPDATE
  TO authenticated
  USING (TRUE)
  WITH CHECK (TRUE);

-- Auto-update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON form_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
