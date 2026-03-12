import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { ProcessSteps } from "@/components/about/process-steps"
import { TeamGrid } from "@/components/about/team-grid"
import { CapabilitiesGrid } from "@/components/about/capabilities-grid"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "About Olympia Marketing",
  description:
    "Olympia Marketing is a full-service creative agency with a digital-first mindset. Learn about our team, process, and capabilities.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ProcessSteps />
      <TeamGrid />
      <CapabilitiesGrid />
      <CtaSection />
    </>
  )
}
