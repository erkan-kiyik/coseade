# LinkedBoost AI 🚀

**Optimize your LinkedIn profile with AI — get recruiter-ready in under 60 seconds.**

A production-ready SaaS application that analyzes LinkedIn profiles, scores them the way recruiters and ATS systems do, and generates optimized headlines, About sections, experience bullets, posts, and more.

## Features

| Feature | Description | Plan |
|---|---|---|
| **Profile Analyzer** | Upload your LinkedIn PDF export or paste your profile; get scored across 8 dimensions (Recruiter, ATS, Personal Branding, Leadership, Networking, Keyword Optimization, Profile Completeness, Career Growth) with confidence levels, explanations, and per-section feedback, plus a PDF report export | Free (3/day) |
| **ATS Checker** | Compare a resume against a job description: match %, missing keywords, strengths, weaknesses, fixes | Pro |
| **Headline Generator** | 10 optimized headlines per run, in 8 styles (Executive → AI Engineer) | Free |
| **About Generator** | 3 story-driven About variants in 6 tones | Free |
| **Experience Optimizer** | STAR-format rewrites that turn duties into measurable achievements | Free |
| **Skills Analyzer** | Missing skills, trending skills, and ATS keywords — with charts | Free (3/day) |
| **Post Generator** | Hook + story + CTA + hashtags, carousel/image ideas, best posting time, engagement forecast | Free (3/day) |
| **AI Career Coach** | Streaming chat: interviews, salary negotiation, roadmaps, networking | Pro |
| **Career Toolkit** | Cover letters, networking messages, referral requests, interview prep, content calendar, career roadmap | Free (limited) |
| **Analytics Dashboard** | Score trend, recruiter visibility, keyword growth, content performance, activity charts | All |

## Tech Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS, shadcn/ui-style components, Framer Motion
- **Auth & DB:** Supabase (Google OAuth + email/password + password reset) with Prisma ORM on Supabase Postgres
- **Payments:** Stripe subscriptions with webhooks
- **AI:** OpenRouter (multi-provider — Claude, Gemini, GPT, and more via one API), structured JSON outputs validated with Zod
- **Forms:** React Hook Form + Zod
- **Charts:** Recharts (CVD-validated palette)
- **Deployment:** Vercel-ready

## Getting Started

### 1. Clone & install

```bash
git clone <this-repo>
cd linkedboost-ai
npm install
```

### 2. Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. **Project Settings → API**: copy the URL, `anon` key, and `service_role` key.
3. **Project Settings → Database**: copy both connection strings — the pooled one (port 6543) for `DATABASE_URL`, the direct one (port 5432) for `DIRECT_URL`.
4. **Authentication → Providers → Google**: enable it and add your Google OAuth client ID/secret ([Google Cloud Console](https://console.cloud.google.com/apis/credentials); authorized redirect URI: `https://<project>.supabase.co/auth/v1/callback`).
5. **Authentication → URL Configuration**: set the Site URL to your app URL and add `http://localhost:3000/auth/callback` (and your production `/auth/callback`) to redirect URLs.

### 3. Environment variables

```bash
cp .env.example .env
```

Fill in every value — each one is documented inline in [.env.example](.env.example).

### 4. Database

```bash
npm run db:push        # creates the schema in Supabase Postgres
```

### 5. Stripe setup

1. Create a **product** with a **recurring $12/month price**; put its price ID in `STRIPE_PRO_PRICE_ID`.
2. Create a webhook endpoint pointing to `https://<your-domain>/api/stripe/webhook` with events:
   `checkout.session.completed`, `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.paid`, `invoice.payment_failed`.
   Put the signing secret in `STRIPE_WEBHOOK_SECRET`.
3. For local testing: `stripe listen --forward-to localhost:3000/api/stripe/webhook`.

### 6. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build (runs `prisma generate` first) |
| `npm run start` | Serve the production build |
| `npm run typecheck` | TypeScript check |
| `npm run db:push` | Push the Prisma schema to the database |
| `npm run db:migrate` | Create a migration (development) |
| `npm run db:studio` | Prisma Studio data browser |

## Architecture

```
src/
├── app/
│   ├── page.tsx                  # Landing page (hero, features, demo, pricing, FAQ)
│   ├── (auth)/                   # login / signup / forgot- & reset-password
│   ├── auth/callback/            # OAuth + email-link code exchange
│   ├── dashboard/                # Protected app (sidebar layout, 11 pages)
│   └── api/
│       ├── ai/*                  # One route per AI feature (JSON, validated)
│       ├── extract-pdf/          # LinkedIn/resume PDF → text
│       └── stripe/*              # checkout / portal / webhook
├── components/
│   ├── ui/                       # shadcn/ui-style primitives
│   ├── landing/                  # Landing page sections
│   ├── dashboard/                # Sidebar, charts, page chrome
│   ├── features/                 # One client component per AI feature
│   └── auth/                     # Auth forms
├── lib/
│   ├── ai/                       # OpenRouter client, prompts, zod schemas, route factory
│   ├── supabase/                 # Browser/server/middleware clients
│   ├── prisma.ts · stripe.ts     # Singletons
│   ├── plans.ts · usage.ts       # Plan limits + daily usage enforcement
│   └── rate-limit.ts             # Burst rate limiting
└── middleware.ts                 # Session refresh + route protection
```

**AI pipeline:** every feature route is built with a shared factory (`lib/ai/handler.ts`) that runs: auth → burst rate-limit → Zod input validation → daily plan-limit check → prompt → JSON-mode completion → Zod output validation → usage increment + history record. Prompts live in `lib/ai/prompts.ts`; the model is configurable via `OPENROUTER_MODEL` (any OpenRouter model slug, e.g. `anthropic/claude-opus-4.8`, `google/gemini-2.5-pro`, `openai/gpt-4o`) and falls back automatically if unavailable.

**Billing:** Stripe Checkout creates the subscription; webhooks keep `Subscription`/`Payment` rows and the user's plan in sync; the Stripe billing portal handles cancel/upgrade/payment method.

## Security

- Protected routes enforced in middleware (`/dashboard/**`) and re-checked in every server component and API route
- All inputs validated with Zod; user text sanitized before reaching prompts
- Per-user burst rate limiting on every AI/billing endpoint + durable daily limits in Postgres
- Stripe webhook signature verification
- Security headers (`X-Frame-Options`, `nosniff`, referrer & permissions policies)
- Secrets only via environment variables — nothing checked in

## Deploying to Vercel

1. Push this repository to GitHub and import it in Vercel.
2. Add every variable from `.env.example` in **Project → Settings → Environment Variables** (set `NEXT_PUBLIC_APP_URL` to your production URL).
3. Deploy. Then point your Stripe webhook and Supabase redirect URLs at the production domain.

The build command (`prisma generate && next build`) works on Vercel out of the box.

## License

MIT — not affiliated with LinkedIn Corporation.
