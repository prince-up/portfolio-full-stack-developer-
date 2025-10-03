"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, Code2 } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#code-snippets", label: "Code Snippets" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 shadow-lg"
          : "bg-slate-900/80 dark:bg-slate-800/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-purple-600 dark:bg-purple-500 rounded-lg">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span
              className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-gray-900 dark:text-white" : "text-white"
              }`}
            >
              Prince.dev
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`transition-all duration-300 font-medium relative group text-sm ${
                  isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                    : "text-white hover:text-purple-300"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <ThemeToggle />
            <Button
              size="sm"
              className="gap-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="sm"
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled
                ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav
            className={`lg:hidden mt-4 pb-4 animate-in slide-in-from-top-2 duration-300 ${
              isScrolled ? "border-t border-gray-200 dark:border-gray-700" : "border-t border-white/20"
            }`}
          >
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left transition-colors duration-300 font-medium py-2 ${
                    isScrolled
                      ? "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                      : "text-white hover:text-purple-300"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <ThemeToggle />
                <Button
                  size="sm"
                  className="gap-2 w-fit bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
