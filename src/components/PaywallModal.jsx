import { Icons } from "./Icon";

// Decrease this manually as you make sales to create real urgency
const FOUNDING_SPOTS_LEFT = 27;
const PAYPAL_LINK = "https://www.paypal.com/ncp/payment/8TPHFR6ZHSKDQ";

export default function PaywallModal({ close, upgrade, totalMonthly = 0 }) {
  const annualBurn = totalMonthly * 12;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 bg-black/85 backdrop-blur-2xl">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-950 shadow-[0_30px_100px_rgba(0,0,0,0.95)]">

        {/* Gradient top glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.25),_transparent_60%)]" />

        {/* Amber urgency bar */}
        <div className="relative z-10 bg-amber-500/15 border-b border-amber-500/20 px-5 py-2.5 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse flex-shrink-0" />
          <p className="text-xs text-amber-200 font-medium">
            <span className="font-bold">{FOUNDING_SPOTS_LEFT} founding spots left</span> at $19 lifetime — then it's $9/month.
          </p>
        </div>

        <div className="relative z-10 p-6">

          {/* Header */}
          <div className="flex justify-between items-start mb-5">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white text-xs font-bold">S</div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-300">SubTrack Pro</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-50 leading-snug">
                Unlock your full<br />creator dashboard
              </h2>
              <p className="text-xs text-slate-400 mt-1.5">
                One payment. No subscriptions. No lock-in. Yours forever.
              </p>
            </div>
            <button
              onClick={close}
              className="rounded-full p-1.5 text-slate-500 hover:text-white hover:bg-slate-800 transition flex-shrink-0 ml-3"
              aria-label="Close"
            >
              <Icons.X size={18} />
            </button>
          </div>

          {/* Dynamic spend callout */}
          {totalMonthly > 0 && (
            <div className="rounded-2xl bg-slate-900 border border-slate-700/60 px-4 py-3.5 mb-5">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Your current tool burn</p>
              <div className="flex justify-between items-baseline">
                <span className="text-3xl font-bold text-slate-50">
                  ${totalMonthly.toFixed(2)}<span className="text-sm font-normal text-slate-400">/mo</span>
                </span>
                <span className="text-xs text-amber-400 font-semibold">${annualBurn.toFixed(0)}/year</span>
              </div>
              <div className="mt-2 pt-2 border-t border-slate-800 flex items-center gap-1.5">
                <span className="text-[10px] text-emerald-400">●</span>
                <p className="text-[11px] text-slate-400">
                  Pro pays for itself in under a day of tool savings.
                </p>
              </div>
            </div>
          )}

          {/* Pricing */}
          <div className="flex items-end gap-3 mb-1">
            <div>
              <p className="text-4xl font-bold text-slate-50">$19</p>
              <p className="text-xs text-slate-400 mt-0.5">one-time · lifetime access</p>
            </div>
            <div className="mb-1 pb-1">
              <p className="text-xs text-slate-500 line-through">$9/mo</p>
              <p className="text-[10px] text-amber-400 font-semibold">founding price</p>
            </div>
          </div>

          {/* Benefits */}
          <ul className="space-y-2.5 text-sm text-slate-200 my-5">
            {[
              { icon: <Icons.Shield size={12} />, color: "emerald", text: "Unlimited tools — track your entire stack, no cap" },
              { icon: <Icons.PieChart size={12} />, color: "indigo", text: "Deep breakdowns by category, billing cycle & spend" },
              { icon: <Icons.CreditCard size={12} />, color: "fuchsia", text: "CSV export, trial reminders & smart insights (coming)" },
              { icon: <Icons.Zap size={12} />, color: "amber", text: "Syncs across devices when you sign in" },
            ].map(({ icon, color, text }) => (
              <li key={text} className="flex items-start gap-3">
                <span className={`mt-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-${color}-500/15 border border-${color}-400/40 flex items-center justify-center text-${color}-300`}>
                  {icon}
                </span>
                <span className="text-sm text-slate-200 leading-snug">{text}</span>
              </li>
            ))}
          </ul>

          {/* PayPal CTA */}
          <button
            onClick={upgrade}
            className="w-full rounded-2xl bg-[#FFC439] py-3.5 text-sm font-bold text-slate-900 shadow-xl shadow-yellow-500/30 hover:brightness-105 active:scale-[0.98] transition flex items-center justify-center gap-2.5 mb-3"
          >
            <span className="text-[11px] uppercase tracking-[0.15em] font-bold">Pay with</span>
            <span className="text-base font-black">PayPal</span>
            <span className="text-[11px] ml-1">→ $19</span>
          </button>

          <p className="text-[11px] text-slate-500 text-center mb-4">
            Secure checkout via PayPal. After payment, sign in and your Pro access activates automatically.
          </p>

          <button onClick={close} className="w-full text-[11px] text-slate-500 hover:text-slate-300 transition">
            Maybe later — keep the free plan
          </button>
        </div>
      </div>
    </div>
  );
}
