import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SahiKharido | Buy Smart. Buy Right.",
  description: "Expert product reviews, comparisons, and buying guides to help you shop smarter.",
  keywords: ["affiliate marketing", "product reviews", "buying guides", "tech reviews", "best products"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="app-container">
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
