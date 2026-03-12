"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

const team = [
  {
    name: "Mariano Melendez",
    role: "Creative Director",
    talent: "Exceptional visual storytelling and brand identity design",
    image: "/images/team-1.png",
  },
  {
    name: "Sherri Griffith",
    role: "Marketing Strategist",
    talent: "Data-driven campaign optimization and market analysis",
    image: "/images/team-2.png",
  },
  {
    name: "Abraham Warner",
    role: "Lead Developer",
    talent: "Full-stack development with performance-first approach",
    image: "/images/team-3.png",
  },
  {
    name: "Deidre Shepherd",
    role: "Account Manager",
    talent: "Client relationship management and strategic communication",
    image: "/images/team-4.png",
  },
]

export function TeamGrid() {
  return (
    <section id="team" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            The Team
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Our Expert Team Members
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Our team is made up of experienced marketing professionals, designers, developers, and strategists who are passionate about helping businesses grow. Each member brings a unique set of skills and perspectives that contribute to our collective success.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass group relative overflow-hidden rounded-2xl transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Real team photo */}
                <div className="relative aspect-square overflow-hidden bg-card">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-base font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {member.role}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {member.talent}
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
