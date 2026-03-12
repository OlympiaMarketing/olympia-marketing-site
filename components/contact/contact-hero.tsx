"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(239) 308-4011",
    href: "tel:2393084011",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@olympiamarketing.com",
    href: "mailto:info@olympiamarketing.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Southwest Florida",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri 9AM-6PM",
    href: null,
  },
]

export function ContactHero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="aurora-blob absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-primary/10" />
        <div className="aurora-blob absolute -right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/8" style={{ animationDelay: "-8s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--background)_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Get In Touch
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          Contact{" "}
          <span className="gradient-text">Olympia Marketing</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Ready to grow your business? We&rsquo;d love to hear from you. Reach out to us directly or fill out the form below and our team will get back to you within 24 hours.
        </motion.p>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {contactInfo.map((info, i) => {
            const content = (
              <>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all group-hover:bg-primary/20">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {info.label}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-foreground">
                    {info.value}
                  </p>
                </div>
              </>
            )
            const className = "glass group flex items-center gap-4 rounded-xl p-5 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            return info.href ? (
              <Link key={i} href={info.href} className={className}>
                {content}
              </Link>
            ) : (
              <div key={i} className={className}>
                {content}
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
