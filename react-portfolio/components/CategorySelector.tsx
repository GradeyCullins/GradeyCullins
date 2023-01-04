import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants/colors'
import Dropdown from './Dropdown'
import { InputLabel } from './Input'

export enum ProductCategory {
  'API' = 'API',
  'Cloud Services' = 'Cloud Services',
  'Video Streaming' = 'Video Streaming',
  'Gift Card' = 'Gift Card',
  'Miscellaneous' = 'Miscellaneous'
}

const CategoryDropdownItem = styled.div`
  padding: 6px 10px;

  :hover {
    background-color: ${COLORS.GRAY_LIGHTEST}
  }
`

interface IProps {
  label?: boolean
  category: ProductCategory
  setCategory: React.Dispatch<React.SetStateAction<ProductCategory>>
}

export default class CategorySelector extends React.Component<IProps> {
  closeFn?: any

  render(): React.ReactNode {
    return (
      <>
        <InputLabel>Category</InputLabel>
        <Dropdown
          onCloseFn={closeFn => { this.closeFn = closeFn }}
          selectedContent={<p style={{ margin: 0 }}>{this.props.category}</p>}
          dropdownContent={
            Object.keys(ProductCategory)
              .map(pc => {
                return <CategoryDropdownItem
                  onClick={() => {
                    this.props.setCategory(ProductCategory[pc as ProductCategory])
                    this.closeFn?.()
                  }}
                  key={pc}
                >
                  {pc}
                </CategoryDropdownItem>
              })
          }
        />
      </>
    )
  }
}

// export const CategorySelectorFnc = (
//   { category, setCategory }: { category: ProductCategory, setCategory: React.Dispatch<React.SetStateAction<ProductCategory>> }
// ): ReactElement => {
//   let closeFn: any

//   return (
//     <Dropdown
//       onCloseFn={_closeFn => {
//         console.log('setting')
//         // return setCloseFn(_closeFn)
//         closeFn = _closeFn
//       }}
//       selectedContent={<p style={{ margin: 0 }}>{category}</p>}
//       dropdownContent={
//         Object.keys(ProductCategory)
//           .map(pc => {
//             return <CategoryDropdownItem
//               onClick={() => {
//                 setCategory(ProductCategory[pc])
//                 closeFn?.()
//               }}
//               key={pc}
//             >
//               {pc}
//             </CategoryDropdownItem>
//           })
//       }
//     />
//   )
// }
