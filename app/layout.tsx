import "./globals.css";

import type { Metadata } from "next";
import { ReactNode } from "react";
import { Manrope, Work_Sans } from "next/font/google";

import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";
import { siteUrl, siteUrlObj } from "@/lib/site";
// import { WhatsAppWidget } from "@/components/whatsapp-widget";

const headingFont = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  display: "swap"
});

const bodyFont = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: siteUrlObj,
  title: {
    default: "Corallo Digital - Digital Systems Ecosystem",
    template: "%s | Corallo Digital"
  },
  description:
    "Corallo Digital builds and operates owned digital systems across analytics, operations, and compliance.",
  openGraph: {
    title: "Corallo Digital - Digital Systems Ecosystem",
    description:
      "Corallo Digital builds and operates owned digital systems across analytics, operations, and compliance.",
    url: siteUrl,
    siteName: "Corallo Digital",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Corallo Digital - Digital Systems Ecosystem",
    description:
      "Corallo Digital builds and operates owned digital systems across analytics, operations, and compliance.",
    creator: "@corallodigital"
  },
  keywords: [
    "digital systems",
    "analytics platforms",
    "operational tooling",
    "compliance systems",
    "product ecosystem"
  ],
  authors: [{ name: "Corallo Digital" }],
  icons: {
    icon: "/images/cds_favicon.png",
    shortcut: "/images/cds_favicon.png"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-bg font-body text-[color:var(--text-primary)] transition-colors duration-300">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-secondary focus:px-5 focus:py-2 focus:text-inverse focus:shadow-strong"
        >
          Skip to content
        </a>
        <NavBar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        {/* <WhatsAppWidget
          phone="919398219300"
          message="Hi Corallo Digital team, I have a question about your systems."
        /> */}
      </body>
    </html>
  );
}

