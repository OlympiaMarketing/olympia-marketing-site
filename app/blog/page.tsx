import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts, getAllCategories } from "@/lib/data"
import type { Post, Category } from "@/lib/data"

export const metadata: Metadata = {
  title: "Olympia Marketing Blog | Latest Insights & Tips For Success",
  description:
    "Our marketing & advertising blog offers insight into our perspective in marketing, tips for your business, as well as actionable information for marketers at every level.",
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
        p.categories.some(
          (c) => c === categoryParam,
        ),
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
      {/* ---- Hero ---- */}
      <section className="border-b border-border bg-card py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Blog
          </span>
          <h1 className="text-4xl font-bold md:text-5xl">
            Marketing Insights &amp; Tips
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Expert perspectives on marketing, advertising, and business growth
            from the Olympia Marketing team.
          </p>
        </div>
      </section>

      {/* ---- Category Tabs + Grid ---- */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        {/* Category filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          <Link
            href="/blog"
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              !categoryParam
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            All
          </Link>
          {categories.map((cat: Category) => (
            <Link
              key={cat.slug}
              href={`/blog?category=${encodeURIComponent(cat.slug)}`}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                categoryParam === cat.slug
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Posts grid */}
        {paginatedPosts.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">
            No posts found{categoryParam ? ` in "${categoryParam}"` : ""}.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedPosts.map((post: Post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="mt-14 flex items-center justify-center gap-2">
            {currentPage > 1 && (
              <Link
                href={`/blog?page=${currentPage - 1}${categoryParam ? `&category=${encodeURIComponent(categoryParam)}` : ""}`}
                className="rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
              >
                &larr; Previous
              </Link>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={`/blog?page=${p}${categoryParam ? `&category=${encodeURIComponent(categoryParam)}` : ""}`}
                className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                  p === currentPage
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/40"
                }`}
              >
                {p}
              </Link>
            ))}

            {currentPage < totalPages && (
              <Link
                href={`/blog?page=${currentPage + 1}${categoryParam ? `&category=${encodeURIComponent(categoryParam)}` : ""}`}
                className="rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
              >
                Next &rarr;
              </Link>
            )}
          </nav>
        )}
      </section>
    </>
  )
}

// ---------------------------------------------------------------------------
// Post Card
// ---------------------------------------------------------------------------

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/${post.slug}`}
      className="group flex flex-col rounded-lg border border-border bg-card transition-colors hover:border-primary/40"
    >
      {/* Featured image placeholder */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-lg bg-secondary">
        {post.images?.[0] ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.images[0]}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-3xl text-muted-foreground/30">OM</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        {/* Categories */}
        {post.categories.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-1.5">
            {post.categories.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="text-[10px] font-semibold uppercase tracking-wider text-primary"
              >
                {cat}
              </span>
            ))}
          </div>
        )}

        <h2 className="text-lg font-semibold leading-snug group-hover:text-primary">
          {post.title}
        </h2>

        {post.excerpt && (
          <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
            {post.excerpt}
          </p>
        )}

        <time
          dateTime={post.date}
          className="mt-3 text-xs text-muted-foreground"
        >
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
      </div>
    </Link>
  )
}
