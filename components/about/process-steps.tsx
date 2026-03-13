"use client"

import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { motion } from "framer-motion"

interface TimelineEvent {
  year: string
  title: string
  description: string
}

const timeline: TimelineEvent[] = [
  {
    year: "2005",
    title: "The Beginning",
    description:
      "Founded with a simple belief: small businesses deserve the same caliber of marketing that Fortune 500 companies enjoy. Started with one client and a laptop.",
  },
  {
    year: "2010",
    title: "Going Digital-First",
    description:
      "Shifted fully to digital marketing before most agencies saw the wave coming. Invested early in SEO, PPC, and data-driven strategy while competitors clung to print.",
  },
  {
    year: "2016",
    title: "Full-Service Expansion",
    description:
      "Grew from a boutique digital shop into a full-service agency offering web design, branding, and multi-channel campaigns — all under one roof.",
  },
  {
    year: "2020",
    title: "The Growth Guarantee",
    description:
      "Introduced our 100% Growth Guarantee, putting our money where our mouth is. If we do not deliver measurable results, clients do not pay.",
  },
  {
    year: "2024",
    title: "Olympia Today",
    description:
      "Serving clients across dozens of industries with a senior team, battle-tested strategies, and a track record of delivering 10x growth in the first year.",
  },
]

export function ProcessSteps() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[3px] text-primary">
            Our Story
          </p>
          <h2 className="font-heading mt-4 text-[42px] font-semibold text-foreground">
            A Legendary Journey
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            From a one-person operation to a full-service agency trusted by
            businesses across the country, every milestone shaped who we are
            today.
          </p>
        </ScrollReveal>

        <div className="relative mt-20">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary/40 via-border to-transparent md:left-1/2 md:block md:-translate-x-px" />

          <div className="space-y-12 md:space-y-16">
            {timeline.map((event, i) => {
              const isLeft = i % 2 === 0
              return (
                <ScrollReveal
                  key={event.year}
                  delay={i * 0.12}
                  direction={isLeft ? "left" : "right"}
                >
                  <div className="relative md:flex md:items-start md:justify-between">
                    {/* Dot on line */}
                    <div className="absolute left-4 top-2 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2 md:block" />

                    {/* Left column */}
                    <div
                      className={`md:w-[45%] ${isLeft ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}
                    >
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                      >
                        <span className="text-[11px] font-semibold uppercase tracking-[3px] text-primary">
                          {event.year}
                        </span>
                        <h3 className="mt-2 text-xl font-bold text-foreground">
                          {event.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {event.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Right column (empty spacer) */}
                    <div
                      className={`hidden md:block md:w-[45%] ${isLeft ? "md:order-2" : ""}`}
                    />
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
