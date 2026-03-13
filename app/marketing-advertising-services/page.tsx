import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServiceCategories } from "@/components/services/service-categories"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Marketing & Advertising Services | Estero, FL",
  description:
    "SEO, PPC, web design, social media, branding, video, and fractional CMO services. Full-service marketing agency in Estero, Southwest Florida.",
  openGraph: {
    title: "Marketing & Advertising Services | Olympia Marketing",
    description:
      "SEO, PPC, web design, social media, branding, video, and fractional CMO services. Full-service marketing agency in Estero, Southwest Florida.",
    type: "website",
  },
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceCategories />
      <CtaSection />
    </>
  )
}
