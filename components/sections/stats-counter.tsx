"use client"

import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { AnimatedCounter } from "@/components/animations/animated-counter"
import { TrendingUp, Search, Zap, Shield } from "lucide-react"

const stats = [
  { target: 10, suffix: "x", label: "Average Growth First Year", description: "Our clients consistently see massive ROI" },
  { target: 2, suffix: "x", label: "Traffic in 90 Days", description: "Rapid results from day one" },
  { target: 100, suffix: "%", label: "Money-Back Guarantee", description: "We stand behind our work" },
]

const features = [
  {
    icon: TrendingUp,
    title: "Ongoing Marketing & Advertising That Performs",
    description: "Campaigns built to scale and drive consistent results month after month.",
  },
  {
    icon: Search,
    title: "Full SEO Optimization",
    description: "Comprehensive on-page and off-page SEO to dominate search rankings.",
  },
  {
    icon: Zap,
    title: "Fast, High-Quality Websites",
    description: "Lightning-fast websites designed to convert visitors into customers.",
  },
  {
    icon: Shield,
    title: "100% Performance Guarantee",
    description: "We back every engagement with measurable KPIs and a full guarantee.",
  },
]

export function StatsCounter() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 md:py-32">
      {/* Background accents - richer visual treatment */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-transparent" />
        <div className="aurora-blob absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-primary/6" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[3px] text-primary">
            Proven Results
          </p>
          <h2 className="mt-3 max-w-3xl font-heading text-[42px] font-semibold text-foreground">
            Our Average Client Sees 10x Growth in the First Year
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            We move quickly at Olympia Marketing &ndash; we&rsquo;re generally completing websites within a week, with active marketing campaigns launched and bringing in business in about the same amount of time. By the end of the year our average client sees a 10x return on our services. We&rsquo;re even willing to back it up with a 100% guarantee!
          </p>
        </ScrollReveal>

        {/* Stats grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="glass group relative overflow-hidden rounded-2xl p-8 text-center transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                <div className="pointer-events-none absolute -right-4 -top-4 h-32 w-32 rounded-full bg-primary/5 transition-all group-hover:bg-primary/10 group-hover:scale-125" />
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  className="relative text-5xl font-bold gradient-text md:text-7xl"
                />
                <p className="relative mt-3 text-sm font-semibold text-foreground">
                  {stat.label}
                </p>
                <p className="relative mt-1 text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Features */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group flex flex-col items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {feature.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
