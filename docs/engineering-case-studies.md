# Engineering Case Studies

This document summarizes selected work at a level suitable for a public portfolio. Private source code, credentials, customer data, and employer-confidential implementation details are intentionally omitted.

## 1. Production Full-Stack Development — Memsg

**Context:** production messaging-platform development.

**Responsibilities**
- Build responsive, reusable UI from Figma and product requirements.
- Work with Nuxt.js / Vue.js, TypeScript, Tailwind CSS, and Pinia.
- Develop and integrate REST APIs in Go.
- Debug and refactor within an existing production codebase.
- Collaborate through Git and code review.
- Use AI-assisted codebase exploration, planning, debugging, refactoring, and documentation while keeping manual verification in the loop.

**Engineering themes:** maintainability, integration, production debugging, collaboration, and iterative delivery.

---

## 2. Pop & Non Invoice — Business System

**Problem:** Thai SMEs need a practical way to manage customers, products, inventory, tax-invoice workflows, and generated documents.

**Work delivered**
- Authentication
- Customer and product management
- Inventory workflows
- Tax-invoice flows
- PDF document generation
- Full-stack data and UI implementation

**Stack:** Next.js, TypeScript, Prisma, Neon PostgreSQL, Vercel.

**Engineering themes:** business rules, data modeling, end-to-end ownership, and document workflows.

---

## 3. Exam Question Manager — Public Full-Stack Sample

A compact public project that demonstrates architecture rather than only UI.

**Frontend:** Vue 3, TypeScript, Vite, Tailwind CSS  
**Backend:** Go, Fiber

**Architecture**

```text
handler → service → repository
```

The repository layer is abstracted so storage can be replaced without rewriting business logic or HTTP handlers.

**Features**
- CRUD-style question management
- Pagination
- Input validation
- Structured API errors
- Persistence
- Direct local-state updates to avoid unnecessary full-list requests

Repository: https://github.com/Yuttakarn2545/exam-question-manager

---

## 4. RemoteForge — AI Developer Tooling

Private engineering project; this summary intentionally excludes sensitive implementation details.

**Goal:** provide policy-guarded remote execution for computers controlled by the user and expose those capabilities safely to AI clients.

**System areas**
- Web control plane
- API / WebSocket relay
- Outbound device agent
- MCP gateway
- Workspace / device authorization
- Usage, quota, and audit concepts
- Deployment and production-safety checks

**Engineering themes:** AI tooling, MCP, distributed systems, permissions, remote execution safety, observability, and operational readiness.

---

## 5. Stranded — Unreal Engine 5 Systems Engineering

Private Unreal Engine 5.8 survival / simulation project.

**Systems worked on**
- C++ and Blueprint gameplay systems
- Steam multiplayer / sessions
- NPC AI and behavior
- Save, inventory, building, input, audio, and interaction systems
- Gameplay UI
- Performance and regression verification
- Blender-to-Unreal asset pipeline
- Production-readiness checks and automation

**Engineering themes:** large-codebase maintenance, gameplay architecture, stateful systems, multiplayer, automation, and performance.

---

## AI-Assisted Engineering Workflow

AI is used as an accelerator while verification stays explicit.

```text
inspect codebase
→ identify constraints
→ plan changes
→ implement
→ run lint / type-check / tests
→ inspect diff
→ human review
```

Tools and concepts include AI coding agents, MCP, tool-connected LLM workflows, reusable workflow skills, and CLI-based agent workflows.

## Links

- Portfolio: https://www.webbyyu.net
- LinkedIn: https://www.linkedin.com/in/yuttakan-phunkhlang/
- Public full-stack sample: https://github.com/Yuttakarn2545/exam-question-manager
