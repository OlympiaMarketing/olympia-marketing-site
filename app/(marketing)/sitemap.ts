import type { MetadataRoute } from "next"
import { getAllPages, getAllPosts, getAllCategories } from "@/lib/data"
import type { PageType } from "@/lib/data"

const BASE_URL = "https://olympiamarketing.com"

/**
 * Priority tiers by content type (SEO best practice: higher priority = more important to crawl).
 * Pages that drive conversions or represent core offerings get highest priority.
 */
const PAGE_TYPE_PRIORITY: Record<PageType, number> = {
  service: 0.8,
  industry: 0.8,
  "case-study": 0.7,
  location: 0.7,
  research: 0.6,
  general: 0.5,
  utility: 0.3,
  form: 0.3,
}

const PAGE_TYPE_FREQUENCY: Record<PageType, "weekly" | "monthly" | "yearly"> = {
  service: "monthly",
  industry: "monthly",
  "case-study": "monthly",
  location: "monthly",
  research: "monthly",
  general: "monthly",
  utility: "yearly",
  form: "yearly",
}

/** Categories worth excluding from the sitemap (low SEO value) */
const EXCLUDED_CATEGORIES = new Set(["uncategorized"])

/** Page slugs to exclude from sitemap (forms, internal tools) */
const EXCLUDED_PAGE_SLUGS = new Set([
  "schedule-a-call-christopher",
  "company-information",
  "support-process",
])

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pages, posts, categories] = await Promise.all([
    getAllPages(),
    getAllPosts(),
    getAllCategories(),
  ])

  // ── Static high-value routes ──
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/work`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/marketing-advertising-services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]

  // ── Dynamic page routes with type-based priority ──
  const pageRoutes: MetadataRoute.Sitemap = pages
    .filter((p) => !["home", "blog", "contact", "about", "work", "marketing-advertising-services"].includes(p.slug))
    .filter((p) => !EXCLUDED_PAGE_SLUGS.has(p.slug))
    .map((p) => ({
      url: `${BASE_URL}/${p.full_path}`,
      lastModified: new Date(),
      changeFrequency: PAGE_TYPE_FREQUENCY[p.page_type],
      priority: PAGE_TYPE_PRIORITY[p.page_type],
    }))

  // ── Blog category archive pages ──
  const categoryRoutes: MetadataRoute.Sitemap = categories
    .filter((c) => !EXCLUDED_CATEGORIES.has(c.slug))
    .map((c) => ({
      url: `${BASE_URL}/blog?category=${encodeURIComponent(c.slug)}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    }))

  // ── Blog post routes with real publication dates ──
  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE_URL}/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...pageRoutes, ...categoryRoutes, ...postRoutes]
}
