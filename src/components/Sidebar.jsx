// src/components/Sidebar.jsx

export default function Sidebar({ categories, totalMonthly, totalYearly }) {
  const hasData = Object.keys(categories).length > 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Overview
        </h2>
        <p className="text-lg md:text-xl font-semibold text-slate-50">
          Where your money goes
        </p>
      </div>

      {/* Category breakdown */}
      <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 px-4 py-4 md:px-5 md:py-5 shadow-inner shadow-black/60">
        {hasData ? (
          <div className="space-y-3">
            {Object.entries(categories).map(([cat, amount]) => {
              const percentage =
                totalMonthly > 0 ? Math.min((amount / totalMonthly) * 100, 100) : 0;

              return (
                <div key={cat}>
                  <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                    <span>{cat}</span>
                    <span>
                      ${amount.toFixed(2)} ·{" "}
                      {totalMonthly > 0
                        ? `${percentage.toFixed(0)}%`
                        : "0%"}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-800/80 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-sm text-slate-400">
            Add a few tools on the left to see a live breakdown by category.
          </p>
        )}
      </div>

      {/* Insight / “referral-style” text block */}
      <div className="rounded-2xl border border-indigo-500/40 bg-gradient-to-br from-indigo-500/20 via-slate-950 to-slate-950 px-4 py-4 md:px-5 md:py-5 shadow-[0_18px_40px_rgba(15,23,42,0.9)]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200 mb-2">
          Creator insight
        </p>

        <p className="text-sm text-indigo-50">
          You’re currently spending{" "}
          <span className="font-semibold">
            ${totalMonthly.toFixed(2)}/month
          </span>{" "}
          on tools. That’s{" "}
          <span className="font-semibold">
            ${totalYearly.toFixed(2)}/year
          </span>{" "}
          of silent overhead.
        </p>

        <p className="mt-2 text-[11px] text-indigo-100/90">
          Even reallocating a small part of that into thumbnails, editing, or
          ads could bring you more views, clients, or revenue than another
          forgotten subscription.
        </p>
      </div>
    </div>
  );
}
