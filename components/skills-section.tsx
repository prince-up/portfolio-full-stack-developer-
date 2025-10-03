import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Server, Wrench } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"],
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Java", "Express.js", "FastAPI", "Spring Boot"],
      icon: Server,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Prisma"],
      icon: Database,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "AWS", "Vercel", "Git", "CI/CD", "Kubernetes"],
      icon: Wrench,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Technologies I work with to bring ideas to life</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm hover:rotate-1`}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="font-bold text-xl mb-4 text-gray-800">{category.title}</h3>

                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs bg-white/90 text-gray-700 hover:bg-white transition-colors duration-200 backdrop-blur-sm border border-gray-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
