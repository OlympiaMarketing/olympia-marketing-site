import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import {
  getPageByPath,
  getAllPages,
  getRelatedPosts,
  getPagesByType,
  getAllPosts,
  getPostBySlug,
} from "@/lib/data"
import type { Page, Post } from "@/lib/data"

// ---------------------------------------------------------------------------
// Static generation
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  const [pages, posts] = await Promise.all([getAllPages(), getAllPosts()])

  // Slugs that have dedicated routes in /app
  const reserved = new Set(["home", "blog", "contact", "about", "work", "marketing-advertising-services"])

  // Pages generate paths from full_path (may be nested like "marketing-advertising-services/digital-marketing")
  const pageParams = pages
    .filter((p) => !reserved.has(p.slug) && p.full_path)
    .map((p) => ({ slug: p.full_path.split("/") }))

  // Blog posts are at root level on the live WordPress site
  const postParams = posts.map((p) => ({ slug: [p.slug] }))

  return [...pageParams, ...postParams]
}

// ---------------------------------------------------------------------------
// Content resolution — tries page first, then blog post
// ---------------------------------------------------------------------------

async function resolveContent(slugParts: string[]): Promise<{ type: "page"; data: Page } | { type: "post"; data: Post } | null> {
  const path = slugParts.join("/")

  // Try page lookup by full path first
  const page = await getPageByPath(path)
  if (page) return { type: "page", data: page }

  // For single-segment slugs, also try as a blog post (WP posts live at root)
  if (slugParts.length === 1) {
    const post = await getPostBySlug(slugParts[0])
    if (post) return { type: "post", data: post }
  }

  return null
}

// ---------------------------------------------------------------------------
// SEO metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata> {
  const { slug } = await params
  const content = await resolveContent(slug)
  if (!content) return {}

  if (content.type === "page") {
    const page = content.data
    return {
      title: page.seo_title || page.title,
      description: page.seo_description,
      openGraph: {
        title: page.seo_title || page.title,
        description: page.seo_description,
        type: "website",
        images: page.images?.[0] ? [{ url: page.images[0] }] : undefined,
      },
    }
  }

  // Blog post
  const post = content.data as Post
  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt,
    openGraph: {
      title: post.seo_title || post.title,
      description: post.seo_description || post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: post.images?.[0] ? [{ url: post.images[0] }] : undefined,
    },
  }
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  const content = await resolveContent(slug)
  if (!content) notFound()

  if (content.type === "post") {
    return <BlogPostView post={content.data as Post} />
  }

  return <PageView page={content.data as Page} />
}

// ===========================================================================
// Blog Post View
// ===========================================================================

async function BlogPostView({ post }: { post: Post }) {
  const relatedPosts = await getRelatedPosts(post.categories, 4)

  return (
    <article>
      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden border-b border-border bg-card py-24 md:py-32">
        <div className="aurora-blob pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/10" />

        <div className="relative mx-auto max-w-3xl px-6">
          {/* Categories */}
          {post.categories.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {post.categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <time
            dateTime={post.date}
            className="mt-4 block text-sm text-muted-foreground"
          >
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </section>

      {/* ---- Content + Sidebar ---- */}
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1fr_320px]">
        {/* Main content */}
        <div
          className="prose prose-invert max-w-none prose-headings:font-bold prose-a:text-primary prose-img:rounded-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
                Related Articles
              </h3>
              <div className="space-y-4">
                {relatedPosts
                  .filter((rp) => rp.slug !== post.slug)
                  .slice(0, 3)
                  .map((rp) => (
                    <Link
                      key={rp.slug}
                      href={`/${rp.slug}`}
                      className="group block rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
                    >
                      <span className="text-xs text-muted-foreground">
                        {new Date(rp.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <h4 className="mt-1 font-medium leading-snug group-hover:text-primary">
                        {rp.title}
                      </h4>
                    </Link>
                  ))}
              </div>
            </div>
          )}

          {/* Back to blog */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            &larr; Back to Blog
          </Link>
        </aside>
      </div>
    </article>
  )
}

// ===========================================================================
// Page View
// ===========================================================================

async function PageView({ page }: { page: Page }) {
  // Fetch related blog posts for page types that show them
  const showRelatedPosts = ["service", "industry", "location", "general"].includes(
    page.page_type,
  )
  const relatedPosts = showRelatedPosts
    ? await getRelatedPosts(page.related_categories, 3)
    : []

  // Fetch case studies for industry pages
  const caseStudies =
    page.page_type === "industry" ? await getPagesByType("case-study") : []

  return (
    <article>
      {/* ---- Hero Section ---- */}
      <PageHero page={page} />

      {/* ---- Main Content Area ---- */}
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Service pages */}
        {page.page_type === "service" && (
          <ServiceLayout page={page} relatedPosts={relatedPosts} />
        )}

        {/* Industry pages */}
        {page.page_type === "industry" && (
          <IndustryLayout
            page={page}
            relatedPosts={relatedPosts}
            caseStudies={caseStudies}
          />
        )}

        {/* Case study pages */}
        {page.page_type === "case-study" && <CaseStudyLayout page={page} />}

        {/* Location pages */}
        {page.page_type === "location" && (
          <LocationLayout page={page} relatedPosts={relatedPosts} />
        )}

        {/* Research pages */}
        {page.page_type === "research" && <ResearchLayout page={page} />}

        {/* Form pages */}
        {page.page_type === "form" && <FormLayout page={page} />}

        {/* Utility pages (privacy, terms, etc.) */}
        {page.page_type === "utility" && <UtilityLayout page={page} />}

        {/* General / fallback */}
        {page.page_type === "general" && (
          <GeneralLayout page={page} relatedPosts={relatedPosts} />
        )}
      </div>
    </article>
  )
}

// ===========================================================================
// Shared Sub-Components
// ===========================================================================

function PageHero({ page }: { page: Page }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-card py-24 md:py-32">
      {/* Decorative gradient blob */}
      <div className="aurora-blob pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/10" />

      <div className="relative mx-auto max-w-5xl px-6">
        {page.page_type !== "general" && (
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            {page.page_type.replace("-", " ")}
          </span>
        )}
        <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          {page.title}
        </h1>
        {page.seo_description && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {page.seo_description}
          </p>
        )}
      </div>
    </section>
  )
}

function RelatedPostsSidebar({ posts }: { posts: Post[] }) {
  if (!posts.length) return null

  return (
    <aside className="space-y-6">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
        Related Articles
      </h3>
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/${post.slug}`}
          className="group block rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
        >
          <span className="text-xs text-muted-foreground">{post.date}</span>
          <h4 className="mt-1 font-medium leading-snug group-hover:text-primary">
            {post.title}
          </h4>
        </Link>
      ))}
    </aside>
  )
}

// ===========================================================================
// Page Type Layouts
// ===========================================================================

function ServiceLayout({ page, relatedPosts }: { page: Page; relatedPosts: Post[] }) {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
      <div
        className="prose prose-invert max-w-none prose-headings:font-bold prose-a:text-primary"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
      <RelatedPostsSidebar posts={relatedPosts} />
    </div>
  )
}

function IndustryLayout({
  page,
  relatedPosts,
  caseStudies,
}: {
  page: Page
  relatedPosts: Post[]
  caseStudies: Page[]
}) {
  return (
    <>
      <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
        <div
          className="prose prose-invert max-w-none prose-headings:font-bold prose-a:text-primary"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
        <RelatedPostsSidebar posts={relatedPosts} />
      </div>

      {/* Case studies grid */}
      {caseStudies.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-8 text-2xl font-bold">Case Studies</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(0, 6).map((cs) => (
              <Link
                key={cs.slug}
                href={`/${cs.full_path}`}
                className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Case Study
                </span>
                <h3 className="mt-2 font-semibold leading-snug group-hover:text-primary">
                  {cs.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  )
}

function CaseStudyLayout({ page }: { page: Page }) {
  return (
    <div className="mx-auto max-w-3xl">
      <div
        className="prose prose-invert max-w-none prose-headings:font-bold prose-a:text-primary"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </div>
  )
}

function LocationLayout({ page, relatedPosts }: { page: Page; relatedPosts: Post[] }) {
  return (
    <>
      <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
        <div
          className="prose prose-invert max-w-none prose-headings:font-bold prose-a:text-primary"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
        <RelatedPostsSidebar posts={relatedPosts} />
      </div>
    </>
  )
}

function ResearchLayout({ page }: { page: Page }) {
  return (
    <div className="mx-auto max-w-3xl">
      <div
        className="prose prose-invert max-w-none prose-headings:font-bold prose-a:text-primary prose-p:text-base prose-p:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </div>
  )
}

function FormLayout({ page }: { page: Page }) {
  return (
    <div className="mx-auto max-w-3xl">
      <div
        className="prose prose-invert max-w-none prose-headings:font-bold prose-a:text-primary"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </div>
  )
}

function UtilityLayout({ page }: { page: Page }) {
  return (
    <div className="mx-auto max-w-3xl">
      <div
        className="prose prose-invert max-w-none prose-headings:font-bold prose-a:text-primary prose-p:text-sm prose-p:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </div>
  )
}

function GeneralLayout({ page, relatedPosts }: { page: Page; relatedPosts: Post[] }) {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
      <div
        className="prose prose-invert max-w-none prose-headings:font-bold prose-a:text-primary"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
      <RelatedPostsSidebar posts={relatedPosts} />
    </div>
  )
}
