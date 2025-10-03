"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp, Code2, Twitter, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Logo and description */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Portfolio</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Crafting digital experiences with passion and precision. Let's build something amazing together.
              </p>
            </div>

            {/* Quick links */}
            <div className="md:col-span-1">
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                {[
                  { href: "#about", label: "About Me" },
                  { href: "#skills", label: "Skills" },
                  { href: "#experience", label: "Experience" },
                  { href: "#projects", label: "Projects" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <button
                    key={link.href}
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="block text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="md:col-span-1">
              <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <p className="text-gray-300">princeyadav76001@gmail.com</p>
                <p className="text-gray-300">+91 7986614646</p>
                <p className="text-gray-300">Punjab , Phagwara ( INDIA)</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Social links */}
              <div className="flex gap-4">
                {[
                  { href: "https://github.com/prince-up", icon: Github, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/prince-yadav-4t/", icon: Linkedin, label: "LinkedIn" },
                  { href: "https://x.com/PrinceYada62215?t=7ESYfTYuaLE2lbNzkZTHXw&s=09", icon: Twitter, label: "Twitter" },
                  { href: "https://yourwebsite.com", icon: Globe, label: "Website" },
                  { href: "mailto:princeyadav76001@gmail.com", icon: Mail, label: "Email" },
                ].map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>

              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-300">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-400 fill-current animate-pulse" />
                <span> Prince </span>
              </div>

              {/* Back to top button */}
              <Button
                onClick={scrollToTop}
                size="sm"
                className="gap-2 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                variant="outline"
              >
                <ArrowUp className="h-4 w-4" />
                Back to Top
              </Button>
            </div>

            <div className="text-center mt-6 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400">© 2025 All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
