import {Link} from "@inertiajs/react"
import {ReactNode, useState} from "react"
import XIcon from '/assets/icons/x.svg'
import GithubIcon from '/assets/icons/github.svg'
import GmailIcon from '/assets/icons/gmail.svg'
import LinkedinIcon from '/assets/icons/linked-in.svg'

type HeaderLinkProps = {
  children: ReactNode
  href: string
  onClick?: () => void
}

function HeaderLink({children, href, onClick}: HeaderLinkProps) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="text-gray-700 px-3 py-2 text-sm font-medium rounded-lg"
    >
      {children}
    </Link>
  )
}

function MobileHeaderLink({children, href, onClick}: HeaderLinkProps) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="block text-gray-700 px-3 py-2 text-base font-medium rounded-lg"
    >
      {children}
    </Link>
  )
}

function SocialLink({href, icon, alt}: {href: string, icon: string, alt: string}) {
  return (
    <a 
      href={href}
      className="p-2 text-gray-500 rounded-lg shadow-none"
    >
      <img src={icon} width={18} height={18} alt={alt} className="opacity-70 hover:opacity-100 transition-opacity"/>
    </a>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="pointer-events-auto">
      <div className="glass-strong w-fit mx-auto rounded-2xl shadow-lg shadow-black/5">
        <div className="px-4 sm:px-6 py-3">
          <div className="flex items-center gap-8">
            
            <Link href="/" className="group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-sm overflow-hidden group-hover:opacity-80 transition-opacity">
                  <img 
                    src="/icon.svg" 
                    alt="GC Logo" 
                    className="w-full h-full object-cover"
                    width="40"
                    height="40"
                  />
                </div>
                <div className="block">
                  <div className="text-lg font-semibold text-gray-900 tracking-tight">
                    Gradey Cullins
                  </div>
                  <div className="text-sm text-gray-600">
                    Computer Programmer
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <div className="flex gap-1">
                <HeaderLink href="/">Home</HeaderLink>
                <HeaderLink href="/cv">CV</HeaderLink>
              </div>
              
              <div className="w-px h-4 bg-gray-300/50 mx-3"></div>
              
              <Link
                href="/contact"
                className="bg-gray-900/90 backdrop-blur-sm text-white px-4 py-2 text-sm font-medium rounded-full"
              >
                Contact
              </Link>
              
              <div className="w-px h-4 bg-gray-300/50 mx-3"></div>
              
              <div className="flex gap-1">
                <SocialLink
                  href="https://x.com/gradeyboland"
                  icon={XIcon}
                  alt="X (Twitter)"
                />
                <SocialLink
                  href="https://github.com/gradeycullins"
                  icon={GithubIcon}
                  alt="GitHub"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/gradey-cullins-738b2045/"
                  icon={LinkedinIcon}
                  alt="Email"
                />
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 rounded-lg"
            >
              <svg className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="mt-4 pb-4 border-t border-white/30">
              <div className="pt-4 space-y-1">
                <MobileHeaderLink href="/" onClick={closeMenu}>Home</MobileHeaderLink>
                <MobileHeaderLink href="/about" onClick={closeMenu}>About</MobileHeaderLink>
                
                <div className="pt-4">
                  <Link 
                    href="/contact"
                    onClick={closeMenu}
                    className="block bg-gray-900/90 backdrop-blur-sm text-white px-3 py-2 text-base font-medium rounded-full shadow-none w-fit"
                  >
                    Contact
                  </Link>
                </div>
                
                <div className="pt-4">
                  <div className="flex gap-2">
                    <SocialLink 
                      href="https://x.com/gradeyboland" 
                      icon={XIcon} 
                      alt="X (Twitter)"
                    />
                    <SocialLink 
                      href="https://github.com/gradeycullins" 
                      icon={GithubIcon} 
                      alt="GitHub"
                    />
                    <SocialLink 
                      href="mailto:gradeycullins@gmail.com" 
                      icon={GmailIcon} 
                      alt="Email"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </header>
  )
}
