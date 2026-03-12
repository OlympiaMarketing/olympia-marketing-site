"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Calendar, User, ArrowRight } from "lucide-react"

const categories = ["All", "Blog", "Clients", "Beauty Industry", "Digital Marketing", "Uncategorized"]

const posts = [
  {
    title: "Bonita Springs Laser Hair Removal: Celebrating Physician Aesthetics Institute's New Service Launch",
    excerpt: "We are thrilled to congratulate Physician Aesthetics Institute on the launch of their new Bonita Springs Laser Hair Removal services \u2014 bringing cutting-edge, medical-grade laser treatments to the Southwest Florida community.",
    date: "January 22, 2026",
    author: "Zachary Katkin",
    category: "Beauty Industry",
    featured: true,
  },
  {
    title: "Announcing the Launch of SearchBoatsOnline.com",
    excerpt: "A New Era for Boat Dealers, Brokers & Private Sellers \u2014 Built by Olympia Marketing. The marine industry has been waiting far too long for a platform that actually puts dealers and sellers first.",
    date: "December 2, 2025",
    author: "Zachary Katkin",
    category: "Blog",
    featured: true,
  },
  {
    title: "The Definitive Guide to Google Business Profile Ranking in 2025",
    excerpt: "This post is the 2nd in an ongoing series we're producing alongside the SWFL Inc. Southwest Florida Chamber. In this blog we're documenting the most effective strategies for ranking your Google Business Profile.",
    date: "October 24, 2025",
    author: "Zachary Katkin",
    category: "Digital Marketing",
    featured: false,
  },
  {
    title: "Olympia Marketing Welcomes SAS Satellite as a New Client",
    excerpt: "We're excited to announce our newest partnership with SAS Satellite, bringing cutting-edge marketing solutions to the satellite communication industry across Southwest Florida and beyond.",
    date: "March 24, 2025",
    author: "Zachary Katkin",
    category: "Clients",
    featured: false,
  },
  {
    title: "Olympia Marketing Partners with Engage Estero",
    excerpt: "Olympia Marketing is proud to partner with Engage Estero, a community advocacy organization dedicated to improving the quality of life in Estero, Florida. We look forward to amplifying their message.",
    date: "February 17, 2025",
    author: "Zachary Katkin",
    category: "Clients",
    featured: false,
  },
  {
    title: "New Client Spotlight: Bonita Med Spa",
    excerpt: "We're thrilled to welcome Bonita Med Spa to the Olympia Marketing family. Our team is excited to help them grow their digital presence and attract new patients throughout Southwest Florida.",
    date: "December 3, 2024",
    author: "Zachary Katkin",
    category: "Clients",
    featured: false,
  },
  {
    title: "New Bonita Massage School Website",
    excerpt: "We're excited to announce the launch of the new Bonita Massage School website, designed and developed by our team to attract prospective students and showcase their programs in the best light.",
    date: "September 19, 2024",
    author: "Zachary Katkin",
    category: "Beauty Industry",
    featured: false,
  },
  {
    title: "Upstart Medical Spa Marketing & Advertising",
    excerpt: "Starting a new medical spa? Here's our comprehensive guide to marketing and advertising for upstart medical spas, covering everything from branding to digital marketing strategies that drive patient acquisition.",
    date: "September 6, 2024",
    author: "Zachary Katkin",
    category: "Beauty Industry",
    featured: false,
  },
  {
    title: "Medical Spa Marketing & Advertising Ideas",
    excerpt: "Discover proven marketing and advertising strategies specifically designed for medical spas. From SEO to social media, learn how to attract more patients and grow your med spa business effectively.",
    date: "September 6, 2024",
    author: "Zachary Katkin",
    category: "Beauty Industry",
    featured: false,
  },
  {
    title: "Beauty School Digital Marketing - SEO + Local PR",
    excerpt: "Learn how to leverage SEO and local PR to grow your beauty school's enrollment. Our proven strategies have helped schools see 6x enrollment increases and dominate local search results.",
    date: "August 30, 2024",
    author: "Zachary Katkin",
    category: "Digital Marketing",
    featured: false,
  },
  {
    title: "12 Creative Marketing Strategies for Barber Shops",
    excerpt: "Discover 12 creative and effective marketing strategies specifically designed for barber shops. From social media tips to local SEO, learn how to fill your chairs and grow your barbershop business.",
    date: "August 29, 2024",
    author: "Zachary Katkin",
    category: "Blog",
    featured: false,
  },
]

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory)

  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Category filters */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-secondary/30 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Featured posts */}
        {activeCategory === "All" && (
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {filtered.filter((p) => p.featured).map((post, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass group cursor-pointer overflow-hidden rounded-2xl transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                >
                  {/* Gradient header */}
                  <div className="flex h-48 items-center justify-center bg-gradient-to-br from-primary/15 to-accent/10 p-8">
                    <h3 className="text-center text-xl font-bold text-foreground text-balance line-clamp-3 transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <span className="inline-flex rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {post.author}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-all group-hover:opacity-100">
                        Read More <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* All posts grid */}
        <div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${activeCategory === "All" ? "mt-12" : "mt-12"}`}>
          {(activeCategory === "All" ? filtered.filter((p) => !p.featured) : filtered).map((post, i) => (
            <ScrollReveal key={`${post.title}-${i}`} delay={Math.min(i * 0.06, 0.3)}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass group flex h-full cursor-pointer flex-col rounded-2xl p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="inline-flex self-start rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  {post.category}
                </span>
                <h3 className="mt-4 text-base font-semibold leading-snug text-foreground line-clamp-2 transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </span>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
