import styled, { keyframes } from 'styled-components'
import { COLORS } from '../constants/colors'

const Spin = keyframes`
  from {
      transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  width: 20px;
  height: 20px;
  margin: 0;
  background: transparent;
  border-top: 2px solid ${COLORS.PRIMARY};
  border-right: 2px solid transparent;
  border-radius: 50%;
  animation: .5s ${Spin} linear infinite;
`

export default Spinner
