import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Users, Headphones, CheckCircle2, Target, TrendingUp, Sparkles } from "lucide-react"

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
            <span className="text-sm text-primary font-medium">Clarity before execution</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            Hire the Right People.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              Reduce Your Operational Load.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed text-pretty">
            ProDesk Solutions helps businesses find talent that fits and offload work that drains focus. We prioritize
            understanding your business, not algorithms.
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

      {/* What We Do Section */}
      <section id="services" className="py-20 px-6 bg-card/30 backdrop-blur-sm relative wave-accent overflow-hidden">
        <div className="wave-side-left" />
        <div className="wave-side-right" />
        <div className="line-pattern" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Two focused services. No fluff. Just reliable execution.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground mb-4">Recruitment</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We find people who actually fit your team and culture. No keyword matching. No resume spam. Just
                thoughtful candidate selection based on what your business truly needs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Deep understanding of your business and culture</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Fit-first candidate evaluation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Quality over quantity approach</span>
                </li>
              </ul>
            </Card>
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground mb-4">Virtual Assistance</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Get operational work off your plate. From admin tasks to customer support, we provide reliable virtual
                assistants who understand execution and accountability.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Administrative and operational support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Customer service and communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">Cost-efficient, reliable execution</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent process designed around understanding your needs first.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 text-foreground font-semibold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Discovery Call</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We start by understanding your business, your team dynamics, and the specific challenges you're
                  facing. This isn't a sales pitch—it's a real conversation about what you need.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center shrink-0 text-foreground font-semibold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Custom Strategy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We build a tailored approach based on your requirements. Whether it's recruitment or virtual
                  assistance, we map out a clear plan that fits your timeline and budget.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shrink-0 text-foreground font-semibold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Execution & Delivery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We source, vet, and present candidates or deploy virtual assistants who meet your standards. No
                  filler. No false promises. Just focused work that gets you results.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shrink-0 text-foreground font-semibold">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Ongoing Partnership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We stay engaged to ensure everything works as expected. We're here for the long term, ready to adjust
                  and support as your needs evolve.
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why ProDesk</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're different because we care about fit, not just filling roles.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border text-center hover:border-accent/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Fit-First Hiring</h3>
              <p className="text-muted-foreground leading-relaxed">
                We prioritize cultural and operational fit over resumes. The right person for your team matters more
                than the perfect CV.
              </p>
            </Card>
            <Card className="p-8 bg-card border-border text-center hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Focused Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                We do two things well: recruitment and virtual assistance. No sprawling service menus. No distractions.
                Just expertise where it counts.
              </p>
            </Card>
            <Card className="p-8 bg-card border-border text-center hover:border-secondary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Long-Term Mindset</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're not here for quick wins. We build partnerships that last, supporting your business as it grows and
                changes over time.
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About ProDesk</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              ProDesk Solutions was built on a simple belief: hiring and operational support shouldn't be transactional.
              They should be thoughtful, human processes that prioritize long-term success over quick fixes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We work with founders, operators, and growing teams who value clarity, fit, and execution. Our approach is
              grounded in understanding your business first—not pushing templated solutions or chasing metrics that
              don't matter.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you need to hire the right people or offload operational work, we're here to deliver reliable,
              cost-efficient results. No buzzwords. No hype. Just a partner who gets the work done.
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Work Together?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's talk about how ProDesk can help you hire better and work smarter.
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
