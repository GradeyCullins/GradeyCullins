import {Head, useForm} from "@inertiajs/react"
import {FormEvent} from "react"

const projectTypes = [
  "AI product build",
  "AI integration/RAG",
  "Automation/agents",
  "AI strategy/roadmap",
  "Embedded engineering",
  "Website/app build",
  "Other",
]

const budgetOptions = [
  "Not sure yet",
  "Under $5k",
  "$5k-$15k",
  "$15k-$50k",
  "$50k+",
]

const timelineOptions = [
  "ASAP",
  "1-3 months",
  "3+ months",
  "Flexible",
]

interface ContactPageProps {
  lets_build?: string
  success_message?: string
  error_message?: string
  initial_name?: string
  initial_email?: string
  initial_company?: string
  initial_project_type?: string
  initial_budget?: string
  initial_timeline?: string
  initial_message?: string
}

export default function ContactPage({
  lets_build,
  success_message,
  error_message,
  initial_name = "",
  initial_email = "",
  initial_company = "",
  initial_project_type = "",
  initial_budget = "",
  initial_timeline = "",
  initial_message = "",
}: ContactPageProps) {
  const {data, setData, post, processing} = useForm({
    name: initial_name || (import.meta.env.DEV ? "Gradey Cullins" : ""),
    email: initial_email || (import.meta.env.DEV ? "gradeycullins@gmail.com" : ""),
    company: initial_company,
    project_type: initial_project_type,
    budget: initial_budget,
    timeline: initial_timeline,
    message: initial_message || (lets_build ? `Let's build ${lets_build}` : ""),
  })

  function submit(e: FormEvent) {
    e.preventDefault()
    post("/contact", {
      onSuccess: () => {
        setData({
          name: "",
          email: "",
          company: "",
          project_type: "",
          budget: "",
          timeline: "",
          message: "",
        })
      },
    })
  }

  const fieldClass = "w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder-gray-400 transition-colors focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-200"
  const labelClass = "block text-sm font-medium text-gray-800"

  return (
    <>
      <Head title="Contact - Gradey Cullins" />

      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-500">
              Service Request
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Tell me what you want to build.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
              Share the shape of the project, the business goal, and any constraints. I will reply with a practical next step.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <form onSubmit={submit} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="mb-8 flex flex-col gap-3 border-b border-gray-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-950">Project details</h2>
                  <p className="mt-1 text-sm text-gray-500">Fields marked with * are required.</p>
                </div>
                <div className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-600">
                  Usually replies within 24 hours
                </div>
              </div>

              {success_message && (
                <div className="mb-6 rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-sm text-gray-800">
                  {success_message}
                </div>
              )}

              {error_message && (
                <div className="mb-6 rounded-md border border-gray-400 bg-gray-100 px-4 py-3 text-sm text-gray-900">
                  {error_message}
                </div>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name-input" className={labelClass}>Name *</label>
                  <input
                    name="name"
                    id="name-input"
                    type="text"
                    value={data.name}
                    placeholder="Your name"
                    onChange={e => setData("name", e.target.value)}
                    required
                    className={fieldClass}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email-input" className={labelClass}>Email *</label>
                  <input
                    name="email"
                    id="email-input"
                    type="email"
                    value={data.email}
                    placeholder="you@company.com"
                    onChange={e => setData("email", e.target.value)}
                    required
                    className={fieldClass}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company-input" className={labelClass}>Company</label>
                  <input
                    name="company"
                    id="company-input"
                    type="text"
                    value={data.company}
                    placeholder="Company or product name"
                    onChange={e => setData("company", e.target.value)}
                    className={fieldClass}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="project-type-input" className={labelClass}>Project type *</label>
                  <select
                    name="project_type"
                    id="project-type-input"
                    value={data.project_type}
                    onChange={e => setData("project_type", e.target.value)}
                    required
                    className={fieldClass}
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget-input" className={labelClass}>Budget</label>
                  <select
                    name="budget"
                    id="budget-input"
                    value={data.budget}
                    onChange={e => setData("budget", e.target.value)}
                    className={fieldClass}
                  >
                    <option value="">Select a budget range</option>
                    {budgetOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="timeline-input" className={labelClass}>Timeline</label>
                  <select
                    name="timeline"
                    id="timeline-input"
                    value={data.timeline}
                    onChange={e => setData("timeline", e.target.value)}
                    className={fieldClass}
                  >
                    <option value="">Select a timeline</option>
                    {timelineOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <label htmlFor="message-input" className={labelClass}>What should we build? *</label>
                <textarea
                  name="message"
                  id="message-input"
                  rows={8}
                  value={data.message}
                  placeholder="What is the product, workflow, or business problem? What already exists? What would a good outcome look like?"
                  onChange={e => setData("message", e.target.value)}
                  required
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-sm leading-relaxed text-gray-500">
                  You can keep this brief. If it seems like a fit, I will follow up with focused questions.
                </p>
                <button
                  type="submit"
                  disabled={processing}
                  className="inline-flex cursor-pointer items-center justify-center rounded-md bg-gray-950 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {processing ? "Sending..." : "Send request"}
                </button>
              </div>
            </form>

            <aside className="space-y-6">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-950">What happens next</h2>
                <ol className="mt-5 space-y-4 text-sm leading-relaxed text-gray-600">
                  <li className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-950 text-xs font-semibold text-white">1</span>
                    I review the project shape, constraints, and whether I can help.
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-950 text-xs font-semibold text-white">2</span>
                    If there is a fit, I reply with practical next steps or a short discovery call.
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-950 text-xs font-semibold text-white">3</span>
                    We turn the idea into a clear scope, delivery plan, and technical approach.
                  </li>
                </ol>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-950 p-6 text-white shadow-sm">
                <p className="text-sm uppercase tracking-widest text-gray-400">Best fit</p>
                <h2 className="mt-3 text-xl font-semibold">Production-minded AI and app work</h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-300">
                  LLM integrations, RAG, workflow automation, Rails and React product work, and senior engineering support for teams that need to ship.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 text-sm text-gray-600 shadow-sm">
                Prefer email? Reach me directly at{" "}
                <a href="mailto:gradeycullins@gmail.com" className="font-medium text-gray-950 underline underline-offset-2">
                  gradeycullins@gmail.com
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
