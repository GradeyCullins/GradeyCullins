import React, { ReactElement } from 'react'
import { IconButtonInner, InputLabel, TextInput } from './Input'
import { HoverCloseIcon } from './icons/Close'
import styled from 'styled-components'
import { SecondaryButton } from './Button'
import Plus from './icons/Plus.svg'
import { FadeIn } from './Animations'

interface IProps {
  inputs: string[]
  setInputs: React.Dispatch<React.SetStateAction<string[]>>
}

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

const FadeInInput = styled(TextInput)`
  animation: ${FadeIn} 1s;
`

const TopAddInputBtn = ({ onClick }: { onClick: React.MouseEventHandler }): ReactElement => (
  <SecondaryButton onClick={onClick} type='button'>
    <IconButtonInner>
      <img src={Plus as string} style={{ width: '14px' }} alt='' />
      Add custom input
    </IconButtonInner>
  </SecondaryButton>
)

const BottomAddInputBtn = ({ onClick }: { onClick: React.MouseEventHandler }): ReactElement => (
  <SecondaryButton onClick={onClick} type='button' style={{ border: 'none', paddingLeft: 0 }}>
    <IconButtonInner>
      <img src={Plus as string} style={{ width: '14px' }} alt='' />
      Add another custom input
    </IconButtonInner>
  </SecondaryButton>
)

export const CustomerInput = ({ inputs, setInputs }: IProps): ReactElement => (
  <>
    <InputLabel>Customer Inputs</InputLabel>

    {inputs.length === 0 && <TopAddInputBtn onClick={() => setInputs([''])} />}

    {inputs.map((input, i) => (
      <Wrapper key={i}>
        <FadeInInput autoFocus value={input} placeholder='e.g. Email address' required={true} onChange={(e: React.ChangeEvent) => {
          const copyArr = Array.from(inputs)
          copyArr[i] = (e.target as any).value
          setInputs(copyArr)
        }} />
        <HoverCloseIcon onClick={() => {
          const copyArr = Array.from(inputs)
          copyArr.splice(i, 1)
          setInputs(copyArr)
        }} />
      </Wrapper>
    ))}

    {inputs.length > 0 && <BottomAddInputBtn onClick={() => {
      const copyArr = Array.from(inputs)
      copyArr.push('')
      setInputs(copyArr)
    }}
    />}
  </>
)
