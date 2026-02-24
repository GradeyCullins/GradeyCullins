import ContentWrapper from "../ContentWrapper.tsx";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "../ui/accordion.tsx";

const faqs = [
  {
    value: "engagement-model",
    question: "How do engagements typically work?",
    answer: [
      "Most clients start with a free 30-minute discovery call, followed by a paid technical assessment (1\u20132 weeks) that produces a concrete roadmap. From there, I embed with your team on a weekly retainer or project basis\u2014writing production code, running design reviews, and shipping features in sprint cycles.",
      "I\u2019m flexible. Some companies need me full-time for a quarter; others want 10\u201315 hours a week of strategic guidance and code review. We\u2019ll find the model that fits.",
    ],
  },
  {
    value: "who-is-this-for",
    question: "What kind of companies do you work with?",
    answer: [
      "Primarily B2B software companies\u2014SaaS platforms, vertical software, data products\u2014that want to add AI capabilities to their existing products or build new AI-native features. I\u2019ve worked across healthtech, fintech, developer tools, and more.",
      "If your team has strong engineers but lacks hands-on LLM and AI infrastructure experience, that\u2019s the sweet spot.",
    ],
  },
  {
    value: "vs-agency",
    question: "How is this different from hiring an AI agency or a full-time engineer?",
    answer: [
      "Agencies give you junior developers behind a sales team. A full-time hire takes 3\u20136 months to recruit, onboard, and ramp. I give you senior-level execution from day one\u2014with the strategic perspective of a consultant and the technical depth of a staff engineer.",
      "You also get flexibility. Scale my involvement up or down as your needs evolve, without the overhead of a permanent headcount.",
    ],
  },
  {
    value: "tech-stack",
    question: "Do I need to use a specific tech stack?",
    answer: [
      "No. I\u2019m a polyglot engineer and I adapt to your existing stack\u2014Python, TypeScript, Go, Ruby, or otherwise. I work with all major LLM providers (OpenAI, Anthropic, open-source models) and cloud platforms (AWS, GCP, Azure).",
      "I\u2019ll only recommend new tooling when the ROI clearly justifies it, and I\u2019ll make the case with data, not opinions.",
    ],
  },
  {
    value: "timeline",
    question: "How fast can you start delivering results?",
    answer: [
      "I ship production code in the first week. For greenfield AI features, expect a working proof-of-concept within 2\u20133 weeks and production-ready v1 within 6\u20138 weeks. For integrations and augmentations to existing products, timelines are often shorter.",
      "The technical assessment phase ensures we\u2019re building the right thing before we build it fast.",
    ],
  },
]

export default function FaqBlock() {
  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <ContentWrapper>
        <div className="max-w-3xl mb-10">
          <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-3">
            Common Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="max-w-3xl">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="engagement-model"
          >
            {faqs.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value}>
                <AccordionTrigger className="text-left text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-3 text-gray-600 leading-relaxed">
                  {faq.answer.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ContentWrapper>
    </div>
  )
}
