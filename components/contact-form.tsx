"use client"

import type React from "react"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Initialize EmailJS
emailjs.init("VMaj8LG1AkExs0Dzs")

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      await emailjs.send("service_yffaj6a", "template_ckhhv5j", {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
      })

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: "", email: "", company: "", message: "" })
      }, 3000)
    } catch (error) {
      console.error("EmailJS Error:", error)
      setError("Failed to send message. Please try again.")
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
    <Card className="max-w-2xl mx-auto relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-pink-500/20 p-6 md:p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-transparent opacity-0 group-hover:opacity-100"></div>
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
        {submitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
            <p className="text-gray-300">We'll get back to you within 24 hours.</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Error</h3>
            <p className="text-red-500 mb-4">{error}</p>
            <Button onClick={() => setError("")} className="font-semibold bg-pink-600 hover:bg-pink-500">
              Try Again
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-800/50 border border-slate-700 text-white placeholder-gray-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-800/50 border border-slate-700 text-white placeholder-gray-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company
              </label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-slate-800/50 border border-slate-700 text-white placeholder-gray-500"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full min-h-[150px] bg-slate-800/50 border border-slate-700 text-white placeholder-gray-500"
                placeholder="Tell us about your needs..."
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="w-full font-semibold bg-pink-600 hover:bg-pink-500 hover:shadow-lg hover:shadow-pink-600/50"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        )}
      </div>
    </Card>
  )
}
