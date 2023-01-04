import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants/colors'
import { BaseInputStyles } from './Input'

const StyledInput = styled.input<{ error?: boolean, fontSize?: string, align?: string }>`
  ${BaseInputStyles}
  position: relative;
  outline: none;
  border: 1px solid;
  border-color: ${COLORS.GRAY_DARK};
  flex: 1 1 auto;
  background-color: ${({ theme }) => theme.bg1};
  font-size: ${({ fontSize }) => fontSize ?? '28px'};
  text-align: ${({ align }) => align && align};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px;
  text-align: left;
  padding: 6px;
  border-radius: 5px;
  transition: 0.2s ease all;

  :hover {
    border-color: ${COLORS.PRIMARY};
  }
  
  :focus {
    border-color: ${COLORS.PRIMARY};
    box-shadow: 0 0 5px ${COLORS.PRIMARY};
  }

  ::placeholder {
    color: ${({ theme }) => theme.text4};
  }
`

const inputRegex = /^\d*(?:\\[.])?\d*$/

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export default React.memo(function InnerInput({
  value,
  onUserInput,
  placeholder,
  prependSymbol,
  ...rest
}: {
  value: string | number
  onUserInput: (input: string) => void
  error?: boolean
  fontSize?: string
  align?: 'right' | 'left'
  prependSymbol?: string | undefined
} & Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'>) {
  const enforcer = (nextUserInput: string): void => {
    if (nextUserInput === '' || inputRegex.test(escapeRegExp(nextUserInput))) {
      onUserInput(nextUserInput)
    }
  }

  return (
    <StyledInput
      {...rest}
      value={prependSymbol && value ? prependSymbol + value.toString() : value}
      onChange={(event) => {
        if (prependSymbol) {
          const value = event.target.value
          const formattedValue = value.toString().includes(prependSymbol)
            ? value.toString().slice(1, value.toString().length + 1)
            : value

          enforcer(formattedValue.replace(/,/g, '.'))
        } else {
          enforcer(event.target.value.replace(/,/g, '.'))
        }
      }}
      inputMode="decimal"
      autoComplete="off"
      autoCorrect="off"
      type="text"
      pattern="^[0-9]*[.,]?[0-9]*$"
      placeholder={placeholder ?? '0.0'}
      minLength={1}
      maxLength={79}
      spellCheck="false"
    />
  )
})
