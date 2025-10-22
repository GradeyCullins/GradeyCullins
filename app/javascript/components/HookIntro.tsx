import WideBlockSection from "./WideBlockSection.tsx";
import ContentWrapper from "./ContentWrapper.tsx";

export default function HookIntro() {
  return (
    <WideBlockSection>
      <ContentWrapper>
        <h1 className="font-bold text-2xl mb-1">Who is Gradey Cullins?</h1>
        <div className="mb-4 pb-4 border-b flex flex-wrap gap-1 text-sm text-slate-500">
          <span>• senior developer</span>
          <span>• UI/UX + web design</span>
          <span>• performant backend services</span>
          <span>• frontend savant</span>
        </div>
        <div className="max-w-[1200px] flex flex-col gap-4">
          <div>
            <h2 className="about-header">Hey!</h2>
            <p>
              I'm a software developer by trade. Thanks for stopping by to my website.
            </p>
          </div>
          <div>
            <h2 className="about-header">Latest Roles (Web CV)</h2>
            <p>
              I'm currently working at <a className="link" href="https://truhearing.com">TruHearing</a> where I
              use React and Ruby on Rails to build an ecommerce platform for hearing aids.
            </p>
            <p>Another paragraph Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto cupiditate
              deleniti, dignissimos dolore ipsa mollitia nemo possimus, quasi, quibusdam sunt vitae voluptas. Cumque est
              laborum magnam modi odit vitae.</p>
          </div>
          
          <p>
            I've worked at startups, big companies, and built websites/apps for clients as a solo dev. If you're looking
            for a no-BS
            developer to bootstrap an MVP or build a beautiful static website for your business you've come to the right
            place.
          </p>
        </div>
      </ContentWrapper>
    </WideBlockSection>
  
  )
}