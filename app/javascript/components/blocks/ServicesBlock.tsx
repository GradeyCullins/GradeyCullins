import ContentWrapper from "../ContentWrapper.tsx"

const services = [
  {
    title: "AI Product Development",
    description:
      "From proof-of-concept to production. I design, build, and ship LLM-powered features that integrate directly into your existing SaaS platform\u2014retrieval-augmented generation, intelligent agents, automated workflows, and more.",
    outcomes: [
      "New AI-driven product lines and revenue streams",
      "Faster time-to-market than hiring an in-house team",
      "Production-hardened systems built for scale",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "AI Strategy & Roadmapping",
    description:
      "Not sure where AI fits into your product? I audit your data, workflows, and competitive landscape to build a concrete, prioritized roadmap\u2014so you invest in AI initiatives that actually move the needle.",
    outcomes: [
      "Clear, ROI-driven AI adoption roadmap",
      "De-risked build-vs-buy decisions",
      "Aligned stakeholders from engineering to the C-suite",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
  },
  {
    title: "Architecture & Integration",
    description:
      "AI features are only as good as the systems they run on. I design scalable, observable architectures that plug into your existing stack\u2014APIs, vector stores, model orchestration, guardrails, and CI/CD for ML.",
    outcomes: [
      "Infrastructure that handles real-world traffic and edge cases",
      "Cost-optimized model serving and inference pipelines",
      "Maintainable systems your team can own long-term",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Team Enablement & Embedded Engineering",
    description:
      "Need senior AI firepower without the overhead of a full-time hire? I embed directly with your engineering team\u2014writing production code, leading design reviews, and upskilling your developers on AI best practices.",
    outcomes: [
      "Your team ships AI features independently after engagement",
      "Knowledge transfer baked into every sprint",
      "Reduced long-term dependency on external consultants",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
]

export default function ServicesBlock() {
  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <ContentWrapper>
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-3">
            What I Deliver
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-4">
            AI capabilities, shipped.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Most software companies know AI is a strategic imperative&mdash;but building it in-house is slow, expensive, and risky. I close that gap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-blue-50 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">{service.description}</p>
              <ul className="space-y-2">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start text-sm text-gray-700">
                    <svg
                      className="w-4 h-4 text-blue-600 mr-2 mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ContentWrapper>
    </div>
  )
}
