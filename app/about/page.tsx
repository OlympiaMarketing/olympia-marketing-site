import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { ProcessSteps } from "@/components/about/process-steps"
import { TeamGrid } from "@/components/about/team-grid"
import { CapabilitiesGrid } from "@/components/about/capabilities-grid"
import { CtaSection } from "@/components/sections/cta-section"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

export const metadata: Metadata = {
  title: "About Us | Full-Service Marketing Agency in Estero, FL",
  description:
    "Meet the Olympia Marketing team. Full-service agency in Estero, FL helping ambitious businesses dominate with SEO, PPC, web design, and branding.",
  openGraph: {
    title: "About Olympia Marketing | Full-Service Agency in Estero, FL",
    description:
      "Meet the Olympia Marketing team. Full-service agency in Estero, FL helping ambitious businesses dominate with SEO, PPC, web design, and branding.",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      {/* Strategic Approach — Big Picture */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <p className="text-[11px] font-semibold uppercase tracking-[3px] text-primary">
              Strategic Approach
            </p>
            <h2 className="font-heading mt-4 max-w-4xl text-[42px] font-semibold leading-tight text-foreground md:text-5xl">
              We Partner with Ambitious Businesses to Build Brands That Dominate
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Olympia Marketing is a full-service creative agency with a
              digital-first mindset. We work best with new and experienced
              well-funded businesses who are looking to grow quickly and
              powerfully using our suite of services and recommendations that
              have been battle tested. We work with clients in almost every
              industry developing top-of-the-line brands, websites, digital and
              physical marketing campaigns that drive real results. In many
              cases, we partner with our clients, ensuring that our success is
              completely linked with unique payment and retainer structures
              allowing us both to grow exponentially.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CapabilitiesGrid />
      <TeamGrid />
      <ProcessSteps />
      <CtaSection />
    </>
  )
}
