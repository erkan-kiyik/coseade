import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-12">
      <div className="aurora-bg" aria-hidden />
      <Link href="/" className="relative mb-8 flex items-center gap-3 font-semibold">
        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-xl shadow-blue-500/40 backdrop-blur-sm border border-white/20">
          <span className="text-2xl font-bold">📈</span>
        </span>
        <div className="flex flex-col">
          <span className="text-base font-bold tracking-tight leading-tight text-blue-900 dark:text-blue-100">
            LinkedBoost
          </span>
          <span className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Stock AI
          </span>
        </div>
      </Link>
      <div className="glass-strong relative w-full max-w-md rounded-3xl p-8 shadow-2xl shadow-violet-500/10">
        {children}
      </div>
    </div>
  );
}
