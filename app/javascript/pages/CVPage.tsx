import {Head} from '@inertiajs/react'
import {Download} from "lucide-react"
import {CvIntro, CvRole, CvEducation} from "../types.ts";
import CVBlock from "../components/CVBlock.tsx";
import ChatWidget from "../components/ChatWidget.tsx";
import "../assets/styles/AboutStyles.css"

type CVPageProps = {
  intro: CvIntro | null
  roles: CvRole[]
  educations: CvEducation[]
}

export default function CVPage({intro, roles, educations}: CVPageProps) {
  return (
    <>
      <Head title="Gradey Cullins - CV"/>
      <div className="min-h-screen bg-gray-100 px-3 pb-24 pt-28 sm:px-6 sm:pb-16 sm:pt-36 lg:px-8">
        <div className="mx-auto w-full max-w-[920px]">
          <div className="mb-3 flex justify-end">
            <a
              href="/cv/download"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border-2 border-gray-950 bg-gray-950 px-4 py-2 text-sm font-black text-white shadow-none transition-all duration-200 sm:w-auto hover:bg-gray-800"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download PDF
            </a>
          </div>
          <CVBlock intro={intro} roles={roles} educations={educations} />
        </div>
      </div>

      <ChatWidget
        agent="resume"
        placeholder="Ask about my experience, skills, roles..."
        greeting="Hi! I can answer questions about Gradey's career, technical skills, and professional experience. What would you like to know?"
        starterPrompts={[
          "Summarize Gradey's strongest engineering experience.",
          "What Rails and React work has Gradey done?",
          "Is Gradey a good fit for AI product development?",
        ]}
        floating
        opaque
      />
    </>
  )
}
