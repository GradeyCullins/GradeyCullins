import {useForm} from "@inertiajs/react"
import {FormEvent} from "react"
import ContentWrapper from "../components/ContentWrapper.tsx"
import {MoveRight} from "lucide-react"
import WideBlockSection from "../components/WideBlockSection.tsx"

interface ContactPageProps {
  lets_build?: string
}

export default function ContactPage({ lets_build }: ContactPageProps) {
  const {data, setData, post, processing} = useForm({
    name: '',
    email: '',
    message: lets_build ? `Lets build ${lets_build}` : '',
  })
  
  function submit(e: FormEvent) {
    e.preventDefault()
    post('/contact', {
      onSuccess: () => {
        setData({
          name: '',
          email: '',
          message: ''
        })
      }
    });
  }
  
  return (
    <WideBlockSection className="border-b-0">
      <ContentWrapper>
        <h2>Send Me a Message</h2>
        <div className="mb-4">
          <p>Thank you for taking the time to reach out. I will always respond quickly to inquiries.</p>
          <p className="text-blue-600">gradeycullins AT gmail.com</p>
        </div>
        <form onSubmit={submit}>
          <div className="w-fit flex flex-col gap-3">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="w-1/2">
                <label htmlFor="name-input">Name *</label>
                <div>
                  <input name="name" id="name-input" type="text" value={data.name} placeholder="name"
                         onChange={(e) => setData('name', e.target.value)} required className="w-full"/>
                </div>
              </div>
              
              <div className="w-1/2">
                <label htmlFor="email-input">Email *</label>
                <div>
                  <input name="email" id="email-input" type="email" value={data.email} placeholder="email"
                         onChange={(e) => setData('email', e.target.value)} required className="w-full"/>
                </div>
              </div>
            
            
            </div>
            <div>
              <label htmlFor="message-input">Message *</label>
              <div>
                <textarea name="message" id="message-input" cols={70} rows={10} value={data.message}
                          onChange={(e) => setData('message', e.target.value)} required/>
              </div>
            </div>
            
            <button type="submit" disabled={processing} className="w-fit">
              Send a Message
              <MoveRight/>
            </button>
          </div>
        </form>
      </ContentWrapper>
    </WideBlockSection>
  )
}

// ContactPage.layout = (page: ReactNode) => <PageLayout children={page} />