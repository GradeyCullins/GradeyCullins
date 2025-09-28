import {Head, Link} from "@inertiajs/react";
import {BlogPost} from "../types.ts";
import gradeGrayImage from "../assets/images/gradey-gray.webp";

type LandingPageProps = {
  posts: BlogPost[]
}

export default function LandingPage({}: LandingPageProps) {
  return (
    <>
      <Head title="Gradey Cullins - Software Architect"/>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
            
            <div className="flex flex-col justify-center py-16 lg:py-20">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight">
                    Building software
                  </h1>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight tracking-tight">
                    that matters
                  </h2>
                </div>
                
                <div className="max-w-lg space-y-6">
                  <div className="border-l-2 border-gray-300 pl-6">
                    <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                      I help businesses build exceptional web applications with clean code and thoughtful architecture.
                    </p>
                  </div>
                  
                  <div className="space-y-3 text-base text-gray-600">
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                      Lightning-fast development cycles
                    </p>
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                      Pixel-perfect execution
                    </p>
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                      Scalable architecture
                    </p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <Link 
                    href="/contact"
                    className="inline-flex items-center bg-gray-900 text-white px-8 py-3 text-base font-medium rounded-sm hover:bg-gray-800 transition-colors duration-200"
                  >
                    Start a project
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                
                <div className="pt-4">
                  <p className="text-sm text-gray-500">
                    Web Development • Product Design • Technical Architecture • AI Integration
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center lg:justify-end py-16 lg:py-20">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={gradeGrayImage}
                    alt="Gradey Cullins - Software Architect"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-white px-4 py-2 rounded-sm shadow-md border border-gray-200">
                  <p className="text-sm font-medium text-gray-700">
                    Available for projects
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        <div className="border-t border-gray-200 bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Speed</h3>
                <p className="text-gray-600 leading-relaxed">
                  From concept to deployment in record time. Focused execution without the bureaucracy.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Clean, maintainable code that scales. Built with best practices from day one.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  Software that drives real business growth and creates delightful user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
