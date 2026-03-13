"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #09071A 0%, #1A1040 40%, #0D0B1F 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-semibold uppercase tracking-[3px] text-primary"
        >
          Who We Are
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading mx-auto mt-4 max-w-3xl text-[42px] font-semibold leading-[1.1] text-white md:text-6xl lg:text-7xl"
        >
          About Olympia Marketing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          Full-service creative agency with a digital-first mindset,
          delivering godlike marketing for small business.
        </motion.p>
      </div>
    </section>
  )
}
