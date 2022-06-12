import lottie, { AnimationItem } from 'lottie-web'
import { useEffect, useRef } from 'react'

import animationData from '../public/hoverboard.json'
import AspectRatioBox from './AspectRatioBox'

export default function Hoverboard() {
  const containerRef = useRef(null)
  const animation = useRef<AnimationItem>()

  useEffect(() => {
    if (!containerRef.current) return

    let _animation: AnimationItem | undefined

    animation.current = lottie.loadAnimation({
      container: containerRef.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    })

    _animation = animation.current

    return () => {
      _animation?.destroy()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '100%' }}
      onClick={() => {
        if (animation.current?.isPaused) {
          animation.current?.play()
        } else {
          animation.current?.pause()
        }
      }}
    />
  )
}

export const PlaceHolderWrapper = ({ children }) => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <AspectRatioBox ratio={360 / 420} />
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
        {children}
      </div>
    </div>
  )
}
