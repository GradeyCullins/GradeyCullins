import RailsIcon from "/assets/icons/rubyonrails.svg"
import GoIcon from "/assets/icons/go.svg"
import ReactIcon from "/assets/icons/react.svg"
import NodeIcon from "/assets/icons/nodejs.svg"
import PuppeteerIcon from "/assets/icons/puppeteer.svg"
import EthereumIcon from "/assets/icons/ethereum.svg"

export default function TechStackIcons() {
  return (
    <div className="flex gap-2">
      <img src={GoIcon} width={32} alt="golang icon"/>
      <img src={ReactIcon} width={32} alt="reactjs icon"/>
      <img src={RailsIcon} width={32} alt="ruby on rails icon"/>
      <img src={NodeIcon} width={32} alt="nodejs icon"/>
      <img src={PuppeteerIcon} width={32} alt="puppeteerjs icon"/>
      <img src={EthereumIcon} width={32} alt="ethereum icon"/>
    </div>
  )
}