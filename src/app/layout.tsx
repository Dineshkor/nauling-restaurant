import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalCart from "@/components/GlobalCart";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
});

export const metadata: Metadata = {
  title: "Nauling Family Restaurant",
  description: "Traditional flavors, lovingly crafted since day one.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${dmSans.variable} ${playfair.variable} font-sans bg-dark text-text-primary antialiased flex flex-col min-h-screen overflow-x-hidden`}
      >
        <div className="flex-1 flex flex-col relative overflow-x-hidden">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <GlobalCart />
      </body>
    </html>
  );
}
