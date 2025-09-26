import ContentWrapper from "../ContentWrapper.tsx"
import WideBlockSection from "../WideBlockSection.tsx"
import {Button} from "../ui/button.tsx";

// const softwareTypes: SoftwareTypeProps[] = [
//   {label: "Websites", Icon: PanelTop},
//   {label: "Backend", Icon: Server},
//   {label: "Databases", Icon: Database},
//   {label: "Apps", Icon: Smartphone},
//   {label: "Scrapers", Icon: Bot},
//   {label: "AI", Icon: Brain}
// ]

export default function SkillsAndIntroBlock() {
  // const [buildA] = useState('')
  
  // function handleClickType(label: string) {
  //   setBuildA(label)
  // }
  
  return (
    <WideBlockSection>
      <ContentWrapper>
        <div className="py-4">
          <h2>No BS Software</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/2">
              <p>
                Building software with speed and precision. Industry proven across business verticals and
                tech stacks. Offering free consultation for custom software development.
              </p>
              <p>
                Experienced in multiple verticals like healthcare, finance, and web3/crypto. A programming
                polyglot ready to tackle every aspect of your project.
              </p>
            </div>
          </div>
          <Button variant="default">Let's Build</Button>
          {/*<Link className="group mt-4" as="button" href={buildA ? `/contact?lets_build=${buildA}` : '/contact'}>*/}
          {/*  Let's Build {buildA ? buildA : ''}*/}
          {/*  <Brush className="group-hover:rotate-45 transition-transform"/>*/}
          {/*</Link>*/}
        </div>
      </ContentWrapper>
    </WideBlockSection>
  )
}

// interface SoftwareTypeProps {
//   label: string
//   Icon: LucideIcon
// }
//
// function SoftwareType({label, Icon}: SoftwareTypeProps) {
//   return (
//     <div
//       className="px-2 py-4 border rounded-md flex flex-col gap-2 justify-center align-middle cursor-pointer hover:bg-gray-100/50 hover:shadow-none transition-all items-center shadow-md text-slate-600">
//       <p className="!mb-0">{label}</p>
//       <Icon className="text-gray-400"/>
//     </div>
//   )
// }