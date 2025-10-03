"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface IntersectionObserverProps {
  children: React.ReactNode
  className?: string
  animationClass?: string
  threshold?: number
  delay?: number
}

export function IntersectionObserver({
  children,
  className = "",
  animationClass = "animate-slide-in-bottom",
  threshold = 0.1,
  delay = 0,
}: IntersectionObserverProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, delay])

  return (
    <div ref={ref} className={`${className} ${isVisible ? animationClass : "opacity-0"}`}>
      {children}
    </div>
  )
}
