"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Share2, Users, Instagram, Linkedin } from "lucide-react"

const socialItems = [
  {
    icon: Users,
    title: "Social Media Management",
    description: "We manage your social media presence end-to-end, from content strategy and creation to community management and analytics. Our team creates engaging posts, stories, and reels that build your brand, grow your following, and drive meaningful engagement with your audience.",
  },
  {
    icon: Instagram,
    title: "Facebook & Instagram Ads",
    description: "Our paid social specialists create hyper-targeted campaigns across Meta platforms that reach your ideal customers. From awareness to conversion, we manage the entire funnel with custom audiences, lookalike targeting, and creative that stops the scroll and drives action.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Ads",
    description: "For B2B businesses, LinkedIn advertising offers unmatched targeting precision. We create campaigns that reach decision-makers by job title, company size, industry, and more, driving high-quality leads for your sales team.",
  },
]

export function SocialMediaServices() {
  return (
    <section id="social" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Share2 className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Social Media
            </p>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Social Media Marketing
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Social media is where your customers spend their time, and where your brand needs to have a strong, consistent presence. Our social media marketing services combine organic content strategy with paid advertising to build brand awareness, foster community, and drive measurable business results across all major platforms.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {socialItems.map((item, i) => (
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
