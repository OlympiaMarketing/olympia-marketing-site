import type { Metadata } from "next"
import { getAllPosts, getAllCategories } from "@/lib/data"
import { JsonLd } from "@/components/seo/json-ld"
import { getCollectionPageSchema } from "@/lib/schema"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { NewsletterSignup } from "@/components/sections/newsletter-signup"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Marketing Insights & Education | Blog",
  description:
    "Expert marketing tips, strategies, and insights from Olympia Marketing. Actionable advice on SEO, PPC, branding, and growth for small businesses.",
  openGraph: {
    title: "Marketing Insights & Education | Olympia Marketing Blog",
    description:
      "Expert marketing tips, strategies, and insights from Olympia Marketing. Actionable advice on SEO, PPC, branding, and growth for small businesses.",
    type: "website",
  },
}

// ---------------------------------------------------------------------------
// Blog Listing Page
// ---------------------------------------------------------------------------

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string }>
}) {
  const { page: pageParam, category: categoryParam } = await searchParams

  const [allPosts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ])

  // Filter by category slug if provided
  const filteredPosts = categoryParam
    ? allPosts.filter((p) =>
        p.categories.some((c) => c === categoryParam),
      )
    : allPosts

  // Pagination
  const POSTS_PER_PAGE = 12
  const currentPage = Math.max(1, parseInt(pageParam || "1", 10))
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const start = (currentPage - 1) * POSTS_PER_PAGE
  const paginatedPosts = filteredPosts.slice(start, start + POSTS_PER_PAGE)

  return (
    <>
      <JsonLd data={getCollectionPageSchema({
        name: "Olympia Marketing Blog",
        description: "Expert perspectives on marketing, advertising, and business growth from the Olympia Marketing team.",
        url: "https://olympiamarketing.com/blog",
      })} />

      <BlogHero />

      <BlogGrid
        posts={paginatedPosts}
        categories={categories}
        activeCategory={categoryParam}
        currentPage={currentPage}
        totalPages={totalPages}
      />

      <NewsletterSignup />

      <CtaSection />
    </>
  )
}
