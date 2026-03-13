// JSON-LD Structured Data generators for Olympia Marketing
// All schemas follow https://schema.org specifications
// Updated for Google 2026 structured data requirements

const SITE_URL = "https://olympiamarketing.com"

interface WebPageInput {
  title: string
  description: string
  url: string
}

interface ArticleInput {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  author?: string
  image?: string
}

interface BreadcrumbItem {
  name: string
  url: string
}

interface ServiceInput {
  name: string
  description: string
  url: string
  provider?: string
}

interface FAQItem {
  question: string
  answer: string
}

interface ProfilePageInput {
  name: string
  description: string
  url: string
  image?: string
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MarketingAgency"],
    "@id": `${SITE_URL}/#organization`,
    name: "Olympia Marketing",
    description:
      "Full-service creative agency helping businesses scale with targeted, measurable marketing",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo-olympiamarketing.png`,
      width: 180,
      height: 72,
    },
    image: `${SITE_URL}/images/logo-olympiamarketing.png`,
    telephone: "+1-239-308-4011",
    email: "contact@olympiamarketing.com",
    founder: {
      "@type": "Person",
      name: "Zachary Katkin",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Estero",
      addressRegion: "FL",
      postalCode: "33928",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.4384,
      longitude: -81.7948,
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Lee County, Florida",
      },
      {
        "@type": "AdministrativeArea",
        name: "Collier County, Florida",
      },
      {
        "@type": "State",
        name: "Florida",
      },
    ],
    sameAs: [
      "https://www.facebook.com/olympiamarketing",
      "https://www.youtube.com/@olympiamarketing",
      "https://x.com/olympiamarket",
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    knowsAbout: [
      "Search Engine Optimization",
      "Pay-Per-Click Advertising",
      "Social Media Marketing",
      "Website Design",
      "Branding",
      "Content Marketing",
      "Email Marketing",
      "Public Relations",
    ],
  }
}

export function getWebPageSchema(page: WebPageInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: page.url,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
    },
  }
}

export function getArticleSchema(post: ArticleInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url: post.url,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    author: {
      "@type": "Person",
      name: post.author ?? "Zachary Katkin",
      url: `${SITE_URL}/about/our-founder`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Olympia Marketing",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo-olympiamarketing.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
    },
    ...(post.image
      ? {
          image: {
            "@type": "ImageObject",
            url: post.image,
          },
        }
      : {}),
  }
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function getServiceSchema(service: ServiceInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: service.provider ?? "Olympia Marketing",
    },
    areaServed: [
      {
        "@type": "State",
        name: "Florida",
      },
      {
        "@type": "AdministrativeArea",
        name: "Southwest Florida",
      },
    ],
    serviceType: service.name,
  }
}

export function getFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

/** ProfilePage schema for about/team pages (Google supported type) */
export function getProfilePageSchema(profile: ProfilePageInput) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: profile.name,
    description: profile.description,
    url: profile.url,
    mainEntity: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
    },
    ...(profile.image
      ? {
          image: {
            "@type": "ImageObject",
            url: profile.image,
          },
        }
      : {}),
  }
}

/**
 * WebSite schema — no longer includes SearchAction (Sitelinks Search Box
 * was deprecated by Google in January 2026).
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Olympia Marketing",
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
    },
  }
}

/** CollectionPage schema for blog listing and category archives */
export function getCollectionPageSchema(collection: {
  name: string
  description: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: collection.name,
    description: collection.description,
    url: collection.url,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
    },
  }
}
