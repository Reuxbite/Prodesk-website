"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Clock } from "lucide-react"
import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { Metadata } from "next"

// Metadata for contact page
export const metadata: Metadata = {
  title: "Contact Prodesk | Recruitment Services",
  description: "Get in touch with Prodesk Solutions. We're here to discuss your recruitment needs and hiring support. Contact us today for a consultation.",
  canonical: "https://prodesksolutions.in/contact",
}

// Initialize EmailJS
emailjs.init("VMaj8LG1AkExs0Dzs")

export default function ContactPage() {
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
    <div className="min-h-screen relative">
      <Navigation />

      <div className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="wave-pattern" />
        <div className="wave-side-left" />
        <div className="wave-side-right" />
        <div className="line-pattern" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block border-4 border-foreground/80 px-16 py-8 mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-wider">CONTACT</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to start a conversation? Reach out and let's discuss how we can help your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 bg-card border-border text-center hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Email</h3>
              <a
                href="mailto:Prodesksolutions1710@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Prodesksolutions1710@gmail.com
              </a>
            </Card>
            <Card className="p-6 bg-card border-border text-center hover:border-accent/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Phone</h3>
              <a href="tel:+919321146067" className="text-muted-foreground hover:text-accent transition-colors">
                +91 9321146067
              </a>
            </Card>
            <Card className="p-6 bg-card border-border text-center hover:border-secondary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Office Hours</h3>
              <p className="text-muted-foreground">
                Mon - Fri
                <br />
                9:00 AM - 6:00 PM IST
              </p>
            </Card>
          </div>

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
        </div>
      </div>

      <Footer />
    </div>
  )
}
