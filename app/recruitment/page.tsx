"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Metadata } from "next"
import { ArrowRight, CheckCircle2 } from "lucide-react"

// Metadata for recruitment page
export const metadata: Metadata = {
  title: "Recruitment Services | Recruitment Consultancy | Prodesk Solutions",
  description: "Our recruitment services help startups and growing businesses hire thoughtfully. We offer recruitment consultancy with a fit-first approach to hiring. Learn about our recruitment process and how we source candidates.",
  openGraph: {
    title: "Recruitment Services | Prodesk Solutions",
    description: "Thoughtful recruitment consultancy for startups. We help you hire people who fit your team and culture.",
    url: "https://prodesksolutions.in/recruitment",
    type: "website",
  },
}

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      {/* Schema.org structured data for recruitment services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Recruitment Services",
            description:
              "Professional recruitment consultancy for startups and growing businesses. We provide fit-based hiring with candidate sourcing and evaluation.",
            provider: {
              "@type": "Organization",
              name: "Prodesk Solutions",
              url: "https://prodesksolutions.in",
              telephone: "+919321146067",
              email: "Prodesksolutions1710@gmail.com",
            },
            areaServed: "IN",
            serviceType: "Recruitment Consultancy",
          }),
        }}
      />
      
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What makes your recruitment approach different?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We don't start with resumes. We start with understanding the work. That helps us recommend candidates who make sense in practice, not just on paper.",
                },
              },
              {
                "@type": "Question",
                name: "Do you work like a traditional recruitment agency?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not really. We work more like a consulting partner. Fewer roles, more involvement, and better clarity before hiring.",
                },
              },
              {
                "@type": "Question",
                name: "Do you only recruit in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We primarily support Indian businesses, but also help with remote roles depending on requirements.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="wave-pattern" />
        <div className="wave-side-left" />
        <div className="wave-side-right" />
        <div className="line-pattern" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              Recruitment Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Hiring is one of the most important decisions a business makes, and also one of the easiest to get wrong.
            </p>
          </div>

          <Card className="p-10 bg-card border-border mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Prodesk Solutions offers recruitment services for businesses that want to hire carefully and deliberately. We focus on understanding your business, the role, and the working environment before sourcing candidates, so that the people you hire actually stay and perform.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most recruitment agencies focus on speed and placement numbers. We focus on understanding. We work more like a recruitment consultant than a placement agency—fewer roles, more questions, better outcomes.
            </p>
          </Card>

          <div className="flex items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-card/30 backdrop-blur-sm relative overflow-hidden">
        <div className="wave-side-left" />
        <div className="wave-side-right" />
        <div className="line-pattern" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How Our Recruitment Process Works</h2>
            <p className="text-lg text-muted-foreground">No rushed shortlists. No bulk resumes.</p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 text-foreground font-semibold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">We spend time understanding your business and the role</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This isn't a quick check-in. We want to know what the day-to-day really looks like, what challenges the person will face, and what success actually means in this position.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center shrink-0 text-foreground font-semibold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">We clarify expectations, responsibilities, and priorities</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We work with you to define what good looks like. What skills matter. What personality traits will fit your team. This clarity guides everything that comes next.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shrink-0 text-foreground font-semibold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">We source candidates who align with those requirements</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We look for people who match the profile we've developed, not just people with the right keywords on their resume. Quality over volume.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shrink-0 text-foreground font-semibold">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">We screen for fit, communication, and capability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We do practical screening to see if candidates can actually do the work and work well with your team. Then we present the strongest candidates to you.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center shrink-0 text-foreground font-semibold">
                5
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">We help you make a confident hiring decision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We support you through interviews, answer your questions, and help you choose someone you'll actually be happy to work with six months from now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="wave-pattern" />
        <div className="wave-side-left" />
        <div className="wave-side-right" />
        <div className="line-pattern" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Who This Is For</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-border">
              <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-3">Startups hiring early team members</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your first hires set the tone. We help you find people who align with your vision and culture from the beginning.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <CheckCircle2 className="h-6 w-6 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-3">Small teams without in-house recruiters</h3>
              <p className="text-muted-foreground leading-relaxed">
                You don't have an HR department. You need someone who understands your team and takes hiring seriously.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <CheckCircle2 className="h-6 w-6 text-secondary mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-3">Founders who want to hire thoughtfully</h3>
              <p className="text-muted-foreground leading-relaxed">
                You care about who joins your business. You're willing to invest time to get it right. We match that mindset.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-3">Businesses tired of resume-driven hiring</h3>
              <p className="text-muted-foreground leading-relaxed">
                You've had bad hires before. You know that a nice resume doesn't guarantee someone will actually work out.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-card/30 backdrop-blur-sm relative overflow-hidden">
        <div className="wave-side-left" />
        <div className="wave-side-right" />
        <div className="line-pattern" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Common Questions</h2>
          </div>

          <div className="space-y-8">
            <Card className="p-8 bg-card border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">What makes your recruitment approach different?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't start with resumes. We start with understanding the work. That helps us recommend candidates who make sense in practice, not just on paper. Most recruitment is keyword matching. We actually care about fit.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Do you work like a traditional recruitment agency?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Not really. We work more like a consulting partner. Fewer roles, more involvement, and better clarity before hiring. You'll talk to the same person throughout the process, not get shuffled between different team members.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Do you only recruit in India?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We primarily support Indian businesses, but also help with remote roles depending on requirements. If you're looking for someone to join your team, let's talk about what you need.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">How long does the recruitment process typically take?</h3>
              <p className="text-muted-foreground leading-relaxed">
                It depends on the role and how clear your requirements are going in. Most placements take 4-8 weeks from discovery to final decision. We focus on getting it right, not rushing it.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">What if we don't find the right person?</h3>
              <p className="text-muted-foreground leading-relaxed">
                We keep looking. We won't present someone to you just to fill the role. Our success is measured by whether the person actually works out six months later, not by how fast we can place someone.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="wave-pattern" />
        <div className="wave-side-left" />
        <div className="wave-side-right" />
        <div className="line-pattern" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Hire Better?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's talk about your hiring challenges and how we can help.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
