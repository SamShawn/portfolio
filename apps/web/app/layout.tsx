import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { profile } from '@/data/profile'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.title}`,
  description: profile.subtitle,
  metadataBase: new URL(profile.siteUrl),
  openGraph: {
    title: `${profile.name} · ${profile.title}`,
    description: profile.subtitle,
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary',
    title: `${profile.name} · ${profile.title}`,
    description: profile.subtitle,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.title,
  email: profile.email,
  url: profile.siteUrl,
  sameAs: [profile.github],
  address: {
    '@type': 'PostalAddress',
    addressLocality: profile.location,
  },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-white text-neutral-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
