import {useForm, Head} from "@inertiajs/react"
import {FormEvent} from "react"

interface ContactPageProps {
  lets_build?: string
}

export default function ContactPage({ lets_build }: ContactPageProps) {
  const {data, setData, post, processing} = useForm({
    name: import.meta.env.DEV ? 'Gradey Cullins' : '',
    email: import.meta.env.DEV ? 'gradeycullins@gmail.com' : '',
    message: lets_build ? `Let's build ${lets_build}` : '',
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
      
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          <div className="mb-16">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight">
                Let's build something
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight tracking-tight">
                remarkable together
              </h2>
            </div>
            
            <div className="mt-12 max-w-2xl">
              <div className="border-l-2 border-gray-300 pl-6">
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                  Ready to bring your vision to life? I'd love to hear about your project and explore how we can work together.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 lg:p-12 border border-gray-200">
            <form onSubmit={submit} className="space-y-8">
              
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
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white placeholder-gray-500"
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
                    className="w-full px-4 py-3 text-base border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white placeholder-gray-500"
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
                  placeholder="Tell me about your project. What are you looking to build? What are your goals, timeline, and budget?"
                  onChange={(e) => setData('message', e.target.value)} 
                  required
                  className="w-full px-4 py-3 text-base border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white placeholder-gray-500 resize-none"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4">
                <div className="text-sm text-gray-500">
                  * Required fields
                </div>
                
                <button 
                  type="submit" 
                  disabled={processing}
                  className="bg-gray-900 text-white px-8 py-3 text-base font-medium rounded-sm hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {processing ? 'Sending...' : 'Send message'}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Quick Response</h4>
              <p className="text-gray-600">
                Usually respond within 24 hours
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Direct Contact</h4>
              <p className="text-gray-600">
                Straight to me, no middlemen
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Ready to Start</h4>
              <p className="text-gray-600">
                Available for immediate projects
              </p>
            </div>
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