// src/components/PlanBanner.jsx

export default function PlanBanner({ isPremium, openPaywall }) {
  if (isPremium) return null;

  return (
    <div className="rounded-2xl p-6 md:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.45)] 
      border border-indigo-500/30 
      bg-gradient-to-br from-indigo-600/20 via-slate-900/70 to-slate-900 
      backdrop-blur-md">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Text */}
        <div>
          <h3 className="text-lg font-semibold text-slate-100">
            You’re on the Free plan (3 tools).
          </h3>
          <p className="text-sm text-slate-300 mt-1">
            Upgrade once to unlock unlimited tools, advanced insights, and lifetime access.
          </p>
        </div>

        {/* Button */}
        <button
          onClick={openPaywall}
          className="inline-flex items-center justify-center rounded-xl 
          bg-indigo-600 hover:bg-indigo-700 text-white 
          font-semibold px-6 py-2 shadow-lg shadow-indigo-500/40 
          transition active:scale-[0.97]"
        >
          Upgrade to Pro
        </button>
      </div>
    </div>
  );
}
