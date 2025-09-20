import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Healthee – Efficient Appointment & Patient Management',
  description:
    'Healthee is a smart healthcare appointment manager for clinics and hospitals. Schedule appointments, manage patients, and get timely email notifications.',
  keywords: [
    'Healthee',
    'appointment manager',
    'patient management',
    'clinic software',
    'healthcare dashboard',
    'email notifications',
  ],
  authors: [{ name: 'Healthee', url: 'https://suvigya-healthee.vercel.app/' }],
  creator: 'Healthee',
  themeColor: '#0F172A',
  openGraph: {
    title: 'Healthee – Efficient Appointment & Patient Management',
    description:
      'Schedule appointments, manage patients, and get timely email notifications with Healthee.',
    url: 'https://suvigya-healthee.vercel.app/',
    siteName: 'Healthee',
    images: [
      {
        url: 'https://suvigya-healthee.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Healthee Appointment Manager',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthee – Efficient Appointment & Patient Management',
    description:
      'Schedule appointments, manage patients, and get timely email notifications with Healthee.',
    images: ['https://suvigya-healthee.vercel.app/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-dark-300 font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
