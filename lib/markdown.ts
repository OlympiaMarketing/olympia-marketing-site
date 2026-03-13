import { marked } from "marked"
import { injectInternalLinks } from "./internal-links"

// Configure marked for safe rendering
marked.setOptions({
  gfm: true,
  breaks: true,
})

/** Convert markdown content to HTML. Handles both raw markdown and already-HTML content. */
export function renderContent(content: string, currentPath?: string): string {
  if (!content) return ""

  let html: string

  // If content already has significant HTML tags, use as-is
  const htmlTagCount = (content.match(/<(p|div|h[1-6]|ul|ol|table|section|article|img)\b/gi) || []).length
  if (htmlTagCount > 3) {
    html = content
  } else {
    html = marked.parse(content, { async: false }) as string
  }

  // Inject contextual internal links when a current path is provided
  if (currentPath) {
    html = injectInternalLinks(html, currentPath)
  }

  return html
}
