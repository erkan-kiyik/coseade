# Multi-stage build for LinkedBoost AI — Next.js standalone output.
# Built for Hugging Face Spaces (Docker SDK) but works on any container host.

FROM node:22-slim AS deps
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends openssl && rm -rf /var/lib/apt/lists/*
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-slim AS builder
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends openssl && rm -rf /var/lib/apt/lists/*
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Build-time placeholders — real values are provided at runtime via Space
# secrets/variables. Next.js only needs these to not crash during build;
# NEXT_PUBLIC_* values baked in here are overridden by the fallback in
# src/lib/supabase/config.ts if unset at runtime.
ENV NEXT_PUBLIC_SUPABASE_URL="https://placeholder.supabase.co"
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY="placeholder-anon-key"
ENV DATABASE_URL="postgresql://user:pass@localhost:5432/db"
ENV DIRECT_URL="postgresql://user:pass@localhost:5432/db"
RUN npx prisma generate
RUN npm run build

FROM node:22-slim AS runner
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends openssl && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production
# Hugging Face Spaces (Docker SDK) route traffic to this port by default.
ENV PORT=7860
ENV HOSTNAME=0.0.0.0

# HF Spaces run containers as an arbitrary non-root UID; make /app writable.
RUN groupadd -g 1000 nextjs && useradd -u 1000 -g nextjs -m nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma
RUN chown -R nextjs:nextjs /app
USER nextjs

EXPOSE 7860
CMD ["node", "server.js"]
