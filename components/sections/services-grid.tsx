"use client"

import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Globe, BarChart3, MapPin, Palette, Printer, Video, ArrowUpRight } from "lucide-react"

const digitalServices = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Websites are one of the most important aspects of marketing a modern business in the 21st century. Your website is your brand, your marketing base, your salesforce. It works 24/7 365 and doesn't take breaks. It NEEDS to be well-optimized. Most businesses don't understand how amazing a well-performing website can be. If you're not receiving a TON of business. You're doing something wrong!",
    href: "/marketing-advertising-services#websites",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing & Pay Per Click",
    description:
      "After setting up your website it's important to begin marketing your site and business pro-actively. Our digital marketing recommendations are based on experience in many different industries, but on average we see 2x average click through rates, 1.5x less expensive clicks and work with you to ensure all leads are high-quality and targeted to fit your exact businesses unique needs.",
    href: "/marketing-advertising-services#sem",
  },
  {
    icon: MapPin,
    title: "Local Digital Marketing & More",
    description:
      "Every business is unique, but so many businesses we're working with need assistance getting to the top of Google Local, Google's Map Pack, Google Local Service Ads, and much more. Our tried and tested tactics will ensure you're #1 on Google in every way, and we'll make proactive recommendations in order to help you achieve your personal business goals. And, as always our results are guaranteed.",
    href: "/marketing-advertising-services#seo",
  },
]

const conventionalServices = [
  {
    icon: Palette,
    title: "Corporate ID & Branding",
    description:
      "A successful business requires a professional, clear corporate marketing strategy \u2013 the bedrock of which is your corporate ID & branding. We offer a series of services in corporate ID & branding for clients of all shapes and sizes.",
    bullets: ["Logo Design", "Corporate ID", "Brand Messaging", "Brand Strategy"],
  },
  {
    icon: Printer,
    title: "Print Marketing",
    description:
      "Print is still one of the largest and most important places to invest your marketing dollars. From strategically placed print ads to custom designed and messaged brochures we offer everything your business will need.",
    bullets: ["Strategic Print Ads", "Powerful Direct Mailers", "Letterhead", "Custom Brochures"],
  },
  {
    icon: Video,
    title: "Video Production",
    description:
      "The creation of a great video ad for your business is as much art as it is science. Tapping into JUST your audience's particular needs, desires, and marrying that with a story and message that solidifies your brand and accelerates your growth.",
    bullets: ["Social Posting", "Video Editing", "Video & Story Scripts", "Video Production"],
  },
]

export function ServicesGrid() {
  return (
    <>
      {/* Digital Services */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Digital Marketing & Advertising Services
            </h2>
            <p className="mt-6 max-w-4xl text-base leading-relaxed text-muted-foreground">
              In today&rsquo;s digital-first world, Olympia Marketing stands at the forefront of digital marketing innovation, offering a suite of services designed to amplify your online presence and connect with your audience more effectively than ever before. Whether you&rsquo;re a local business looking for a{" "}
              <Link href="/fort-myers-digital-marketing-web-design-company" className="text-primary underline underline-offset-4 hover:brightness-110">
                Fort Myers Web Design Company
              </Link>{" "}
              or a national business looking for{" "}
              <Link href="/industries/saas-marketing" className="text-primary underline underline-offset-4 hover:brightness-110">
                Software as a Service Marketing
              </Link>{" "}
              &ndash; our digital marketing strategies encompass a wide range of channels, including targeted social media campaigns that engage and grow your community, search engine optimization (SEO) to boost your visibility online, and pay-per-click (PPC) advertising to drive immediate results. Our expertise also extends to content marketing, creating compelling narratives that resonate with your audience and email marketing strategies that nurture leads into loyal customers. At Olympia Marketing, we understand the digital landscape is ever-evolving, and our team is committed to leveraging the latest technologies and trends to ensure your brand not only keeps pace but sets the benchmark in your industry. Let&rsquo;s collaborate to unlock your brand&rsquo;s digital potential and achieve unprecedented growth. Contact us today to craft a digital marketing strategy that delivers.
            </p>
          </ScrollReveal>

          {/* Visual banner */}
          <ScrollReveal className="mt-10">
            <div className="relative h-48 overflow-hidden rounded-2xl md:h-64">
              <Image
                src="/images/olympia-marketing-seo.png"
                alt="Olympia Marketing SEO and Digital Marketing"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <p className="text-2xl font-bold text-foreground md:text-3xl">Data-Driven Results</p>
                <p className="mt-1 text-sm text-muted-foreground">Every strategy backed by analytics</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {digitalServices.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <Link href={service.href} className="group block h-full">
                  <div className="glass flex h-full flex-col rounded-2xl p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mt-6 flex items-center gap-2 text-lg font-semibold text-foreground">
                      {service.title}
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Conventional Services */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Conventional Marketing & Advertising Services
            </h2>
            <p className="mt-6 max-w-4xl text-base leading-relaxed text-muted-foreground">
              At Olympia Marketing, we specialize in bringing your brand&rsquo;s story to life through a dynamic range of traditional marketing and advertising services. From captivating TV commercials that engage viewers, to impactful print ads that capture attention, our creative team designs memorable narratives that resonate with your target audience. Our expertise extends to crafting bespoke brochures that detail your unique value proposition and designing direct mailers that create a tangible connection with your customers. With Olympia Marketing, you gain access to a suite of comprehensive services that not only elevate your brand&rsquo;s presence but also drive tangible results. We are dedicated to creating customized strategies that align with your goals, ensuring that every campaign we undertake maximizes your return on investment. Contact us today to discover how we can transform your marketing efforts and propel your brand to new heights.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {conventionalServices.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className="glass flex h-full flex-col rounded-2xl p-8 transition-all hover:border-primary/20">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                    <service.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  {service.bullets && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {service.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="rounded-md bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-10">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
            >
              Check Our Work
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
