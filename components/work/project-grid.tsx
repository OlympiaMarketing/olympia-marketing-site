"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

interface Project {
  title: string
  description: string
  category: string
  image: string | null
  gradient: string
}

const projects: Project[] = [
  {
    title: "Florida Blockchain Business Association",
    description:
      "The Florida Blockchain Business Association needed a professional digital presence to represent the growing blockchain community in Florida. We delivered a modern website and digital strategy.",
    category: "Technology",
    image: null,
    gradient: "from-sky-500/20 to-indigo-500/20",
  },
  {
    title: "Land Clearing SWFL",
    description:
      "Land Clearing SWFL provides professional land clearing services in Southwest Florida. We built their online presence from the ground up with a conversion-focused website and local SEO strategy.",
    category: "Home Services",
    image: "/images/work/land-clearing-swfl-0.png",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Renovation Naples",
    description:
      "Renovation Naples is a premier home renovation company in Southwest Florida. We developed a stunning portfolio website and SEO strategy that positioned them as the top choice for luxury renovations.",
    category: "Home Services",
    image: "/images/work/renovation-naples-0.png",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Physician Aesthetic Institute",
    description:
      "The Physician Aesthetic Institute — Your Southwest Florida Medical Spa serving Naples, Bonita Springs, Fort Myers, Estero. Providing a number of Esthetician & Med Spa services to both Lee & Collier County.",
    category: "Healthcare",
    image: null,
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "The Skin Care Academy",
    description:
      "Spa Professionals Academy is a Lee County Based Esthetician School Designed to Assist Anyone Pursue a Career as an Esthetician or General Spa Services. We serve students from all over including Collier County.",
    category: "Education",
    image: null,
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "MUDD",
    description:
      "MUDD is a bold lifestyle brand that needed a complete digital transformation. We crafted a striking visual identity and built a high-converting e-commerce presence that captures the brand's energy.",
    category: "Lifestyle",
    image: "/images/work/mudd-0.png",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "RetailMTS",
    description:
      "RetailMTS provides comprehensive merchandising and retail services to businesses nationwide. We helped them build a modern digital presence and generate qualified B2B leads through targeted marketing.",
    category: "Retail",
    image: "/images/work/retailmts-0.png",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "St. Peter Orthodox Church",
    description:
      "A beautiful, modern website design for St. Peter Orthodox Church that helps the community stay connected, share events, and welcome new members with an inviting online presence.",
    category: "Non-Profit",
    image: null,
    gradient: "from-indigo-500/20 to-blue-500/20",
  },
  {
    title: "XYZAi",
    description:
      "An innovative AI SAAS company that needed rapid scaling. With strategic website changes and marketing, we helped them grow from startup to over $100k MRR in less than 6 months.",
    category: "Technology",
    image: null,
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Esthetician Schools",
    description:
      "Explore the ultimate guide to Esthetician Schools! Discover top programs, career insights, and expert advice at Esthetician Schools Directory.",
    category: "Education",
    image: null,
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
]

export function ProjectGrid() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={Math.min(i * 0.1, 0.4)}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Project image / visual */}
                <div
                  className={`relative aspect-video overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="px-8 text-center text-3xl font-bold text-foreground/40 transition-colors duration-300 group-hover:text-foreground/60 md:text-4xl">
                        {project.title}
                      </span>
                    </div>
                  )}

                  {/* Dark overlay with text at bottom */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-16">
                    <span className="inline-flex rounded-md bg-primary/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[2px] text-white">
                      {project.category}
                    </span>
                    <h3 className="font-heading mt-2 text-xl font-medium text-white md:text-2xl">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
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
