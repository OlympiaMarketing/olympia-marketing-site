import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { ClientMarquee } from "@/components/sections/client-marquee"
import { ServicesGrid } from "@/components/sections/services-grid"
import { BentoResults } from "@/components/sections/bento-results"
import { StatsCounter } from "@/components/sections/stats-counter"
import { Testimonials } from "@/components/sections/testimonials"
import { DifferenceSection } from "@/components/sections/difference-section"
import { NewsletterSignup } from "@/components/sections/newsletter-signup"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { CtaSection } from "@/components/sections/cta-section"
import { SeoContent } from "@/components/sections/seo-content"
import { getRecentPosts, getPagesByType } from "@/lib/data"
import type { Post, Page } from "@/lib/data"

export default async function HomePage() {
  const [recentPosts, caseStudies] = await Promise.all([
    getRecentPosts(3),
    getPagesByType("case-study"),
  ])

  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust Bar */}
      <ClientMarquee />

      {/* 3. Services Overview */}
      <ServicesGrid />

      {/* 4. Results Bento Grid */}
      <BentoResults />

      {/* 5. Stats + Social Proof */}
      <StatsCounter />
      <Testimonials />

      {/* 6. Why Choose Olympia */}
      <DifferenceSection />

      {/* 7. Newsletter */}
      <NewsletterSignup />

      {/* 8. Recent Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-primary">
              From the Blog
            </p>
            <h2 className="mt-3 mb-10 font-heading text-[38px] font-semibold text-foreground">
              Latest Insights
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post: Post) => (
                <Link
                  key={post.slug}
                  href={`/${post.slug}`}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  {post.categories.length > 0 && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {post.categories[0]}
                    </span>
                  )}
                  <h3 className="mt-2 font-semibold leading-snug text-foreground group-hover:text-primary">
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

      {/* 9. Case Studies */}
      {caseStudies.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-primary">
              Results
            </p>
            <h2 className="mt-3 mb-10 font-heading text-[38px] font-semibold text-foreground">
              Case Studies
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.slice(0, 6).map((cs: Page) => (
                <Link
                  key={cs.slug}
                  href={`/${cs.full_path}`}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                    Case Study
                  </span>
                  <h3 className="mt-2 font-semibold leading-snug text-foreground group-hover:text-primary">
                    {cs.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. FAQ */}
      <FaqAccordion />

      {/* 11. CTA + Footer handled by layout */}
      <CtaSection />
      <SeoContent />
    </>
  )
}
