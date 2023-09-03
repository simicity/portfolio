import './globals.css'
import type { Metadata } from 'next'
import GlowingCursor from './components/GlowingCursor'

export const metadata: Metadata = {
  title: 'Miho\'s Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body>
        <GlowingCursor />
        {children}
      </body>
    </html>
  )
}
