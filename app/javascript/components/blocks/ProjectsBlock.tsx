import CuttingEdge from '/assets/images/cutting-edge.webp'
import WirtzFinishing from '/assets/images/wirtz-finishing.webp'
import Flourishing from '/assets/images/flourishing-with-flora.webp'
import PlaylistGPT from '/assets/images/playlist-gpt.webp'
import Stackshare from '/assets/images/stackshare.webp'
import ContentWrapper from "../ContentWrapper.tsx";
import WideBlockSection from "../WideBlockSection.tsx";

const projectPics = [
  { src: PlaylistGPT, alt: 'playlistgpt.app', title: 'PlaylistGPT', href: 'https://playlistgpt.app' },
  { src: CuttingEdge, alt: 'cutting-edge-tile', title: 'Cutting Edge Tile & Flooring', href: '' },
  { src: WirtzFinishing, alt: 'wirtz-finishing', title: 'Wirtz Finishing', href: 'https://wirtzfinishing.com' },
  { src: Flourishing, alt: 'flourishing-with-flora', title: 'Flourishing With Flora', href: 'https://flourishingwithflora.com' },
  { src: Stackshare, alt: 'stackshare', title: 'stackshare.app', href: 'https://stackshare.info' }
]

export default function ProjectsBlock() {
  return (
    <WideBlockSection>
      <ContentWrapper className="mb-8">
        <h2>Building Sites & Apps</h2>
        <p>
          Providing the full gamut of web and software development.
        </p>
      </ContentWrapper>
      <div className="flex gap-8 h-[300px]">
        {projectPics.map(pp => (
          <ProjectPic {...pp} />
        ))}
      </div>
    </WideBlockSection>
  )
}

type ProjectPicProps = {
  src: string
  alt: string
  title: string
  href: string
}

function ProjectPic({ src, alt }: ProjectPicProps) {
  return (
    <img src={src} height={100} alt={alt} className="grayscale" />
  )
}