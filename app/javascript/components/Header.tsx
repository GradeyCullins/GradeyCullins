import {Link, usePage} from "@inertiajs/react"
import {ReactNode, useState} from "react"
import XIcon from '/assets/icons/x.svg'
import GithubIcon from '/assets/icons/github.svg'
import GmailIcon from '/assets/icons/gmail.svg'
import LinkedinIcon from '/assets/icons/linked-in.svg'

type HeaderLinkProps = {
  children: ReactNode
  href: string
  active?: boolean
  onClick?: () => void
}

function HeaderLink({children, href, active = false, onClick}: HeaderLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`rounded-sm border-2 px-2 py-1 text-sm font-bold uppercase tracking-[0.18em] text-gray-950 transition-colors hover:border-gray-950 ${
        active ? 'border-gray-950 bg-gray-950 text-white' : 'border-transparent'
      }`}
    >
      {children}
    </Link>
  )
}

function MobileHeaderLink({children, href, active = false, onClick}: HeaderLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block rounded-sm border-b-4 border-gray-950 px-3 pb-2 text-right text-5xl font-black uppercase leading-none tracking-normal transition-colors hover:text-gray-600 sm:text-6xl ${
        active ? 'bg-gray-950 text-white' : 'text-gray-950'
      }`}
    >
      {children}
    </Link>
  )
}

function SocialLink({href, icon, alt}: {href: string, icon: string, alt: string}) {
  return (
    <a
      href={href}
      className="flex h-10 w-10 items-center justify-center rounded-sm border-2 border-transparent transition-colors hover:border-gray-950"
    >
      <img src={icon} width={18} height={18} alt={alt} className="opacity-80 transition-opacity hover:opacity-100"/>
    </a>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {url} = usePage()
  const currentPath = url.split('?')[0]
  const isActive = (href: string) => href === '/' ? currentPath === '/' : currentPath === href || currentPath.startsWith(`${href}/`)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50 pointer-events-none">
      <Link href="/" className="group pointer-events-auto absolute left-3 top-3 z-20 sm:left-5 sm:top-5">
        <div className="flex items-start gap-3">
          <div className="h-11 w-11 shrink-0 overflow-hidden rounded-sm bg-white transition-transform group-hover:-rotate-3">
            <img
              src="/icon.svg"
              alt="GC Logo"
              className="h-full w-full object-cover"
              width="44"
              height="44"
            />
          </div>
          <div className="hidden pt-0.5 leading-none sm:block">
            <div className="text-xl font-black uppercase tracking-normal text-gray-950">
              Gradey
            </div>
            <div className="text-xl font-black uppercase tracking-normal text-gray-950">
              Cullins
            </div>
            <div className="mt-1 w-fit border-t-2 border-gray-950 pt-1 text-[10px] font-black uppercase tracking-[0.2em] text-gray-700">
              Programmer
            </div>
          </div>
        </div>
      </Link>

      <nav className="pointer-events-auto absolute right-3 top-3 z-20 hidden items-center gap-4 sm:right-5 sm:top-5 md:flex">
        <HeaderLink href="/" active={isActive('/')}>Home</HeaderLink>
        <HeaderLink href="/cv" active={isActive('/cv')}>CV</HeaderLink>
        <Link
          href="/contact"
          className={`rounded-sm border-2 border-gray-950 px-3 py-2 text-sm font-bold uppercase tracking-[0.18em] transition-colors hover:bg-gray-950 hover:text-white ${
            isActive('/contact') ? 'bg-gray-950 text-white' : 'text-gray-950'
          }`}
        >
          Work With Me
        </Link>
        <div className="flex items-center gap-1">
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
            alt="LinkedIn"
          />
        </div>
      </nav>

      <button
        onClick={toggleMenu}
        className="pointer-events-auto absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-sm border-2 border-gray-950 bg-gray-50 text-gray-950 md:hidden"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <svg className={`h-6 w-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2.5} d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      <div className={`pointer-events-auto absolute inset-x-0 top-0 z-10 min-h-screen bg-gray-50 px-4 pb-6 pt-24 transition-all duration-200 md:hidden ${
        isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}>
        <nav className="ml-auto flex max-w-sm flex-col items-stretch gap-5">
          <MobileHeaderLink href="/" active={isActive('/')} onClick={closeMenu}>Home</MobileHeaderLink>
          <MobileHeaderLink href="/cv" active={isActive('/cv')} onClick={closeMenu}>CV</MobileHeaderLink>
          <MobileHeaderLink href="/contact" active={isActive('/contact')} onClick={closeMenu}>Contact</MobileHeaderLink>
        </nav>

        <div className="absolute bottom-4 right-4 flex gap-2">
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
    </header>
  )
}
