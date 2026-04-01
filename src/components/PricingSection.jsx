// src/components/PricingSection.jsx
const FOUNDING_SPOTS = 27;

export default function PricingSection({ isPremium, openPaywall }) {
  return (
    <section className="mt-14 md:mt-20">
      <div className="text-center mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400 mb-2">Pricing</p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-50">
          Simple. One decision. Forever.
        </h2>
        <p className="text-sm text-slate-400 mt-2 max-w-md mx-auto">
          No tiers, no surprises. Get lifetime access while the founding price lasts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">

        {/* FREE */}
        <div className="rounded-3xl bg-slate-900/70 border border-slate-700/60 p-7 flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-3">Free</p>
          <div className="flex items-end gap-2 mb-1">
            <p className="text-4xl font-bold text-slate-50">$0</p>
          </div>
          <p className="text-xs text-slate-500 mb-6">No card, no login required</p>

          <ul className="space-y-3 text-sm text-slate-300 flex-1">
            {[
              "Track up to 3 tools",
              "Monthly & yearly burn rate",
              "Category breakdown",
              "Instant — no signup needed",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2.5">
                <span className="h-4 w-4 rounded-full bg-slate-700 flex items-center justify-center text-[9px] text-slate-400 flex-shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <span className="inline-block w-full text-center rounded-xl border border-slate-600/70 text-slate-400 text-xs font-semibold px-4 py-2.5">
              Your current plan
            </span>
          </div>
        </div>

        {/* PRO */}
        <div className="relative rounded-3xl bg-slate-50 text-slate-900 border-2 border-indigo-400/60 p-7 flex flex-col shadow-[0_20px_60px_rgba(99,102,241,0.25)] overflow-hidden">
          {/* Recommended badge */}
          <div className="absolute top-0 right-6 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-b-xl">
            Best value
          </div>

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-600 mb-3">Pro — Founding Price</p>

          <div className="flex items-end gap-3 mb-1">
            <p className="text-4xl font-bold text-slate-900">$19</p>
            <div className="mb-1">
              <p className="text-xs text-slate-400 line-through">$9/mo</p>
              <p className="text-[10px] text-amber-600 font-semibold">one-time forever</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mb-2">
            ⚡ {FOUNDING_SPOTS} spots left at this price
          </p>

          <ul className="space-y-3 text-sm text-slate-800 flex-1 mt-3">
            {[
              "Unlimited tools in your stack",
              "Deep breakdowns by category & cycle",
              "Cross-device sync when signed in",
              "CSV export & smart insights (coming)",
              "Every future feature, forever",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2.5">
                <span className="h-4 w-4 rounded-full bg-indigo-100 flex items-center justify-center text-[9px] text-indigo-600 flex-shrink-0 border border-indigo-200">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            {isPremium ? (
              <span className="inline-block w-full text-center rounded-xl border border-emerald-500/60 text-emerald-700 text-xs font-semibold px-4 py-2.5 bg-emerald-50">
                ✔ You're on Pro
              </span>
            ) : (
              <button
                onClick={openPaywall}
                className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white py-3 font-bold text-sm shadow-lg shadow-indigo-500/40 transition active:scale-[0.98]"
              >
                Get lifetime Pro — $19
              </button>
            )}
          </div>

          <p className="text-[10px] text-slate-400 text-center mt-3">
            Secure PayPal checkout · No subscription · Instant access
          </p>
        </div>
      </div>

      {/* Bottom reassurance */}
      <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-slate-500">
        <span>✓ No recurring charges</span>
        <span>✓ PayPal buyer protection</span>
        <span>✓ Works without an account</span>
        <span>✓ Price rising after launch</span>
      </div>
    </section>
  );
}
