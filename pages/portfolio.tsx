interface ILinkProps {
  href: string
  text: string
}
const PortfolioLink = ({ href, text }: ILinkProps) => (
  <div>
    <a className='link underline blue hover-orange' href={href}>{text}</a>
  </div>
)
const Portfolio = () => {
  return (
    <div>
      <PortfolioLink href='/portfolio/projects' text='Projects' />
      <PortfolioLink href='/portfolio/react' text='React' />
    </div>
  )

}

export default Portfolio