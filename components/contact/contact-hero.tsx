"use client"

import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden py-28 md:py-36"
      style={{
        background: "linear-gradient(to bottom, #0A0A14 0%, #1E1B3A 50%, #0A0A14 100%)",
      }}
    >
      {/* Purple glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
          style={{
            background: "radial-gradient(ellipse, #7C3AED20 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -left-[100px] top-[100px] h-[300px] w-[300px] rounded-full opacity-40"
          style={{
            background: "radial-gradient(ellipse, #6D28D918 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute -right-[60px] bottom-[80px] h-[250px] w-[350px] rounded-full opacity-50"
          style={{
            background: "radial-gradient(ellipse, #8B5CF615 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Decorative particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[25%] h-[3px] w-[3px] rounded-full bg-primary opacity-50" />
        <div className="absolute right-[20%] top-[30%] h-[2px] w-[2px] rounded-full bg-[#A78BFA] opacity-40" />
        <div className="absolute left-[30%] bottom-[30%] h-[4px] w-[4px] rounded-full bg-[#C4B5FD] opacity-25" />
        <div className="absolute right-[35%] bottom-[25%] h-[2px] w-[2px] rounded-full bg-primary opacity-45" />
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-full"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #8B5CF6 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-semibold uppercase tracking-[3px] text-primary"
        >
          Contact Us
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-5 text-5xl font-semibold leading-[1.1] tracking-tight text-[#F5F3FF] md:text-7xl"
        >
          Get In Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#A09CC0] md:text-lg"
        >
          Ready to grow your business? We&rsquo;d love to hear from you.
          Reach out and our team will get back to you within 24 hours.
        </motion.p>
      </div>
    </section>
  )
}
