import Section from '../components/Section'

const LangHeader = ({ text }: { text: string }) => <h3 className='text-lg font-semibold text-gray-500'>{text}</h3>
const Skillset = () => (
  <Section header='Skillset'>
    <>
      <p>
        Proficiency in macOS, GNU/Linux, and Windows development environments.
        Preference for working in *nix OSes.
      </p>
      <p>
        Below is a non-exhaustive list of fluent and familiar programming languages that I have used in academic or
        professional settings.
      </p>
      <div className='flex mt-6'>
        <div className='w-1/2'>
          <LangHeader text='Fluent' />
          <ul className='list-square pl-4'>
            <li>JavaScript</li>
            <li>Golang</li>
            <li>Bash</li>
          </ul>
        </div>
        <div className='w-1/2'>
          <LangHeader text='Familiar/Rusty' />
          <ul className='list-square pl-4'>
            <li>Java</li>
            <li>Python</li>
            <li>C++</li>
          </ul>
        </div>
      </div>
    </>
  </Section>
)

export default Skillset