import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ScrollProgress } from "@/components/animations/scroll-progress"
import { StickyCta } from "@/components/layout/sticky-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schema"

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="noise-bg">
      <JsonLd data={getOrganizationSchema()} />
      <JsonLd data={getWebSiteSchema()} />
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen pt-[72px]">{children}</main>
      <Footer />
      <StickyCta />
    </div>
  )
}
