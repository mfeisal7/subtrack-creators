// src/components/TrustBar.jsx

export default function TrustBar() {
  return (
    <section
      className="mx-auto mt-6 w-full max-w-5xl rounded-2xl bg-slate-900/80 px-4 py-3 text-xs text-slate-100 shadow-[0_18px_60px_rgba(15,23,42,0.55)] ring-1 ring-white/5"
      aria-label="Trust and safety information"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Left: value prop */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/20 text-[13px] text-amber-400 ring-1 ring-amber-500/40 flex-shrink-0">
            ⚡
          </div>
          <p className="text-[13px] font-medium text-slate-100">
            $19 lifetime — right now.{" "}
            <span className="font-normal text-slate-400">
              27 founding spots left before it becomes $9/month.
            </span>
          </p>
        </div>

        {/* Right: trust signals */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] md:justify-end">
          <span className="rounded-full bg-slate-800/80 px-3 py-1 text-slate-200 ring-1 ring-slate-700/70 whitespace-nowrap">
            <span className="mr-1 text-emerald-400">●</span>
            Secure PayPal checkout
          </span>
          <span className="rounded-full bg-slate-800/80 px-3 py-1 text-slate-200 ring-1 ring-slate-700/70 whitespace-nowrap">
            <span className="mr-1 text-amber-300">★</span>
            Built for creators & freelancers
          </span>
          <span className="rounded-full bg-slate-800/80 px-3 py-1 text-slate-200 ring-1 ring-slate-700/70 whitespace-nowrap">
            <span className="mr-1 text-sky-300">✓</span>
            No subscription, ever
          </span>
        </div>
      </div>
    </section>
  );
}
