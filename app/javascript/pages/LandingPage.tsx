import {Head} from "@inertiajs/react";
import {BlogPost} from "../types.ts";
import HeroBlock from "../components/blocks/HeroBlock.tsx";
import ServicesBlock from "../components/blocks/ServicesBlock.tsx";
import SocialProofBlock from "../components/blocks/SocialProofBlock.tsx";
import ProcessBlock from "../components/blocks/ProcessBlock.tsx";
import FaqBlock from "../components/blocks/FaqBlock.tsx";
import CtaBlock from "../components/blocks/CtaBlock.tsx";

type LandingPageProps = {
  posts: BlogPost[]
}

export default function LandingPage({}: LandingPageProps) {
  return (
    <>
      <Head title="Gradey Cullins - AI Engineer & Consultant"/>
      <HeroBlock />
      <ServicesBlock />
      <SocialProofBlock />
      <ProcessBlock />
      <FaqBlock />
      <CtaBlock />
    </>
  )
}
