import {Head} from "@inertiajs/react";
import {BlogPost} from "../types.ts";
import SkillsAndIntroBlock from "../components/blocks/SkillsAndIntroBlock.tsx";
import HeroBlock from "../components/blocks/HeroBlock.tsx";
import ProjectsBlock from "../components/blocks/ProjectsBlock.tsx";
import FaqBlock from "../components/blocks/FaqBlock.tsx";
import Footer from "../components/Footer.tsx";

type LandingPageProps = {
  posts: BlogPost[]
}
export default function LandingPage({}: LandingPageProps) {
  return (
    <>
      <Head title="Gradey Cullins"/>
      <HeroBlock/>
      <SkillsAndIntroBlock />
      <ProjectsBlock />
      <FaqBlock />
      <Footer />
      {/*<MoreAboutMeBlock />*/}
      {/*<BlogBlock posts={posts}/>*/}
    </>
  )
}
