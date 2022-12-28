interface IProps {
  text: string
  smolText: string
  onClick: React.MouseEventHandler
}

const MemeButton = ({ text, smolText, onClick }: IProps) => (
  <>
    <button
      className="f6 link w-100 dim ba ph3 pv2 mb2 dib black mob-title bw1 tc dib dn-ns"
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      {smolText}
    </button>
    <button
      className='f6 link w-100 dim ba ph3 pv2 mb2 black pc-title bw1 tc dn dib-ns'
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      {text}
    </button>
  </>
)

export default MemeButton