import { Icons } from "./Icon";

export default function StatsHeader({
  totalMonthly,
  totalYearly,
  isPremium,
  openPaywall,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Monthly Burn */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-950/60 border border-slate-800/80 shadow-lg shadow-black/50 p-5 md:p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-slate-400 mb-2">
            <Icons.Dollar size={18} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
              Monthly Burn
            </span>
          </div>
          <p className="text-3xl md:text-4xl font-semibold text-slate-50">
            ${totalMonthly.toFixed(2)}
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Subscriptions quietly eating your creator income every month.
          </p>
        </div>
      </div>

      {/* Yearly Projection */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-950/60 border border-slate-800/80 shadow-lg shadow-black/50 p-5 md:p-6">
        <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/10 via-transparent to-indigo-400/10 pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-slate-400 mb-2">
            <Icons.PieChart size={18} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
              Yearly Projection
            </span>
          </div>
          <p className="text-3xl md:text-4xl font-semibold text-slate-50">
            ${totalYearly.toFixed(2)}
          </p>
          <p className="text-xs text-slate-400 mt-1">
            That&apos;s a new camera, lights, editor… or a serious ad budget.
          </p>
        </div>
      </div>

      {/* Status */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-xl shadow-indigo-500/50 p-5 md:p-6">
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2 text-indigo-100 mb-1">
              <Icons.Shield size={18} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                Plan
              </span>
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-white">
              {isPremium ? "Pro Creator" : "Free Tier"}
            </p>
            <p className="text-xs text-indigo-100/80 mt-1">
              Unlock unlimited tools and deeper analytics built for video
              editors, designers, and freelancers.
            </p>
          </div>
          {!isPremium && (
            <button
              onClick={openPaywall}
              className="mt-4 inline-flex items-center justify-center text-xs font-semibold bg-white text-slate-900 rounded-full px-4 py-2 shadow-md shadow-black/40 hover:bg-slate-100 active:scale-[0.98] transition"
            >
              Upgrade to Pro
            </button>
          )}
        </div>
        <Icons.Zap className="absolute -bottom-10 -right-8 text-white/20 w-32 h-32" />
      </div>
    </div>
  );
}
