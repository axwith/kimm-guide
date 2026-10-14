import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kimm.axwith.com'),
  title: '한국기계연구원 Claude Code 활용 교육 — 실습 안내',
  description:
    '한국기계연구원 Claude Code 활용 교육(2026-10-15) 참가자용 실습 안내. 실습 폴더, 단계별 요청문, 링크, 강의 자료.',
  keywords: 'Claude Code, 클로드코드, 한국기계연구원, 연구 기획, 실습, AI',
  authors: [{ name: 'AXWITH' }],
  openGraph: {
    title: '한국기계연구원 Claude Code 활용 교육 — 실습 안내',
    description: '한국기계연구원 Claude Code 활용 교육(2026-10-15) 참가자용 실습 안내. 실습 폴더, 단계별 요청문, 링크, 강의 자료.',
    url: 'https://kimm.axwith.com',
    siteName: 'KIMM 실습 안내',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '한국기계연구원 Claude Code 활용 교육 — 실습 안내',
    description: '한국기계연구원 Claude Code 활용 교육(2026-10-15) 참가자용 실습 안내. 실습 폴더, 단계별 요청문, 링크, 강의 자료.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <Script src="/theme-init.js" strategy="beforeInteractive" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
