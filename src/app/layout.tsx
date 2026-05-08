import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/contexts/lang-context";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Yuttakarn · Full-Stack Developer",
  description:
    "Portfolio of Yuttakarn — Full-Stack Developer at WBY (Web By You). Building modern web applications with Next.js, React, and TypeScript.",
  keywords: ["Yuttakarn", "WBY", "Web By You", "Full-Stack Developer", "Next.js", "React", "TypeScript", "Bangkok"],
  authors: [{ name: "Yuttakarn", url: "https://github.com/sudyod" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${dmSans.variable} ${syne.variable} antialiased`}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
