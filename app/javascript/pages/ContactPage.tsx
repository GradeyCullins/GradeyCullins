import {useForm, Head} from "@inertiajs/react"
import {FormEvent} from "react"

interface ContactPageProps {
  lets_build?: string
}

export default function ContactPage({ lets_build }: ContactPageProps) {
  const {data, setData, post, processing} = useForm({
    name: import.meta.env.DEV ? 'Gradey Cullins' : '',
    email: import.meta.env.DEV ? 'gradeycullins@gmail.com' : '',
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
    <>
      <Head title="CONTACT - GRADEY CULLINS"/>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          
          <div className="mb-16">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-4xl font-black uppercase leading-none tracking-tight">
                LET'S BUILD
              </h1>
              <h2 className="text-6xl md:text-4xl font-black uppercase leading-none tracking-tight italic">
                SOMETHING
              </h2>
              <h3 className="text-6xl md:text-4xl font-black uppercase leading-none tracking-tight">
                GREAT
              </h3>
            </div>
            
            <div className="mt-12 max-w-2xl">
              <div className="border-l-8 border-black pl-6">
                <p className="text-xl md:text-2xl font-bold uppercase">
                  READY TO ACCELERATE YOUR PROJECT? DROP ME A MESSAGE AND LET'S DISCUSS YOUR VISION.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 border-4 border-black p-8 md:p-12">
            <form onSubmit={submit} className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="name-input" className="block text-lg font-black uppercase tracking-wide">
                    YOUR NAME *
                  </label>
                  <input 
                    name="name" 
                    id="name-input" 
                    type="text" 
                    value={data.name} 
                    placeholder="ENTER YOUR NAME"
                    onChange={(e) => setData('name', e.target.value)} 
                    required 
                    className="w-full px-6 py-4 text-lg font-bold border-4 border-black focus:outline-none focus:ring-0 focus:border-gray-600 bg-white uppercase placeholder-gray-400"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="email-input" className="block text-lg font-black uppercase tracking-wide">
                    YOUR EMAIL *
                  </label>
                  <input 
                    name="email" 
                    id="email-input" 
                    type="email" 
                    value={data.email} 
                    placeholder="YOUR@EMAIL.COM"
                    onChange={(e) => setData('email', e.target.value)} 
                    required 
                    className="w-full px-6 py-4 text-lg font-bold border-4 border-black focus:outline-none focus:ring-0 focus:border-gray-600 bg-white uppercase placeholder-gray-400"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label htmlFor="message-input" className="block text-lg font-black uppercase tracking-wide">
                  YOUR MESSAGE *
                </label>
                <textarea 
                  name="message" 
                  id="message-input" 
                  rows={8} 
                  value={data.message}
                  placeholder="TELL ME ABOUT YOUR PROJECT... WHAT DO YOU WANT TO BUILD? WHAT ARE YOUR GOALS? TIMELINE? BUDGET?"
                  onChange={(e) => setData('message', e.target.value)} 
                  required
                  className="w-full px-6 py-4 text-lg font-bold border-4 border-black focus:outline-none focus:ring-0 focus:border-gray-600 bg-white placeholder-gray-400 resize-none"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4">
                <div className="text-sm font-bold uppercase text-gray-600 tracking-wider">
                  * REQUIRED FIELDS
                </div>
                
                <button 
                  type="submit" 
                  disabled={processing}
                  className="bg-black text-white px-12 py-6 text-xl font-black uppercase tracking-wide hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 border-4 border-black hover:border-gray-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {processing ? 'SENDING...' : 'SEND MESSAGE →'}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center font-black text-2xl mx-auto">
                ⚡
              </div>
              <h4 className="text-xl font-black uppercase">FAST RESPONSE</h4>
              <p className="font-semibold text-gray-600">
                Usually respond within 24 hours
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center font-black text-2xl mx-auto">
                🎯
              </div>
              <h4 className="text-xl font-black uppercase">DIRECT CONTACT</h4>
              <p className="font-semibold text-gray-600">
                Straight to me, no middlemen
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center font-black text-2xl mx-auto">
                🚀
              </div>
              <h4 className="text-xl font-black uppercase">READY TO START</h4>
              <p className="font-semibold text-gray-600">
                Can begin immediately
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="border-t-4 border-black pt-8">
              <p className="text-lg font-bold text-gray-600 uppercase tracking-wide">
                OR EMAIL DIRECTLY: 
                <a href="mailto:gradeycullins@gmail.com" className="text-black hover:underline ml-2">
                  GRADEYCULLINS@GMAIL.COM
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