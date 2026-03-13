// ---------------------------------------------------------------------------
// Conversion-optimized content data for all 9 industry template pages
// ---------------------------------------------------------------------------

export interface IndustryTemplateData {
  industryName: string
  industrySlug: string
  hero: {
    badge: string
    headline: string
    subtitle: string
  }
  painPoints: {
    headline: string
    subtitle: string
    items: Array<{ title: string; description: string }>
  }
  services: {
    headline: string
    subtitle: string
    items: Array<{ title: string; description: string }>
  }
  results: {
    headline: string
    subtitle: string
    metrics: Array<{ value: string; label: string; description: string }>
  }
  beforeAfter: {
    headline: string
    before: string[]
    after: string[]
  }
  testimonial: {
    quote: string
    author: string
    role: string
    stars: number
  }
  faqs: Array<{ question: string; answer: string }>
  ctaHeadline: string
  ctaSubtext: string
}

// ---------------------------------------------------------------------------
// Per-industry template data
// ---------------------------------------------------------------------------

const INDUSTRY_TEMPLATE_DATA: Record<string, IndustryTemplateData> = {
  "med-spa": {
    industryName: "Medical Spa",
    industrySlug: "med-spa",
    hero: {
      badge: "Medical Spa Marketing Specialists",
      headline: "Elevate Your Medical Spa Practice",
      subtitle:
        "We help medical spas attract high-value patients, build trust through compliant marketing, and scale revenue with proven digital strategies.",
    },
    painPoints: {
      headline: "The Struggles Med Spa Owners Face Daily",
      subtitle:
        "You invested six figures in equipment and training. Your marketing should not be the bottleneck between you and a full schedule.",
      items: [
        {
          title: "High Patient Acquisition Costs",
          description:
            "CPAs for med spa procedures can exceed $300+ per patient. Without optimized funnels and targeting, you're burning through your marketing budget.",
        },
        {
          title: "HIPAA-Compliant Marketing",
          description:
            "One compliance misstep can mean fines up to $50K. Most agencies don't understand the regulatory landscape of medical aesthetics.",
        },
        {
          title: "Saturated Local Market",
          description:
            "With new med spas opening monthly, standing out requires more than just a nice website — it requires strategic positioning.",
        },
        {
          title: "Low Consultation Conversions",
          description:
            "Getting leads is only half the battle. Converting consultations into booked treatments requires a refined patient journey.",
        },
      ],
    },
    services: {
      headline: "Marketing Solutions Built for Med Spas",
      subtitle:
        "Every strategy is designed around how med spa patients actually research, compare, and book treatments.",
      items: [
        {
          title: "Medical SEO",
          description:
            "Rank for high-value treatment keywords like 'Botox near me' and 'best med spa in [city]' with HIPAA-compliant SEO strategies.",
        },
        {
          title: "Before/After Gallery Management",
          description:
            "Professional, compliant before and after galleries that build trust and showcase your results while following all medical advertising guidelines.",
        },
        {
          title: "Patient Review Strategy",
          description:
            "Build a 5-star reputation with automated review requests, response management, and reputation monitoring across all platforms.",
        },
        {
          title: "Botox & Filler Campaigns",
          description:
            "Targeted Google Ads and social campaigns for your highest-margin treatments, optimized for consultation bookings.",
        },
        {
          title: "Treatment Page Optimization",
          description:
            "Dedicated landing pages for each treatment that educate patients, build confidence, and drive consultation requests.",
        },
        {
          title: "Retargeting Ads",
          description:
            "Re-engage website visitors who didn't book with strategic retargeting across Google, Meta, and Instagram.",
        },
      ],
    },
    results: {
      headline: "Proven Results for Med Spa Clients",
      subtitle:
        "These are average results across our med spa clients within the first 6 months of partnership.",
      metrics: [
        {
          value: "320%",
          label: "More Consultation Bookings",
          description:
            "Average increase in consultation requests within 6 months",
        },
        {
          value: "$2.4M",
          label: "Revenue Generated",
          description:
            "Total revenue generated for med spa clients in the past year",
        },
        {
          value: "67%",
          label: "Lower Acquisition Cost",
          description:
            "Average reduction in patient acquisition cost through optimized campaigns",
        },
      ],
    },
    beforeAfter: {
      headline: "The Transformation Our Med Spa Clients Experience",
      before: [
        "Spending $300+ per patient acquisition with poor targeting",
        "Generic website that looks like every other med spa",
        "Worried about HIPAA violations in your marketing",
        "Consultations that don't convert to booked treatments",
        "No system for patient retention or rebooking",
      ],
      after: [
        "Patient acquisition costs under $75 with precision targeting",
        "Premium website positioning you as the trusted authority",
        "Fully HIPAA-compliant marketing with documented processes",
        "65%+ consultation-to-treatment conversion rate",
        "Automated patient journey with rebooking and retention sequences",
      ],
    },
    testimonial: {
      quote:
        "Olympia understands the unique challenges of medical spa marketing. They helped us navigate HIPAA compliance while dramatically increasing our patient volume. Our monthly consultations have quadrupled.",
      author: "Dr. Sarah Chen",
      role: "Medical Director, Physician Aesthetic Institute",
      stars: 5,
    },
    faqs: [
      {
        question: "Is your marketing HIPAA compliant?",
        answer:
          "Absolutely. We understand the regulatory requirements for medical spa marketing and ensure all campaigns, landing pages, and patient communications comply with HIPAA, FTC, and state medical advertising guidelines.",
      },
      {
        question: "How do you handle before/after photos in ads?",
        answer:
          "We follow all platform-specific and medical advertising guidelines for before/after imagery. This includes proper disclosures, patient consent documentation, and avoiding any prohibited claims.",
      },
      {
        question: "What treatments do you specialize in marketing?",
        answer:
          "We've successfully marketed Botox, dermal fillers, laser treatments, body contouring, PRP/PRF, microneedling, chemical peels, and IV therapy. We tailor campaigns to your highest-margin services.",
      },
      {
        question: "How quickly can we expect new patient bookings?",
        answer:
          "Most med spa clients see a significant increase in consultation requests within 60-90 days. Paid advertising generates leads within weeks, while SEO builds a sustainable pipeline over 3-6 months.",
      },
      {
        question: "Do you work with independent med spas or chains?",
        answer:
          "Both. We work with single-location med spas, multi-location practices, and physician-owned med spa networks. Our strategies scale to fit your operation.",
      },
    ],
    ctaHeadline: "Get Your Free Med Spa Growth Plan",
    ctaSubtext:
      "Schedule a complimentary strategy session and receive a custom growth plan built specifically for your medical spa.",
  },

  "beauty-esthetician-marketing-advertising": {
    industryName: "Salon & Beauty",
    industrySlug: "beauty-esthetician-marketing-advertising",
    hero: {
      badge: "#1 Salon Marketing Agency in Southwest Florida",
      headline: "Dominate the Beauty Industry",
      subtitle:
        "We fill your appointment books, boost your online reputation, and turn your salon into the most talked-about destination in town.",
    },
    painPoints: {
      headline: "The Struggles Every Salon Owner Knows",
      subtitle:
        "You are an incredible stylist, but running a business means filling chairs every single day — not just Fridays and Saturdays.",
      items: [
        {
          title: "Empty Chairs, Empty Revenue",
          description:
            "Your stylists are scrolling their phones while competitors down the street are fully booked.",
        },
        {
          title: "Inconsistent Bookings",
          description:
            "One week you're slammed, the next is a ghost town. Without a predictable marketing system, your revenue is a rollercoaster.",
        },
        {
          title: "Losing Clients to Competitors",
          description:
            "The new salon across town has a better website, more reviews, and shows up first on Google.",
        },
        {
          title: "Social Media Overwhelm",
          description:
            "Posting random content and hoping for the best isn't a strategy.",
        },
      ],
    },
    services: {
      headline: "Marketing Built for the Beauty Industry",
      subtitle:
        "Strategies built specifically for salons and beauty professionals — not recycled tactics from other industries.",
      items: [
        {
          title: "SEO for Salons",
          description:
            "Rank #1 for searches like 'best salon near me' and 'hair stylist in [your city]'. We optimize your entire online presence.",
        },
        {
          title: "Social Media for Beauty",
          description:
            "Instagram, TikTok, and Facebook strategies that showcase your work, build your following, and drive bookings.",
        },
        {
          title: "Review Generation",
          description:
            "Build a 5-star reputation that makes you the obvious choice. We automate review requests and manage your reputation.",
        },
        {
          title: "Website Design for Salons",
          description:
            "Stunning, mobile-first websites with online booking integration that convert visitors into appointments.",
        },
        {
          title: "Google Business Optimization",
          description:
            "Dominate the local map pack so clients find you first when searching in your area.",
        },
        {
          title: "Email Marketing & Rebooking",
          description:
            "Automated campaigns that keep clients coming back — birthday offers, rebooking reminders, and seasonal promotions.",
        },
      ],
    },
    results: {
      headline: "Results That Speak for Themselves",
      subtitle:
        "Average results across our salon and beauty clients within 6 months.",
      metrics: [
        {
          value: "240%",
          label: "Increase in Bookings",
          description:
            "Average booking growth for salon clients within 6 months",
        },
        {
          value: "4.9",
          label: "Avg Google Rating",
          description:
            "Average rating achieved through our review generation strategy",
        },
        {
          value: "180%",
          label: "Revenue Growth",
          description:
            "Average revenue increase in the first year of partnership",
        },
      ],
    },
    beforeAfter: {
      headline: "From Struggling to Fully Booked",
      before: [
        "Empty chairs during peak hours costing you hundreds daily",
        "Relying on walk-ins and word of mouth alone",
        "12 Google reviews with a 3.8 average rating",
        "Outdated website that doesn't reflect your talent",
        "Posting on social media with no strategy or results",
      ],
      after: [
        "Fully booked three weeks out with a growing waitlist",
        "Predictable pipeline of new clients every month",
        "200+ Google reviews with a 4.9 average rating",
        "Professional website converting 15% of visitors to bookings",
        "Strategic content driving engagement and new followers daily",
      ],
    },
    testimonial: {
      quote:
        "Olympia completely transformed our business. We went from struggling to fill chairs on Tuesdays to being booked solid three weeks out. Our Google reviews went from 12 to over 200, and our revenue has nearly tripled.",
      author: "Jessica Martinez",
      role: "Owner, Luxe Hair Studio — Naples, FL",
      stars: 5,
    },
    faqs: [
      {
        question: "How long does it take to see results for my salon?",
        answer:
          "Most salon clients see a significant increase in bookings within the first 60-90 days. SEO results typically show strong improvements within 3-4 months, while paid advertising and social media campaigns can generate results within weeks.",
      },
      {
        question: "Do you work with salons of all sizes?",
        answer:
          "Yes. Whether you're a single-chair suite owner or a multi-location salon with 20+ stylists, we customize our approach to fit your size, goals, and budget.",
      },
      {
        question: "What makes Olympia different from other marketing agencies?",
        answer:
          "We specialize in the beauty industry. We understand seasonal trends, booking psychology, and what actually drives clients to book. We're not a generic agency — we're salon marketing specialists.",
      },
      {
        question: "How much should a salon budget for marketing?",
        answer:
          "Most successful salons invest 5-10% of gross revenue in marketing. For a salon doing $30K/month, that's $1,500-$3,000. We'll help you allocate that budget for maximum ROI.",
      },
      {
        question: "Can you help us get more Google reviews ethically?",
        answer:
          "Absolutely. We implement automated review request systems that make it easy for happy clients to leave reviews — no fake reviews, no buying reviews. Just genuine feedback from real clients.",
      },
    ],
    ctaHeadline: "Book Your Free Salon Marketing Audit",
    ctaSubtext:
      "Discover exactly what's holding your salon back and get a custom growth plan — completely free, no obligations.",
  },

  "physical-therapy-marketing-advertising": {
    industryName: "Physical Therapy",
    industrySlug: "physical-therapy-marketing-advertising",
    hero: {
      badge: "PHYSICAL THERAPY MARKETING EXPERTS",
      headline: "Grow Your PT Practice With Patients Who Need You",
      subtitle:
        "Olympia Marketing specializes in patient acquisition strategies that fill your schedule with direct access patients, strengthen physician referral networks, and build lasting community trust.",
    },
    painPoints: {
      headline: "Growing a PT Practice Is Harder Than It Should Be",
      subtitle:
        "If your patient volume depends on a handful of referring physicians, your practice is built on a foundation you do not control.",
      items: [
        {
          title: "Physician Referral Dependency",
          description:
            "Referral volumes from physicians are declining 30% industry-wide. Relying solely on referrals leaves your schedule vulnerable to forces outside your control.",
        },
        {
          title: "Low Direct Access Awareness",
          description:
            "Most patients don't know they can see a PT without a referral. If you're not educating your community, you're missing a massive growth opportunity.",
        },
        {
          title: "Insurance Reimbursement Pressure",
          description:
            "Declining reimbursement rates mean you need more patients just to maintain revenue. Growing volume is no longer optional — it's survival.",
        },
        {
          title: "Competing With Hospital Systems",
          description:
            "Hospital-owned PT clinics have massive marketing budgets. Standing out as an independent practice requires smarter, more targeted strategies.",
        },
      ],
    },
    services: {
      headline: "Marketing Strategies Built for Physical Therapy",
      subtitle:
        "Every strategy is built around the unique way patients find, choose, and commit to physical therapy.",
      items: [
        {
          title: "Direct Access Marketing Campaigns",
          description:
            "Educate your community about direct access and capture patients searching for pain relief, injury recovery, and physical therapy without a referral.",
        },
        {
          title: "Physician Referral Nurture Programs",
          description:
            "Strengthen relationships with referring physicians through co-branded content, referral tracking, and regular communication touchpoints.",
        },
        {
          title: "Patient Testimonial Video Production",
          description:
            "Professional patient success stories that build trust and demonstrate outcomes — the most powerful marketing tool for PT practices.",
        },
        {
          title: "Condition-Specific Landing Pages",
          description:
            "Dedicated pages for back pain, knee rehab, post-surgical recovery, sports injuries, and more — each optimized to rank and convert.",
        },
        {
          title: "Google Business Optimization for PT",
          description:
            "Dominate local searches for 'physical therapy near me' with an optimized Google Business Profile, consistent NAP citations, and review management.",
        },
        {
          title: "Insurance & Self-Pay Conversion Pages",
          description:
            "Clear, transparent pages that explain insurance acceptance, self-pay options, and the value of choosing your practice over hospital alternatives.",
        },
      ],
    },
    results: {
      headline: "Results Our PT Clients Achieve",
      subtitle:
        "Average performance across our physical therapy clients within 6 months.",
      metrics: [
        {
          value: "200%",
          label: "More Direct Access Patients",
          description:
            "Average increase in direct access patient volume within 6 months",
        },
        {
          value: "150%",
          label: "More Physician Referrals",
          description:
            "Average increase in physician referral volume through nurture programs",
        },
        {
          value: "35%",
          label: "Higher Patient Retention",
          description:
            "Improvement in plan-of-care completion rates through patient engagement",
        },
      ],
    },
    beforeAfter: {
      headline: "The Transformation",
      before: [
        "90% of patients coming from physician referrals only",
        "Community has no idea you offer direct access treatment",
        "Generic website with no condition-specific content",
        "Losing patients to hospital-owned PT clinics",
        "No system for tracking patient acquisition channels",
      ],
      after: [
        "Balanced pipeline of direct access AND physician referral patients",
        "Community recognizes your practice as the go-to PT clinic",
        "Condition-specific pages ranking on Google and driving new patients",
        "Clear differentiation from hospital-owned competitors",
        "Full visibility into which channels drive the most valuable patients",
      ],
    },
    testimonial: {
      quote:
        "Olympia helped us build a direct access patient pipeline we didn't know was possible. We went from 40 new patients a month to 120, and our plan-of-care completion rates have never been higher.",
      author: "Dr. James Mitchell",
      role: "Owner, Peak Performance Physical Therapy",
      stars: 5,
    },
    faqs: [
      {
        question: "Do you understand the difference between direct access and referral patients?",
        answer:
          "Yes. We specialize in PT marketing and understand the nuances of both acquisition channels. We build separate strategies for direct access marketing and physician referral nurture programs.",
      },
      {
        question: "Can you help us compete with hospital-owned clinics?",
        answer:
          "Absolutely. Independent practices have advantages that hospital systems can't match — personalized care, flexible scheduling, and community connection. We help you communicate these differentiators effectively.",
      },
      {
        question: "How do you handle patient testimonials and HIPAA?",
        answer:
          "We follow strict HIPAA guidelines for all patient testimonials, including proper consent forms, de-identification where required, and compliant video production processes.",
      },
      {
        question: "What conditions should we create content for?",
        answer:
          "We recommend starting with your highest-volume conditions — typically back pain, knee pain, post-surgical rehab, and sports injuries. We then expand to niche specialties that differentiate your practice.",
      },
      {
        question: "How long until we see new direct access patients?",
        answer:
          "Most PT practices see a measurable increase in direct access inquiries within 60-90 days of launching campaigns. SEO builds a sustainable pipeline over 3-6 months.",
      },
    ],
    ctaHeadline: "Get Your Free Practice Growth Audit",
    ctaSubtext:
      "Discover untapped patient acquisition opportunities and get a custom growth plan for your PT practice. 30-day money-back guarantee.",
  },

  "real-estate-marketing-advertising": {
    industryName: "Real Estate",
    industrySlug: "real-estate-marketing-advertising",
    hero: {
      badge: "REAL ESTATE MARKETING SPECIALISTS",
      headline: "Close More Deals. Dominate Your Market.",
      subtitle:
        "Strategic digital marketing exclusively for real estate professionals. Generate qualified leads, dominate local search, and build an unstoppable brand presence.",
    },
    painPoints: {
      headline: "The Challenges Holding Your Brokerage Back",
      subtitle:
        "You are great at closing deals. The problem is getting enough qualified opportunities in front of you consistently.",
      items: [
        {
          title: "Low-Quality Leads",
          description:
            "Spending thousands on leads that never convert. Portal leads are shared with 5+ agents, and by the time you call, they've already talked to three competitors.",
        },
        {
          title: "Portal Dependency",
          description:
            "Over-reliance on Zillow and Realtor.com is expensive and unsustainable. You're renting leads instead of owning your pipeline.",
        },
        {
          title: "Invisible Locally",
          description:
            "When homeowners search for agents in your area, your competitors show up first. If you're not in the top 3 on Google, you might as well not exist.",
        },
        {
          title: "Inconsistent Pipeline",
          description:
            "Feast-or-famine cycles where you close three deals one month and zero the next. No system for consistent lead generation.",
        },
      ],
    },
    services: {
      headline: "Marketing Built for Real Estate Professionals",
      subtitle:
        "We build marketing assets you own — not rent — so every dollar you invest compounds over time.",
      items: [
        {
          title: "Real Estate SEO",
          description:
            "Rank for high-intent searches like 'homes for sale in [city]' and '[neighborhood] real estate agent' to capture buyers and sellers organically.",
        },
        {
          title: "Listing Marketing",
          description:
            "Professional listing pages with virtual tours, drone photography, and social promotion that sell properties faster and at higher prices.",
        },
        {
          title: "Lead Generation Campaigns",
          description:
            "Targeted Google and Meta ads that generate qualified buyer and seller leads exclusive to your brokerage.",
        },
        {
          title: "Agent Personal Branding",
          description:
            "Build your personal brand as the go-to agent in your market with custom websites, social content, and thought leadership.",
        },
        {
          title: "CRM & Lead Nurture",
          description:
            "Automated follow-up sequences that nurture leads from first inquiry to closing, so no opportunity falls through the cracks.",
        },
        {
          title: "Market Report Content",
          description:
            "Monthly market reports and neighborhood guides that position you as the local market expert and drive organic traffic.",
        },
      ],
    },
    results: {
      headline: "Results Our Real Estate Clients Achieve",
      subtitle:
        "Average results across our real estate clients within the first year.",
      metrics: [
        {
          value: "180%",
          label: "More Qualified Leads",
          description:
            "Average increase in qualified buyer and seller leads",
        },
        {
          value: "45%",
          label: "Lower Cost Per Lead",
          description:
            "Average reduction in cost per lead compared to portal advertising",
        },
        {
          value: "2x",
          label: "More Listing Appointments",
          description:
            "Doubling of listing appointments through digital marketing",
        },
      ],
    },
    beforeAfter: {
      headline: "From Struggling to Market Dominator",
      before: [
        "Spending $2,000/month on Zillow with 2% conversion",
        "No personal brand — just another agent in the MLS",
        "Calling expired leads and door-knocking for business",
        "Inconsistent closings month to month",
        "Zero organic web presence for your target areas",
      ],
      after: [
        "Owning your lead pipeline with 8-12% conversion rates",
        "Recognized as THE agent in your target neighborhoods",
        "Inbound leads calling you to list their homes",
        "Predictable pipeline of 10+ closings every month",
        "Ranking #1 for real estate searches in your market",
      ],
    },
    testimonial: {
      quote:
        "Olympia helped us break free from Zillow dependency. We now generate our own leads at a fraction of the cost, and our agents are getting listing appointments every week without cold calling.",
      author: "Michael Torres",
      role: "Broker/Owner, Torres Real Estate Group",
      stars: 5,
    },
    faqs: [
      {
        question: "Do you work with individual agents or brokerages?",
        answer:
          "Both. We work with top-producing individual agents who want to build their personal brand, as well as brokerages looking to generate leads for their entire team.",
      },
      {
        question: "How do you generate real estate leads?",
        answer:
          "We use a combination of Google Ads for high-intent searches, Meta ads for community targeting, SEO for long-term organic traffic, and content marketing to establish local authority.",
      },
      {
        question: "Can you help us stop depending on Zillow?",
        answer:
          "Yes, that's one of our primary goals. We build your owned lead generation system so you control your pipeline instead of renting leads from portals.",
      },
      {
        question: "What markets do you serve?",
        answer:
          "We work with real estate professionals across the US, with deep expertise in Florida, Texas, and California markets. Our strategies are customized to your specific market dynamics.",
      },
      {
        question: "How quickly will we see leads?",
        answer:
          "Paid advertising typically generates leads within the first 2-4 weeks. SEO and content marketing build a sustainable pipeline over 3-6 months that continues to grow.",
      },
    ],
    ctaHeadline: "Get Your Free Market Domination Strategy",
    ctaSubtext:
      "Schedule a free strategy call and discover how to dominate your local real estate market with digital marketing.",
  },

  "builders-developers": {
    industryName: "Builder & Developer",
    industrySlug: "builders-developers",
    hero: {
      badge: "Builder & Developer Marketing",
      headline: "Pre-Sell Your Next Community Before the Foundation Is Poured",
      subtitle:
        "Every unsold unit costs you $3,000+ per month in carrying costs. We build digital marketing systems that generate qualified buyer interest from the moment you break ground.",
    },
    painPoints: {
      headline: "The Costs of Unsold Inventory Are Staggering",
      subtitle:
        "Construction loans, property taxes, HOA dues, and maintenance on unsold homes eat into your margins every single day.",
      items: [
        {
          title: "Capital Locked in Unsold Inventory",
          description:
            "Every finished home sitting without a buyer is $3,000-$5,000 per month in carrying costs. Three unsold specs mean $15,000/month evaporating before you even factor in the opportunity cost.",
        },
        {
          title: "Declining Model Home Traffic",
          description:
            "Foot traffic to model homes has dropped 40% in five years. Buyers research online for months before ever visiting. If you are not showing up in that research phase, you do not exist.",
        },
        {
          title: "Outgunned by National Builders",
          description:
            "Lennar, DR Horton, and Pulte spend millions on marketing. Their brand recognition and ad budgets make it nearly impossible for regional builders to compete using the same playbook.",
        },
        {
          title: "Realtors Steering Buyers Away",
          description:
            "Agents push resale homes with higher commissions and faster closings. Without a compelling digital presence and agent outreach program, you are losing buyers before they ever see your floor plans.",
        },
      ],
    },
    services: {
      headline: "Marketing Engineered to Sell Homes Faster",
      subtitle:
        "We help builders and developers compress sales timelines and reduce carrying costs through strategic digital marketing.",
      items: [
        {
          title: "Community Launch Campaigns",
          description:
            "Pre-launch interest lists, VIP preview events, and phased release campaigns that generate 200+ qualified leads before your model home opens. Start selling before you finish building.",
        },
        {
          title: "Virtual Tours and 3D Walkthroughs",
          description:
            "Interactive Matterport tours, drone aerials, and 3D floor plan renderings that let out-of-state buyers tour your homes from their couch. Listings with virtual tours get 403% more inquiries.",
        },
        {
          title: "Buyer Search Engine Optimization",
          description:
            "Dedicated community pages ranking for 'new homes in [city],' 'new construction [neighborhood],' and lifestyle searches that buyers use months before purchasing.",
        },
        {
          title: "Targeted Buyer Acquisition Ads",
          description:
            "Facebook, Instagram, and Google campaigns targeting renters ready to buy, relocating families, and downsizing retirees. Geo-fenced to your feeder markets with conversion tracking down to the contract.",
        },
        {
          title: "Realtor Co-Marketing Program",
          description:
            "Digital toolkits, co-branded materials, and commission incentive campaigns that get agents excited about showing your communities instead of steering buyers to resale inventory.",
        },
        {
          title: "Sales Center Conversion Optimization",
          description:
            "CRM setup, automated follow-up sequences, and lead scoring that ensures no prospect falls through the cracks between their first website visit and their model home appointment.",
        },
      ],
    },
    results: {
      headline: "Communities We Have Helped Sell Out",
      subtitle:
        "Average results across our builder and developer clients.",
      metrics: [
        {
          value: "47%",
          label: "Faster Sellout",
          description:
            "Average reduction in community sellout timeline compared to builder projections",
        },
        {
          value: "68%",
          label: "Pre-Sale Rate",
          description:
            "Of units under contract before construction completion",
        },
        {
          value: "$2.1M",
          label: "Carrying Costs Saved",
          description:
            "Average savings per community through accelerated sales velocity",
        },
      ],
    },
    beforeAfter: {
      headline: "The Olympia Transformation",
      before: [
        "12+ months to sell out a 40-unit community",
        "Model home traffic of 5-8 visitors per weekend",
        "No digital presence beyond a basic community page on your company site",
        "Realtors unaware of your communities or incentive programs",
        "No lead tracking — sales team using spreadsheets and business cards",
      ],
      after: [
        "68% of units under contract before construction completes",
        "200+ online inquiries per month from qualified buyers",
        "Community-specific websites ranking for new construction searches",
        "500+ local agents enrolled in your co-marketing program",
        "Full CRM with automated nurture tracking every lead to contract",
      ],
    },
    testimonial: {
      quote:
        "Our last development took 18 months to sell out. With Olympia, we pre-sold 70% of the units in our next community before the model was even finished. The carrying cost savings alone paid for 3 years of marketing.",
      author: "James Hartley",
      role: "VP of Sales, Hartley Development Group",
      stars: 5,
    },
    faqs: [
      {
        question: "When should we start marketing a new community?",
        answer:
          "Ideally 6-9 months before the model home opens. This gives us time to build SEO authority, generate an interest list, and create launch buzz. The earlier we start, the more pre-sales you close before carrying costs begin.",
      },
      {
        question: "How do you handle multiple communities at different stages?",
        answer:
          "Each community gets its own marketing plan, budget, and performance dashboard. We allocate spend dynamically based on sales velocity — communities that need acceleration get more resources.",
      },
      {
        question: "Can you reach out-of-state buyers?",
        answer:
          "Yes — relocation buyers are often the highest-value prospects. We run geo-targeted campaigns in feeder markets, create virtual tour experiences, and build landing pages specifically for relocating families.",
      },
      {
        question: "How do you work with our on-site sales team?",
        answer:
          "We integrate directly with your sales CRM, set up lead routing and follow-up automation, and provide weekly pipeline reports. Your sales team gets warm, pre-qualified leads with full activity history.",
      },
      {
        question: "What is the typical marketing budget for a new community?",
        answer:
          "Most builders invest $5,000-$15,000 per month per active community depending on price point, competition, and sales targets. Our average client sees a 12-18x return on that investment in gross margin.",
      },
    ],
    ctaHeadline: "Stop Paying Carrying Costs on Unsold Homes",
    ctaSubtext:
      "Get a custom marketing strategy for your next community. We will show you exactly how to pre-sell units and compress your sellout timeline — before another month of carrying costs drains your margins.",
  },

  "beauty-school-marketing": {
    industryName: "Beauty School",
    industrySlug: "beauty-school-marketing",
    hero: {
      badge: "BEAUTY SCHOOL MARKETING",
      headline: "Fill Every Seat in Your Beauty School",
      subtitle:
        "Proven marketing strategies that drive enrollment for cosmetology schools, esthetician programs, and beauty academies. We've helped schools increase applications by 175% on average.",
    },
    painPoints: {
      headline: "The Challenges Beauty School Owners Face",
      subtitle:
        "Beauty school enrollment nationwide has declined 23% since 2015. The schools that survive will be the ones that market smarter, not harder.",
      items: [
        {
          title: "Empty Seats & Low Enrollment",
          description:
            "Every empty seat costs your school $8,000-$20,000 in lost tuition revenue. Traditional marketing methods aren't reaching today's prospective students.",
        },
        {
          title: "Competing With Online Programs",
          description:
            "Online beauty education is growing, and prospective students are comparing your hands-on program to cheaper, more convenient alternatives.",
        },
        {
          title: "Invisible Online",
          description:
            "When prospective students search for 'cosmetology school near me' or 'beauty school in [city],' your competitors show up first.",
        },
        {
          title: "Wasted Ad Spend",
          description:
            "Running Facebook ads or Google Ads without a proper enrollment funnel means you're paying for clicks that never become applications.",
        },
      ],
    },
    services: {
      headline: "Marketing Built for Enrollment Growth",
      subtitle:
        "We understand the beauty school enrollment journey — from first Google search to orientation day.",
      items: [
        {
          title: "Enrollment SEO",
          description:
            "Rank for searches like 'cosmetology school near me,' 'esthetician program,' and 'beauty school in [city]' to capture high-intent prospective students.",
        },
        {
          title: "Social Media & TikTok",
          description:
            "Reach Gen Z and millennial prospective students where they spend their time — with student success stories, behind-the-scenes content, and career inspiration.",
        },
        {
          title: "Enrollment Landing Pages",
          description:
            "High-converting landing pages designed specifically for beauty school enrollment — with program details, career outcomes, and easy application CTAs.",
        },
        {
          title: "Video Marketing",
          description:
            "Campus tours, student testimonials, and 'day in the life' videos that give prospective students the confidence to apply.",
        },
        {
          title: "Review & Reputation",
          description:
            "Build a stellar online reputation with reviews from happy students and graduates that prospective students trust more than any ad.",
        },
        {
          title: "Enrollment Funnels",
          description:
            "Complete enrollment funnel from first website visit to orientation day — with automated email sequences, text reminders, and application follow-up.",
        },
      ],
    },
    results: {
      headline: "Results Our Beauty School Clients Achieve",
      subtitle:
        "Average results across our beauty school clients within two enrollment cycles.",
      metrics: [
        {
          value: "175%",
          label: "Average Enrollment Increase",
          description:
            "Average increase in student enrollment for our beauty school clients",
        },
        {
          value: "4.9",
          label: "Average Google Rating",
          description:
            "Average Google rating achieved through student review strategies",
        },
        {
          value: "312%",
          label: "ROI on Ad Spend",
          description:
            "Average return on advertising investment for enrollment campaigns",
        },
      ],
    },
    beforeAfter: {
      headline: "The Transformation",
      before: [
        "Classes starting with 40% empty seats",
        "Relying on outdated print ads and billboards",
        "No social media presence reaching prospective students",
        "Website that hasn't been updated in 3 years",
        "Losing applicants during the enrollment process",
      ],
      after: [
        "Waitlisted programs with full cohorts every start date",
        "Digital-first strategy reaching students on their devices",
        "Active TikTok and Instagram driving weekly inquiries",
        "Modern website converting 12% of visitors to applications",
        "Automated enrollment funnel with 85% application completion",
      ],
    },
    testimonial: {
      quote:
        "Olympia transformed our enrollment numbers. We went from struggling to fill seats to having a waitlist. Their TikTok strategy alone has generated over 200 inquiries, and our application completion rate doubled.",
      author: "Jennifer Martinez",
      role: "Director, Southwest Beauty Academy",
      stars: 5,
    },
    faqs: [
      {
        question: "Do you work with all types of beauty schools?",
        answer:
          "Yes. We work with cosmetology schools, esthetician programs, nail technology programs, barbering schools, and multi-program beauty academies of all sizes.",
      },
      {
        question: "How do you reach prospective beauty students?",
        answer:
          "We use a multi-channel approach including TikTok, Instagram, Google Ads, SEO, and email marketing to reach prospective students at every stage of their decision journey.",
      },
      {
        question: "Can you help with our enrollment funnel?",
        answer:
          "Absolutely. We build complete enrollment funnels from first touch to orientation — including landing pages, application follow-up sequences, text reminders, and financial aid information.",
      },
      {
        question: "What makes beauty school marketing different?",
        answer:
          "Beauty school marketing requires understanding the student decision journey, financial aid considerations, career outcome messaging, and the visual nature of the industry. Generic education marketing doesn't work.",
      },
      {
        question: "How quickly can we see enrollment growth?",
        answer:
          "Most schools see increased inquiries within 30-60 days of launching campaigns. Full enrollment impact typically shows within one to two enrollment cycles.",
      },
    ],
    ctaHeadline: "Get Your Free Enrollment Audit",
    ctaSubtext:
      "Discover how to fill every seat in your beauty school with a custom enrollment growth plan. No obligation, no pressure.",
  },

  "home-service-businesses": {
    industryName: "Home Services",
    industrySlug: "home-service-businesses",
    hero: {
      badge: "HOME SERVICES MARKETING",
      headline: "Fill Your Service Calendar Year-Round",
      subtitle:
        "Olympia Marketing helps HVAC, plumbing, electrical, and roofing companies dominate local search, generate quality leads, and grow revenue — even in the off-season.",
    },
    painPoints: {
      headline: "The Challenges Holding Your Home Service Business Back",
      subtitle:
        "If you are renting leads from aggregators, your business is built on someone else's platform. One algorithm change and your phone stops ringing.",
      items: [
        {
          title: "Seasonal Slowdowns",
          description:
            "Revenue drops 40-60% in off-season months. Without year-round marketing, you're laying off crews and scrambling when demand returns.",
        },
        {
          title: "Low-Quality Leads",
          description:
            "HomeAdvisor and Angi send shared leads to 5+ competitors simultaneously. By the time you call, the homeowner already has three quotes.",
        },
        {
          title: "No Online Presence",
          description:
            "Your website looks outdated, loads slowly, and doesn't show up on Google. Meanwhile, the company that started last year is ranking above you.",
        },
        {
          title: "Competitors Outranking You",
          description:
            "Newer companies with better marketing dominate the Map Pack and steal the calls that should be going to you.",
        },
      ],
    },
    services: {
      headline: "Marketing That Keeps Your Trucks Rolling",
      subtitle:
        "We speak contractor, not corporate. Every strategy is designed to generate calls, booked jobs, and revenue.",
      items: [
        {
          title: "Local SEO & Map Pack",
          description:
            "Dominate the Google Map Pack for searches like 'plumber near me' and 'AC repair [city]'. We optimize your Google Business Profile and build local authority.",
        },
        {
          title: "Google Ads for Home Services",
          description:
            "Targeted pay-per-click campaigns including Local Services Ads (LSA) that generate calls from homeowners ready to book right now.",
        },
        {
          title: "Website Design for Contractors",
          description:
            "Fast, mobile-first websites with click-to-call, online booking, and trust signals that convert visitors into service calls.",
        },
        {
          title: "Review & Reputation Management",
          description:
            "Build and maintain a 4.8+ star rating with automated review requests, response management, and reputation monitoring.",
        },
        {
          title: "Social Media for Service Companies",
          description:
            "Before/after project showcases, seasonal tips, and community engagement that builds trust and generates referrals.",
        },
        {
          title: "Seasonal Campaign Planning",
          description:
            "Strategic campaigns aligned to seasonal demand — heating season, AC tune-ups, storm prep — so you're never caught off guard.",
        },
      ],
    },
    results: {
      headline: "Results Our Home Service Clients Achieve",
      subtitle:
        "Average results across our home service clients within the first 90 days.",
      metrics: [
        {
          value: "320%",
          label: "Growth in Service Calls",
          description:
            "Average increase in inbound service calls within 6 months",
        },
        {
          value: "4.8",
          label: "Google Rating Average",
          description:
            "Average Google rating achieved through our review strategy",
        },
        {
          value: "$1.2M",
          label: "New Revenue Generated",
          description:
            "Average new revenue generated for home service clients annually",
        },
      ],
    },
    beforeAfter: {
      headline: "The Transformation",
      before: [
        "40-60% revenue drop during off-season months",
        "Paying $80+ per lead on HomeAdvisor for shared leads",
        "Outdated website that doesn't generate any calls",
        "3.2 star Google rating with 15 reviews",
        "No system for tracking marketing ROI",
      ],
      after: [
        "Consistent year-round revenue with seasonal campaign planning",
        "Exclusive leads at $25-40 through owned channels",
        "Modern website generating 50+ calls per month",
        "4.8 star rating with 300+ reviews and growing",
        "Complete dashboard tracking every lead, call, and dollar",
      ],
    },
    testimonial: {
      quote:
        "Olympia helped us go from feast-or-famine to fully booked year-round. Our phone rings consistently now, and we've added two trucks and six employees in the past year.",
      author: "Robert Williams",
      role: "Owner, Quality Service Company LLC",
      stars: 5,
    },
    faqs: [
      {
        question: "Do you work with all types of home service companies?",
        answer:
          "Yes. We work with HVAC, plumbing, electrical, roofing, painting, landscaping, cleaning, and general contracting companies of all sizes.",
      },
      {
        question: "How do I stop depending on HomeAdvisor and Angi?",
        answer:
          "We build your own lead generation system through Google SEO, Local Services Ads, and a website optimized for conversions. Within 3-6 months, most clients phase out lead-buying platforms entirely.",
      },
      {
        question: "What's the Google Map Pack and why does it matter?",
        answer:
          "The Map Pack is the top 3 local results that appear with a map in Google searches. It captures 44% of all clicks for local searches. We optimize your profile to consistently appear in this premium position.",
      },
      {
        question: "How much should I budget for marketing?",
        answer:
          "Most successful home service companies invest 5-8% of gross revenue in marketing. For a company doing $500K/year, that's $2,000-$3,300/month. We'll help you allocate for maximum ROI.",
      },
      {
        question: "Can you help during slow seasons?",
        answer:
          "Absolutely. Seasonal campaign planning is one of our core services. We run targeted promotions, maintenance reminders, and off-season specials to keep your calendar full year-round.",
      },
    ],
    ctaHeadline: "Get Your Free Service Area Analysis",
    ctaSubtext:
      "Discover how to dominate your local market and keep your trucks rolling year-round. No contracts, cancel anytime.",
  },

  "saas-marketing": {
    industryName: "SaaS",
    industrySlug: "saas-marketing",
    hero: {
      badge: "SaaS Growth Marketing",
      headline: "Scale Your MRR Without Burning Through Your Runway",
      subtitle:
        "Most SaaS companies spend 3x too much on customer acquisition because their funnel leaks at every stage. We plug the leaks and build compounding growth channels that reduce CAC month over month.",
    },
    painPoints: {
      headline: "Growth Stalls That Kill SaaS Companies",
      subtitle:
        "You have product-market fit. Your customers love the product. But turning that into predictable, scalable revenue growth is a completely different challenge.",
      items: [
        {
          title: "CAC Is Eating Your Margins",
          description:
            "You are spending $400+ to acquire a customer paying $99/month. Your payback period is 12+ months, which means you are financing every new customer out of your runway. This math does not scale.",
        },
        {
          title: "Trial Users Disappear",
          description:
            "Hundreds of people sign up for your free trial every month. 85% never log in a second time. Your onboarding is leaking revenue at a rate of $50,000+ per month in potential MRR.",
        },
        {
          title: "Content Gets Traffic but Not Signups",
          description:
            "Your blog gets 30,000 visitors a month. Your conversion rate is 0.3%. You are creating content that ranks but does not convert because there is no strategy connecting topics to product value.",
        },
        {
          title: "Churn Is Canceling Your Growth",
          description:
            "You are adding 50 new customers a month but losing 35. Net growth of 15 customers means you need 5 years to reach your revenue targets. Reducing churn by 2% has more impact than doubling ad spend.",
        },
      ],
    },
    services: {
      headline: "Growth Marketing for Product-Led Companies",
      subtitle:
        "We build acquisition, activation, and retention systems that compound — not campaigns that stop working when you stop spending.",
      items: [
        {
          title: "Product-Led Content Strategy",
          description:
            "Content that shows your product solving real problems — not keyword-stuffed blog posts. We create comparison pages, use-case guides, and tutorial content that ranks, converts, and reduces CAC by 60%.",
        },
        {
          title: "Conversion Rate Optimization",
          description:
            "Systematic A/B testing of your signup flow, pricing page, onboarding sequence, and upgrade triggers. We typically increase free-to-paid conversion rates by 40-80% within 90 days.",
        },
        {
          title: "Trial-to-Paid Onboarding Optimization",
          description:
            "Behavioral email sequences, in-app guidance, and activation milestone tracking that get trial users to their aha moment faster. Our SaaS clients see trial-to-paid rates above 25%.",
        },
        {
          title: "Paid Acquisition at Scale",
          description:
            "Google, LinkedIn, and Meta ad campaigns targeting high-intent keywords and lookalike audiences built from your best customers. We optimize to revenue events, not vanity metrics like clicks or signups.",
        },
        {
          title: "SEO for Bottom-of-Funnel Keywords",
          description:
            "We target the searches that indicate buying intent: '[competitor] alternative,' 'best [category] software,' and '[use case] tool.' These pages convert at 5-10x the rate of top-of-funnel content.",
        },
        {
          title: "Churn Reduction Campaigns",
          description:
            "Win-back sequences, usage-based health scoring, and proactive outreach to at-risk accounts. Reducing churn by 1% often has more revenue impact than acquiring 100 new customers.",
        },
      ],
    },
    results: {
      headline: "MRR Growth You Can Take to Your Board",
      subtitle:
        "Average results across our SaaS clients within the first 6 months.",
      metrics: [
        {
          value: "187%",
          label: "MRR Growth",
          description:
            "Average monthly recurring revenue increase within 6 months",
        },
        {
          value: "62%",
          label: "Lower CAC",
          description:
            "Reduction in customer acquisition cost through organic and conversion optimization",
        },
        {
          value: "3.2x",
          label: "LTV:CAC Ratio",
          description:
            "Up from 1.4x, unlocking sustainable unit economics for growth",
        },
      ],
    },
    beforeAfter: {
      headline: "The Olympia Transformation",
      before: [
        "CAC of $400+ with 14-month payback period",
        "Trial-to-paid conversion rate stuck at 8%",
        "Blog traffic growing but signups flat",
        "5% monthly churn canceling out new customer growth",
        "No attribution — no idea which channels drive actual revenue",
      ],
      after: [
        "CAC under $150 with 4-month payback period",
        "Trial-to-paid rate above 25% through optimized onboarding",
        "Product-led content driving 40% of new signups organically",
        "Churn reduced to 2.8% through proactive retention campaigns",
        "Full-funnel attribution from first touch to expansion revenue",
      ],
    },
    testimonial: {
      quote:
        "We were stuck at $45K MRR for almost a year. Olympia rebuilt our entire funnel — from content strategy to onboarding to churn prevention. We crossed $120K MRR five months later and our CAC dropped by half.",
      author: "Priya Narayanan",
      role: "Co-Founder & CEO, Stackline Analytics",
      stars: 5,
    },
    faqs: [
      {
        question: "Do you work with pre-revenue or early-stage SaaS companies?",
        answer:
          "We work best with SaaS companies that have product-market fit and at least $10K MRR. At that stage, you have enough data to optimize and enough revenue to invest in growth marketing that delivers measurable returns.",
      },
      {
        question: "How do you measure success for SaaS marketing?",
        answer:
          "We track the metrics that matter: MRR growth, CAC, LTV:CAC ratio, trial-to-paid conversion, net revenue retention, and payback period. Every campaign is tied to revenue outcomes, not vanity metrics.",
      },
      {
        question: "What is your approach to content versus paid acquisition?",
        answer:
          "We use paid acquisition for immediate pipeline while building organic content as a compounding asset. Over 12 months, the goal is to shift your channel mix toward lower-CAC organic channels so your growth becomes more efficient over time.",
      },
      {
        question: "Can you integrate with our existing tools?",
        answer:
          "Yes. We work with whatever stack you use — HubSpot, Mixpanel, Amplitude, Segment, Stripe, Intercom, and dozens of others. Proper tracking and attribution require tight integration, and we handle the setup.",
      },
      {
        question: "How is this different from hiring a growth marketer in-house?",
        answer:
          "A senior growth marketer costs $150K+ per year plus equity, takes months to ramp up, and brings one person's experience. You get an entire team — strategists, content creators, CRO specialists, and paid media experts — for less than half that cost, producing results from month one.",
      },
    ],
    ctaHeadline: "Your MRR Plateau Ends Here",
    ctaSubtext:
      "Get a free SaaS growth audit. We will analyze your funnel, identify the biggest revenue leaks, and map out a 90-day plan to accelerate your MRR growth — no strings attached.",
  },

  "roofing-contractor-marketing": {
    industryName: "Roofing Contractor",
    industrySlug: "roofing-contractor-marketing",
    hero: {
      badge: "Roofing Contractor Marketing",
      headline: "Generate Roofing Leads That Close at 40% — Not 4%",
      subtitle:
        "Stop door-knocking and chasing storm damage. We build marketing systems that deliver homeowners actively searching for roof replacements and repairs straight to your estimator's calendar.",
    },
    painPoints: {
      headline: "Why Most Roofers Stay Small",
      subtitle:
        "You do great work. Your crews are skilled. But if your lead generation depends on yard signs and knocking on doors, your growth has a ceiling.",
      items: [
        {
          title: "Door-Knocking Is Not Scalable",
          description:
            "Your best salespeople spend 80% of their time canvassing and 20% actually selling. At $50/hour fully loaded, that means you are paying $200+ per appointment before they even give an estimate.",
        },
        {
          title: "Storm Chasers Destroy Your Market",
          description:
            "After every storm, out-of-state crews flood your market with lowball prices and aggressive door-knocking. They undercut you, do subpar work, and leave you dealing with the reputation fallout for your entire industry.",
        },
        {
          title: "Google Reviews Are Killing You",
          description:
            "Your competitor has 250 five-star reviews and you have 30. When a homeowner searches 'roofing company near me,' they see their reviews first and never scroll to you. In roofing, reputation is everything.",
        },
        {
          title: "No Marketing Between Storms",
          description:
            "Storm season fills your pipeline for 3 months. The other 9 months, your phone barely rings. Maintenance, repairs, and retail replacements are a massive market you are not capturing because you have no year-round presence.",
        },
      ],
    },
    services: {
      headline: "Marketing That Fills Your Estimate Calendar",
      subtitle:
        "Every strategy is built to deliver homeowners who need a roof — not tire-kickers who want three quotes and pick the cheapest.",
      items: [
        {
          title: "Roofing SEO That Ranks",
          description:
            "We build and rank pages for 'roof replacement [city],' 'roofing company near me,' and 'storm damage roof repair' so homeowners find you first — not the storm chaser who just showed up last week.",
        },
        {
          title: "Google Local Service Ads",
          description:
            "Earn the Google Guaranteed badge and appear above all other search results. You only pay for actual leads, and our optimization keeps your cost below $35 per qualified roofing lead.",
        },
        {
          title: "Review Domination Strategy",
          description:
            "Automated post-job review requests that build your Google profile to 300+ five-star reviews. We help you respond to every review and turn your reputation into the competitive advantage that closes deals.",
        },
        {
          title: "Storm Response Campaigns",
          description:
            "Pre-built ad campaigns and landing pages ready to activate within hours of a major storm. While competitors scramble, you are already capturing search demand from homeowners assessing damage.",
        },
        {
          title: "Year-Round Lead Generation",
          description:
            "Campaigns for roof maintenance programs, gutter services, attic insulation, and retail replacements that keep your pipeline full between storm seasons. Consistent revenue beats feast-or-famine every time.",
        },
        {
          title: "Sales Process Optimization",
          description:
            "CRM setup, automated estimate follow-ups, and financing integration that increase your close rate from 25% to 40%+. Every lost estimate is a $12,000 job walking out the door.",
        },
      ],
    },
    results: {
      headline: "Roofs Sold, Revenue Grown",
      subtitle:
        "Average results across our roofing contractor clients within 6 months.",
      metrics: [
        {
          value: "340%",
          label: "More Qualified Leads",
          description:
            "Increase in inbound leads from homeowners needing roofing work",
        },
        {
          value: "42%",
          label: "Close Rate",
          description:
            "On inbound leads versus 15% industry average on canvassed leads",
        },
        {
          value: "$1.2M",
          label: "Added Annual Revenue",
          description:
            "Average revenue increase in the first year of partnership",
        },
      ],
    },
    beforeAfter: {
      headline: "The Olympia Transformation",
      before: [
        "Salespeople knocking on 50 doors a day to get 2 appointments",
        "Pipeline disappears between storm seasons",
        "30 Google reviews while the competitor down the road has 250",
        "No website or a template site that looks like every other roofer",
        "Zero leads from Google — all business from canvassing and referrals",
      ],
      after: [
        "15+ inbound estimate requests per week from homeowners who found you online",
        "Year-round revenue through maintenance programs and retail replacement campaigns",
        "300+ five-star reviews making you the most trusted roofer in your market",
        "Professional website showcasing your work, reviews, and financing options",
        "Top 3 Google rankings for every roofing search in your service area",
      ],
    },
    testimonial: {
      quote:
        "My guys used to knock on 200 doors a week. Now we get more estimates from Google in one day than we used to get from a week of canvassing. The leads close at over 40% because the homeowner already chose us before we showed up.",
      author: "Tony Deluca",
      role: "Owner, Deluca Roofing & Restoration",
      stars: 5,
    },
    faqs: [
      {
        question: "How quickly can I start getting roofing leads from Google?",
        answer:
          "Google Local Service Ads can generate leads within 1-2 weeks of setup. SEO results take 3-6 months to build but deliver the highest quality leads long-term. Most roofers see their first Google-sourced estimate within 30 days.",
      },
      {
        question: "What about storm season — can you ramp up fast?",
        answer:
          "Yes. We pre-build storm response campaigns and landing pages that can be activated within hours of a major weather event. While other roofers are scrambling to set up ads, your campaigns are already capturing homeowner demand.",
      },
      {
        question: "I do great work but I am bad at asking for reviews. Can you help?",
        answer:
          "That is exactly why we automated it. After every job, your customer gets a text message with a direct link to leave a Google review. It takes them 30 seconds. Our roofers average 15-20 new reviews per month without ever asking in person.",
      },
      {
        question: "Will this work in a competitive market with big roofing companies?",
        answer:
          "Yes — and often better. Large roofing companies have generic marketing that covers entire metro areas. We hyper-target your specific service area with localized content, reviews, and ads that outperform broad corporate campaigns.",
      },
      {
        question: "How do you track which leads turn into actual roofing jobs?",
        answer:
          "We integrate with your CRM or provide one, track every lead from first click to signed contract, and provide weekly reports showing leads, estimates, close rates, and revenue by marketing channel.",
      },
    ],
    ctaHeadline: "Stop Knocking on Doors — Let Homeowners Come to You",
    ctaSubtext:
      "Get a free roofing market analysis. We will show you exactly how many homeowners are searching for roofers in your area right now — and how to make sure they call you instead of your competition.",
  },
}

// ---------------------------------------------------------------------------
// Lookup helper
// ---------------------------------------------------------------------------

export function getIndustryTemplateData(
  slugOrPath: string
): IndustryTemplateData | null {
  if (INDUSTRY_TEMPLATE_DATA[slugOrPath]) return INDUSTRY_TEMPLATE_DATA[slugOrPath]
  const lastSegment = slugOrPath.split("/").pop()
  if (lastSegment && INDUSTRY_TEMPLATE_DATA[lastSegment])
    return INDUSTRY_TEMPLATE_DATA[lastSegment]
  return null
}
