export default function FeatureGrid() {
  const cards = [
    {
      title: "Luxury dashboard, zero clutter",
      body: "Dark, minimal interface with just the metrics that matter. No ads, no noisy widgets — it feels like a pro trading terminal for your subscriptions.",
      tag: "Design",
    },
    {
      title: "Creator-first, not corporate",
      body: "Track Adobe, Notion, AI tools, editing software, music, storage and more — the actual stack modern creators run on, not random SaaS from a finance team.",
      tag: "For creators",
    },
    {
      title: "Real financial clarity",
      body: "See your true monthly and yearly burn in seconds. Understand how much of your YouTube, freelance or client revenue disappears into tools.",
      tag: "Money clarity",
    },
  ];

  return (
    <section className="mt-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 md:p-5 shadow-[0_18px_40px_rgba(0,0,0,0.7)]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 mb-1.5">
              {card.tag}
            </p>
            <h3 className="text-sm md:text-[15px] font-semibold text-slate-50 mb-1.5">
              {card.title}
            </h3>
            <p className="text-[11px] md:text-xs text-slate-300/90 leading-relaxed">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
