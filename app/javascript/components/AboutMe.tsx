import ContentWrapper from "./ContentWrapper.tsx";
import WideBlockSection from "./WideBlockSection.tsx";


export default function AboutMe() {
  return (
    <WideBlockSection className="bg-amber-50 border-t">
      <ContentWrapper>
        <h1 className="text-3xl font-bold">Hello, I'm Gradey</h1>
        <div>
          I’m a computer programmer from Driggs, Idaho. I have a B.S. in Computer Science from The University of Utah
          where I graduated in 2018. I have seven years of experience as a software engineer. I’m currently working on a
          healthcare e-commerce platform powered by Rails and React at TruHearing. My last role was at ICS Advanced
          Technology where I built services in Go and React. Before that I was a Founding Software Engineer at Radom, a
          Web3 startup, where I built dApps in Vue, React, and Solidity. My career has brought me around the world of
          technology. From containerization/cloud-native programming in Golang, to web applications in Vue, React, and
          Angular, to smart contract languages like Solidity. Who knows what the future may bring? 👀
        </div>
      </ContentWrapper>
    </WideBlockSection>
  )
}

AboutMe.layout = (page: any) => <ContentWrapper children={page}/>