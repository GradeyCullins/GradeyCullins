import {Link, Head} from "@inertiajs/react";
import gradeGrayImage from "../../assets/images/gradey-gray.webp";
import GradientButton from "../GradientButton.tsx";

export default function HeroBlock() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href={gradeGrayImage} fetchPriority="high"/>
      </Head>
      <div className="min-h-[calc(100vh-80px)] bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">

            <div className="flex flex-col justify-center py-16 lg:py-20">
              <div className="space-y-6">
                <p className="text-sm font-medium tracking-widest uppercase text-blue-600">
                  AI Engineering & Strategic Consulting
                </p>
                <div className="space-y-2">
                  <h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight tracking-tight">
                    Turn AI into your
                  </h1>
                  <h2
                    className="text-4xl sm:text-5xl lg:text-6xl text-gray-600 italic leading-tight tracking-tight">
                    competitive advantage
                  </h2>
                </div>

                <div className="max-w-lg space-y-6">
                  <div className="border-l-2 border-gray-300 pl-6">
                    <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                      I help B2B software companies ship production-grade AI features&mdash;faster, with less risk, and without building a machine learning team from scratch.
                    </p>
                  </div>

                  <div className="space-y-3 text-base text-gray-600">
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 shrink-0"></span>
                      LLM-powered products that drive measurable revenue
                    </p>
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 shrink-0"></span>
                      End-to-end: strategy, architecture, deployment
                    </p>
                    <p className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 shrink-0"></span>
                      Senior-level execution, zero ramp-up time
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start gap-4 pt-6">
                  <Link href="/contact">
                    <GradientButton>
                      Book a free consultation
                      <svg className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                      </svg>
                    </GradientButton>
                  </Link>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    AI Product Development &middot; LLM Integration &middot; Technical Architecture &middot; AI Strategy
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end py-8 lg:py-20">
              <div className="relative">
                <div
                  className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden bg-white shadow-2xl">
                  <img
                    src={gradeGrayImage}
                    alt="Gradey Cullins - AI Engineer & Consultant"
                    className="w-full h-full object-cover rounded-lg"
                    loading="eager"
                    fetchPriority="high"
                    width="384"
                    height="384"
                    sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 384px"
                    decoding="async"
                  />
                </div>
                <div
                  className="absolute -bottom-3 -right-3 bg-white px-3 py-2 rounded-sm shadow-md border">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-sm font-medium text-gray-700">
                      accepting new clients
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
