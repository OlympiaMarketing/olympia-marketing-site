# Internal Linking Strategy — SEO Playbook

**Source:** Moz.com/learn/seo/internal-link (summarized) + SEO best practices
**Purpose:** Audit and improve internal linking across olympiamarketing.com

---

## What Are Internal Links & Why They Matter

Internal links are hyperlinks that point from one page on a domain to another page on the same domain. They are critical for three reasons:

1. **Crawlability:** Search engines discover new pages by following links. Pages with no internal links pointing to them ("orphan pages") may never get indexed.
2. **PageRank distribution:** Internal links pass authority (PageRank) between pages. Linking from high-authority pages to important pages boosts their ranking potential.
3. **User experience:** Internal links guide visitors to related content, increasing engagement and reducing bounce rate.

---

## Best Practices (Actionable Rules)

### 1. Every important page should be reachable within 3 clicks from the homepage
- Service pages, industry pages, and key blog posts should be linked from the homepage or from pages that are one click from the homepage.
- Deep pages (nested 3+ levels) need extra internal links to compensate.

### 2. Use descriptive anchor text
- **DO:** "Learn more about our [med spa marketing services](/med-spa)"
- **DON'T:** "Click [here](/med-spa) for more information"
- Anchor text should include the target keyword of the destination page.
- Vary anchor text slightly across different linking pages to avoid over-optimization.

### 3. Link contextually within content
- Links embedded within body content carry more SEO weight than navigation or footer links.
- Every blog post should link to at least 2-3 related service/industry pages.
- Every service page should link to related blog posts and case studies.

### 4. Create hub-and-spoke structures (topic clusters)
- Hub page: `/marketing-advertising-services/digital-marketing/` (pillar)
- Spokes: `/marketing-advertising-services/digital-marketing/seo/`, `/content-marketing/`, `/email-marketing/`, etc.
- Each spoke links back to the hub, and the hub links to all spokes.
- Blog posts in the topic cluster link to the hub AND relevant spokes.

### 5. Fix orphan pages
- Every page in the sitemap should have at least one internal link pointing to it.
- Use `site:olympiamarketing.com "page-title"` to verify Google has indexed each page.

### 6. Link from high-authority pages to pages you want to rank
- Homepage → key service pages
- Popular blog posts → underperforming service pages
- Industry hub pages → specific case studies

### 7. Keep link counts reasonable
- No hard limit, but aim for 100-200 unique internal links per page maximum.
- Navigation links count toward this total.

### 8. Use breadcrumbs
- Already implemented — breadcrumbs provide structured internal links that search engines love.
- Breadcrumbs should use schema.org BreadcrumbList markup (already done).

---

## Common Mistakes to Avoid

1. **Orphan pages:** Pages with zero internal links. Run audit to find these.
2. **Broken internal links:** Links to pages that 404. Run crawl to detect.
3. **Generic anchor text:** "Click here," "learn more," "read more" — wastes SEO opportunity.
4. **Too many links to the same page:** Diminishing returns. First link on a page carries the most weight.
5. **Nofollow on internal links:** Never use `rel="nofollow"` on internal links.
6. **Redirected internal links:** Link directly to the final URL, not through redirects.
7. **Linking only from navigation:** Body content links are much more valuable than nav links.

---

## Audit Checklist for Olympia Marketing

### Phase 1: Identify Issues
- [ ] Run crawl to find all orphan pages (pages with 0 incoming internal links)
- [ ] Find all broken internal links (404s)
- [ ] Identify pages with only navigation links (no body content links)
- [ ] Check that every blog post links to at least 2 service/industry pages
- [ ] Check that every service page links to related case studies and blog posts

### Phase 2: Fix Critical Issues
- [ ] Add internal links to orphan pages
- [ ] Fix or remove broken internal links
- [ ] Add contextual links in blog post content to service pages
- [ ] Ensure hub pages (services, industries) link to all spoke pages

### Phase 3: Optimize Link Structure
- [ ] Ensure homepage links to top 5-10 most important pages
- [ ] Add "Related Services" section to industry pages
- [ ] Add "Related Industries" section to service pages
- [ ] Cross-link case studies with their respective industry and service pages
- [ ] Add internal links in blog post content using target keywords as anchor text
- [ ] Verify breadcrumb links work correctly on all pages

### Phase 4: Ongoing
- [ ] Every new blog post should include 3-5 internal links to existing pages
- [ ] Every new service/industry page should be linked from at least 3 existing pages
- [ ] Monthly audit: check for new orphan pages and broken links
