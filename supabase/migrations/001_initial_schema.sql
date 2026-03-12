-- Olympia Marketing - Initial Schema
-- Categories for blog posts
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  parent_slug TEXT,
  description TEXT,
  seo_title TEXT,
  seo_description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blog posts
CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT,
  excerpt TEXT,
  featured_image TEXT,
  status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
  seo_title TEXT,
  seo_description TEXT,
  focus_keyword TEXT,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Post-category junction
CREATE TABLE IF NOT EXISTS post_categories (
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, category_id)
);

-- Static pages
CREATE TABLE IF NOT EXISTS pages (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT,
  page_type TEXT DEFAULT 'general' CHECK (page_type IN (
    'service', 'industry', 'case-study', 'location',
    'research', 'form', 'utility', 'general'
  )),
  parent_slug TEXT,
  featured_image TEXT,
  status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
  seo_title TEXT,
  seo_description TEXT,
  focus_keyword TEXT,
  -- Category slugs for pulling related blog posts
  related_categories TEXT[],
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Page sections for structured content within pages
CREATE TABLE IF NOT EXISTS page_sections (
  id SERIAL PRIMARY KEY,
  page_id INTEGER REFERENCES pages(id) ON DELETE CASCADE,
  section_type TEXT NOT NULL CHECK (section_type IN (
    'hero', 'text', 'features', 'stats', 'testimonial',
    'cta', 'faq', 'gallery', 'team', 'process', 'pricing'
  )),
  title TEXT,
  content JSONB,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT,
  source_page TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_posts_slug ON posts(slug);
CREATE INDEX idx_posts_status ON posts(status);
CREATE INDEX idx_posts_published_at ON posts(published_at DESC);
CREATE INDEX idx_pages_slug ON pages(slug);
CREATE INDEX idx_pages_page_type ON pages(page_type);
CREATE INDEX idx_pages_status ON pages(status);
CREATE INDEX idx_categories_slug ON categories(slug);

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Public read access for published content
CREATE POLICY "Public read categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Public read published posts" ON posts FOR SELECT USING (status = 'published');
CREATE POLICY "Public read post_categories" ON post_categories FOR SELECT USING (true);
CREATE POLICY "Public read published pages" ON pages FOR SELECT USING (status = 'published');
CREATE POLICY "Public read page_sections" ON page_sections FOR SELECT USING (true);

-- Allow anonymous inserts for contact form
CREATE POLICY "Anyone can submit contact form" ON contact_submissions FOR INSERT WITH CHECK (true);
