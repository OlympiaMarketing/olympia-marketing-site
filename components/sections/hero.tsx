"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { ArrowRight, ChevronRight } from "lucide-react"

const slides = [
  {
    headline: "We help businesses scale quickly with targeted, measurable marketing.",
    sub: "Keep your restaurant constantly packed, your sales-team overwhelmed with qualified leads, and your bottom line breaking new records with our suite of services and unmatched talent and experience.",
  },
  {
    headline: "Increase Student Enrollment",
    sub: "We help beauty schools grow fast with a done-for-you marketing system that delivers real results \u2014 like a 6x boost in enrollment, $1M+ in monthly lead value, and 150+ students from a single launch. With top SEO rankings and a custom CRM that cuts lead response time by 50%, we make enrollment effortless.",
  },
  {
    headline: "Scale Your Online Presence",
    sub: "We help you quickly scale your on and offline marketing, close more deals, increase revenue and shatter profit records with our simple - straightforward - marketing & advertising.",
  },
  {
    headline: "Get More Customers Fast \u2014 2x Growth in 90 Days",
    sub: "Our average client sees an increase in traffic and leads of 2x within their first 90 days of working with us. What can your business do with 2x more clients or customers?",
  },
]

const charVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.012,
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

function AnimatedHeadline({ text }: { text: string }) {
  const chars = text.split("")
  return (
    <span aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={`${text}-${i}`}
          custom={i}
          variants={charVariants}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  )
}

export function Hero() {
  const [current, setCurrent] = useState(0)
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 800], [0, 150])
  const opacity = useTransform(scrollY, [0, 600], [1, 0])
  const imgScale = useTransform(scrollY, [0, 800], [1, 1.15])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative flex min-h-[100vh] items-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: imgScale }}>
        <Image
          src="/images/slider-4.jpg"
          alt="Olympia Marketing SWFL full-service creative agency"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/70" />
        {/* Gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        {/* Subtle teal tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
      </motion.div>

      {/* Floating aurora blobs for color depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora-blob absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/8" />
        <div
          className="aurora-blob absolute -right-24 top-1/3 h-[400px] w-[400px] rounded-full bg-primary/5"
          style={{ animationDelay: "-5s" }}
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative mx-auto max-w-7xl px-4 py-32 md:px-8 md:py-40"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Full-Service Creative Agency
          </span>
        </motion.div>

        <div className="relative min-h-[300px] md:min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h1 className="max-w-5xl text-4xl font-bold leading-[1.05] tracking-tight text-foreground text-balance md:text-6xl lg:text-7xl">
                <AnimatedHeadline text={slides[current].headline} />
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                {slides[current].sub}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <MagneticButton>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-lg hover:shadow-primary/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </MagneticButton>
          <MagneticButton strength={0.15}>
            <Link
              href="/marketing-advertising-services"
              className="group inline-flex items-center gap-2 rounded-lg border border-foreground/20 bg-foreground/5 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-foreground/10 hover:border-primary/30"
            >
              Learn More
              <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Slide indicators */}
        <div className="mt-16 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="group relative h-1.5 overflow-hidden rounded-full transition-all duration-500"
              style={{ width: i === current ? 48 : 16 }}
              aria-label={`Go to slide ${i + 1}`}
            >
              <span className="absolute inset-0 rounded-full bg-foreground/20" />
              {i === current && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 7, ease: "linear" }}
                  style={{ transformOrigin: "left" }}
                />
              )}
            </button>
          ))}
          <span className="ml-3 text-xs tabular-nums text-muted-foreground">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
