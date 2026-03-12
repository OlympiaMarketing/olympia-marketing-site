import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ClientMarquee } from "@/components/sections/client-marquee"

export const metadata: Metadata = {
  title: "Contact Olympia Marketing: Inquiries & Marketing Solutions",
  description:
    "Get in touch with Olympia Marketing for inquiries about our marketing and advertising services. Call (239) 308-4011 or fill out our contact form.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ClientMarquee />
    </>
  )
}
