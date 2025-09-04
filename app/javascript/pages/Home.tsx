import {Head} from '@inertiajs/react'
import {BlogPost} from "../types.ts";
import BlogPreview from "../components/BlogPreview.tsx";
import HireMe from "../components/HireMe.tsx";
import AboutMe from "../components/AboutMe.tsx";

type HomeProps = {
  posts: BlogPost[]
}
export default function Home({posts}: HomeProps) {
  return (
    <>
      <Head title="Gradey Cullins - Personal Website"/>
      <div className="flex flex-col gap-6">
        <AboutMe/>
        <BlogPreview posts={posts} />
        <HireMe/>
      </div>
    </>
  )
}