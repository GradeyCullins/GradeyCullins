import { ReactElement, useState } from 'react';
import { toast } from 'react-hot-toast';
import styled from 'styled-components';

const colors = {
  PRIMARY: '#eb87d4'
}

const Web3Button = styled.button`
  padding: 5px 16px;
  border: 2px solid black;
  border-radius: 5px;
  color: black;
  background-color: ${colors.PRIMARY};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.2);
  }
`

export const MetamaskLoginPanel = (): ReactElement => {
  const [address, setAddress] = useState<string>()
  const { ethereum } = window as any

  const handleMetamaskLogin = async () => {
    const isMetaMaskInstalled = (): boolean => ethereum && ethereum.isMetaMask

    if (!isMetaMaskInstalled()) {
      return
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      toast.success('Authenticated with MetaMask!')

      if (accounts.length > 0) {
        setAddress(accounts[0])
      }
    } catch (err) {
      toast.error((err as any).message)
    }
  }

  return address === undefined
    ? <div>
      <Web3Button
        onClick={handleMetamaskLogin}
      >
        Connect
      </Web3Button>
      </div>
    : <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        {address}
        <Web3Button
          onClick={() => {
            setAddress(undefined)
            toast.success('Disconnected MetaMask!')
          }}
        >
          disconnect
        </Web3Button>
    </div>
}