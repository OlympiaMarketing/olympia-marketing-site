"use client"

import { motion } from "framer-motion"

export function BlogHero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora-blob absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,transparent_0%,var(--background)_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Blog & Insights
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          Marketing &{" "}
          <span className="gradient-text">Advertising</span> Updates
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Our marketing & advertising blog offers insight into our perspective in marketing &ndash; tips for your business, as well as actionable information for marketers at every level to up their game. With over 20 years in digital and conventional marketing we&rsquo;re one of the most seasoned teams when it comes to providing results in the 21st Century.
        </motion.p>
      </div>
    </section>
  )
}
