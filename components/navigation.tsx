import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <Image src="/prodesk-logo.png" alt="ProDesk Solutions" width={180} height={80} className="h-10 md:h-12 w-auto" />
        </Link>
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="/#services" className="text-sm text-gray-300 hover:text-pink-500 transition-colors font-medium">
            Services
          </Link>
          <Link href="/#how-it-works" className="text-sm text-gray-300 hover:text-pink-500 transition-colors font-medium">
            How It Works
          </Link>
          <Link href="/#why-prodesk" className="text-sm text-gray-300 hover:text-pink-500 transition-colors font-medium">
            Why Prodesk
          </Link>
          <Link href="/contact" className="text-sm text-gray-300 hover:text-pink-500 transition-colors font-medium">
            Contact
          </Link>
          <Link href="/contact">
            <Button size="sm" className="font-semibold whitespace-nowrap bg-pink-600 hover:bg-pink-500 hover:shadow-lg hover:shadow-pink-600/30">
              Schedule a Call
            </Button>
          </Link>
        </div>
        <Link href="/contact" className="md:hidden shrink-0">
          <Button size="sm" className="font-semibold text-xs px-3 h-9 bg-pink-600 hover:bg-pink-500">
            Call
          </Button>
        </Link>
      </div>
    </nav>
  )
}
