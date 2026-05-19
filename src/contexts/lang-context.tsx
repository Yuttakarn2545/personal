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
    "nav.contact": "Contact",

    "hero.greeting": "Hi, I'm",
    "hero.name": "Yuttakarn",
    "hero.role": "Software Engineer · Full-Stack Developer",
    "hero.bio":
      "Full-Stack Developer at Memsg with 1 year of experience building real-world web apps. Freelancing on the side as WEB BY YOU. AI-assisted workflow advocate.",
    "hero.cta.work": "View My Work",
    "hero.cta.contact": "Get in Touch",
    "hero.available": "Open to Work",

    "about.title": "About Me",
    "about.subtitle": "Developer & Creator",
    "about.p1":
      "I'm a programmer who loves turning ideas into real, working products. By day I work as a Full-Stack Developer at Memsg, building production systems used at scale. After hours I take on freelance work under the name WEB BY YOU, where I've delivered a number of projects for real clients — multilingual e-commerce stores, invoice systems, and business landing pages.",
    "about.p2":
      "I graduated in Computer Science (English Program) from Buriram Rajabhat University, with a solid IT foundation and a habit of picking up new tech quickly. AI is part of my daily workflow — I use it as a co-pilot to ship cleaner code faster, not as a shortcut. In my free time I tinker with Unreal Engine and 3D real-time rendering as a personal hobby.",
    "about.stat1.value": "1",
    "about.stat1.label": "Years Experience",
    "about.stat2.value": "BRU",
    "about.stat2.label": "Buriram Rajabhat Univ.",
    "about.stat3.value": "10+",
    "about.stat3.label": "Projects Shipped",

    "about.edu.degree": "Computer Science — English Program",
    "about.edu.school": "Buriram Rajabhat University",
    "about.exp.role": "Software Engineer",
    "about.exp.company": "Memsg",

    "exp.title": "Work Experience",
    "exp.subtitle": "Career Journey",
    "exp.current": "Present",

    "exp.memsg.role": "Frontend Developer",
    "exp.memsg.company": "Memsg · Buriram, Thailand · Full-time",
    "exp.memsg.period": "May 2025 – Present",
    "exp.memsg.location": "On-site · Buriram, Thailand",
    "exp.memsg.d1": "Developed frontend UI components with Nuxt.js and TypeScript using Tailwind CSS for responsive, consistent design.",
    "exp.memsg.d2": "Collaborated with designers using Figma to translate UI/UX designs into pixel-perfect components.",
    "exp.memsg.d3": "Leveraged AI tools to accelerate development workflow and reduce delivery time.",
    "exp.memsg.tech": "Nuxt.js · TypeScript · Tailwind CSS · REST API · Git",

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
    "exp.freelance.tech": "Next.js · React · TypeScript · Tailwind CSS · Vercel · Git · SEO",

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
    "nav.contact": "ติดต่อ",

    "hero.greeting": "สวัสดี, ผมชื่อ",
    "hero.name": "ยุทธการ",
    "hero.role": "Software Engineer · Full-Stack Developer",
    "hero.bio":
      "Full-Stack Developer ที่ Memsg ประสบการณ์ 1 ปีในการพัฒนาเว็บแอปพลิเคชันใช้งานจริง รับงานเสริมในชื่อ WEB BY YOU ใช้ AI เป็นส่วนหนึ่งของ workflow",
    "hero.cta.work": "ดูผลงาน",
    "hero.cta.contact": "ติดต่อผม",
    "hero.available": "พร้อมรับงาน",

    "about.title": "เกี่ยวกับผม",
    "about.subtitle": "นักพัฒนาและผู้สร้าง",
    "about.p1":
      "ผมเป็นโปรแกรมเมอร์ที่ชอบเปลี่ยนไอเดียให้กลายเป็นเว็บและระบบที่ใช้งานได้จริง ปัจจุบันทำงานเป็น Full-Stack Developer ที่ Memsg ดูแลระบบที่รองรับผู้ใช้งานจริงในระดับองค์กร นอกเวลางานก็รับงานเสริมในชื่อ WEB BY YOU พัฒนาเว็บให้ลูกค้ามาหลายโปรเจกต์ ทั้งร้านค้าออนไลน์หลายภาษา ระบบใบแจ้งหนี้ และ Landing Page ของธุรกิจจริง",
    "about.p2":
      "จบการศึกษาสาขาวิทยาการคอมพิวเตอร์ (English Program) จากมหาวิทยาลัยราชภัฏบุรีรัมย์ มีพื้นฐานด้าน IT ที่แน่นและชอบเรียนรู้สิ่งใหม่อยู่เสมอ ใช้ AI เป็นผู้ช่วยในการทำงานทุกวันเพื่อให้เขียนโค้ดได้เร็วและมีคุณภาพมากขึ้น เวลาว่างชอบลองเล่น Unreal Engine และงาน 3D real-time rendering เป็นงานอดิเรก",
    "about.stat1.value": "1",
    "about.stat1.label": "ปีประสบการณ์",
    "about.stat2.value": "BRU",
    "about.stat2.label": "ม.ราชภัฏบุรีรัมย์",
    "about.stat3.value": "10+",
    "about.stat3.label": "โปรเจกต์ที่ส่งมอบ",

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
    "exp.memsg.d1": "พัฒนา UI Components ฝั่ง Frontend ด้วย Nuxt.js, TypeScript และ Tailwind CSS สำหรับ Responsive Design",
    "exp.memsg.d2": "ร่วมงานกับ Designer ผ่าน Figma แปลง UI/UX Design ให้เป็น Component ที่ Pixel-Perfect",
    "exp.memsg.d3": "นำ AI Tools มาใช้เร่ง Workflow การพัฒนาเพื่อลดเวลา Delivery",
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
