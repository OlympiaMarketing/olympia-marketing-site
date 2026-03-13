"use client"

import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { motion } from "framer-motion"
import {
  TrendingUp,
  Users,
  BarChart3,
  Layers,
  Award,
  ShieldCheck,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ValueItem {
  icon: LucideIcon
  title: string
  description: string
}

const values: ValueItem[] = [
  {
    icon: TrendingUp,
    title: "100% Growth Guarantee",
    description:
      "We guarantee measurable growth or your money back. Our strategies are built to deliver real, trackable results from day one.",
  },
  {
    icon: Users,
    title: "Boutique Attention",
    description:
      "Limited client roster means senior-level attention on every project. You work directly with decision-makers, not junior staff.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Strategy",
    description:
      "Every decision is backed by analytics and market research. No guesswork, no gut feelings — just proven, measurable strategies.",
  },
  {
    icon: Layers,
    title: "Full-Service Capability",
    description:
      "SEO, PPC, web design, branding — all under one roof. One team, one vision, seamless execution across every channel.",
  },
  {
    icon: Award,
    title: "20+ Years Experience",
    description:
      "Battle-tested strategies refined across dozens of industries. We have seen what works and what does not, so you do not have to guess.",
  },
  {
    icon: ShieldCheck,
    title: "Money-Back Guarantee",
    description:
      "We stand behind our work with a full guarantee. If we do not deliver results, you do not pay. It is that simple.",
  },
]

export function CapabilitiesGrid() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[3px] text-primary">
            Our Values
          </p>
          <h2 className="font-heading mt-4 text-[42px] font-semibold text-foreground">
            What Makes Us Different
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            We are not your typical agency. Every aspect of how we operate is
            designed to deliver outsized results for our clients while providing
            a partnership experience that feels personal and accountable.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all group-hover:bg-primary/20">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
