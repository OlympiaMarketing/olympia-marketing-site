import Link from "next/link"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background: "linear-gradient(to bottom, #6D28D9, #1E1B3A)",
      }}
    >
      {/* Subtle radial glow */}
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
          <h2 className="font-heading mt-4 text-[2.625rem] leading-tight font-light tracking-tight text-white text-balance md:text-5xl">
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
  )
}
