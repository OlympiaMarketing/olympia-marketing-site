import type { Metadata } from "next"
import { WorkHero } from "@/components/work/work-hero"
import { ProjectGrid } from "@/components/work/project-grid"
import { Testimonials } from "@/components/sections/testimonials"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Olympia Marketing Case Studies: Healthcare, Beauty & Real Estate",
  description:
    "Explore our portfolio of successful marketing campaigns and case studies across healthcare, beauty, real estate, and more in Southwest Florida.",
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
