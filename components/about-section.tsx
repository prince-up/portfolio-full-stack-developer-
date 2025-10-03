import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Download, Coffee, Code2, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IntersectionObserver } from "@/components/intersection-observer"

export function AboutSection() {
  const stats = [
    { label: "Years Experience", value: "1+", icon: Code2 },
    { label: "Projects Completed", value: "20+", icon: CheckCircle },
    { label: "Happy Clients", value: "3+", icon: Users },
    { label: "Cups of Coffee", value: "10+", icon: Coffee },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <IntersectionObserver animationClass="animate-slide-in-top">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Passionate developer crafting digital experiences
            </p>
          </IntersectionObserver>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <IntersectionObserver animationClass="animate-slide-in-left" delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl transform rotate-3 opacity-20"></div>
                <img
                  src="/modern-office-developer-working.jpg"
                  alt="Developer at work"
                  className="relative rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500 hover-lift"
                />
              </div>
            </IntersectionObserver>

            <IntersectionObserver animationClass="animate-slide-in-right" delay={400}>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  I'm a passionate full stack developer with over{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400"> B.Tech 3rd year student </span> building
                  scalable web applications. I love turning complex problems into simple, beautiful solutions that
                  provide exceptional user experiences.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  My expertise spans both frontend and backend development, with a strong focus on modern technologies
                  like React, Node.js, and cloud platforms. I believe in writing{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">clean, maintainable code</span>{" "}
                  and following best practices.
                </p>

                <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 shadow-lg hover-lift">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-4 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      What I Do
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Full Stack Web Development",
                        "API Design & Development",
                        "Database Architecture",
                        "Cloud Infrastructure",
                        "Performance Optimization",
                        "UI/UX Implementation",
                      ].map((service, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <a href="https://drive.google.com/file/d/1NdkTtia4E3QO7BVFFJTFKQ2OpUNECZ2D/view?usp=drive_link" download > 
                <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover-lift">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
                </a>
              </div>
            </IntersectionObserver>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <IntersectionObserver key={index} animationClass="animate-scale-in" delay={index * 100}>
                  <Card className="text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover-lift">
                    <CardContent className="p-0">
                      <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-3">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </IntersectionObserver>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
