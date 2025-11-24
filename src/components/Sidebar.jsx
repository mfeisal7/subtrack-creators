export default function Sidebar({ categories, totalMonthly, totalYearly }) {
  const hasData = Object.keys(categories).length > 0;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Overview
        </h2>
        <p className="text-lg md:text-xl font-semibold text-slate-50">
          Where your money goes
        </p>
      </div>

      {/* Category breakdown */}
      <div className="rounded-2xl border border-slate-700/70 bg-slate-950/50 px-4 py-4 md:px-5 md:py-5 shadow-inner shadow-black/60">
        {!hasData ? (
          <p className="text-xs text-slate-500">
            Add a few tools to see a breakdown by category.
          </p>
        ) : (
          <div className="space-y-4">
            {Object.entries(categories).map(([cat, amount]) => {
              const pct =
                totalMonthly > 0 ? Math.min((amount / totalMonthly) * 100, 100) : 0;
              return (
                <div key={cat} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-200">{cat}</span>
                    <span className="text-slate-300 font-semibold">
                      ${amount.toFixed(2)}
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 transition-all duration-300"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Insight card */}
      <div className="rounded-2xl border border-indigo-500/40 bg-gradient-to-br from-indigo-500/20 via-slate-950/70 to-fuchsia-500/10 px-4 py-4 md:px-5 md:py-5 shadow-lg shadow-indigo-900/50">
        <h3 className="text-sm font-semibold text-indigo-100">
          Creator insight
        </h3>
        <p className="mt-2 text-xs text-indigo-50/90 leading-relaxed">
          You&apos;re spending{" "}
          <span className="font-semibold">
            ${totalMonthly.toFixed(2)}/month
          </span>{" "}
          on tools. That&apos;s{" "}
          <span className="font-semibold">
            ${totalYearly.toFixed(2)}/year
          </span>{" "}
          of silent overhead.
        </p>
        <p className="mt-2 text-[11px] text-indigo-100/80">
          Reallocating even a fraction into ads, thumbnails, or an editor could
          directly grow your channel or client pipeline.
        </p>
      </div>
    </div>
  );
}
