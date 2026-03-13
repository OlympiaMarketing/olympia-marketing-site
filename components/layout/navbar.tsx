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
  ChevronRight,
  ArrowRight,
  Globe,
  Search,
  FileText,
  BookOpen,
  MapPin,
  MousePointerClick,
  Share2,
  Shield,
  Star,
  Mail,
  Users,
  Monitor,
  Smartphone,
  Code,
  Layers,
  Server,
  Lock,
  Zap,
  HardDrive,
  RefreshCw,
  Headphones,
  Briefcase,
  Megaphone,
  Palette,
  ClipboardList,
  Printer,
  FileImage,
  PenTool,
  Brain,
  Sparkles,
  Bot,
  Cpu,
  GraduationCap,
  Scissors,
  Building2,
  Home,
  Stethoscope,
  HardHat,
  Wrench,
  Cloud,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { MagneticButton } from "@/components/animations/magnetic-button"

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */

/* ── Services mega-menu: 5 subsections matching live WordPress site ── */

interface ServiceItem {
  href: string
  label: string
  icon: LucideIcon
  description: string
}

interface ServiceSection {
  label: string
  icon: LucideIcon
  description: string
  items: ServiceItem[]
}

const servicesSections: ServiceSection[] = [
  {
    label: "Digital Marketing",
    icon: Globe,
    description: "Drive traffic, leads, and revenue with data-driven digital strategies.",
    items: [
      { href: "/marketing-advertising-services/digital-marketing/seo", label: "SEO", icon: Search, description: "SEO services to boost rankings and visibility." },
      { href: "/marketing-advertising-services/digital-marketing/content-marketing", label: "Content Marketing", icon: FileText, description: "Content that drives traffic and builds brands." },
      { href: "/marketing-advertising-services/digital-marketing/blogging", label: "Blogging", icon: BookOpen, description: "Engaging blogs that inform and inspire." },
      { href: "/marketing-advertising-services/digital-marketing/local-seo", label: "Local SEO", icon: MapPin, description: "Get found and grow locally." },
      { href: "/marketing-advertising-services/digital-marketing/search-engine-marketing", label: "Search Engine Marketing", icon: MousePointerClick, description: "Boost visibility with paid search strategies." },
      { href: "/marketing-advertising-services/digital-marketing/social-media-marketing", label: "Social Media Marketing", icon: Share2, description: "Grow your brand with impactful social content." },
      { href: "/marketing-advertising-services/digital-marketing/reputation-management", label: "Reputation Management", icon: Shield, description: "Protect and enhance your brand's online reputation." },
      { href: "/marketing-advertising-services/digital-marketing/review-generation", label: "Review Generation", icon: Star, description: "Get more positive reviews and build trust online." },
      { href: "/marketing-advertising-services/digital-marketing/email-marketing", label: "Email Marketing", icon: Mail, description: "Emails that engage and convert." },
      { href: "/marketing-advertising-services/digital-marketing/lead-management", label: "Lead Management", icon: Users, description: "Capture, track, and convert leads efficiently." },
      { href: "/marketing-advertising-services/digital-marketing/pay-per-click-marketing", label: "PPC Marketing", icon: MousePointerClick, description: "Pay Per Click Marketing & Advertising." },
    ],
  },
  {
    label: "Websites",
    icon: Monitor,
    description: "Beautiful, fast websites engineered for conversions and growth.",
    items: [
      { href: "/marketing-advertising-services/websites/responsive-website-design", label: "Responsive Website Design", icon: Monitor, description: "Websites that look great on any device." },
      { href: "/marketing-advertising-services/websites/responsive-design", label: "Responsive Design", icon: Smartphone, description: "Seamless design across all devices." },
      { href: "/marketing-advertising-services/websites/wordpress-development", label: "WordPress Development", icon: Code, description: "Custom WordPress sites built to perform." },
      { href: "/marketing-advertising-services/websites/web-app-development", label: "Web App Development", icon: Layers, description: "Powerful web apps tailored to your needs." },
      { href: "/marketing-advertising-services/websites/hosting-and-maintenance", label: "Hosting and Maintenance", icon: Server, description: "Reliable hosting with ongoing site support." },
      { href: "/marketing-advertising-services/websites/top-tier-security", label: "Top Tier Security", icon: Lock, description: "Grow your brand with impactful social content." },
      { href: "/marketing-advertising-services/websites/fast-load-times", label: "Fast Load Times", icon: Zap, description: "Optimized for speed and performance." },
      { href: "/marketing-advertising-services/websites/daily-backups", label: "Daily Backups", icon: HardDrive, description: "Your data, safely backed up every day." },
      { href: "/marketing-advertising-services/websites/ongoing-upgrades", label: "Ongoing Upgrades", icon: RefreshCw, description: "Regular updates to keep your site running smoothly." },
      { href: "/marketing-advertising-services/websites/support", label: "Support", icon: Headphones, description: "Expert help when you need it." },
    ],
  },
  {
    label: "Fractional CMO",
    icon: Briefcase,
    description: "Strategic marketing leadership without the full-time cost.",
    items: [
      { href: "/marketing-advertising-services/fractional-cmo", label: "Fractional CMO", icon: Briefcase, description: "Strategic marketing leadership without the full-time cost." },
    ],
  },
  {
    label: "Marketing & Advertising",
    icon: Megaphone,
    description: "Full-service branding, PR, and print campaign solutions.",
    items: [
      { href: "/marketing-advertising-services/public-relations-pr", label: "Public Relations (PR)", icon: Megaphone, description: "Build trust and visibility through strategic PR." },
      { href: "/marketing-advertising-services/branding-corporate-id", label: "Branding & Corporate ID", icon: Palette, description: "Crafting identities that define and differentiate." },
      { href: "/marketing-advertising-services/marketing-plan-development", label: "Marketing Plan Development", icon: ClipboardList, description: "Strategic plans that drive measurable growth." },
      { href: "/marketing-advertising-services/direct-mail-campaigns", label: "Direct Mail Campaigns", icon: Mail, description: "Targeted mail that delivers real results." },
      { href: "/marketing-advertising-services/print-advertising-campaign-development", label: "Print Advertising Campaign Development", icon: Printer, description: "Effective print ads that capture attention and drive action." },
      { href: "/marketing-advertising-services/brochures-flyers-and-posters", label: "Brochures, Flyers, and Posters", icon: FileImage, description: "Eye-catching print materials that inform and inspire." },
      { href: "/marketing-advertising-services/print-collateral-design", label: "Print Collateral Design", icon: PenTool, description: "Professional designs that leave a lasting impression." },
    ],
  },
  {
    label: "Student Enrollment",
    icon: GraduationCap,
    description: "Marketing strategies to fill classrooms and grow enrollment.",
    items: [
      { href: "/industries/increase-student-enrollment-in-beauty-schools", label: "Increase Student Enrollment in Beauty Schools", icon: Scissors, description: "Attracting future beauty pros with proven strategy." },
      { href: "/industries/increase-enrollment-in-private-education", label: "Increase Enrollment in Private Education", icon: GraduationCap, description: "Positioning schools as the clear first choice." },
      { href: "/industries/increasing-student-enrollment-in-vocational-schools", label: "Increasing Student Enrollment in Vocational Schools", icon: Users, description: "Connecting learners to career-driven programs." },
    ],
  },
  {
    label: "AI Services",
    icon: Brain,
    description: "Cutting-edge AI solutions to future-proof your business.",
    items: [
      { href: "/marketing-advertising-services/ai-services", label: "AI Services Overview", icon: Sparkles, description: "Explore our full suite of AI-powered business solutions." },
      { href: "/marketing-advertising-services/ai-services/ai-engine-optimization", label: "AI Engine Optimization (AIO)", icon: Brain, description: "Get found when customers ask AI assistants for recommendations." },
      { href: "/marketing-advertising-services/ai-services/ai-development", label: "AI Development", icon: Cpu, description: "Custom chatbots, content systems, and workflow automation." },
      { href: "/marketing-advertising-services/ai-services/ai-agentic-setup", label: "AI Agentic Setup", icon: Bot, description: "Autonomous AI agents that work for your business 24/7." },
    ],
  },
]

interface IndustryItem {
  href: string
  label: string
  icon: LucideIcon
  description: string
}

const industriesItems: IndustryItem[] = [
  { href: "/industries/builders-developers", label: "Builders & Developers", icon: Building2, description: "Marketing solutions tailored for builders and developers." },
  { href: "/industries/home-service-businesses", label: "Home Services", icon: Home, description: "Helping home service brands grow and get noticed." },
  { href: "/industries/beauty-esthetician-marketing-advertising", label: "Salon & Beauty Industry", icon: Scissors, description: "Beauty brand marketing that attracts and retains clients." },
  { href: "/industries/physical-therapy-marketing-advertising", label: "Physical Therapists", icon: Stethoscope, description: "Marketing that helps physical therapy practices grow and connect." },
  { href: "/med-spa", label: "Medical Spa", icon: Sparkles, description: "Smart marketing solutions for growing med spa brands." },
  { href: "/industries/real-estate-marketing-advertising", label: "Real Estate", icon: HardHat, description: "Marketing that moves properties and builds reputations." },
  { href: "/industries/saas-marketing", label: "SAAS", icon: Cloud, description: "Scalable marketing for high-growth SaaS brands." },
  { href: "/industries/beauty-school-marketing", label: "Beauty Schools", icon: GraduationCap, description: "Attract students and build your beauty school brand." },
  { href: "/industries/roofing-contractor-marketing", label: "Roofing", icon: Wrench, description: "Marketing that helps roofing contractors get more leads." },
]

const aboutItems = [
  { href: "/about/our-founder", label: "Our Founder" },
  { href: "/about/our-history", label: "Our History" },
  { href: "/blog", label: "Blog" },
  { href: "/research", label: "Research" },
]

type DropdownKey = "services" | "industries" | "about"

const navLinks: { href: string; label: string; dropdown?: DropdownKey }[] = [
  { href: "#", label: "Services", dropdown: "services" },
  { href: "/work", label: "Work" },
  { href: "#", label: "Industries", dropdown: "industries" },
  { href: "/about", label: "About", dropdown: "about" },
]

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [activeServiceIdx, setActiveServiceIdx] = useState(0)
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

  const openDropdown = useCallback((key: DropdownKey) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setActiveDropdown(key)
    if (key === "services") setActiveServiceIdx(0)
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
        <span className="hidden font-semibold uppercase tracking-wide text-foreground/80 sm:inline">
          SWFL Marketing &amp; Advertising Agency
        </span>
        <div className="flex items-center gap-2 ml-auto">
          <Link
            href="/general-support"
            className="hidden transition-colors hover:text-foreground sm:inline font-medium"
          >
            General Support
          </Link>
          <span className="hidden text-muted-foreground/50 sm:inline">|</span>
          <span className="hidden sm:inline">Need Help? Contact Olympia Marketing Support Team</span>
          <Link
            href="tel:2393084011"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground font-medium"
          >
            <Phone className="h-3 w-3" />
            <span>239-308-4011</span>
          </Link>
        </div>
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
                  {link.href !== "#" ? (
                    <Link
                      href={link.href}
                      className={`relative flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                        activeDropdown === link.dropdown
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      aria-expanded={activeDropdown === link.dropdown}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          activeDropdown === link.dropdown ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                  ) : (
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
                  )}
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
                href="/contact"
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

      {/* ─── Services mega-menu (left categories + right sub-services) ─── */}
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
                <div className="flex gap-6">
                  {/* ── Left panel: category list ── */}
                  <div className="w-64 shrink-0 border-r border-border/30 pr-6">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      Our Services
                    </p>
                    <div className="flex flex-col gap-0.5">
                      {servicesSections.map((section, idx) => {
                        const Icon = section.icon
                        const isActive = idx === activeServiceIdx
                        return (
                          <button
                            key={section.label}
                            className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-all ${
                              isActive
                                ? "bg-primary/10 text-foreground"
                                : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                            }`}
                            onMouseEnter={() => setActiveServiceIdx(idx)}
                          >
                            <Icon className={`h-4 w-4 shrink-0 transition-colors ${isActive ? "text-primary" : "text-muted-foreground/60 group-hover:text-primary/70"}`} />
                            {section.label}
                            <ChevronRight className={`ml-auto h-3.5 w-3.5 transition-all ${isActive ? "text-primary opacity-100" : "opacity-0 group-hover:opacity-50"}`} />
                          </button>
                        )
                      })}
                    </div>

                    {/* CTA below categories */}
                    <div className="mt-5 border-t border-border/30 pt-5">
                      <Link
                        href="/contact"
                        className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-all hover:brightness-110"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <Globe className="h-3.5 w-3.5" />
                        Schedule Free Consult
                        <ArrowRight className="ml-auto h-3 w-3" />
                      </Link>
                    </div>
                  </div>

                  {/* ── Right panel: active category's sub-services ── */}
                  <div className="flex-1 min-w-0">
                    <div className={`grid gap-x-6 gap-y-4 ${
                      servicesSections[activeServiceIdx].items.length <= 3
                        ? "grid-cols-3"
                        : "grid-cols-4"
                    }`}>
                      {servicesSections[activeServiceIdx].items.map((item) => {
                        const ItemIcon = item.icon
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-secondary/60"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                              <ItemIcon className="h-5 w-5 text-primary/70 transition-colors group-hover:text-primary" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-[13px] font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                                {item.label}
                              </p>
                              <p className="mt-1 text-[11px] leading-snug text-muted-foreground line-clamp-2">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Industries mega-menu ─── */}
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
                <div className="grid grid-cols-4 gap-x-6 gap-y-4">
                  {industriesItems.map((item) => {
                    const ItemIcon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-secondary/60"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                          <ItemIcon className="h-5 w-5 text-primary/70 transition-colors group-hover:text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[13px] font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                            {item.label}
                          </p>
                          <p className="mt-1 text-[11px] leading-snug text-muted-foreground line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── About dropdown ─── */}
      <AnimatePresence>
        {activeDropdown === "about" && (
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
                <div className="flex flex-col gap-0.5" style={{ maxWidth: 280 }}>
                  {aboutItems.map((item) => (
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
                        {servicesSections.map((section) => (
                          <div key={section.label} className="mb-4">
                            <p className="mb-2 mt-1 text-xs font-semibold uppercase tracking-widest text-primary">
                              {section.label}
                            </p>
                            <div className="flex flex-col gap-0.5 pl-2">
                              {section.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Work link */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href="/work"
                    className={`block py-3 text-2xl font-bold transition-colors ${
                      pathname === "/work"
                        ? "gradient-text"
                        : "text-foreground hover:text-muted-foreground"
                    }`}
                  >
                    Work
                  </Link>
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

                {/* About accordion */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    className="flex w-full items-center justify-between py-3 text-2xl font-bold text-foreground"
                    onClick={() => setMobileExpanded(mobileExpanded === "about" ? null : "about")}
                  >
                    About
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${
                        mobileExpanded === "about" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === "about" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-0.5 pl-2 mb-3">
                          {aboutItems.map((item) => (
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

                {/* CTA + Phone */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-start gap-4 pt-6 mt-4 border-t border-border/40"
                >
                  <Link
                    href="/contact"
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
