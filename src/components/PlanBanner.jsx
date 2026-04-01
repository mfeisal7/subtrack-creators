// src/components/PlanBanner.jsx

export default function PlanBanner({ isPremium, openPaywall }) {
  if (isPremium) return null;

  return (
    <div className="rounded-2xl p-5 md:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.45)]
      border border-amber-500/25
      bg-gradient-to-br from-amber-500/10 via-slate-900/80 to-slate-900
      backdrop-blur-md">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">27 founding spots left</p>
          </div>
          <h3 className="text-base font-semibold text-slate-100">
            You're on the Free plan — limited to 3 tools.
          </h3>
          <p className="text-sm text-slate-400 mt-0.5">
            Upgrade once for $19 and unlock everything. Regular price will be $9/month.
          </p>
        </div>

        <button
          onClick={openPaywall}
          className="flex-shrink-0 inline-flex items-center justify-center gap-2 rounded-xl
          bg-amber-500 hover:bg-amber-400 text-slate-900
          font-bold text-sm px-5 py-2.5 shadow-lg shadow-amber-500/30
          transition active:scale-[0.97] whitespace-nowrap"
        >
          ⚡ Get Pro — $19
        </button>
      </div>
    </div>
  );
}
