import { ScrollReveal } from "@/components/animations/scroll-reveal"

export function SeoContent() {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <ScrollReveal>
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Olympia Marketing: Your Partner in Digital Success
          </h2>
          <div className="mt-6 flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              At Olympia Marketing, we are dedicated to transforming your business through innovative digital marketing strategies. With over 20 years of experience in the industry, we understand the unique challenges businesses face in today&rsquo;s competitive landscape. Our comprehensive approach ensures that we not only meet but exceed your expectations, helping you achieve your marketing goals and drive sustainable growth.
            </p>
            <p>
              Our team of experts specializes in a wide array of services, from SEO and content marketing to social media management and web development. We pride ourselves on our ability to tailor solutions that fit your specific needs, ensuring that your brand stands out in the digital realm. Whether you&rsquo;re a local business or a national brand, we have the tools and expertise to elevate your online presence and connect you with your target audience effectively.
            </p>

            <h3 className="text-xl font-semibold text-foreground">
              Our Comprehensive Marketing Services
            </h3>
            <p>
              Olympia Marketing offers a diverse range of marketing services designed to cater to the unique needs of our clients. From digital marketing strategies that leverage the latest technologies to traditional advertising methods that resonate with local audiences, we provide a holistic approach to marketing. This allows us to create campaigns that not only attract attention but also drive measurable results.
            </p>
            <p>
              Our services include website design and development, search engine optimization (SEO), pay-per-click advertising (PPC), and social media marketing. Each service is crafted with the goal of maximizing your return on investment and ensuring that your marketing efforts align with your business objectives. By partnering with us, you gain access to a wealth of knowledge and experience that can propel your brand forward.
            </p>

            <h3 className="text-xl font-semibold text-foreground">
              Client Success Stories
            </h3>
            <p>
              At Olympia Marketing, we take pride in the success of our clients. Our case studies showcase how our tailored marketing strategies have helped businesses across various industries achieve remarkable results. From increasing brand visibility to generating qualified leads, our clients have experienced significant growth through our partnership.
            </p>
            <p>
              For instance, one of our clients, a local medical spa, saw a 150% increase in appointment bookings within just three months of implementing our digital marketing strategies. These success stories not only highlight our capabilities but also demonstrate our commitment to our clients&rsquo; success. We believe that when our clients thrive, we thrive together.
            </p>

            <h3 className="text-xl font-semibold text-foreground">
              Why Choose Olympia Marketing?
            </h3>
            <p>
              Choosing the right marketing partner is crucial for your business&rsquo;s success. At Olympia Marketing, we differentiate ourselves through our commitment to excellence, transparency, and collaboration. Our team works closely with you to understand your unique challenges and objectives, ensuring that our strategies are aligned with your vision.
            </p>
            <p>
              We utilize data-driven insights to inform our decisions and continuously optimize our campaigns for maximum effectiveness. Our approach is not just about delivering services; it&rsquo;s about building long-term relationships that foster growth and success. With Olympia Marketing, you gain a partner who is invested in your future and dedicated to helping you achieve your marketing goals.
            </p>
          </div>
        </ScrollReveal>

        {/* Keyword tag cloud */}
        <ScrollReveal className="mt-12">
          <div className="flex flex-wrap gap-2">
            {[
              "brand", "web design", "search engine", "target audience", "advertising campaign",
              "reputation management", "digital marketing fort myers", "email marketing",
              "search engine optimization", "keyword research", "return on investment",
              "local search", "social media marketing", "content creation", "visibility",
              "web development", "content marketing", "online advertising", "social media",
              "revenue", "landing page", "usability", "advertising agency", "credibility",
              "fort myers seo", "seo services", "analytics", "customer engagement",
              "lead generation", "web traffic", "automation", "brand loyalty",
              "targeted advertising", "backlink", "link building",
              "fort myers digital marketing agency", "digital marketing",
              "marketing communications", "marketing campaign", "conversion rate optimization",
              "search engine marketing", "seo company", "strategy", "media buying",
              "software as a service", "social media campaigns", "agency",
              "digital marketing agency", "content marketing agency", "marketing agency",
              "social media agency", "olympia marketing", "digital marketing strategies",
              "marketing services",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-secondary/50 px-2 py-1 text-[10px] text-muted-foreground/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
