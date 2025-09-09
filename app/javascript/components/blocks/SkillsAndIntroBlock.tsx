import ContentWrapper from "../ContentWrapper.tsx"
import WideBlockSection from "../WideBlockSection.tsx"
import {Bot, Brain, Brush, Database, LucideIcon, PanelTop, Server, Smartphone} from "lucide-react"
import {Link} from "@inertiajs/react"
import {useState} from "react"

const softwareTypes: SoftwareTypeProps[] = [
  {label: "Frontend", Icon: PanelTop},
  {label: "Backend", Icon: Server},
  {label: "Databases", Icon: Database},
  {label: "Apps", Icon: Smartphone},
  {label: "Scrapers", Icon: Bot},
  {label: "AI", Icon: Brain}
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
            <p>
              Building software with speed and precision. Industry proven across business verticals and tech stacks.
              Offering free consultation for custom software development.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {softwareTypes.map(st => (
              <div onClick={() => handleClickType(st.label)}>
                <SoftwareType label={st.label} Icon={st.Icon}/>
              </div>
            ))}
          </div>
        </div>
        <Link className="group mt-4" as="button" href={buildA ? `/contact?lets_build=${buildA}` : '/contact' }>
          Let's Build {buildA ? buildA : ''}
          <Brush className="group-hover:rotate-45 transition-transform" />
        </Link>
      </ContentWrapper>
    </WideBlockSection>
  )
}

interface SoftwareTypeProps {
  label: string
  Icon: LucideIcon
}

function SoftwareType({label, Icon}: SoftwareTypeProps) {
  return (
    <div className="px-2 py-4 border rounded flex gap-2 justify-center align-middle cursor-pointer hover:bg-gray-100/50 hover:shadow-none transition-all">
      <p className="!mb-0">{label}</p>
      <Icon className="text-gray-400" />
    </div>
  )
}