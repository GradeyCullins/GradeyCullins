import Image from 'next/image'
import React, { ReactElement, ReactNode, useState } from 'react'
import styled from 'styled-components'
import Chevron from './Chevron.svg'

interface IProps {
  title: string | ReactNode
  description?: ReactNode
  content: ReactNode
  startOpen?: boolean
}

const AccordionTitle = styled.div`
  display: inline-flex;
  justify-items: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  margin-top: 14px;
`

const AccordionBody = styled.div`
`

export const Accordion = (
  { title, description, content, startOpen = false }: IProps
): ReactElement => {
  const [isOpen, setIsOpen] = useState(startOpen)

  return (
    <div>
      <AccordionTitle onClick={() => setIsOpen(!isOpen)} style={{ marginBottom: '8px' }}>
        <span>{title}</span>
        <Image
          src={Chevron}
          alt=''
          style={{ opacity: 0.3, transition: '0.2s ease all', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
        {/* <img src={Chevron as any} style={{ opacity: 0.3, transition: '0.2s ease all', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} alt='' /> */}
      </AccordionTitle>

      {isOpen && description}

      {
        isOpen &&
        <AccordionBody>
          {content}
        </AccordionBody>
      }
    </div>
  )
}
