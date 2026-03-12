"use client"

import { ScrollReveal } from "@/components/animations/scroll-reveal"

const clients = [
  "Physician Aesthetic Institute",
  "Skin Care Academy",
  "Esthetician Schools",
  "RetailMTS",
  "St. Peter Orthodox Church",
  "Renovation Naples",
  "XYZAi",
  "FL Blockchain Business Assoc.",
  "Land Clearing SWFL",
  "Knowledge Base Real Estate",
  "Quality Service Company",
  "StealthGPT",
]

export function ClientMarquee() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Our Clients
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Brands & Companies We&rsquo;ve Worked With Over the Years
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            We&rsquo;ve worked with some major brands and companies throughout Southwest Florida, Nationally & Internationally. No matter where we need to apply what we do &ndash; no matter what audience you&rsquo;re looking to cater to, we have solutions and tactics that will ensure our success together!
          </p>
        </ScrollReveal>
      </div>

      {/* Marquee row 1 */}
      <div className="relative mt-12">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="animate-marquee flex whitespace-nowrap">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="mx-3 flex h-14 items-center rounded-xl border border-border/50 bg-secondary/20 px-6 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-secondary/40"
            >
              <span className="text-sm font-medium text-muted-foreground">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 (reversed) */}
      <div className="relative mt-4">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 40s linear infinite reverse" }}>
          {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, i) => (
            <div
              key={i}
              className="mx-3 flex h-14 items-center rounded-xl border border-border/50 bg-secondary/20 px-6 backdrop-blur-sm transition-all hover:border-primary/20 hover:bg-secondary/40"
            >
              <span className="text-sm font-medium text-muted-foreground">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
