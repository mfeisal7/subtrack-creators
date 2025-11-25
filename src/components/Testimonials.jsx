export default function Testimonials() {
  const data = [
    {
      name: "James (YouTuber)",
      text: "I didn’t realize I was spending over $150/month on tools for my channel. SubTrack shocked me into cancelling 4 apps.",
    },
    {
      name: "Amira (Freelancer)",
      text: "Clean, fast, and honestly beautiful. This feels like a premium finance dashboard built for creators.",
    },
    {
      name: "Leo (Editor)",
      text: "The burn rate feature alone is worth the $5 upgrade. No subscriptions, just lifetime access. Perfect.",
    },
  ];

  return (
    <section className="mt-16">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-100 mb-6">
        What creators say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl bg-slate-900/70 border border-slate-700/60 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.6)]"
          >
            <p className="text-sm text-slate-300 mb-3">&ldquo;{t.text}&rdquo;</p>
            <p className="text-xs text-slate-500 font-medium">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
