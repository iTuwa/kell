import type { ReactNode } from 'react'
import Script from 'next/script'
import './globals.css'

export const metadata = {
  title: 'OpenSea.io',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="/utilkit-5.8.9.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
