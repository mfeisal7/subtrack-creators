import { Icons } from "./Icon";

export default function SubscriptionList({ subs, onDelete, openModal }) {
  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Stack
          </h2>
          <p className="text-lg md:text-xl font-semibold text-slate-50">
            Your creator toolset
          </p>
        </div>
        <button
          onClick={openModal}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-indigo-500/40 hover:brightness-110 active:scale-[0.98] transition"
        >
          <Icons.Plus size={14} />
          Add tool
        </button>
      </div>

      {subs.length === 0 ? (
        <div className="border border-dashed border-slate-700/70 rounded-2xl py-10 flex flex-col items-center justify-center text-center">
          <p className="text-sm text-slate-400">
            No subscriptions tracked yet.
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Start with Adobe, Notion, your AI tools, and editing stack.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {subs.map((s) => (
            <div
              key={s.id}
              className="group relative flex items-center justify-between rounded-2xl border border-slate-700/70 bg-slate-900/60 px-4 py-3.5 shadow-sm shadow-black/40 hover:border-indigo-400/60 hover:shadow-lg hover:shadow-black/60 transition-transform duration-150 hover:-translate-y-[1px]"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-xs font-semibold text-white shadow-md shadow-indigo-500/40">
                    {s.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-emerald-400/90 border border-slate-950 shadow-sm shadow-emerald-400/60" />
                </div>

                <div>
                  <p className="text-sm md:text-base font-medium text-slate-50">
                    {s.name}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-[11px] text-slate-400">
                    <span className="inline-flex items-center rounded-full bg-slate-800/80 px-2 py-0.5">
                      {s.category}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-slate-900/90 px-2 py-0.5 capitalize">
                      {s.cycle}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <p className="text-sm md:text-base font-semibold text-slate-50">
                  ${s.cost.toFixed(2)}
                </p>
                <button
                  onClick={() => onDelete(s.id)}
                  className="rounded-full p-1.5 text-slate-500 hover:text-rose-400 hover:bg-slate-800/80 transition"
                  title="Remove"
                >
                  <Icons.Trash size={16} />
                </button>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-indigo-500/0 via-slate-50/2 to-fuchsia-500/0 mix-blend-soft-light" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
