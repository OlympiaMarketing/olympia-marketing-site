export interface LeadMagnet {
  title: string
  description: string
}

export interface Testimonial {
  quote: string
  name: string
  title: string
  initials: string
  resultStat: string
}

export interface StatHighlight {
  value: string
  label: string
  description: string
}

export interface ServiceConversionConfig {
  ctaCopy: string
  ctaSubtext: string
  leadMagnet: LeadMagnet
  testimonial: Testimonial
  statHighlight: StatHighlight
  urgencyHook: string
  sidebarHeading: string
  sidebarDescription: string
  guaranteeBadge: boolean
}

const TESTIMONIALS = {
  kevinBartlett: {
    quote:
      "Zach's team and I have worked together for 5+ years, in that time Olympia has helped me transform my business from a simple 1-man show to a large brokerage. I can't recommend Olympia Marketing enough!",
    name: "Kevin Bartlett",
    title: "Owner - Knowledge Base Real Estate",
    initials: "KB",
  },
  lauraLorusso: {
    quote:
      "Olympia Marketing helped me optimize my squarespace site and implemented marketing (AdWords). I was unsure whether my business was going to take off - now I'm concerned I'm growing too quickly! We're all booked out.",
    name: "Laura Lorusso",
    title: "Owner - Skincare Academy",
    initials: "LL",
  },
  joeG: {
    quote:
      "We engaged with Olympia in September 2023 with only a few changes to our website our traffic increased 100x, and Olympia has been instrumental in getting us to over $100k MRR in less than 6 months.",
    name: "Joe G.",
    title: "CEO - AI SAAS Company",
    initials: "JG",
  },
  scottKern: {
    quote:
      "We just launched a new website with Olympia Marketing. We've been unbelievably amazed by the results. We were growing organically through word of mouth, but in only 6 months since launch we've increased revenue 300%.",
    name: "Scott Kern",
    title: "Owner - Quality Service Company",
    initials: "SK",
  },
  willSchwarz: {
    quote:
      "Our new website has performed phenomenally. Sitting down with the Olympia Marketing team was fantastic and they showed us how to use our website to market our company ongoing - for virtually FREE! We're excited for the future.",
    name: "Will Schwarz",
    title: "Co-Owner RetailMTS",
    initials: "WS",
  },
} as const

const SERVICE_CONVERSION_CONFIGS: Record<string, ServiceConversionConfig> = {
  // =========================================================================
  // DIGITAL MARKETING PAGES
  // =========================================================================
  "marketing-advertising-services/digital-marketing": {
    ctaCopy: "Get Your Free Digital Marketing Roadmap",
    ctaSubtext: "Discover which channels will drive the most growth for your business.",
    leadMagnet: {
      title: "Digital Marketing Scorecard",
      description: "Get a 1-100 score across SEO, ads, social, and email with a prioritized action plan.",
    },
    testimonial: { ...TESTIMONIALS.joeG, resultStat: "100x traffic increase" },
    statHighlight: { value: "2x", label: "Traffic in 90 Days", description: "Average traffic growth for new digital marketing clients" },
    urgencyHook: "Your competitors are investing in digital marketing right now. Every month without a strategy is market share you're giving away.",
    sidebarHeading: "Get a Free Digital Marketing Audit",
    sidebarDescription: "See exactly where your digital presence stands and what to fix first.",
    guaranteeBadge: true,
  },
  "marketing-advertising-services/digital-marketing/seo": {
    ctaCopy: "See Where You Rank — Free SEO Audit",
    ctaSubtext: "Get a competitive gap analysis showing keywords your competitors rank for that you don't.",
    leadMagnet: {
      title: "SEO Gap Analysis",
      description: "See which keywords your competitors rank for — and your fastest path to page one.",
    },
    testimonial: { ...TESTIMONIALS.joeG, resultStat: "100x traffic increase" },
    statHighlight: { value: "90%+", label: "Of Business Comes From Search", description: "Search still drives the vast majority of all new business" },
    urgencyHook: "Google updates its algorithm constantly. The rankings you don't have are costing you leads every single day.",
    sidebarHeading: "Get a Free SEO Audit",
    sidebarDescription: "Find out exactly where you rank and what it takes to reach page one.",
    guaranteeBadge: true,
  },
  "marketing-advertising-services/digital-marketing/local-seo": {
    ctaCopy: "Claim Your Spot in the Local Map Pack",
    ctaSubtext: "There are only 3 spots in Google's Local Map Pack. Let's make sure one is yours.",
    leadMagnet: {
      title: "Google Business Profile Audit",
      description: "See where you rank in the local map pack vs. your top 3 competitors.",
    },
    testimonial: { ...TESTIMONIALS.kevinBartlett, resultStat: "Transformed from 1-man show to large brokerage" },
    statHighlight: { value: "2x", label: "Local Leads in 90 Days", description: "Average local lead growth for SWFL businesses" },
    urgencyHook: "There are only 3 spots in Google's Local Map Pack. If your competitor is there and you're not, you're invisible to local customers.",
    sidebarHeading: "Get a Free Local SEO Audit",
    sidebarDescription: "See your Google Business Profile score and local map pack ranking.",
    guaranteeBadge: true,
  },
  "marketing-advertising-services/digital-marketing/content-marketing": {
    ctaCopy: "Get Your Content Strategy Blueprint — Free",
    ctaSubtext: "See which topics your competitors rank for and get a 90-day editorial calendar.",
    leadMagnet: {
      title: "Content Gap Analysis + 90-Day Calendar",
      description: "Discover untapped content opportunities and get a ready-to-execute publishing plan.",
    },
    testimonial: { ...TESTIMONIALS.joeG, resultStat: "100x traffic increase" },
    statHighlight: { value: "10x", label: "More Leads Than Paid Ads", description: "Content marketing delivers compounding returns over time" },
    urgencyHook: "Every day without fresh, optimized content is a day your competitors are building organic authority you'll have to work twice as hard to overcome.",
    sidebarHeading: "Get a Free Content Audit",
    sidebarDescription: "See what content gaps are costing you traffic and leads.",
    guaranteeBadge: true,
  },
  "marketing-advertising-services/digital-marketing/blogging": {
    ctaCopy: "Start Your Blog — Get 3 Free Topic Ideas",
    ctaSubtext: "We'll research your industry and deliver 3 blog topics proven to drive traffic.",
    leadMagnet: {
      title: "Blog Starter Kit: 10 Custom Topic Ideas",
      description: "Get 10 SEO-optimized blog topic ideas custom-generated for your industry.",
    },
    testimonial: { ...TESTIMONIALS.scottKern, resultStat: "300% revenue increase" },
    statHighlight: { value: "2x", label: "Traffic in 90 Days", description: "Clients who blog consistently see rapid organic growth" },
    urgencyHook: "Companies that blog get 67% more leads than those that don't. Every week without a post is leads going to your competitors.",
    sidebarHeading: "Get a Free Blog Strategy",
    sidebarDescription: "See which topics will drive the most traffic for your business.",
    guaranteeBadge: false,
  },
  "marketing-advertising-services/digital-marketing/email-marketing": {
    ctaCopy: "Reactivate Your Customer List — Free Email Audit",
    ctaSubtext: "Find out how many of your contacts are still reachable and what to send them.",
    leadMagnet: {
      title: "Email Deliverability & List Health Report",
      description: "Check your bounce rates, spam scores, and segment quality — free.",
    },
    testimonial: { ...TESTIMONIALS.lauraLorusso, resultStat: "Booked out completely" },
    statHighlight: { value: "100%", label: "Money-Back Guarantee", description: "We guarantee measurable open rate improvements" },
    urgencyHook: "Your email list loses 22% of its value every year through decay. The longer you wait to re-engage, the more customers you lose permanently.",
    sidebarHeading: "Get a Free Email Audit",
    sidebarDescription: "See your deliverability score and how many contacts you're actually reaching.",
    guaranteeBadge: true,
  },
  "marketing-advertising-services/digital-marketing/social-media-marketing": {
    ctaCopy: "Get Your Social Media Game Plan — Free",
    ctaSubtext: "See how your profiles stack up against your top 3 competitors.",
    leadMagnet: {
      title: "Social Media Competitor Benchmark Report",
      description: "Compare your posting frequency, engagement rate, and follower growth to competitors.",
    },
    testimonial: { ...TESTIMONIALS.lauraLorusso, resultStat: "Booked out completely" },
    statHighlight: { value: "2x", label: "Engagement in 90 Days", description: "Social media builds your brand while search closes the sale" },
    urgencyHook: "Social media algorithms punish inconsistency. Every week you go dark, your organic reach drops. Start now before the algorithm forgets you.",
    sidebarHeading: "Get a Free Social Media Audit",
    sidebarDescription: "See where your social presence stands and what to prioritize.",
    guaranteeBadge: false,
  },
  "marketing-advertising-services/digital-marketing/search-engine-marketing": {
    ctaCopy: "Launch Your First Ad Campaign — Free Strategy Session",
    ctaSubtext: "Get immediate visibility while your SEO builds momentum.",
    leadMagnet: {
      title: "Google Ads Wasted Spend Analysis",
      description: "See how much money you're losing on poor keyword targeting and ad copy.",
    },
    testimonial: { ...TESTIMONIALS.joeG, resultStat: "$100k MRR in 6 months" },
    statHighlight: { value: "2x", label: "Qualified Traffic in 90 Days", description: "SEM delivers immediate visibility and measurable results" },
    urgencyHook: "Your competitors are bidding on your brand name right now. Every day without SEM is a day they're stealing your customers at the top of Google.",
    sidebarHeading: "Get a Free SEM Audit",
    sidebarDescription: "Find out what your competitors are spending and where you can win.",
    guaranteeBadge: true,
  },
  "marketing-advertising-services/digital-marketing/pay-per-click-marketing": {
    ctaCopy: "Stop Wasting Ad Spend — Free PPC Audit",
    ctaSubtext: "See exactly where your ad budget is going and how to get more from every dollar.",
    leadMagnet: {
      title: "PPC Waste Report",
      description: "Analyze your Google Ads account for wasted spend, poor quality scores, and missed opportunities.",
    },
    testimonial: { ...TESTIMONIALS.joeG, resultStat: "$100k MRR in 6 months" },
    statHighlight: { value: "100%", label: "ROI Guarantee", description: "We guarantee a positive return on your PPC spend" },
    urgencyHook: "Your cost-per-click goes up every quarter as more competitors enter the auction. Lock in lower CPCs now before your market gets more expensive.",
    sidebarHeading: "Get a Free PPC Audit",
    sidebarDescription: "See how much of your ad spend is being wasted — and how to fix it.",
    guaranteeBadge: true,
  },
  "marketing-advertising-services/digital-marketing/lead-management": {
    ctaCopy: "Fix Your Leaky Sales Funnel — Free Lead Audit",
    ctaSubtext: "See how many leads you're losing and where the gaps are.",
    leadMagnet: {
      title: "Lead-to-Close Revenue Analysis",
      description: "Estimate the revenue you're losing from leads that go uncontacted or unqualified.",
    },
    testimonial: { ...TESTIMONIALS.kevinBartlett, resultStat: "Transformed from 1-man show to large brokerage" },
    statHighlight: { value: "2x", label: "More Conversions in 90 Days", description: "Proper lead management doubles your close rate" },
    urgencyHook: "Leads contacted within 5 minutes are 9x more likely to convert. Without a lead management system, you're losing deals while they're still warm.",
    sidebarHeading: "Get a Free Lead Funnel Audit",
    sidebarDescription: "Find out where leads are falling through the cracks in your sales process.",
    guaranteeBadge: true,
  },
  "marketing-advertising-services/digital-marketing/review-generation": {
    ctaCopy: "Get 50+ 5-Star Reviews in 90 Days",
    ctaSubtext: "We'll set up an automated review system that works while you sleep.",
    leadMagnet: {
      title: "Review Reputation Score Report",
      description: "See your current rating, review velocity, and how you compare to local competitors.",
    },
    testimonial: { ...TESTIMONIALS.lauraLorusso, resultStat: "Booked out completely" },
    statHighlight: { value: "2x", label: "More Clicks With 50+ Reviews", description: "Businesses with 50+ reviews get dramatically more clicks" },
    urgencyHook: "88% of consumers trust reviews as much as personal recommendations. If your competitor has 100 reviews and you have 12, you've already lost the sale.",
    sidebarHeading: "Get a Free Review Audit",
    sidebarDescription: "See your review score and how it compares to your top competitors.",
    guaranteeBadge: false,
  },
  "marketing-advertising-services/digital-marketing/reputation-management": {
    ctaCopy: "Protect Your Brand — Free Reputation Scan",
    ctaSubtext: "See what shows up when customers Google your business name.",
    leadMagnet: {
      title: "Brand Sentiment Analysis",
      description: "Monitor Google page 1 results for your business and flag any negative content.",
    },
    testimonial: { ...TESTIMONIALS.willSchwarz, resultStat: "Phenomenal website performance" },
    statHighlight: { value: "100%", label: "Satisfaction Guarantee", description: "We guarantee to improve your online sentiment" },
    urgencyHook: "One bad article on page 1 of Google can cost your business 22% of its customers. Every day it sits there unchallenged costs you money.",
    sidebarHeading: "Get a Free Reputation Scan",
    sidebarDescription: "See what's being said about your business online — before your customers do.",
    guaranteeBadge: true,
  },

  // =========================================================================
  // WEBSITE SERVICES PAGES
  // =========================================================================
  "marketing-advertising-services/websites": {
    ctaCopy: "Get Your Free Website Assessment",
    ctaSubtext: "Find out how your current site stacks up on speed, mobile, SEO, and security.",
    leadMagnet: {
      title: "Website Health Scorecard",
      description: "Get your site graded on speed, mobile-friendliness, SEO, and security with actionable fixes.",
    },
    testimonial: { ...TESTIMONIALS.scottKern, resultStat: "300% revenue increase" },
    statHighlight: { value: "300%", label: "Revenue After Launch", description: "Average revenue increase after a new website launch" },
    urgencyHook: "Every day your website underperforms, you lose leads to competitors who invested in theirs. Book your free assessment this week.",
    sidebarHeading: "Get a Free Website Assessment",
    sidebarDescription: "See exactly how your site performs and what to improve first.",
    guaranteeBadge: true,
  },
  "marketing-advertising-services/websites/responsive-website-design": {
    ctaCopy: "See How Your Site Looks on Mobile — Free Test",
    ctaSubtext: "We'll show you exactly how your site renders on the 5 most popular devices.",
    leadMagnet: {
      title: "Mobile Responsiveness Audit",
      description: "Screenshots of your site on 5 device types with a fix-it priority list.",
    },
    testimonial: { ...TESTIMONIALS.willSchwarz, resultStat: "Phenomenal website performance" },
    statHighlight: { value: "2x", label: "Traffic in 90 Days", description: "Responsive design directly improves SEO and mobile traffic" },
    urgencyHook: "Google now penalizes non-mobile-friendly sites in search rankings. Every week without a responsive site costs you organic traffic.",
    sidebarHeading: "Get a Free Mobile Audit",
    sidebarDescription: "Find out if your site is losing visitors on mobile devices.",
    guaranteeBadge: true,
  },
  "marketing-advertising-services/websites/responsive-design": {
    ctaCopy: "Get a Free Device Compatibility Report",
    ctaSubtext: "See how your site performs across 10 different device and browser combinations.",
    leadMagnet: {
      title: "Cross-Device Screenshot Report",
      description: "Visual report showing where your layout breaks, with priority-ranked fixes.",
    },
    testimonial: { ...TESTIMONIALS.lauraLorusso, resultStat: "Booked out completely" },
    statHighlight: { value: "100%", label: "Money-Back Guarantee", description: "We stand behind every responsive design project" },
    urgencyHook: "Over 60% of your SWFL customers search from their phones. If your site breaks on mobile, you're invisible to the majority of your market.",
    sidebarHeading: "Get a Free Responsive Design Audit",
    sidebarDescription: "Find out if your site is breaking on the devices your customers use most.",
    guaranteeBadge: true,
  },
  "marketing-advertising-services/websites/wordpress-development": {
    ctaCopy: "Request Your Custom WordPress Quote",
    ctaSubtext: "Get a detailed project scope and timeline — no commitment required.",
    leadMagnet: {
      title: "WordPress Migration Checklist",
      description: "27 critical steps for migrating to WordPress without losing SEO rankings or data.",
    },
    testimonial: { ...TESTIMONIALS.scottKern, resultStat: "300% revenue increase" },
    statHighlight: { value: "300%", label: "Revenue Increase", description: "Average revenue growth after a WordPress site launch" },
    urgencyHook: "WordPress powers 43% of the web for a reason. Your competitors are already on it, building SEO equity you'll have to fight harder to catch.",
    sidebarHeading: "Get a Free WordPress Consultation",
    sidebarDescription: "See what a custom WordPress site can do for your business.",
    guaranteeBadge: true,
  },
  "marketing-advertising-services/websites/web-app-development": {
    ctaCopy: "Scope Your Web App — Free Discovery Call",
    ctaSubtext: "Get a feasibility brief with estimated timeline, tech recommendation, and budget range.",
    leadMagnet: {
      title: "Web App Feasibility Assessment",
      description: "We evaluate your app idea and return a brief covering timeline, tech, features, and budget.",
    },
    testimonial: { ...TESTIMONIALS.joeG, resultStat: "100x traffic growth" },
    statHighlight: { value: "100x", label: "Traffic Growth", description: "Proven ability to build web applications that scale" },
    urgencyHook: "Your competitors are automating their operations with custom web apps while you're still doing it manually. Every quarter widens the gap.",
    sidebarHeading: "Get a Free Web App Feasibility Brief",
    sidebarDescription: "Find out if your app idea is viable and what it would take to build.",
    guaranteeBadge: false,
  },
  "marketing-advertising-services/websites/hosting-and-maintenance": {
    ctaCopy: "Lock In 99.9% Uptime for Your Website",
    ctaSubtext: "24/7 monitoring, automatic updates, and a dedicated support team.",
    leadMagnet: {
      title: "Website Downtime Risk Assessment",
      description: "Check your current hosting setup for uptime history, vulnerabilities, and benchmarks.",
    },
    testimonial: { ...TESTIMONIALS.willSchwarz, resultStat: "Phenomenal website performance" },
    statHighlight: { value: "99.9%", label: "Uptime Guarantee", description: "Your site stays live with 24/7 monitoring and instant response" },
    urgencyHook: "Your website goes down at 2 AM on a Saturday. Without 24/7 monitoring, you won't know until Monday — and neither will Google. One weekend of downtime can drop your rankings for weeks.",
    sidebarHeading: "Get a Free Hosting Assessment",
    sidebarDescription: "See how your current hosting stacks up against industry benchmarks.",
    guaranteeBadge: true,
  },
  "marketing-advertising-services/websites/top-tier-security": {
    ctaCopy: "Get Your Free Security Vulnerability Scan",
    ctaSubtext: "Find out if your site has known vulnerabilities before hackers do.",
    leadMagnet: {
      title: "Website Security Audit Report",
      description: "SSL status, vulnerability scan, malware check, and risk score with remediation priorities.",
    },
    testimonial: { ...TESTIMONIALS.kevinBartlett, resultStat: "Transformed from 1-man show to large brokerage" },
    statHighlight: { value: "100%", label: "Security Guarantee", description: "Comprehensive protection for your business and customer data" },
    urgencyHook: "43% of cyberattacks target small businesses, and the average breach costs $200,000. Your website is being scanned by bots right now.",
    sidebarHeading: "Get a Free Security Scan",
    sidebarDescription: "Find out if your website has vulnerabilities that put your business at risk.",
    guaranteeBadge: true,
  },
  "marketing-advertising-services/websites/fast-load-times": {
    ctaCopy: "Test Your Website Speed — Free Report",
    ctaSubtext: "Get your PageSpeed score and the top 5 quick wins to speed up your site.",
    leadMagnet: {
      title: "PageSpeed Report Card vs. Competitors",
      description: "Your scores vs. industry benchmarks and local competitors with the top 5 quick wins.",
    },
    testimonial: { ...TESTIMONIALS.joeG, resultStat: "100x traffic growth" },
    statHighlight: { value: "2x", label: "Traffic in 90 Days", description: "Faster load times improve SEO and increase organic traffic" },
    urgencyHook: "A 1-second delay in load time reduces conversions by 7%. If you score below 90 on PageSpeed, you're leaving money on the table every single day.",
    sidebarHeading: "Get a Free Speed Report",
    sidebarDescription: "See your PageSpeed score and what's slowing your site down.",
    guaranteeBadge: true,
  },
  "marketing-advertising-services/websites/daily-backups": {
    ctaCopy: "Protect Your Website — Start Daily Backups",
    ctaSubtext: "Never worry about losing your website or customer data again.",
    leadMagnet: {
      title: "Backup Readiness Quiz",
      description: "5 questions to find out if your current backup strategy would survive a real disaster.",
    },
    testimonial: { ...TESTIMONIALS.scottKern, resultStat: "300% revenue increase" },
    statHighlight: { value: "10x", label: "Growth Protection", description: "As your business grows, your data becomes exponentially more valuable" },
    urgencyHook: "60% of small businesses that lose their data shut down within 6 months. When was the last time your website was backed up?",
    sidebarHeading: "Get a Free Backup Assessment",
    sidebarDescription: "Find out if your website data is protected — before it's too late.",
    guaranteeBadge: false,
  },
  "marketing-advertising-services/websites/ongoing-upgrades": {
    ctaCopy: "Get a Free Website Improvement Roadmap",
    ctaSubtext: "See the top 12 improvements we'd prioritize for your site over the next year.",
    leadMagnet: {
      title: "Quarterly Website Evolution Plan",
      description: "A visual quarterly plan showing prioritized improvements based on analytics and competitive data.",
    },
    testimonial: { ...TESTIMONIALS.lauraLorusso, resultStat: "Booked out completely" },
    statHighlight: { value: "2x", label: "Traffic in 90 Days", description: "Continuous optimization keeps traffic compounding" },
    urgencyHook: "Your website is aging right now. Browser updates, algorithm changes, and new competitor sites make it less effective every month you don't upgrade.",
    sidebarHeading: "Get a Free Improvement Roadmap",
    sidebarDescription: "See what upgrades would make the biggest impact on your site's performance.",
    guaranteeBadge: false,
  },
  "marketing-advertising-services/websites/support": {
    ctaCopy: "Choose Your Support Plan — From 1 Hr/Month",
    ctaSubtext: "Flexible retainers from 1 to 50 hours per month with a dedicated account manager.",
    leadMagnet: {
      title: "Support Needs Calculator",
      description: "Answer 7 questions about your site to get a recommended retainer level and estimated cost.",
    },
    testimonial: { ...TESTIMONIALS.willSchwarz, resultStat: "Phenomenal website performance" },
    statHighlight: { value: "100%", label: "Satisfaction Guarantee", description: "We stand behind every hour of support we provide" },
    urgencyHook: "A plugin has a known vulnerability. A form stopped working and you don't know it yet. How many leads have you already lost?",
    sidebarHeading: "Get a Free Support Consultation",
    sidebarDescription: "Find out which support plan fits your business needs and budget.",
    guaranteeBadge: true,
  },
  "marketing-advertising-services/websites/account-management": {
    ctaCopy: "Meet Your Dedicated Account Manager",
    ctaSubtext: "Get a single point of contact who knows your business inside and out.",
    leadMagnet: {
      title: "Agency Communication Scorecard",
      description: "Rate your current agency relationship and see how it compares to Olympia's SLA commitments.",
    },
    testimonial: { ...TESTIMONIALS.kevinBartlett, resultStat: "Transformed from 1-man show to large brokerage" },
    statHighlight: { value: "10x", label: "Growth With Dedicated Support", description: "Rapid growth requires a dedicated point of contact" },
    urgencyHook: "Right now, your website requests are sitting in a generic support queue. No one owns your account. With Olympia, you get a name and a direct line.",
    sidebarHeading: "Get a Free Account Management Consultation",
    sidebarDescription: "See what having a dedicated account manager means for your business.",
    guaranteeBadge: true,
  },

  // =========================================================================
  // STRATEGIC & BRANDING PAGES
  // =========================================================================
  "marketing-advertising-services/fractional-cmo": {
    ctaCopy: "Get Your Free CMO Strategy Session",
    ctaSubtext: "Executive-level marketing leadership without the full-time cost.",
    leadMagnet: {
      title: "The Small Business CMO Playbook",
      description: "12 marketing decisions you should be making every quarter — downloadable checklist.",
    },
    testimonial: { ...TESTIMONIALS.kevinBartlett, resultStat: "Transformed from 1-man show to large brokerage" },
    statHighlight: { value: "10x", label: "Growth First Year", description: "Strategic marketing leadership drives compounding returns" },
    urgencyHook: "Every month without a marketing strategy is revenue left on the table. Q2 planning starts now — book your session before your competitors do.",
    sidebarHeading: "Book a Free Strategy Session",
    sidebarDescription: "Get executive marketing guidance tailored to your business goals.",
    guaranteeBadge: true,
  },
  "marketing-advertising-services/branding-corporate-id": {
    ctaCopy: "Start Your Brand Transformation",
    ctaSubtext: "From discovery to rollout — a brand identity that commands attention.",
    leadMagnet: {
      title: "Brand Identity Scorecard",
      description: "Rate your business's visual presence in 5 minutes with our self-assessment tool.",
    },
    testimonial: { ...TESTIMONIALS.scottKern, resultStat: "300% revenue increase" },
    statHighlight: { value: "300%", label: "Revenue Increase", description: "Professional branding is the catalyst for explosive growth" },
    urgencyHook: "Your competitors' brands are already making first impressions before you even get a chance to speak. Every week with an outdated identity costs you credibility.",
    sidebarHeading: "Get a Free Brand Assessment",
    sidebarDescription: "See how your current brand stacks up and where to improve.",
    guaranteeBadge: false,
  },
  "marketing-advertising-services/marketing-plan-development": {
    ctaCopy: "Build My Custom Marketing Roadmap",
    ctaSubtext: "A living strategic plan — not just a document that collects dust.",
    leadMagnet: {
      title: "1-Page Marketing Plan Template",
      description: "The strategic framework we use with every client — download and start planning today.",
    },
    testimonial: { ...TESTIMONIALS.kevinBartlett, resultStat: "Transformed from 1-man show to large brokerage" },
    statHighlight: { value: "2x", label: "Traffic in 90 Days", description: "A documented marketing plan doubles your execution speed" },
    urgencyHook: "Businesses that enter Q2 without a documented marketing plan waste an average of 25% of their budget. Your free strategy session can change that.",
    sidebarHeading: "Get a Free Marketing Plan Consultation",
    sidebarDescription: "Get a custom roadmap tailored to your business goals and budget.",
    guaranteeBadge: true,
  },
  "marketing-advertising-services/marketing-advertising": {
    ctaCopy: "Get a Free Marketing & Advertising Audit",
    ctaSubtext: "See which channels are working and where you're leaving money on the table.",
    leadMagnet: {
      title: "SWFL Marketing Checklist",
      description: "20 offline tactics that boost your online presence — the playbook our clients use.",
    },
    testimonial: { ...TESTIMONIALS.scottKern, resultStat: "300% revenue increase" },
    statHighlight: { value: "100%", label: "Money-Back Guarantee", description: "We stand behind every campaign we run" },
    urgencyHook: "Your SWFL competitors are already running integrated campaigns. We only take on 5 new full-service clients per quarter — spots are filling now.",
    sidebarHeading: "Get a Free Marketing Audit",
    sidebarDescription: "Find out which marketing channels will move the needle most for your business.",
    guaranteeBadge: true,
  },
  "marketing-advertising-services/public-relations-pr": {
    ctaCopy: "Shape Your Brand's Story — Free PR Consultation",
    ctaSubtext: "Get your business featured in local and industry publications.",
    leadMagnet: {
      title: "SWFL Media Contact List",
      description: "15 local publications and journalists every Southwest Florida business should know.",
    },
    testimonial: { ...TESTIMONIALS.lauraLorusso, resultStat: "Booked out completely" },
    statHighlight: { value: "2x", label: "Traffic in 90 Days", description: "PR contributes to SEO and drives measurable traffic growth" },
    urgencyHook: "News cycles don't wait. Your competitors are being featured in SWFL publications this month. Get your story in front of local media now.",
    sidebarHeading: "Get a Free PR Consultation",
    sidebarDescription: "Find out how to get your business in front of local media.",
    guaranteeBadge: false,
  },

  // =========================================================================
  // PRINT & DIRECT MAIL PAGES
  // =========================================================================
  "marketing-advertising-services/direct-mail-campaigns": {
    ctaCopy: "Launch My First Direct Mail Campaign",
    ctaSubtext: "From design to delivery — we handle every step of your direct mail campaign.",
    leadMagnet: {
      title: "Direct Mail ROI Calculator",
      description: "See what a 2% response rate means for your business revenue.",
    },
    testimonial: { ...TESTIMONIALS.kevinBartlett, resultStat: "Transformed from 1-man show to large brokerage" },
    statHighlight: { value: "10x", label: "Growth", description: "Direct mail delivers outsized returns for well-targeted campaigns" },
    urgencyHook: "Mail takes 2-4 weeks to land. Start your campaign today so you're in mailboxes before your competition.",
    sidebarHeading: "Get a Free Direct Mail Consultation",
    sidebarDescription: "Get a campaign strategy tailored to your target audience and budget.",
    guaranteeBadge: false,
  },
  "marketing-advertising-services/print-advertising-campaign-development": {
    ctaCopy: "Design My Print Ad Campaign",
    ctaSubtext: "Strategic print advertising that reaches your ideal local audience.",
    leadMagnet: {
      title: "SWFL Print Advertising Placement Guide",
      description: "Which local publications reach your ideal customer — insider knowledge from our media team.",
    },
    testimonial: { ...TESTIMONIALS.scottKern, resultStat: "300% revenue increase" },
    statHighlight: { value: "300%", label: "Revenue Increase", description: "Print advertising amplifies local visibility and drives growth" },
    urgencyHook: "Local magazine ad deadlines are 4-6 weeks out. If you want to be seen in the next issue, your campaign needs to start this week.",
    sidebarHeading: "Get a Free Print Ad Consultation",
    sidebarDescription: "Find out which publications will put your business in front of the right audience.",
    guaranteeBadge: false,
  },
  "marketing-advertising-services/brochures-flyers-and-posters": {
    ctaCopy: "Get a Free Design Mockup",
    ctaSubtext: "See what professional print materials look like for your business — no commitment.",
    leadMagnet: {
      title: "5 Print Design Templates That Convert",
      description: "Before and after examples from SWFL businesses — visual inspiration for your materials.",
    },
    testimonial: { ...TESTIMONIALS.willSchwarz, resultStat: "Phenomenal website performance" },
    statHighlight: { value: "100%", label: "Satisfaction Guarantee", description: "We stand behind every design we produce" },
    urgencyHook: "Got an event, grand opening, or seasonal promotion coming up? Print production takes 1-2 weeks. Order now and have materials in hand.",
    sidebarHeading: "Get a Free Design Mockup",
    sidebarDescription: "See what premium print materials look like for your business.",
    guaranteeBadge: true,
  },
  "marketing-advertising-services/print-collateral-design": {
    ctaCopy: "Unify My Brand's Print Materials",
    ctaSubtext: "Business cards, letterheads, brochures — all consistent with your brand identity.",
    leadMagnet: {
      title: "Print Collateral Brand Consistency Checklist",
      description: "10 things every business card, letterhead, and brochure must have.",
    },
    testimonial: { ...TESTIMONIALS.willSchwarz, resultStat: "Phenomenal website performance" },
    statHighlight: { value: "300%", label: "Revenue With Professional Branding", description: "Consistent collateral is part of the total brand package" },
    urgencyHook: "Your next networking event or sales meeting is a brand impression. Get professional collateral before your next client-facing moment.",
    sidebarHeading: "Get a Free Print Collateral Consultation",
    sidebarDescription: "See how unified print materials can elevate your brand presence.",
    guaranteeBadge: false,
  },
}

export function getServiceConversionConfig(fullPath: string): ServiceConversionConfig | null {
  return SERVICE_CONVERSION_CONFIGS[fullPath] ?? null
}
