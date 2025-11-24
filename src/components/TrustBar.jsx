export default function TrustBar({ isPremium, openPaywall }) {
  return (
    <section className="mt-1">
      <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 px-4 py-3 md:px-6 md:py-3.5 flex flex-col md:flex-row gap-3 md:items-center justify-between text-[11px] md:text-xs text-slate-300 shadow-[0_18px_40px_rgba(0,0,0,0.6)]">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="font-medium text-slate-100">
              One-time payment, no subscriptions
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span>Secure checkout via PayPal</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span>Built for creators & freelancers</span>
          </div>
        </div>

        {!isPremium && (
          <button
            onClick={openPaywall}
            className="inline-flex self-start md:self-auto items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/80 px-3 py-1.5 text-[11px] font-semibold text-slate-100 hover:border-indigo-400/80 hover:text-white transition"
          >
            Upgrade via PayPal
          </button>
        )}
      </div>
    </section>
  );
}
