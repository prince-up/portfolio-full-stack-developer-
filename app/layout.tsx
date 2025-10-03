import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { PageTransition } from "@/components/page-transition"
import "../styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://yourportfolio.com"),
  title: {
    default: "Your Name - Prince Yadav",
    template: "%s | Your Name - Prince Yadav",
  },
  description:
    "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and cloud technologies. View my projects, skills, and professional experience.",
  generator: "v0.app",
  applicationName: "Portfolio Website",
  referrer: "origin-when-cross-origin",
  keywords: [
    "full stack developer",
    "web developer",
    "react developer",
    "next.js developer",
    "node.js developer",
    "typescript developer",
    "javascript developer",
    "frontend developer",
    "backend developer",
    "portfolio",
    "software engineer",
    "web development",
    "responsive design",
    "API development",
    "database design",
    "cloud computing",
    "AWS",
    "vercel",
    "git",
    "agile development",
  ],
  authors: [{ name: "Prince Yadav", url: "https://yourportfolio.com" }],
  creator: "Prince Yadav",
  publisher: "Prince Yadav",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Your Name - Full Stack Developer Portfolio",
    description:
      "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and cloud technologies. View my projects, skills, and professional experience.",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Name - Prince Yadav",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Full Stack Developer Portfolio",
    description: "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and cloud technologies.",
    creator: "@yourusername",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Your Name",
              jobTitle: "Full Stack Developer",
              description:
                "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and cloud technologies.",
              url: "https://yourportfolio.com",
              sameAs: [
                "https://github.com/prince-up",
                "https://www.linkedin.com/in/prince-yadav-4t/",
                "https://twitter.com/yourusername",
              ],
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "AWS",
                "Docker",
                "PostgreSQL",
                "MongoDB",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "University of Technology",
              },
              worksFor: {
                "@type": "Organization",
                name: "TechCorp Solutions",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Phagwara",
                addressRegion: "Phagwara",
                addressCountry: "Punjab",
              },
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <PageTransition>{children}</PageTransition>
            <Analytics />
            <SpeedInsights />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
