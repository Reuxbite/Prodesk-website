import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/prodesk-logo.png" alt="ProDesk Solutions" width={180} height={80} className="h-12 w-auto" />
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/#services" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
            Services
          </Link>
          <Link href="/#why-prodesk" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
            Why Prodesk
          </Link>
          <Link href="/#about" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
            Contact
          </Link>
          <Link href="/contact">
            <Button size="sm" className="font-semibold">
              Schedule a Call
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
