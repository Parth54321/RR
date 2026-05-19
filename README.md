# AI Portfolio Platform (Investor-Grade)

Next.js 15 + React 19 AI-first personal brand platform blueprint with modular architecture for projects, research, publication engine, admin CMS, and analytics center.

## Stack
- Next.js App Router, TypeScript, Tailwind, Framer Motion, React Three Fiber
- Prisma + PostgreSQL + Supabase-compatible datasource
- Clerk authentication
- PostHog + GA + Vercel Analytics

## Core Modules
- Public brand surfaces: Home, About, Projects, Research, Blog, Case Studies, Experience, Skills, Contact
- Dynamic routes: project detail and blog detail
- Admin CMS scaffold for content ops
- Analytics center and AI playground entrypoints

## Run
```bash
npm install
npm run db:generate
npm run dev
```

## Deployment
- Vercel for web runtime
- PostgreSQL/Supabase for data
- Dockerfile can be added for container deployments
- Add CI pipeline to run `npm run lint && npm run typecheck && npm run build`

## Security Checklist
- Add rate limiting middleware
- Validate server actions with Zod
- Enforce RBAC in dashboard routes
- Use signed upload flows for media

## Performance & SEO
- Add route-level metadata and schema.org JSON-LD
- Use next/image and dynamic imports for heavy sections
- Introduce partial prerendering + cache controls per route
