import {Link, Head} from "@inertiajs/react";
import gradeGrayImage from "../../assets/images/gradey-gray.webp";

export default function HeroBlock() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href={gradeGrayImage} fetchPriority="high" />
      </Head>
      <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          
          <div className="flex flex-col justify-center py-16 lg:py-20">
            <div className="space-y-6">
              <div className="space-y-2">
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
                  className="relative inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 text-base font-medium rounded-sm hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group"
                >
                  <span className="relative z-10">Start a project</span>
                  <svg className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-sm opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                </Link>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">
                  Web Development • Product Design • Technical Architecture • AI Integration
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center lg:justify-end py-8 lg:py-20">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={gradeGrayImage}
                  alt="Gradey Cullins - Software Architect"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  width="384"
                  height="384"
                  sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 384px"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-white px-3 py-2 rounded-sm shadow-md border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-sm font-medium text-gray-700">
                    available for projects
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}