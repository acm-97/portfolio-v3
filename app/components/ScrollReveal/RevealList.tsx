'use client'
import {useRef, useEffect, createRef, Children, createElement, cloneElement} from 'react'
import {reveal} from './reveal'

type RevealListType = {
  children: React.ReactNode
  component?: string
  className?: any
  interval?: number
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

const RevealList: React.FC<RevealListType> = ({
  children,
  component,
  className,
  interval,
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
  const listRefs = useRef([]) as any

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

  const revealList: any = Children.map(children, (child: any) =>
    cloneElement(child, {
      ref: createRef(),
    }),
  )

  useEffect(() => {
    async function revElement() {
      const sr = (await require('scrollreveal')).default(reveal)
      const baseDelay: any = delay ?? 200
      const Interval = interval ?? 50
      revealList.forEach((e: any, index: number) => {
        listRefs[index] = e.ref
        const currentIntervalDelay = Interval * index
        if (listRefs[index].current) {
          sr.reveal(listRefs[index].current, {
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            delay: baseDelay + currentIntervalDelay,
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
          })
        }
      })
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    revElement()
  }, [])

  return createElement(component ?? 'div', {className}, revealList)
}

export default RevealList
