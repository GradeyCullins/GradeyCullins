import {Head, useForm} from "@inertiajs/react"
import {FormEvent} from "react"
import GradientButton from "../components/GradientButton.tsx"

interface ContactPageProps {
  lets_build?: string
  success_message?: string
  error_message?: string
  initial_name?: string
  initial_email?: string
  initial_message?: string
}

export default function ContactPage({ lets_build, success_message, error_message, initial_name = '', initial_email = '', initial_message = '' }: ContactPageProps) {
  const {data, setData, post, processing} = useForm({
    name: initial_name || (import.meta.env.DEV ? 'Gradey Cullins' : ''),
    email: initial_email || (import.meta.env.DEV ? 'gradeycullins@gmail.com' : ''),
    message: initial_message || (lets_build ? `Let's build ${lets_build}` : ''),
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
    <>
      <Head title="Contact - Gradey Cullins"/>
      
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          <div className="mb-16">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-3">
                Drop a Line.
              </h1>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 lg:p-12 border border-gray-200">
            <h3 className="text-xl font-semibold mb-8">Contact Me</h3>
            
            <form onSubmit={submit} className="space-y-8">
              {success_message && (
                <div className="rounded-sm border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                  {success_message}
                </div>
              )}

              {error_message && (
                <div className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error_message}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name-input" className="block text-sm font-medium text-gray-700">
                    Name *
                  </label>
                  <input 
                    name="name" 
                    id="name-input" 
                    type="text" 
                    value={data.name} 
                    placeholder="Your name"
                    onChange={(e) => setData('name', e.target.value)} 
                    required 
                    className="gradient-focus w-full px-4 py-3 text-base border border-gray-300 rounded-sm bg-gray-50 placeholder-gray-500 transition-all duration-200"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email-input" className="block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input 
                    name="email" 
                    id="email-input" 
                    type="email" 
                    value={data.email} 
                    placeholder="your@email.com"
                    onChange={(e) => setData('email', e.target.value)} 
                    required 
                    className="gradient-focus w-full px-4 py-3 text-base border border-gray-300 rounded-sm bg-gray-50 placeholder-gray-500 transition-all duration-200"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message-input" className="block text-sm font-medium text-gray-700">
                  Message *
                </label>
                <textarea 
                  name="message" 
                  id="message-input" 
                  rows={8} 
                  value={data.message}
                  onChange={(e) => setData('message', e.target.value)}
                  required
                  className="gradient-focus w-full px-4 py-3 text-base border border-gray-300 rounded-sm bg-gray-50 placeholder-gray-500 resize-none transition-all duration-200"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4">
                <div className="text-sm text-gray-500">
                  * Required fields
                </div>
                
                <GradientButton 
                  type="submit" 
                  disabled={processing}
                >
                  {processing ? 'Sending...' : 'Send message'}
                </GradientButton>
              </div>
            </form>
          </div>

          <div className="mt-16 text-center">
            <div className="border-t border-gray-200 pt-8">
              <p className="text-base text-gray-600">
                Prefer email? Reach me directly at{' '}
                <a href="mailto:gradeycullins@gmail.com" className="text-gray-900 hover:underline font-medium">
                  gradeycullins@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// ContactPage.layout = (page: ReactNode) => <PageLayout children={page} />
