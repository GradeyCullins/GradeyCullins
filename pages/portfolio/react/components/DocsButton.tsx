import React, { ReactElement } from 'react'
import styled from 'styled-components'
import LinkExternal from './LinkExternal'

const DocsButtonStyle = styled.a`
display: flex;
align-items: center;
padding: 4px 8px;
background: #eff0f8;
border-radius: 5px;
cursor: pointer;
height: fit-content;
text-decoration: none;

:hover {
  opacity: 0.9;
}

:active {
  opacity: 0.75;
}
`

export default function DocsButton({ docsLink = '' }): ReactElement {
  return <DocsButtonStyle href='#'
    target="_blank">
    <span style={{ fontSize: 12, color: 'rgba(0,0,0,0.5)', marginRight: 3 }}>Docs</span>
    <LinkExternal width={15}
      height={15}
      stroke="rgba(0,0,0,0.4)" />
  </DocsButtonStyle>
}
