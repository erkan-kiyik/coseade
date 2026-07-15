# LinkedBoost AI - Deployment Guide

## Quick Start - Public URL'ye Erişim

LinkedBoost AI'ı herkese açık yapabilmek için şu adımları takip et:

### 1️⃣ Vercel'e Bağlan + Kendi Domain'i Ekle 🎯

**Vercel üzerinden otomatik deploy + ekkod.com domain:**

#### Step 1: Vercel Setup
1. https://vercel.com'a git ve hesap oluştur
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

#### Step 2: Custom Domain Ekle
1. Vercel Project Settings → Domains
2. `ekkod.com` ve `www.ekkod.com` ekle
3. DNS settings'inde verilen CNAME records'ları ekle:
   ```
   CNAME: ekkod.com → cname.vercel-dns.com
   CNAME: www.ekkod.com → cname.vercel-dns.com
   ```
4. DNS sağlayıcında (GoDaddy, Namecheap, vb.) bu records'ları ekle
5. Vercel verify ettikten sonra otomatik SSL/HTTPS aktif olur

**Sonuç:** `https://ekkod.com` tarayıcıda açılacak! 🚀

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
| Vercel Production | ekkod.com | ⏳ Setup needed |
| Custom Domain | https://ekkod.com | ⏳ DNS config needed |
| GitHub Actions | Configured | ✅ Ready |

---

## DNS Configuration (ekkod.com için)

### Adım 1: Domain Registrar'da (GoDaddy, Namecheap, vb.)

1. Hosting provider panelinde DNS records bölümüne git
2. Şu CNAME record'ları ekle:

```
Host: ekkod.com
Type: CNAME
Value: cname.vercel-dns.com

Host: www.ekkod.com
Type: CNAME
Value: cname.vercel-dns.com
```

### Adım 2: DNS Propagation

- DNS değişiklikleri **24-48 saat** sürebilir
- Vercel panel'de "Verifying" yazarsa beklemeye devam et
- DNS Checker (dnschecker.org) ile kontrol et

### Adım 3: Vercel'de Domain Verify

1. Vercel Project Settings → Domains
2. `ekkod.com` status'u "Valid Configuration" olana dek bekle
3. Otomatik HTTPS certificate yaratılacak (Let's Encrypt)

**Sonuç:** `https://ekkod.com` → LinkedBoost AI! 🎉

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
