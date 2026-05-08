"use client";

import { useState } from "react";
import { Mail, Github, Copy, Check, Linkedin, Phone } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { Button } from "@/components/ui/button";

const EMAIL = "yuttakarnyod2002@gmail.com";
const PHONE = "0657643729";
const PHONE_DISPLAY = "065-764-3729";

export default function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState<"email" | "phone" | null>(null);

  const copyValue = async (value: string, kind: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(kind);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-card/30">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Status */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-medium mb-8">
          <span className="live-dot" />
          {t("contact.open")}
        </div>

        {/* Heading */}
        <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
          {t("contact.subtitle")}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text inline-block mb-6">
          {t("contact.title")}
        </h2>

        {/* Contact rows */}
        <div className="flex flex-col gap-3 mb-8">
          <div className="glass-card rounded-xl px-6 py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <Mail className="w-4 h-4 text-violet-400 shrink-0" />
              <span className="text-sm text-muted-foreground truncate">{EMAIL}</span>
            </div>
            <button
              onClick={() => copyValue(EMAIL, "email")}
              className="shrink-0 p-2 rounded-lg text-muted-foreground hover:text-violet-300 hover:bg-violet-500/10 transition-all duration-200"
              title={t("contact.copy")}
            >
              {copied === "email" ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          <div className="glass-card rounded-xl px-6 py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <Phone className="w-4 h-4 text-violet-400 shrink-0" />
              <a href={`tel:${PHONE}`} className="text-sm text-muted-foreground hover:text-violet-300 transition-colors truncate">
                {PHONE_DISPLAY}
              </a>
            </div>
            <button
              onClick={() => copyValue(PHONE, "phone")}
              className="shrink-0 p-2 rounded-lg text-muted-foreground hover:text-violet-300 hover:bg-violet-500/10 transition-all duration-200"
              title={t("contact.copy")}
            >
              {copied === "phone" ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <Button size="lg" asChild className="min-w-[150px]">
            <a href={`mailto:${EMAIL}`}>
              <Mail className="w-4 h-4" />
              {t("contact.email")}
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="min-w-[150px]">
            <a href="https://github.com/sudyod" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="min-w-[150px] border-blue-500/40 text-blue-300 hover:bg-blue-500/10 hover:border-blue-500/60">
            <a href="https://www.linkedin.com/in/yuttakan-phunkhlang/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </Button>
        </div>

        {/* WBY org link */}
        <a
          href="https://github.com/webbyyou"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-violet-300 transition-colors"
        >
          <Github className="w-3 h-3" />
          github.com/webbyyou
        </a>
      </div>
    </section>
  );
}
