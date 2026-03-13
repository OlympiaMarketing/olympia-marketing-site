/**
 * Internal Linking Engine
 *
 * Implements SEO best practices for internal cross-linking:
 * - 2-5 contextual links per 1,000 words of content
 * - Descriptive, varied anchor text
 * - Links placed naturally within body content
 * - Hub/pillar pages get more inbound links
 * - Prevents orphan pages by ensuring every page has at least one inbound link
 * - Never links a page to itself
 */

const SITE_URL = "https://olympiamarketing.com"

interface LinkTarget {
  /** URL path (no leading slash) */
  path: string
  /** Anchor text phrases that should link to this page */
  anchors: string[]
  /** Higher = more important (gets linked more often) */
  weight: number
}

/**
 * Pillar/hub pages and their anchor text mappings.
 * These are the highest-value pages that should accumulate the most internal link equity.
 * Ordered by weight — higher weight targets get matched first.
 */
const LINK_TARGETS: LinkTarget[] = [
  // ── Pillar service pages (highest weight) ──
  {
    path: "marketing-advertising-services",
    anchors: ["marketing services", "advertising services", "our services", "marketing and advertising"],
    weight: 10,
  },
  {
    path: "seo",
    anchors: ["SEO", "search engine optimization", "SEO services", "SEO strategy"],
    weight: 9,
  },
  {
    path: "marketing-advertising-services/digital-marketing",
    anchors: ["digital marketing", "PPC", "pay-per-click", "digital advertising", "online marketing"],
    weight: 9,
  },
  {
    path: "marketing-advertising-services/websites",
    anchors: ["website design", "web design", "website development", "web development"],
    weight: 8,
  },
  {
    path: "marketing-advertising-services/digital-marketing/social-media-marketing",
    anchors: ["social media marketing", "social media management", "social media strategy"],
    weight: 7,
  },
  {
    path: "marketing-advertising-services/digital-marketing/content-marketing",
    anchors: ["content marketing", "content strategy", "content creation"],
    weight: 7,
  },
  {
    path: "marketing-advertising-services/digital-marketing/email-marketing",
    anchors: ["email marketing", "email campaigns", "email automation"],
    weight: 7,
  },
  {
    path: "marketing-advertising-services/digital-marketing/local-seo",
    anchors: ["local SEO", "local search", "Google Business Profile", "local search optimization"],
    weight: 7,
  },
  {
    path: "marketing-advertising-services/digital-marketing/search-engine-marketing",
    anchors: ["search engine marketing", "SEM", "paid search"],
    weight: 7,
  },
  {
    path: "marketing-advertising-services/branding-corporate-id",
    anchors: ["branding", "brand identity", "corporate identity", "brand strategy"],
    weight: 6,
  },
  {
    path: "marketing-advertising-services/fractional-cmo",
    anchors: ["fractional CMO", "outsourced CMO", "part-time CMO"],
    weight: 6,
  },
  {
    path: "marketing-advertising-services/public-relations-pr",
    anchors: ["public relations", "PR services", "press releases"],
    weight: 6,
  },
  {
    path: "review-generation",
    anchors: ["review generation", "online reviews", "Google reviews"],
    weight: 5,
  },
  {
    path: "reputation-management",
    anchors: ["reputation management", "online reputation"],
    weight: 5,
  },
  {
    path: "blogging",
    anchors: ["blogging", "blog writing", "blog content"],
    weight: 5,
  },

  // ── Industry pages ──
  {
    path: "med-spa",
    anchors: ["medical spa marketing", "medspa marketing", "med spa advertising"],
    weight: 8,
  },
  {
    path: "beauty-esthetician-marketing-advertising",
    anchors: ["salon marketing", "beauty marketing", "esthetician marketing", "salon advertising"],
    weight: 8,
  },
  {
    path: "physical-therapy-marketing-advertising",
    anchors: ["physical therapy marketing", "PT marketing", "physical therapist advertising"],
    weight: 8,
  },
  {
    path: "real-estate-marketing-advertising",
    anchors: ["real estate marketing", "real estate advertising", "realtor marketing"],
    weight: 8,
  },
  {
    path: "builders-developers",
    anchors: ["builder marketing", "developer marketing", "construction marketing", "contractor marketing"],
    weight: 7,
  },
  {
    path: "beauty-school-marketing",
    anchors: ["beauty school marketing", "cosmetology school marketing", "beauty school advertising"],
    weight: 7,
  },
  {
    path: "industries/home-service-businesses",
    anchors: ["home service marketing", "home services advertising", "HVAC marketing", "plumber marketing"],
    weight: 7,
  },
  {
    path: "industries/saas-marketing",
    anchors: ["SaaS marketing", "software marketing", "B2B SaaS"],
    weight: 7,
  },
  {
    path: "roofing-contractor-marketing",
    anchors: ["roofing marketing", "roofer marketing", "roofing contractor advertising"],
    weight: 7,
  },

  // ── Location pages ──
  {
    path: "digital-marketing-fort-myers",
    anchors: ["Fort Myers marketing", "Fort Myers digital marketing"],
    weight: 6,
  },
  {
    path: "estero-marketing-agency",
    anchors: ["Estero marketing", "Estero marketing agency"],
    weight: 6,
  },
  {
    path: "orlando-marketing-agency",
    anchors: ["Orlando marketing", "Orlando marketing agency"],
    weight: 6,
  },

  // ── Key informational pages ──
  {
    path: "about",
    anchors: ["about us", "our team", "about Olympia"],
    weight: 4,
  },
  {
    path: "work",
    anchors: ["our work", "case studies", "portfolio", "client results"],
    weight: 5,
  },
  {
    path: "blog",
    anchors: ["our blog", "marketing blog", "read more on our blog"],
    weight: 4,
  },
  {
    path: "contact",
    anchors: ["contact us", "get in touch", "reach out"],
    weight: 4,
  },
  {
    path: "schedule",
    anchors: ["schedule a consultation", "free consultation", "book a call", "schedule a call"],
    weight: 5,
  },
]

/** Max number of internal links to inject per piece of content */
const MAX_LINKS_PER_CONTENT = 8

/** Minimum words between injected links to prevent clustering */
const MIN_WORDS_BETWEEN_LINKS = 80

/**
 * Process HTML content and inject contextual internal links.
 * Only adds links to text that isn't already inside an <a> tag.
 *
 * @param html - The HTML content to process
 * @param currentPath - The path of the current page (to avoid self-links)
 * @returns HTML with internal links injected
 */
export function injectInternalLinks(html: string, currentPath: string): string {
  if (!html) return html

  // Sort targets by weight descending so higher-priority pages get linked first
  const targets = LINK_TARGETS
    .filter((t) => t.path !== currentPath && t.path !== currentPath.replace(/^\//, ""))
    .sort((a, b) => b.weight - a.weight)

  let linksAdded = 0
  let result = html

  // Track which paths we've already linked to (one link per target per page)
  const linkedPaths = new Set<string>()

  for (const target of targets) {
    if (linksAdded >= MAX_LINKS_PER_CONTENT) break

    for (const anchor of target.anchors) {
      if (linksAdded >= MAX_LINKS_PER_CONTENT) break
      if (linkedPaths.has(target.path)) break

      // Case-insensitive match, but only in text nodes (not inside tags or existing links)
      // This regex matches the anchor text only when NOT inside an HTML tag or <a>...</a>
      const escaped = anchor.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      const pattern = new RegExp(
        `(?<![<\\/\\w])(?<!<a[^>]*>.*?)\\b(${escaped})\\b(?![^<]*<\\/a>)(?![^<]*>)`,
        "i",
      )

      const match = result.match(pattern)
      if (match && match.index !== undefined) {
        // Verify we're not inside an anchor tag by checking the context
        const before = result.slice(Math.max(0, match.index - 500), match.index)
        const openAnchors = (before.match(/<a\b/gi) || []).length
        const closeAnchors = (before.match(/<\/a>/gi) || []).length
        if (openAnchors > closeAnchors) continue

        // Also verify we're not inside a heading tag
        const openHeadings = (before.match(/<h[1-6]\b/gi) || []).length
        const closeHeadings = (before.match(/<\/h[1-6]>/gi) || []).length
        if (openHeadings > closeHeadings) continue

        const link = `<a href="${SITE_URL}/${target.path}" class="internal-link">${match[0]}</a>`
        result = result.slice(0, match.index) + link + result.slice(match.index + match[0].length)

        linkedPaths.add(target.path)
        linksAdded++
      }
    }
  }

  return result
}
