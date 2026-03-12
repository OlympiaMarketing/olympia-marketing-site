"use client"

import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { motion } from "framer-motion"
import { Monitor, Code2, Megaphone } from "lucide-react"

const capabilities = [
  {
    icon: Monitor,
    title: "Microsoft Advertising",
    description:
      "Leverage the power of Microsoft Advertising to reach a unique audience across the Bing network, LinkedIn, and other Microsoft properties. Our certified team manages campaigns that consistently outperform industry benchmarks with lower CPCs and higher conversion rates.",
  },
  {
    icon: Code2,
    title: "WordPress",
    description:
      "As WordPress experts, we build custom themes and plugins that deliver blazing-fast, SEO-optimized websites. From simple brochure sites to complex e-commerce platforms, our WordPress development ensures your site is secure, scalable, and easy to manage.",
  },
  {
    icon: Megaphone,
    title: "Facebook Ads",
    description:
      "Our Facebook Ads specialists create hyper-targeted campaigns that reach your ideal customers across Facebook and Instagram. From awareness to conversion, we manage the entire funnel with custom audiences, lookalike targeting, and creative that stops the scroll.",
  },
]

export function CapabilitiesGrid() {
  return (
    <section id="capabilities" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            What We Use
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Our Capabilities & Tools
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            We leverage the best tools and platforms in the industry to deliver exceptional results for our clients. Our expertise spans across multiple platforms, ensuring we can meet your business wherever your audience lives.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass group flex h-full flex-col rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                  <cap.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {cap.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
