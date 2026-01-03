import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Metadata } from "next"
import { ArrowRight, Users, Brain } from "lucide-react"

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
    <div className="min-h-screen relative bg-slate-950">
      <Navigation />

      {/* Animated background gradients */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-br from-pink-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="wave-pattern"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Recruitment and{" "}
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-300% bg-left-bottom">
                  Virtual Assistance
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Helping teams hire better and operate smoothly. Recruitment and virtual assistance designed to support growing businesses with clarity and consistency.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="h-12 px-8 text-base rounded-lg bg-pink-600 hover:bg-pink-500 hover:shadow-2xl hover:shadow-pink-600/50 transition-all duration-200"
                asChild
              >
                <Link href="/contact">
                  Schedule a Call <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base rounded-lg border border-purple-500/30 hover:border-pink-500 hover:bg-pink-600/10 transition-all duration-200"
                asChild
              >
                <Link href="#how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-16 md:mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Our Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Specialized solutions for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Recruitment Card */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-pink-500/20 hover:border-pink-500/50 p-8 md:p-10 transition-all duration-300 hover:shadow-lg hover:shadow-pink-600/20">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold">Recruitment</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Sourcing and placing top talent. We handle the entire recruitment process so you can focus on building your team.
                  </p>
                </div>
                <Link href="/recruitment" className="inline-flex items-center text-pink-500 hover:text-pink-400 font-medium group/link transition-colors">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>

            {/* Virtual Assistance Card */}
            <Card className="group relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/20 hover:border-pink-500/50 p-8 md:p-10 transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold">Virtual Assistance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Administrative support that scales with your business. From scheduling to operations, we've got you covered.
                  </p>
                </div>
                <button className="inline-flex items-center text-purple-400 hover:text-pink-500 font-medium group/link transition-colors">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-16 md:mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">How It Works</h2>
            <p className="text-gray-400 text-lg">Simple, efficient, results-driven</p>
          </div>

          <div className="space-y-8 md:space-y-10">
            {[
              {
                number: "01",
                title: "Discovery Call",
                description: "We understand your needs, challenges, and goals. A brief conversation to align on what success looks like."
              },
              {
                number: "02",
                title: "Customized Solution",
                description: "We design a tailored approach for your business. Whether recruitment or VA support, it's built for you."
              },
              {
                number: "03",
                title: "Implementation",
                description: "We get to work. Regular updates and clear communication throughout the entire process."
              }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 md:gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-lg bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PRODESK SECTION */}
      <section id="why-prodesk" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-16 md:mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Why Prodesk</h2>
            <p className="text-gray-400 text-lg">What sets us apart</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: "Expert Team", desc: "Experienced professionals who understand your industry" },
              { title: "Transparent", desc: "Clear communication and regular updates on progress" },
              { title: "Scalable", desc: "Solutions that grow with your business needs" },
              { title: "Reliable", desc: "Consistent, dependable support when you need it" }
            ].map((item, idx) => (
              <div key={idx} className="group p-6 md:p-8 rounded-lg border border-slate-700/50 hover:border-pink-500/50 bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300">
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mt-2 flex-shrink-0"></div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">About Prodesk</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're a modern service company built for businesses that demand efficiency and results. With expertise in recruitment and virtual operations, we're your partner in growth.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 via-transparent to-purple-600/10"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Let's discuss how we can help your team hire better and operate more efficiently.
            </p>
          </div>

          <Button
            size="lg"
            className="h-12 px-8 text-base rounded-lg bg-pink-600 hover:bg-pink-500 hover:shadow-2xl hover:shadow-pink-600/50 transition-all duration-200"
            asChild
          >
            <Link href="/contact">
              Schedule Your Call <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
