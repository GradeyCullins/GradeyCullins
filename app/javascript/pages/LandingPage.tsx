import {Head} from "@inertiajs/react";
import {BlogPost} from "../types.ts";
import WideBlockSection from "../components/WideBlockSection.tsx";
import SkillsAndIntroBlock from "../components/blocks/SkillsAndIntroBlock.tsx";
import MoreAboutMeBlock from "../components/blocks/MoreAboutMeBlock.tsx";
import HeroBlock from "../components/blocks/HeroBlock.tsx";

type LandingPageProps = {
  posts: BlogPost[]
}
export default function LandingPage({posts}: LandingPageProps) {
  return (
    <>
      <Head title="Gradey Cullins"/>
      <HeroBlock/>
      <SkillsAndIntroBlock />
      <MoreAboutMeBlock />
      <BlogBlock posts={posts}/>
    </>
  )
}

function BlogBlock({posts}: { posts: BlogPost[] }) {
  return (
    <WideBlockSection className="h-[50vh]">
      <p>Blogged {posts.length} times recently.</p>
    </WideBlockSection>
  )
}
