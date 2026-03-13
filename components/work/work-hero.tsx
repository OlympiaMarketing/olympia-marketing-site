"use client"

import { motion } from "framer-motion"

export function WorkHero() {
  return (
    <section className="relative overflow-hidden bg-background py-28 md:py-40">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(109,40,217,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 text-center md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-semibold uppercase tracking-[3px] text-primary"
        >
          Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading mx-auto mt-5 max-w-3xl text-4xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          Our Work
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          A sample of the brands we&rsquo;ve helped grow — from local businesses
          to national companies looking to elevate their digital presence.
        </motion.p>
      </div>
    </section>
  )
}
