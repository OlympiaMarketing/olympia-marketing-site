"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <ScrollReveal>
          <div className="glass overflow-hidden rounded-3xl p-8 md:p-12">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-12 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-foreground">
                  Thank You!
                </h3>
                <p className="mt-3 text-base text-muted-foreground">
                  We&rsquo;ve received your message and will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-primary underline underline-offset-4 hover:brightness-110"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-foreground">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form below and we&rsquo;ll be in touch shortly.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@company.com"
                        className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(239) 555-0123"
                      className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-foreground">
                      What are you interested in?
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select a service...</option>
                      <option value="web-design">Website Design & Development</option>
                      <option value="seo">SEO</option>
                      <option value="ppc">PPC / Paid Advertising</option>
                      <option value="social">Social Media Marketing</option>
                      <option value="email">Email Marketing</option>
                      <option value="branding">Branding & Corporate ID</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full resize-none rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <MagneticButton className="self-start">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-lg hover:shadow-primary/20"
                    >
                      Send Message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </MagneticButton>
                </form>
              </>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
