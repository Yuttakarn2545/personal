export interface Project {
  id: string;
  nameKey: string;
  descKey: string;
  type: "fullstack" | "frontend" | "landing";
  isLive: boolean;
  isPrivate: boolean;
  liveUrl?: string;
  githubUrl?: string;
  screenshotUrl?: string;
  frontend: string[];
  backend: string[];
  api: string[];
  deploy: string[];
}

export interface GameProject {
  id: string;
  nameKey: string;
  descKey: string;
  tags: string[];
  status: "Private" | "Public" | "Active";
  accentClass: string;
}

export interface Skill {
  name: string;
  iconUrl?: string;
  invert?: boolean; // true = apply brightness filter (black SVG on dark bg)
  level: "expert" | "intermediate" | "learning";
  color: string; // tailwind bg color for fallback dot
}

export interface SkillGroup {
  titleKey: string;
  skills: Skill[];
}

// Devicon base URL
const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

// Free website screenshot helper (WordPress mshots — no API key needed)
const mshot = (url: string) =>
  `https://s0.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=800&h=450`;

export const projects: Project[] = [
  {
    id: "dekmaho",
    nameKey: "proj.dekmaho.name",
    descKey: "proj.dekmaho.desc",
    type: "landing",
    isLive: true,
    isPrivate: false,
    liveUrl: "https://dekmaho.webbyyou.net",
    screenshotUrl: mshot("https://dekmaho.webbyyou.net"),
    frontend: ["Next.js", "TailwindCSS", "TypeScript", "Framer Motion"],
    backend: [],
    api: [],
    deploy: ["Vercel"],
  },
  {
    id: "matclean",
    nameKey: "proj.matclean.name",
    descKey: "proj.matclean.desc",
    type: "landing",
    isLive: true,
    isPrivate: false,
    liveUrl: "https://www.matcleandrthailand.com/",
    screenshotUrl: mshot("https://www.matcleandrthailand.com/"),
    frontend: ["Next.js", "TailwindCSS", "TypeScript", "i18n (KR/EN)"],
    backend: [],
    api: [],
    deploy: ["Vercel"],
  },
  {
    id: "dao-deung",
    nameKey: "proj.daodeung.name",
    descKey: "proj.daodeung.desc",
    type: "landing",
    isLive: true,
    isPrivate: false,
    liveUrl: "https://dao-deung-thai-shop.webbyyou.net",
    screenshotUrl: mshot("https://dao-deung-thai-shop.webbyyou.net"),
    frontend: ["Next.js", "TailwindCSS", "TypeScript"],
    backend: [],
    api: [],
    deploy: ["Vercel"],
  },
  {
    id: "qr-register",
    nameKey: "proj.qr.name",
    descKey: "proj.qr.desc",
    type: "fullstack",
    isLive: true,
    isPrivate: false,
    liveUrl: "https://qr-random.webbyyou.net",
    screenshotUrl: mshot("https://qr-random.webbyyou.net"),
    frontend: ["Next.js", "TailwindCSS", "TypeScript"],
    backend: ["Prisma", "PostgreSQL"],
    api: ["Next.js API Routes"],
    deploy: ["Vercel"],
  },
  {
    id: "popnon-invoice",
    nameKey: "proj.invoice.name",
    descKey: "proj.invoice.desc",
    type: "fullstack",
    isLive: true,
    isPrivate: false,
    liveUrl: "https://popnon-invoice.webbyyou.net",
    screenshotUrl: mshot("https://popnon-invoice.webbyyou.net"),
    frontend: ["Next.js 16", "TailwindCSS", "shadcn/ui", "TypeScript"],
    backend: ["Prisma v7", "Neon DB"],
    api: ["Next.js API Routes"],
    deploy: ["Vercel"],
  },
  {
    id: "exam-question-manager",
    nameKey: "proj.exam.name",
    descKey: "proj.exam.desc",
    type: "fullstack",
    isLive: false,
    isPrivate: false,
    githubUrl: "https://github.com/Yuttakarn2545/exam-question-manager",
    frontend: ["Vue 3", "TypeScript", "TailwindCSS"],
    backend: ["Go", "Fiber"],
    api: ["REST API"],
    deploy: [],
  },
  {
    id: "webbyyou-site",
    nameKey: "proj.wbyweb.name",
    descKey: "proj.wbyweb.desc",
    type: "frontend",
    isLive: true,
    isPrivate: false,
    liveUrl: "https://www.webbyyou.net",
    screenshotUrl: mshot("https://www.webbyyou.net"),
    frontend: ["Next.js", "TailwindCSS", "TypeScript"],
    backend: [],
    api: [],
    deploy: ["Vercel"],
  },
  {
    id: "noob-studio",
    nameKey: "proj.noobstudio.name",
    descKey: "proj.noobstudio.desc",
    type: "landing",
    isLive: true,
    isPrivate: false,
    liveUrl: "https://noob-studio.vercel.app",
    screenshotUrl: mshot("https://noob-studio.vercel.app"),
    frontend: ["Next.js", "TailwindCSS", "TypeScript"],
    backend: [],
    api: [],
    deploy: ["Vercel"],
  },
];

export const gameProjects: GameProject[] = [
  {
    id: "remoteforge",
    nameKey: "game.openworld.name",
    descKey: "game.openworld.desc",
    tags: ["MCP", "React", "Fastify", "WebSocket", "PostgreSQL", "Docker"],
    status: "Private",
    accentClass: "bg-gradient-to-r from-violet-500/80 to-cyan-500/80",
  },
  {
    id: "stranded",
    nameKey: "game.blenderchar.name",
    descKey: "game.blenderchar.desc",
    tags: ["Unreal Engine 5.8", "C++", "Blueprints", "Steam", "Automation"],
    status: "Private",
    accentClass: "bg-gradient-to-r from-emerald-500/80 to-teal-500/80",
  },
  {
    id: "exam-manager",
    nameKey: "game.vfxdemo.name",
    descKey: "game.vfxdemo.desc",
    tags: ["Vue 3", "TypeScript", "Go", "Fiber", "REST API"],
    status: "Public",
    accentClass: "bg-gradient-to-r from-amber-500/80 to-orange-500/80",
  },
]

// Vercel — white triangle
const VERCEL_ICON = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 76 65'%3E%3Cpath d='M37.9 0L75.8 65H0L37.9 0z' fill='%23ffffff'/%3E%3C/svg%3E`;

// Neon DB — green lightning bolt
const NEON_ICON = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='8' fill='%2300e599' fill-opacity='0.15'/%3E%3Cpolygon points='23,4 12,22 20,22 17,36 28,18 20,18' fill='%2300e599'/%3E%3C/svg%3E`;

// shadcn/ui — two diagonal lines (official mark)
const SHADCN_ICON = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' rx='40' fill='%23ffffff' fill-opacity='0.08'/%3E%3Cline x1='208' y1='128' x2='128' y2='208' stroke='%23e2e8f0' stroke-linecap='round' stroke-width='28'/%3E%3Cline x1='192' y1='40' x2='40' y2='192' stroke='%23e2e8f0' stroke-linecap='round' stroke-width='28'/%3E%3C/svg%3E`;

// Framer Motion — official F chevron mark
const FRAMER_ICON = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='8' fill='%23ec4899' fill-opacity='0.15'/%3E%3Cpath d='M10 8 H30 V20 H20 L30 32 H20 L10 20 V8 Z' fill='%23ec4899'/%3E%3C/svg%3E`;






export const skillGroups: SkillGroup[] = [
  {
    titleKey: "skills.frontend",
    skills: [
      { name: "Next.js",       iconUrl: `${D}/nextjs/nextjs-original.svg`,           invert: true,  level: "expert",       color: "bg-slate-400" },
      { name: "React",         iconUrl: `${D}/react/react-original.svg`,                            level: "expert",       color: "bg-cyan-400" },
      { name: "Nuxt.js",       iconUrl: `${D}/nuxtjs/nuxtjs-original.svg`,                          level: "intermediate", color: "bg-emerald-400" },
      { name: "Vue.js",         iconUrl: `${D}/vuejs/vuejs-original.svg`,                            level: "intermediate", color: "bg-emerald-400" },
      { name: "TypeScript",    iconUrl: `${D}/typescript/typescript-original.svg`,                  level: "expert",       color: "bg-blue-400" },
      { name: "TailwindCSS",   iconUrl: `${D}/tailwindcss/tailwindcss-original.svg`,                level: "expert",       color: "bg-cyan-400" },
      { name: "shadcn/ui",     iconUrl: SHADCN_ICON,  level: "expert",       color: "bg-violet-400" },
      { name: "Framer Motion", iconUrl: FRAMER_ICON,  level: "intermediate", color: "bg-pink-400" },
      { name: "Vite",          iconUrl: `${D}/vitejs/vitejs-original.svg`,                          level: "intermediate", color: "bg-amber-400" },
    ],
  },
  {
    titleKey: "skills.backend",
    skills: [
      { name: "Go",         iconUrl: `${D}/go/go-original.svg`,                                     level: "intermediate", color: "bg-cyan-400" },
      { name: "REST APIs",                                                                       level: "intermediate", color: "bg-violet-400" },
      { name: "Node.js",    iconUrl: `${D}/nodejs/nodejs-original.svg`,                            level: "intermediate", color: "bg-green-400" },
      { name: "Prisma",     iconUrl: `${D}/prisma/prisma-original.svg`,        invert: true,        level: "expert",       color: "bg-slate-300" },
      { name: "PostgreSQL", iconUrl: `${D}/postgresql/postgresql-original.svg`,                     level: "intermediate", color: "bg-sky-400" },
      { name: "Neon DB",    iconUrl: NEON_ICON,                                                     level: "intermediate", color: "bg-teal-400" },
      { name: "MySQL",      iconUrl: `${D}/mysql/mysql-original.svg`,                               level: "intermediate", color: "bg-amber-400" },
    ],
  },
  {
    titleKey: "skills.tools",
    skills: [
      { name: "Git",    iconUrl: `${D}/git/git-original.svg`,                                       level: "expert",       color: "bg-orange-400" },
      { name: "GitHub", iconUrl: `${D}/github/github-original.svg`,            invert: true,        level: "expert",       color: "bg-slate-300" },
      { name: "Vercel", iconUrl: VERCEL_ICON,                                                       level: "expert",       color: "bg-white" },
      { name: "ESLint", iconUrl: `${D}/eslint/eslint-original.svg`,                                 level: "intermediate", color: "bg-purple-400" },
      { name: "Docker", iconUrl: `${D}/docker/docker-original.svg`,                                 level: "intermediate", color: "bg-blue-400" },
      { name: "CI/CD",                                                                            level: "intermediate", color: "bg-emerald-400" },
    ],
  },
  {
    titleKey: "skills.ai",
    skills: [
      { name: "MCP",                                                                              level: "intermediate", color: "bg-violet-400" },
      { name: "AI Coding Agents",                                                                  level: "intermediate", color: "bg-cyan-400" },
      { name: "LLM Workflows",                                                                     level: "intermediate", color: "bg-pink-400" },
      { name: "Codebase Analysis",                                                                 level: "intermediate", color: "bg-amber-400" },
    ],
  },
];

export const techColor: Record<string, string> = {
  "Next.js": "slate", "Next.js 16": "slate",
  React: "cyan", "Nuxt.js": "emerald", "Vue 3": "emerald", "Vue.js": "emerald",
  TypeScript: "cyan", TailwindCSS: "cyan",
  "shadcn/ui": "violet", "Framer Motion": "violet",
  Vite: "amber", "Node.js": "emerald",
  Prisma: "slate", "Prisma v7": "slate", "Prisma ORM": "slate",
  PostgreSQL: "cyan", "Neon DB": "emerald", "Neon Serverless": "emerald",
  MySQL: "amber", Go: "cyan", Fiber: "emerald", "REST API": "violet", "REST APIs": "violet",
  "Next.js API Routes": "slate", "Nuxt Server API": "emerald",
  "i18n (KR/EN)": "amber", "i18n (TH/KR/EN)": "amber",
  Vercel: "slate",
};
