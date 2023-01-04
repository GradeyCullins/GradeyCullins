import React, { ReactElement } from 'react'

export default function LinkExternal({ stroke = '#FF8972', width = 24, height = 24 }): ReactElement {
  return <svg width={width} height={height} stroke={stroke} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 4H4V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 15L20 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 4H20V9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
}
