interface ITopLinkProps {
  href: string
  text: string
  blankTarget?: boolean
}

const ListLink = ({ href, text, blankTarget }: ITopLinkProps) => (
  <li>
    <a
      href={href}
      target={blankTarget ? '_blank' : '_self'}
      className='text-blue-600 hover:underline'
    >
      {text}
    </a>
  </li>
)

export default ListLink