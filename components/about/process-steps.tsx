"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Crosshair, Compass, Rocket, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: Crosshair,
    number: "01",
    title: "Discover",
    description:
      "We take the time to understand your business, industry, competitors, and goals. Through in-depth discovery sessions, we develop a comprehensive understanding of what success looks like for you and identify the most impactful opportunities for growth.",
  },
  {
    icon: Compass,
    number: "02",
    title: "Align",
    description:
      "We align on strategy, ensuring that every recommendation and action item is tailored to your unique business objectives. Our team works collaboratively with yours to create a roadmap that balances quick wins with long-term growth strategies.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Execute",
    description:
      "This is where the magic happens. Our team of designers, developers, marketers, and strategists bring the plan to life. From brand-new websites to multi-channel marketing campaigns, we move fast and deliver quality at every step.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Monitor & Adjust",
    description:
      "Marketing is never set-it-and-forget-it. We continuously monitor performance, analyze data, and make strategic adjustments to optimize results. Regular reporting keeps you informed, and our proactive approach ensures we stay ahead of market shifts.",
  },
]

export function ProcessSteps() {
  return (
    <section id="process" className="relative border-t border-border py-24 md:py-32">
      {/* Connecting line */}
      <div className="pointer-events-none absolute left-1/2 top-24 hidden h-[calc(100%-12rem)] w-px -translate-x-1/2 bg-gradient-to-b from-primary/30 via-border to-transparent lg:block" />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Our Process
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Goals
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            At Olympia Marketing, our goals include understanding your problems, aligning on the best possible solutions, executing at a high level and continuously measuring our success and optimizing our strategies.
          </p>
        </ScrollReveal>

        <div className="relative mt-20 grid gap-12 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass group relative rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Step number */}
                <span className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  {step.number}
                </span>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
