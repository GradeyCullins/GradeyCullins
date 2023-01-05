import Paragraph from '../components/Paragraph'
import Section from '../components/Section'

const LangHeader = ({ text }: { text: string }) => <h3 className='text-lg font-semibold text-gray-800'>{text}</h3>

const Skillset = () => (
  <Section header='Skillset'>
    <>
      <Paragraph>
        Proficiency in macOS, GNU/Linux, and Windows development environments.
        Preference for working in *nix OSes.
      </Paragraph>
      <Paragraph>
        Below is a non-exhaustive list of programming languages that I have used in academic or
        professional settings.
      </Paragraph>
      <div className='flex mt-6'>
        <div className='w-1/2'>
          <LangHeader text='Fluent' />
          <ul className='list-square pl-4'>
            <li>JavaScript/TS</li>
            <li>Golang</li>
            <li>Bash</li>
          </ul>
        </div>
        <div className='w-1/2'>
          <LangHeader text='Familiar/Rusty' />
          <ul className='list-square pl-4'>
            <li>Java</li>
            <li>C#</li>
            <li>C++</li>
          </ul>
        </div>
      </div>
    </>
  </Section>
)

export default Skillset