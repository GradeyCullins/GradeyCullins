interface IProps {
  text: string
  smolText: string
  className?: string
  onClick: React.MouseEventHandler
}

const MemeButton = ({ text, onClick, className }: IProps) => (
  <button
    className={`px-4 py-2 transition-colors duration-150 bg-slate-700 hover:bg-slate-500 text-white ${className}`}
    style={{ cursor: 'pointer' }}
    onClick={onClick}
  >
    {text}
  </button>
)

export default MemeButton