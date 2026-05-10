import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LinkProvider } from '@/contexts/LinkProvider/LinkProvider'
import Navbar from '@/components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

const BASE_URL = 'https://mujtabaalidev.vercel.app'

export const metadata: Metadata = {
  viewport: 'width=device-width, initial-scale=0.41, maximum-scale=1',
  metadataBase: new URL(BASE_URL),
  title: 'Mujtaba Ali — Full Stack Developer',
  description:
    'Full Stack Developer based in Islamabad, Pakistan. Building production-grade web apps with Next.js, TypeScript, React, and Node.js. Currently at RedCoast.',
  keywords: [
    'Mujtaba Ali',
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'TypeScript',
    'Web Developer',
    'Software Engineer',
    'Islamabad',
    'Pakistan',
    'Frontend Developer',
    'Backend Developer',
  ],
  authors: [{ name: 'Mujtaba Ali', url: 'https://github.com/mujtabadustox' }],
  creator: 'Mujtaba Ali',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Mujtaba Ali',
    title: 'Mujtaba Ali — Full Stack Developer',
    description:
      'Full Stack Developer based in Islamabad, Pakistan. Building production-grade web apps with Next.js, TypeScript, and React.',
  },
  twitter: {
    card: 'summary',
    title: 'Mujtaba Ali — Full Stack Developer',
    description:
      'Full Stack Developer based in Islamabad, Pakistan. Building production-grade web apps with Next.js, TypeScript, and React.',
    creator: '@mujtabazoroark',
  },
  alternates: {
    canonical: BASE_URL,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mujtaba Ali',
  jobTitle: 'Full Stack Developer',
  url: BASE_URL,
  email: 'mujtabazoroark@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Islamabad',
    addressCountry: 'PK',
  },
  sameAs: [
    'https://github.com/mujtabadustox',
    'https://www.linkedin.com/in/mujtabaali01/',
    'https://medium.com/@mujtabazoroark',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'FAST NUCES',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'RedCoast',
  },
  knowsAbout: [
    'React.js', 'Next.js', 'TypeScript', 'Node.js',
    'TailwindCSS', 'PostgreSQL', 'MongoDB', 'AWS',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LinkProvider>
          <div className="flex-row bg-black">
            <div className="w-full text-white sticky top-8">
              <Navbar />
            </div>
            <div className="min-h-[calc(100dvh)]">{children}</div>
          </div>
        </LinkProvider>
      </body>
    </html>
  )
}
