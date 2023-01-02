import React, { ChangeEventHandler, ReactElement } from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants/colors'

interface ITextInputProps {
  label: string
  type?: any
  value: string | number
  pattern?: string
  placeholder?: string
  onChange: ChangeEventHandler<HTMLElement>
  onKeyDown?: React.KeyboardEventHandler
  required?: boolean
}

export const IconButtonInner = styled.div`
  display: flex;
  gap: 8px;
  font-size: 12px;
  align-items: center;
  justify-content: center;
`

export const BaseInputStyles = `
  border: 1px solid ${COLORS.GRAY_DARK};
  border-radius: 5px;
  padding: 6px;
  transition: 0.2s ease all;
  width: 100%;
  outline: none;

  :hover {
    border-color: ${COLORS.PRIMARY};
  }

  :focus {
    border-color: ${COLORS.PRIMARY};
    box-shadow: 0 0 5px ${COLORS.PRIMARY};
  }
`

export const TextInputWithLabel = (
  { label, type = 'text', value, onChange, placeholder, pattern, onKeyDown, required }: ITextInputProps
): ReactElement => {
  return <>
    <InputLabel>{ label }</InputLabel>
    <TextInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      pattern={pattern}
      onKeyDown={onKeyDown}
      required={required}
    />
  </>
}

export const InputLabel = styled.p`
  margin-bottom: 6px;
  font-weight: 400;
`

export const TextInput = styled.input`
  ${BaseInputStyles}
`
