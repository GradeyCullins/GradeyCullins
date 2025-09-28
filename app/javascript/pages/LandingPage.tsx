import {Head} from "@inertiajs/react";
import {BlogPost} from "../types.ts";
import HeroBlock from "../components/blocks/HeroBlock.tsx";

type LandingPageProps = {
  posts: BlogPost[]
}

export default function LandingPage({}: LandingPageProps) {
  return (
    <>
      <Head title="Gradey Cullins - Software Architect"/>
      
      <HeroBlock />
    </>
  )
}