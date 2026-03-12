"use client"

import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { ArrowRight, Calendar } from "lucide-react"

const posts = [
  {
    title: "Bonita Springs Laser Hair Removal: Celebrating Physician Aesthetics Institute's New Service Launch",
    excerpt: "We are thrilled to congratulate Physician Aesthetics Institute on the launch of their new Bonita Springs Laser Hair Removal services \u2014 bringing cutting-edge, medical-grade laser treatments to the Southwest Florida...",
    date: "January 22, 2026",
    category: "Beauty Industry",
    image: "/images/blog-laser-live.jpg",
  },
  {
    title: "Announcing the Launch of SearchBoatsOnline.com",
    excerpt: "A New Era for Boat Dealers, Brokers & Private Sellers \u2014 Built by Olympia Marketing. The marine industry has been waiting far too long for a platform that actually puts...",
    date: "December 2, 2025",
    category: "Blog",
    image: "/images/blog-boats-live.png",
  },
  {
    title: "The Definitive Guide to Google Business Profile Ranking in 2025",
    excerpt: "This post is the 2nd in an ongoing series we're producing alongside the SWFL Inc. Southwest Florida Chamber. In this blog we're documenting...",
    date: "October 24, 2025",
    category: "Digital Marketing",
    image: "/images/blog-google.jpg",
  },
]

export function BlogPreview() {
  return (
    <section className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Blog & News
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                Marketing & Advertising Updates
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                Our marketing & advertising blog offers insight into our perspective in marketing &ndash; tips for your business, as well as actionable information for marketers at every level to up their game. With over 20 years in digital and conventional marketing we&rsquo;re one of the most seasoned teams when it comes to providing results in the 21st Century.
              </p>
            </div>
            <Link
              href="/blog"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-all hover:brightness-110"
            >
              View all posts
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Link href="/blog" className="group block h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                    <span className="absolute top-3 left-3 inline-flex rounded-md bg-primary/90 px-2.5 py-1 text-xs font-medium text-primary-foreground">
                      {post.category}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-base font-semibold leading-snug text-foreground line-clamp-2 transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
