import { useEffect, useState } from 'react'

export const Timers = () => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1)
    }, 1000)

    return () => clearInterval(timer)
  })

  return (
    <div>
      <h1>Time</h1>
      {time}
    </div>
  )
}