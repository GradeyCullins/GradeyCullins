interface ILinkProps {
  href: string
  text: string
}
const PortfolioLink = ({ href, text }: ILinkProps) => (
  <div>
    <a className='text-blue-500 hover:underline blue hover-orange' href={href}>{text}</a>
  </div>
)
const Portfolio = () => {
  return (
    <div className='p-12'>
      <a className='text-lg text-blue-500 hover:underline' href="/">← Back to Home</a>
      <p>
        The point of this page is to collect and display miscellaneous code that has no other
        reasonable place to live.
      </p>
      <PortfolioLink href='/portfolio/react' text='React' />
      <PortfolioLink href='/portfolio/projects' text='Projects' />
    </div>
  )

}

export default Portfolio