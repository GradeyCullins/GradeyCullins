interface IProps {
  text: string
}

export default ({ text }: IProps) => (
  <h2 className='text-4xl mb-4'>{text}</h2>
)