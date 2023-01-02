import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../constants/colors'
import { Svg } from '.'

interface IProps {
  className?: string
  onClick?: React.MouseEventHandler
}

export const CloseIcon = (
  { className, onClick }: IProps
): ReactElement => (
  <Svg viewBox="0 0 24 24" className={className} onClick={onClick} >
    <path
      d="M7 7L17 17M7 17L17 7"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export const HoverCloseIcon = styled(CloseIcon)<IProps>`
  color: black;
  transition: all ease-in-out 0.2s;
  cursor: pointer;

  :hover {
    color: ${COLORS.PRIMARY}
  }
`
