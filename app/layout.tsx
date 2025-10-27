import './globals.css';

import type { Metadata } from 'next';
import { ReactNode } from 'react';

import { Footer } from '@/components/footer';
import { NavBar } from '@/components/nav-bar';
import { WhatsAppWidget } from '@/components/whatsapp-widget';

export const metadata: Metadata = {
  metadataBase: new URL('https://corallo-digital.example.com'),
  title: {
    default: 'Corallo Digital - Full-Funnel Marketing Studio',
    template: '%s | Corallo Digital'
  },
  description:
    'Corallo Digital is a full-funnel digital marketing studio helping growth-stage brands scale with strategy, creative, and analytics.',
  openGraph: {
    title: 'Corallo Digital - Full-Funnel Marketing Studio',
    description:
      'Corallo Digital is a full-funnel digital marketing studio helping growth-stage brands scale with strategy, creative, and analytics.',
    url: 'https://corallo-digital.example.com',
    siteName: 'Corallo Digital',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corallo Digital - Full-Funnel Marketing Studio',
    description:
      'Corallo Digital is a full-funnel digital marketing studio helping growth-stage brands scale with strategy, creative, and analytics.',
    creator: '@corallodigital'
  },
  keywords: [
    'digital marketing agency',
    'growth marketing',
    'SEO services',
    'paid media',
    'content marketing',
    'demand generation'
  ],
  authors: [{ name: 'Corallo Digital' }]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-800 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <NavBar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget
          phone="919398219300"
          message="Hi Corallo Digital team, I would love to discuss a growth marketing engagement."
        />
      </body>
    </html>
  );
}
