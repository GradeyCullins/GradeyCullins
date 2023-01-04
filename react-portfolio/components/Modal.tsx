import React, { PropsWithChildren, ReactElement } from 'react'
import styled from 'styled-components'
import { ModalFadeIn, ScaleIn } from './Animations'

const ModalContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.55);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${ModalFadeIn} 0.2s;
    // backdrop-filter: blur(3px);
`

const ModalInner = styled.div`
    background-color: white;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
    width: 600px;
    min-height: 300px;
    max-width: 90%;
    border-radius: 10px;
    animation: ${ScaleIn} 0.2s;
`

type ModalProps = PropsWithChildren<{
  visible: boolean
  onClose: any
}>

export default class Modal extends React.Component<ModalProps> {
  inner?: HTMLDivElement | null

  render(): ReactElement {
    if (!this.props.visible) {
      return <></>
    }

    return <ModalContainer
      onClick={(e) => !(e.target === this.inner || this.inner?.contains(e.target as any)) && this.props.onClose()}>
      <ModalInner ref={inner => this.inner = inner}>
        {this.props.children}
      </ModalInner>
    </ModalContainer>
  }
}
