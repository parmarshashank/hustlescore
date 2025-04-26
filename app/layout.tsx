import './globals.css'
import './landing.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HustleScore - Where Hustle Meets Opportunity',
  description: 'Transform your work history into your financial future with HustleScore. Connect gig workers with bank agents through data-driven credit opportunities.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
