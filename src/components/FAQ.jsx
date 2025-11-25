export default function FAQ() {
  const faqs = [
    {
      q: "Do I need an account to use SubTrack?",
      a: "No. You can use the free plan with zero login. Pro unlock also works without accounts."
    },
    {
      q: "Is the $5 Pro upgrade a subscription?",
      a: "No. It is a one-time payment for lifetime access."
    },
    {
      q: "Will features be updated?",
      a: "Yes. CSV export, reminders and AI money insights are already planned."
    },
  ];

  return (
    <section className="mt-16 mb-20">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-100 mb-6">
        Frequently asked questions
      </h2>

      <div className="space-y-5">
        {faqs.map((f) => (
          <div
            key={f.q}
            className="rounded-xl bg-slate-900/70 border border-slate-700/60 p-5"
          >
            <h3 className="text-sm font-semibold text-slate-50">{f.q}</h3>
            <p className="text-sm text-slate-400 mt-1">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
