import React, { ReactElement, ReactNode } from 'react'
import Dropdown from './Dropdown'
import UDSTLogo from './TetherLogo.svg'
import USDCLogo from './USDCLogo.svg'
import DaiLogo from './DaiLogo.svg'
import EthLogo from './EthLogo.svg'
import GeminiLogo from './GeminiLogo.png'
import styled from 'styled-components'
import { COLORS } from '../constants/colors'
import { ethers } from 'ethers'

export interface Token {
  name: string
  address: string
  ticker: string
  logo: string
}

export const paymentTokens: Token[] = [
  {
    name: 'USD Coin',
    address: ethers.constants.AddressZero,
    ticker: 'USDC',
    logo: USDCLogo as string
  },
  {
    name: 'Tether USD',
    address: ethers.constants.AddressZero,
    ticker: 'USDT',
    logo: UDSTLogo as string
  },
  {
    name: 'DAI Stablecoin',
    address: ethers.constants.AddressZero,
    ticker: 'DAI',
    logo: DaiLogo as string
  },
  {
    name: 'Gemini Dollar',
    address: ethers.constants.AddressZero,
    ticker: 'GUSD',
    logo: GeminiLogo
  },
  {
    name: 'Wrapped Ether',
    address: ethers.constants.AddressZero,
    ticker: 'WETH',
    logo: EthLogo as string
  }
  // {
  //   name: 'Radom Token',
  //   address: ethers.constants.AddressZero,
  //   ticker: 'DOM',
  //   logo: radomSymbolDarkLogo
  // },
  // {
  //   name: 'Basic Attention Token',
  //   ticker: 'BAT',
  //   logo: batLogo
  // },
]

const TokenLogo = styled.img`
  width: 16px;
  height: 16px;
`

const TokenDropdownItem = styled.div`
  padding: 10px;

  :hover {
    background-color: ${COLORS.GRAY_LIGHTEST}
  }
`

const TokenDisplay = ({ token }: { token: Token }): ReactElement => {
  return (
    <div style={{ display: 'flex', gap: '6px' }}>
      <TokenLogo src={token.logo} />
      <span style={{ fontWeight: '500' }}>{token.name}</span>
      <span style={{ color: COLORS.GRAY_DARKEST }}>{token.ticker}</span>
    </div>
  )
}

interface IProps {
  label?: boolean
  token: Token
  setToken: React.Dispatch<Token>
  selectedContent?: ReactNode
}

export default class TokenSelector extends React.Component<IProps> {
  closeFn?: any

  render(): ReactNode {
    return (
      <Dropdown
        onCloseFn={closeFn => { this.closeFn = closeFn }}
        selectedContent={this.props.selectedContent ?? <TokenDisplay token={this.props.token} />}
        dropdownContent={
          paymentTokens
            .map(token => {
              return <TokenDropdownItem
                onClick={() => {
                  this.props.setToken(token)
                  this.closeFn?.()
                }}
                key={token.ticker}
              >
                <TokenDisplay token={token} />
              </TokenDropdownItem>
            })
        }
      />
    )
  }
}
