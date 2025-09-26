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
      className="font-black uppercase tracking-wide text-black hover:bg-black hover:text-white px-4 py-2 border-2 border-black transition-all duration-200 transform hover:scale-105"
    >
      {children}
    </Link>
  )
}

function SocialLink({href, icon, alt}: {href: string, icon: string, alt: string}) {
  return (
    <a 
      href={href}
      className="p-2 bg-white duration-200 transform hover:scale-105 group"
    >
      <img src={icon} width={20} height={20} alt={alt} className="group-hover:invert-50"/>
    </a>
  )
}

export default function Header() {
  return (
    <div className="border-b-8 border-black bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <Link href="/" className="group">
              <div className="flex items-center space-x-2">
                <div className="bg-black text-white px-4 py-2 font-black uppercase tracking-wider group-hover:bg-gray-800 transition-colors">
                  GC
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-black uppercase tracking-tight">
                    GRADEY CULLINS
                  </div>
                  <div className="text-sm font-bold uppercase text-gray-600 tracking-wider">
                    SOFTWARE ARCHITECT
                  </div>
                </div>
              </div>
            </Link>
            
            <nav className="flex items-center gap-2 md:gap-4">
              <div className="flex gap-2">
                <HeaderLink href="/">HOME</HeaderLink>
                <HeaderLink href="/blog">BLOG</HeaderLink>
                <HeaderLink href="/about">ABOUT</HeaderLink>
              </div>
              
              <div className="w-px h-8 bg-black mx-2"></div>
              
              <Link 
                href="/contact"
                className="bg-black text-white font-black uppercase px-6 py-3 hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 border-2 border-black"
              >
                CONTACT →
              </Link>
              
              <div className="w-px h-8 bg-black mx-2"></div>
              
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
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}