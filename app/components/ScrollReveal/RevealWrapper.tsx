'use client'
import {useRef, useEffect, createElement} from 'react'
import {reveal} from './reveal'
import cls from 'classnames'

type RevealWrapperType = {
  children: React.ReactNode
  component?: string
  className?: any
  origin?: string
  distance?: string
  duration?: number
  delay?: number
  easing?: string
  opacity?: number
  rotate?: {x: number; y: number; z: number}
  scale?: number
  cleanup?: boolean
  desktop?: boolean
  mobile?: boolean
  reset?: boolean
  useDelay?: string
  viewFactor?: number
  viewOffset?: {top: number; right: number; bottom: number; left: number}
}

const RevealWrapper: React.FC<RevealWrapperType> = ({
  children,
  component,
  className,
  origin,
  distance,
  duration,
  delay,
  reset,
  easing,
  opacity,
  rotate,
  scale,
  cleanup,
  desktop,
  mobile,
  useDelay,
  viewFactor,
  viewOffset,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const Origin = origin ?? reveal.origin
  const Distance = distance ?? reveal.distance
  const Duration = duration ?? reveal.duration
  const Reset = reset ?? reveal.reset
  const Easing = easing ?? reveal.easing
  const Opacity = opacity ?? reveal.opacity
  const Rotate = rotate ?? reveal.rotate
  const Scale = scale ?? reveal.scale
  const Cleanup = cleanup ?? reveal.cleanup
  const Desktop = desktop ?? reveal.desktop
  const Mobile = mobile ?? reveal.mobile
  const UseDelay = useDelay ?? reveal.useDelay
  const ViewFactor = viewFactor ?? reveal.viewFactor
  const ViewOffset = viewOffset ?? reveal.viewOffset

  const revealOptionProps = {
    origin: Origin,
    distance: Distance,
    duration: Duration,
    reset: Reset,
    easing: Easing,
    opacity: Opacity,
    rotate: Rotate,
    scale: Scale,
    cleanup: Cleanup,
    desktop: Desktop,
    mobile: Mobile,
    useDelay: UseDelay,
    viewFactor: ViewFactor,
    viewOffset: ViewOffset,
  }

  useEffect(() => {
    async function revElement() {
      const sr = (await require('scrollreveal')).default(reveal)
      // If you pass a custom scrollreveal object you need to specify at least the origin
      if (revealOptionProps.origin != null && ref.current) {
        sr.reveal(ref.current, revealOptionProps)
      } else if (ref.current) {
        // if you don't pass any props
        sr.reveal(ref.current)
      } else {
        console.warn("next-scroll doesn't apply to your element")
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    revElement()
  }, [])

  return createElement(
    component ?? 'div',
    {className: cls(className, 'load-hidden'), ref},
    children,
  )
}

export default RevealWrapper
