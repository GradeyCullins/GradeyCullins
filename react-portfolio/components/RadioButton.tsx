import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants/colors'

export const SelectedRadio = styled.button`
  background-color: white;
  padding: 10px 30px;
  border: 1px solid ${COLORS.PRIMARY};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease all;

  :hover {
    background-color: ${COLORS.PRIMARY_LIGHT}
  }
`

export const UnselectedRadio = styled.button`
  background-color: white;
  padding: 10px 30px;
  border: 1px solid ${COLORS.GRAY_MED};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease all;

  :hover {
    background-color: ${COLORS.PRIMARY_LIGHT}
  }
`

interface IProps {
  labels: string[]
  selectedLabel: string
}

export const RadioButtonGroup = ({ labels, selectedLabel }: IProps): ReactElement => {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      { labels.map(label => {
        if (label === selectedLabel) {
          return <SelectedRadio key={label} type='button'>{ label }</SelectedRadio>
        } else {
          return <UnselectedRadio key={label} type='button'>{ label }</UnselectedRadio>
        }
      })}
    </div>
  )
}
