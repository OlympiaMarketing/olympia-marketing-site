"use client"

import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { ArrowRight } from "lucide-react"

const links = [
  { label: "Our Capabilities", href: "/about#capabilities" },
  { label: "Our History", href: "/about" },
  { label: "How we Work", href: "/about#process" },
  { label: "Our Founder", href: "/about#team" },
]

export function AboutPreview() {
  return (
    <section className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image side -- team photo collage from real site */}
          <ScrollReveal>
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card"
                  >
                    <Image
                      src={`/images/team-${n}.png`}
                      alt={`Olympia Marketing team member ${n}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 45vw, 25vw"
                    />
                  </div>
                ))}
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full bg-primary/90 px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-lg backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-foreground" />
                </span>
                20+ Years Experience
              </div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <div>
            <ScrollReveal delay={0.1}>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Who We Are
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                About Olympia Marketing
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Olympia Marketing is a full-service creative agency with a &ldquo;digital-first&rdquo; mindset. We work best with new and experienced well-funded businesses who are looking to grow quickly and powerfully using our suite of services and recommendations that have been battle tested. We work with clients in almost every industry developing top-of-the-line brands, websites, digital & physical marketing campaigns that drive real results. In many cases, we partner with our clients, ensuring that our success is completely linked with unique payment and retainer structures allowing us both to grow exponentially.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                  >
                    {link.label}
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
