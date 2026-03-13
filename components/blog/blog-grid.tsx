import Link from "next/link"
import type { Post, Category } from "@/lib/data"

interface BlogGridProps {
  posts: Post[]
  categories: Category[]
  activeCategory?: string
  currentPage: number
  totalPages: number
}

export function BlogGrid({
  posts,
  categories,
  activeCategory,
  currentPage,
  totalPages,
}: BlogGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      {/* Category filters */}
      <div className="mb-12 flex flex-wrap gap-2">
        <Link
          href="/blog"
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
            !activeCategory
              ? "border-primary bg-primary/10 text-primary"
              : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
          }`}
        >
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/blog?category=${encodeURIComponent(cat.slug)}`}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === cat.slug
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {posts.length === 0 ? (
        <p className="py-20 text-center text-muted-foreground">
          No posts found{activeCategory ? ` in "${activeCategory}"` : ""}.
        </p>
      ) : (
        <>
          {/* Featured post — first (most recent) post */}
          <FeaturedPostCard post={posts[0]} />

          {/* Post grid */}
          {posts.length > 1 && (
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.slice(1).map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="mt-16 flex items-center justify-center gap-2">
          {currentPage > 1 && (
            <Link
              href={`/blog?page=${currentPage - 1}${activeCategory ? `&category=${encodeURIComponent(activeCategory)}` : ""}`}
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
            >
              &larr; Previous
            </Link>
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Link
              key={p}
              href={`/blog?page=${p}${activeCategory ? `&category=${encodeURIComponent(activeCategory)}` : ""}`}
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
              href={`/blog?page=${currentPage + 1}${activeCategory ? `&category=${encodeURIComponent(activeCategory)}` : ""}`}
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
            >
              Next &rarr;
            </Link>
          )}
        </nav>
      )}
    </section>
  )
}

// ---------------------------------------------------------------------------
// Featured Post Card — large hero-style card
// ---------------------------------------------------------------------------

function FeaturedPostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/${post.slug}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"
    >
      <div className="grid md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary md:aspect-auto md:min-h-[320px]">
          {post.images?.[0] ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.images[0]}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/15 to-accent/10">
              <span className="text-5xl font-bold text-muted-foreground/20">
                OM
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-8 md:p-10">
          {post.categories.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
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

          <h2 className="font-heading text-2xl font-semibold leading-snug text-foreground transition-colors group-hover:text-primary md:text-3xl">
            {post.title}
          </h2>

          {post.excerpt && (
            <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {post.excerpt}
            </p>
          )}

          <div className="mt-6 flex items-center gap-4">
            <time
              dateTime={post.date}
              className="text-xs text-muted-foreground"
            >
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Read Article &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

// ---------------------------------------------------------------------------
// Standard Post Card
// ---------------------------------------------------------------------------

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary">
        {post.images?.[0] ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.images[0]}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-accent/5">
            <span className="text-3xl font-bold text-muted-foreground/20">
              OM
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        {/* Category */}
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

        <h3 className="text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
          {post.title}
        </h3>

        {post.excerpt && (
          <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
        )}

        <time
          dateTime={post.date}
          className="mt-4 text-xs text-muted-foreground"
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
