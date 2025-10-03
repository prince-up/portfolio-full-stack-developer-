"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

// Custom analytics tracker for additional insights
export function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page views
    if (typeof window !== "undefined") {
      // Custom analytics tracking
      console.log("[Analytics] Page view:", pathname)

      // Track scroll depth
      let maxScroll = 0
      const trackScrollDepth = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
        )
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent
          // Track milestone scroll depths
          if (maxScroll >= 25 && maxScroll < 50) {
            console.log("[Analytics] Scroll depth: 25%")
          } else if (maxScroll >= 50 && maxScroll < 75) {
            console.log("[Analytics] Scroll depth: 50%")
          } else if (maxScroll >= 75 && maxScroll < 100) {
            console.log("[Analytics] Scroll depth: 75%")
          } else if (maxScroll >= 100) {
            console.log("[Analytics] Scroll depth: 100%")
          }
        }
      }

      // Track time on page
      const startTime = Date.now()
      const trackTimeOnPage = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000)
        console.log("[Analytics] Time on page:", timeSpent, "seconds")
      }

      window.addEventListener("scroll", trackScrollDepth)
      window.addEventListener("beforeunload", trackTimeOnPage)

      return () => {
        window.removeEventListener("scroll", trackScrollDepth)
        window.removeEventListener("beforeunload", trackTimeOnPage)
      }
    }
  }, [pathname])

  return null
}
