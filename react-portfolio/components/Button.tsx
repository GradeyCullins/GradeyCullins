import styled from 'styled-components'
import { COLORS } from '../constants/colors'

export const PrimaryButton = styled.button`
  background-color: ${COLORS.PRIMARY};
  border-radius: 5px;
  padding: 10px 30px;
  outline: 0;
  border: 0;
  color: #FFF;
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 14px;
  height: fit-content;
  user-select: none;
  
  :hover {
      opacity: 0.75;
  }
  
  :active {
      background-color: #2e63fd;
      color: ${COLORS.PRIMARY};
  }
`

export const SecondaryButton = styled.button`
  border: 1px solid;
  border-color: ${COLORS.PRIMARY};
  border-radius: 5px;
  padding: 5px 20px;
  outline: 0;
  background: none;
  color: ${COLORS.PRIMARY};
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 12px;
  height: fit-content;
  user-select: none;
  
  :hover {
    opacity: 0.75;
  }
  
  :active {
    opacity: 0.5;
  }
`

export const SecondaryLinkButton = styled.a`
  border: 1px solid;
  border-color: ${COLORS.PRIMARY};
  border-radius: 5px;
  padding: 5px 20px;
  outline: 0;
  background: none;
  color: ${COLORS.PRIMARY};
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 12px;
  height: fit-content;
  user-select: none;
  text-decoration: none;
  
  :hover {
    opacity: 0.75;
  }
  
  :active {
    opacity: 0.5;
  }
`

export const PrimaryLinkButton = styled.a`
  background-color: ${COLORS.PRIMARY};
  border-radius: 5px;
  padding: 10px 30px;
  outline: 0;
  border: 0;
  color: #FFF;
  cursor: pointer;
  transition: 0.2s ease all;
  text-decoration: none;
  font-size: 14px;
  height: fit-content;
  user-select: none;
  
  :hover {
      opacity: 0.75;
  }
  
  :active {
      background-color: #ffd6ce;
      color: ${COLORS.PRIMARY};
  }
`

export const IconButton = styled.button`
  border: 0;
  border-radius: 5px;
  padding: 5px 20px;
  outline: 0;
  background: none;
  color: ${COLORS.PRIMARY};
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 12px;
  height: fit-content;
  user-select: none;
  display: flex;
  align-items: center;
  
  :hover {
    opacity: 0.75;
  }
  
  :active {
    opacity: 0.5;
  }
`
