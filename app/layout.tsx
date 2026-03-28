import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Versity — Education That Adapts',
  description: 'Complete adaptive learning paths, assessments, and training — built by AI, personalized for every learner.',
  keywords: 'adaptive learning, AI education, personalized training, skills assessment, learning paths',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0a0a0f] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
