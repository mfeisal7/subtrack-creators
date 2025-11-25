// src/components/FAQ.jsx

export default function FAQ() {
  const faqs = [
    {
      q: "Do I need an account to use SubTrack?",
      a: "No. You can use the free plan with zero login. Pro unlock also works without accounts."
    },
    {
      q: "Is the $5 Pro upgrade a subscription?",
      a: "No. It is a one-time payment for lifetime access. No recurring charges, ever."
    },
    {
      q: "Will features be updated?",
      a: "Yes. CSV export, reminders and AI money insights are already planned."
    }
  ];

  return (
    <section className="mt-12 md:mt-16">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-100 mb-4">
        Common questions
      </h2>
      <p className="text-sm md:text-base text-slate-400 mb-6 max-w-2xl">
        A tiny, opinionated tool for creators. Here are the things most people ask before upgrading.
      </p>

      <div className="space-y-4">
        {faqs.map((f) => (
          <div
            key={f.q}
            className="rounded-2xl bg-slate-900/80 border border-slate-700/70 
                       px-5 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.55)]
                       hover:border-indigo-500/60 transition-colors"
          >
            <h3 className="text-sm md:text-[15px] font-semibold text-slate-50">
              {f.q}
            </h3>
            <p className="text-sm text-slate-400 mt-1 leading-relaxed">
              {f.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
