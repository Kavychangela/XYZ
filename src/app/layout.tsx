import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

import { ThemeProvider } from '@/components/providers/ThemeProvider';

export const metadata: Metadata = {
  title: {
    default: 'PDS | Premium AI-Powered IT Solutions',
    template: '%s | PDS'
  },
  description: 'Pro Se Ra Ashutosh Pvt Ltd (PDS) is a leading IT company delivering futuristic AI agents, custom software, and innovative enterprise solutions.',
  keywords: ['PDS', 'Pro Se Ra Ashutosh', 'AI Agents', 'Software Development', 'IT Solutions', 'Enterprise Software', 'AI Consulting'],
  authors: [{ name: 'PDS Team' }],
  creator: 'PDS',
  metadataBase: new URL('https://pdstech.in'), // Defaulting to the known domain
  icons: {
    icon: '/PDSLogo.png',
    shortcut: '/PDSLogo.png',
    apple: '/PDSLogo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pdstech.in',
    siteName: 'PDS',
    title: 'PDS | Premium AI & IT Solutions',
    description: 'Transforming businesses with cutting-edge AI automation and expert software engineering. Explore the next generation of enterprise AI.',
    images: [
      {
        url: '/PDSLogo.png',
        width: 1200,
        height: 630,
        alt: 'PDS Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDS | AI-Powered Enterprise Solutions',
    description: 'Scaling innovation with custom AI brains and elite software development.',
    images: ['/PDSLogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

