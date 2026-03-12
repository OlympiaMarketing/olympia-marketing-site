"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { ArrowRight } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora-blob absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/10" />
        <div
          className="aurora-blob absolute -right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/8"
          style={{ animationDelay: "-8s" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--background)_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            About Us
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          Olympia Marketing is a Full-Service{" "}
          <span className="gradient-text">Creative Agency</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Olympia Marketing is a full-service creative agency with a &ldquo;digital-first&rdquo; mindset. We work best with new and experienced well-funded businesses who are looking to grow quickly and powerfully using our suite of services and recommendations that have been battle tested. We work with clients in almost every industry developing top-of-the-line brands, websites, digital & physical marketing campaigns that drive real results. In many cases, we partner with our clients, ensuring that our success is completely linked with unique payment and retainer structures allowing us both to grow exponentially.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </MagneticButton>
          <MagneticButton strength={0.15}>
            <Link
              href="/marketing-advertising-services"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-4 text-sm font-semibold text-foreground transition-all hover:bg-secondary hover:border-primary/20"
            >
              Learn More
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
