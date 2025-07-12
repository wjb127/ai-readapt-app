import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Readapt AI - Your Personalized AI Reading Coach',
  description: '매일 5분, AI가 생성하는 맞춤형 영어 독해 훈련으로 꾸준한 영어 읽기 습관을 만들어보세요.',
  keywords: ['영어', '독해', 'AI', '학습', '영어공부', '리딩'],
  authors: [{ name: 'Readapt AI Team' }],
  openGraph: {
    title: 'Readapt AI - Your Personalized AI Reading Coach',
    description: '매일 5분, AI가 생성하는 맞춤형 영어 독해 훈련으로 꾸준한 영어 읽기 습관을 만들어보세요.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        {/* Google Ads (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17182549720"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17182549720');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 