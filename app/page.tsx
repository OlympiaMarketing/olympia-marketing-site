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
import { BlogPreview } from "@/components/sections/blog-preview"

export default function HomePage() {
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
      <BlogPreview />
      <FaqAccordion />
      <CtaSection />
      <SeoContent />
    </>
  )
}
