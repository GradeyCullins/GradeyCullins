import {Link} from "@inertiajs/react";

export default function Header() {
  return (
    <div className="flex justify-center pt-4 mb-4">
      <div className="w-fit px-2 border-t border-b border-gray-200">
        <div className="flex items-center justify-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/portfolio">Portfolio</Link>
        </div>
      </div>
    </div>
  )
}