"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ArrowRight,
  Globe,
} from "lucide-react"
import { MagneticButton } from "@/components/animations/magnetic-button"

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */

const servicesTab1 = {
  label: "Digital & Marketing",
  items: [
    { href: "/seo", label: "SEO" },
    { href: "/marketing-advertising-services/digital-marketing/local-seo", label: "Local SEO" },
    { href: "/marketing-advertising-services/digital-marketing", label: "Digital Marketing & PPC" },
    { href: "/marketing-advertising-services/websites", label: "Website Design & Development" },
    { href: "/marketing-advertising-services/public-relations-pr", label: "Public Relations" },
    { href: "/marketing-advertising-services/print-advertising-campaign-development", label: "Print Advertising" },
    { href: "/industries/saas-marketing", label: "SaaS Marketing" },
    { href: "/marketing-advertising-services/digital-marketing/search-engine-marketing", label: "Search Engine Marketing" },
    { href: "/marketing-advertising-services/digital-marketing/social-media-marketing", label: "Social Media Marketing" },
    { href: "/marketing-advertising-services/branding-corporate-id", label: "Branding & Corporate ID" },
    { href: "/marketing-advertising-services/digital-marketing/email-marketing", label: "Email Marketing" },
    { href: "/marketing-advertising-services/digital-marketing/content-marketing", label: "Content Marketing" },
    { href: "/marketing-advertising-services/fractional-cmo", label: "Fractional CMO" },
    { href: "/marketing-advertising-services/digital-marketing/lead-management", label: "Lead Management" },
    { href: "/reputation-management", label: "Reputation Management" },
  ],
}

const servicesTab2 = {
  label: "More Services",
  items: [
    { href: "/marketing-advertising-services/print-collateral-design", label: "Print Collateral Design" },
    { href: "/beauty-esthetician-marketing-advertising", label: "Salon & Beauty Industry" },
    { href: "/review-generation", label: "Review Generation" },
    { href: "/beauty-school-marketing", label: "Beauty Schools" },
    { href: "/marketing-advertising-services/websites/ongoing-upgrades", label: "Ongoing Upgrades" },
    { href: "/marketing-advertising-services/websites/hosting-and-maintenance", label: "Hosting & Maintenance" },
    { href: "/blogging", label: "Blogging" },
    { href: "/marketing-advertising-services/websites/responsive-website-design", label: "Responsive Website Design" },
    { href: "/marketing-advertising-services/websites/top-tier-security", label: "Top Tier Security" },
    { href: "/marketing-advertising-services/websites/fast-load-times", label: "Fast Load Times" },
    { href: "/marketing-advertising-services/marketing-plan-development", label: "Marketing Plan Development" },
    { href: "/marketing-advertising-services/websites/wordpress-development", label: "WordPress Development" },
    { href: "/marketing-advertising-services/websites/web-app-development", label: "Web App Development" },
    { href: "/marketing-advertising-services/direct-mail-campaigns", label: "Direct Mail Campaigns" },
    { href: "/marketing-advertising-services/brochures-flyers-and-posters", label: "Brochures, Flyers & Posters" },
  ],
}

const industriesItems = [
  { href: "/med-spa", label: "Medical Spa" },
  { href: "/beauty-esthetician-marketing-advertising", label: "Salon & Beauty" },
  { href: "/physical-therapy-marketing-advertising", label: "Physical Therapists" },
  { href: "/real-estate-marketing-advertising", label: "Real Estate" },
  { href: "/industries/home-service-businesses", label: "Home Services" },
  { href: "/builders-developers", label: "Builders & Developers" },
  { href: "/beauty-school-marketing", label: "Beauty Schools" },
  { href: "/industries/saas-marketing", label: "SaaS" },
  { href: "/roofing-contractor-marketing", label: "Roofing Contractors" },
]

const navLinks = [
  { href: "#", label: "Services", dropdown: "services" as const },
  { href: "#", label: "Industries", dropdown: "industries" as const },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<"services" | "industries" | null>(null)
  const [servicesTab, setServicesTab] = useState<0 | 1>(0)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const pathname = usePathname()

  const prenavRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Set CSS custom properties for top bar + nav heights
  useEffect(() => {
    const update = () => {
      if (prenavRef.current) {
        document.documentElement.style.setProperty("--prenav-h", `${prenavRef.current.offsetHeight}px`)
      }
      if (prenavRef.current && navRef.current) {
        const total = prenavRef.current.offsetHeight + navRef.current.offsetHeight
        document.documentElement.style.setProperty("--nav-total-h", `${total}px`)
      }
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
    setMobileExpanded(null)
  }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const openDropdown = useCallback((key: "services" | "industries") => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setActiveDropdown(key)
  }, [])

  const closeDropdown = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 200)
  }, [])

  const keepDropdown = useCallback(() => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
  }, [])

  return (
    <>
      {/* ─── Top bar ─── */}
      <div
        ref={prenavRef}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2.5 text-xs text-muted-foreground bg-secondary/80 backdrop-blur-sm border-b border-border/50 md:px-8"
      >
        <Link
          href="/general-support"
          className="hidden transition-colors hover:text-foreground sm:inline font-medium"
        >
          General Support
        </Link>
        <Link
          href="tel:2393084011"
          className="flex items-center gap-1.5 transition-colors hover:text-foreground ml-auto"
        >
          <Phone className="h-3 w-3" />
          <span>239-308-4011</span>
        </Link>
      </div>

      {/* ─── Main nav ─── */}
      <header
        ref={navRef}
        className="fixed top-[var(--prenav-h)] left-0 right-0 z-40 bg-background/80 backdrop-blur-2xl border-b border-border/40 shadow-lg shadow-background/30"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          {/* Logo */}
          <Link href="/" className="group relative block shrink-0">
            <Image
              src="/images/logo-olympiamarketing.png"
              alt="Olympia Marketing"
              width={180}
              height={72}
              className="h-9 w-auto brightness-0 invert transition-opacity group-hover:opacity-80 md:h-10"
              priority
            />
          </Link>

          {/* ─── Desktop links ─── */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => openDropdown(link.dropdown!)}
                  onMouseLeave={closeDropdown}
                >
                  <button
                    className={`relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                      activeDropdown === link.dropdown
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() =>
                      setActiveDropdown(activeDropdown === link.dropdown ? null : link.dropdown!)
                    }
                    aria-expanded={activeDropdown === link.dropdown}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        activeDropdown === link.dropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              )
            )}

            {/* Free Consult CTA */}
            <MagneticButton className="ml-2">
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
              >
                Free Consult
              </Link>
            </MagneticButton>
          </div>

          {/* ─── Mobile hamburger ─── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-secondary lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* ─── Services mega-menu ─── */}
      <AnimatePresence>
        {activeDropdown === "services" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed top-[var(--nav-total-h)] left-0 right-0 z-30 hidden lg:block"
            onMouseEnter={keepDropdown}
            onMouseLeave={closeDropdown}
          >
            <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="border-b border-border/30 bg-background/95 backdrop-blur-3xl">
              <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
                {/* Tab toggles */}
                <div className="mb-5 flex gap-4 border-b border-border/40 pb-3">
                  {[servicesTab1, servicesTab2].map((tab, i) => (
                    <button
                      key={tab.label}
                      onClick={() => setServicesTab(i as 0 | 1)}
                      className={`text-xs font-semibold uppercase tracking-widest transition-colors pb-2 border-b-2 ${
                        servicesTab === i
                          ? "text-primary border-primary"
                          : "text-muted-foreground border-transparent hover:text-foreground"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Service links grid */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-1 lg:grid-cols-3">
                  {(servicesTab === 0 ? servicesTab1 : servicesTab2).items.map((item) => (
                    <Link
                      key={item.href + item.label}
                      href={item.href}
                      className="group flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <ArrowRight className="h-3 w-3 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-5 flex items-center gap-4 border-t border-border/30 pt-5">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                    <Globe className="h-3 w-3" />
                    Free Audit
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Get a comprehensive analysis of your digital presence.
                  </p>
                  <Link
                    href="/schedule"
                    className="ml-auto inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:brightness-110"
                    onClick={() => setActiveDropdown(null)}
                  >
                    Schedule Free Consult
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Industries dropdown ─── */}
      <AnimatePresence>
        {activeDropdown === "industries" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed top-[var(--nav-total-h)] left-0 right-0 z-30 hidden lg:block"
            onMouseEnter={keepDropdown}
            onMouseLeave={closeDropdown}
          >
            <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="border-b border-border/30 bg-background/95 backdrop-blur-3xl">
              <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-primary">
                  Industries We Serve
                </p>
                <div className="grid grid-cols-2 gap-x-12 gap-y-1 lg:grid-cols-3">
                  {industriesItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <ArrowRight className="h-3 w-3 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Mobile menu overlay ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 flex flex-col bg-background/98 backdrop-blur-xl overflow-y-auto lg:hidden"
          >
            <div className="flex min-h-screen flex-col px-6 pt-32 pb-12">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
                className="flex w-full flex-col gap-1"
              >
                {/* Services accordion */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    className="flex w-full items-center justify-between py-3 text-2xl font-bold text-foreground"
                    onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
                  >
                    Services
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${
                        mobileExpanded === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === "services" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="mb-2 mt-1 text-xs font-semibold uppercase tracking-widest text-primary">
                          Digital & Marketing
                        </p>
                        <div className="flex flex-col gap-0.5 pl-2 mb-4">
                          {servicesTab1.items.map((item) => (
                            <Link
                              key={item.href + item.label}
                              href={item.href}
                              className="py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                          More Services
                        </p>
                        <div className="flex flex-col gap-0.5 pl-2 mb-3">
                          {servicesTab2.items.map((item) => (
                            <Link
                              key={item.href + item.label}
                              href={item.href}
                              className="py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Industries accordion */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    className="flex w-full items-center justify-between py-3 text-2xl font-bold text-foreground"
                    onClick={() => setMobileExpanded(mobileExpanded === "industries" ? null : "industries")}
                  >
                    Industries
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${
                        mobileExpanded === "industries" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === "industries" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-0.5 pl-2 mb-3">
                          {industriesItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Standard links */}
                {navLinks
                  .filter((l) => !l.dropdown)
                  .map((link) => (
                    <motion.div
                      key={link.href}
                      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={`block py-3 text-2xl font-bold transition-colors ${
                          pathname === link.href
                            ? "gradient-text"
                            : "text-foreground hover:text-muted-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}

                {/* CTA + Phone */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-start gap-4 pt-6 mt-4 border-t border-border/40"
                >
                  <Link
                    href="/schedule"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground"
                  >
                    Free Consult
                  </Link>
                  <Link
                    href="tel:2393084011"
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    (239) 308-4011
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
