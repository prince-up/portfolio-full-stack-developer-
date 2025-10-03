"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Star, GitFork, Eye, Calendar, Users, BookOpen, ExternalLink, TrendingUp, Activity } from "lucide-react"

// Mock GitHub data - in a real app, you'd fetch this from GitHub API
const githubStats = {
  profile: {
    username: "prince-up",
    name: "PRINCE YADAV",
    bio: "Full Stack Developer passionate about creating amazing web experiences",
    followers: 12,
    following: 567,
    publicRepos: 23,
    totalStars: 24,
    totalForks: 67,
    contributions: 5,
  },
  repositories: [
    {
      id: 0,
      name: "PrinceExt — Most Rated Browser Extension",
      description:
        "Privacy-first productivity extension with shortcuts, quick actions, and clean UI. Community-loved and actively maintained.",
      language: "TypeScript",
      stars: 512,
      forks: 48,
      watchers: 32,
      url: "https://github.com/prince-up/PrinceExt",
      topics: ["extension", "browser", "productivity", "typescript"],
    },
    {
      id: 1,
      name: "awesome-portfolio",
      description: "A modern, responsive portfolio built with Next.js and TypeScript",
      language: "TypeScript",
      stars: 4,
      forks: 12,
      watchers: 12,
      url: "https://github.com/prince-up/portfolio-full-stack-developer-",
      topics: ["nextjs", "typescript", "portfolio", "react"],
    },
    {
      id: 2,
      name: "react-component-library",
      description: "Reusable React components with Storybook documentation",
      language: "JavaScript",
      stars: 189,
      forks: 32,
      watchers: 8,
      url: "https://github.com/yourusername/react-component-library",
      topics: ["react", "components", "storybook", "ui"],
    },
    {
      id: 3,
      name: "Learning Managment System",
      description: "Occupied all features (attendence, exam, class monitring)",
      language: "Node.js",
      stars: 1,
      forks: 28,
      watchers: 15,
      url: "https://github.com/prince-up/LMS",
      topics: ["nodejs", "typescript", "api", "react"],
    },
    {
      id: 4,
      name: "Virtual-fitting Room",
      description: "Virtual Fitting room using PHP  AND  GEMINI (API)  TO USE OF AI",
      language: "PHP ",
      stars: 4,
      forks: 19,
      watchers: 6,
      url: "https://github.com/prince-up/virtual-fitting-romm-with-php-html-css-javascript",
      topics: ["php", "AI", "data-science", "web development"],
    },
  ],
  contributions: {
    totalContributions: 18,
    longestStreak: 4,
    currentStreak: 12,
    weeklyAverage: 3,
  },
}

const languageColors: { [key: string]: string } = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-500",
  "Node.js": "bg-green-500",
  Python: "bg-blue-600",
  React: "bg-cyan-500",
  Vue: "bg-green-400",
  Go: "bg-cyan-600",
  Rust: "bg-orange-600",
}

export function GitHubStats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="github-stats" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">GitHub Activity</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my open source contributions and development activity on GitHub
          </p>
        </div>

        {/* GitHub Profile Overview */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gray-900 dark:bg-gray-700 rounded-full">
                  <Github className="h-8 w-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl">@https://github.com/prince-up</CardTitle>
                  <CardDescription className="text-lg">{githubStats.profile.bio}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                    {githubStats.profile.publicRepos}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    Repositories
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">
                    {githubStats.profile.totalStars}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
                    <Star className="h-4 w-4" />
                    Total Stars
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                    {githubStats.profile.followers}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
                    <Users className="h-4 w-4" />
                    Followers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                    {githubStats.contributions.totalContributions}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
                    <Activity className="h-4 w-4" />
                    Contributions
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Repositories */}
        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Featured Repositories</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {githubStats.repositories.map((repo, index) => (
              <Card
                key={repo.id}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  isVisible ? "animate-in slide-in-from-bottom-4" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        {repo.name}
                      </CardTitle>
                      <CardDescription className="mt-2">{repo.description}</CardDescription>
                    </div>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={repo.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${languageColors[repo.language] || "bg-gray-500"}`}></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{repo.language}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {repo.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-4 w-4" />
                        {repo.forks}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {repo.watchers}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {repo.topics.slice(0, 4).map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contribution Stats */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Contribution Activity</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {githubStats.contributions.longestStreak}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Longest Streak (days)</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Activity className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {githubStats.contributions.currentStreak}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Current Streak (days)</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Calendar className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {githubStats.contributions.weeklyAverage}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Weekly Average</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20 border-gray-200 dark:border-purple-700">
            <CardContent className="p-8">
              <Github className="h-12 w-12 text-gray-900 dark:text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Explore My Code</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Check out my latest projects and contributions on GitHub. I'm always working on something new and
                exciting!
              </p>
              <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white">
                <a
                  href={`https://github.com/prince-up/}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Visit GitHub Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
