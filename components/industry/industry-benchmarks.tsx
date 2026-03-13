"use client"

import { motion } from "framer-motion"
import { BarChart3 } from "lucide-react"
import type { IndustryBenchmark } from "./industry-config"

interface IndustryBenchmarksProps {
  benchmarks: IndustryBenchmark[]
  industryName: string
}

export function IndustryBenchmarks({ benchmarks, industryName }: IndustryBenchmarksProps) {
  return (
    <section className="relative">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
          <BarChart3 className="h-7 w-7 text-primary" />
        </div>
        <div>
          <h3 className="font-heading text-2xl font-bold text-foreground">
            {industryName} Industry Benchmarks
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Key metrics you should know to evaluate your marketing performance.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benchmarks.map((benchmark, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary/5 transition-all group-hover:bg-primary/10 group-hover:scale-125" />
            <p className="relative text-3xl font-bold gradient-text">{benchmark.value}</p>
            <p className="relative mt-2 text-sm font-semibold text-foreground">{benchmark.label}</p>
            <p className="relative mt-1 text-xs text-muted-foreground">{benchmark.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
