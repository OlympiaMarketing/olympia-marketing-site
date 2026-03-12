"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Zach's team and I have worked together for 5+ years, in that time Olympia has helped me transform my business from a simple 1-man show to a large brokerage. I can't recommend Olympia Marketing enough!",
    name: "Kevin Bartlett",
    title: "Owner - Knowledge Base Real Estate",
    stars: 5,
    image: null,
    initials: "KB",
  },
  {
    quote:
      "Olympia Marketing helped me optimize my squarespace site and implemented marketing (AdWords). I was unsure whether my business was going to take off - now I'm concerned I'm growing too quickly! We're all booked out.",
    name: "Laura Lorusso",
    title: "Owner - Skincare Academy",
    stars: 5,
    image: "/images/case-skincare-academy.png",
    initials: "LL",
  },
  {
    quote:
      "We engaged with Olympia in September 2023 with only a few changes to our website our traffic increased 100x, and Olympia has been instrumental in getting us to over $100k MRR in less than 6 months.",
    name: "Joe G.",
    title: "CEO - AI SAAS Company",
    stars: 5,
    image: "/images/stealthgpt-img.png",
    initials: "JG",
  },
  {
    quote:
      "We just launched a new website with Olympia Marketing. We've been unbelievably amazed by the results. We were growing organically through word of mouth, but in only 6 months since launch we've increased revenue 300%.",
    name: "Scott Kern",
    title: "Owner - Quality Service Company",
    stars: 5,
    image: "/images/testimonial-quality-service.png",
    initials: "SK",
  },
  {
    quote:
      "Our new website has performed phenomenally. Sitting down with the Olympia Marketing team was fantastic and they showed us how to use our website to market our company ongoing - for virtually FREE! We're excited for the future.",
    name: "Will Schwarz",
    title: "Co-Owner RetailMTS",
    stars: 5,
    image: "/images/case-retailmts.png",
    initials: "WS",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % testimonials.length), [])
  const prev = useCallback(() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length), [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [isPaused, next])

  return (
    <section className="relative py-24 md:py-32">
      {/* Accent line */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            What Our Customers Say About Us
          </h2>
        </ScrollReveal>

        <div
          className="relative mt-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-14">
            <div className="flex items-start justify-between">
              <Quote className="h-12 w-12 text-primary/20" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                className="mt-8"
              >
                <blockquote className="text-xl leading-relaxed text-foreground md:text-2xl">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>
                <div className="mt-10 flex items-center gap-4">
                  {testimonials[current].image ? (
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/20">
                      <Image
                        src={testimonials[current].image!}
                        alt={testimonials[current].name}
                        fill
                        className="object-contain"
                        sizes="56px"
                      />
                    </div>
                  ) : (
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-accent/20 text-lg font-bold text-foreground ring-2 ring-primary/20">
                      {testimonials[current].initials}
                    </div>
                  )}
                  <div>
                    <p className="text-base font-semibold text-foreground">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[current].title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-all hover:bg-secondary hover:border-primary/20"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-all hover:bg-secondary hover:border-primary/20"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === current ? "w-8 bg-primary" : "w-2 bg-muted hover:bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
