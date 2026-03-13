"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { ArrowUpRight, ArrowRight } from "lucide-react"

const caseStudies = [
  {
    title: "Physician Aesthetic Institute",
    description:
      "The Physician Aesthetic Institute \u2014 Your Southwest Florida Medical Spa serving Naples, Bonita Springs, Fort Myers, Estero. Providing a number of Esthetician & Med Spa services to both Lee & Collier County.",
    category: "Healthcare",
    image: null,
    stat: "6x",
    statLabel: "Enrollment Boost",
  },
  {
    title: "The Skin Care Academy",
    description:
      "Spa Professionals Academy is a Lee County Based Esthetician School Designed to Assist Anyone Pursue a Career as an Esthetician or General Spa Services. We serve students from all over including Collier County.",
    category: "Education",
    image: null,
    stat: "$1M+",
    statLabel: "Monthly Lead Value",
  },
  {
    title: "Esthetician Schools",
    description:
      "Explore the ultimate guide to Esthetician Schools! Discover top programs, career insights, and expert advice at Esthetician Schools Directory.",
    category: "Education",
    image: null,
    stat: "150+",
    statLabel: "Students Enrolled",
  },
]

export function CaseStudiesPreview() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])

  return (
    <section ref={containerRef} className="overflow-hidden border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Case Studies
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                Some of Our Recent Work & Case Studies
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                The following is a small sample of some of our latest and best work. In some cases we&rsquo;ve worked with local businesses looking to market themselves, or national brands looking to up their game both online and offline.
              </p>
            </div>
            <Link
              href="/work"
              className="group hidden shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground md:inline-flex"
            >
              View All Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Horizontal scrolling cards with images */}
      <motion.div
        style={{ x }}
        className="mt-12 flex gap-6 pl-4 md:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]"
      >
        {caseStudies.map((study, i) => (
          <Link
            key={i}
            href="/work"
            className="group block w-[340px] shrink-0 md:w-[440px]"

          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Card header with gradient placeholder */}
              <div className="relative h-56 overflow-hidden md:h-64">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, #1A1040 0%, #2D1B69 50%, #0D0B1F 100%)",
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                {/* Stat overlay */}
                <div className="absolute top-5 right-5 text-right">
                  <p className="text-3xl font-black text-foreground drop-shadow-lg md:text-4xl">{study.stat}</p>
                  <p className="text-xs font-medium text-foreground/80 drop-shadow-sm">{study.statLabel}</p>
                </div>
                {/* Category badge */}
                <span className="absolute bottom-4 left-4 z-10 inline-flex rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                  {study.category}
                </span>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg">
                    View Case Study
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                  {study.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {study.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Read More <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}

        {/* See all card */}
        <Link
          href="/work"
          className="group flex w-[280px] shrink-0 items-center justify-center md:w-[320px]"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex h-full w-full flex-col items-center justify-center rounded-2xl border border-dashed border-border p-8 transition-all hover:border-primary/30 hover:bg-card/50"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-4 text-sm font-semibold text-foreground">View All Case Studies</p>
            <p className="mt-1 text-xs text-muted-foreground">9+ projects</p>
          </motion.div>
        </Link>
      </motion.div>

      {/* Mobile view all button */}
      <div className="mt-8 px-4 text-center md:hidden">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          View All Work
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
