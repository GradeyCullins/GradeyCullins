import Image from 'next/image'
import { useState } from 'react'
import styled from 'styled-components'
import MemeButton from '../components/MemeButton'
import Paragraph from '../components/Paragraph'
import Section from '../components/Section'
import desireToKnowMore from '../public/img/desire_to_know_more_intensifies.gif'
import uCampus from '../public/img/u-of-u-campus.jpg'

const Intro = () => {
  const [isImgVisible, setIsImgVisible] = useState(false)

  return (
    <Section header='Intro'>
      <>
        <figure className="float-left max-w-full mr-3">
          <Image src={uCampus} alt='' />
          <figcaption className="mt-2 text-xs font-light italic">Salt Lake City, UT</figcaption>
        </figure>

        <Paragraph>
          Hello and welcome to my website!
        </Paragraph>

        <Paragraph>
          I'm a computer programmmer hailing from Driggs, Idaho.
        </Paragraph>

        <Paragraph>
          I have a degree in Computer Science from the University of Utah where I graduated in 2018.
        </Paragraph>

        <Paragraph>
          Outside of work I take an active interest in cryptocurrencies, computer networking, E-Sports, fitness and food,
          and memes and pop culture.
        </Paragraph>

        {/* Link to Ross story somewhere else */}
        {/* <p>
        What got me hooked me into web programming and computer networking is the story of Ross Ulbricht, the
        inventor of the Silk Road. I highly recommend reading Wired's
        <a target="_blank" href="https://www.wired.com/2015/04/silk-road-1/">writeup</a> on his story if you want to
        learn more.
      </p> */}

        <div>
          <MemeButton
            text='Would you like to know more?'
            className='mt-4 mb-2 w-full'
            onClick={() => setIsImgVisible(!isImgVisible)}
          />
          {isImgVisible &&
            <Image
              className='mb3 w-full'
              src={desireToKnowMore}
              alt=''
            />
          }
        </div>
      </>
    </Section>
  )
}

export default Intro
