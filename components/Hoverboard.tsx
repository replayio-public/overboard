import lottie, { AnimationItem } from 'lottie-web'
import { useEffect, useRef } from 'react'

export function Hoverboard({ width, height }) {
  const containerRef = useRef(null)
  const animation = useRef<AnimationItem>()

  useEffect(() => {
    if (!containerRef.current) return

    let _animation: AnimationItem | undefined

    import(`../public/hoverboard.json`).then((animationData) => {
      animation.current = lottie.loadAnimation({
        container: containerRef.current!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData,
      })

      _animation = animation.current
    })

    return () => {
      _animation?.destroy()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ width, height }}
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
