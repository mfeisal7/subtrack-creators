// src/components/PricingSection.jsx

export default function PricingSection({ isPremium, openPaywall }) {
  const PAYPAL_LINK = "https://www.paypal.com/ncp/payment/8TPHFR6ZHSKDQ";

  const handlePayPalUpgrade = () => {
    window.open(PAYPAL_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="mt-12 md:mt-16">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-100 mb-6">
        Simple, creator-friendly pricing
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* FREE PLAN */}
        <div className="rounded-2xl bg-slate-900/80 border border-slate-700/70 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.65)]">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-[0.18em]">
            Free
          </p>

          <h3 className="text-3xl font-semibold text-slate-50 mt-2">$0</h3>
          <p className="text-sm text-slate-400 mt-1">Great for beginners</p>

          <ul className="text-sm text-slate-200 mt-4 space-y-2">
            <li>• Track up to 3 tools</li>
            <li>• Monthly &amp; yearly burn</li>
            <li>• Category breakdown</li>
            <li>• No login needed</li>
          </ul>

          <div className="mt-5">
            <span className="inline-block rounded-full px-4 py-2 text-xs font-semibold border border-slate-600/80 text-slate-200 bg-slate-800/60">
              Your current plan
            </span>
          </div>
        </div>

        {/* PRO PLAN */}
        <div className="rounded-2xl bg-slate-50 text-slate-900 border border-indigo-200 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.35)]">
          <p className="text-sm font-semibold text-indigo-700 uppercase tracking-[0.18em]">
            Pro
          </p>

          <h3 className="text-3xl font-extrabold text-slate-900 mt-2">$5</h3>
          <p className="text-sm text-slate-700 mt-1">
            One-time, lifetime unlock
          </p>

          <ul className="text-sm text-slate-800 mt-4 space-y-2">
            <li>• Unlimited tools in your stack</li>
            <li>• Deeper breakdowns &amp; creator insights</li>
            <li>• CSV export &amp; more (coming soon)</li>
            <li>• Pay once, use it forever</li>
          </ul>

          <div className="mt-5">
            {isPremium ? (
              <span className="inline-block rounded-full px-4 py-2 text-xs font-semibold border border-emerald-500/70 text-emerald-700 bg-emerald-50">
                You’re on Pro ✔
              </span>
            ) : (
              <button
                onClick={handlePayPalUpgrade}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-indigo-500/40 transition active:scale-[0.98]"
              >
                Upgrade via PayPal
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
