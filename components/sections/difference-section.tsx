"use client"

import { ShieldCheck, Users, BarChart3, Layers } from "lucide-react"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

const cards = [
  {
    icon: ShieldCheck,
    title: "100% Growth Guarantee",
    description:
      "We guarantee measurable growth or your money back. No other agency offers this level of confidence.",
  },
  {
    icon: Users,
    title: "Boutique Attention",
    description:
      "Limited client roster means you get senior-level attention on every project. No juniors, no outsourcing.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Strategy",
    description:
      "Every decision backed by analytics. Real-time dashboards and transparent monthly reporting.",
  },
  {
    icon: Layers,
    title: "Full-Service Capability",
    description:
      "SEO, PPC, web design, branding, video, social — all under one roof. One team, one vision, zero fragmentation.",
  },
]

export function DifferenceSection() {
  return (
    <section className="relative bg-background py-24 md:py-32">
      {/* Subtle purple radial gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center">
            <p className="text-primary text-[11px] font-semibold uppercase tracking-[3px]">
              Why Choose Us
            </p>
            <h2 className="font-heading mt-4 text-[42px] font-semibold text-foreground">
              The Olympia Difference
            </h2>
          </div>
        </ScrollReveal>

        {/* Card Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <div className="bg-card rounded-2xl border border-border p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                  <card.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-[17px] font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
