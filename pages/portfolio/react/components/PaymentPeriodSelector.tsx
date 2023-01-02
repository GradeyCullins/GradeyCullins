
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants/colors'
import Dropdown from './Dropdown'
import { InputLabel } from './Input'

enum ProductPeriod {
  'Second' = 'Second',
  'Minute' = 'Minute',
  'Hour' = 'Hour',
  'Day' = 'Day',
  'Month' = 'Month',
  'Year' = 'Year'
}

const PeriodDropdownItem = styled.div`
  padding: 6px 10px;

  :hover {
    background-color: ${COLORS.GRAY_LIGHTEST}
  }
`

interface IProps {
  label?: boolean
  period: ProductPeriod
  setPeriod: React.Dispatch<React.SetStateAction<ProductPeriod>>
}

export default class PaymentPeriodSelector extends React.Component<IProps> {
  closeFn?: any

  render(): ReactNode {
    return (
      <>
        <InputLabel>Payment Period</InputLabel>
        <Dropdown
          onCloseFn={closeFn => { this.closeFn = closeFn }}
          selectedContent={<p style={{ margin: 0 }}>{this.props.period}</p>}
          dropdownContent={
            Object.keys(ProductPeriod)
              .map(pp => {
                return <PeriodDropdownItem
                  onClick={() => {
                    this.props.setPeriod(ProductPeriod[pp as ProductPeriod])
                    this.closeFn?.()
                  }}
                  key={pp}
                >
                  {pp}
                </PeriodDropdownItem>
              })
          }
        />
      </>
    )
  }
}
