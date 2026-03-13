"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Phone, FileText, Clock, CheckCircle } from "lucide-react"
import type { IndustryCTAConfig } from "./industry-config"

interface IndustryCTAProps {
  config: IndustryCTAConfig
  painPoints: string[]
  industryName: string
}

export function IndustryCTA({ config, painPoints, industryName }: IndustryCTAProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-primary/3">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-primary/8" />
        <div className="absolute -left-20 bottom-0 h-[250px] w-[250px] rounded-full bg-primary/5" />
        <div className="absolute right-0 top-0 h-px w-1/2 bg-gradient-to-l from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-2 lg:gap-16">
        {/* Left column - Pain points and value prop */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[3px] text-primary">
            Built for {industryName} Businesses
          </p>
          <h3 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
            {config.headline}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {config.subheadline}
          </p>

          {/* Pain points */}
          <div className="mt-8 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Sound familiar?
            </p>
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm text-foreground">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right column - CTA cards */}
        <div className="flex flex-col gap-6">
          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-primary/20 bg-card p-8 shadow-lg shadow-primary/5"
          >
            <h4 className="text-lg font-bold text-foreground">
              Schedule Your Free Strategy Call
            </h4>
            <p className="mt-2 text-sm text-muted-foreground">
              30 minutes. No obligation. Walk away with a custom growth roadmap for your {industryName.toLowerCase()} business.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-lg hover:shadow-primary/25"
              >
                {config.ctaLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="tel:2393084011"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-background hover:border-primary/20"
              >
                <Phone className="h-4 w-4 text-primary" />
                (239) 308-4011
              </Link>
            </div>
          </motion.div>

          {/* Lead magnet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{config.leadMagnetTitle}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{config.leadMagnetDescription}</p>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Request your copy
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Urgency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-start gap-3 rounded-xl border border-accent/20 bg-accent/5 px-5 py-4"
          >
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <p className="text-xs font-medium text-foreground">{config.urgencyMessage}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
