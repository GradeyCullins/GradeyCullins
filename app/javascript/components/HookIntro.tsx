import WideBlockSection from "./WideBlockSection.tsx";
import ContentWrapper from "./ContentWrapper.tsx";
import {MoveRight} from "lucide-react";

export default function HookIntro() {
  return (
    <WideBlockSection>
      <ContentWrapper>
        <h1>Gradey Cullins</h1>
        <div className="mb-4 pb-2 border-b flex gap-2 text-sm text-slate-500">
          <span>• senior developer</span>
          <span>• UI/UX + web design</span>
          <span>• performant backend services</span>
          <span>• frontend savant</span>
        </div>
        <div className="max-w-[800px]">
          <p>
            Hello. I'm a software developer with 7 years of experience building websites and web services across
            multiple
            front and backend stacks. I'm currently working at <a href="https://truhearing.com">TruHearing</a> where I
            use
            React and Ruby on Rails to build an ecommerce platform for hearing aids.
          </p>
          <p>
            I've worked at startups, big companies, and built websites/apps for clients as a solo dev. If you're looking
            for a no-BS
            developer to bootstrap an MVP or build a beautiful static website for your business you've come to the right
            place.
          </p>
          <p>
            Interested in working with me? Drop me a line.
          </p>
        </div>
        <button>
          Let's Get to Work
          <MoveRight />
        </button>
      </ContentWrapper>
    </WideBlockSection>

  )
}