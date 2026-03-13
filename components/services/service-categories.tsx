"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import Link from "next/link"
import {
  TrendingUp,
  Monitor,
  Palette,
  Video,
  Share2,
  Briefcase,
  ArrowRight,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ServiceCategory {
  icon: LucideIcon
  title: string
  description: string
  subServices: string[]
  href: string
}

const categories: ServiceCategory[] = [
  {
    icon: TrendingUp,
    title: "Digital Marketing & PPC",
    description:
      "Strategic paid and organic campaigns across search and social platforms, optimized for maximum ROI.",
    subServices: [
      "SEO",
      "Local SEO",
      "PPC",
      "Email Marketing",
      "Social Media",
      "Search Engine Marketing",
    ],
    href: "/marketing-advertising-services/digital-marketing",
  },
  {
    icon: Monitor,
    title: "Website Design & Development",
    description:
      "Bespoke websites that blend stunning aesthetics with conversion-focused architecture.",
    subServices: [
      "Responsive Design",
      "WordPress",
      "Web Apps",
      "Hosting",
      "Fast Load Times",
      "Security",
    ],
    href: "/marketing-advertising-services/websites",
  },
  {
    icon: Palette,
    title: "Branding & Corporate Identity",
    description:
      "Distinctive brand identities that resonate with your audience and elevate your market positioning.",
    subServices: [
      "Logo Design",
      "Brand Messaging",
      "Corporate ID",
      "Print Collateral",
    ],
    href: "/marketing-advertising-services/branding-corporate-id",
  },
  {
    icon: Video,
    title: "Content & Video Production",
    description:
      "Compelling visual narratives and premium content that captivate audiences and build authority.",
    subServices: ["Blogging", "Video Production", "Content Strategy"],
    href: "/marketing-advertising-services/digital-marketing/content-marketing",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Curated social presence that builds engaged communities and drives meaningful conversations.",
    subServices: ["Social Media Management", "Community Building"],
    href: "/marketing-advertising-services/digital-marketing/social-media-marketing",
  },
  {
    icon: Briefcase,
    title: "Fractional CMO Services",
    description:
      "Executive-level marketing leadership on demand — strategic vision without the full-time commitment.",
    subServices: ["Executive Marketing Leadership", "Strategic Planning"],
    href: "/marketing-advertising-services/fractional-cmo",
  },
]

const differentiators = [
  {
    title: "Data-Driven Strategy",
    description:
      "Every decision backed by analytics and real performance data — not guesswork.",
  },
  {
    title: "Full-Service Integration",
    description:
      "All channels work together under one roof for maximum impact and consistent messaging.",
  },
  {
    title: "Transparent Reporting",
    description:
      "Clear dashboards and regular reporting so you always know exactly where your investment goes.",
  },
  {
    title: "Proven Track Record",
    description:
      "Battle-tested strategies across dozens of industries delivering measurable growth.",
  },
]

const industries = [
  "Medical & Healthcare",
  "Real Estate",
  "Home Services",
  "SaaS & Technology",
  "Beauty & Wellness",
  "Legal & Professional",
  "Restaurants & Hospitality",
  "Construction & Roofing",
  "Education",
  "E-Commerce",
  "Financial Services",
  "Automotive",
]

export function ServiceCategories() {
  return (
    <>
      {/* Service Category Cards */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[3px] text-primary">
                Our Expertise
              </p>
              <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-[42px] md:leading-tight">
                Full-Service Marketing Excellence
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We craft bespoke marketing strategies that elevate brands,
                combining data-driven insights with creative excellence to
                deliver measurable results.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.title} delay={i * 0.08}>
                <Link href={cat.href} className="group block h-full">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex h-full flex-col rounded-[20px] border border-border bg-card p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  >
                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <cat.icon className="h-6 w-6 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading mt-5 text-xl font-medium text-foreground">
                      {cat.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {cat.description}
                    </p>

                    {/* Sub-services tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {cat.subServices.map((sub) => (
                        <span
                          key={sub}
                          className="rounded-full bg-secondary/50 px-3 py-1 text-[11px] font-medium text-secondary-foreground"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>

                    {/* Learn more */}
                    <div className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[3px] text-primary">
                Why Olympia
              </p>
              <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-[42px] md:leading-tight">
                Why Choose Us
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-[20px] border border-border bg-card p-7">
                  <h3 className="font-heading text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Specialization */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[3px] text-primary">
                Industries We Serve
              </p>
              <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-[42px] md:leading-tight">
                Industry Specialization
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We bring deep expertise across a wide range of industries,
                tailoring strategies to the unique challenges and opportunities
                in each market.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((industry, i) => (
              <ScrollReveal key={industry} delay={i * 0.05}>
                <div className="rounded-[14px] border border-border bg-card px-5 py-4 text-center text-sm font-medium text-foreground transition-all hover:border-primary/25 hover:shadow-sm hover:shadow-primary/5">
                  {industry}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
