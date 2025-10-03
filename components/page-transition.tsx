"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { LoadingSpinner } from "./loading-spinner"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false)
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" className="mb-4" />
          <p className="text-muted-foreground animate-pulse">Loading portfolio...</p>
        </div>
      </div>
    )
  }

  return <div className={`animate-page-load ${isVisible ? "opacity-100" : "opacity-0"}`}>{children}</div>
}
