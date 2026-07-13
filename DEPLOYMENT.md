# LinkedBoost AI - Deployment Guide

## Quick Start - Public URL'ye Erişim

LinkedBoost AI'ı herkese açık yapabilmek için şu adımları takip et:

### 1️⃣ Vercel'e Bağlan (Önerilir)

**En kolay yol - Vercel üzerinden otomatik deploy:**

1. https://vercel.com'a git
2. GitHub'ını bağla
3. `erkan-kiyik/coseade` repo'sunu seç
4. Environment variables ekle:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
   SUPABASE_SERVICE_ROLE_KEY=your-key
   DATABASE_URL=your-db-url
   DIRECT_URL=your-direct-url
   OPENROUTER_API_KEY=your-key
   STRIPE_SECRET_KEY=your-key
   STRIPE_WEBHOOK_SECRET=your-key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-key
   STRIPE_PRO_PRICE_ID=your-price-id
   ```
5. Deploy butonuna tıkla ✅

**Sonuç:** Public URL (örn: `https://linkedboost-ai.vercel.app`) alırsın!

---

### 2️⃣ GitHub Actions ile Otomatik Deploy

`.github/workflows/deploy.yml` zaten setup'lanmış. Şu secrets'ları GitHub repo settings'inde ekle:

```
VERCEL_TOKEN=your-vercel-token
VERCEL_ORG_ID=your-org-id
VERCEL_PROJECT_ID=your-project-id
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
DATABASE_URL
DIRECT_URL
OPENROUTER_API_KEY
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
STRIPE_PRO_PRICE_ID
```

Sonra her push'ta otomatik deploy olur! 🚀

---

### 3️⃣ Local Development

```bash
npm install
npm run dev
```

`http://localhost:3000` açılır (otomatik Next.js port)

---

## Environment Variables

Tüm gerekli env variables `.env.example`'de var. 

**Production için:** `.env.local` oluşturup secrets ekle

---

## Deployment Statüsü

| Ortam | URL | Status |
|-------|-----|--------|
| Local Dev | localhost:5500 | ✅ Running |
| Vercel | TBD | ⏳ Setup needed |
| GitHub Actions | Configured | ✅ Ready |

---

## Troubleshooting

**"Connection refused" localhost'ta?**
- Normal! Remote ortamda network böyle çalışıyor
- Vercel'e deploy et public URL al

**Build hatası?**
- `npm run build` local'de test et
- Environment variables kontrol et
- Database bağlantısı doğru mu?

---

## Next Steps

1. ✅ GitHub Actions workflow hazır
2. ⏳ Vercel'e bağla
3. ⏳ Secrets ekle
4. ⏳ Deploy et
5. ✅ Public URL'de erişim sağla!

---

**Support:** GitHub Issues'da ticket aç veya PR'da discuss et.
