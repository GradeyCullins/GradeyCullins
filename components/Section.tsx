import { ReactElement, ReactNode } from 'react'
import SectionHeader from './SectionHeader'
import Spacer from './Spacer'

interface IProps {
  header?: string
  children: ReactElement
  hasSpacer?: boolean
}
export default ({ header, children, hasSpacer = true }: IProps): ReactElement => (
  <>
    {header && <SectionHeader text={header} />}
    <div className='mb-8'>{children}</div>
    {hasSpacer && <Spacer />}
  </>
)
