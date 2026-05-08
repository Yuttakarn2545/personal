"use client";

import { useLang } from "@/contexts/lang-context";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  const { t } = useLang();

  const stats = [
    { value: t("about.stat1.value"), label: t("about.stat1.label") },
    { value: t("about.stat2.value"), label: t("about.stat2.label") },
    { value: t("about.stat3.value"), label: t("about.stat3.label") },
  ];

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {t("about.subtitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text inline-block">
            {t("about.title")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <div className="space-y-5">
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              {t("about.p1")}
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              {t("about.p2")}
            </p>

            {/* Location */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
              Bangkok, Thailand
            </div>

            {/* Education + Experience cards */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="glass-card rounded-xl p-4 flex items-start gap-3 hover-glow transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-violet-500/15 flex items-center justify-center shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground leading-snug">
                    {t("about.edu.degree")}
                  </p>
                  <p className="text-[11px] text-violet-400 mt-0.5 leading-snug">
                    {t("about.edu.school")}
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-4 flex items-start gap-3 hover-glow transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground leading-snug">
                    {t("about.exp.role")}
                  </p>
                  <p className="text-[11px] text-emerald-400 mt-0.5 leading-snug flex items-center gap-1">
                    <span className="live-dot scale-75" />
                    {t("about.exp.company")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl p-5 text-center hover-glow transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
