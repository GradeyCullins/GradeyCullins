import ContentWrapper from "../ContentWrapper.tsx"

const credibilityPoints = [
  {
    metric: "10+",
    label: "Years of Professional Engineering",
    detail: "Enterprise SaaS, healthtech, fintech, and web3",
  },
  {
    metric: "B2B",
    label: "AI Products Shipped to Production",
    detail: "LLM integrations, RAG pipelines, intelligent agents",
  },
  {
    metric: "Full-Stack",
    label: "End-to-End Ownership",
    detail: "From data layer to deployment\u2014no handoffs required",
  },
  {
    metric: "0",
    label: "Ramp-Up Time Needed",
    detail: "I ship production code in week one",
  },
]

const techStack = [
  "Python", "TypeScript", "Go", "React",
  "LangChain", "OpenAI", "Rails", "Node.js",
  "PostgreSQL", "Redis", "Docker", "AWS",
]

export default function SocialProofBlock() {
  return (
    <div className="bg-white py-20 sm:py-28">
      <ContentWrapper>
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-3">
            Why Companies Hire Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-4">
            Senior engineering depth.<br/>Consultant-level strategic thinking.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            You get the rare combination of someone who can present an AI strategy to your leadership team on Monday and push production-ready code on Tuesday.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credibilityPoints.map((point) => (
            <div key={point.label} className="border-t-2 border-blue-600 pt-4">
              <p className="text-3xl font-semibold text-gray-900 mb-1">{point.metric}</p>
              <p className="text-sm font-medium text-gray-900 mb-1">{point.label}</p>
              <p className="text-sm text-gray-500">{point.detail}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Toolkit</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Language and framework agnostic. I work with whatever your team already uses&mdash;and introduce new tools only when the ROI is clear.
          </p>
        </div>
      </ContentWrapper>
    </div>
  )
}
