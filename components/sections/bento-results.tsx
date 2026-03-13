"use client"

import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Quote } from "lucide-react"

const servicePills = [
  "SEO",
  "PPC",
  "Web Design",
  "Branding",
  "Social Media",
  "Video",
  "Email",
  "AI",
  "Fractional CMO",
]

export function BentoResults() {
  return (
    <section style={{ background: "#0D0B1F" }} className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center">
            <p className="text-primary text-[11px] font-semibold uppercase tracking-[3px]">
              Results at a Glance
            </p>
            <h2 className="font-heading mt-4 text-[42px] font-semibold text-foreground">
              The Numbers Don&rsquo;t Lie
            </h2>
          </div>
        </ScrollReveal>

        {/* Row 1 */}
        <div className="mt-14 flex flex-col gap-5 lg:flex-row lg:h-[220px]">
          {/* Cell 1 — 100% Growth */}
          <ScrollReveal className="flex-1" delay={0}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-border bg-card p-8">
              <p className="font-heading text-6xl font-semibold text-accent-bright">
                100%
              </p>
              <p className="mt-3 text-sm font-semibold text-foreground">
                Average Client Growth
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Our clients consistently double their revenue within the first year of partnership.
              </p>
            </div>
          </ScrollReveal>

          {/* Cell 2 — Featured Project */}
          <ScrollReveal className="w-full lg:w-[440px] shrink-0" delay={0.1}>
            <div className="flex h-full items-center justify-center rounded-2xl bg-card overflow-hidden">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary/40"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
                <span className="text-xs font-medium">Featured Project</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Cell 3 — Quote */}
          <ScrollReveal className="flex-1" delay={0.2}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 p-8">
              <Quote className="mb-3 h-6 w-6 text-primary/60" />
              <p className="text-sm italic leading-relaxed text-foreground">
                &lsquo;Olympia transformed our online presence. We&rsquo;ve seen a 240% increase in qualified leads.&rsquo;
              </p>
              <p className="mt-4 text-xs font-semibold text-muted-foreground">
                &mdash; Dr. Sarah Chen, Physician Aesthetic Institute
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Row 2 */}
        <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:h-[200px]">
          {/* Cell 4 — 20+ Years */}
          <ScrollReveal className="w-full lg:w-[280px] shrink-0" delay={0.1}>
            <div className="flex h-full flex-col justify-center rounded-2xl bg-gradient-to-b from-primary to-[#6D28D9] p-8 shadow-lg shadow-primary/25">
              <p className="font-heading text-6xl font-semibold text-white">
                20+
              </p>
              <p className="mt-3 text-sm font-semibold text-white/90">
                Years of Excellence
              </p>
            </div>
          </ScrollReveal>

          {/* Cell 5 — Services Snapshot */}
          <ScrollReveal className="flex-1" delay={0.2}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-border bg-card p-8">
              <p className="text-sm font-semibold text-foreground">
                Services Snapshot
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {servicePills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs text-primary"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Cell 6 — 500+ Campaigns */}
          <ScrollReveal className="w-full lg:w-[280px] shrink-0" delay={0.3}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-border bg-card p-8">
              <p className="font-heading text-6xl font-semibold text-accent-bright">
                500+
              </p>
              <p className="mt-3 text-sm font-semibold text-foreground">
                Campaigns Launched
              </p>
              {/* Progress bar */}
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-[#6D28D9]"
                  style={{ width: "70%" }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
