import {Head} from '@inertiajs/react'
import {BlogPost} from "../types.ts";
import HookIntro from "../components/HookIntro.tsx";
import "../assets/styles/AboutStyles.css"

type AboutProps = {
  posts: BlogPost[]
}

export default function AboutPage({}: AboutProps) {
  return (
    <>
      <Head title="Gradey Cullins - Personal Website"/>
      <div>
        <HookIntro />
        {/*<BlogPreview posts={posts} />*/}
        {/*<HireMe/>*/}
      </div>
    </>
  )
}