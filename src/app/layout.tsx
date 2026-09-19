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
  title: "Yuttakarn Phunkhlang · Software Engineer & Full-Stack Developer",
  description:
    "Software engineering portfolio of Yuttakan Phunkhlang — production full-stack development with Nuxt.js, Vue.js, TypeScript, Go, Next.js, PostgreSQL, AI coding agents, MCP, and Unreal Engine 5.",
  keywords: ["Yuttakan Phunkhlang", "Software Engineer", "Full-Stack Developer", "Nuxt.js", "Vue.js", "TypeScript", "Go", "Next.js", "PostgreSQL", "AI Coding Agents", "MCP", "Unreal Engine 5", "Buriram"],
  authors: [{ name: "Yuttakan Phunkhlang", url: "https://github.com/Yuttakarn2545" }],
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
