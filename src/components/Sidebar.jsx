export default function Sidebar({ categories, totalMonthly, totalYearly }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xs font-semibold tracking-wide text-slate-300 uppercase">
        Breakdown
      </h3>

      <div className="space-y-3 text-sm">
        {Object.keys(categories).map((cat) => (
          <div key={cat}>
            <div className="flex justify-between text-slate-300">
              <span>{cat}</span>
              <span>${categories[cat].toFixed(2)}</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full w-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full"
                style={{
                  width: `${totalMonthly > 0 ? (categories[cat] / totalMonthly) * 100 : 0}%`,

                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-slate-800 mt-6">
        <p className="text-xs text-slate-400">Annual projection</p>
        <p className="text-lg font-bold text-slate-100">
          ${totalYearly.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
