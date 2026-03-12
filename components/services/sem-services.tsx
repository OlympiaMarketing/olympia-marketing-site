"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { BarChart3, MousePointerClick, MonitorPlay, RotateCcw, Play } from "lucide-react"

const semItems = [
  {
    icon: MousePointerClick,
    title: "Pay-Per-Click (PPC)",
    description: "Our PPC campaigns are built for maximum ROI. We handle everything from keyword bidding strategies to ad copy optimization, ensuring every dollar of your ad spend works harder to drive qualified leads and conversions to your business.",
  },
  {
    icon: MonitorPlay,
    title: "Display Ads",
    description: "Reach your audience across millions of websites with visually compelling display ads. We design eye-catching creative and implement precise targeting to build brand awareness and retarget interested prospects throughout their buyer journey.",
  },
  {
    icon: RotateCcw,
    title: "Retargeting",
    description: "Stay top-of-mind with potential customers who have already visited your website. Our retargeting campaigns use smart segmentation and personalized messaging to bring back visitors and guide them toward conversion.",
  },
  {
    icon: Play,
    title: "YouTube Advertising",
    description: "Leverage the world's second-largest search engine with targeted video advertising. We create and manage YouTube ad campaigns that build brand awareness, drive engagement, and deliver measurable results for your business.",
  },
]

export function SemServices() {
  return (
    <section id="sem" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Search Engine Marketing
            </p>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            SEM Services
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Search Engine Marketing puts your business in front of customers at the exact moment they&rsquo;re searching for your products or services. Our SEM team combines data-driven strategy with creative excellence to deliver campaigns that generate immediate, measurable results while maintaining profitable cost-per-acquisition targets.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {semItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass group flex h-full gap-6 rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
