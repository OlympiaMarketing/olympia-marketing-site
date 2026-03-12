"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { AnimatedCounter } from "@/components/animations/animated-counter"

const metrics = [
  { target: 20, suffix: "+", label: "Years Experience" },
  { target: 150, suffix: "+", label: "Projects Delivered" },
  { target: 50, suffix: "+", label: "Happy Clients" },
]

export function DifferenceSection() {
  return (
    <section className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Why Olympia
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              The Olympia Marketing Difference
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Most web design agencies don&rsquo;t know a thing about marketing or advertising. And most marketing and advertising agencies don&rsquo;t know a thing about digital (both digital marketing AND especially web design and development). In today&rsquo;s world, this is unacceptable. How you build your website, how you WORD your website plays a role in your businesses ability to acquire business. We&rsquo;ve combined both disciplines to create one of the most performative companies in Marketing & Advertising. In a nutshell&hellip; WE GET YOU RESULTS AND GROW YOUR BUSINESS.
            </p>
            <div className="mt-8 flex gap-8">
              {metrics.map((metric, i) => (
                <div key={i} className="flex flex-col">
                  <AnimatedCounter target={metric.target} suffix={metric.suffix} className="text-3xl font-bold gradient-text" />
                  <p className="mt-1 text-xs text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="right">
            <div className="relative">
              {/* Glow behind the image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute -inset-4 rounded-3xl"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/15 via-transparent to-accent/10 blur-2xl" />
              </motion.div>
              {/* Main image with overlay text */}
              <div className="relative overflow-hidden rounded-3xl border border-border">
                <Image
                  src="/images/olympia-marketing-seo.png"
                  alt="Olympia Marketing SEO and Digital Marketing"
                  width={640}
                  height={480}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Bottom overlay with bold text */}
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-background via-background/50 to-transparent p-8 text-center">
                  <motion.p
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                    className="text-4xl font-black gradient-text md:text-6xl"
                  >
                    WE
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-base font-bold tracking-wider text-foreground md:text-xl"
                  >
                    GET YOU RESULTS
                  </motion.p>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mx-auto mt-3 h-0.5 w-32 bg-gradient-to-r from-primary to-accent"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
