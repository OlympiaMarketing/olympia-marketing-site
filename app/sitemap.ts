import type { MetadataRoute } from "next"
import { getAllPages, getAllPosts } from "@/lib/data"

const BASE_URL = "https://olympiamarketing.com"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pages, posts] = await Promise.all([getAllPages(), getAllPosts()])

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]

  // Dynamic page routes using full_path to match live site URLs
  const pageRoutes: MetadataRoute.Sitemap = pages
    .filter((p) => !["home"].includes(p.slug))
    .map((p) => ({
      url: `${BASE_URL}/${p.full_path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: p.page_type === "service" ? 0.8 : 0.7,
    }))

  // Blog post routes at root level (matching WordPress URL structure)
  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE_URL}/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...pageRoutes, ...postRoutes]
}
