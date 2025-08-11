import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import { cn } from '../lib/utils'
// import { KingOfKingWatermark } from '../components/KingOfKingWatermark'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BLACKTHORN D200 - 말레이시아산 최고급 품종 | JALAN DURIAN',
  description:
    'BLACKTHORN D200 프리미엄 블랙쏜. 말레이시아산 최고급 품종, made in malaysia. 333개 한정 런칭 예약',
  keywords: [
    'BLACKTHORN D200',
    '블랙쏜',
    '두리안',
    '말레이시아산',
    '최고급 품종',
    'made in malaysia',
    '프리미엄',
    '333개 한정',
    '런칭 예약',
  ],
  authors: [{ name: 'Jalan Durian' }],
  creator: 'Jalan Durian',
  publisher: 'Jalan Durian',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jalan-durian.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BLACKTHORN D200 - 말레이시아산 최고급 품종',
    description:
      'BLACKTHORN D200 프리미엄 블랙쏜. 말레이시아산 최고급 품종, made in malaysia. 333개 한정 런칭',
    url: 'https://jalan-durian.com',
    siteName: 'JALAN DURIAN',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BLACKTHORN D200 - 말레이시아산 최고급 품종 프리미엄 두리안',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BLACKTHORN D200 - 말레이시아산 최고급 품종',
    description:
      'BLACKTHORN D200 프리미엄 블랙쏜. 말레이시아산 최고급 품종, made in malaysia. 333개 한정 런칭',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    other: {
      'naver-site-verification': 'naver-verification-code',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          {/* <KingOfKingWatermark /> */}
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
