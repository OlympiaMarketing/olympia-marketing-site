// ---------------------------------------------------------------------------
// Industry-specific configuration for conversion components
// ---------------------------------------------------------------------------

export interface CalculatorConfig {
  /** Display label for the industry */
  label: string
  /** What the slider controls (e.g., "Monthly New Patients") */
  sliderLabel: string
  /** Min slider value */
  min: number
  /** Max slider value */
  max: number
  /** Default slider value */
  defaultValue: number
  /** Step increment */
  step: number
  /** Average revenue per unit (customer, patient, deal, etc.) */
  revenuePerUnit: number
  /** Label for revenue unit */
  unitLabel: string
  /** Typical conversion rate from marketing to booked */
  conversionRate: number
  /** Monthly marketing spend assumption */
  monthlySpend: number
}

export interface IndustryBenchmark {
  label: string
  value: string
  description: string
}

export interface IndustryCTAConfig {
  headline: string
  subheadline: string
  ctaLabel: string
  leadMagnetTitle: string
  leadMagnetDescription: string
  urgencyMessage: string
}

export interface IndustryData {
  slug: string
  name: string
  calculator: CalculatorConfig
  benchmarks: IndustryBenchmark[]
  cta: IndustryCTAConfig
  painPoints: string[]
}

// ---------------------------------------------------------------------------
// Per-industry configurations
// ---------------------------------------------------------------------------

const INDUSTRY_CONFIGS: Record<string, IndustryData> = {
  "med-spa": {
    slug: "med-spa",
    name: "Medical Spa",
    calculator: {
      label: "Med Spa Revenue Calculator",
      sliderLabel: "New Patients Per Month",
      min: 5,
      max: 100,
      defaultValue: 20,
      step: 5,
      revenuePerUnit: 1200,
      unitLabel: "patient",
      conversionRate: 0.12,
      monthlySpend: 3000,
    },
    benchmarks: [
      { label: "Average Patient Value", value: "$1,200", description: "Per visit for injectables and laser treatments" },
      { label: "Patient Retention Rate", value: "60-70%", description: "Top med spas retain with proper follow-up" },
      { label: "Cost Per Lead (Google Ads)", value: "$35-75", description: "Industry average for med spa PPC" },
      { label: "SEO Traffic Growth", value: "3-6 months", description: "Time to rank for local med spa keywords" },
    ],
    cta: {
      headline: "Ready to Fill Your Treatment Rooms?",
      subheadline: "Get a custom marketing plan built specifically for your med spa. We have helped med spas increase new patient bookings by over 300%.",
      ctaLabel: "Get My Free Med Spa Growth Plan",
      leadMagnetTitle: "Free: Med Spa Marketing Playbook",
      leadMagnetDescription: "Download our 12-page guide covering the exact strategies we use to help med spas generate 40+ new patient bookings per month.",
      urgencyMessage: "We only take on 2 new med spa clients per quarter to ensure dedicated attention.",
    },
    painPoints: [
      "Struggling to compete with corporate med spa chains",
      "Spending on ads but not seeing enough bookings",
      "Patients come once but do not return for follow-up treatments",
      "Your website does not rank for key treatment keywords",
    ],
  },
  "beauty-esthetician-marketing-advertising": {
    slug: "beauty-esthetician-marketing-advertising",
    name: "Salon & Beauty",
    calculator: {
      label: "Salon Revenue Calculator",
      sliderLabel: "New Clients Per Month",
      min: 5,
      max: 80,
      defaultValue: 15,
      step: 5,
      revenuePerUnit: 150,
      unitLabel: "client",
      conversionRate: 0.15,
      monthlySpend: 1500,
    },
    benchmarks: [
      { label: "Average Client Lifetime Value", value: "$1,800", description: "Over 12 months with regular appointments" },
      { label: "Rebooking Rate (Top Salons)", value: "75-85%", description: "Industry leaders automate rebooking" },
      { label: "Social Media Conversion", value: "2-5%", description: "Instagram to booked appointment rate" },
      { label: "Google Business Profile", value: "70%", description: "Of salon clients find providers via Google" },
    ],
    cta: {
      headline: "Ready to Keep Every Chair Full?",
      subheadline: "Our salon marketing strategies have helped beauty businesses increase bookings by 200% in the first 6 months.",
      ctaLabel: "Get My Free Salon Growth Plan",
      leadMagnetTitle: "Free: Salon Booking Accelerator Guide",
      leadMagnetDescription: "Learn the 7 strategies top salons use to maintain 90%+ chair utilization and build a waitlist of new clients.",
      urgencyMessage: "Limited availability: we work with only 3 salons per market to avoid conflicts.",
    },
    painPoints: [
      "Empty chairs during weekdays costing you revenue",
      "Relying on walk-ins instead of predictable bookings",
      "Losing clients to competitors with stronger online presence",
      "Social media efforts that do not translate to appointments",
    ],
  },
  "physical-therapy-marketing-advertising": {
    slug: "physical-therapy-marketing-advertising",
    name: "Physical Therapy",
    calculator: {
      label: "PT Practice Revenue Calculator",
      sliderLabel: "New Patients Per Month",
      min: 5,
      max: 60,
      defaultValue: 15,
      step: 5,
      revenuePerUnit: 2500,
      unitLabel: "patient",
      conversionRate: 0.10,
      monthlySpend: 2500,
    },
    benchmarks: [
      { label: "Average Patient Case Value", value: "$2,500", description: "Over a typical 8-12 visit treatment plan" },
      { label: "Direct Access Searches", value: "+340%", description: "Growth in patients searching without referrals" },
      { label: "No-Show Rate (Industry)", value: "15-20%", description: "Reduced to under 5% with automated reminders" },
      { label: "Physician Referral Decline", value: "30%", description: "Drop in referral-based patients since 2020" },
    ],
    cta: {
      headline: "Ready to Build a Referral-Free Patient Pipeline?",
      subheadline: "We help PT practices generate direct-access patients through SEO and paid search, reducing dependence on physician referrals.",
      ctaLabel: "Get My Free PT Marketing Analysis",
      leadMagnetTitle: "Free: PT Practice Growth Blueprint",
      leadMagnetDescription: "Discover how to attract direct-access patients and build a sustainable pipeline without relying solely on physician referrals.",
      urgencyMessage: "Direct access patient volume is surging. Position your practice before competitors do.",
    },
    painPoints: [
      "Over-reliance on physician referrals that are declining",
      "Patients choosing competitors who rank higher on Google",
      "High no-show rates eating into your revenue",
      "Difficulty communicating your specializations online",
    ],
  },
  "real-estate-marketing-advertising": {
    slug: "real-estate-marketing-advertising",
    name: "Real Estate",
    calculator: {
      label: "Real Estate Marketing ROI Calculator",
      sliderLabel: "Additional Closings Per Month",
      min: 1,
      max: 20,
      defaultValue: 3,
      step: 1,
      revenuePerUnit: 9000,
      unitLabel: "closing",
      conversionRate: 0.03,
      monthlySpend: 2000,
    },
    benchmarks: [
      { label: "Average Commission", value: "$9,000", description: "Based on $300K home at 3% commission" },
      { label: "Online Lead Conversion", value: "2-3%", description: "Industry average for real estate leads" },
      { label: "Cost Per Lead (PPC)", value: "$30-80", description: "Google Ads for real estate keywords" },
      { label: "Agent Attrition", value: "87%", description: "Of new agents quit within 5 years" },
    ],
    cta: {
      headline: "Ready to Dominate Your Local Market?",
      subheadline: "Our real estate marketing clients close 5-10 additional deals per month through targeted digital strategies.",
      ctaLabel: "Get My Free Market Analysis",
      leadMagnetTitle: "Free: Real Estate Digital Marketing Playbook",
      leadMagnetDescription: "The exact strategies top-producing agents use to generate 50+ qualified leads per month consistently.",
      urgencyMessage: "Market conditions shift fast. Get ahead of competing agents in your area now.",
    },
    painPoints: [
      "Buying leads from Zillow that never convert",
      "Inconsistent deal flow month to month",
      "Competing agents dominating local search results",
      "No system for nurturing long-term prospects",
    ],
  },
  "builders-developers": {
    slug: "builders-developers",
    name: "Builder & Developer",
    calculator: {
      label: "Builder Marketing ROI Calculator",
      sliderLabel: "Additional Home Sales Per Quarter",
      min: 1,
      max: 20,
      defaultValue: 4,
      step: 1,
      revenuePerUnit: 45000,
      unitLabel: "home sale",
      conversionRate: 0.05,
      monthlySpend: 5000,
    },
    benchmarks: [
      { label: "Average Profit Per Home", value: "$45,000", description: "Net margin on new construction" },
      { label: "Buyer Journey Length", value: "6-12 months", description: "From first search to contract signing" },
      { label: "Online Research", value: "95%", description: "Of home buyers start their search online" },
      { label: "Video Tour Impact", value: "+403%", description: "More inquiries for listings with video" },
    ],
    cta: {
      headline: "Ready to Sell Out Your Next Development?",
      subheadline: "We help builders and developers pre-sell communities before construction completes through strategic digital marketing.",
      ctaLabel: "Get My Free Builder Marketing Strategy",
      leadMagnetTitle: "Free: Builder Pre-Sale Marketing System",
      leadMagnetDescription: "Learn how top builders pre-sell 80% of units before completion using digital marketing and virtual tours.",
      urgencyMessage: "Construction costs rise monthly. Fill your pipeline now to maximize margins.",
    },
    painPoints: [
      "Unsold inventory tying up capital and increasing costs",
      "Competing against established builders with bigger budgets",
      "Model home traffic declining year over year",
      "No digital strategy to reach buyers researching online",
    ],
  },
  "beauty-school-marketing": {
    slug: "beauty-school-marketing",
    name: "Beauty School",
    calculator: {
      label: "Beauty School Enrollment Calculator",
      sliderLabel: "New Student Enrollments Per Month",
      min: 2,
      max: 30,
      defaultValue: 8,
      step: 1,
      revenuePerUnit: 8000,
      unitLabel: "enrollment",
      conversionRate: 0.08,
      monthlySpend: 2000,
    },
    benchmarks: [
      { label: "Average Tuition Revenue", value: "$8,000", description: "Per enrolled student" },
      { label: "Inquiry-to-Enrollment", value: "8-12%", description: "Industry conversion rate" },
      { label: "Cost Per Enrollment", value: "$200-500", description: "Through digital marketing channels" },
      { label: "Online Research", value: "85%", description: "Of prospective students research schools online" },
    ],
    cta: {
      headline: "Ready to Fill Every Class to Capacity?",
      subheadline: "We have helped beauty schools increase enrollment by over 150% through targeted digital campaigns and optimized admissions funnels.",
      ctaLabel: "Get My Free Enrollment Growth Plan",
      leadMagnetTitle: "Free: Beauty School Enrollment Playbook",
      leadMagnetDescription: "The 5-step system for turning online inquiries into enrolled students, with real case studies from schools we have grown.",
      urgencyMessage: "Class start dates are approaching. Fill empty seats before your next cohort begins.",
    },
    painPoints: [
      "Empty seats in upcoming class cohorts",
      "High cost per inquiry from current marketing",
      "Prospective students choosing competitor schools",
      "Admissions process losing leads before they enroll",
    ],
  },
  "home-service-businesses": {
    slug: "home-service-businesses",
    name: "Home Services",
    calculator: {
      label: "Home Services Revenue Calculator",
      sliderLabel: "New Jobs Per Month",
      min: 5,
      max: 80,
      defaultValue: 20,
      step: 5,
      revenuePerUnit: 800,
      unitLabel: "job",
      conversionRate: 0.15,
      monthlySpend: 2000,
    },
    benchmarks: [
      { label: "Average Job Value", value: "$800", description: "Across HVAC, plumbing, electrical, and cleaning" },
      { label: "Google Local Pack", value: "46%", description: "Of all Google searches have local intent" },
      { label: "Review Impact", value: "4.5+ stars", description: "Minimum rating to appear in top local results" },
      { label: "Same-Day Booking", value: "60%", description: "Of home service customers want same-day service" },
    ],
    cta: {
      headline: "Ready to Keep Your Crews Booked Solid?",
      subheadline: "Our home service clients see a 300% increase in qualified leads within the first 90 days of working with us.",
      ctaLabel: "Get My Free Lead Generation Plan",
      leadMagnetTitle: "Free: Home Services Marketing Checklist",
      leadMagnetDescription: "The 15-point checklist top home service companies use to dominate Google Local Pack and generate 50+ calls per week.",
      urgencyMessage: "Peak season is approaching. Lock in your marketing strategy before your competitors do.",
    },
    painPoints: [
      "Feast-or-famine lead flow throughout the year",
      "Paying too much for leads on HomeAdvisor or Angi",
      "Competitors outranking you in Google Maps",
      "No system to generate and manage online reviews",
    ],
  },
  "saas-marketing": {
    slug: "saas-marketing",
    name: "SaaS",
    calculator: {
      label: "SaaS Growth Calculator",
      sliderLabel: "New Monthly Signups",
      min: 10,
      max: 500,
      defaultValue: 50,
      step: 10,
      revenuePerUnit: 99,
      unitLabel: "signup",
      conversionRate: 0.03,
      monthlySpend: 5000,
    },
    benchmarks: [
      { label: "Average MRR Per Customer", value: "$99", description: "Typical B2B SaaS monthly subscription" },
      { label: "CAC Payback Period", value: "12-18 months", description: "Industry average for SaaS companies" },
      { label: "Trial-to-Paid Conversion", value: "15-25%", description: "For well-optimized onboarding funnels" },
      { label: "Organic Traffic Value", value: "40-60%", description: "Of SaaS signups from content and SEO" },
    ],
    cta: {
      headline: "Ready to Scale Your MRR?",
      subheadline: "We helped one SaaS client go from zero to over $100K MRR in under 6 months. Let us build your growth engine.",
      ctaLabel: "Get My Free SaaS Growth Audit",
      leadMagnetTitle: "Free: SaaS Marketing Scaling Framework",
      leadMagnetDescription: "Our proven framework for scaling SaaS companies from $10K to $100K+ MRR through content, SEO, and paid acquisition.",
      urgencyMessage: "Your competitors are investing in growth marketing right now. Do not fall behind.",
    },
    painPoints: [
      "High customer acquisition costs eating into margins",
      "Low trial-to-paid conversion rates",
      "Struggling to differentiate in a crowded market",
      "Content strategy that generates traffic but not signups",
    ],
  },
  "roofing-contractor-marketing": {
    slug: "roofing-contractor-marketing",
    name: "Roofing Contractor",
    calculator: {
      label: "Roofing Revenue Calculator",
      sliderLabel: "New Roofing Jobs Per Month",
      min: 2,
      max: 30,
      defaultValue: 8,
      step: 1,
      revenuePerUnit: 12000,
      unitLabel: "job",
      conversionRate: 0.10,
      monthlySpend: 2500,
    },
    benchmarks: [
      { label: "Average Job Value", value: "$12,000", description: "Full roof replacement" },
      { label: "Close Rate (Estimates)", value: "30-40%", description: "Industry average for in-home estimates" },
      { label: "Cost Per Lead", value: "$50-150", description: "Google Ads for roofing keywords" },
      { label: "Storm Season Surge", value: "300%+", description: "Increase in search volume after storms" },
    ],
    cta: {
      headline: "Ready to Roof More Homes Every Month?",
      subheadline: "Our roofing clients generate 20+ qualified leads per week through Google Ads, SEO, and reputation management.",
      ctaLabel: "Get My Free Roofing Marketing Plan",
      leadMagnetTitle: "Free: Roofing Contractor Lead Generation Guide",
      leadMagnetDescription: "How top roofing companies generate $500K+ in annual revenue from digital marketing alone.",
      urgencyMessage: "Storm season is coming. Position your company to capture the surge in demand.",
    },
    painPoints: [
      "Relying on door-knocking and yard signs for leads",
      "Storm chasers undercutting your pricing",
      "Low Google reviews hurting your credibility",
      "No way to capture leads when homeowners search online",
    ],
  },
}

/**
 * Get industry configuration by slug. Supports both simple slugs
 * and nested paths (e.g., "industries/home-service-businesses").
 */
export function getIndustryConfig(slugOrPath: string): IndustryData | null {
  // Try direct match first
  if (INDUSTRY_CONFIGS[slugOrPath]) return INDUSTRY_CONFIGS[slugOrPath]

  // Try extracting the last segment for nested paths
  const lastSegment = slugOrPath.split("/").pop()
  if (lastSegment && INDUSTRY_CONFIGS[lastSegment]) return INDUSTRY_CONFIGS[lastSegment]

  return null
}
