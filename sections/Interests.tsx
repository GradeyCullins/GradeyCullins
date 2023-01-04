import Image from 'next/image'
import { useState } from 'react'
import MemeButton from '../components/MemeButton'
import Paragraph from '../components/Paragraph'
import Section from '../components/Section'
import SubHeader from '../components/SubHeader'
import nasGuts from '../public/img/nas-guts.jpg'

const Interests = () => {
  const [isNasImgShowing, setNasImgShowing] = useState(false)

  return (
    <Section header='Random'>
      <>
        <section className='mb-4'>
          <SubHeader text='exercise 🚲' />
          <Paragraph>
            A body in motion tends to stay in motion. Without near constant movement I find that my mind
            begins picking itself apart, leaving my mental in a state of self-destruction.
          </Paragraph>
          <Paragraph>
            I like to lift weights, mountain bike, play sports, and <span className="italic">sometimes do extra cardio</span>.
          </Paragraph>
        </section>

        <section className="mb-4">
          <SubHeader text='home lab 👾' />
          <Paragraph>
            I often have a few servers/machines on my LAN running a variety of services (including this website).
          </Paragraph>
          <Paragraph>
            My homelab currently has some neat services running such as Plex media streaming, NGINX web server, Bitcoin/Lightning
            nodes among a few others.
          </Paragraph>
          <Paragraph>
            My latest creation is a custom built NAS server running Ubuntu on an Intel Xeon, 32GB ECC Ram, NVIDIA 1060 for Plex
            Transcoding and a 4x10TB ZFS RAIDZ HDD pool.
          </Paragraph>
          <MemeButton text='Show NAS picture' onClick={() => setNasImgShowing(!isNasImgShowing)} className='w-full mb-2' />
          {isNasImgShowing && <Image src={nasGuts} alt='' />}
        </section>
      </>
    </Section>
  )
}
export default Interests