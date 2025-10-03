import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "PrinceExt — Browser Extension",
      description:
        "Most‑rated productivity extension. Smart shortcuts, quick search, and focus tools. Built with TypeScript, React, and Manifest V3.",
      image: "/o.png",
      technologies: ["TypeScript", "React", "Manifest V3"],
      liveUrl: "https://github.com/prince-up/PrinceExt#readme",
      githubUrl: "https://github.com/prince-up/PrinceExt",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard. Built with modern technologies for scalability and performance.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      image: "/task-management-dashboard.png",
      technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "A comprehensive weather analytics platform that aggregates data from multiple sources and provides detailed insights with interactive visualizations.",
      image: "/weather-analytics-dashboard-with-charts.jpg",
      technologies: ["Vue.js", "Python", "FastAPI", "MongoDB", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Social Media API",
      description:
        "A RESTful API for a social media platform with features like user management, posts, comments, and real-time notifications.",
      image: "/api-documentation-interface.png",
      technologies: ["Express.js", "MongoDB", "Socket.io", "JWT", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Some of my recent work that showcases my skills and passion
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}

                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/90 border-white text-gray-900 hover:bg-white"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 transition-all duration-300"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
