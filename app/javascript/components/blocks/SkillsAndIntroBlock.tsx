import ContentWrapper from "../ContentWrapper.tsx"
import WideBlockSection from "../WideBlockSection.tsx"
import {Bot, Brain, Database, PanelTop, Server, Smartphone, Wrench} from "lucide-react"
import {Link} from "@inertiajs/react"
import {ReactNode, useState} from "react"

const softwareTypes: SoftwareTypeProps[] = [
  {label: "Frontend", icon: <PanelTop/>},
  {label: "Backend", icon: <Server/>},
  {label: "Databases", icon: <Database/>},
  {label: "Apps", icon: <Smartphone/>},
  {label: "Scrapers", icon: <Bot/>},
  {label: "AI", icon: <Brain />}
]

export default function SkillsAndIntroBlock() {
  const [buildA, setBuildA] = useState('')
  
  function handleClickType(label: string) {
    setBuildA(label)
  }
  
  return (
    <WideBlockSection>
      <ContentWrapper>
        <h2>Bring Your Business Online</h2>
        <div className="flex gap-4">
          <div className="w-[600px]">
            <p>
              Building software with speed and precision. Industry proven across business verticals and tech stacks.
              Offering free consultation for custom software development.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {softwareTypes.map(st => (
              <div onClick={() => handleClickType(st.label)}>
                <SoftwareType label={st.label} icon={st.icon}/>
              </div>
            ))}
          </div>
        </div>
        <Link className="group" as="button" href="/contact">
          Let's Build {buildA ? buildA : ''}
          <Wrench className="group-hover:rotate-45 transition-transform" />
        </Link>
      </ContentWrapper>
    </WideBlockSection>
  )
}

interface SoftwareTypeProps {
  label: string
  icon: ReactNode
}

function SoftwareType({label, icon}: SoftwareTypeProps) {
  return (
    <div className="px-2 py-4 border rounded flex gap-2 justify-center align-middle shadow-md cursor-pointer hover:bg-gray-100 hover:shadow-none transition-all">
      <p className="!mb-0">{label}</p>
      {icon}
    </div>
  )
}