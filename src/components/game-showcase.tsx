"use client";

import { Gamepad2, Zap, Box, Monitor, Star, ExternalLink } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { gameProjects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface StatItemProps {
  value: string;
  label: string;
  color: string;
}

function StatItem({ value, label, color }: StatItemProps) {
  return (
    <div className="flex flex-col items-center text-center p-4 glass-card rounded-xl">
      <span
        className={cn("text-3xl font-black mb-1", color)}
        style={{ fontFamily: "var(--font-syne)" }}
      >
        {value}
      </span>
      <span className="text-xs text-muted-foreground font-medium">{label}</span>
    </div>
  );
}

interface TechCardProps {
  name: string;
  desc: string;
  iconBg: string;
  icon: React.ReactNode;
  level: "hobbyist" | "learning" | "exploring";
}

function TechCard({ name, desc, iconBg, icon, level }: TechCardProps) {
  const levelColor = {
    hobbyist: "text-emerald-300 border-emerald-500/30 bg-emerald-500/10",
    learning: "text-amber-300 border-amber-500/30 bg-amber-500/10",
    exploring: "text-cyan-300 border-cyan-500/30 bg-cyan-500/10",
  }[level];

  return (
    <div className="glass-card rounded-xl p-4 flex items-start gap-3 hover-glow transition-all duration-300">
      <div
        className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
          iconBg
        )}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5 flex-wrap">
          <span className="text-sm font-semibold text-foreground">{name}</span>
          <span
            className={cn(
              "text-[9px] font-bold px-1.5 py-0.5 rounded border uppercase tracking-wider",
              levelColor
            )}
          >
            {level}
          </span>
        </div>
        <p className="text-[11px] text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function GameShowcase() {
  const { t } = useLang();

  const stats = [
    { value: t("games.stat1.value"), label: t("games.stat1.label"), color: "text-emerald-300" },
    { value: t("games.stat2.value"), label: t("games.stat2.label"), color: "text-violet-300" },
    { value: t("games.stat3.value"), label: t("games.stat3.label"), color: "text-cyan-300" },
    { value: t("games.stat4.value"), label: t("games.stat4.label"), color: "text-amber-300" },
  ];

  return (
    <section id="games" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-emerald-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-medium mb-5">
            <Gamepad2 className="w-3.5 h-3.5" />
            {t("games.badge")}
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold gradient-text inline-block mb-3"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {t("games.title")}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl leading-relaxed">
            {t("games.intro")}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Tech stack */}
          <div>
            <h3
              className="text-lg font-bold mb-4 text-foreground flex items-center gap-2"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <Zap className="w-4 h-4 text-amber-400" />
              {t("games.stack.title")}
            </h3>
            <div className="space-y-3">
              <TechCard
                name="Unreal Engine 5"
                desc={t("games.tech.ue5")}
                iconBg="bg-slate-700/60"
                icon={
                  <span className="text-white font-black text-xs select-none">
                    UE5
                  </span>
                }
                level="hobbyist"
              />
              <TechCard
                name="Blueprint Visual Scripting"
                desc={t("games.tech.blueprint")}
                iconBg="bg-blue-900/40"
                icon={<Box className="w-5 h-5 text-blue-400" />}
                level="hobbyist"
              />
              <TechCard
                name="Blender"
                desc={t("games.tech.blender")}
                iconBg="bg-orange-900/40"
                icon={
                  <span className="text-orange-400 font-black text-xs select-none">
                    3D
                  </span>
                }
                level="learning"
              />
              <TechCard
                name="Nanite & Lumen"
                desc={t("games.tech.nanite")}
                iconBg="bg-teal-900/40"
                icon={<Monitor className="w-5 h-5 text-teal-400" />}
                level="exploring"
              />
            </div>
          </div>

          {/* Right: Projects */}
          <div>
            <h3
              className="text-lg font-bold mb-4 text-foreground flex items-center gap-2"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <Star className="w-4 h-4 text-violet-400" />
              {t("games.projects.title")}
            </h3>
            <div className="space-y-4">
              {gameProjects.map((gp) => (
                <div
                  key={gp.id}
                  className="glass-card rounded-xl overflow-hidden hover-glow transition-all duration-300"
                >
                  <div className={cn("h-1.5 w-full", gp.accentClass)} />
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h4
                          className="font-semibold text-sm text-foreground"
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                          {t(gp.nameKey)}
                        </h4>
                        <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
                          {t(gp.descKey)}
                        </p>
                      </div>
                      <span className="shrink-0 text-[9px] font-bold px-2 py-0.5 rounded border border-border text-muted-foreground/60 uppercase tracking-wider">
                        {gp.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 pt-2 border-t border-border/50">
                      {gp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-medium px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="glass-card rounded-xl p-4 border-dashed border-border/50 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-violet-500/10 flex items-center justify-center shrink-0">
                  <ExternalLink className="w-4 h-4 text-violet-400" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {t("games.private.note")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
