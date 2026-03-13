import type { Metadata } from "next"
import { WorkHero } from "@/components/work/work-hero"
import { ProjectGrid } from "@/components/work/project-grid"
import { Testimonials } from "@/components/sections/testimonials"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Our Work & Case Studies | Marketing Portfolio",
  description:
    "See real results from Olympia Marketing. Case studies and portfolio across healthcare, beauty, real estate, and more in Southwest Florida.",
  openGraph: {
    title: "Our Work & Portfolio | Olympia Marketing",
    description:
      "See real results from Olympia Marketing. Case studies and portfolio across healthcare, beauty, real estate, and more in Southwest Florida.",
    type: "website",
  },
}

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <ProjectGrid />
      <Testimonials />
      <CtaSection />
    </>
  )
}
