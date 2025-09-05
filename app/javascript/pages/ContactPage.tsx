import {useForm} from "@inertiajs/react"
import {FormEvent } from "react"

export default function ContactPage() {
  const {data, setData, post, processing } = useForm({
    name: '',
    email: '',
    message: '',
  })

  function submit (e: FormEvent) {
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
    <div>
      <h2>Send Me a Message</h2>
      <div className="mb-4">
        <p>Thank you for taking the time to reach out. I will always respond quickly to inquiries.</p>
        <p className="text-blue-600">gradeycullins AT gmail.com</p>
      </div>
      <form onSubmit={submit}>
        <div className="w-fit flex flex-col gap-3">
          <div>
            <label htmlFor="name-input">Name *</label>
            <div>
              <input name="name" id="name-input" type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} required className="w-full" />
            </div>
          </div>

          <div>
            <label htmlFor="email-input">Email *</label>
            <div>
              <input name="email" id="email-input" type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} required className="w-full" />
            </div>
          </div>

          <div>
            <label htmlFor="message-input">Message *</label>
            <div>
              <textarea name="message" id="message-input" cols={50} rows={10} value={data.message} onChange={(e) => setData('message', e.target.value)} required />
            </div>
          </div>

          <button type="submit" disabled={processing}>Send</button>
        </div>
      </form>
    </div>
  )
}

// ContactPage.layout = (page: ReactNode) => <PageLayout children={page} />