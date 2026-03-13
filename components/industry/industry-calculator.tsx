"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Calculator, TrendingUp, DollarSign, Target } from "lucide-react"
import type { CalculatorConfig } from "./industry-config"

interface IndustryCalculatorProps {
  config: CalculatorConfig
  industryName: string
}

function formatCurrency(value: number): string {
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(1)}M`
  }
  if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(0)}K`
  }
  return `$${value.toLocaleString()}`
}

export function IndustryCalculator({ config, industryName }: IndustryCalculatorProps) {
  const [units, setUnits] = useState(config.defaultValue)

  const results = useMemo(() => {
    const monthlyRevenue = units * config.revenuePerUnit
    const annualRevenue = monthlyRevenue * 12
    const roi = ((monthlyRevenue - config.monthlySpend) / config.monthlySpend) * 100
    const leadsNeeded = Math.ceil(units / config.conversionRate)
    return { monthlyRevenue, annualRevenue, roi, leadsNeeded }
  }, [units, config])

  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-card">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-primary/5" />
        <div className="absolute -left-10 bottom-0 h-[200px] w-[200px] rounded-full bg-primary/3" />
      </div>

      <div className="relative p-8 md:p-12">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
            <Calculator className="h-7 w-7 text-primary" />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground">
              {config.label}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              See what marketing could generate for your {industryName.toLowerCase()} business.
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <label
              htmlFor="industry-calc-slider"
              className="text-sm font-semibold text-foreground"
            >
              {config.sliderLabel}
            </label>
            <span className="text-2xl font-bold gradient-text">{units}</span>
          </div>
          <input
            id="industry-calc-slider"
            type="range"
            min={config.min}
            max={config.max}
            step={config.step}
            value={units}
            onChange={(e) => setUnits(Number(e.target.value))}
            className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-border accent-[#8B5CF6]"
          />
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>{config.min}</span>
            <span>{config.max}</span>
          </div>
        </div>

        {/* Results grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ResultCard
            icon={DollarSign}
            label="Monthly Revenue"
            value={formatCurrency(results.monthlyRevenue)}
            delay={0}
          />
          <ResultCard
            icon={TrendingUp}
            label="Annual Revenue"
            value={formatCurrency(results.annualRevenue)}
            delay={0.1}
          />
          <ResultCard
            icon={Target}
            label="Leads Needed"
            value={`${results.leadsNeeded}/mo`}
            delay={0.2}
          />
          <ResultCard
            icon={Calculator}
            label="Marketing ROI"
            value={`${Math.round(results.roi)}%`}
            delay={0.3}
            highlight
          />
        </div>

        {/* Assumption footnote */}
        <p className="mt-6 text-xs text-muted-foreground">
          Based on {formatCurrency(config.revenuePerUnit)} average per {config.unitLabel},{" "}
          {(config.conversionRate * 100).toFixed(0)}% lead-to-customer conversion rate, and{" "}
          {formatCurrency(config.monthlySpend)}/mo marketing investment. Your actual results may vary.
        </p>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Result card sub-component
// ---------------------------------------------------------------------------

interface ResultCardProps {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  delay: number
  highlight?: boolean
}

function ResultCard({ icon: Icon, label, value, delay, highlight }: ResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-2xl border p-5 transition-all ${
        highlight
          ? "border-primary/30 bg-primary/5"
          : "border-border bg-background/50"
      }`}
    >
      <Icon className={`h-5 w-5 ${highlight ? "text-primary" : "text-muted-foreground"}`} />
      <p className="mt-3 text-2xl font-bold text-foreground">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </motion.div>
  )
}
