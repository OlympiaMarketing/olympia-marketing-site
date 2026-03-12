import type { Metadata } from "next"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Olympia Marketing Blog | Latest Insights & Tips For Success",
  description:
    "Our marketing & advertising blog offers insight into our perspective in marketing, tips for your business, as well as actionable information for marketers at every level.",
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
      <CtaSection />
    </>
  )
}
