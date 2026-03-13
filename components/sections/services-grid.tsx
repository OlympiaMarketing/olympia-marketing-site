"use client"

import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { TrendingUp, Monitor, Palette, Video, Share2, Briefcase } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ServiceCard {
  icon: LucideIcon
  title: string
  description: string
}

interface ProcessStep {
  number: number
  title: string
  description: string
}

const services: ServiceCard[] = [
  {
    icon: TrendingUp,
    title: "Digital Marketing & PPC",
    description:
      "Strategic paid campaigns across search and social platforms, optimized for maximum ROI and sustainable growth.",
  },
  {
    icon: Monitor,
    title: "Website Design & Development",
    description:
      "Bespoke websites that blend stunning aesthetics with conversion-focused architecture and seamless user experiences.",
  },
  {
    icon: Palette,
    title: "Branding & Corporate Identity",
    description:
      "Distinctive brand identities that resonate with your audience and elevate your market positioning with lasting impact.",
  },
  {
    icon: Video,
    title: "Content & Video Production",
    description:
      "Compelling visual narratives and premium content that captivate audiences and strengthen brand authority across every channel.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Curated social presence that builds engaged communities and drives meaningful conversations around your brand story.",
  },
  {
    icon: Briefcase,
    title: "Fractional CMO Services",
    description:
      "Executive-level marketing leadership on demand, bringing strategic vision and operational excellence without the full-time commitment.",
  },
]

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Discovery & Strategy",
    description:
      "Deep-dive into your brand, market, and goals to craft a tailored roadmap for success.",
  },
  {
    number: 2,
    title: "Execute & Optimize",
    description:
      "Launch precision campaigns with continuous refinement driven by real-time performance data.",
  },
  {
    number: 3,
    title: "Measure & Scale",
    description:
      "Track results with transparent reporting and scale what works to amplify your market presence.",
  },
]

export function ServicesGrid() {
  return (
    <>
      {/* Service Cards Grid */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-primary text-[11px] font-semibold uppercase tracking-[3px]">
                OUR EXPERTISE
              </p>
              <h2 className="font-heading mt-4 text-[42px] leading-tight text-foreground">
                Full-Service Marketing Excellence
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We craft bespoke marketing strategies that elevate premium brands,
                combining data-driven insights with creative excellence to deliver
                measurable results.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-[20px] border border-primary/25 bg-card p-7">
                  <service.icon className="h-7 w-7 text-primary" />
                  <h3 className="font-heading mt-5 text-[20px] font-medium text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[12px] leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Process Steps */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-primary text-[11px] font-semibold uppercase tracking-[3px]">
                HOW WE WORK
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.12}>
                <div className="flex h-full flex-col items-center rounded-[20px] border border-border bg-card p-7 text-center shadow-sm shadow-primary/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/25">
                    {step.number}
                  </div>
                  <h3 className="font-heading mt-5 text-[20px] font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[12px] leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
