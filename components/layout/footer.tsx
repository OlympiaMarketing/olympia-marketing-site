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
    <footer className="bg-[var(--bg-surface)]">
      {/* Purple gradient divider */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #8B5CF6 50%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold tracking-wide text-foreground">
                OLYMPIA
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Godlike Marketing for Small Business. Full-service creative agency
              with a digital-first mindset.
            </p>

            {/* Contact info */}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="tel:2393084011"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" />
                (239) 308-4011
              </Link>
              <Link
                href="mailto:contact@olympiamarketing.com"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" />
                contact@olympiamarketing.com
              </Link>
              <span className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Estero, FL 33928
              </span>
            </div>

            {/* Social icons */}
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

          {/* Column 2: Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Industries
            </h3>
            <ul className="flex flex-col gap-2.5">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8"
          style={{
            borderTop:
              "1px solid transparent",
            borderImage:
              "linear-gradient(90deg, transparent 0%, #8B5CF6 50%, transparent 100%) 1",
          }}
        >
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Olympia Marketing. All rights
              reserved.
            </p>
            <Link
              href="/privacy-policy"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
