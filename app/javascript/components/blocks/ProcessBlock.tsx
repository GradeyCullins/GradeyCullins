import ContentWrapper from "../ContentWrapper.tsx"

const steps = [
  {
    step: "01",
    title: "Discovery Call",
    duration: "30 min, free",
    description:
      "We discuss your product, your data, and where AI can create the highest-leverage impact. You walk away with clarity\u2014even if we never work together.",
  },
  {
    step: "02",
    title: "Technical Assessment & Roadmap",
    duration: "1\u20132 weeks",
    description:
      "I audit your codebase, data infrastructure, and business objectives. Deliverable: a prioritized AI roadmap with effort estimates, risk analysis, and expected ROI.",
  },
  {
    step: "03",
    title: "Build & Ship",
    duration: "Ongoing sprints",
    description:
      "I embed with your team and start delivering production features immediately\u2014iterating in tight feedback loops with your product and engineering stakeholders.",
  },
  {
    step: "04",
    title: "Handoff & Scale",
    duration: "Transition period",
    description:
      "Comprehensive documentation, knowledge transfer sessions, and architectural decision records so your team can maintain and extend everything I build.",
  },
]

export default function ProcessBlock() {
  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <ContentWrapper>
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-4">
            From first call to production in weeks, not quarters.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A streamlined engagement model designed for speed without sacrificing rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-8 border-t border-dashed border-gray-300 z-10" />
              )}
              <div className="mb-3">
                <span className="text-sm font-semibold text-blue-600">{item.step}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-blue-600 font-medium mb-3">{item.duration}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </ContentWrapper>
    </div>
  )
}
