import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/animation/CustomCursor";
import { ScrollProgress } from "@/components/animation/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TIS - Tula's International School",
  description: "Animated, high-converting homepage for Tulas International School",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-500 selection:text-white font-sans overflow-x-hidden">
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
