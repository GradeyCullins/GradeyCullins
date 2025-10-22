import {Head} from '@inertiajs/react'
import {BlogPost} from "../types.ts";
import HookIntro from "../components/HookIntro.tsx";
import AboutMe from "../components/AboutMe.tsx";

type AboutProps = {
  posts: BlogPost[]
}

export default function AboutPage({}: AboutProps) {
  console.log('heeere')
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