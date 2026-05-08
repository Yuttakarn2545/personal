"use client";

import { useState } from "react";
import { Globe, Lock, Github } from "lucide-react";
import { useLang } from "@/contexts/lang-context";
import { projects, techColor } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { BadgeProps } from "@/components/ui/badge";

type BadgeVariant = NonNullable<BadgeProps["variant"]>;
type FilterKey = "all" | "live" | "fullstack" | "landing";

function TechBadge({ name }: { name: string }) {
  const variant = (techColor[name] ?? "slate") as BadgeVariant;
  return <Badge variant={variant}>{name}</Badge>;
}

function StackRow({ label, items }: { label: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="flex flex-wrap items-start gap-x-2 gap-y-1">
      <span className="text-[10px] font-bold text-muted-foreground/50 uppercase tracking-widest min-w-[28px] pt-0.5">
        {label}
      </span>
      <div className="flex flex-wrap gap-1">
        {items.map((t) => <TechBadge key={t} name={t} />)}
      </div>
    </div>
  );
}

const typeLabel: Record<string, string> = {
  fullstack: "Full-Stack",
  frontend: "Frontend",
  landing: "Landing",
};

const typeBadgeClass: Record<string, string> = {
  fullstack: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  frontend: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  landing: "bg-amber-500/20 text-amber-300 border-amber-500/30",
};

export default function Projects() {
  const { t } = useLang();
  const [filter, setFilter] = useState<FilterKey>("all");

  const filters: { key: FilterKey; labelKey: string }[] = [
    { key: "all",       labelKey: "projects.filter.all" },
    { key: "live",      labelKey: "projects.filter.live" },
    { key: "fullstack", labelKey: "projects.filter.fullstack" },
    { key: "landing",   labelKey: "projects.filter.landing" },
  ];

  const filtered = projects.filter((p) => {
    if (filter === "all")       return true;
    if (filter === "live")      return p.isLive;
    if (filter === "fullstack") return p.type === "fullstack";
    if (filter === "landing")   return p.type === "landing";
    return true;
  });

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text inline-block mb-6"
              style={{ fontFamily: "var(--font-syne)" }}>
            {t("projects.title")}
          </h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map(({ key, labelKey }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200",
                  filter === key
                    ? "bg-violet-500/20 text-violet-300 border-violet-500/40"
                    : "bg-transparent text-muted-foreground border-border hover:border-violet-500/30 hover:text-foreground"
                )}
              >
                {t(labelKey)}
                {key !== "all" && (
                  <span className="ml-1.5 text-[10px] opacity-60">
                    {key === "live"      ? projects.filter((p) => p.isLive).length
                     : key === "fullstack" ? projects.filter((p) => p.type === "fullstack").length
                     : projects.filter((p) => p.type === "landing").length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <article
              key={project.id}
              className={cn(
                "glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-300 flex flex-col group",
                project.isPrivate && "border-dashed border-border/40"
              )}
            >
              {/* Screenshot */}
              <div className="relative aspect-[16/9] overflow-hidden bg-secondary border-b border-border shrink-0">
                {project.screenshotUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.screenshotUrl}
                    alt={t(project.nameKey)}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-secondary to-card">
                    <Lock className="w-8 h-8 text-muted-foreground/30" />
                    <span className="text-[10px] text-muted-foreground/40 font-medium tracking-widest uppercase">
                      {t("projects.private")}
                    </span>
                  </div>
                )}

                {/* Live / Private pill */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-1 rounded-full bg-background/75 backdrop-blur-sm border border-border/80 text-[10px] font-medium">
                  {project.isLive ? (
                    <><span className="live-dot" /><span className="text-emerald-300">{t("projects.live")}</span></>
                  ) : (
                    <><Lock className="w-2.5 h-2.5 text-muted-foreground/50" /><span className="text-muted-foreground/60">{t("projects.private")}</span></>
                  )}
                </div>

                {/* Type badge */}
                <div className="absolute top-2.5 right-2.5">
                  <span className={cn("px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border", typeBadgeClass[project.type])}>
                    {typeLabel[project.type]}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div>
                  <h3 className="font-semibold text-[15px] text-foreground mb-1"
                      style={{ fontFamily: "var(--font-syne)" }}>
                    {t(project.nameKey)}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {t(project.descKey)}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="space-y-1.5 pt-2 border-t border-border/50">
                  <StackRow label={t("projects.frontend")} items={project.frontend} />
                  {project.backend.length > 0 && (
                    <StackRow label={t("projects.backend")} items={project.backend} />
                  )}
                  {project.deploy.length > 0 && (
                    <StackRow label={t("projects.deploy")} items={project.deploy} />
                  )}
                </div>

                {/* Actions */}
                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex gap-2 mt-auto pt-1">
                    {project.liveUrl && (
                      <Button size="sm" asChild className="flex-1 h-8 text-xs gap-1.5">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-3 h-3" />
                          {t("projects.view")}
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" asChild className="h-8 w-8 p-0">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3" />
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}

          {/* WBY org card — show only in "all" and "live" */}
          {(filter === "all" || filter === "live") && (
            <div className="glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-300 flex flex-col border-violet-500/20">
              <div className="relative aspect-[16/9] bg-gradient-to-br from-violet-950/60 via-purple-900/30 to-card flex items-center justify-center border-b border-border">
                <div className="text-center">
                  <div className="text-5xl font-black gradient-text mb-1"
                       style={{ fontFamily: "var(--font-syne)" }}>WBY</div>
                  <div className="text-xs text-muted-foreground tracking-widest uppercase">Web By You</div>
                </div>
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div>
                  <h3 className="font-semibold text-[15px] text-foreground mb-1"
                      style={{ fontFamily: "var(--font-syne)" }}>
                    WBY Organization
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Web By You — web development agency. 8+ live projects across Next.js, Nuxt.js, and React.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 pt-2 border-t border-border/50">
                  {["Next.js", "Nuxt.js", "React", "TailwindCSS", "Vercel"].map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
                <div className="mt-auto pt-1">
                  <Button size="sm" variant="outline" asChild className="w-full h-8 text-xs gap-1.5">
                    <a href="https://github.com/WebByYou" target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
