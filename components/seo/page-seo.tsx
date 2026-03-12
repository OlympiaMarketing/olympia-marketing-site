import { JsonLd } from "./json-ld"
import {
  getOrganizationSchema,
  getWebPageSchema,
  getBreadcrumbSchema,
  getArticleSchema,
  getServiceSchema,
  getFAQSchema,
} from "@/lib/schema"

interface BreadcrumbItem {
  name: string
  url: string
}

interface ArticleData {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  author?: string
  image?: string
}

interface ServiceData {
  name: string
  description: string
  url: string
  provider?: string
}

interface FAQItem {
  question: string
  answer: string
}

interface PageSeoProps {
  title: string
  description: string
  url: string
  breadcrumbs?: BreadcrumbItem[]
  article?: ArticleData
  service?: ServiceData
  faqs?: FAQItem[]
  includeOrganization?: boolean
}

export function PageSeo({
  title,
  description,
  url,
  breadcrumbs,
  article,
  service,
  faqs,
  includeOrganization = true,
}: PageSeoProps) {
  return (
    <>
      {includeOrganization && <JsonLd data={getOrganizationSchema()} />}
      <JsonLd data={getWebPageSchema({ title, description, url })} />
      {breadcrumbs && breadcrumbs.length > 0 && (
        <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      )}
      {article && <JsonLd data={getArticleSchema(article)} />}
      {service && <JsonLd data={getServiceSchema(service)} />}
      {faqs && faqs.length > 0 && <JsonLd data={getFAQSchema(faqs)} />}
    </>
  )
}
