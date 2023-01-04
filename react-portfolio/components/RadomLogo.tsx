import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants/colors'

const Logo = styled.svg<{ width: number, height: number }>`
    fill: ${COLORS.PRIMARY};
    cursor: pointer;
    transition: 0.2s ease all;
    width: ${props => props.width}px;
    height: ${props => props.height}px;

    :hover {
        fill: red;
    }
`

export default function RadomLogo({ width = 30, height = 30 }): ReactElement {
  return <Logo viewBox="0 0 61 61" width={width} height={height}
    xmlns="http://www.w3.org/2000/svg">
    <path d="M33.3276 27.3521H26.6104V34.0693H33.3276V27.3521Z" />
    <path d="M6.71721 0.741638H0V7.45885H6.71721V0.741638Z" />
    <path d="M59.9381 53.9626H53.2209V60.6798H59.9381V53.9626Z" />
    <path d="M39.9157 14.1761H26.6104V20.7641H39.9157V34.0693H46.6329V20.6349C46.6329 17.018 43.6618 14.1761 40.174 14.1761L39.9157 14.1761Z" />
    <path d="M46.5037 40.6573C42.8867 40.6573 40.0449 43.6284 40.0449 47.1162V47.2454V60.5506H46.7621V47.3746H60.0673V40.6573H46.5037Z" />
    <path d="M13.3052 0.741638V14.0469H0V20.7641H13.4344C17.0514 20.7641 19.8933 17.793 19.8933 14.3052V14.1761V0.741638H13.3052Z" />
    <path d="M20.0224 40.6573V27.3521H13.3052V40.7865C13.3052 44.4035 16.2763 47.2454 19.7641 47.2454H19.8932H33.1985V40.5282H20.0224V40.6573Z" />
    <path d="M6.71718 53.9626V27.3521H-2.67029e-05V54.0918C-2.67029e-05 57.7087 2.97105 60.5506 6.45883 60.5506H6.588H33.1985V53.8334H6.71718V53.9626Z" />
    <path d="M53.2209 0.741638H26.6104V7.45885H53.2209V34.0693H59.9381V7.20049C59.9381 3.58353 56.9671 0.741638 53.4793 0.741638H53.2209Z" />
  </Logo>
}
