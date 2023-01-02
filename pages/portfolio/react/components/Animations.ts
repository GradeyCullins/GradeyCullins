import { keyframes } from 'styled-components'

export const ModalFadeIn = keyframes`
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.55);
  }
`

export const ScaleIn = keyframes`    
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
`

export const ExpandOut = keyframes`
  from {
    /* transform: scaleY(0); */
    height: 0;
  }
  to {
    /* transform: scaleY(1) */
    height: fit-content;
  }
`

export const CollapseIn = keyframes`
  from {
    /* transform: scaleY(1) */
  }
  to {
    /* transform: scaleY(0) */
  }
`

export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
