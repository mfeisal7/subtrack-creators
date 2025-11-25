export default function PricingSection({ isPremium, openPaywall }) {
  return (
    <section className="mt-12 md:mt-16">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-100 mb-6">
        Simple, creator-friendly pricing
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Free tier */}
        <div className="rounded-2xl bg-slate-900/70 border border-slate-700/60 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.6)]">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-[0.18em]">
            Free
          </p>

          <h3 className="text-3xl font-semibold text-slate-50 mt-2">$0</h3>
          <p className="text-sm text-slate-400 mt-1">Great for beginners</p>

          <ul className="text-sm text-slate-300 mt-4 space-y-2">
            <li>• Track up to 3 tools</li>
            <li>• Monthly & yearly burn</li>
            <li>• Category breakdown</li>
            <li>• No login needed</li>
          </ul>

          <div className="mt-5">
            <span className="inline-block rounded-full px-4 py-2 text-xs font-semibold border border-slate-600/80 text-slate-300 bg-slate-800/40">
              Your current plan
            </span>
          </div>
        </div>

        {/* Pro tier */}
        <div className="rounded-2xl bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-fuchsia-500/20 border border-indigo-400/40 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.6)]">
          <p className="text-sm font-semibold text-indigo-300 uppercase tracking-[0.18em]">
            Pro
          </p>

          <h3 className="text-3xl font-semibold text-white mt-2">$5</h3>
          <p className="text-sm text-indigo-200 mt-1">One-time purchase</p>

          <ul className="text-sm text-indigo-100 mt-4 space-y-2">
            <li>• Unlimited tools</li>
            <li>• Advanced analytics</li>
            <li>• CSV export (coming soon)</li>
            <li>• Lifetime access</li>
          </ul>

          <div className="mt-5">
            {isPremium ? (
              <span className="inline-block rounded-full px-4 py-2 text-xs font-semibold border border-emerald-500/60 text-emerald-300 bg-emerald-500/10">
                You are Pro ✔
              </span>
            ) : (
              <button
                onClick={openPaywall}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-indigo-500/25 transition active:scale-[0.98]"
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
