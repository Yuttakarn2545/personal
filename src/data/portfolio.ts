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
  status: "Prototype" | "WIP" | "Concept";
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
    liveUrl: "https://matclean.webbyyou.net",
    screenshotUrl: mshot("https://matclean.webbyyou.net"),
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
];

export const gameProjects: GameProject[] = [
  {
    id: "ue5-open-world",
    nameKey: "game.openworld.name",
    descKey: "game.openworld.desc",
    tags: ["Unreal Engine 5", "Nanite", "Lumen", "Landscape", "Blueprint"],
    status: "Prototype",
    accentClass: "bg-gradient-to-r from-emerald-500/80 to-teal-500/80",
  },
  {
    id: "blender-char",
    nameKey: "game.blenderchar.name",
    descKey: "game.blenderchar.desc",
    tags: ["Blender", "Rigging", "Animation", "UE5 Import", "Skeletal Mesh"],
    status: "WIP",
    accentClass: "bg-gradient-to-r from-orange-500/80 to-amber-500/80",
  },
  {
    id: "vfx-demo",
    nameKey: "game.vfxdemo.name",
    descKey: "game.vfxdemo.desc",
    tags: ["Niagara", "VFX", "Shaders", "HLSL", "UE5"],
    status: "Concept",
    accentClass: "bg-gradient-to-r from-violet-500/80 to-purple-500/80",
  },
];

// Vercel — white triangle
const VERCEL_ICON = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 76 65'%3E%3Cpath d='M37.9 0L75.8 65H0L37.9 0z' fill='%23ffffff'/%3E%3C/svg%3E`;

// Neon DB — green lightning bolt
const NEON_ICON = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='8' fill='%2300e599' fill-opacity='0.15'/%3E%3Cpolygon points='23,4 12,22 20,22 17,36 28,18 20,18' fill='%2300e599'/%3E%3C/svg%3E`;

// shadcn/ui — two diagonal lines (official mark)
const SHADCN_ICON = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' rx='40' fill='%23ffffff' fill-opacity='0.08'/%3E%3Cline x1='208' y1='128' x2='128' y2='208' stroke='%23e2e8f0' stroke-linecap='round' stroke-width='28'/%3E%3Cline x1='192' y1='40' x2='40' y2='192' stroke='%23e2e8f0' stroke-linecap='round' stroke-width='28'/%3E%3C/svg%3E`;

// Framer Motion — official F chevron mark
const FRAMER_ICON = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='8' fill='%23ec4899' fill-opacity='0.15'/%3E%3Cpath d='M10 8 H30 V20 H20 L30 32 H20 L10 20 V8 Z' fill='%23ec4899'/%3E%3C/svg%3E`;

// Claude AI — Anthropic orange, triangle with crossbar (like the actual logo)
const CLAUDE_ICON = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='8' fill='%23d97757' fill-opacity='0.18'/%3E%3Cpolygon points='20,8 30,29 10,29' fill='none' stroke='%23d97757' stroke-width='2.5' stroke-linejoin='round'/%3E%3Cline x1='14.5' y1='23' x2='25.5' y2='23' stroke='%23d97757' stroke-width='2.5' stroke-linecap='round'/%3E%3C/svg%3E`;

// ChatGPT — OpenAI green hexagon star
const CHATGPT_ICON = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='8' fill='%2310a37f' fill-opacity='0.18'/%3E%3Cpath d='M20 9 L23.5 16.5 L31.5 14 L27 21 L31.5 28 L23.5 25.5 L20 33 L16.5 25.5 L8.5 28 L13 21 L8.5 14 L16.5 16.5 Z' fill='%2310a37f' fill-opacity='0.8'/%3E%3C/svg%3E`;

// GitHub Copilot — purple face icon
const COPILOT_ICON = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='8' fill='%23a78bfa' fill-opacity='0.18'/%3E%3Ccircle cx='20' cy='17' r='7.5' fill='none' stroke='%23a78bfa' stroke-width='2'/%3E%3Ccircle cx='17' cy='16' r='1.8' fill='%23a78bfa'/%3E%3Ccircle cx='23' cy='16' r='1.8' fill='%23a78bfa'/%3E%3Cpath d='M16 20.5 Q20 24 24 20.5' stroke='%23a78bfa' stroke-width='1.8' fill='none' stroke-linecap='round'/%3E%3Cpath d='M12.5 28 C12.5 24.5 27.5 24.5 27.5 28' fill='%23a78bfa' fill-opacity='0.35' stroke='%23a78bfa' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E`;

// Cursor — blue arrow cursor
const CURSOR_ICON = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='8' fill='%2360a5fa' fill-opacity='0.18'/%3E%3Cpath d='M11 8 L11 30 L18 23 L22 31 L25.5 29.5 L21.5 22 L30 22 Z' fill='%2360a5fa'/%3E%3C/svg%3E`;

// Prompt Engineering — terminal >_ symbol
const PROMPT_ICON = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='8' fill='%23f472b6' fill-opacity='0.18'/%3E%3Crect x='6' y='8' width='28' height='24' rx='4' fill='none' stroke='%23f472b6' stroke-width='1.8'/%3E%3Cpath d='M11 17 L17 21 L11 25' stroke='%23f472b6' stroke-width='2.2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cline x1='19' y1='25' x2='28' y2='25' stroke='%23f472b6' stroke-width='2.2' stroke-linecap='round'/%3E%3C/svg%3E`;

export const skillGroups: SkillGroup[] = [
  {
    titleKey: "skills.frontend",
    skills: [
      { name: "Next.js",       iconUrl: `${D}/nextjs/nextjs-original.svg`,           invert: true,  level: "expert",       color: "bg-slate-400" },
      { name: "React",         iconUrl: `${D}/react/react-original.svg`,                            level: "expert",       color: "bg-cyan-400" },
      { name: "Nuxt.js",       iconUrl: `${D}/nuxtjs/nuxtjs-original.svg`,                          level: "intermediate", color: "bg-emerald-400" },
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
      { name: "Golang",     iconUrl: `${D}/go/go-original.svg`,                                     level: "intermediate", color: "bg-cyan-400" },
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
    ],
  },
];

export const techColor: Record<string, string> = {
  "Next.js": "slate", "Next.js 16": "slate",
  React: "cyan", "Nuxt.js": "emerald",
  TypeScript: "cyan", TailwindCSS: "cyan",
  "shadcn/ui": "violet", "Framer Motion": "violet",
  Vite: "amber", "Node.js": "emerald",
  Prisma: "slate", "Prisma v7": "slate", "Prisma ORM": "slate",
  PostgreSQL: "cyan", "Neon DB": "emerald", "Neon Serverless": "emerald",
  MySQL: "amber", "REST API": "violet",
  "Next.js API Routes": "slate", "Nuxt Server API": "emerald",
  "i18n (KR/EN)": "amber", "i18n (TH/KR/EN)": "amber",
  Vercel: "slate",
};
