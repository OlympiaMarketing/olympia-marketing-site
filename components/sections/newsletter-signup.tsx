"use client"

import { useState } from "react"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { ArrowRight, Mail } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")

  return (
    <section
      className="border-y border-border"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, #8B5CF610 50%, transparent 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <ScrollReveal>
          <div className="flex flex-col items-start gap-12 md:flex-row md:items-center md:justify-between">
            {/* Left */}
            <div className="max-w-lg space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[3px] text-primary">
                Stay Ahead
              </p>
              <h3 className="font-heading text-3xl font-semibold text-foreground">
                Marketing Insights, Delivered
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Join 2,000+ business owners getting weekly strategies on SEO,
                paid media, and conversion optimization.
              </p>
            </div>

            {/* Right — email form */}
            <div className="w-full max-w-md space-y-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setEmail("")
                }}
                className="flex gap-3"
              >
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-lg border border-border bg-card py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
                >
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              <p className="text-xs text-muted-foreground">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
