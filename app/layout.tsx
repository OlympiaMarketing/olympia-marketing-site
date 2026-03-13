import type { Metadata, Viewport } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ScrollProgress } from "@/components/animations/scroll-progress"
import { StickyCta } from "@/components/layout/sticky-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schema"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://olympiamarketing.com"),
  title: {
    default: "Olympia Marketing | Godlike Marketing for Small Business",
    template: "%s | Olympia Marketing",
  },
  description:
    "Full-service marketing agency in Estero, FL. SEO, PPC, web design, branding, and more. Godlike marketing for small business in Southwest Florida.",
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
  themeColor: "#09071A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${cormorant.variable}`}>
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
