"use client";

import React, { createContext, useContext, useState } from "react";

type Lang = "en" | "th";

interface LangContextValue {
  lang: Lang;
  toggle: () => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.games": "Engineering Lab",
    "nav.contact": "Contact",

    "hero.greeting": "Hi, I'm",
    "hero.name": "Yuttakarn",
    "hero.role": "Software Engineer · Full-Stack Developer",
    "hero.bio":
      "Software Engineer / Full-Stack Developer at Memsg building production features with Nuxt.js / Vue.js, TypeScript, and Go REST APIs. I have delivered 7+ freelance client projects and use AI coding agents and MCP with explicit verification.",
    "hero.cta.work": "View My Work",
    "hero.cta.contact": "Get in Touch",
    "hero.available": "Open to Work",

    "about.title": "About Me",
    "about.subtitle": "Developer & Creator",
    "about.p1":
      "I build software across frontend and backend, from reusable product UI and state management to REST APIs, business systems, deployment, and production debugging. At Memsg I work in an existing production codebase; through WEB BY YOU I have delivered 7+ client projects including multilingual sites, e-commerce, event workflows, and a tax-invoice and inventory system.",
    "about.p2":
      "I graduated in Computer Science (English Program) from Buriram Rajabhat University. My current focus is production engineering and AI-native developer workflows: AI coding agents, MCP, codebase exploration, implementation planning, debugging, refactoring, and test generation followed by lint/type-check/tests, diff inspection, and human review. I also build Unreal Engine 5 systems in C++ / Blueprints as a serious side project.",
    "about.stat1.value": "1+",
    "about.stat1.label": "Years Experience",
    "about.stat2.value": "BRU",
    "about.stat2.label": "Buriram Rajabhat Univ.",
    "about.stat3.value": "7+",
    "about.stat3.label": "Client Projects",

    "about.edu.degree": "Computer Science — English Program",
    "about.edu.school": "Buriram Rajabhat University",
    "about.exp.role": "Software Engineer",
    "about.exp.company": "Memsg",

    "exp.title": "Work Experience",
    "exp.subtitle": "Career Journey",
    "exp.current": "Present",

    "exp.memsg.role": "Full-Stack Developer",
    "exp.memsg.company": "Memsg · Buriram, Thailand · Full-time",
    "exp.memsg.period": "May 2025 – Present",
    "exp.memsg.location": "On-site · Buriram, Thailand",
    "exp.memsg.d1": "Build responsive, reusable frontend features with Nuxt.js / Vue.js, TypeScript, Tailwind CSS, and Pinia from Figma and product requirements.",
    "exp.memsg.d2": "Develop and integrate REST APIs in Go, working across client-server flows and existing backend services.",
    "exp.memsg.d3": "Use AI-assisted workflows for codebase exploration, planning, debugging, refactoring, and documentation, with manual review and verification before changes are accepted.",
    "exp.memsg.tech": "Nuxt.js · Vue.js · TypeScript · Go · Tailwind CSS · Pinia · REST APIs · Git",

    "exp.mango.role": "Software Development Intern",
    "exp.mango.company": "Mango Consultant Co., Ltd. · Bangkok, Thailand",
    "exp.mango.period": "Nov 2024 – Feb 2025 · 4 months",
    "exp.mango.location": "On-site · Bangkok, Thailand",
    "exp.mango.d1": "Participated in development and maintenance of ERP system features for construction and real estate enterprise clients.",
    "exp.mango.d2": "Practiced version control workflows with Git and GitHub — branching, pull requests, and code review.",
    "exp.mango.d3": "Collaborated with senior developers on software architecture and ERP best practices in an agile environment.",

    "exp.freelance.role": "Freelance Web Developer",
    "exp.freelance.company": "WEB BY YOU · Self-employed",
    "exp.freelance.period": "Jan 2024 – Present",
    "exp.freelance.location": "Remote · Thailand",
    "exp.freelance.d1": "Designed and delivered 7+ real-world client projects: e-commerce platforms, multi-language sites, and business landing pages.",
    "exp.freelance.d2": "Built a full-stack tax-invoice and inventory management system for Thai SMEs with PDF generation.",
    "exp.freelance.d3": "Deployed all projects via Vercel with custom domains and CI/CD pipelines through GitHub. Applied on-page SEO.",
    "exp.freelance.tech": "Next.js · React · Nuxt.js · Vue.js · TypeScript · Node.js · Go · Prisma · PostgreSQL · Vercel · GitHub CI/CD",

    "skills.title": "Tech Stack",
    "skills.subtitle": "Tools & technologies I work with",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend & Database",
    "skills.tools": "Tools & Deploy",
    "skills.ai": "AI & Workflow",

    "projects.title": "Projects",
    "projects.filter.all": "All",
    "projects.filter.live": "Live",
    "projects.filter.fullstack": "Full-Stack",
    "projects.filter.landing": "Landing",
    "projects.live": "Live",
    "projects.private": "Private",
    "projects.view": "View Live",
    "projects.github": "GitHub",
    "projects.frontend": "FE",
    "projects.backend": "BE",
    "projects.deploy": "Deploy",

    "proj.wbyweb.name": "WBY — Web By You",
    "proj.wbyweb.desc":
      "Official company website for WBY — a web development agency. Dark-themed modern design showcasing services, portfolio, and contact.",
    "proj.dekmaho.name": "เด็กมาโห Art Toy",
    "proj.dekmaho.desc":
      "Art Toy showcase landing page for เด็กมาโห brand. Bilingual TH/EN with smooth Framer Motion animations.",
    "proj.matclean.name": "Matclean Dr.",
    "proj.matclean.desc":
      "Premium deep cleaning service website for mattresses, sofas, and carpets. Bilingual KR/EN with online booking.",
    "proj.invoice.name": "Pop & Non Invoice",
    "proj.invoice.desc":
      "Full-stack invoice management with auth, client management, and PDF generation. Powered by Neon Serverless PostgreSQL.",
    "proj.qr.name": "QR Lucky Draw",
    "proj.qr.desc":
      "Event registration and lucky draw system. Attendees register via QR code, admin draws winners in real-time.",
    "proj.daodeung.name": "Dao Deung Shop",
    "proj.daodeung.desc":
      "Thai product e-commerce landing page shipping trending goods from Thailand to Australia. Elegant green-themed design.",
    "proj.noobstudio.name": "Noob Studio",
    "proj.noobstudio.desc":
      "Creative studio landing page for Noob Studio — modern dark-themed design showcasing the brand identity and services.",

    "games.badge": "Systems · AI · Game Engineering",
    "games.title": "Engineering Lab",
    "games.intro": "Beyond client and product work, I build systems that stretch across AI developer tooling, remote execution, Unreal Engine 5, multiplayer, automation, and architecture experiments. These projects are where I practice system design, verification, and large-codebase workflows.",
    "games.stat1.value": "7+",
    "games.stat1.label": "Client Projects",
    "games.stat2.value": "MCP",
    "games.stat2.label": "AI Tooling",
    "games.stat3.value": "UE5",
    "games.stat3.label": "Systems Project",
    "games.stat4.value": "Go",
    "games.stat4.label": "Backend",
    "games.stack.title": "Systems Stack",
    "games.tech.ue5": "Unreal Engine 5.8 systems engineering with C++ / Blueprints, multiplayer sessions, NPC AI, save/inventory/building systems, UI, performance, and regression verification.",
    "games.tech.blueprint": "AI coding agents and MCP workflows for codebase exploration, implementation planning, tool use, verification, and reviewable changes.",
    "games.tech.blender": "Blender-to-Unreal asset workflows covering modelling, UV/materials, FBX export, LOD, collision, and import validation.",
    "games.tech.nanite": "Production-minded verification: Git workflows, CI/CD, type checking, builds, regression tests, policy checks, and explicit release gates.",
    "games.projects.title": "Selected Systems",
    "game.openworld.name": "RemoteForge",
    "game.openworld.desc": "Policy-first AI remote execution platform with a React/Vite control plane, Fastify/WebSocket relay, outbound device agent, MCP gateway, PostgreSQL, audit concepts, Docker/Caddy deployment design, and production safety gates.",
    "game.blenderchar.name": "Stranded",
    "game.blenderchar.desc": "Unreal Engine 5.8 survival / simulation project with C++ and Blueprints, Steam multiplayer/session flows, NPC systems, save/inventory/building systems, gameplay UI, automation, and performance verification.",
    "game.vfxdemo.name": "Exam Question Manager",
    "game.vfxdemo.desc": "Public full-stack architecture sample using Vue 3 + TypeScript and Go/Fiber with handler → service → repository layering, pagination, validation, structured errors, and replaceable persistence.",
    "games.private.note": "Private project details are summarized without exposing source, credentials, employer code, or customer data. Public proof is available through the portfolio and selected GitHub repositories.",

    "contact.title": "Get In Touch",
    "contact.subtitle": "Let's work together",
    "contact.email": "Send Email",
    "contact.github": "GitHub Profile",
    "contact.copy": "Copy Email",
    "contact.copied": "Copied!",
    "contact.open": "Open to opportunities",

    "footer.built": "Built with Next.js · TailwindCSS · shadcn/ui",
    "footer.rights": "All rights reserved.",
  },

  th: {
    "nav.about": "เกี่ยวกับ",
    "nav.experience": "ประสบการณ์",
    "nav.skills": "ทักษะ",
    "nav.projects": "ผลงาน",
    "nav.games": "Engineering Lab",
    "nav.contact": "ติดต่อ",

    "hero.greeting": "สวัสดี, ผมชื่อ",
    "hero.name": "ยุทธการ",
    "hero.role": "Software Engineer · Full-Stack Developer",
    "hero.bio":
      "Software Engineer / Full-Stack Developer ที่ Memsg ทำฟีเจอร์ production ด้วย Nuxt.js / Vue.js, TypeScript และ Go REST APIs ส่งมอบงาน freelance ให้ลูกค้าจริง 7+ โปรเจกต์ และใช้ AI coding agents / MCP โดยมีการตรวจสอบผลลัพธ์ก่อนรับโค้ด",
    "hero.cta.work": "ดูผลงาน",
    "hero.cta.contact": "ติดต่อผม",
    "hero.available": "พร้อมรับงาน",

    "about.title": "เกี่ยวกับผม",
    "about.subtitle": "นักพัฒนาและผู้สร้าง",
    "about.p1":
      "ผมทำงาน Software แบบ Full-Stack ตั้งแต่ reusable UI, state management, REST API, ระบบธุรกิจ, deployment ไปจนถึง production debugging ปัจจุบันทำงานกับ production codebase ที่ Memsg และรับงานในชื่อ WEB BY YOU โดยส่งมอบงานลูกค้าจริง 7+ โปรเจกต์ เช่นเว็บหลายภาษา E-Commerce ระบบอีเวนต์ และระบบใบกำกับภาษี/สต็อก",
    "about.p2":
      "จบ Computer Science (English Program) จากมหาวิทยาลัยราชภัฏบุรีรัมย์ ปัจจุบันโฟกัส production engineering และ AI-native developer workflow เช่น AI coding agents, MCP, codebase exploration, planning, debugging, refactoring และ test generation โดยตามด้วย lint/type-check/test, ตรวจ diff และ human review นอกจากนี้ยังพัฒนาระบบ Unreal Engine 5 ด้วย C++ / Blueprints เป็น side project อย่างจริงจัง",
    "about.stat1.value": "1",
    "about.stat1.label": "ปีประสบการณ์",
    "about.stat2.value": "BRU",
    "about.stat2.label": "ม.ราชภัฏบุรีรัมย์",
    "about.stat3.value": "10+",
    "about.stat3.label": "โปรเจกต์ลูกค้า",

    "about.edu.degree": "วิทยาการคอมพิวเตอร์ — English Program",
    "about.edu.school": "มหาวิทยาลัยราชภัฏบุรีรัมย์",
    "about.exp.role": "Software Engineer",
    "about.exp.company": "Memsg",

    "exp.title": "ประสบการณ์การทำงาน",
    "exp.subtitle": "เส้นทางอาชีพ",
    "exp.current": "ปัจจุบัน",

    "exp.memsg.role": "Frontend Developer",
    "exp.memsg.company": "Memsg · บุรีรัมย์ · งานประจำ",
    "exp.memsg.period": "พ.ค. 2568 – ปัจจุบัน",
    "exp.memsg.location": "On-site · บุรีรัมย์, ไทย",
    "exp.memsg.d1": "พัฒนา Frontend ที่ responsive และ reusable ด้วย Nuxt.js / Vue.js, TypeScript, Tailwind CSS และ Pinia จาก Figma และ product requirements",
    "exp.memsg.d2": "พัฒนาและเชื่อม REST APIs ด้วย Go ทำงานข้าม client-server flow และ backend services ที่มีอยู่จริง",
    "exp.memsg.d3": "ใช้ AI-assisted workflow สำหรับสำรวจ codebase, วางแผน, debug, refactor และ documentation พร้อม manual review และ verification ก่อนรับการเปลี่ยนแปลง",
    "exp.memsg.tech": "Nuxt.js · TypeScript · Tailwind CSS · REST API · Git",

    "exp.mango.role": "Software Development Intern",
    "exp.mango.company": "บริษัท Mango Consultant จำกัด · กรุงเทพฯ",
    "exp.mango.period": "พ.ย. 2567 – ก.พ. 2568 · 4 เดือน",
    "exp.mango.location": "On-site · กรุงเทพฯ, ไทย",
    "exp.mango.d1": "ร่วมพัฒนาและดูแลฟีเจอร์ของระบบ ERP สำหรับลูกค้าธุรกิจก่อสร้างและอสังหาริมทรัพย์",
    "exp.mango.d2": "ฝึกฝน Version Control ด้วย Git และ GitHub — Branching, Pull Request และ Code Review",
    "exp.mango.d3": "ร่วมงานกับ Senior Developer ด้าน Software Architecture และ ERP Best Practices ในสภาพแวดล้อม Agile",

    "exp.freelance.role": "Freelance Web Developer",
    "exp.freelance.company": "WEB BY YOU · รับงานอิสระ",
    "exp.freelance.period": "ม.ค. 2567 – ปัจจุบัน",
    "exp.freelance.location": "Remote · ไทย",
    "exp.freelance.d1": "ออกแบบและส่งมอบโปรเจกต์จริง 7+ รายการ ทั้ง E-commerce, เว็บหลายภาษา และ Landing Page ธุรกิจ",
    "exp.freelance.d2": "พัฒนาระบบใบแจ้งหนี้และจัดการสต็อกสินค้าแบบ Full-Stack พร้อมออก PDF สำหรับ SME ไทย",
    "exp.freelance.d3": "Deploy ทุกโปรเจกต์ผ่าน Vercel พร้อม Custom Domain และ CI/CD ผ่าน GitHub รวมถึงทำ On-page SEO",
    "exp.freelance.tech": "Next.js · React · TypeScript · Tailwind CSS · Vercel · Git · SEO",

    "skills.title": "เทคโนโลยีที่ใช้",
    "skills.subtitle": "เครื่องมือและเทคโนโลยีที่ผมทำงานด้วย",
    "skills.frontend": "หน้าบ้าน",
    "skills.backend": "หลังบ้านและฐานข้อมูล",
    "skills.tools": "เครื่องมือและ Deploy",
    "skills.ai": "AI & Workflow",

    "projects.title": "ผลงาน",
    "projects.filter.all": "ทั้งหมด",
    "projects.filter.live": "ใช้งานจริง",
    "projects.filter.fullstack": "Full-Stack",
    "projects.filter.landing": "Landing",
    "projects.live": "ใช้งานจริง",
    "projects.private": "ส่วนตัว",
    "projects.view": "เปิดเว็บ",
    "projects.github": "GitHub",
    "projects.frontend": "FE",
    "projects.backend": "BE",
    "projects.deploy": "Deploy",

    "proj.wbyweb.name": "WBY — Web By You",
    "proj.wbyweb.desc":
      "เว็บไซต์บริษัท WBY — เอเจนซี่รับทำเว็บ ดีไซน์ dark theme สมัยใหม่ แสดงบริการ ผลงาน และช่องทางติดต่อ",
    "proj.dekmaho.name": "เด็กมาโห Art Toy",
    "proj.dekmaho.desc":
      "เว็บแสดงสินค้า Art Toy ของแบรนด์เด็กมาโห รองรับ 2 ภาษา (ไทย/อังกฤษ) พร้อม Framer Motion animations",
    "proj.matclean.name": "Matclean Dr.",
    "proj.matclean.desc":
      "เว็บบริการทำความสะอาดเชิงลึก — ที่นอน โซฟา และพรม รองรับ 2 ภาษา (เกาหลี/อังกฤษ) พร้อมระบบจองออนไลน์",
    "proj.invoice.name": "Pop & Non Invoice",
    "proj.invoice.desc":
      "ระบบจัดการใบแจ้งหนี้ Full-Stack พร้อม auth การจัดการลูกค้า และสร้าง PDF ใช้ Neon Serverless PostgreSQL",
    "proj.qr.name": "ระบบสุ่มผู้โชคดี",
    "proj.qr.desc":
      "ระบบลงทะเบียนงานอีเวนท์และจับรางวัลสุ่มผู้โชคดี สแกน QR ลงทะเบียน admin จับรางวัลแบบ real-time",
    "proj.daodeung.name": "ร้านดาวเรือง",
    "proj.daodeung.desc":
      "เว็บ e-commerce ร้านดาวเรือง จำหน่ายสินค้าไทยตามกระแสส่งถึงออสเตรเลีย ดีไซน์สีเขียวสวยงาม",
    "proj.noobstudio.name": "Noob Studio",
    "proj.noobstudio.desc":
      "Landing page สำหรับ Noob Studio — ดีไซน์ dark theme สมัยใหม่ แสดง Brand Identity และบริการของสตูดิโอ",

    "games.badge": "Systems · AI · Game Engineering",
    "games.title": "Engineering Lab",
    "games.intro": "นอกจากงานลูกค้าและ production ผมยังทำระบบด้าน AI developer tooling, remote execution, Unreal Engine 5, multiplayer, automation และ architecture experiments เพื่อฝึก system design, verification และการทำงานกับ codebase ขนาดใหญ่",
    "games.stat1.value": "2+",
    "games.stat1.label": "โปรเจกต์ลูกค้า",
    "games.stat2.value": "UE5",
    "games.stat2.label": "AI Tooling",
    "games.stat3.value": "3+",
    "games.stat3.label": "Systems Project",
    "games.stat4.value": "Lumen",
    "games.stat4.label": "Real-Time GI",
    "games.stack.title": "Game Dev Stack",
    "games.tech.ue5": "ทำระบบ Unreal Engine 5.8 ด้วย C++ / Blueprints รวม multiplayer session, NPC AI, save/inventory/building, UI, performance และ regression verification",
    "games.tech.blueprint": "ใช้ AI coding agents และ MCP สำหรับสำรวจ codebase, planning, tool use, verification และการเปลี่ยนแปลงที่ตรวจสอบย้อนหลังได้",
    "games.tech.blender": "ทำ Blender-to-Unreal asset workflow ตั้งแต่ modelling, UV/material, FBX export, LOD, collision และ import validation",
    "games.tech.nanite": "เน้น verification แบบ production: Git workflow, CI/CD, type checking, build, regression test, policy check และ release gate ที่ชัดเจน",
    "games.projects.title": "ระบบที่เลือกมาแสดง",
    "game.openworld.name": "Open World Prototype",
    "game.openworld.desc": "แพลตฟอร์ม AI remote execution แบบ policy-first มี React/Vite control plane, Fastify/WebSocket relay, outbound device agent, MCP gateway, PostgreSQL, audit concepts, Docker/Caddy deployment design และ production safety gates",
    "game.blenderchar.name": "Character Pipeline",
    "game.blenderchar.desc": "โปรเจกต์ survival / simulation บน Unreal Engine 5.8 มี C++ / Blueprints, Steam multiplayer/session, NPC, save/inventory/building, gameplay UI, automation และ performance verification",
    "game.vfxdemo.name": "Real-Time VFX Demo",
    "game.vfxdemo.desc": "ตัวอย่าง Full-Stack แบบ public ใช้ Vue 3 + TypeScript และ Go/Fiber วางโครง handler → service → repository พร้อม pagination, validation, structured errors และ persistence ที่เปลี่ยน implementation ได้",
    "games.private.note": "โปรเจกต์ private จะแสดงเฉพาะรายละเอียดที่เปิดเผยได้ โดยไม่เปิด source, credentials, employer code หรือข้อมูลลูกค้า ส่วนหลักฐาน public ดูได้จาก Portfolio และ GitHub ที่เลือกไว้",

    "contact.title": "ติดต่อผม",
    "contact.subtitle": "ยินดีร่วมงานด้วยเสมอ",
    "contact.email": "ส่งอีเมล",
    "contact.github": "GitHub ของผม",
    "contact.copy": "คัดลอกอีเมล",
    "contact.copied": "คัดลอกแล้ว!",
    "contact.open": "พร้อมรับโอกาสใหม่",

    "footer.built": "สร้างด้วย Next.js · TailwindCSS · shadcn/ui",
    "footer.rights": "สงวนลิขสิทธิ์ทุกประการ",
  },
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "th" : "en"));
  const t = (key: string): string => translations[lang][key] ?? key;
  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
