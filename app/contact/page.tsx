import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Clock } from "lucide-react"
import { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"

// Metadata for contact page
export const metadata: Metadata = {
  title: "Contact Prodesk | Recruitment Services",
  description: "Get in touch with Prodesk Solutions. We're here to discuss your recruitment needs and hiring support. Contact us today for a consultation.",
  openGraph: {
    title: "Contact Prodesk | Recruitment Services",
    description: "Get in touch with Prodesk Solutions. We're here to discuss your recruitment needs and hiring support.",
    url: "https://prodesksolutions.in/contact",
    type: "website",
  },
}

export default function ContactPage() {

  return (
    <div className="min-h-screen relative bg-slate-950">
      <Navigation />

      {/* Animated background gradients */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 relative overflow-hidden">
        <div className="wave-pattern" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to start a conversation? Reach out and let's discuss how we can help your business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <Card className="group relative p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-pink-500/20 hover:border-pink-500/50 text-center transition-all duration-300 hover:shadow-lg hover:shadow-pink-600/20">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <div className="relative z-10 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mx-auto">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold">Email</h3>
                <a
                  href="mailto:client@prodesksolutions.in"
                  className="text-gray-300 hover:text-pink-500 transition-colors text-sm break-all"
                >
                  client@prodesksolutions.in
                </a>
              </div>
            </Card>

            <Card className="group relative p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/20 hover:border-pink-500/50 text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <div className="relative z-10 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold">Phone</h3>
                <a href="tel:+919321146067" className="text-gray-300 hover:text-pink-500 transition-colors text-sm md:text-base">
                  +91 9321146067
                </a>
              </div>
            </Card>

            <Card className="group relative p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-pink-500/20 hover:border-pink-500/50 text-center transition-all duration-300 hover:shadow-lg hover:shadow-pink-600/20">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <div className="relative z-10 space-y-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mx-auto">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold">Office Hours</h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Mon - Fri<br />
                  9:00 AM - 6:00 PM IST
                </p>
              </div>
            </Card>
          </div>

          <ContactForm />
        </div>
      </div>

      <Footer />
    </div>
  )
}
