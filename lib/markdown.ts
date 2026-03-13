import { marked } from "marked"
import { injectInternalLinks } from "./internal-links"

// Configure marked for safe rendering
marked.setOptions({
  gfm: true,
  breaks: true,
})

/**
 * Strip WordPress/Elementor artifacts from imported HTML content.
 * Handles shortcodes, inline SVGs, dead widgets, Elementor data attributes, etc.
 */
function cleanWordPressHtml(html: string): string {
  let cleaned = html

  // Remove WordPress shortcodes like [rank_math_breadcrumb], [contact-form-7 ...], [/shortcode], etc.
  cleaned = cleaned.replace(/\[\/?\w[\w_-]*(?:\s[^\]]*)?]/g, "")

  // Fix old WordPress site URLs to relative paths (run BEFORE image stripping)
  cleaned = cleaned.replace(/https?:\/\/(www\.)?olympiamarketing\.com\//g, "/")

  // Remove img tags with wp-content URLs (broken external images from old WP site)
  cleaned = cleaned.replace(/<img[^>]*src="[^"]*wp-content[^"]*"[^>]*\/?>/gi, "")

  // Unwrap anchor tags linking to wp-content assets (PDFs, attachments) — keep link text, drop the <a>
  cleaned = cleaned.replace(/<a[^>]*href="[^"]*wp-content[^"]*"[^>]*>([\s\S]*?)<\/a>/gi, "$1")

  // Unwrap figure elements — keep inner content, remove the wrapper
  // (Elementor used figures as layout containers, not semantic elements)
  cleaned = cleaned.replace(/<\/?figure[^>]*>/gi, "")

  // Remove inline SVGs (Elementor widget icons, decorative elements)
  cleaned = cleaned.replace(/<svg[\s\S]*?<\/svg>/gi, "")

  // Remove Elementor "Load More" button widgets and surrounding containers
  cleaned = cleaned.replace(/<button[^>]*data-widget[^>]*>[\s\S]*?<\/button>/gi, "")
  cleaned = cleaned.replace(/<div[^>]*class="[^"]*load-more[^"]*"[^>]*>[\s\S]*?<\/div>/gi, "")

  // Remove srcset and sizes attributes from remaining img tags
  cleaned = cleaned.replace(/\s+srcset="[^"]*"/gi, "")
  cleaned = cleaned.replace(/\s+sizes="[^"]*"/gi, "")

  // Remove width/height attributes (Elementor sets fixed pixel dimensions)
  cleaned = cleaned.replace(/\s+(?:width|height)="[^"]*"/gi, "")

  // Remove style attributes (Elementor inline styles conflict with our CSS)
  cleaned = cleaned.replace(/\s+style="[^"]*"/gi, "")

  // Remove data-* attributes from Elementor (data-widget, data-element, data-settings, etc.)
  cleaned = cleaned.replace(/\s+data-[\w-]+="[^"]*"/g, "")

  // Remove tabindex attributes from non-interactive elements
  cleaned = cleaned.replace(/\s+tabindex="[^"]*"/g, "")

  // Remove Elementor-specific CSS classes (elementor-*, eael-*)
  cleaned = cleaned.replace(/\s+class="[^"]*(?:elementor|eael-)[^"]*"/gi, "")

  // Remove duplicate H1 tags inside body content (PageHero already renders the H1)
  cleaned = cleaned.replace(/<h1[^>]*>[\s\S]*?<\/h1>/gi, "")

  // Remove empty anchor tags (leftover from stripped content)
  cleaned = cleaned.replace(/<a[^>]*>\s*<\/a>/gi, "")

  // Remove empty paragraphs and divs
  cleaned = cleaned.replace(/<p[^>]*>\s*(&nbsp;|\s)*<\/p>/gi, "")

  // Iteratively remove empty container divs (may be nested)
  let prev = ""
  while (prev !== cleaned) {
    prev = cleaned
    cleaned = cleaned.replace(/<div[^>]*>\s*<\/div>/gi, "")
  }

  // Collapse multiple consecutive <br> tags (WP content uses these for spacing)
  cleaned = cleaned.replace(/(<br\s*\/?>[\s\n]*){2,}/gi, "<br>")

  // Remove standalone breadcrumb-like "Services" paragraph at the start
  cleaned = cleaned.replace(/^[\s\n]*<p[^>]*>\s*Services\s*<\/p>/i, "")

  // Clean up excessive whitespace
  cleaned = cleaned.replace(/\n{3,}/g, "\n\n")

  return cleaned.trim()
}

/** Convert markdown content to HTML. Handles both raw markdown and already-HTML content. */
export function renderContent(content: string, currentPath?: string): string {
  if (!content) return ""

  let html: string

  // If content already has significant HTML tags, use as-is
  const htmlTagCount = (content.match(/<(p|div|h[1-6]|ul|ol|table|section|article|img)\b/gi) || []).length
  if (htmlTagCount > 3) {
    html = cleanWordPressHtml(content)
  } else {
    html = marked.parse(content, { async: false }) as string
  }

  // Inject contextual internal links when a current path is provided
  if (currentPath) {
    html = injectInternalLinks(html, currentPath)
  }

  return html
}
