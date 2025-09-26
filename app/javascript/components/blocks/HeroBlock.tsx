import WideBlockSection from "../WideBlockSection.tsx";
import ContentWrapper from "../ContentWrapper.tsx";

export default function HeroBlock() {
  // const [lastName, setLastName] = useState<'Cullins' | 'Boland'>('Cullins')
  //
  // function handleClickLastName() {
  //   setLastName(curr => curr === 'Cullins' ? 'Boland' : 'Cullins')
  // }
  
  return (
    <WideBlockSection>
      <ContentWrapper>
        <p className="uppercase text-9xl font-bold">Rapid</p>
        {/*<p onClick={handleClickLastName} className="uppercase italic text-9xl">{lastName}</p>*/}
        <p className="uppercase text-9xl font-[200]">Software</p>
        <p className="uppercase italic text-9xl font-bold">Fast.</p>
      </ContentWrapper>
    </WideBlockSection>
  )
}