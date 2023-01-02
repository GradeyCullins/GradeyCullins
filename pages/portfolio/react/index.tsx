import { useEffect } from 'react'

const React = () => {
  useEffect(() => {
    console.log('mounted')
  })

  return (
    <p>react port</p>
  )
}

export default React