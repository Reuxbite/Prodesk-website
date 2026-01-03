import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://prodesksolutions.in"),
  title: "Recruitment Services India | Prodesk Solutions",
  description:
    "Prodesk Solutions provides recruitment services for startups and growing businesses. We focus on hiring thoughtfully with a fit-first approach to recruitment consultancy.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://prodesksolutions.in",
    title: "Recruitment Services India | Prodesk Solutions",
    description: "Thoughtful recruitment services for startups and growing businesses. We help you hire people who fit.",
    images: [
      {
        url: "https://prodesksolutions.in/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Prodesk Solutions",
              url: "https://prodesksolutions.in",
              logo: "https://prodesksolutions.in/favicon.png",
              description: "Prodesk Solutions provides recruitment services for startups and growing businesses.",
              telephone: "+919321146067",
              email: "client@prodesksolutions.in",
              areaServed: "IN",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
