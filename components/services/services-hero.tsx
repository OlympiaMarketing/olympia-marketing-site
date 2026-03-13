"use client"

import { motion } from "framer-motion"

export function ServicesHero() {
  return (
    <section className="relative flex h-[340px] items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/15 via-primary/5 to-background" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--primary)/0.08,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 text-center md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-semibold uppercase tracking-[3px] text-primary"
        >
          What We Do
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground"
        >
          Full-service marketing and advertising solutions designed to grow your business with measurable, data-driven results.
        </motion.p>
      </div>
    </section>
  )
}
