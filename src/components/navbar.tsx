"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { cn } from "@/lib/utils";

const navLinks = ["about", "skills", "projects", "contact"] as const;

function LogoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="url(#logoGrad)" fillOpacity="0.15" />
      <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="url(#logoGrad)" strokeOpacity="0.4" />
      {/* Bracket left */}
      <path d="M9 10 L6 16 L9 22" stroke="url(#logoGrad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Bracket right */}
      <path d="M23 10 L26 16 L23 22" stroke="url(#logoGrad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Y shape */}
      <path d="M13 10 L16 15 L19 10" stroke="url(#logoGrad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="16" y1="15" x2="16" y2="22" stroke="url(#logoGrad)" strokeWidth="1.8" strokeLinecap="round" />
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a78bfa" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Navbar() {
  const { t, toggle, lang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };


  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5 group"
        >
          <LogoMark />
          <span className="font-bold text-sm tracking-wide text-foreground group-hover:text-violet-300 transition-colors">
            sudyod<span className="text-violet-400">.</span>dev
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
            >
              {t(`nav.${link}`)}
            </button>
          ))}

          {/* Lang toggle */}
          <button
            onClick={toggle}
            className="ml-2 px-3 py-1.5 text-xs font-semibold rounded-full border border-violet-500/40 text-violet-300 hover:bg-violet-500/15 transition-all duration-200"
          >
            {lang === "en" ? "TH" : "EN"}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className="px-3 py-1.5 text-xs font-semibold rounded-full border border-violet-500/40 text-violet-300 hover:bg-violet-500/15 transition-all duration-200"
          >
            {lang === "en" ? "TH" : "EN"}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-left px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
              >
                {t(`nav.${link}`)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
