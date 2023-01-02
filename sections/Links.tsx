import ListLink from '../components/ListLink'

export default () => (
  <div className='sticky top-4'>
    <p className='text-xl mb-2'>Links</p>
    <ul className='list-square text-lg pl-4'>
      <ListLink href='/resume' text='resumé' />
      <ListLink href='/portfolio' text='portfolio' />
      <ListLink
        href='https://www.linkedin.com/in/gradey-cullins-738b2045?trk=nav_responsive_tab_profile_pic'
        text='LinkedIn'
        blankTarget
      />
      <ListLink href='https://github.com/GradeyCullins' text='Github' blankTarget />
      <ListLink href='mailto:gradeycullins@gmail.com' text='email' />
    </ul>

  </div>
)