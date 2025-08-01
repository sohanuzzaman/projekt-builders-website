import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  weight: ["300", "400", "600", "700"],
});



export const metadata: Metadata = {
  title: "Projekt Builders - Architectural Project Management",
  description: "Expert project management for architectural projects that prioritize functionality, sustainability, and timeless design. Specializing in residential, commercial, and hospitality projects across Melbourne.",
  keywords: "architectural project management, sustainable building, Melbourne, project coordination, construction management, design collaboration",
  authors: [{ name: "Georgina Louise" }],
  creator: "Projekt Builders",
  publisher: "Projekt Builders",
  metadataBase: new URL('https://projektbuilders.com.au'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Projekt Builders - Architectural Project Management", 
    description: "Expert project management for architectural projects that prioritize functionality, sustainability, and timeless design.",
    url: 'https://projektbuilders.com.au',
    siteName: 'Projekt Builders',
    images: [
      {
        url: '/images/hero-architecture.jpg',
        width: 1200,
        height: 630,
        alt: 'Projekt Builders - Architectural Project Management',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projekt Builders - Architectural Project Management',
    description: 'Expert project management for architectural projects that prioritize functionality, sustainability, and timeless design.',
    images: ['/images/hero-architecture.jpg'],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.variable} font-sans antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
