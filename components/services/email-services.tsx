"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Mail, ListChecks, PenTool, BarChart3 } from "lucide-react"

const emailItems = [
  {
    icon: ListChecks,
    title: "Email List Management",
    description: "We help you build, segment, and maintain a healthy email list that drives results. From acquisition strategies to list hygiene, our team ensures your email database is a powerful asset that delivers consistent ROI.",
  },
  {
    icon: PenTool,
    title: "Email Design & Deployment",
    description: "Our designers create stunning, mobile-responsive email templates that capture attention and drive action. We handle the entire process from design to deployment, ensuring every email lands in inboxes and looks great on every device.",
  },
  {
    icon: BarChart3,
    title: "Email Analytics",
    description: "We track and analyze every metric that matters including open rates, click-through rates, conversions, and revenue attribution. Our data-driven approach ensures continuous optimization for maximum email marketing performance.",
  },
]

export function EmailServices() {
  return (
    <section id="email" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Email
            </p>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Email Marketing
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Email marketing remains one of the highest-ROI channels available to businesses. Our email marketing services help you nurture leads, retain customers, and drive repeat business through strategic, personalized email campaigns that deliver the right message at the right time to the right audience.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {emailItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass group flex h-full flex-col rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
