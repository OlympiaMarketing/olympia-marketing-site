import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | Free Strategy Call | (239) 308-4011",
  description:
    "Contact Olympia Marketing for a free strategy call. Call (239) 308-4011 or fill out our form. Full-service marketing agency in Estero, FL.",
  openGraph: {
    title: "Contact Olympia Marketing | Free Strategy Call",
    description:
      "Contact Olympia Marketing for a free strategy call. Call (239) 308-4011 or fill out our form. Full-service marketing agency in Estero, FL.",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  )
}
