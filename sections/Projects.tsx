import Image from 'next/image'
import { useState } from 'react'
import ListLink from '../components/ListLink'
import MemeButton from '../components/MemeButton'
import Section from '../components/Section'
import google from '../public/img/google.png'
import howIFeel from '../public/img/how-i-feel.gif'

interface IProject {
  title: string
  description: string
  links: {
    href: string
    text: string
    target: '_blank' | '_self'
  }[]
}
const Project = ({ title, description, links }: IProject) => (
  <div>
    <h3 className='text-xl'>{title}</h3>
    <p className='pl-4 mb-1'>{description}</p>
    <ul className="list-square pl-12">
      {links.map(link => (
        <ListLink
          key={link.href}
          href={link.href}
          text={link.text}
          blankTarget={link.target === '_blank'}
        />
      ))}
    </ul>
  </div>
)

const projects: IProject[] = [
  {
    title: 'Purity Vision',
    description: 'A backend that utilizes the Google Vision API to check images for explicit content and a browser extension that auto-removes any images that are flagged.',
    links: [
      { href: 'https://github.com/GradeyCullins/purity-vision', text: 'Golang backend', target: '_blank' },
      { href: 'https://github.com/GradeyCullins/purity-web', text: 'cross-platform web extension', target: '_blank' }
    ]
  },
  {
    title: 'gradeycullins.com',
    description: 'This website, recently rewritten in React/Next.js.',
    links: [
      { href: 'https://github.com/GradeyCullins/GradeyCullins', text: 'source', target: '_blank' },
    ]
  },
  {
    title: 'Skybin',
    description: 'A p2p file storage system for my senior capstone group project.',
    links: [
      { href: 'https://uofu-skybin.github.io/index.html', text: 'project homepage', target: '_blank' },
    ]
  },
  {
    title: 'c++ web server',
    description: 'A multi-threaded c++ web server for a school project.',
    links: [
      { href: 'https://github.com/GradeyCullins/QT-Server', text: 'source', target: '_blank' },
    ]
  }
]

const Projects = () => {
  const [isCodeImgVisible, setCodeImgVisible] = useState(false)
  const [isGoogleImgVisible, setGoogleImgVisible] = useState(false)

  return (
    <Section header='Projects'>
      <>
        <span>
          My&nbsp;
          <a
            href='https://github.com/GradeyCullins'
            target='_blank'
            className='text-blue-400 visited:text-purple-800 hover:underline'
          >
            Github
          </a>
          &nbsp;is a good way to check out some of my recent projects.
        </span>

        <div className="my-4 flex flex-col gap-4">
          {projects.map(project => (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
              links={project.links}
            />
          ))}
        </div>

        {/* How I feel when I'm cooooooding. */}
        <MemeButton
          text='What people think coding is like'
          className='mb-2 w-full'
          onClick={() => setCodeImgVisible(!isCodeImgVisible)}
        />
        {isCodeImgVisible && <Image className='w-full h-[400px]' src={howIFeel} alt='' />}


        {/* What I'm actually doing xdxd */}
        <MemeButton
          text="What I'm actually doing"
          className='mb-2 w-full'
          onClick={() => setGoogleImgVisible(!isGoogleImgVisible)}
        />
        {isGoogleImgVisible && <Image className='w-full h-[400px]' src={google} alt='' />}
      </>
    </Section>
  )
}
export default Projects