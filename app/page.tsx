import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ClientMarquee } from "@/components/sections/client-marquee"
import { StatsCounter } from "@/components/sections/stats-counter"
import { Testimonials } from "@/components/sections/testimonials"
import { ServicesGrid } from "@/components/sections/services-grid"
import { CaseStudiesPreview } from "@/components/sections/case-studies-grid"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { CtaSection } from "@/components/sections/cta-section"
import { SeoContent } from "@/components/sections/seo-content"
import { AboutPreview } from "@/components/sections/about-preview"
import { DifferenceSection } from "@/components/sections/difference-section"
import { getRecentPosts, getPagesByType } from "@/lib/data"
import type { Post, Page } from "@/lib/data"

export default async function HomePage() {
  const [recentPosts, caseStudies] = await Promise.all([
    getRecentPosts(3),
    getPagesByType("case-study"),
  ])

  return (
    <>
      <Hero />
      <AboutPreview />
      <ClientMarquee />
      <DifferenceSection />
      <StatsCounter />
      <Testimonials />
      <ServicesGrid />
      <CaseStudiesPreview />

      {/* ---- Recent Blog Posts (data-driven) ---- */}
      {recentPosts.length > 0 && (
        <section className="border-t border-border py-20">
          <div className="mx-auto max-w-6xl px-6">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
              From the Blog
            </span>
            <h2 className="mb-10 text-3xl font-bold">Latest Insights</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post: Post) => (
                <Link
                  key={post.slug}
                  href={`/${post.slug}`}
                  className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
                >
                  {post.categories.length > 0 && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {post.categories[0]}
                    </span>
                  )}
                  <h3 className="mt-2 font-semibold leading-snug group-hover:text-primary">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                  )}
                  <time
                    dateTime={post.date}
                    className="mt-3 block text-xs text-muted-foreground"
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                View all articles &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ---- Case Studies (data-driven) ---- */}
      {caseStudies.length > 0 && (
        <section className="border-t border-border py-20">
          <div className="mx-auto max-w-6xl px-6">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
              Results
            </span>
            <h2 className="mb-10 text-3xl font-bold">Case Studies</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.slice(0, 6).map((cs: Page) => (
                <Link
                  key={cs.slug}
                  href={`/${cs.full_path}`}
                  className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                    Case Study
                  </span>
                  <h3 className="mt-2 font-semibold leading-snug group-hover:text-primary">
                    {cs.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FaqAccordion />
      <CtaSection />
      <SeoContent />
    </>
  )
}
