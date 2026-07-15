# Deploying LinkedBoost AI to Hugging Face Spaces

This repo includes a `Dockerfile` (multi-stage Next.js standalone build) so
it can run as a **Docker Space** on Hugging Face. I can't create the Space or
push to huggingface.co myself — Spaces are a separate git remote requiring
your HF account, and this environment's network policy blocks direct access
to huggingface.co. Here's the exact path to do it yourself in a few minutes.

## 1. Create the Space

1. Go to https://huggingface.co/new-space
2. Owner: your account · Space name: e.g. `linkedboost-ai`
3. **SDK: Docker** (not Gradio/Streamlit/Static)
4. Visibility: Public or Private, your call
5. Click **Create Space** — it initializes an empty git repo at
   `https://huggingface.co/spaces/<you>/linkedboost-ai`

## 2. Push this repo's code to the Space

Two options — pick one.

### Option A: Automatic sync via GitHub Actions (recommended)

This repo includes `.github/workflows/sync-hf-space.yml`, which pushes the
current code to your Space on every push to this branch — no manual git
commands, ever again.

1. Create a Hugging Face access token with **Write** permission:
   https://huggingface.co/settings/tokens → New token → role "Write"
2. In this GitHub repo: **Settings → Secrets and variables → Actions**
   - Add **secret** `HF_TOKEN` = the token from step 1
   - Add **variable** `HF_SPACE_REPO` = `<you>/linkedboost-ai` (no `spaces/` prefix)
3. Push anything (or go to **Actions → Sync to Hugging Face Space → Run workflow**)

The workflow copies the repo (minus `android/`, `ios/`, `www/`,
`node_modules`, `.next`), writes the Space's `README.md` card, and
force-pushes to `spaces/<you>/linkedboost-ai` on `main`. From then on, every
push to GitHub auto-syncs to the Space.

### Option B: Manual push (one-time or if you prefer not to add a token)

Do this locally:

```bash
git clone https://github.com/erkan-kiyik/coseade.git
cd coseade
git checkout claude/linkedboost-ai-xkwrz7   # or main once merged

# Add the Space as a second remote
git remote add space https://huggingface.co/spaces/<you>/linkedboost-ai

# Replace the GitHub README with the required Space card
cat > README.md << 'EOF'
---
title: LinkedBoost AI
emoji: 🚀
colorFrom: blue
colorTo: indigo
sdk: docker
app_port: 7860
pinned: false
---

# LinkedBoost AI
AI-powered LinkedIn profile optimization — recruiter score, ATS score,
personal branding, keyword optimization, and more.
EOF

git add README.md
git commit -m "Add Space card"
git push space HEAD:main
```

Hugging Face will detect the `Dockerfile` and start building immediately —
watch progress in the Space's **Logs** tab.

## 3. Configure environment variables (required)

Go to your Space → **Settings** → **Variables and secrets** and add:

| Name | Value | Secret? |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | your Supabase project URL | Variable |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | your Supabase anon key | Variable |
| `SUPABASE_SERVICE_ROLE_KEY` | your Supabase service role key | **Secret** |
| `DATABASE_URL` | Postgres connection string (pooled) | **Secret** |
| `DIRECT_URL` | Postgres connection string (direct) | **Secret** |
| `OPENROUTER_API_KEY` | your OpenRouter key | **Secret** |
| `STRIPE_SECRET_KEY` | your Stripe secret key | **Secret** |
| `STRIPE_WEBHOOK_SECRET` | your Stripe webhook secret | **Secret** |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | your Stripe publishable key | Variable |
| `STRIPE_PRO_PRICE_ID` | your Stripe Pro price ID | Variable |
| `NEXT_PUBLIC_APP_URL` | `https://<you>-linkedboost-ai.hf.space` | Variable |

Adding/changing a variable triggers an automatic rebuild.

## 4. Custom domain

Hugging Face Spaces support custom domains on paid tiers
(Settings → Domains). Point your domain's DNS per HF's instructions there —
same idea as the Vercel setup, different dashboard.

## Notes

- The Docker build already runs `prisma generate` and `next build` with
  `output: "standalone"`, so the final image only ships the minimal
  server bundle (`.next/standalone` + `.next/static` + `public`).
- Free-tier Spaces sleep after inactivity and cold-start on the next
  request — fine for testing, less ideal than Vercel for production
  traffic. Upgrade to a persistent/paid Space hardware tier to avoid that.
- This Space is independent from the Vercel deployment already running;
  you can keep both, point a domain at whichever one you prefer, or use
  one as staging and the other as production.
