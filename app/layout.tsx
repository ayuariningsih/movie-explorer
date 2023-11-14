import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Movie Explorer - Integrated with MovieDB API',
  description: 'Integrated with MovieDB API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body className="relative">
        {children}
      </body>
    </html>
  )
}
