import {Link} from "@inertiajs/react"
import ContentWrapper from "./ContentWrapper.tsx"
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
    <Link href={href} className="text-blue-600 hover:bg-blue-100 transition-colors">{children}</Link>
  )
}

export default function Header() {
  return (
    <div className="border-b">
      <ContentWrapper>
        <div className="pt-4 mb-4">
          <div className="w-fit py-1 border-blue-600">
            <div className="flex items-center justify-center gap-4 text-sm">
              <HeaderLink href="/">Home</HeaderLink>
              <HeaderLink href="/blog">Blog</HeaderLink>
              <HeaderLink href="/contact">Contact</HeaderLink>
              <HeaderLink href="/about">About</HeaderLink>
              <a href="https://x.com/gradeyboland">
                <img src={XIcon} width={15} alt="x social media icon"/>
              </a>
              <a href="https://github.com/gradeycullins">
                <img src={GithubIcon} width={15} alt="github icon"/>
              </a>
              <a href="mailto:gradeycullins@gmail.com">
                <img src={GmailIcon} width={15} alt="gmail icon"/>
              </a>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}