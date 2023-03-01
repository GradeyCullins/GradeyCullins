import React from 'react'
import styled from 'styled-components'
import { Accordion } from '../../react-portfolio/components/Accordion'
import { CreateProduct } from '../../react-portfolio/views/CreateProduct'
import { ReactLogo } from '../../react-portfolio/assets/ReactLogo'
import { ComponentShowcase } from '../../react-portfolio/views/ComponentShowcase'
import { Toaster } from 'react-hot-toast';
import { MetamaskLoginPanel } from '../../react-portfolio/views/MetamaskLogin'

// html {
//   height: 100%;
// }
// body {
//   background: linear-gradient(#fff9f9, #ffffff) no-repeat;
//   height: 100%;
//   margin: 0;
//   background-repeat: no-repeat;
//   background-attachment: fixed;
// }

const Wrapper = styled.div`
  background: linear-gradient(#fff9f9, #ffffff) no-repeat;
  height: 100vh;
`

const Container = styled.div`
  text-align: left;
  width: 700px;
  padding-top: 16px;
  margin: auto;
`

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const H2 = styled.h2`
  margin-bottom: 0;
  font-size: 2rem;
`

const DemoContainer = styled.div`
  border: 1px dashed black;
  padding: 32px;
  background-color: white;
`

const DemoAccordionDesc = styled.p`
  color: 'gray';
  font-size: 12px;
`

export default () => (
  <Wrapper>
    <Toaster />
    <Container>
      <a className='text-blue-500 hover:underline' href="/">☜ Back to Home</a>
      <h1 className='text-4xl'>React.js Portfolio</h1>
      <p className='mb-4'>
        A showcase of some of my React.JS views.
      </p>

      <H2>Built with</H2>
      <ul className='list-square pl-8 mb-4'>
        <li>
          <LogoRow>
            <span>React</span>
            <div style={{ color: '#0a7ea4' }}>
              <ReactLogo />
            </div>
          </LogoRow>
        </li>
        <li>
          <LogoRow>
            <span>Styled Components</span>
            <span style={{ fontSize: '26px' }}>💅🏿</span>
          </LogoRow>
        </li>
        <li>
          <LogoRow>
            <span>react-hot-toast</span>
          </LogoRow>
        </li>
      </ul>

      <H2>UI Widgets</H2>
      <Accordion title='Web3 Form' content={
        <DemoContainer>
          <CreateProduct />
        </DemoContainer>
      }
        description={
          <DemoAccordionDesc>
            A dynamic HTML form that makes an Ethereum request to create new data on the Ethereum blockchain
          </DemoAccordionDesc>
        }
      />

      <Accordion title='Components' description={
        <DemoAccordionDesc>
          A showcase of some custom styled components and other various elements and views
        </DemoAccordionDesc>
      } content={
        <DemoContainer>
          <ComponentShowcase />
        </DemoContainer>
      } />

      <Accordion title='Metamask Connect' description={
        <DemoAccordionDesc>
          A simple Web3 login panel
        </DemoAccordionDesc>
      } content={
        <DemoContainer>
          <MetamaskLoginPanel />
        </DemoContainer>
      } />
    </Container>
  </Wrapper>
)
