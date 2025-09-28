import {Link} from "@inertiajs/react"
import {ReactNode} from "react"
import XIcon from '/assets/icons/x.svg'
import GithubIcon from '/assets/icons/github.svg'
import GmailIcon from '/assets/icons/gmail.svg'

type HeaderLinkProps = {
  children: ReactNode
  href: string
}

function HeaderLink({children, href}: HeaderLinkProps) {
  return (
    <Link 
      href={href} 
      className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
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
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
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
            
            <nav className="flex items-center gap-1">
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
          </div>
        </div>
      </div>
    </header>
  )
}