"use client"
import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Send email directly to your inbox using FormSubmit (no backend needed)
      const response = await fetch("https://formsubmit.co/ajax/princeyadav76001@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New portfolio contact from ${formData.name}`,
          _template: "table",
          _captcha: "false",
          _autoresponse:
            "Thanks for reaching out! I received your message and will reply soon. — Prince",
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: "", email: "", message: "" })

        // Reset success state after 3 seconds
        setTimeout(() => setIsSuccess(false), 3000)
      }
    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-purple-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Let's discuss your next project or just say hello!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                  Let's Work Together
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                  want to say hi, I'll try my best to get back to you within 24 hours!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                    <div className="p-2 bg-purple-600 rounded-full">
                      <Mail className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">princeyadav76001@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                    <div className="p-2 bg-purple-600 rounded-full">
                      <Phone className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">+91 7986614646</span>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                    <div className="p-2 bg-purple-600 rounded-full">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">Phagwara, Punjab (INDIA) </span>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-2xl border-0 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-purple-600 dark:text-purple-400">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSuccess ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-600 mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="border-purple-200 focus:border-purple-400 focus:ring-purple-400 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
