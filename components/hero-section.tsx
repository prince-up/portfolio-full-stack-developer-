"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95"></div>
      <div className="absolute inset-0 bg-[url('/subtle-tech-circuit-pattern-dark-background.jpg')] bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`mb-8 ${isLoaded ? "animate-scale-in" : "opacity-0"}`}>
            <div className="relative inline-block">
              <div className="w-36 h-36 mx-auto mb-6 rounded-full p-[3px] bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src="/professional-developer-headshot.jpg"
                    alt="Developer Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20"></div>
            </div>
          </div>

          <h1
            className={`text-5xl md:text-7xl font-extrabold mb-6 text-balance bg-gradient-to-r from-purple-300 via-white to-pink-300 bg-clip-text text-transparent drop-shadow-xl ${
              isLoaded ? "animate-slide-in-bottom delay-200" : "opacity-0"
            }`}
          >
            Full Stack Developer
          </h1>

          <p
            className={`text-xl md:text-2xl text-white/80 mb-10 text-balance max-w-3xl mx-auto leading-relaxed ${
              isLoaded ? "animate-slide-in-bottom delay-400" : "opacity-0"
            }`}
          >
            Building modern web applications with passion for clean code and exceptional user experiences
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${isLoaded ? "animate-slide-in-bottom delay-600" : "opacity-0"}`}
          >
            <Button
              size="lg"
              className="gap-2 bg-purple-600 hover:bg-purple-700 text-white border-0 shadow-lg hover:shadow-purple-500/40 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover-lift ring-1 ring-purple-400/30"
              onClick={scrollToContact}
            >
              <Mail className="h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 hover-lift backdrop-blur-sm"
              onClick={scrollToProjects}
            >
              <Github className="h-5 w-5" />
              View Projects
            </Button>
          </div>

          <div className={`flex justify-center gap-6 ${isLoaded ? "animate-slide-in-bottom delay-800" : "opacity-0"}`}>
            {[
              { href: "https://github.com/prince-up", icon: Github },
              { href: "https://www.linkedin.com/in/prince-yadav-4t/", icon: Linkedin },
              { href: "mailto:princeyadav76001@gmail.com", icon: Mail },
            ].map((social, index) => {
              const IconComponent = social.icon
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-white/10 backdrop-blur-sm hover-lift"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <IconComponent className="h-6 w-6" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover-lift">
            <ArrowDown className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  )
}
