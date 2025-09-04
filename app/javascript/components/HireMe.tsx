import {Link} from "@inertiajs/react";

export default function HireMe() {
  return (
    <div>
      <h2>Hire Me Maybe?</h2>
      <div>I’m currently seeking new clients for web design, software development, and software engineering. I have a
        sizable list of projects, websites, and clients that I will happily reference if you have any interest in
        discussing my software development services.
      </div>
      <div className="pt-4">
        <Link href="/contact" className="border rounded p-2">Contact Me</Link>
      </div>
    </div>

  )
}