"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Building2, GraduationCap, Award, Briefcase } from "lucide-react"

const timelineData = [
 
 
  {
    id: 3,
    type: "education",
    title: "Bachelor of Technology",
    company: "Lovely Professional University",
    location: "Punjab ",
    period: "2023 - 2027",
    description:
      "Graduated Magna Cum Laude with focus on Software Engineering and Database Systems. Active member of Computer Science Society.",
    achievements: [
      "GPA: 7.0/10.0",
      "Dean's List for 6 consecutive semesters",
      "Led university hackathon team to 1st place",
    ],
    technologies: ["Java", "Python", "C++", "SQL", "Data Structures", "Algorithms"],
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    id: 4,
    type: "certification",
    title: "AWS Certified Solutions Architect",
    company: "Amazon Web Services",
    location: "Online",
    period: "2021",
    description:
      "Comprehensive certification covering cloud architecture, security, and best practices for scalable applications.",
    achievements: [
      "Scored 890/1000 on certification exam",
      "Specialized in serverless architectures",
      "Implemented cost optimization strategies",
    ],
    technologies: ["AWS Lambda", "EC2", "S3", "RDS", "CloudFormation"],
    icon: <Award className="h-5 w-5" />,
  },
]

export function TimelineSection() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      case "education":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "certification":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Building2 className="h-4 w-4" />
      case "education":
        return <GraduationCap className="h-4 w-4" />
      case "certification":
        return <Award className="h-4 w-4" />
      default:
        return <CalendarDays className="h-4 w-4" />
    }
  }

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Journey</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My career progression and educational background in full-stack development, showcasing continuous learning
            and professional growth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block"></div>

            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div key={item.id} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-purple-500 rounded-full hidden md:block"></div>

                  {/* Content Card */}
                  <div className="md:ml-16">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-purple-500">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className={getTypeColor(item.type)}>
                                {getTypeIcon(item.type)}
                                <span className="ml-1 capitalize">{item.type}</span>
                              </Badge>
                            </div>
                            <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                              {item.title}
                            </CardTitle>
                            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mt-2">
                              <div className="flex items-center gap-1">
                                <Building2 className="h-4 w-4" />
                                <span className="font-medium">{item.company}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{item.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400 font-semibold">
                            <CalendarDays className="h-4 w-4" />
                            <span>{item.period}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <CardDescription className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                          {item.description}
                        </CardDescription>

                        {/* Key Achievements */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {item.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies & Skills:</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200 dark:border-purple-700">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready for the Next Challenge</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm always excited to take on new projects and collaborate with innovative teams. Let's build something
                amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 text-base">
                  Available for Opportunities
                </Badge>
                <Badge
                  variant="outline"
                  className="border-purple-600 text-purple-600 dark:text-purple-400 px-6 py-2 text-base"
                >
                  Open to Remote Work
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
