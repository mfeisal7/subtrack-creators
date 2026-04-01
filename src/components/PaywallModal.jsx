import { Icons } from "./Icon";

// Update this number down as you make sales to create real urgency
const FOUNDING_SPOTS_LEFT = 73;

export default function PaywallModal({ close, upgrade, totalMonthly = 0 }) {
  const annualBurn = totalMonthly * 12;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 bg-black/80 backdrop-blur-2xl">
      <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-indigo-500/40 bg-slate-950/95 shadow-[0_25px_80px_rgba(15,23,42,0.9)]">
        {/* Glow layer */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.3),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.3),_transparent_55%)]" />

        <div className="relative z-10">
          {/* Header */}
          <div className="px-6 pt-5 pb-4 border-b border-slate-800/70">
            <div className="flex justify-between items-start gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-200/80">
                  Founding Member Price
                </p>
                <h2 className="mt-1 text-xl font-semibold text-slate-50">
                  Unlock Creator Pro
                </h2>
                <p className="mt-1 text-xs text-indigo-100/80">
                  One-time payment via{" "}
                  <span className="font-semibold">PayPal</span>. No subscriptions,
                  no lock-in — just unlimited tools.
                </p>
              </div>
              <button
                onClick={close}
                className="rounded-full p-1.5 text-slate-300 hover:text-white hover:bg-slate-800/70 transition"
              >
                <Icons.X size={18} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="px-6 pt-4 pb-5 space-y-4">

            {/* Founding urgency badge */}
            <div className="flex items-center gap-2 rounded-xl bg-amber-500/10 border border-amber-500/25 px-3 py-2">
              <span className="text-amber-400 text-sm flex-shrink-0">⚡</span>
              <p className="text-xs text-amber-200 leading-snug">
                <span className="font-bold">{FOUNDING_SPOTS_LEFT} founding spots left</span> at $5 lifetime.
                {" "}Price rises to $9/mo after launch.
              </p>
            </div>

            {/* Dynamic spend callout */}
            {totalMonthly > 0 && (
              <div className="rounded-xl bg-slate-900/80 border border-slate-700/50 px-4 py-3">
                <p className="text-[10px] text-slate-400 mb-1 uppercase tracking-wide">Your current tool burn</p>
                <div className="flex justify-between items-baseline">
                  <span className="text-2xl font-bold text-slate-50">
                    ${totalMonthly.toFixed(2)}<span className="text-xs font-normal text-slate-400">/mo</span>
                  </span>
                  <span className="text-xs text-slate-400">${annualBurn.toFixed(0)}/yr</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">
                  Pro pays for itself in under a day of tool savings.
                </p>
              </div>
            )}

            {/* Price */}
            <div className="flex items-end gap-2">
              <p className="text-3xl font-semibold text-slate-50">$5</p>
              <p className="text-xs text-slate-400 mb-1">one-time · lifetime access</p>
            </div>

            {/* Benefits */}
            <ul className="space-y-2 text-xs text-slate-100/90">
              <li className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-emerald-500/20 border border-emerald-400/60 flex items-center justify-center text-[10px] text-emerald-200">
                  <Icons.Shield size={11} />
                </span>
                Unlimited tools and subscriptions in your stack
              </li>
              <li className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-indigo-500/20 border border-indigo-400/70 flex items-center justify-center text-[10px] text-indigo-100">
                  <Icons.PieChart size={11} />
                </span>
                Deeper breakdowns by category and billing cycle
              </li>
              <li className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-fuchsia-500/20 border border-fuchsia-400/70 flex items-center justify-center text-[10px] text-fuchsia-100">
                  <Icons.CreditCard size={11} />
                </span>
                Future: CSV export, trial reminders & smart insights
              </li>
            </ul>

            {/* PayPal / button */}
            <div className="space-y-2">
              <button
                onClick={upgrade}
                className="mt-2 w-full rounded-xl bg-[#FFC439] py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-yellow-500/40 hover:brightness-110 active:scale-[0.98] transition flex items-center justify-center gap-2"
              >
                {/* Fake PayPal mark (text only, no logo) */}
                <span className="uppercase text-[11px] tracking-[0.18em]">
                  Pay with
                </span>
                <span className="font-bold text-[13px]">PayPal</span>
              </button>

              <p className="text-[10px] text-slate-500 text-center">
                You&apos;ll be redirected to PayPal for secure checkout, then sent
                back here and your Pro access will unlock automatically.
              </p>
            </div>

            <button
              onClick={close}
              className="w-full text-[11px] text-slate-400 hover:text-slate-200 mt-1"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
