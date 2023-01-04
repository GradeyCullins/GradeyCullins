import { providers } from 'ethers'
import { Filter } from '@ethersproject/providers'
import React, { ReactElement, useEffect, useState } from 'react'
import { RadomLoading } from '../components/RadomLoading/RadomLoading'
import SpaceShuttle from '../components/SpaceShuttle.svg'
import styled from 'styled-components'
import { COLORS } from '../constants/colors'
import { SecondaryButton } from '../components/Button'
import { IconButtonInner } from '../components/Input'
import { LinkArrow } from '../components/icons/LinkArrow'
import { toast } from 'react-hot-toast'
import Image from 'next/image'

// Can generify this fnc by passing filter as parameter.
export const getProductTx = async (productID: number): Promise<providers.TransactionResponse | undefined> => {
  // Get contract instance

  // Get an event filter from the contract

  try {
    // fetch events using contract.queryFilter
    // const events = await servicesFacet.queryFilter(filter, 'earliest', 'latest')
    const events = ['ev1', 'ev2', 'ev3']
    if (events.length < 1) {
      return
    }

    // return the first event's transaction
    // return await events[0].getTransaction()
  } catch (err) {
    console.error(err)
  }
}

export const getProductBlock = async (productID: number): Promise<providers.Block | undefined> => {
  // Get contract instance

  // Get provider

  // Define filter
  const nFilter: Filter = {
    fromBlock: 'earliest',
    toBlock: 'latest',
    // ...contractInstance.filters.ServiceOfferCreated(undefined, productID)
  }

  try {
    // Fetch logs
    // const logs = await provider.getLogs(nFilter)
    const logs = ['log1', 'log2', 'logN']

    if (logs !== undefined && logs.length > 0) {
      // Return the block using provider.getBlock
      // const block = await provider.getBlock(logs[0].blockNumber)
      // return block
    }

    return undefined
  } catch (err) {
    console.error('failed to fetch offer logs: ', err)
  }
}

const PageContainer = styled.div`
  font-size: 16px;
  padding-top: 32px;
  margin-left: auto;
  margin-right: auto;
  gap: 48px;
`

const P = styled.p`
  margin: 0;
`

const Card = styled.div`
  padding: 32px;
  border: 1px solid ${COLORS.GRAY_MED}
`

const H = `
  font-weight: 600;
`

const H2 = styled.h2`
  ${H}
  margin: 0;
  font-size: 18px;
`

const H1 = styled.h1`
  ${H}
  font-size: 22px;
  margin: 0
`

const IntegrationLink = ({ text, href }: { text: string, href: string }): ReactElement => {
  return (
    <a href={href} style={{ textDecoration: 'none' }}>
      <SecondaryButton style={{ width: '100%' }} >
        <IconButtonInner>
          <span>{text}</span>
          <LinkArrow />
        </IconButtonInner>
      </SecondaryButton>
    </a>
  )
}

export const ConfirmProduct = ({ productID }: { productID: number }): ReactElement => {
  const totalConfirmations = 3

  const [confirmations, setConfirmations] = useState(0)
  const [blockNo, setBlockNo] = useState(0)
  const [isMining, setIsMining] = useState(true)

  useEffect(() => {
    getProductTx(productID)
      .then(async (tx) => {
        for (let i = 1; i <= totalConfirmations; i++) {
          await tx?.wait(i)
          setConfirmations(i)
        }

        toast.success('Product created on-chain!', { style: { fontSize: 16 } })

        const block = await getProductBlock(productID)
        setBlockNo(block?.number ?? 0)
      })
      .catch(err => {
        console.error(err)
        toast.error(`Something went wrong: ${err.message}`)
      })
  }, [productID])

  useEffect(() => {
    setIsMining(confirmations < totalConfirmations)
  }, [confirmations])

  return (
    <PageContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '48px'
        }}
      >
        <div>
          {isMining
            ? <div style={{ width: '150px' }}><RadomLoading /></div>
            : <Image src={SpaceShuttle as string} style={{ width: '112px' }} alt='' />
          }
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: isMining ? 'center' : 'flex-start'
        }}>
          <H1>{isMining
            ? `Product ${productID} is buidling`
            : `⛓ Product ${productID} was created on-chain! ⛓`}
          </H1>
          {isMining
            ? <P>Waiting for {confirmations} / {totalConfirmations} confirmations</P>
            : <P>Transaction confirmed {confirmations} times ✅</P>
          }
          {!isMining && <P>Validated on block {blockNo} ⛏</P>}

          {!isMining &&
            <Card style={{ marginTop: '32px' }}>
              <H2>What&apos;s next?</H2>
              <P style={{ marginBottom: '32px' }}>Create a payment/checkout link, or setup the payment widget</P>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <IntegrationLink text='Create a Payment Link' href='#/integrations' />
                <IntegrationLink text='Create a Checkout Link' href='#/integrations' />
                <IntegrationLink text='Embed in my site' href='#/integrations' />
              </div>
            </Card>
          }
        </div>
      </div>
    </PageContainer>
  )
}
