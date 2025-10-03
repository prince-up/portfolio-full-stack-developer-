
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Award,
  Trophy,
  Star,
  ExternalLink,
  Calendar,
  Users,
  Code,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Globe,
  Linkedin,
} from "lucide-react"

const certifications = [
  {
    id: 1,
    title: "Full-Stack Development",
    issuer: "Cipher Schools",
    date: "July 2025",
    credentialId: "CSW2025-15111",
    verifyUrl: "#",
    description: "Comprehensive 70-hour training program in Full-Stack Development covering modern web technologies and frameworks",
    skills: ["Full-Stack Development", "Web Technologies", "Frontend", "Backend", "Database"],
    icon: <Code className="h-6 w-6" />,
    color: "from-orange-500 to-red-500",
    image: "/certificate-prince-yadav-patshala.jpg",
  },
  {
    id: 2,
    title: "React Native Mobile App Development",
    issuer: "GeeksforGeeks",
    date: "2025",
    credentialId: "df315fb979b5b23ff2fb2f0d428069f4",
    verifyUrl: "https://media.geeksforgeeks.org/courses/certificates/df315fb979b5b23ff2fb2f0d428069f4.pdf",
    description: "5-week self-paced course covering React Native mobile app development for cross-platform applications",
    skills: ["React Native", "Mobile Development", "Cross-Platform", "JavaScript", "Mobile UI"],
    icon: <Globe className="h-6 w-6" />,
    color: "from-green-500 to-emerald-500",
    image: "/certificate-1748330155374.jpg",
  },
  {
    id: 3,
    title: "DSA Training",
    issuer: "Programming Pathshala",
    date: "July 2025",
    credentialId: "PP-DSA-2025",
    verifyUrl: "#",
    description: "Intensive Data Structures and Algorithms training program covering fundamental computer science concepts",
    skills: ["Data Structures", "Algorithms", "Problem Solving", "Coding", "Computer Science"],
    icon: <Target className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
    image: "/certificate-screenshot-66.png",
  },
  {
    id: 4,
    title: "HACKHAZARDS '25 Participation",
    issuer: "The NAMESPACE Community",
    date: "April 2025",
    credentialId: "92d47330-3199-4014-a981-e83f69dbc556",
    verifyUrl: "https://verification.givemycertificate.com/v/92d47330-3199-4014-a981-",
    description: "Participated in the world's largest independent community-run hackathon with 17,000+ hackers across 25+ countries",
    skills: ["Hackathon", "Team Collaboration", "Innovation", "Problem Solving", "Community"],
    icon: <Trophy className="h-6 w-6" />,
    color: "from-purple-500 to-pink-500",
    image: "/certificate-mern-cipher.png",
  },
]

const achievements = [
  {
    id: 1,
    title: "Top Contributor",
    description: "250+ problem solved  at leetcode",
    // metric: "20+",
    label: "Reputation Points",
    icon: <Star className="h-8 w-8" />,
    color: "text-yellow-500",
  },
  {
    id: 2,
    title: "Open Source Impact",
    description: "Maintained 15+ open source projects with 10+ total GitHub stars",
    metric: "20+",
    label: "GitHub Stars",
    icon: <Code className="h-8 w-8" />,
    color: "text-purple-500",
  },
  {
    id: 3,
    title: "Performance Optimization",
    description: "Improved application performance by average 60% across multiple projects",
    metric: "60%",
    label: "Performance Gain",
    icon: <Zap className="h-8 w-8" />,
    color: "text-green-500",
  },
  {
    id: 4,
    title: "Team Leadership",
    description: "Successfully led and mentored 20+ developers across various projects",
    metric: "20+",
    label: "Developers Mentored",
    icon: <Users className="h-8 w-8" />,
    color: "text-blue-500",
  },
  {
    id: 5,
    title: "Project Success Rate",
    description: "Delivered 95% of projects on time and within budget over 4 years",
    metric: "95%",
    label: "Success Rate",
    icon: <Trophy className="h-8 w-8" />,
    color: "text-orange-500",
  },
  {
    id: 6,
    title: "Revenue Growth",
    description: "Contributed to $2M+ revenue growth through technical innovations",
    metric: "$0M+",
    label: "Revenue Impact",
    icon: <TrendingUp className="h-8 w-8" />,
    color: "text-emerald-500",
  },
]

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-purple-900/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications & Achievements</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Professional certifications and key achievements that demonstrate my commitment to continuous learning and
            delivering exceptional results.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
            onClick={() => window.open('https://www.linkedin.com/in/prince-yadav/', '_blank')}
          >
            <Linkedin className="h-5 w-5" />
            View All Certificates on LinkedIn
          </Button>
        </div>

        {/* Certifications Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, idx) => (
              <Card
                key={cert.id}
                className="group hover-lift animate-fade-in-up transition-all duration-300 overflow-hidden bg-gradient-to-b from-slate-900/0 to-slate-900/0 dark:from-slate-800/30 dark:to-slate-900/30 border border-slate-200/50 dark:border-slate-700/60"
                style={{ animationDelay: `${100 * (idx + 1)}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                
                {/* Certificate Image */}
                <div className="p-4 pb-0">
                  <a href={cert.image} target="_blank" rel="noopener noreferrer">
                    <div className="relative overflow-hidden rounded-xl p-[2px] bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-blue-500/40">
                      <div className="relative overflow-hidden rounded-[10px] bg-white dark:bg-white h-52 flex items-center justify-center">
                      <img
                        src={cert.image}
                        alt={`${cert.title} Certificate`}
                        className="max-h-full max-w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[0.5deg]"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.jpg';
                        }}
                      />
                      </div>
                    </div>
                  </a>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 bg-gradient-to-r ${cert.color} rounded-lg text-white shadow-md shadow-purple-500/20`}>{cert.icon}</div>
                      <div>
                        <CardTitle className="text-lg text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {cert.title}
                        </CardTitle>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400">
                      <Calendar className="h-4 w-4" />
                      <span className="font-semibold">{cert.date}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 dark:text-gray-300 mb-4">
                    {cert.description}
                  </CardDescription>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs hover:scale-105 transition-transform">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-sm text-gray-600 dark:text-gray-400">ID: {cert.credentialId}</div>
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent hover:bg-purple-600 hover:text-white transition-colors" asChild>
                      <a href={cert.image} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" />
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement) => (
              <Card
                key={achievement.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <CardContent className="p-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4 ${achievement.color}`}
                  >
                    {achievement.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h4>
                  <div className="mb-4">
                    <div className={`text-3xl font-bold ${achievement.color} mb-1`}>{achievement.metric}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{achievement.label}</div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200 dark:border-purple-700">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-12 w-12 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Continuous Learning Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I believe in staying current with technology trends and continuously expanding my skill set. Currently
                pursuing additional certifications in AI/ML and DevOps practices.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2">
                  Currently Learning: AI/ML
                </Badge>
                <Badge variant="outline" className="border-purple-600 text-purple-600 dark:text-purple-400 px-4 py-2">
                  Next: DevOps Certification
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
