import Image from "next/image"
import Link from "next/link"
import { Phone, Mail } from "lucide-react"

const serviceLinks = [
  { href: "/marketing-advertising-services", label: "All Services" },
  { href: "/marketing-advertising-services#seo", label: "SEO" },
  { href: "/marketing-advertising-services#sem", label: "Search Engine Marketing" },
  { href: "/marketing-advertising-services#social", label: "Social Media Marketing" },
  { href: "/marketing-advertising-services#email", label: "Email Marketing" },
]

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/work", label: "Our Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-olympiamarketing.png"
                alt="Olympia Marketing"
                width={180}
                height={72}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
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
                href="mailto:info@olympiamarketing.com"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-primary" />
                info@olympiamarketing.com
              </Link>
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
          </div>

          {/* CTA */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Ready to Grow?
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Our average client sees 10x growth in the first year. Let us show you what we can do for your business.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Get Started Today
            </Link>
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
