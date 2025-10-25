import WideBlockSection from "../components/WideBlockSection.tsx";
import {MoveLeft} from "lucide-react";
import ContentWrapper from "../components/ContentWrapper.tsx";

export default function NotFound() {
  function handleGoBack() {
    window.history.back()
  }
  
  return (
    <WideBlockSection>
      <ContentWrapper>
        <h1 className="text-3xl font-bold mb-4">404 - Not Found</h1>
        <button className="link flex gap-2 cursor-pointer" onClick={handleGoBack}><MoveLeft/> Go Back</button>
      </ContentWrapper>
    </WideBlockSection>
  )
}