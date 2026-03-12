"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { FileText, BookOpen, Settings, ExternalLink, LineChart, Search, MapPin } from "lucide-react"

const seoItems = [
  {
    icon: FileText,
    title: "Content Marketing",
    description: "We create compelling, SEO-optimized content that attracts your target audience and establishes your brand as an authority in your industry. From blog posts to white papers, our content drives organic traffic and builds trust.",
  },
  {
    icon: BookOpen,
    title: "Blogging",
    description: "Strategic blogging is one of the most effective ways to boost your SEO rankings. Our team creates well-researched, keyword-targeted blog posts that answer your audience's questions and drive consistent organic traffic to your site.",
  },
  {
    icon: Settings,
    title: "On-site SEO",
    description: "We optimize every element of your website for search engines including title tags, meta descriptions, header tags, internal linking, schema markup, image optimization, and site speed to ensure maximum visibility.",
  },
  {
    icon: ExternalLink,
    title: "Off-site SEO",
    description: "Our off-site SEO strategies build your domain authority through quality backlinks, guest posting, digital PR, and strategic partnerships that signal to search engines that your site is a trusted source of information.",
  },
  {
    icon: LineChart,
    title: "Keyword Tracking",
    description: "We continuously monitor your keyword rankings across search engines, providing detailed reports on performance changes, competitive movements, and new opportunities to capture market share.",
  },
  {
    icon: Search,
    title: "Keyword Research",
    description: "Our comprehensive keyword research identifies the highest-value terms for your business, analyzing search volume, competition, and user intent to build a strategy that targets the keywords most likely to drive conversions.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description: "We optimize your local presence across Google Business Profile, local directories, and location-based searches to ensure your business appears at the top of results when nearby customers are searching for your services.",
  },
]

export function SeoServices() {
  return (
    <section id="seo" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Search className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Search Engine Optimization
            </p>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            SEO Services
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Search Engine Optimization is the backbone of any successful digital marketing strategy. At Olympia Marketing, we implement comprehensive SEO strategies that improve your visibility in search results, drive qualified traffic to your website, and convert visitors into customers. Our approach combines technical expertise with creative content strategies to deliver sustainable, long-term growth.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {seoItems.map((item, i) => (
            <ScrollReveal key={i} delay={Math.min(i * 0.08, 0.4)}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass group flex h-full flex-col rounded-2xl p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
