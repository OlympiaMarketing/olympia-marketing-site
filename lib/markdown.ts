import { marked } from "marked"

// Configure marked for safe rendering
marked.setOptions({
  gfm: true,
  breaks: true,
})

/** Convert markdown content to HTML. Handles both raw markdown and already-HTML content. */
export function renderContent(content: string): string {
  if (!content) return ""

  // If content already has significant HTML tags, return as-is
  const htmlTagCount = (content.match(/<(p|div|h[1-6]|ul|ol|table|section|article|img)\b/gi) || []).length
  if (htmlTagCount > 3) return content

  // Convert markdown to HTML
  return marked.parse(content, { async: false }) as string
}
