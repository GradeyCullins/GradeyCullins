// Welcome to my own style system based on Brustalist web design
import toast from 'react-hot-toast'
import styled from 'styled-components'

const COLORS = {
  GREEN: '#4ef5a7',
  RED: '#fa9595',
  BLUE: '#82a4ff'
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const BrutalButton = styled.button<{ color?: string}>`
  padding: 16px 8px;
  display: block;
  border: 1px solid black;
  cursor: pointer;
  width: fit-content;
  border-radius: 3px;
  box-shadow: 3px 5px 0px black;
  background-color: ${props => props.color ? props.color : COLORS.GREEN};
  transition: all 0.5s;

  :hover {
    filter: grayscale(50%);
  }
`

const BrutalPill = styled.div`
  padding: 6px;
  background-color: ${props => props.color ? props.color : COLORS.GREEN};
  width: fit-content;
  font-size: 12px;
  border-radius: 8px;
`

const BrutalInput = styled.input`
  padding: 12px 6px;
  border: 1px solid gray;
  border-radius: 5px;
  outline: none;

  :active, :focus {
    border-color: ${COLORS.GREEN}
  }
`


export const ComponentShowcase = () => (
  <Container>
    <div style={{ display: 'flex', gap: '8px' }}>
      <BrutalButton onClick={() => { toast.success('Clicked!')}}>A Cool Button!</BrutalButton>
      <BrutalButton color={COLORS.RED} onClick={() => { toast.success('Clicked!')}}>A Red Button!</BrutalButton>
    </div>
    <div style={{ display: 'flex', gap: '4px' }}>
      <BrutalPill>A Hard Pill to Swallow</BrutalPill>
      <BrutalPill color={COLORS.BLUE}>Blue Pill</BrutalPill>
      <BrutalPill color={COLORS.RED}>Red Pill</BrutalPill>
    </div>
    <span>Email address</span>
    <form onSubmit={e => {
      e.preventDefault()
      toast.success('form submitted')
    }}>
      <BrutalInput required type='email' placeholder='Enter an email address' style={{ width: '300px' }} />
      <BrutalButton style={{ marginTop: '6px', width: '100px' }}>Submit</BrutalButton>
    </form>
  </Container>
)