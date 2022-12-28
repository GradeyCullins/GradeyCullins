import { Inter } from '@next/font/google'
import Link from 'next/link'
import Closing from '../sections/Closing'
import Intro from '../sections/Intro'
import Projects from '../sections/Projects'
import Skillset from '../sections/Skillset'
import Tech from '../sections/Tech'
// import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className='center measure-wide lh-copy'>
        <div id='left_column'>
          <Intro />
          <Projects />
          <Skillset />
          <Tech />
          <Closing />
        </div>
      </main>
    </>
  )
}
