// Schema.org structured data for SEO

export const recruitmentServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Recruitment Services",
  description:
    "Professional recruitment consultancy and hiring support for startups and growing businesses. We provide fit-based hiring approach with candidate sourcing and evaluation.",
  provider: {
    "@type": "Organization",
    name: "Prodesk Solutions",
    url: "https://prodesksolutions.in",
    telephone: "+919321146067",
    email: "Prodesksolutions1710@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceType: "Recruitment Consultancy",
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Prodesk Solutions",
  url: "https://prodesksolutions.in",
  logo: "https://prodesksolutions.in/favicon.png",
  description:
    "Prodesk Solutions provides recruitment services and hiring support for startups and growing businesses with a fit-first approach.",
  telephone: "+919321146067",
  email: "Prodesksolutions1710@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  sameAs: [
    // Add your social media URLs here
    // "https://www.linkedin.com/company/prodesk-solutions",
    // "https://www.instagram.com/prodesksolutions",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
    addressCountry: "IN",
  },
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes your recruitment approach different?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We don't start with resumes. We start with understanding the work. That helps us recommend candidates who make sense in practice, not just on paper.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work like a traditional recruitment agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not really. We work more like a consulting partner. Fewer roles, more involvement, and better clarity before hiring.",
      },
    },
    {
      "@type": "Question",
      name: "Do you only recruit in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We primarily support Indian businesses, but also help with remote roles depending on requirements.",
      },
    },
  ],
}
