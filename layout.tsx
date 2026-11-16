import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MyContractr',
  description: 'Hire trusted contractors, fast.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
