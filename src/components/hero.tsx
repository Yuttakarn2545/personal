"use client";

import { ArrowDown, Github, Mail, Sparkles, Linkedin } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const { t } = useLang();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Background glows */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/6 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 pt-24 pb-16">

          {/* ── LEFT: text ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-medium mb-7">
              <span className="live-dot" />
              {t("hero.available")}
            </div>

            {/* Greeting */}
            <p className="text-muted-foreground text-lg sm:text-xl mb-2">
              {t("hero.greeting")}
            </p>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
              <span className="gradient-text">{t("hero.name")}</span>
            </h1>

            {/* Role */}
            <div className="flex items-center gap-3 mb-6 lg:justify-start justify-center">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-violet-500/50" />
              <p className="text-base sm:text-lg text-muted-foreground font-medium">
                {t("hero.role")}
              </p>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-violet-500/50" />
            </div>

            {/* Bio */}
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              {t("hero.bio")}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-3 mb-8">
              <Button size="lg" onClick={() => scrollTo("projects")} className="w-full sm:w-auto gap-2">
                <Sparkles className="w-4 h-4" />
                {t("hero.cta.work")}
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("contact")} className="w-full sm:w-auto">
                {t("hero.cta.contact")}
              </Button>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center lg:justify-start justify-center gap-2">
              <a
                href="https://github.com/sudyod"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border hover:border-violet-500/40 hover:bg-violet-500/10 text-muted-foreground hover:text-violet-300 transition-all duration-200 text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/yuttakan-phunkhlang/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border hover:border-blue-500/40 hover:bg-blue-500/10 text-muted-foreground hover:text-blue-300 transition-all duration-200 text-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="mailto:yuttakarnyod2002@gmail.com"
                className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border hover:border-violet-500/40 hover:bg-violet-500/10 text-muted-foreground hover:text-violet-300 transition-all duration-200 text-sm"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>

          {/* ── RIGHT: profile photo ── */}
          <div className="relative flex-shrink-0 flex items-center justify-center">
            {/* Outer glow blob */}
            <div className="absolute w-80 h-80 rounded-full bg-violet-600/15 blur-3xl" />

            {/* Spinning gradient ring */}
            <div
              className="absolute w-72 h-72 rounded-full profile-ring"
              style={{
                background: "conic-gradient(from 0deg, #7c3aed, #a78bfa, #c4b5fd, #7c3aed)",
                padding: "3px",
              }}
            >
              <div className="w-full h-full rounded-full bg-background" />
            </div>

            {/* Static accent ring */}
            <div className="absolute w-64 h-64 rounded-full border border-violet-500/20" />

            {/* Photo container */}
            <div className="relative w-60 h-60 rounded-full overflow-hidden ring-2 ring-violet-500/30 shadow-2xl shadow-violet-500/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.png"
                alt="Yuttakarn"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  // Show initials placeholder if image missing
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const placeholder = document.createElement("div");
                    placeholder.className = "w-full h-full flex items-center justify-center bg-violet-950 text-violet-300 text-5xl font-bold";
                    placeholder.textContent = "Y";
                    parent.appendChild(placeholder);
                  }
                }}
              />
            </div>

            {/* Floating "Full-Stack Dev" badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-violet-500/30 shadow-lg shadow-violet-500/10 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_6px_rgba(167,139,250,0.8)]" />
              <span className="text-xs font-semibold text-violet-300">Full-Stack Developer</span>
            </div>

            {/* Floating tech pills */}
            <div className="absolute -left-6 top-12 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border text-[10px] font-medium text-cyan-300 shadow-lg rotate-[-8deg]">
              Next.js
            </div>
            <div className="absolute -right-4 top-20 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border text-[10px] font-medium text-violet-300 shadow-lg rotate-[6deg]">
              TypeScript
            </div>
            <div className="absolute -left-4 bottom-20 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border text-[10px] font-medium text-emerald-300 shadow-lg rotate-[5deg]">
              Prisma
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pb-8">
          <button
            onClick={() => scrollTo("about")}
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>

    </section>
  );
}
