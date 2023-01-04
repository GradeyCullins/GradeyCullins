import GradeyLogo from '../components/GradeyLogo'
import Spacer from '../components/Spacer'
import Closing from '../sections/Closing'
import Interests from '../sections/Interests'
import Intro from '../sections/Intro'
import Links from '../sections/Links'
import Projects from '../sections/Projects'
import Skillset from '../sections/Skillset'
import Tech from '../sections/Tech'

export default function Home() {
  return (
    <>
      <div className='flex'>
        <div className='px-8'>
          <Links />
        </div>
        <div className='mx-auto max-w-[34em]'>
          <div className='p-4'>
            <GradeyLogo />
            <Spacer />
            <Intro />
            <Interests />
            <Projects />
            <Skillset />
            <Tech />
            <Closing />
          </div>
        </div >
      </div>
    </>
  )
}
