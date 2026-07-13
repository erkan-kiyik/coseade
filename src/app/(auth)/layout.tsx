import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-12">
      <div className="aurora-bg" aria-hidden />
      <Link href="/" className="relative mb-8 flex items-center gap-2.5 font-semibold">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 text-white shadow-lg shadow-purple-500/30">
          <span className="text-xl font-bold">⚡</span>
        </span>
        <div className="flex flex-col">
          <span className="text-sm font-bold tracking-tight leading-tight">
            LinkedBoost
          </span>
          <span className="text-xs font-semibold bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
            AI
          </span>
        </div>
      </Link>
      <div className="glass-strong relative w-full max-w-md rounded-3xl p-8 shadow-2xl shadow-violet-500/10">
        {children}
      </div>
    </div>
  );
}
