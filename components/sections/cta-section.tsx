"use client"

import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { ArrowRight, Phone } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.jpg"
          alt="Southwest Florida skyline"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/80" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Ready to grow?
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground text-balance md:text-6xl">
            Let&rsquo;s Build Something Extraordinary Together
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Our average client sees 10x growth in the first year. We move quickly, deliver results, and back it up with a 100% guarantee. What are you waiting for?
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-lg hover:shadow-primary/25"
              >
                Get Started Today
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.15}>
              <Link
                href="tel:2393084011"
                className="inline-flex items-center gap-2 rounded-xl border border-foreground/20 bg-foreground/5 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-foreground/10 hover:border-primary/20"
              >
                <Phone className="h-4 w-4 text-primary" />
                Call (239) 308-4011
              </Link>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
