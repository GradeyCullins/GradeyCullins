import {Link} from "@inertiajs/react"
import GradientButton from "../GradientButton.tsx"

export default function CtaBlock() {
  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-4">
          Ready to ship AI that actually works?
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
          Book a free 30-minute discovery call. No pitch decks, no pressure&mdash;just a
          candid conversation about where AI can drive real value for your business.
        </p>
        <Link href="/contact">
          <GradientButton className="text-lg px-10 py-4">
            Book a free consultation
            <svg className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </GradientButton>
        </Link>
        <p className="text-sm text-gray-500 mt-6">
          Typically responds within 24 hours
        </p>
      </div>
    </div>
  )
}
