import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServiceCategories } from "@/components/services/service-categories"
import { SeoServices } from "@/components/services/seo-services"
import { SemServices } from "@/components/services/sem-services"
import { SocialMediaServices } from "@/components/services/social-media-services"
import { EmailServices } from "@/components/services/email-services"
import { CtaSection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "SWFL Fort Myers & Naples Marketing & Advertising Services",
  description:
    "Olympia Marketing offers a full suite of digital and conventional marketing services including SEO, PPC, web design, social media marketing, email marketing, and more in Southwest Florida.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceCategories />
      <SeoServices />
      <SemServices />
      <SocialMediaServices />
      <EmailServices />
      <CtaSection />
    </>
  )
}
