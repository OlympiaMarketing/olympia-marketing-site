# Olympia Marketing Live Site Crawl Results

**Date**: 2026-03-12
**Source**: Live WordPress site at olympiamarketing.com
**Method**: WebFetch crawl of 8 target URLs

---

## 1. Blog Index — /blog/

**Page Title**: "Olympia Marketing: Your Marketing Success Guide In 2025"

### Header/Navigation
- Fixed sticky header (activates at 60px scroll offset)
- Olympia Marketing logo (left)
- Primary nav with "Services" dropdown containing tabbed interface
- Client CRM link (app.olympiamarketing.com)
- Contact support: 239-308-4011
- Top bar with general support links

### Blog Listing Layout
- **Grid-based layout** using Elementor post grid with card-style presentation
- Post cards displayed in a multi-column grid

### Post Card Structure
- Featured thumbnail image (rounded corners, border styling)
- Post title (truncated to 2 lines max, white text)
- Meta data: author, date, category badge (orange)
- Excerpt text (truncated to 4 lines)
- Hover effects on cards

### Sidebar
- Category listing with links (elementor-sitemap-category-list)
- Post tag cloud with hover effects
- Likely recent posts or related content sections

### Pagination
- Custom numbered pagination with styled buttons
- Dark background, orange active states
- Previous/next navigation available

### CTAs
- Footer subscription form for email marketing
- Service feature boxes highlighting agency capabilities
- "Client CRM" app login promotion

### Footer
- Multi-section footer with company branding
- Contact info: 18300 Dykes Road, Estero, FL
- Social media links
- Service categories
- Newsletter signup

### Tech Stack
- Elementor page builder
- WPForms integration
- AddToAny social sharing
- Google Analytics/GTM integration

---

## 2. About Page — /about/

**Page Title**: "Olympia Marketing: Our Story & Values Explained"

### Layout
- Breadcrumb navigation: Home > About
- Sticky header with navigation
- **Single-column / full-width layout** (no sidebar)

### Company Info
- **Address**: 18300 Dykes Road, Estero, FL 33928
- **Phone**: 239-308-4011
- **Email**: contact@olympiamarketing.com

### Content Sections (Top to Bottom)
1. Header/Navigation
2. Breadcrumbs
3. Company positioning: "Godlike Marketing for Small Business"
4. Key stats: "Our average client sees 100% growth in the first year, with many seeing much more"
5. Guarantee statement: "Our services, quality and results come 100% guaranteed"
6. Founder section with icon placeholder
7. Timeline section (CSS shows dotted lines, alternating left/right layout with circles — specific events not extracted)
8. Service category grids (4-column layouts):
   - SEO, Video Production, PR, Ads, SaaS, SEM, SMM, Branding, Email, Print, Salon, Review Generation, Schools, Updates, Hosting
9. Footer with brand logos and contact info

### Team Section
- References "our founder" with an icon placeholder
- No detailed team member cards with photos/bios visible

### CTAs
- Client CRM login
- Contact support at 239-308-4011

---

## 3. Work/Portfolio Page — /work/

**Page Title**: "Olympia Marketing: Work Opportunities In Various Industries"

### Layout
- Breadcrumb navigation: Home > Work
- Sticky header
- **No sidebar** — full-width layout

### Portfolio Display
- **Card-based grid layout**
- Rectangular containers for each case study
- 40px border-radius (rounded corners)
- Responsive: 4 columns down to 1 column on mobile

### Individual Portfolio Card Structure
- **Image**: Full-width, object-fit cover, center positioning
- **Title**: Displayed on hover overlay
- **Content**: Appears in semi-transparent dark overlay (rgba(0,0,0,0.72))
- **CTA Button**: 216px width, 51px height, within overlay

### Special Functionality
- **Lightbox effects**: `.lg-` prefixed classes
- **Hover animations**: Image transitions over 4-second duration
- **Overlay on hover**: Title and content revealed
- **Image position shift**: Object-position changes from top to bottom on hover

### Tab Filtering
- CSS includes `.tablinks`, `.tablinks2` classes suggesting category filtering

### Content Blocks (Top to Bottom)
1. Header/Navigation
2. Breadcrumb trail
3. Portfolio grid layout
4. Individual case study cards
5. Footer section

---

## 4. Contact Page — /contact/

**Page Title**: "Contact Olympia Marketing: Inquiries & Support"

### Hero/Banner
- Breadcrumb: Home > Contact
- Tagline: "Need Help? Contact Olympia Marketing Support Team"

### Contact Form (WPForms)
- **Text Input Fields** (required): Standard contact info fields
- **Select Dropdowns** (required): Multi-option selection
- **Textarea Fields** (optional): Message/comments, max-height 180px
- **Checkbox Lists**: Two-column layout, black text on white background
- **Submit Button**: Orange button

### Contact Information
- **Phone**: 239-308-4011
- **Email**: contact@olympiamarketing.com
- **Address**: 18300 Dykes Road, Estero, Florida 33928, USA

### Social Media Links
- Facebook, YouTube, X (Twitter), LinkedIn, Instagram, Pinterest

### Map
- No explicit map embed visible

### Office Hours
- Not specified

### Content Blocks (Top to Bottom)
1. Header/Navigation
2. Page title and breadcrumbs
3. Contact form section
4. Contact information section
5. Social sharing components
6. Footer with brand information

### Tech
- WPForms for contact form
- Responsive form styling with auto-sizing inputs
- Google Tag Manager (GTM-WM2GRJFM, GTM-MFKN7RD9)
- Cookie consent system
- Mobile hamburger navigation

---

## 5. Schedule Page — /schedule/

**Page Title**: "Schedule A Call With Olympia Marketing | Marketing Services"

### Content Blocks (Top to Bottom)
1. Logo/Header Navigation
2. Page Title
3. **"Meet Zachary Katkin"** — biographical/intro section
4. **"Our Services"** — overview of offerings (SEO, social media marketing, content creation, brand development)
5. **"Client Testimonials"** — social proof section
6. **"Schedule Your Consultation"** — primary CTA section with description
7. Footer with Copyright

### Booking/Calendar
- **No embedded calendar widget detected** (no Calendly, HubSpot, etc.)
- CTA language invites scheduling but no interactive booking iframe found
- Contact info provided: +1 239-308-4011, contact@olympiamarketing.com

### Social Links
- Facebook, YouTube, X (Twitter)

### Special Functionality
- Sticky header
- Google Tag Manager
- Cookie consent tracking

---

## 6. Research Page — /research/

**Page Title**: "Olympia Marketing: Marketing Insights For Business Growth"

### Layout
- Sticky header with navigation
- **Full-width layout** (no sidebar)

### Content Display
- Resources organized through **nested tab structures** within Elementor containers
- **4-column grids** for info-box items

### Individual Item Structure (Info-Boxes)
- **Icon**: 45px width
- **Title**: 16px font, 600 weight
- **Description**: 14px font, 500 weight
- **Hover effect**: Background color change to light gray

### Filtering/Search
- No explicit search or filtering — navigation relies on **tab-based organization**

### Content Blocks (Top to Bottom)
1. Header/Navigation (sticky)
2. Tab-organized service/research categories
3. Multiple 4-column grid sections
4. Info-box items with icons and descriptions
5. Footer section

### CTAs
- Client CRM link (app.olympiamarketing.com)
- Contact: 239-308-4011

---

## 7. Blog Post Example #1

**URL**: /fort-myers-seo-ai-how-to-optimize-your-business-for-results/
**Post Title**: "Fort Myers SEO & AI - How To Optimize Your Business For Results"

### Meta
- **Author**: Zachary Katkin (gravatar-linked profile)
- **Published**: January 6, 2026
- **Modified**: January 6, 2026
- **Categories**: Digital Marketing, Marketing & Advertising

### Featured Image
- "SEO & AI Optimization" — 1280x720px

### Content Structure (Top to Bottom)
1. Header with navigation
2. Breadcrumb navigation
3. Featured image
4. Post title, author, date metadata
5. Article body content
6. Embedded YouTube video (ID: T934iL3lyj8)
7. Social sharing section (AddToAny: LinkedIn, Twitter/X, Facebook)
8. Footer

### Sidebar
- Recent posts listing with category filtering
- Post tag cloud
- Search functionality widget
- Category archive links

### Missing/Not Found
- No table of contents
- No related posts section visible
- No previous/next post navigation visible
- Comments infrastructure present but no visible comments

### CTAs
- Client CRM login (app.olympiamarketing.com)
- Contact: 239-308-4011

---

## 8. Blog Post Example #2

**URL**: /the-ultimate-guide-to-google-business-optimization-ranking-2025/
**Post Title**: "The Definitive Guide to Google Business Profile Ranking in 2025: A Data-Driven Framework"

### Meta
- **Author**: Zachary Katkin (profile: /author/zkatkin/)
- **Published**: October 24, 2025
- **Modified**: November 12, 2025
- **Category**: Digital Marketing

### Featured Image
- Presentation image: "SWFL Inc. and Olympia Marketing Google Business Profile Optimization"
- Features speaker Zach Katkin, described as Digital Marketing Expert
- WebP format

### Content Structure (Top to Bottom)
1. Header with navigation menu
2. Breadcrumb navigation (Home > Current Post)
3. Featured image
4. Post content area
5. Social sharing (AddToAny: LinkedIn, Twitter, Facebook)
6. Sidebar
7. Footer with branding section + client logos

### Sidebar
- Recent posts section
- Category listings
- Tag cloud
- Search functionality

### Missing/Not Found
- No table of contents
- No related posts section
- No comments visible
- No previous/next post navigation

---

## Cross-Page Patterns Summary

### Global Header
- Fixed sticky header (60px scroll offset activation)
- Logo left, nav center/right
- Services mega-dropdown with tabbed interface
- Client CRM link
- Phone: 239-308-4011

### Global Footer
- Company branding
- Address: 18300 Dykes Road, Estero, FL 33928
- Social media links (Facebook, YouTube, X, LinkedIn, Instagram, Pinterest)
- Service categories
- Newsletter signup form

### Shared Tech Stack
- **WordPress** with **Elementor** page builder
- **WPForms** for contact forms
- **Rank Math SEO** plugin (sitemaps)
- **AddToAny** social sharing
- **Google Tag Manager** (GTM-WM2GRJFM, GTM-MFKN7RD9)
- Cookie consent system
- Gravatar for author images

### Blog Post URL Pattern
- Posts live at root level: `olympiamarketing.com/post-slug/`
- NOT under `/blog/` prefix
- `/blog/` is just the archive/index page
- 170 published posts in sitemap

### Blog Post Template
- Breadcrumb nav
- Featured image (1280x720)
- Title + meta (author, date, categories)
- Article body
- YouTube video embeds (some posts)
- AddToAny social sharing (LinkedIn, Twitter/X, Facebook)
- Sidebar: recent posts, categories, tag cloud, search
- No TOC, no related posts, no prev/next navigation

### Contact Info (Site-Wide)
- **Phone**: 239-308-4011
- **Email**: contact@olympiamarketing.com
- **Address**: 18300 Dykes Road, Estero, FL 33928, USA
- **CRM App**: app.olympiamarketing.com
