import WideBlockSection from "./WideBlockSection.tsx";
import ContentWrapper from "./ContentWrapper.tsx";

export default function HookIntro() {
  return (
    <WideBlockSection>
      <ContentWrapper>
        <h1 className="font-bold text-4xl mb-1">About Me</h1>
        <div className="mb-4 pb-4 border-b flex flex-wrap gap-1 text-sm text-slate-500">
          <span>senior developer •</span>
          <span>UI/UX + web design •</span>
          <span>performant backend services •</span>
          <span>frontend savant</span>
        </div>
        <div className="max-w-[1200px]">
          <h2>Hey!</h2>
          <div className="about-section">
            <p></p>
            <p>
              I'm a software developer who picked up programming at the University of Utah. In my early life I was very
              into team sports like soccer and later became a competitive skier. I've loved video games and computers
              since my dad first introduced me to a game called <a className="link" target="_blank"
                                                                   href="https://store.steampowered.com/app/2398450/Classic_Marathon/">Marathon</a>.
            </p>
            <p>
              Below you'll find a web CV of my experience as a computer programmer. I would be thrilled to receive any
              messages or questions about my career or freelance services.
            </p>
          </div>

          <hr className="my-2"/>

          <h2>Roles</h2>
          <div className="about-section">
            <div>
              <h3>Software Developer II @ TruHearing</h3>
              <p>
                I'm currently working at <a className="link" href="https://truhearing.com">TruHearing</a> where I
                use React and Ruby on Rails to build an ecommerce platform for hearing aids.
              </p>
              <p>
                My responsibilities include writing features and fixing issues for the order and insurance claim processes in our platform, called Echo.
                I have gained an increasingly deep knowledge in working with insurance, e-commerce, and healthcare.
              </p>
              <ul>
                <li>add query optimizations resulting in 50-125% latency reduction</li>
                <li>led multiple AI initiatives department-wide</li>
                <li>built new technology integrations including adding pusher.js for websockets-based communication between server and client</li>
              </ul>
            </div>
            <p className="when">2024 – Present</p>
          </div>
          <div className="about-section">
            <div>
              <h3>Senior Software Engineer @ ICS Advanced Technologies</h3>
              <p>I built microservices with Golang and MySQL and a responsive web application in React.</p>
              <ul>
                <li>built an authentication system using modern cryptographic standards</li>
                <li>helped decompose a Ruby monolith into Golang modules and microservices</li>
              </ul>
            </div>
            <p className="when">2023 – 2024</p>
          </div>
          <div className="about-section">
            <div>
              <h3>Founding Software Engineer @ Radom</h3>
              <p>Acted as the lead engineer and architected Web3 apps with Vue, React, Rust and the Solidity smart
                contract language.</p>
              <ul>
                <li>developed a permission + role system in Solidity</li>
                <li>implemented Solidity diamond pattern for complex Solidity payments contract</li>
              </ul>
            </div>
            <p className="when">2021 – 2023</p>
          </div>
          <div className="about-section">
            <div>
              <h3>Software Engineer @ Hoodoo</h3>
              <p>
                Worked on a small team building a custom cloud suite that manages Adobe AEM instances using Golang, Vue and Kubernetes.
              </p>
              <ul>
                <li>built custom Github, Gitlab, and Bitbucket pipelines for CI/CI AEM deployment</li>
                <li>built async CLI task running tool in Node.jS for local AEM development</li>
                <li>built automated Adobe resource downloader tool</li>
              </ul>
            </div>
            <p className="when">2018 – 2021</p>
          </div>
          <div className="about-section">
            <div>
              <h3>Software Engineer @ Navitaire</h3>
              <p>
                Worked on a large team building features for an E-Commerce travel booking software in Angular, C#, and .NET.
              </p>
              <ul>
                <li>improved Angular features by 50-75% by refactoring syncronous network requests into async requests</li>
                <li>developed API testing suite using the Postman CLI and Powershell scripts</li>
              </ul>
            </div>
            <p className="when">2017-2018</p>
          </div>
          
          <hr className="my-2"/>
          <h2>Education</h2>
          <div className="about-section">
            <div>
              <h3>Computer Science @ University of Utah</h3>
            </div>
            <p className="when">2013 - 2018</p>
          </div>
        </div>
      </ContentWrapper>
    </WideBlockSection>
  
  )
}