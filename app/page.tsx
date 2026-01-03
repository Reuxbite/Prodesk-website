import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Metadata } from "next"
import { ArrowRight, Users, Headphones, CheckCircle2, Target, TrendingUp, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Recruitment Services India | Prodesk Solutions",
  description: "Prodesk Solutions provides recruitment services for startups and growing businesses. We help you hire thoughtfully with a fit-first approach to recruitment and hiring support.",
  openGraph: {
    title: "Recruitment Services India | Prodesk Solutions",
    description: "Thoughtful recruitment services for startups and growing businesses. We help you hire people who fit.",
    url: "https://prodesksolutions.in",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="wave-pattern" />
        <div className="wave-side-left" />
        <div className="wave-side-right" />
        <div className="line-pattern" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Understanding before hiring</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            Recruitment built around how your business actually works
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed text-pretty">
            Most hiring problems don't come from lack of candidates. They come from poor role clarity and rushed decisions. We help businesses hire by first understanding the work, the team, and what success really looks like.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/#how-we-work">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 border-primary/20 hover:bg-primary/5 bg-transparent"
              >
                How We Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Prodesk Solutions provides recruitment support for startups and growing businesses that want to hire thoughtfully. We spend time understanding your business, the role, and the kind of person who will work well in your environment before we begin sourcing candidates.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            This approach helps reduce bad hires, saves time, and leads to stronger teams over the long term. Learn more about our <Link href="/recruitment" className="text-primary hover:text-primary/90 font-semibold">recruitment services and consultancy approach</Link>.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you're a startup hiring early team members or an established business needing hiring support, our recruitment consultancy can help.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="py-20 px-6 bg-card/30 backdrop-blur-sm relative wave-accent overflow-hidden">
        <div className="wave-side-left" />
        <div className="wave-side-right" />
        <div className="line-pattern" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Recruitment Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hiring the right person is rarely about speed or volume. It's about clarity.
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all">
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our recruitment services are designed to help businesses hire people who fit the role and the team, not just the job description. We work closely with you to understand what the role involves day to day, what kind of person will succeed in it, and what you expect in the long run.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 font-semibold">
                Only after that do we start sourcing and evaluating candidates.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Understanding the role and business context</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Targeted candidate sourcing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Practical screening based on real work, not keywords</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Shortlisting candidates who make sense, not just look good on paper</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Support through interviews and final hiring decisions</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how-we-work" className="py-20 px-6 relative overflow-hidden">
        <div className="wave-pattern" />
        <div className="wave-side-left" />
        <div className="wave-side-right" />
        <div className="line-pattern" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How Our Recruitment Process Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No rushed shortlists. No bulk resumes.
            </p>
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

      {/* Why Prodesk Section */}
      <section id="why-prodesk" className="py-20 px-6 bg-card/30 backdrop-blur-sm relative wave-accent overflow-hidden">
        <div className="wave-side-left" />
        <div className="wave-side-right" />
        <div className="line-pattern" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Work With Prodesk for Recruitment</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Many recruitment agencies focus on speed and volume. We focus on understanding.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Prodesk works more like a recruitment consultancy than a placement agency. We take fewer roles, ask more questions, and aim to help you make hiring decisions you won't regret six months later.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-border text-left hover:border-accent/50 transition-all">
              <CheckCircle2 className="h-6 w-6 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-3">We prioritize fit over fast placements</h3>
              <p className="text-muted-foreground leading-relaxed">
                Finding someone fast is easy. Finding someone who'll still be there, performing well, in a year is harder. That's what we focus on.
              </p>
            </Card>
            <Card className="p-8 bg-card border-border text-left hover:border-primary/50 transition-all">
              <CheckCircle2 className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-3">We take time to understand the business, not just the role</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your role doesn't exist in a vacuum. We want to know your business, your team, your culture. That context matters.
              </p>
            </Card>
            <Card className="p-8 bg-card border-border text-left hover:border-secondary/50 transition-all">
              <CheckCircle2 className="h-6 w-6 text-secondary mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-3">We work well with small teams and founders</h3>
              <p className="text-muted-foreground leading-relaxed">
                We get it. Every hire matters when you're small. We treat your hiring like it matters, because it does.
              </p>
            </Card>
            <Card className="p-8 bg-card border-border text-left hover:border-accent/50 transition-all">
              <CheckCircle2 className="h-6 w-6 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-3">We value long-term outcomes over short-term wins</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're not trying to hit a quota. We're trying to help you hire someone great who'll help your business grow.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative overflow-hidden">
        <div className="wave-pattern" />
        <div className="wave-side-left" />
        <div className="wave-side-right" />
        <div className="line-pattern" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Prodesk</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Prodesk Solutions was built on a simple belief: hiring shouldn't be transactional. It shouldn't be about resumes and keywords and speed. It should be thoughtful, human, and focused on helping you make decisions that actually work out.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We work with founders, operators, and growing teams who value clarity and care about getting it right. We don't have fancy marketing. We don't promise quick fixes. We ask good questions, do the work, and help you hire people who'll actually succeed in your business.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              That's it. No buzzwords. No hype. Just a partner who gets that hiring matters and does the work to get it right.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 relative overflow-hidden">
        <div className="wave-pattern" />
        <div className="wave-side-left" />
        <div className="wave-side-right" />
        <div className="line-pattern" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Hire Better?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's talk about how we can help you find people who actually fit your team.
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
