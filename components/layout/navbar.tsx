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
  Search,
  Globe,
  BarChart3,
  MessageSquare,
  Mail,
  Palette,
  Megaphone,
  MonitorSmartphone,
  TrendingUp,
  ArrowRight,
  ChevronDown,
} from "lucide-react"
import { MagneticButton } from "@/components/animations/magnetic-button"

const serviceCategories = [
  {
    title: "Digital Marketing",
    description: "Data-driven strategies that deliver measurable ROI",
    items: [
      {
        href: "/marketing-advertising-services#seo",
        label: "Search Engine Optimization",
        description: "Dominate search rankings and drive organic traffic",
        icon: Search,
      },
      {
        href: "/marketing-advertising-services#sem",
        label: "Pay-Per-Click Marketing",
        description: "Targeted ads that convert clicks into customers",
        icon: BarChart3,
      },
      {
        href: "/marketing-advertising-services#social",
        label: "Social Media Marketing",
        description: "Build your brand presence across all platforms",
        icon: MessageSquare,
      },
      {
        href: "/marketing-advertising-services#email",
        label: "Email Marketing",
        description: "Nurture leads and drive repeat business",
        icon: Mail,
      },
    ],
  },
  {
    title: "Creative Services",
    description: "Stunning visuals and experiences that captivate",
    items: [
      {
        href: "/marketing-advertising-services",
        label: "Website Design & Development",
        description: "High-converting sites that reflect your brand",
        icon: MonitorSmartphone,
      },
      {
        href: "/marketing-advertising-services",
        label: "Brand Strategy & Identity",
        description: "Build a brand that resonates with your audience",
        icon: Palette,
      },
      {
        href: "/marketing-advertising-services",
        label: "Content Marketing",
        description: "Compelling content that educates and converts",
        icon: Megaphone,
      },
      {
        href: "/marketing-advertising-services",
        label: "Advertising Campaigns",
        description: "Multi-channel campaigns for maximum reach",
        icon: TrendingUp,
      },
    ],
  },
]

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/marketing-advertising-services", label: "Services", hasMega: true },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const megaRef = useRef<HTMLDivElement>(null)
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const prenavRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const update = () => {
      if (prenavRef.current) {
        const h = prenavRef.current.offsetHeight
        document.documentElement.style.setProperty("--prenav-h", `${h}px`)
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setMegaOpen(false)
  }, [pathname])

  const openMega = useCallback(() => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current)
    setMegaOpen(true)
  }, [])

  const closeMega = useCallback(() => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200)
  }, [])

  const keepMega = useCallback(() => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div ref={prenavRef} className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 text-xs text-muted-foreground bg-secondary/80 backdrop-blur-sm border-b border-border/50 md:px-8">
        <span className="font-sans tracking-wide uppercase">SWFL Marketing & Advertising Agency</span>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden transition-colors hover:text-foreground sm:inline">
            General Support
          </Link>
          <Link href="tel:2393084011" className="flex items-center gap-1.5 transition-colors hover:text-foreground">
            <Phone className="h-3 w-3" />
            <span>239-308-4011</span>
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <header
        ref={navRef}
        className="fixed top-[var(--prenav-h)] left-0 right-0 z-40 bg-background/80 backdrop-blur-2xl border-b border-border/40 shadow-lg shadow-background/30"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <Link href="/" className="group relative block">
            <Image
              src="/images/logo-olympiamarketing.png"
              alt="Olympia Marketing"
              width={180}
              height={72}
              className="h-9 w-auto brightness-0 invert transition-opacity group-hover:opacity-80 md:h-10"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) =>
              link.hasMega ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={openMega}
                  onMouseLeave={closeMega}
                  ref={megaRef}
                >
                  <button
                    className={`relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                      pathname.startsWith("/marketing-advertising-services")
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => setMegaOpen(!megaOpen)}
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        megaOpen ? "rotate-180" : ""
                      }`}
                    />
                    {pathname.startsWith("/marketing-advertising-services") && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
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
            <MagneticButton className="ml-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
              >
                Get Started
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-secondary md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mega-menu dropdown */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed top-[var(--nav-total-h)] left-0 right-0 z-30 hidden md:block"
            onMouseEnter={keepMega}
            onMouseLeave={closeMega}
          >
            {/* Top gradient line */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="border-b border-border/30 bg-background/90 backdrop-blur-3xl">
              <div className="mx-auto grid max-w-7xl grid-cols-[1fr_1fr_280px] gap-0 px-4 py-8 md:px-8">
                {/* Service columns */}
                {serviceCategories.map((category) => (
                  <div key={category.title} className="pr-8">
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
                      {category.title}
                    </p>
                    <p className="mb-5 text-xs text-muted-foreground">{category.description}</p>
                    <div className="flex flex-col gap-1">
                      {category.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-secondary/60"
                          onClick={() => setMegaOpen(false)}
                        >
                          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                            <item.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                              {item.label}
                            </p>
                            <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Featured CTA panel */}
                <div className="flex flex-col justify-between rounded-2xl border border-border/50 bg-secondary/40 p-6">
                  <div>
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                      <Globe className="h-3 w-3" />
                      Featured
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      Free Marketing Audit
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      Get a comprehensive analysis of your digital presence with actionable recommendations to 10x your results.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="mt-5 group inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
                    onClick={() => setMegaOpen(false)}
                  >
                    Claim Your Free Audit
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 flex flex-col bg-background/98 backdrop-blur-xl overflow-y-auto"
          >
            <div className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ staggerChildren: 0.06, delayChildren: 0.1 }}
                className="flex w-full max-w-sm flex-col items-center gap-5"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                    className="w-full text-center"
                  >
                    <Link
                      href={link.href}
                      className={`block text-3xl font-bold transition-colors ${
                        pathname === link.href
                          ? "gradient-text"
                          : "text-foreground hover:text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {/* Show sub-items for Services on mobile */}
                    {link.hasMega && (
                      <div className="mt-3 flex flex-col gap-2">
                        {serviceCategories.flatMap((cat) =>
                          cat.items.slice(0, 2).map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                              {item.label}
                            </Link>
                          ))
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                  className="flex flex-col items-center gap-4 pt-4"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground"
                  >
                    Get Started
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
