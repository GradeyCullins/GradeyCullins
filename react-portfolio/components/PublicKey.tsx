import React, { ChangeEventHandler, ReactElement } from 'react'
import styled from 'styled-components'
import { FadeIn } from './Animations'
import { SecondaryButton } from './Button'
import { IconButtonInner, InputLabel } from './Input'
import { TextArea } from './TextArea'
import Plus from './icons/Plus.svg'
import Image from 'next/image'

interface IProps {
  pubKey: string
  onChange: ChangeEventHandler<HTMLElement>
  isRequired?: boolean
  onClickGenerate: React.MouseEventHandler
}

const Container = styled.div`
  margin-top: 14px;
  animation: ${FadeIn} 1s;
`

const NoResizeTextArea = styled(TextArea)`
  resize: none
`

const BottomAddInputBtn = ({ onClick }: { onClick: React.MouseEventHandler }): ReactElement => (
  <SecondaryButton onClick={onClick} type='button' style={{ border: 'none', paddingLeft: 0 }}>
    <IconButtonInner>
      <Image src={Plus as string} style={{ width: '14px' }} alt='' />
      Generate keyset
    </IconButtonInner>
  </SecondaryButton>
)

export const PublicKey = (
  { pubKey, onChange, isRequired, onClickGenerate }: IProps
): ReactElement => {
  return (
    <Container>
      <InputLabel>Public Key</InputLabel>
      <NoResizeTextArea
        rows={13}
        required={isRequired}
        placeholder='RSA/ECC public key'
        value={pubKey}
        onChange={onChange}
      />
      <BottomAddInputBtn onClick={onClickGenerate} />
    </Container>
  )
}
