"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter, Mail, Globe, MessageCircle } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/prince-up",
    icon: Github,
    color: "hover:bg-gray-900 hover:text-white",
    description: "Open source projects and contributions",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/prince-yadav-4t/",
    icon: Linkedin,
    color: "hover:bg-blue-600 hover:text-white",
    description: "Professional network and career updates",
  },
  {
    name: "Twitter",
    url: "https://x.com/PrinceYada62215?t=7ESYfTYuaLE2lbNzkZTHXw&s=09",
    icon: Twitter,
    color: "hover:bg-blue-400 hover:text-white",
    description: "Tech thoughts and industry insights",
  },
  {
    name: "Email",
    url: "mailto:princeyadav76001@gmail.com",
    icon: Mail,
    color: "hover:bg-red-500 hover:text-white",
    description: "Direct contact for opportunities",
  },
  {
    name: "Portfolio",
    url: "https://yourwebsite.com",
    icon: Globe,
    color: "hover:bg-purple-600 hover:text-white",
    description: "Personal website and blog",
  },
  {
    name: "Discord",
    url: "https://discord.gg/princeyadav0507",
    icon: MessageCircle,
    color: "hover:bg-indigo-600 hover:text-white",
    description: "Community discussions and networking",
  },
]

export function SocialLinks() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Connect With Me</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's connect across different platforms. I'm always excited to discuss new opportunities, share knowledge,
            and collaborate on interesting projects.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {socialLinks.map((social) => {
            const IconComponent = social.icon
            return (
              <Card
                key={social.name}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-4 text-center">
                  <Button
                    asChild
                    variant="ghost"
                    size="lg"
                    className={`w-full h-auto flex-col gap-2 p-4 transition-all duration-300 ${social.color}`}
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      <IconComponent className="h-6 w-6" />
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  </Button>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-tight">{social.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Prefer a different platform? Feel free to reach out through any channel that works best for you!
          </p>
        </div>
      </div>
    </section>
  )
}
