"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import {
  Globe, BarChart3, UserCheck, Palette, FileText,
  Search, Mail, Share2, MonitorSmartphone, Code2, Server,
  DollarSign, PieChart, Microscope, Pencil, MessageSquare, Layers,
  ShoppingBag,
} from "lucide-react"

const categories = [
  {
    title: "Digital Marketing",
    items: [
      { icon: Search, label: "SEO" },
      { icon: Mail, label: "Email" },
      { icon: Share2, label: "Social Media" },
      { icon: BarChart3, label: "SEM" },
    ],
  },
  {
    title: "Websites & Website Design",
    items: [
      { icon: MonitorSmartphone, label: "Responsive Design" },
      { icon: Code2, label: "WordPress" },
      { icon: Server, label: "Hosting" },
    ],
  },
  {
    title: "Fractional CMO",
    items: [
      { icon: DollarSign, label: "Monthly Investment" },
      { icon: PieChart, label: "ROI" },
      { icon: Microscope, label: "Deep Dive" },
    ],
  },
  {
    title: "Branding & Corporate ID",
    items: [
      { icon: Pencil, label: "Logo" },
      { icon: MessageSquare, label: "Messaging" },
      { icon: Layers, label: "Corporate ID" },
      { icon: Palette, label: "Strategy" },
    ],
  },
  {
    title: "Sales Support Materials",
    items: [
      { icon: FileText, label: "Brochures" },
      { icon: ShoppingBag, label: "Print Collateral" },
    ],
  },
]

export function ServiceCategories() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Full Suite
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            From Dreams to Reality
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            We offer a comprehensive set of marketing and advertising services designed to take your business from where it is now to where you want it to be. Our integrated approach ensures every channel works together to maximize your results.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass group flex h-full flex-col rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {cat.title}
                </h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {cat.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-2 text-xs font-medium text-secondary-foreground transition-all hover:bg-secondary"
                    >
                      <item.icon className="h-3.5 w-3.5 text-primary" />
                      {item.label}
                    </div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
