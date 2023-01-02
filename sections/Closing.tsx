import Image from 'next/image'
import Section from '../components/Section'

const Closing = () => (
  <Section header='Closing' hasSpacer={false}>
    <>
      <p className='mb-2'>
        My hope is that this site gives readers a little insight into my thoughts and experiences as a software
        developer. Thanks for stopping by.
      </p>
      <figure>
        <Image
          src='/img/gc-bike-mtns.png'
          alt=''
          width='600'
          height='500'
        />
        <figcaption className="mt-2 text-xs font-light italic">Grand Targhee, WY (Summer 2019)</figcaption>
      </figure>
    </>
  </Section>
)

export default Closing