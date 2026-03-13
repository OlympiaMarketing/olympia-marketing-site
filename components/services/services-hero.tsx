"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

const PHONE_NUMBER = "2393084011"
const PHONE_DISPLAY = "(239) 308-4011"

const trustStats = [
  { value: "10x", label: "Avg. Growth" },
  { value: "2x", label: "Traffic in 90 Days" },
  { value: "100%", label: "Guarantee" },
]

export function ServicesHero() {
  return (
    <section className="relative flex min-h-[440px] items-center justify-center overflow-hidden py-20 md:py-28">
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

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-lg hover:shadow-primary/25"
          >
            Tell Us Your Goals — Free Strategy
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center gap-2 rounded-xl border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-primary/5"
          >
            <Phone className="h-4 w-4 text-primary" />
            {PHONE_DISPLAY}
          </Link>
        </motion.div>

        {/* Trust stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mx-auto mt-10 flex max-w-lg items-center justify-center divide-x divide-border"
        >
          {trustStats.map((stat) => (
            <div key={stat.label} className="px-6 text-center">
              <p className="text-lg font-bold text-primary">{stat.value}</p>
              <p className="text-[11px] font-medium text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
