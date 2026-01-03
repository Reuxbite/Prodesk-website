import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Metadata } from "next"
import { ArrowRight, Users, Headphones, CheckCircle2, Target, TrendingUp, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Recruitment & Virtual Assistance | Prodesk Solutions",
  description: "Prodesk Solutions helps growing businesses hire better and operate smoothly. We offer recruitment consultancy and virtual assistance designed for clarity and consistency.",
  openGraph: {
    title: "Recruitment & Virtual Assistance | Prodesk Solutions",
    description: "Recruitment and virtual assistance designed to support growing businesses with clarity and consistency.",
    url: "https://prodesksolutions.in",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <Navigation />

      {/* HERO SECTION */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="wave-pattern" />
        <div className="wave-side-left" />
        <div className="wave-side-right" />
        <div className="line-pattern" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance leading-tight">
            Recruitment and operational support for growing teams
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We help businesses hire well and manage day-to-day work through recruitment and virtual assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="font-semibold">
                Schedule a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/#how-it-works">
              <Button size="lg" variant="outline" className="font-semibold">
                See How We Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO SECTION - Removed */}

      {/* WHAT WE DO SECTION */}
      <section className="py-20 px-6 bg-card/30 backdrop-blur-sm relative overflow-hidden">
        <div className="wave-side-left" />
        <div className="wave-side-right" />
        <div className="line-pattern" />
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-card-foreground mb-3">Recruitment</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Hire people who fit your business. We focus on understanding the role before sourcing candidates.
              </p>
              <Link href="/recruitment">
                <Button variant="outline" className="text-sm font-semibold">
                  Talk About Hiring
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </Link>
            </Card>
            <Card className="p-8 bg-card border-border hover:border-accent/50 transition-all">
              <Headphones className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-card-foreground mb-3">Virtual Assistance</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Reduce operational workload. Reliable virtual support for daily business tasks.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="text-sm font-semibold">
                  Explore VA Support
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - ULTRA SHORT */}
      <section id="how-it-works" className="py-20 px-6 relative overflow-hidden">
        <div className="wave-pattern" />
        <div className="wave-side-left" />
        <div className="wave-side-right" />
        <div className="line-pattern" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">How It Works</h2>
          <div className="space-y-8 mb-12">
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 text-white font-semibold text-sm">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Understand your needs</h3>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center shrink-0 text-white font-semibold text-sm">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Recruit or assign support</h3>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shrink-0 text-white font-semibold text-sm">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Ongoing assistance</h3>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" className="font-semibold">
                Start With a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY PRODESK */}
      <section className="py-20 px-6 bg-card/30 backdrop-blur-sm relative overflow-hidden">
        <div className="wave-side-left" />
        <div className="wave-side-right" />
        <div className="line-pattern" />
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Why Prodesk</h2>
          <div className="space-y-4 mb-12">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-muted-foreground">Fit-first approach</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-muted-foreground">Focused services</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-muted-foreground">Practical execution</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-muted-foreground">Long-term mindset</p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" className="font-semibold">
                See If We're a Fit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT - CUT HARD */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="wave-pattern" />
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Prodesk</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Prodesk Solutions supports businesses through thoughtful recruitment and reliable virtual assistance.
          </p>
          <Link href="/contact">
            <Button size="lg" className="font-semibold">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* FULL-WIDTH CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 relative overflow-hidden">
        <div className="wave-pattern" />
        <div className="wave-side-left" />
        <div className="wave-side-right" />
        <div className="line-pattern" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to build a stronger team without increasing overhead?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="font-semibold">
                Schedule a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
