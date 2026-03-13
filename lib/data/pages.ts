import fs from 'fs';
import { resolveJsonPath } from './resolve-path';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type PageType =
  | 'service'
  | 'industry'
  | 'case-study'
  | 'location'
  | 'research'
  | 'form'
  | 'utility'
  | 'general';

export interface Page {
  title: string;
  slug: string;
  /** Full URL path matching the live WordPress site (e.g. "marketing-advertising-services/digital-marketing/content-marketing") */
  full_path: string;
  content: string;
  images: string[];
  seo_title: string;
  seo_description: string;
  focus_keyword: string;
  /** Computed at load time based on slug classification */
  page_type: PageType;
  /** Category slugs whose blog posts should surface on this page */
  related_categories: string[];
}

// ---------------------------------------------------------------------------
// Slug → PageType classification
// ---------------------------------------------------------------------------

const SERVICE_SLUGS = new Set([
  'seo', 'local-seo', 'digital-marketing', 'content-marketing',
  'email-marketing', 'social-media-marketing', 'search-engine-marketing',
  'pay-per-click-marketing', 'public-relations-pr',
  'print-advertising-campaign-development', 'print-collateral-design',
  'brochures-flyers-and-posters', 'direct-mail-campaigns',
  'branding-corporate-id', 'blogging', 'review-generation',
  'reputation-management', 'lead-management', 'fractional-cmo',
  'marketing-plan-development', 'web-app-development',
  'responsive-website-design', 'responsive-design', 'wordpress-development',
  'websites', 'hosting-and-maintenance', 'daily-backups', 'top-tier-security',
  'fast-load-times', 'ongoing-upgrades', 'support', 'account-management',
  'marketing-advertising-services', 'marketing-advertising', 'saas-marketing',
  'support-process', 'ai-services', 'ai-engine-optimization',
  'ai-development', 'ai-agentic-setup',
]);

const INDUSTRY_SLUGS = new Set([
  'med-spa', 'beauty-esthetician-marketing-advertising',
  'physical-therapy-marketing-advertising',
  'real-estate-marketing-advertising', 'home-service-businesses',
  'builders-developers', 'industries', 'beauty-school-marketing',
  'massage-school-marketing', 'esthetician-schools',
  'increase-student-enrollment-in-beauty-schools',
  'increase-enrollment-in-private-education',
  'increasing-student-enrollment-in-vocational-schools',
  'why-beauty-school-marketing-matters', 'roofing-contractor-marketing',
]);

const CASE_STUDY_SLUGS = new Set([
  'fbba', 'land-clearing-swfl', 'renovation-naples',
  'physician-aesthetic-institute', 'the-skin-care-academy', 'mudd',
  'retailmts', 'st-peter-orthodox-church', 'xyzai', 'esthetician-schools',
]);

const LOCATION_SLUGS = new Set([
  'digital-marketing-fort-myers', 'estero-marketing-agency',
  'orlando-marketing-agency',
  'fort-myers-digital-marketing-web-design-company',
]);

const RESEARCH_SLUGS = new Set([
  'beauty-school-research', 'builders-developers-research',
  'home-services-research', 'medical-spa-research',
  'physical-therapists-research', 'real-estate-research', 'saas-research',
  'salon-beauty-industry-research', 'swfl-research', 'research',
]);

const FORM_SLUGS = new Set([
  'beauty-school-onboarding-questionnaire',
  'med-spa-onboarding-questionnaire',
  'general-marketing-web-design-form', 'general-website-questionnaire',
  'website-only-questionnaire', 'advanced-website-questionnaire',
  'company-information', 'book', 'schedule', 'schedule-a-call-christopher',
]);

const UTILITY_SLUGS = new Set([
  'privacy-policy', 'sitemap', 'general-support',
]);

// ---------------------------------------------------------------------------
// Category mapping — which blog categories to pull for each page
// ---------------------------------------------------------------------------

const CATEGORY_MAP: Record<string, string[]> = {
  'med-spa': ['beauty-industry', 'esthetician'],
  'beauty-esthetician-marketing-advertising': ['beauty-industry', 'esthetician', 'hair-stylist'],
  'physical-therapy-marketing-advertising': ['physical-therapists'],
  'real-estate-marketing-advertising': ['real-estate-marketing'],
  'home-service-businesses': ['industry'],
  'builders-developers': ['builders-developers'],
  'beauty-school-marketing': ['beauty-industry', 'esthetician'],
  'seo': ['seo', 'digital-marketing'],
  'digital-marketing': ['digital-marketing'],
  'content-marketing': ['digital-marketing', 'blog'],
  'social-media-marketing': ['digital-marketing'],
  'email-marketing': ['digital-marketing'],
  'saas-marketing': ['digital-marketing'],
  'ai-services': ['digital-marketing', 'seo'],
  'ai-engine-optimization': ['digital-marketing', 'seo'],
  'ai-development': ['digital-marketing'],
  'ai-agentic-setup': ['digital-marketing'],
};

function classifyPage(slug: string): PageType {
  if (SERVICE_SLUGS.has(slug)) return 'service';
  if (INDUSTRY_SLUGS.has(slug)) return 'industry';
  if (CASE_STUDY_SLUGS.has(slug)) return 'case-study';
  if (LOCATION_SLUGS.has(slug)) return 'location';
  if (RESEARCH_SLUGS.has(slug)) return 'research';
  if (FORM_SLUGS.has(slug)) return 'form';
  if (UTILITY_SLUGS.has(slug)) return 'utility';
  return 'general';
}

// ---------------------------------------------------------------------------
// Raw JSON shape (before we enrich)
// ---------------------------------------------------------------------------

interface RawPage {
  title: string;
  slug: string;
  full_path: string;
  content: string;
  images: string[];
  seo_title: string;
  seo_description: string;
  focus_keyword: string;
}

// ---------------------------------------------------------------------------
// Data loading (reads JSON once, caches in module scope)
// ---------------------------------------------------------------------------

let _cache: Page[] | null = null;

function loadPages(): Page[] {
  if (_cache) return _cache;

  const filePath = resolveJsonPath('pages.json');
  const raw: RawPage[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  _cache = raw.map((p) => ({
    ...p,
    full_path: p.full_path || p.slug,
    // Strip wp-content image URLs — no local equivalents exist for pages
    images: p.images.filter((url) => !url.includes('wp-content')),
    page_type: classifyPage(p.slug),
    related_categories: CATEGORY_MAP[p.slug] ?? [],
  }));

  return _cache;
}

// ---------------------------------------------------------------------------
// Public API — all async for future Supabase swap
// ---------------------------------------------------------------------------

export async function getAllPages(): Promise<Page[]> {
  return loadPages();
}

export async function getPageBySlug(slug: string): Promise<Page | undefined> {
  return loadPages().find((p) => p.slug === slug);
}

/** Look up a page by its full URL path (e.g. "marketing-advertising-services/digital-marketing/content-marketing") */
export async function getPageByPath(path: string): Promise<Page | undefined> {
  return loadPages().find((p) => p.full_path === path);
}

export async function getPagesByType(type: PageType): Promise<Page[]> {
  return loadPages().filter((p) => p.page_type === type);
}
