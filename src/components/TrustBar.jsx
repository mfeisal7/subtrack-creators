// src/components/TrustBar.jsx

export default function TrustBar() {
  return (
    <section
      className="mx-auto mt-6 w-full max-w-5xl rounded-2xl bg-slate-900/90 px-4 py-3 text-xs text-slate-100 shadow-[0_18px_60px_rgba(15,23,42,0.55)] ring-1 ring-white/5"
      aria-label="Trust and safety information"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Left: one-line promise */}
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-[13px] text-emerald-400 ring-1 ring-emerald-500/40">
            ✓
          </div>
          <p className="text-[13px] font-medium text-slate-100">
            One-time payment, no subscriptions.{" "}
            <span className="font-normal text-slate-300">
              Unlock unlimited tools in your stack forever.
            </span>
          </p>
        </div>

        {/* Right: reassurance bullets */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] md:justify-end">
          <span className="rounded-full bg-slate-800/80 px-3 py-1 text-slate-200 ring-1 ring-slate-700/70">
            <span className="mr-1 text-emerald-400">●</span>
            Secure PayPal checkout
          </span>
          <span className="rounded-full bg-slate-800/80 px-3 py-1 text-slate-200 ring-1 ring-slate-700/70">
            <span className="mr-1 text-amber-300">★</span>
            Built for solo creators & freelancers
          </span>
          <span className="rounded-full bg-slate-800/80 px-3 py-1 text-slate-200 ring-1 ring-slate-700/70">
            <span className="mr-1 text-sky-300">↺</span>
            Access the dashboard instantly after payment
          </span>
        </div>
      </div>
    </section>
  );
}
