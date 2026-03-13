import {Head, Link} from "@inertiajs/react";
import gradeyPixellated from "../../assets/images/gradey-pixellated-animation.webp";
import GradientButton from "../GradientButton.tsx";
import ChatWidget from "../ChatWidget.tsx";

export default function HeroBlock() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href={gradeyPixellated} fetchPriority="high"/>
      </Head>
      <div className="min-h-[calc(100vh-100px)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] text-center py-20">
            
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden glass-strong shadow-xl shadow-blue-500/10 mb-5">
              
              <img
                src={gradeyPixellated}
                alt="Gradey Cullins"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                width="128"
                height="128"
              />
            </div>
            
            <div>
              <h1 className="text-4xl font-bold">Now Specializing In AI Integrations.</h1>
            </div>

            <div className="w-full max-w-lg my-8">
              <ChatWidget
                agent="website"
                placeholder="Ask about my services, experience, or how I can help..."
                greeting="Hey! Try chatting with me..."
              />
            </div>

            <Link href="/contact">
              <GradientButton>
                Send Me a Message
                <svg className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </GradientButton>
            </Link>

          </div>
        </div>
      </div>
    </>
  )
}
