import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Projekt Builders - Architectural Project Management",
  description: "Expert architectural project management that brings your vision to life with integrity, sustainability, and exceptional results.",
  keywords: "architectural project management, sustainable building, design integrity, construction management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
