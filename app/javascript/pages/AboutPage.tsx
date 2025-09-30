import {Head} from '@inertiajs/react'
import {BlogPost} from "../types.ts";
import BlogPreview from "../components/BlogPreview.tsx";
import HireMe from "../components/HireMe.tsx";
import HookIntro from "../components/HookIntro.tsx";

type AboutProps = {
  posts: BlogPost[]
}

export default function AboutPage({}: AboutProps) {
  console.log('heeere')
  return (
    <>
      <Head title="Gradey Cullins - Personal Website"/>
      <div>
        {/*<AboutMe/>*/}
        <HookIntro />
        {/*<BlogPreview posts={posts} />*/}
        {/*<HireMe/>*/}
      </div>
    </>
  )
}