'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'

type CounterProps = {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}

export function Counter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1600
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString('fr-FR')

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
