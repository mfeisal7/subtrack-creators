export default function PlanBanner({ isPremium, openPaywall }) {
  if (isPremium) return null; // no banner for Pro users

  return (
    <div className="rounded-2xl border border-amber-400/30 bg-amber-500/10 px-4 py-3 md:px-5 md:py-3.5 flex flex-col md:flex-row gap-2 md:items-center justify-between text-xs md:text-[13px] text-amber-50 shadow-sm shadow-amber-900/40">
      <div>
        <p className="font-semibold text-amber-100">
          You&apos;re on the Free plan (3 tools).
        </p>
        <p className="text-amber-100/80">
          Upgrade once to unlock unlimited tools and a clearer picture of your
          true creator profit.
        </p>
      </div>
      <button
        onClick={openPaywall}
        className="inline-flex mt-1 md:mt-0 items-center justify-center rounded-full border border-amber-300/70 bg-amber-400/20 px-3 py-1.5 text-[11px] font-semibold text-amber-50 hover:bg-amber-400/30 hover:border-amber-200 transition"
      >
        Upgrade via PayPal
      </button>
    </div>
  );
}
