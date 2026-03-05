import {Head} from "@inertiajs/react";
import {BlogPost} from "../types.ts";
import HeroBlock from "../components/blocks/HeroBlock.tsx";
import SparklesBackground from "../components/SparklesBackground.tsx";

type LandingPageProps = {
  posts: BlogPost[]
}

export default function LandingPage({}: LandingPageProps) {
  return (
    <>
      <Head title="Gradey Cullins - AI Engineer & Consultant"/>
      <SparklesBackground />
      <HeroBlock />
      {/*<ServicesBlock />*/}
      {/*<SocialProofBlock />*/}
      {/*<ProcessBlock />*/}
      {/*<FaqBlock />*/}
      {/*<CtaBlock />*/}
    </>
  )
}
