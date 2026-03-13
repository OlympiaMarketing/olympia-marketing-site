"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { MagneticButton } from "@/components/animations/magnetic-button"
import {
  Send,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
  ChevronDown,
} from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "10001 Corkscrew Commons Drive, Suite 6061, Estero, FL 33928",
    href: "https://maps.google.com/?q=10001+Corkscrew+Commons+Drive+Suite+6061+Estero+FL+33928",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(239) 830-8021",
    href: "tel:2398308021",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@olympiamarketing.com",
    href: "mailto:support@olympiamarketing.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday - Friday, 9am - 5pm EST",
    href: null,
  },
]

const contactFaqs = [
  {
    question: "How quickly will I hear back after submitting the form?",
    answer:
      "We respond to all inquiries within 24 hours during business days. For urgent matters, call us directly at (239) 830-8021.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes. Every engagement starts with a complimentary strategy session where we review your goals, current marketing efforts, and identify growth opportunities.",
  },
  {
    question: "What information should I prepare before contacting you?",
    answer:
      "Having a general idea of your goals, current marketing budget, and timeline helps us make the most of our initial conversation. But don't worry if you're unsure — we'll guide you through everything.",
  },
  {
    question: "Can I visit your office in person?",
    answer:
      "Absolutely. Our office is located at 10001 Corkscrew Commons Drive, Suite 6061, Estero, FL 33928. We recommend scheduling an appointment so we can give you our full attention.",
  },
  {
    question: "Do you work with businesses outside of Southwest Florida?",
    answer:
      "Yes. While we're based in Estero, FL, we serve clients nationwide through virtual meetings and our digital-first approach to marketing.",
  },
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form_type: "contact",
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          company: formData.get("company"),
          message: formData.get("message"),
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error ?? "Something went wrong. Please try again.")
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const inputClasses =
    "w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"

  return (
    <>
      {/* Form + Info Section */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left — Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="glass overflow-hidden rounded-2xl p-8 md:p-10">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center py-12 text-center"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-heading mt-6 text-2xl font-semibold text-foreground">
                        Thank You!
                      </h3>
                      <p className="mt-3 max-w-sm text-base text-muted-foreground">
                        We&rsquo;ve received your message and will get back to you
                        within 24 hours.
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
                      <p className="text-[11px] font-semibold uppercase tracking-[3px] text-primary">
                        Send a Message
                      </p>
                      <h2 className="font-heading mt-3 text-[28px] font-semibold tracking-tight text-foreground md:text-[32px]">
                        Tell Us About Your Project
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Fill out the form below and we&rsquo;ll be in touch shortly.
                      </p>

                      <form
                        onSubmit={handleSubmit}
                        className="mt-8 flex flex-col gap-5"
                      >
                        <div className="grid gap-5 md:grid-cols-2">
                          <div>
                            <label
                              htmlFor="name"
                              className="mb-2 block text-sm font-medium text-foreground"
                            >
                              Full Name{" "}
                              <span className="text-primary">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              placeholder="John Doe"
                              className={inputClasses}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className="mb-2 block text-sm font-medium text-foreground"
                            >
                              Email <span className="text-primary">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              placeholder="john@company.com"
                              className={inputClasses}
                            />
                          </div>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                          <div>
                            <label
                              htmlFor="phone"
                              className="mb-2 block text-sm font-medium text-foreground"
                            >
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              placeholder="(239) 555-0123"
                              className={inputClasses}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="company"
                              className="mb-2 block text-sm font-medium text-foreground"
                            >
                              Company
                            </label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              placeholder="Your Company Name"
                              className={inputClasses}
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="mb-2 block text-sm font-medium text-foreground"
                          >
                            Message <span className="text-primary">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            placeholder="Tell us about your project and goals..."
                            className={`${inputClasses} resize-none`}
                          />
                        </div>

                        {error && (
                          <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                            {error}
                          </div>
                        )}

                        <MagneticButton className="self-start">
                          <button
                            type="submit"
                            disabled={submitting}
                            className="group inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-semibold text-white shadow-[0_4px_12px_#7C3AED50,0_12px_30px_#8B5CF640] transition-all hover:brightness-110 disabled:opacity-60 disabled:pointer-events-none"
                            style={{
                              background:
                                "linear-gradient(180deg, #8B5CF6 0%, #6D28D9 100%)",
                            }}
                          >
                            {submitting ? "Sending..." : "Send Message"}
                            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </button>
                        </MagneticButton>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Company Info */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.15}>
                <p className="text-[11px] font-semibold uppercase tracking-[3px] text-primary">
                  Contact Information
                </p>
                <h3 className="font-heading mt-3 text-[28px] font-semibold tracking-tight text-foreground md:text-[32px]">
                  Reach Us Directly
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Prefer a direct conversation? Here&rsquo;s how you can reach
                  us.
                </p>

                <div className="mt-8 flex flex-col gap-5">
                  {contactDetails.map((detail, i) => {
                    const content = (
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <detail.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            {detail.label}
                          </p>
                          <p className="mt-1 text-sm font-medium text-foreground">
                            {detail.value}
                          </p>
                        </div>
                      </div>
                    )
                    return detail.href ? (
                      <Link
                        key={i}
                        href={detail.href}
                        target={detail.href.startsWith("http") ? "_blank" : undefined}
                        rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group rounded-xl border border-border bg-card/50 p-4 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                      >
                        {content}
                      </Link>
                    ) : (
                      <div
                        key={i}
                        className="rounded-xl border border-border bg-card/50 p-4"
                      >
                        {content}
                      </div>
                    )
                  })}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl border border-border my-24">
              <iframe
                title="Olympia Marketing Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.123!2d-81.7384!3d26.4285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI1JzQyLjYiTiA4McKwNDQnMTguMiJX!5e0!3m2!1sen!2sus!4v1709000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Response Guarantee */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <ScrollReveal>
            <div
              className="flex flex-col items-center gap-5 rounded-2xl p-8 text-center sm:flex-row sm:text-left md:p-10"
              style={{
                background:
                  "linear-gradient(135deg, #7C3AED12 0%, #6D28D908 100%)",
                border: "1px solid hsl(var(--primary) / 0.15)",
              }}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                <MessageCircle className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  We Respond Within 24 Hours
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Every inquiry receives a personal response from our team —
                  no bots, no templates. We value your time and treat every
                  message with care.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative overflow-hidden border-t border-border py-24 md:py-32">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[500px]"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, hsl(var(--primary) / 0.08), transparent)",
          }}
        />

        <div className="relative mx-auto max-w-3xl px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[3px] text-primary">
                Frequently Asked Questions
              </p>
              <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-[42px] md:leading-[1.15]">
                Common Contact Questions
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-12 flex flex-col">
            {contactFaqs.map((faq, i) => (
              <ScrollReveal key={i} delay={Math.min(i * 0.05, 0.3)}>
                <div className="border-b border-border">
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === i ? null : i)
                    }
                    className="flex w-full items-center justify-between py-5 text-left text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    <span className="flex-1 pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === i
                        ? "max-h-40 pb-5 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{
          background: "linear-gradient(to bottom, #6D28D9, #1E1B3A)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(109,40,217,0.3) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-3xl px-4 text-center md:px-8">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
              Ready to Grow?
            </p>
            <h2 className="font-heading mt-4 text-[2.625rem] font-light leading-tight tracking-tight text-white text-balance md:text-5xl">
              Let&rsquo;s Build Something Extraordinary Together
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
              Our average client sees 10x growth in the first year. We move
              quickly, deliver results, and back it up with a 100% guarantee.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-lg hover:shadow-primary/25"
                >
                  Start Your Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.15}>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
                >
                  View Our Work
                </Link>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
