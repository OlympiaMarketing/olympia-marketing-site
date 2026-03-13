"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, CheckCircle, ArrowRight, Globe, BarChart3, Shield } from "lucide-react"

interface CompetitiveAuditProps {
  industryName: string
}

export function CompetitiveAudit({ industryName }: CompetitiveAuditProps) {
  const [url, setUrl] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!url.trim()) return
    setSubmitted(true)
  }

  const auditItems = [
    { icon: Globe, label: "Website Performance & Speed Score" },
    { icon: Search, label: "SEO Health & Keyword Rankings" },
    { icon: BarChart3, label: "Competitor Comparison Report" },
    { icon: Shield, label: "Online Reputation Assessment" },
  ]

  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-card">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-primary/5" />
      </div>

      <div className="relative p-8 md:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Description */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Search className="h-5 w-5 text-primary" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Free Competitive Analysis
              </p>
            </div>
            <h3 className="mt-6 text-2xl font-bold text-foreground md:text-3xl">
              How Does Your {industryName} Business Stack Up Online?
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Get a comprehensive analysis of your online presence compared to your top local competitors.
              Our team will personally review your website, SEO, and digital footprint within 24 hours.
            </p>

            <div className="mt-8 space-y-4">
              {auditItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex items-center">
            <div className="w-full rounded-2xl border border-border bg-background/50 p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-6 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="mt-6 text-xl font-bold text-foreground">
                    Audit Requested!
                  </h4>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Our team will analyze <strong className="text-foreground">{url}</strong> and
                    send your personalized competitive audit within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setUrl("")
                    }}
                    className="mt-6 text-sm font-medium text-primary underline underline-offset-4 hover:brightness-110"
                  >
                    Submit another site
                  </button>
                </motion.div>
              ) : (
                <>
                  <h4 className="text-lg font-bold text-foreground">
                    Enter Your Website URL
                  </h4>
                  <p className="mt-2 text-xs text-muted-foreground">
                    100% free. No credit card required. Results delivered to your inbox.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="audit-url" className="sr-only">
                        Website URL
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                          id="audit-url"
                          type="url"
                          required
                          placeholder="https://yourwebsite.com"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          className="w-full rounded-xl border border-border bg-card py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-lg hover:shadow-primary/25"
                    >
                      Get My Free Audit
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                  <p className="mt-4 text-center text-[11px] text-muted-foreground">
                    By submitting, you agree to receive your audit results via email.
                    We will never spam you.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
