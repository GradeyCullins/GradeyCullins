import {Head, Link} from "@inertiajs/react";
import {BlogPost} from "../types.ts";
import gradeGrayImage from "../assets/images/gradey-gray.webp";

type LandingPageProps = {
  posts: BlogPost[]
}

export default function LandingPage({}: LandingPageProps) {
  return (
    <>
      <Head title="GRADEY CULLINS - RAPID SOFTWARE ARCHITECT"/>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            
            <div className="flex flex-col justify-center py-20">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h1 className="text-xl md:text-[5rem] font-bold uppercase leading-none tracking-tight">
                    mvp
                  </h1>
                  <h1 className="text-xl md:text-[5rem] font-bold uppercase leading-none tracking-tight">
                    software
                  </h1>
                  <h1 className="text-xl md:text-[5rem] font-bold uppercase leading-none tracking-tight">
                    Champion
                  </h1>
                </div>
                
                <div className="max-w-lg space-y-6">
                  <div className="border-l-8 border-black pl-6">
                    <p className="text-xl md:text-2xl font-bold uppercase">
                      I BUILD WEBSITES & APPS THAT MOVE YOUR BUSINESS FORWARD
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-lg">
                    <p className="font-semibold">
                      – LIGHTNING-FAST DEVELOPMENT
                    </p>
                    <p className="font-semibold">
                      – PIXEL-PERFECT EXECUTION
                    </p>
                    <p className="font-semibold">
                      – SCALABLE ARCHITECTURE
                    </p>
                  </div>
                </div>
                
                <div className="pt-8">
                  <Link 
                    href="/contact"
                    className="inline-block bg-black text-white px-12 py-6 text-2xl font-black uppercase tracking-wide hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 border-4 border-black hover:border-gray-800"
                  >
                    LET'S BUILD →
                  </Link>
                </div>
                
                <div className="pt-4">
                  <p className="text-sm uppercase font-bold text-gray-600 tracking-wider">
                    web • design • databases • ai
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center lg:justify-end py-20">
              <div className="relative">
                <div className="absolute inset-0 bg-black transform rotate-3"></div>
                <img 
                  src={gradeGrayImage}
                  alt="Gradey Cullins - Software Developer"
                  className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-cover border-8 border-black"
                />
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 px-6 py-3 border-4 border-black transform rotate-2">
                  <p className="font-black uppercase text-lg">
                    READY TO SHIP
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        <div className="border-t-8 border-black bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-4 border-black bg-white p-8">
                <h3 className="text-2xl font-black uppercase mb-4">SPEED</h3>
                <p className="text-lg font-semibold">
                  From concept to deployment in record time. No bureaucracy, just results.
                </p>
              </div>
              
              <div className="border-4 border-black bg-white p-8">
                <h3 className="text-2xl font-black uppercase mb-4">QUALITY</h3>
                <p className="text-lg font-semibold">
                  Clean, maintainable code that scales. Built right the first time.
                </p>
              </div>
              
              <div className="border-4 border-black bg-white p-8">
                <h3 className="text-2xl font-black uppercase mb-4">IMPACT</h3>
                <p className="text-lg font-semibold">
                  Software that drives business growth and delights users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
