import Link from "next/link";

export default function GameDevPage() {
  return (
    <main className="min-h-screen bg-[#0f1923] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <Link href="/" className="text-sm text-white/50 hover:text-fuchsia-400">
          ← Back
        </Link>

        <h1 className="mt-6 text-5xl font-black uppercase italic tracking-tighter">
          Web <span className="text-fuchsia-500">Dev</span>
        </h1>

        <p className="mt-4 text-white/60">Projects coming soon.</p>
      </div>
    </main>
  );
}