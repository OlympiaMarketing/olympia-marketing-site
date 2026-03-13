"use client"

import Link from "next/link"
import {
  AlertTriangle,
  CheckCircle,
  Star,
  ArrowRight,
  TrendingUp,
  Zap,
  Target,
  Shield,
  BarChart3,
  Users,
} from "lucide-react"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

// ---------------------------------------------------------------------------
// Icons pool for cards — cycles through so each card gets a distinct icon
// ---------------------------------------------------------------------------
const PAIN_ICONS = [AlertTriangle, Zap, Target, Shield] as const
const SERVICE_ICONS = [CheckCircle, TrendingUp, BarChart3, Users, Zap, Target] as const

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------
interface IndustryTemplateProps {
  industryName: string
  industrySlug: string
  hero: {
    badge: string
    headline: string
    subtitle: string
  }
  painPoints: {
    headline: string
    subtitle: string
    items: Array<{ title: string; description: string }>
  }
  services: {
    headline: string
    subtitle: string
    items: Array<{ title: string; description: string }>
  }
  results: {
    headline: string
    subtitle: string
    metrics: Array<{ value: string; label: string; description: string }>
  }
  beforeAfter: {
    headline: string
    before: string[]
    after: string[]
  }
  testimonial: {
    quote: string
    author: string
    role: string
    stars: number
  }
  faqs: Array<{ question: string; answer: string }>
  ctaHeadline: string
  ctaSubtext: string
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function IndustryTemplate({
  painPoints,
  services,
  results,
  beforeAfter,
  testimonial,
  faqs,
  ctaHeadline,
  ctaSubtext,
}: IndustryTemplateProps) {
  return (
    <>
      {/* ----------------------------------------------------------------- */}
      {/* 1. Pain Points                                                    */}
      {/* ----------------------------------------------------------------- */}
      <section style={{ background: "#0D0B1F" }} className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-xs font-semibold text-primary">
                <AlertTriangle className="h-3.5 w-3.5" />
                Common Challenges
              </span>
              <h2 className="mt-6 font-heading text-[40px] font-bold leading-tight text-foreground">
                {painPoints.headline}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {painPoints.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {painPoints.items.map((item, i) => {
              const Icon = PAIN_ICONS[i % PAIN_ICONS.length]
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="rounded-xl border border-border bg-card p-7">
                    <Icon className="h-6 w-6 text-red-500" />
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 2. Services                                                       */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[3px] text-primary">
                What We Do
              </p>
              <h2 className="mt-4 font-heading text-[40px] font-bold leading-tight text-foreground">
                {services.headline}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {services.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.items.map((item, i) => {
              const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length]
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="rounded-xl border border-border bg-card p-7">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 3. Results Showcase                                               */}
      {/* ----------------------------------------------------------------- */}
      <section style={{ background: "#0D0B1F" }} className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[3px] text-primary">
                Proven Results
              </p>
              <h2 className="mt-4 font-heading text-[40px] font-bold leading-tight text-foreground">
                {results.headline}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {results.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {results.metrics.map((metric, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="rounded-xl border border-border bg-card p-7 text-center">
                  <p className="font-heading text-5xl font-bold text-primary">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-foreground">
                    {metric.label}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {metric.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 4. Before / After                                                 */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[3px] text-primary">
                The Transformation
              </p>
              <h2 className="mt-4 font-heading text-[40px] font-bold leading-tight text-foreground">
                {beforeAfter.headline}
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {/* Before */}
            <ScrollReveal delay={0}>
              <div className="rounded-xl border bg-card p-7" style={{ borderColor: "#EF444430" }}>
                <h3 className="text-lg font-semibold text-red-400">
                  Before Olympia
                </h3>
                <ul className="mt-5 space-y-3">
                  {beforeAfter.before.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* After */}
            <ScrollReveal delay={0.15}>
              <div className="rounded-xl border bg-card p-7" style={{ borderColor: "#22C55E30" }}>
                <h3 className="text-lg font-semibold text-green-400">
                  After Olympia
                </h3>
                <ul className="mt-5 space-y-3">
                  {beforeAfter.after.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 5. Testimonial                                                    */}
      {/* ----------------------------------------------------------------- */}
      <section style={{ background: "#0D0B1F" }} className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <p className="font-heading text-6xl text-primary/30">&ldquo;</p>
            <blockquote className="mt-2 font-heading text-2xl font-medium italic leading-relaxed text-foreground">
              {testimonial.quote}
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-1">
              {Array.from({ length: testimonial.stars }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="mt-4 text-base font-semibold text-foreground">
              {testimonial.author}
            </p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 6. FAQ                                                            */}
      {/* ----------------------------------------------------------------- */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[3px] text-primary">
                FAQ
              </p>
              <h2 className="mt-4 font-heading text-[40px] font-bold leading-tight text-foreground">
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-12">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <AccordionItem
                    value={`faq-${i}`}
                    className="rounded-xl border border-border bg-card px-6"
                  >
                    <AccordionTrigger className="text-base font-semibold text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* 7. Final CTA                                                      */}
      {/* ----------------------------------------------------------------- */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(135deg, #6D28D9 0%, #1E1B3A 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-[40px] font-bold leading-tight text-white">
              {ctaHeadline}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              {ctaSubtext}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-[#6D28D9] transition-all hover:shadow-lg hover:shadow-white/20"
              >
                Get Your Free Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="tel:2393084011"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
              >
                (239) 308-4011
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5" />
                No contracts
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5" />
                Free audit included
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5" />
                Results in 90 days
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
