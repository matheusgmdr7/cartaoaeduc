import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aeduc',
  description: 'Aeduc',
  generator: 'Aeduc',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
