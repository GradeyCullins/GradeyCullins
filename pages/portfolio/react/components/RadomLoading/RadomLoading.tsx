import { ReactElement } from 'react'
import { LottieOptions, useLottie } from 'lottie-react'
import animation from './animation.json'

export const RadomLoading = (): ReactElement => {
  const options: LottieOptions = {
    animationData: animation,
    loop: true,
    autoplay: true
  }

  const { View, setSpeed } = useLottie(options)
  setSpeed(1.5)

  return View
}
