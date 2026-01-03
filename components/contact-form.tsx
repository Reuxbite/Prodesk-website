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
    <Card className="max-w-2xl mx-auto p-8 bg-card border-border">
      <h2 className="text-2xl font-bold text-card-foreground mb-6">Send Us a Message</h2>
      {submitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-card-foreground mb-2">Message Sent!</h3>
          <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
        </div>
      ) : error ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-card-foreground mb-2">Error</h3>
          <p className="text-red-500 mb-4">{error}</p>
          <Button onClick={() => setError("")} className="bg-primary hover:bg-primary/90">
            Try Again
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
              Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-background/50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
              Email *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-background/50"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-card-foreground mb-2">
              Company
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-background/50"
              placeholder="Your company name"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full min-h-[150px] bg-background/50"
              placeholder="Tell us about your needs..."
            />
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </Card>
  )
}
