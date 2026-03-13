"use client"

import { motion } from "framer-motion"

export function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-[#0f0b1a] py-24 md:py-32">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(109,40,217,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-semibold uppercase tracking-[3px] text-primary"
        >
          Blog
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          Marketing Insights &amp; Education
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg"
        >
          Expert perspectives on marketing, advertising, and business growth
          from the Olympia Marketing team.
        </motion.p>
      </div>
    </section>
  )
}
