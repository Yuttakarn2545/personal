"use client";

import { useLang } from "@/contexts/lang-context";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";

interface Job {
  icon: React.ReactNode;
  roleKey: string;
  companyKey: string;
  periodKey: string;
  locationKey: string;
  descKeys: string[];
  techKey?: string;
  color: "violet" | "emerald" | "cyan";
  current?: boolean;
}

const jobs: Job[] = [
  {
    icon: <Briefcase className="w-4 h-4" />,
    roleKey: "exp.memsg.role",
    companyKey: "exp.memsg.company",
    periodKey: "exp.memsg.period",
    locationKey: "exp.memsg.location",
    descKeys: ["exp.memsg.d1", "exp.memsg.d2", "exp.memsg.d3"],
    techKey: "exp.memsg.tech",
    color: "violet",
    current: true,
  },
  {
    icon: <GraduationCap className="w-4 h-4" />,
    roleKey: "exp.mango.role",
    companyKey: "exp.mango.company",
    periodKey: "exp.mango.period",
    locationKey: "exp.mango.location",
    descKeys: ["exp.mango.d1", "exp.mango.d2", "exp.mango.d3"],
    color: "emerald",
  },
  {
    icon: <Code2 className="w-4 h-4" />,
    roleKey: "exp.freelance.role",
    companyKey: "exp.freelance.company",
    periodKey: "exp.freelance.period",
    locationKey: "exp.freelance.location",
    descKeys: ["exp.freelance.d1", "exp.freelance.d2", "exp.freelance.d3"],
    techKey: "exp.freelance.tech",
    color: "cyan",
    current: true,
  },
];

const colorMap = {
  violet: {
    icon: "bg-violet-500/15 text-violet-400",
    badge: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    dot: "bg-violet-400 shadow-[0_0_6px_rgba(167,139,250,0.6)]",
    line: "from-violet-500/40",
  },
  emerald: {
    icon: "bg-emerald-500/15 text-emerald-400",
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    dot: "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]",
    line: "from-emerald-500/40",
  },
  cyan: {
    icon: "bg-cyan-500/15 text-cyan-400",
    badge: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
    dot: "bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.6)]",
    line: "from-cyan-500/40",
  },
};

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {t("exp.subtitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text inline-block">
            {t("exp.title")}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-border via-border/50 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {jobs.map((job, i) => {
              const c = colorMap[job.color];
              return (
                <div key={i} className="relative sm:pl-16">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-3.5 top-5 w-3 h-3 rounded-full -translate-x-1/2 hidden sm:block ${c.dot}`}
                  />

                  {/* Card */}
                  <div className="glass-card rounded-2xl p-6 hover-glow transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        {/* Icon */}
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${c.icon}`}
                        >
                          {job.icon}
                        </div>

                        <div>
                          <h3 className="font-semibold text-foreground text-base leading-snug">
                            {t(job.roleKey)}
                          </h3>
                          <p className={`text-sm font-medium mt-0.5 ${c.badge.split(" ")[2]}`}>
                            {t(job.companyKey)}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 sm:text-right shrink-0">
                        {job.current && (
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-semibold ${c.badge}`}
                          >
                            <span className="live-dot scale-75" />
                            {t("exp.current")}
                          </span>
                        )}
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full border border-border bg-card text-[10px] text-muted-foreground">
                          {t(job.periodKey)}
                        </span>
                      </div>
                    </div>

                    {/* Location */}
                    <p className="text-xs text-muted-foreground mb-3">
                      {t(job.locationKey)}
                    </p>

                    {/* Bullet points */}
                    <ul className="space-y-1.5 mb-4">
                      {job.descKeys.map((dk) => (
                        <li
                          key={dk}
                          className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground/50 shrink-0" />
                          {t(dk)}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    {job.techKey && (
                      <p className="text-[11px] text-muted-foreground/70 font-mono">
                        {t(job.techKey)}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
