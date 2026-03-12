"use client"

import { ScrollReveal } from "@/components/animations/scroll-reveal"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export interface FaqItem {
  question: string
  answer: string
}

const homepageFaqs: FaqItem[] = [
  {
    question: "What are the benefits of digital marketing in Fort Myers?",
    answer: "The benefits of digital marketing in Fort Myers include enhanced brand visibility, targeted audience reach, cost-effective advertising, and measurable results. These advantages help local businesses effectively connect with their customers and drive growth in the competitive Southwest Florida market.",
  },
  {
    question: "How do I choose a marketing agency in Olympia?",
    answer: "Choosing a marketing agency in Olympia involves evaluating their experience, service offerings, and client testimonials. Look for an agency that aligns with your business goals and has a proven track record in digital marketing strategies.",
  },
  {
    question: "How does SEO work for Fort Myers businesses?",
    answer: "SEO for Fort Myers businesses involves optimizing their online presence to improve visibility in search engine results. This includes keyword research, on-page optimization, and local listings, helping attract more local customers and drive growth.",
  },
  {
    question: "What is the best strategy for digital marketing in Fort Myers?",
    answer: "The best strategy for digital marketing in Fort Myers involves a tailored approach that combines local SEO, targeted social media campaigns, and engaging content marketing to effectively reach and connect with the local audience.",
  },
  {
    question: "What services does a marketing agency in Olympia offer?",
    answer: "A marketing agency in Olympia offers a range of services including SEO, content marketing, social media management, web development, and digital advertising, all designed to enhance brand visibility and drive business growth.",
  },
  {
    question: "What services does a Fort Myers digital marketing agency offer?",
    answer: "A Fort Myers digital marketing agency offers a range of services including SEO, content marketing, social media management, web development, and online advertising, all designed to enhance brand visibility and drive business growth.",
  },
  {
    question: "Can a Fort Myers agency help with website design and development?",
    answer: "A Fort Myers agency can effectively assist with website design and development by leveraging local expertise and industry knowledge to create customized, high-quality websites that enhance user experience and drive business growth.",
  },
  {
    question: "What is the importance of online reputation in Fort Myers?",
    answer: "The importance of online reputation in Fort Myers lies in its ability to influence consumer trust and business credibility. A positive online presence can significantly enhance brand visibility and attract more clients in this competitive market.",
  },
  {
    question: "What are the latest digital marketing trends in Fort Myers?",
    answer: "The latest digital marketing trends in Fort Myers include a strong focus on local SEO, personalized content marketing, and the growing importance of social media engagement, as businesses aim to connect more effectively with their community and target audience.",
  },
  {
    question: "What is the role of a marketing agency in Olympia?",
    answer: "The role of a marketing agency in Olympia is to enhance brand visibility and drive growth for businesses through strategic marketing services, including digital advertising, SEO, content creation, and social media management tailored to the local market.",
  },
  {
    question: "Does a marketing agency in Olympia provide social media management?",
    answer: "A marketing agency in Olympia does provide social media management services. These services help businesses enhance their online presence, engage with their audience, and effectively promote their brand across various social media platforms.",
  },
  {
    question: "How does a marketing agency in Olympia create a marketing strategy?",
    answer: "A marketing agency in Olympia creates a marketing strategy by conducting thorough market research, analyzing target audiences, setting clear objectives, and developing tailored campaigns that leverage digital channels to enhance brand visibility and drive growth.",
  },
  {
    question: "How can a digital agency help my business grow?",
    answer: "A digital agency can help your business grow by enhancing your online presence through targeted marketing strategies, improving brand visibility, and driving customer engagement, ultimately leading to increased sales and sustainable growth.",
  },
  {
    question: "What sets a Fort Myers agency apart from others?",
    answer: "What sets a Fort Myers agency apart from others is its deep understanding of the local market, personalized service, and a commitment to leveraging digital-first strategies that drive measurable results for businesses in the Southwest Florida region.",
  },
  {
    question: "How does a marketing agency in Olympia help businesses?",
    answer: "A marketing agency in Olympia helps businesses by providing tailored digital marketing strategies that enhance brand visibility, drive growth, and engage target audiences through services like SEO, content marketing, social media management, and web development.",
  },
  {
    question: "How long does it take to see results from a marketing agency in Olympia?",
    answer: "The time it takes to see results from a marketing agency in Olympia can vary, but typically, clients may start noticing improvements within three to six months, depending on the strategies implemented and the specific goals set.",
  },
  {
    question: "Can a Fort Myers agency handle international marketing campaigns?",
    answer: "A Fort Myers agency can effectively handle international marketing campaigns by leveraging its expertise in digital strategies, cultural insights, and global market trends to enhance brand visibility and engagement across diverse audiences.",
  },
  {
    question: "How can I optimize my website for mobile devices in Fort Myers?",
    answer: "Optimizing your website for mobile devices in Fort Myers involves ensuring responsive design, improving loading speeds, and simplifying navigation. Additionally, utilize local SEO strategies to enhance visibility for mobile users in the area.",
  },
  {
    question: "What is the role of social media in Fort Myers?",
    answer: "The role of social media in Fort Myers is to enhance community engagement, promote local businesses, and connect residents. It serves as a vital platform for sharing information, fostering relationships, and driving economic growth in the region.",
  },
  {
    question: "What is the best way to advertise in Fort Myers?",
    answer: "The best way to advertise in Fort Myers is to leverage a mix of digital marketing strategies, including targeted social media campaigns, local SEO, and engaging content that resonates with the community, ensuring maximum visibility and engagement.",
  },
  {
    question: "What are the benefits of hiring a marketing agency in Olympia?",
    answer: "The benefits of hiring a marketing agency in Olympia include access to expert strategies, enhanced brand visibility, and tailored marketing solutions that drive growth, leveraging local market knowledge to effectively reach your target audience in Southwest Florida.",
  },
  {
    question: "Can a marketing agency in Olympia improve my sales?",
    answer: "A marketing agency in Olympia can indeed improve your sales by implementing targeted strategies tailored to your business needs, enhancing brand visibility, and leveraging digital marketing techniques to reach your desired audience effectively.",
  },
  {
    question: "Do Fort Myers agencies provide social media management services?",
    answer: "Fort Myers agencies do offer social media management services. These agencies specialize in creating and managing social media strategies to enhance brand visibility and engagement for businesses in the region.",
  },
  {
    question: "What digital marketing tools are effective in Fort Myers?",
    answer: "Effective digital marketing tools in Fort Myers include SEO optimization platforms, social media management tools, email marketing software, and analytics services, which collectively enhance brand visibility and engagement in the local market.",
  },
  {
    question: "How can I measure digital marketing success in Fort Myers?",
    answer: "Measuring digital marketing success in Fort Myers involves tracking key performance indicators (KPIs) such as website traffic, conversion rates, social media engagement, and return on investment (ROI) to assess the effectiveness of your campaigns.",
  },
  {
    question: "What are common challenges for agencies in Olympia?",
    answer: "Common challenges for agencies in Olympia include navigating a competitive market, adapting to rapid technological changes, and meeting diverse client expectations while maintaining effective communication and delivering consistent results.",
  },
  {
    question: "How can Fort Myers businesses improve online visibility?",
    answer: "Fort Myers businesses can improve online visibility by implementing effective SEO strategies, engaging in social media marketing, creating high-quality content, and optimizing their websites for user experience and mobile compatibility.",
  },
  {
    question: "What strategies enhance social media engagement in Fort Myers?",
    answer: "Strategies that enhance social media engagement in Fort Myers include creating localized content, utilizing visually appealing graphics, actively responding to comments, and leveraging community events to foster connections with the audience.",
  },
  {
    question: "How do I evaluate marketing agency performance in Olympia?",
    answer: "Evaluating marketing agency performance in Olympia involves assessing key metrics such as ROI, client satisfaction, and the effectiveness of campaigns. Additionally, review case studies and client testimonials to gauge their expertise and results in enhancing brand visibility.",
  },
  {
    question: "What trends are shaping digital marketing in Fort Myers?",
    answer: "The trends shaping digital marketing in Fort Myers include a growing emphasis on localized SEO, increased use of social media advertising, and the integration of data analytics to personalize customer experiences.",
  },
]

export function FaqAccordion({ faqs = homepageFaqs }: { faqs?: FaqItem[] }) {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <div className="mt-12">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={Math.min(i * 0.03, 0.3)}>
                <AccordionItem
                  value={`faq-${i}`}
                  className="glass rounded-xl border-none px-6"
                >
                  <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
