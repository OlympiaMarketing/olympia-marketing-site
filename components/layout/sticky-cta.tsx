"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, ArrowRight, X } from "lucide-react"

export function StickyCta() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return
      setVisible(window.scrollY > 800)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [dismissed])

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 md:bottom-4 md:left-4 md:right-4 md:rounded-2xl md:border"
        >
          <div className="glass flex items-center justify-between gap-3 px-4 py-3 md:rounded-2xl md:px-6 md:py-3.5">
            <div className="flex items-center gap-4">
              <div className="hidden h-2 w-2 animate-pulse rounded-full bg-primary sm:block" />
              <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                <span className="hidden sm:inline">Ready to 10x your business? </span>
                <span className="text-foreground">Let&rsquo;s talk strategy.</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="tel:2393084011"
                className="hidden items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary sm:inline-flex"
              >
                <Phone className="h-3 w-3 text-primary" />
                (239) 308-4011
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:brightness-110"
              >
                Get Started
                <ArrowRight className="h-3 w-3" />
              </Link>
              <button
                onClick={() => setDismissed(true)}
                className="ml-1 flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Dismiss"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
