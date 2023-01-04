import React, { FormEvent, ReactElement, useState } from 'react'
import styled from 'styled-components'
import { PrimaryButton } from '../components/Button'
import { InputLabel, TextInputWithLabel } from '../components/Input'
import toast from 'react-hot-toast'
import { BigNumber, BigNumberish } from 'ethers'
import NumberInput from '../components/NumberInput'
import { RadioButtonGroup } from '../components/RadioButton'
import TokenSelector, { paymentTokens } from '../components/TokenSelector'
import PaymentPeriodSelector from '../components/PaymentPeriodSelector'
import { CustomerInput } from '../components/CustomerInput'
import { ConfirmProduct } from './ConfirmProduct'
import DocsButton from '../components/DocsButton'
import { PublicKey } from '../components/PublicKey'
import Modal from '../components/Modal'
import { exportKey, generateRSAKeyPair } from '../utils/GenerateKeyPair'
import { TextArea } from '../components/TextArea'
import Download from '../components/icons/Download.svg'
import Spinner from '../components/Spinner'
import { COLORS } from '../constants/colors'
import Image from 'next/image'

enum ProductPeriod {
  'Second' = 'Second',
  'Minute' = 'Minute',
  'Hour' = 'Hour',
  'Day' = 'Day',
  'Month' = 'Month',
  'Year' = 'Year'
}

const ProductPeriodSecs = {
  Second: 1,
  Minute: 60,
  Hour: 60 * 60,
  Day: 60 * 60 * 24,
  Month: 60 * 60 * 24 * 30,
  Year: 60 * 60 * 24 * 365
}

const encodePricePerMinute = (price: number): BigNumberish => BigNumber.from(Math.floor(price * (10 ** 8)))

const PageSectionTitle = styled.h2`
  margin: 32px 0 16px 0;
  color: ${COLORS.GRAY_DARKEST}
`
const ReadOnlyTextArea = styled(TextArea).attrs({
  readonly: true,
  spellCheck: false,
  required: true
})`
  cursor: pointer;
  color: ${COLORS.GRAY_DARKEST};
  resize: none;

  :hover {
    border-color: ${COLORS.GRAY_DARK};
  }

  :focus {
    border-color: ${COLORS.GRAY_DARK};
    box-shadow: none;
  }
`

const DownloadButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    text-decoration: underline solid ${COLORS.PRIMARY};
  }
`

const downloadPrivKey = (key: string): void => {
  const blob = new Blob([key])
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = 'private-key.pem'
  link.click()
  URL.revokeObjectURL(link.href)
}

export const CreateProduct = (): ReactElement => {
  const [name, setName] = useState('')
  const [inputs, setInputs] = useState<string[]>([])
  const [isRecurring] = useState(true)
  const [period, setPeriod] = useState(ProductPeriod.Hour)
  const [token, setToken] = useState(paymentTokens[0])
  const [price, setPrice] = useState('')
  const [isValidating, setIsValidating] = useState(false)
  const [productID, setProductID] = useState(0)
  const [keypair, setKeypair] = useState<CryptoKeyPair | undefined>()
  const [privKey, setPrivKey] = useState('')
  const [pubKey, setPubKey] = useState<string>()
  const [isGeneratingKey, setIsGeneratingKey] = useState(false)

  const [isKeyModalOpen, setIsKeyModalOpen] = useState(false)

  const handleCreateProduct = (e: FormEvent): void => {
    e.preventDefault()

    // Initiate a contract instance

    // Make a Web3 Contract call with the contract instance

    setIsValidating(true)
  }

  if (isValidating) {
    return <ConfirmProduct productID={productID} />
  }

  return (
    <div style={{
      fontSize: 14,
    }}>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
        <h1 style={{ margin: 0 }}>Create a product</h1>
        <DocsButton docsLink='products/products-explained' />
      </div>

      <form onSubmit={handleCreateProduct}>
        <PageSectionTitle>Product Information</PageSectionTitle>

        <div style={{ width: '50%' }}>
          <TextInputWithLabel
            label='Name'
            value={name}
            placeholder='Premium Plan, sunglasses, etc.'
            onChange={(e: React.ChangeEvent) => setName((e.target as any).value)}
            required={true}
          />

          <CustomerInput inputs={inputs} setInputs={setInputs} />

          {inputs.length > 0 && <PublicKey isRequired={true} pubKey={pubKey ?? ''} onClickGenerate={() => {
            setIsGeneratingKey(true)
            setIsKeyModalOpen(true)
            generateRSAKeyPair('RSA-PSS', 2048, 'SHA-256')
              .then(async (kp) => {
                setKeypair(kp)
                return await exportKey(kp.privateKey)
              })
              .then(async (privKey) => {
                setPrivKey(privKey)
                setIsGeneratingKey(false)
              })
          }} onChange={(e: React.ChangeEvent) => setPubKey((e.target as any).value)} />
          }
        </div>

        <PageSectionTitle>Product Pricing</PageSectionTitle>

        <InputLabel>Price Type</InputLabel>
        <RadioButtonGroup labels={['Recurring', 'One Time']} selectedLabel={isRecurring ? 'Recurring' : 'One Time'} />

        <div style={{ width: '50%' }}>
          <InputLabel>Token</InputLabel>
          <TokenSelector label token={token} setToken={setToken} />
          <PaymentPeriodSelector label period={period} setPeriod={setPeriod} />
        </div>

        <InputLabel>Price per {period}</InputLabel>
        <NumberInput
          value={price}
          onUserInput={(e) => setPrice(e)}
          fontSize='14'
          align='right'
          style={{ width: '50%' }}
          required={true}
        />

        <PrimaryButton style={{ display: 'block', marginTop: '32px' }}>
          Create
        </PrimaryButton>
      </form>

      {/* Keygen modal */}
      <Modal
        visible={isKeyModalOpen}
        onClose={() => setIsKeyModalOpen(false)}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '300px',
          justifyContent: 'space-between'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 10,
            marginBottom: 10,
            borderBottom: '1px solid',
            borderColor: COLORS.GRAY_DARK,
            padding: 30
          }}>
            <span style={{ fontSize: 22, fontWeight: 300 }}>
              Generate RSA Keypair
            </span>
            <DocsButton docsLink='products/products-explained' />
          </div>
          <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', rowGap: 20, padding: '20px 30px' }}>
            {isGeneratingKey
              ? <Spinner style={{ margin: 'auto' }} />
              : <div>
                <ReadOnlyTextArea rows={26} defaultValue={privKey} onClick={() => {
                  navigator.clipboard.writeText(privKey)
                  toast.success('Copied private key to clipboard!', { style: { fontSize: 14 } })
                }} />
                <DownloadButton onClick={() => { downloadPrivKey(privKey) }}>
                  <Image src={Download} alt='' />
                  <span style={{ color: COLORS.PRIMARY }}>Download private key</span>
                </DownloadButton>
              </div>
            }
          </div>
          <div style={{
            padding: 30,
            backgroundColor: COLORS.GRAY_LIGHTEST,
            borderRadius: 15,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
          }}>
            {!isGeneratingKey &&
              <PrimaryButton style={{ float: 'right' }} onClick={() => {
                if (keypair?.publicKey) {
                  exportKey(keypair.publicKey)
                    .then(pk => { setPubKey(pk) })
                }
                setIsKeyModalOpen(false)
              }}>
                Save
              </PrimaryButton>
            }
          </div>
        </div>
      </Modal>
    </div>
  )
}
