import {Link} from "@inertiajs/react";
import ContentWrapper from "./ContentWrapper.tsx";

export default function Header() {
  return (
    <ContentWrapper>
      <div className="pt-4 mb-4">
        <div className="w-fit px-2 py-1 border-blue-600">
          <div className="flex items-center justify-center gap-4 text-sm">
            <Link href="/" class>Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/portfolio" className="rounded-tr-full rounded-br-full">Portfolio</Link>
          </div>
        </div>
      </div>
    </ContentWrapper>
  )
}