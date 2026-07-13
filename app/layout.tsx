import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import ScrollReveal from "./components/ScrollReveal";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Positivus — Digital Marketing Agency",
  description:
    "Positivus helps businesses grow and succeed online through SEO, PPC, social media marketing, and content creation.",
  metadataBase: new URL("https://positivus.example.com"),
  openGraph: {
    title: "Positivus — Digital Marketing Agency",
    description:
      "Navigating the digital landscape for success. SEO, PPC, social, and content that grows your business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-shape-sm focus:bg-brand-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
