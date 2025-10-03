"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, Play, Code2, Terminal, Database, Globe } from "lucide-react"

const codeSnippets = [
  {
    id: 1,
    title: "React Hook for API Calls",
    description: "Custom hook for handling API requests with loading states",
    language: "typescript",
    icon: <Code2 className="h-5 w-5" />,
    category: "Frontend",
    code: `import { useState, useEffect } from 'react'

interface UseApiResult<T> {
  data: T | null
  loading: boolean
  error: string | null
  refetch: () => void
}

export function useApi<T>(url: string): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(url)
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`)
      }
      
      const result = await response.json()
      setData(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return { data, loading, error, refetch: fetchData }
}`,
  },
  {
    id: 2,
    title: "Express.js Middleware",
    description: "Authentication middleware with JWT validation",
    language: "javascript",
    icon: <Terminal className="h-5 w-5" />,
    category: "Backend",
    code: `const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ 
      error: 'Access token required' 
    })
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ 
        error: 'Invalid or expired token' 
      })
    }
    
    req.user = user
    next()
  })
}

// Usage in routes
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ 
    message: 'Access granted',
    user: req.user 
  })
})

module.exports = { authenticateToken }`,
  },
  {
    id: 3,
    title: "Database Query Builder",
    description: "Type-safe SQL query builder with TypeScript",
    language: "typescript",
    icon: <Database className="h-5 w-5" />,
    category: "Database",
    code: `interface QueryBuilder {
  select(columns: string[]): QueryBuilder
  from(table: string): QueryBuilder
  where(condition: string, value: any): QueryBuilder
  orderBy(column: string, direction?: 'ASC' | 'DESC'): QueryBuilder
  limit(count: number): QueryBuilder
  build(): string
}

class SQLQueryBuilder implements QueryBuilder {
  private query: {
    select: string[]
    from: string
    where: string[]
    orderBy: string
    limit: number | null
  }

  constructor() {
    this.query = {
      select: [],
      from: '',
      where: [],
      orderBy: '',
      limit: null
    }
  }

  select(columns: string[]): QueryBuilder {
    this.query.select = columns
    return this
  }

  from(table: string): QueryBuilder {
    this.query.from = table
    return this
  }

  where(condition: string, value: any): QueryBuilder {
    this.query.where.push(\`\${condition} = '\${value}'\`)
    return this
  }

  orderBy(column: string, direction: 'ASC' | 'DESC' = 'ASC'): QueryBuilder {
    this.query.orderBy = \`\${column} \${direction}\`
    return this
  }

  limit(count: number): QueryBuilder {
    this.query.limit = count
    return this
  }

  build(): string {
    let sql = \`SELECT \${this.query.select.join(', ')} FROM \${this.query.from}\`
    
    if (this.query.where.length > 0) {
      sql += \` WHERE \${this.query.where.join(' AND ')}\`
    }
    
    if (this.query.orderBy) {
      sql += \` ORDER BY \${this.query.orderBy}\`
    }
    
    if (this.query.limit) {
      sql += \` LIMIT \${this.query.limit}\`
    }
    
    return sql
  }
}

// Usage
const query = new SQLQueryBuilder()
  .select(['id', 'name', 'email'])
  .from('users')
  .where('status', 'active')
  .orderBy('created_at', 'DESC')
  .limit(10)
  .build()

console.log(query)
// Output: SELECT id, name, email FROM users WHERE status = 'active' ORDER BY created_at DESC LIMIT 10`,
  },
  {
    id: 4,
    title: "Next.js API Route",
    description: "RESTful API endpoint with error handling",
    language: "typescript",
    icon: <Globe className="h-5 w-5" />,
    category: "Full Stack",
    code: `import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Validation schema
const userSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  age: z.number().min(18).max(120)
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = userSchema.parse(body)
    
    // Simulate database operation
    const user = {
      id: Math.random().toString(36).substr(2, 9),
      ...validatedData,
      createdAt: new Date().toISOString()
    }
    
    // Return success response
    return NextResponse.json({
      success: true,
      data: user,
      message: 'User created successfully'
    }, { status: 201 })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        error: 'Validation failed',
        details: error.errors
      }, { status: 400 })
    }
    
    return NextResponse.json({
      success: false,
      error: 'Internal server error'
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')
  
  // Simulate database query
  const users = Array.from({ length: limit }, (_, i) => ({
    id: \`user_\${page}_\${i + 1}\`,
    name: \`User \${i + 1}\`,
    email: \`user\${i + 1}@example.com\`,
    createdAt: new Date().toISOString()
  }))
  
  return NextResponse.json({
    success: true,
    data: users,
    pagination: {
      page,
      limit,
      total: 100,
      pages: Math.ceil(100 / limit)
    }
  })
}`,
  },
]

export function CodeSnippetsSection() {
  const [activeSnippet, setActiveSnippet] = useState(codeSnippets[0])
  const [copiedId, setCopiedId] = useState<number | null>(null)

  const copyToClipboard = async (code: string, id: number) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error("Failed to copy code:", err)
    }
  }

  const categories = Array.from(new Set(codeSnippets.map((snippet) => snippet.category)))

  return (
    <section
      id="code-snippets"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Interactive Code Snippets</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my coding style and approach through these interactive examples showcasing full-stack development
            patterns and best practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Snippet List */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {categories.map((category) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{category}</h3>
                  <div className="space-y-2">
                    {codeSnippets
                      .filter((snippet) => snippet.category === category)
                      .map((snippet) => (
                        <Card
                          key={snippet.id}
                          className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                            activeSnippet.id === snippet.id
                              ? "ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-900/20"
                              : "hover:bg-gray-50 dark:hover:bg-gray-800"
                          }`}
                          onClick={() => setActiveSnippet(snippet)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">{snippet.icon}</div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{snippet.title}</h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{snippet.description}</p>
                                <Badge variant="secondary" className="mt-2 text-xs">
                                  {snippet.language}
                                </Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Display */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader className="border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">{activeSnippet.icon}</div>
                    <div>
                      <CardTitle className="text-lg">{activeSnippet.title}</CardTitle>
                      <CardDescription>{activeSnippet.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{activeSnippet.language}</Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(activeSnippet.code, activeSnippet.id)}
                      className="gap-2"
                    >
                      <Copy className="h-4 w-4" />
                      {copiedId === activeSnippet.id ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative">
                  <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-b-lg overflow-x-auto text-sm leading-relaxed">
                    <code>{activeSnippet.code}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5 text-purple-600" />
                Live Demo
              </CardTitle>
              <CardDescription>Try out this interactive example based on the selected code snippet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-purple-200 dark:border-purple-700">
                <div className="text-center py-8">
                  <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400">
                    <Terminal className="h-6 w-6" />
                    <span className="font-mono text-lg">Interactive demo coming soon...</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    This section will feature live, runnable examples of the code snippets above.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
