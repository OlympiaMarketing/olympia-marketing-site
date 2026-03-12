import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ScrollProgress } from "@/components/animations/scroll-progress"
import { StickyCta } from "@/components/layout/sticky-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schema"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://olympiamarketing.com"),
  title: {
    default: "Olympia Marketing: SWFL Marketing & Advertising Experts",
    template: "%s | Olympia Marketing",
  },
  description:
    "Olympia Marketing is a full-service creative agency with a digital-first mindset. We help businesses scale quickly with targeted, measurable marketing in Southwest Florida.",
  keywords: [
    "digital marketing",
    "fort myers marketing agency",
    "SWFL marketing",
    "web design",
    "SEO",
    "PPC",
    "advertising agency",
    "olympia marketing",
    "estero marketing agency",
    "southwest florida marketing",
  ],
  authors: [{ name: "Zachary Katkin" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Olympia Marketing",
  },
  twitter: {
    card: "summary_large_image",
    site: "@olympiamarket",
  },
  alternates: {
    canonical: "/",
  },
}

export const viewport: Viewport = {
  themeColor: "#1e2433",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getWebSiteSchema()} />
      </head>
      <body className="noise-bg font-sans antialiased">
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen pt-[72px]">{children}</main>
        <Footer />
        <StickyCta />
        <Analytics />
      </body>
    </html>
  )
}
