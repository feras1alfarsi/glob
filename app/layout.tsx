import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Orbital.io',
  description: 'Connect to the Future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white">{children}</body>
    </html>
  )
}