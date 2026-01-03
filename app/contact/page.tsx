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
                href="mailto:client@prodesksolutions.in"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                client@prodesksolutions.in
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

          <ContactForm />
        </div>
      </div>

      <Footer />
    </div>
  )
}
