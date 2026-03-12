"use client"

import { motion } from "framer-motion"

export function WorkHero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora-blob absolute -right-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,transparent_0%,var(--background)_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Portfolio
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          Some of Our Recent{" "}
          <span className="gradient-text">Work & Case Studies</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          The following is a small sample of some of our latest and best work. In some cases we&rsquo;ve worked with local businesses looking to market themselves, or national brands looking to up their game both online and offline.
        </motion.p>
      </div>
    </section>
  )
}
