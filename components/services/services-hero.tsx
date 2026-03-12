"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Search, BarChart3, Share2, Mail } from "lucide-react"

const iconServices = [
  { icon: Search, label: "SEO", href: "#seo" },
  { icon: BarChart3, label: "SEM", href: "#sem" },
  { icon: Share2, label: "Social Media", href: "#social" },
  { icon: Mail, label: "Email Marketing", href: "#email" },
]

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora-blob absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-primary/10" />
        <div className="aurora-blob absolute -right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/8" style={{ animationDelay: "-7s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--background)_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            What We Do
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-5xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          Marketing &{" "}
          <span className="gradient-text">Advertising</span>{" "}
          Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Olympia Marketing is a full-service creative agency with a &ldquo;digital-first&rdquo; mindset located in Southwest Florida serving clients globally. We work best with new and experienced well-funded businesses who are looking to grow quickly and powerfully using our suite of services and recommendations that have been battle tested. We work with clients in almost every industry developing top-of-the-line brands, websites, digital & physical marketing campaigns that drive real results.
        </motion.p>

        {/* Service icon grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          {iconServices.map((svc, i) => (
            <a
              key={i}
              href={svc.href}
              className="glass group flex items-center gap-3 rounded-xl px-5 py-3 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-all group-hover:bg-primary/20">
                <svc.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{svc.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
