import { Icons } from "./Icon";

export default function Navbar({ isPremium, openPaywall }) {
  return (
    <nav className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10 py-3 flex items-center justify-between">
        {/* Left: brand */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-indigo-500/40">
              <Icons.CreditCard size={18} className="text-white" />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-200 tracking-wide">
              SubTrack
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
              For Creators
            </p>
          </div>
        </div>

        {/* Right: plan pill + avatar */}
        <div className="flex items-center gap-3">
          {/* Plan pill */}
          <div
            className={`hidden sm:inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium ${
              isPremium
                ? "border-emerald-400/70 bg-emerald-500/10 text-emerald-200"
                : "border-slate-600/70 bg-slate-900/70 text-slate-200"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isPremium ? "bg-emerald-400" : "bg-amber-300"
              }`}
            />
            <span>{isPremium ? "Pro plan" : "Free plan"}</span>
          </div>

          {/* Upgrade button only if free */}
          {!isPremium && (
            <button
              onClick={openPaywall}
              className="hidden md:inline-flex text-[11px] font-medium text-slate-50 border border-indigo-400/70 rounded-full px-3 py-1.5 bg-indigo-500/20 hover:bg-indigo-500/30 hover:border-indigo-300 transition"
            >
              Upgrade
            </button>
          )}

          {/* Avatar */}
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-slate-700 to-slate-500 flex items-center justify-center text-[10px] font-semibold text-slate-50 border border-slate-300/30 shadow-md shadow-black/40">
            ME
          </div>
        </div>
      </div>
    </nav>
  );
}
