import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/schedule-a-call-christopher",
          "/company-information",
          "/support-process",
        ],
      },
    ],
    sitemap: "https://olympiamarketing.com/sitemap.xml",
  }
}
