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
    <section
      className="relative overflow-hidden border-y border-border py-8"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      {/* Eyebrow label */}
      <ScrollReveal>
        <p
          className="mb-8 text-center font-semibold uppercase text-muted-foreground"
          style={{ fontSize: "10px", letterSpacing: "3px" }}
        >
          Trusted by Industry Leaders
        </p>
      </ScrollReveal>

      {/* Marquee row 1 */}
      <div className="relative">
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32"
          style={{
            background: "linear-gradient(to right, var(--bg-surface), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32"
          style={{
            background: "linear-gradient(to left, var(--bg-surface), transparent)",
          }}
        />
        <div className="animate-marquee flex whitespace-nowrap">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex h-10 items-center px-10"
            >
              <span className="text-sm font-medium text-muted-foreground">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 (reversed) */}
      <div className="relative mt-3">
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32"
          style={{
            background: "linear-gradient(to right, var(--bg-surface), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32"
          style={{
            background: "linear-gradient(to left, var(--bg-surface), transparent)",
          }}
        />
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 40s linear infinite reverse" }}
        >
          {[...clients.slice().reverse(), ...clients.slice().reverse()].map(
            (client, i) => (
              <div
                key={i}
                className="flex h-10 items-center px-10"
              >
                <span className="text-sm font-medium text-muted-foreground">
                  {client}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
