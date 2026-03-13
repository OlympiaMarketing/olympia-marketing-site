import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Youtube, Twitter } from "lucide-react"

const serviceLinks = [
  { href: "/marketing-advertising-services", label: "All Services" },
  { href: "/marketing-advertising-services/digital-marketing/seo", label: "SEO" },
  { href: "/marketing-advertising-services/digital-marketing", label: "Digital Marketing & PPC" },
  { href: "/marketing-advertising-services/websites", label: "Website Design" },
  { href: "/marketing-advertising-services/digital-marketing/social-media-marketing", label: "Social Media Marketing" },
  { href: "/marketing-advertising-services/digital-marketing/email-marketing", label: "Email Marketing" },
  { href: "/marketing-advertising-services/branding-corporate-id", label: "Branding & Corporate ID" },
  { href: "/marketing-advertising-services/digital-marketing/content-marketing", label: "Content Marketing" },
]

const industryLinks = [
  { href: "/med-spa", label: "Medical Spa" },
  { href: "/industries/beauty-esthetician-marketing-advertising", label: "Salon & Beauty" },
  { href: "/industries/physical-therapy-marketing-advertising", label: "Physical Therapists" },
  { href: "/industries/real-estate-marketing-advertising", label: "Real Estate" },
  { href: "/industries/home-service-businesses", label: "Home Services" },
  { href: "/industries/builders-developers", label: "Builders & Developers" },
]

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/work", label: "Our Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/schedule", label: "Schedule a Call" },
  { href: "/privacy-policy", label: "Privacy Policy" },
]

const socialLinks = [
  {
    href: "https://www.facebook.com/olympiamarketingfl/",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://www.youtube.com/@OlympiaMarketing",
    label: "YouTube",
    icon: Youtube,
  },
  {
    href: "https://x.com/olympiamarket",
    label: "X",
    icon: Twitter,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-olympiamarketing.png"
                alt="Olympia Marketing"
                width={180}
                height={72}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Full-Service Creative Agency with a digital-first mindset. We help businesses scale quickly with targeted, measurable marketing.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="tel:2393084011"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 text-primary" />
                (239) 308-4011
              </Link>
              <Link
                href="mailto:contact@olympiamarketing.com"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-primary" />
                contact@olympiamarketing.com
              </Link>
              <span className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Estero, FL 33928
              </span>
            </div>

            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Industries
            </h3>
            <ul className="flex flex-col gap-2.5">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                Ready to Grow?
              </h3>
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-8 md:flex-row md:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Olympia Marketing. All rights reserved.
          </p>
          <p className="max-w-2xl text-center text-[10px] leading-relaxed text-muted-foreground/60 md:text-right">
            marketing agency olympia, fort myers digital marketing, digital marketing agency fort myers, fort myers marketing agency, advertising agencies in fort myers, marketing agency fort myers, olympia marketing, swfl marketing agency, fort myers web design
          </p>
        </div>
      </div>
    </footer>
  )
}
