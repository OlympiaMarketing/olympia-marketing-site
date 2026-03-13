"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { ArrowRight, Award, TrendingUp, Users, ShieldCheck } from "lucide-react"

interface HeroSlide {
  badge: string
  headline: string
  subheadline: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

const heroSlides: HeroSlide[] = [
  {
    badge: "Full-Service Creative Agency",
    headline: "Godlike Marketing\nfor Small Business",
    subheadline:
      "A full-service creative agency delivering strategy, design, and digital experiences that guarantee 100% growth for ambitious brands.",
    primaryCta: { label: "Scale Your Business", href: "/contact" },
    secondaryCta: { label: "View Our Work", href: "/work" },
  },
  {
    badge: "#1 Salon Marketing Agency in Southwest Florida",
    headline: "Dominate the\nBeauty Industry",
    subheadline:
      "We fill your appointment books, boost your online reputation, and turn your salon into the most talked-about destination in town.",
    primaryCta: { label: "Learn More", href: "/industries/beauty-esthetician-marketing-advertising" },
    secondaryCta: { label: "Get Free Audit", href: "/contact" },
  },
  {
    badge: "Medical Spa Marketing Specialists",
    headline: "Elevate Your\nMedical Spa Practice",
    subheadline:
      "We help medical spas attract high-value patients, build trust through compliant marketing, and scale revenue with proven digital strategies.",
    primaryCta: { label: "Learn More", href: "/med-spa" },
    secondaryCta: { label: "Get Free Audit", href: "/contact" },
  },
  {
    badge: "Real Estate Marketing Specialists",
    headline: "Close More Deals.\nDominate Your Market.",
    subheadline:
      "Strategic digital marketing exclusively for real estate professionals. Generate qualified leads, dominate local search, and build an unstoppable brand presence.",
    primaryCta: { label: "Learn More", href: "/industries/real-estate-marketing-advertising" },
    secondaryCta: { label: "Get Free Audit", href: "/contact" },
  },
  {
    badge: "Home Services Marketing",
    headline: "Fill Your Service\nCalendar Year-Round",
    subheadline:
      "Olympia Marketing helps HVAC, plumbing, electrical, and roofing companies dominate local search, generate quality leads, and grow revenue — even in the off-season.",
    primaryCta: { label: "Learn More", href: "/industries/home-service-businesses" },
    secondaryCta: { label: "Get Free Audit", href: "/contact" },
  },
  {
    badge: "Physical Therapy Marketing Experts",
    headline: "Grow Your PT Practice\nWith Patients Who Need You",
    subheadline:
      "Olympia Marketing specializes in patient acquisition strategies that fill your schedule with direct access patients, strengthen physician referral networks, and build lasting community trust.",
    primaryCta: { label: "Learn More", href: "/industries/physical-therapy-marketing-advertising" },
    secondaryCta: { label: "Get Free Audit", href: "/contact" },
  },
  {
    badge: "Beauty School Marketing",
    headline: "Fill Every Seat in\nYour Beauty School",
    subheadline:
      "Proven marketing strategies that drive enrollment for cosmetology schools, esthetician programs, and beauty academies. We've helped schools increase applications by 175% on average.",
    primaryCta: { label: "Learn More", href: "/industries/beauty-school-marketing" },
    secondaryCta: { label: "Get Free Audit", href: "/contact" },
  },
]

const AUTO_ADVANCE_MS = 6000

const trustIndicators = [
  { icon: Award, label: "20+ Years Experience" },
  { icon: TrendingUp, label: "100% Growth Guarantee" },
  { icon: Users, label: "100+ Clients Served" },
  { icon: ShieldCheck, label: "Money-Back Guarantee" },
]

const slideVariants = {
  enter: { opacity: 0, y: 24 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
}

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 800], [0, 150])
  const opacity = useTransform(scrollY, [0, 600], [1, 0])
  const imgScale = useTransform(scrollY, [0, 800], [1, 1.15])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, AUTO_ADVANCE_MS)

    return () => clearInterval(interval)
  }, [currentSlide])

  const slide = heroSlides[currentSlide]

  return (
    <section className="relative flex h-[800px] items-center overflow-hidden">
      {/* Background gradient with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: bgY,
          scale: imgScale,
          background: "linear-gradient(135deg, #09071A 0%, #1A1040 40%, #0D0B1F 100%)",
        }}
      />

      {/* Gradient overlays matching Pencil design */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, #0A0A14F0 15%, #0A0A14CC 50%, #0A0A1400 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 120% 120% at 50% 40%, #7C3AED18 0%, transparent 70%)",
        }}
      />

      {/* Purple glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-[100px] left-[500px] h-[300px] w-[440px] rounded-full opacity-70"
          style={{
            background: "radial-gradient(ellipse, #7C3AED30 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute left-[-100px] top-[300px] h-[400px] w-[400px] rounded-full opacity-50"
          style={{
            background: "radial-gradient(ellipse, #6D28D920 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-[-40px] top-[200px] h-[350px] w-[500px] rounded-full opacity-60"
          style={{
            background: "radial-gradient(ellipse, #8B5CF618 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Decorative particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[120px] top-[180px] h-[3px] w-[3px] rounded-full bg-primary opacity-60" />
        <div className="absolute left-[280px] top-[120px] h-[2px] w-[2px] rounded-full bg-[#A78BFA] opacity-40" />
        <div className="absolute right-[240px] top-[200px] h-[4px] w-[4px] rounded-full bg-[#C4B5FD] opacity-30" />
        <div className="absolute right-[120px] top-[350px] h-[2px] w-[2px] rounded-full bg-primary opacity-50" />
        <div className="absolute left-[90px] top-[500px] h-[3px] w-[3px] rounded-full bg-[#A78BFA] opacity-35" />
        <div className="absolute right-[90px] bottom-[220px] h-[5px] w-[5px] rounded-full bg-[#7C3AED] opacity-25" />
      </div>

      {/* Decorative rings */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[40px] right-[-40px] h-[200px] w-[200px] rounded-full border border-primary/10 opacity-80" />
        <div className="absolute left-[-30px] top-[400px] h-[120px] w-[120px] rounded-full border border-[#A78BFA]/8" />
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-[2px] left-0 h-[2px] w-full"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #8B5CF6 50%, transparent 100%)",
        }}
      />

      {/* Hero content — centered */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center px-6 text-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED60] bg-[#7C3AED20] px-5 py-2 text-[11px] font-semibold uppercase tracking-[2px] text-[#A78BFA]">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              </svg>
              {slide.badge}
            </span>

            {/* Headline */}
            <h1 className="mt-9 font-heading text-5xl font-bold leading-[1.05] text-[#F5F3FF] md:text-7xl whitespace-pre-line">
              {slide.headline}
            </h1>

            {/* Subheadline */}
            <p className="mt-8 max-w-[700px] text-lg leading-relaxed text-[#A09CC0]">
              {slide.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex items-center gap-5">
              <MagneticButton>
                <Link
                  href={slide.primaryCta.href}
                  className="group inline-flex items-center gap-2.5 rounded-lg px-9 py-4 text-[15px] font-semibold text-white shadow-[0_4px_12px_#7C3AED50,0_12px_30px_#8B5CF640] transition-all hover:brightness-110"
                  style={{
                    background: "linear-gradient(180deg, #8B5CF6 0%, #6D28D9 100%)",
                  }}
                >
                  {slide.primaryCta.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.15}>
                <Link
                  href={slide.secondaryCta.href}
                  className="inline-flex items-center gap-2.5 rounded-lg border border-[#7C3AED80] px-9 py-4 text-[15px] font-medium text-[#C4B5FD] transition-all hover:bg-[#7C3AED15] hover:border-[#7C3AEDA0]"
                >
                  {slide.secondaryCta.label}
                </Link>
              </MagneticButton>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot navigation */}
        <div className="mt-10 flex items-center gap-2.5">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? "w-7 bg-[#8B5CF6]"
                  : "w-2 bg-[#7C3AED40] hover:bg-[#7C3AED80]"
              }`}
            />
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-0">
          {trustIndicators.map((item, i) => (
            <div key={i} className="flex items-center">
              <div className="flex items-center gap-2.5 px-6 py-3">
                <item.icon className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium text-[#888]">{item.label}</span>
              </div>
              {i < trustIndicators.length - 1 && (
                <div className="h-5 w-px bg-[#2E2A52]" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
