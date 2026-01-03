import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Image
              src="/prodesk-logo.png"
              alt="ProDesk Solutions"
              width={180}
              height={80}
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              Focused recruitment and virtual assistance for businesses that value fit, clarity, and execution.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/recruitment"
                  className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                >
                  Recruitment Services
                </Link>
              </li>
              <li>
                <Link
                  href="/recruitment"
                  className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                >
                  Recruitment Consultancy
                </Link>
              </li>
              <li>
                <Link
                  href="/recruitment"
                  className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                >
                  Hiring Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ProDesk Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
