"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Physician Aesthetic Institute",
    description:
      "The Physician Aesthetic Institute \u2014 Your Southwest Florida Medical Spa serving Naples, Bonita Springs, Fort Myers, Estero. Providing a number of Esthetician & Med Spa services to both Lee & Collier County.",
    category: "Healthcare",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "The Skin Care Academy",
    description:
      "Spa Professionals Academy is a Lee County Based Esthetician School Designed to Assist Anyone Pursue a Career as an Esthetician or General Spa Services. We serve students from all over including Collier County.",
    category: "Education",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Esthetician Schools",
    description:
      "Explore the ultimate guide to Esthetician Schools! Discover top programs, career insights, and expert advice at Esthetician Schools Directory.",
    category: "Education",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "RetailMTS",
    description:
      "RetailMTS provides comprehensive merchandising and retail services to businesses nationwide. We helped them build a modern digital presence and generate qualified B2B leads through targeted marketing.",
    category: "Retail",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "St. Peter Orthodox Church",
    description:
      "A beautiful, modern website design for St. Peter Orthodox Church that helps the community stay connected, share events, and welcome new members with an inviting online presence.",
    category: "Non-Profit",
    gradient: "from-indigo-500/20 to-blue-500/20",
  },
  {
    title: "Renovation Naples",
    description:
      "Renovation Naples is a premier home renovation company in Southwest Florida. We developed a stunning portfolio website and SEO strategy that positioned them as the top choice for luxury renovations.",
    category: "Home Services",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "XYZAi",
    description:
      "An innovative AI SAAS company that needed rapid scaling. With strategic website changes and marketing, we helped them grow from startup to over $100k MRR in less than 6 months.",
    category: "Technology",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Florida Blockchain Business Association",
    description:
      "The Florida Blockchain Business Association needed a professional digital presence to represent the growing blockchain community in Florida. We delivered a modern website and digital strategy.",
    category: "Technology",
    gradient: "from-sky-500/20 to-indigo-500/20",
  },
  {
    title: "Land Clearing SWFL",
    description:
      "Land Clearing SWFL provides professional land clearing services in Southwest Florida. We built their online presence from the ground up with a conversion-focused website and local SEO strategy.",
    category: "Home Services",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
]

export function ProjectGrid() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={Math.min(i * 0.08, 0.5)}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border transition-all hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Project visual */}
                <div className={`relative flex h-56 items-center justify-center bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  <span className="px-6 text-center text-2xl font-bold text-foreground/60 transition-all group-hover:scale-110 group-hover:text-foreground/80">
                    {project.title}
                  </span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100">
                    <div className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
                      View Project
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-flex rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
