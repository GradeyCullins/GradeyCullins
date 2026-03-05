import {Head} from '@inertiajs/react'
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
      <div>
        <CVBlock intro={intro} roles={roles} educations={educations} />
      </div>

      <ChatWidget
        agent="resume"
        placeholder="Ask about my experience, skills, roles..."
        greeting="Hi! I can answer questions about Gradey's career, technical skills, and professional experience. What would you like to know?"
        floating
      />
    </>
  )
}
