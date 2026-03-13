"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"

interface TeamMember {
  name: string
  role: string
  image: string
}

const team: TeamMember[] = [
  {
    name: "Zachary Katkin",
    role: "Founder & CEO",
    image: "/images/team-1.png",
  },
  {
    name: "Christopher LaRocca",
    role: "Director of Business Development",
    image: "/images/team-2.png",
  },
  {
    name: "Justin Goss",
    role: "Director of Design",
    image: "/images/team-3.png",
  },
  {
    name: "Tyler Manzella",
    role: "Creative Director",
    image: "/images/team-4.png",
  },
]

export function TeamGrid() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-[11px] font-semibold uppercase tracking-[3px] text-primary">
            Meet the Team
          </p>
          <h2 className="font-heading mt-4 text-[42px] font-semibold text-foreground">
            Here&rsquo;s the Team Behind the Magic
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            A small, senior team of marketers, designers, and strategists who
            treat every client like a partner. No hand-offs, no junior runaround
            — the people you meet are the people who do the work.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-primary/10 text-2xl font-bold text-primary">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-base font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {member.role}
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
