import {Link} from "@inertiajs/react"
import {ReactNode, useState} from "react"
import XIcon from '/assets/icons/x.svg'
import GithubIcon from '/assets/icons/github.svg'
import GmailIcon from '/assets/icons/gmail.svg'

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
      className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
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
      className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium transition-colors duration-200"
    >
      {children}
    </Link>
  )
}

function SocialLink({href, icon, alt}: {href: string, icon: string, alt: string}) {
  return (
    <a 
      href={href}
      className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
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
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="flex items-center justify-between">
            
            <Link href="/" className="group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-900 text-white rounded-sm flex items-center justify-center text-sm font-semibold group-hover:bg-gray-800 transition-colors">
                  GC
                </div>
                <div className="hidden sm:block">
                  <div className="text-lg font-semibold text-gray-900 tracking-tight">
                    Gradey Cullins
                  </div>
                  <div className="text-sm text-gray-600">
                    Software Architect
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <div className="flex gap-1">
                <HeaderLink href="/">Home</HeaderLink>
                <HeaderLink href="/blog">Blog</HeaderLink>
                <HeaderLink href="/about">About</HeaderLink>
              </div>
              
              <div className="w-px h-4 bg-gray-300 mx-3"></div>
              
              <Link 
                href="/contact"
                className="bg-gray-900 text-white px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-800 transition-colors duration-200"
              >
                Contact
              </Link>
              
              <div className="w-px h-4 bg-gray-300 mx-3"></div>
              
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
                  href="mailto:gradeycullins@gmail.com" 
                  icon={GmailIcon} 
                  alt="Email"
                />
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
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
            <div className="mt-4 pb-4 border-t border-gray-200">
              <div className="pt-4 space-y-1">
                <MobileHeaderLink href="/" onClick={closeMenu}>Home</MobileHeaderLink>
                <MobileHeaderLink href="/blog" onClick={closeMenu}>Blog</MobileHeaderLink>
                <MobileHeaderLink href="/about" onClick={closeMenu}>About</MobileHeaderLink>
                
                <div className="pt-4">
                  <Link 
                    href="/contact"
                    onClick={closeMenu}
                    className="block bg-gray-900 text-white px-3 py-2 text-base font-medium rounded-sm hover:bg-gray-800 transition-colors duration-200 w-fit"
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
    </header>
  )
}