// Public, client-safe Supabase project config. The anon key is designed to be
// exposed to the browser — row level security protects the actual data — so a
// fallback here keeps auth working even when env vars aren't wired up.
export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ckzvsropwzbelwhrhswt.supabase.co";
export const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrenZzcm9wd3piZWx3aHJoc3d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwMTAyNzUsImV4cCI6MjA5OTU4NjI3NX0.pZahTV8N7GszTTvKyBo-rC8uKx27FcyS9vOJw8vjlVM";
