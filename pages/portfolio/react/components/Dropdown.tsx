import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants/colors'
import Chevron from './Chevron.svg'
import { InputLabel } from './Input'
import { ScaleIn } from './Animations'

const DropdownWrapper = styled.div`
  user-select: none;
  cursor: pointer;
  position: relative;
`

const DropdownInner = styled.div<{ open: boolean }>`
  border: 1px solid;
  padding: 6px 10px;
  border-radius: 5px;
  transition: 0.2s ease all;
  background-color: white;
  border-color: ${({ open }) => open ? COLORS.PRIMARY: COLORS.GRAY_DARK};
  ${({ open }) => open && `box-shadow: 0 0 5px ${COLORS.PRIMARY};`}
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  justify-content: space-between;

  :hover {
    border-color: ${COLORS.PRIMARY};
  }

  :active {
    opacity: 0.75;
  }
`

const DropdownContent = styled.div<{ visible: boolean, alignLeft: boolean }>`
  display: ${props => props.visible ? 'block' : 'none'};
  background-color: white;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: calc(100% + 5px);
  ${({ alignLeft }) => alignLeft && 'left: 0;'}
  ${({ alignLeft }) => !alignLeft && 'right: 0;'}
  min-width: 100%;
  border-radius: 5px;
  z-index: 99;
  overflow: hidden;
  animation: ${ScaleIn} 0.2s;
`

type AlignmentPreference = 'left' | 'right'

interface IProps {
  preferredAlignment?: AlignmentPreference
  selectedContent: React.ReactNode
  dropdownContent: React.ReactNode
  onCloseFn?: (fn: any) => any
}

interface IState {
  open: boolean
  alignLeft: boolean
}

export default class Dropdown extends React.Component<IProps, IState> {
  dropdownWrapper?: HTMLDivElement | null
  dropdownContent?: HTMLDivElement
  state = {
    open: false,
    alignLeft: true
  }

  componentDidMount = (): void => {
    window.addEventListener('click', e => {
      if (!this.dropdownWrapper) {
        return
      }

      const isClickInDropdown = this.dropdownWrapper === e.target || this.dropdownWrapper.contains(e.target as any)
      if (!isClickInDropdown) {
        this.toggleDropdown(false)
      }
    })

    if (this.props.onCloseFn) {
      this.props.onCloseFn(() => this.toggleDropdown(false))
    }
  }

  toggleDropdown = (open = !this.state.open): void => {
    this.setState({ open })
  }

  repositionDropdown = (dropdownContent: HTMLDivElement): void => {
    if (dropdownContent === this.dropdownContent) {
      return
    }

    if (!this.dropdownWrapper) {
      return
    }

    this.dropdownContent = dropdownContent
    const wrapper = this.dropdownWrapper.getBoundingClientRect()
    const rect = dropdownContent.getBoundingClientRect()
    const canAlignLeft = window.innerWidth >= wrapper.x + rect.width
    const canAlignRight = wrapper.x - rect.width >= 0

    if (this.props.preferredAlignment === 'left' && canAlignLeft) {
      this.setState({ alignLeft: true })
    } else if (this.props.preferredAlignment === 'right' && canAlignRight) {
      this.setState({ alignLeft: false })
    } else if (canAlignLeft) {
      this.setState({ alignLeft: true })
    } else {
      this.setState({ alignLeft: false })
    }
  }

  render(): React.ReactNode {
    return <DropdownWrapper ref={dropdownWrapper => { if (dropdownWrapper) this.dropdownWrapper = dropdownWrapper }}>
      <DropdownInner
        open={this.state.open}
        onClick={() => this.setState({ open: !this.state.open })}>
        {this.props.selectedContent}
        <img src={Chevron as string} style={{ opacity: 0.3, transition: '0.2s ease all', transform: this.state.open ? 'rotate(180deg)' : 'rotate(0deg)' }} alt='' />
      </DropdownInner>
      {
        this.state.open &&
        <DropdownContent
          alignLeft ={this.state.alignLeft}
          ref={r => r && this.repositionDropdown(r)}
          visible={this.state.open}>
          {this.props.dropdownContent}
        </DropdownContent>
      }
    </DropdownWrapper>
  }
}

type DropdownWithLabelProps = IProps & {
  label: string
}

export const DropdownWithLabel =
  ({ label, selectedContent, dropdownContent, onCloseFn }: DropdownWithLabelProps): ReactElement => {
    return <>
      <InputLabel>{ label }</InputLabel>
      <Dropdown selectedContent={selectedContent} dropdownContent={dropdownContent} onCloseFn={onCloseFn} />
    </>
  }
