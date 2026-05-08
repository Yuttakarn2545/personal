"use client";

import { useLang } from "@/contexts/lang-context";
import { skillGroups } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const levelRing: Record<string, string> = {
  expert:       "ring-violet-500/40 bg-violet-500/10",
  intermediate: "ring-cyan-500/30 bg-cyan-500/8",
  learning:     "ring-amber-500/30 bg-amber-500/8",
};

const levelDot: Record<string, string> = {
  expert:       "bg-violet-400",
  intermediate: "bg-cyan-400",
  learning:     "bg-amber-400",
};

const levelText: Record<string, string> = {
  expert:       "text-violet-300",
  intermediate: "text-cyan-300",
  learning:     "text-amber-300",
};

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="py-24 sm:py-32 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {t("skills.subtitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text inline-block">
            {t("skills.title")}
          </h2>
        </div>

        {/* Skill groups */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.titleKey}
              className="glass-card rounded-xl p-6 hover-glow transition-all duration-300"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-5 border-b border-border pb-3">
                {t(group.titleKey)}
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={cn(
                      "flex flex-col items-center gap-2 p-3 rounded-xl ring-1 transition-all duration-200 cursor-default group/skill",
                      levelRing[skill.level] ?? levelRing.intermediate
                    )}
                  >
                    {/* Icon */}
                    <div className="w-9 h-9 flex items-center justify-center">
                      {skill.iconUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={skill.iconUrl}
                          alt={skill.name}
                          className="w-8 h-8 object-contain"
                          style={skill.invert ? { filter: "invert(1) brightness(0.85)" } : undefined}
                          loading="lazy"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = "none";
                            (e.currentTarget.nextElementSibling as HTMLElement | null)?.classList.remove("hidden");
                          }}
                        />
                      ) : null}
                      {/* Fallback dot */}
                      <span
                        className={cn(
                          "w-4 h-4 rounded-full",
                          skill.iconUrl ? "hidden" : "",
                          skill.color
                        )}
                      />
                    </div>

                    {/* Name + level dot */}
                    <div className="flex flex-col items-center gap-0.5 min-w-0 w-full">
                      <span
                        className={cn(
                          "text-[10px] font-semibold text-center leading-tight truncate w-full text-center",
                          levelText[skill.level] ?? levelText.intermediate
                        )}
                      >
                        {skill.name}
                      </span>
                      <span
                        className={cn(
                          "w-1 h-1 rounded-full mt-0.5",
                          levelDot[skill.level] ?? levelDot.intermediate
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-400" />
            Expert
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Intermediate
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Learning
          </span>
        </div>
      </div>
    </section>
  );
}
