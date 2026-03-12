// JSON-LD Structured Data generators for Olympia Marketing
// All schemas follow https://schema.org specifications

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

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: "Olympia Marketing",
    description:
      "Full-service creative agency helping businesses scale with targeted, measurable marketing",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/olympia-logo.svg`,
    },
    image: `${SITE_URL}/olympia-logo.svg`,
    telephone: "239-308-4011",
    email: "contact@olympiamarketing.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "18300 Dykes Road",
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
        name: "Southwest Florida",
      },
    ],
    sameAs: [] as string[],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
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
      name: post.author ?? "Olympia Marketing",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Olympia Marketing",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/olympia-logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
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
    areaServed: {
      "@type": "State",
      name: "Southwest Florida",
    },
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
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}
