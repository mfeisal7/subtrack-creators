// src/components/Testimonials.jsx

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
    <section className="mt-12 md:mt-16">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-100 mb-4">
        What early creators are saying
      </h2>
      <p className="text-sm md:text-base text-slate-400 mb-6 max-w-2xl">
        SubTrack is designed to feel like a tiny, premium finance tool for
        creators. Here’s what early users say after seeing their real burn.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((t) => (
          <figure
            key={t.name}
            className="rounded-3xl bg-slate-900/85 border border-slate-700/80 
                       px-6 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.75)]
                       hover:border-indigo-500/70 hover:-translate-y-1 
                       transition-transform transition-colors duration-200"
          >
            <p className="text-sm md:text-[15px] text-slate-50 leading-relaxed mb-3">
              &ldquo;{t.text}&rdquo;
            </p>
            <figcaption className="text-xs font-medium text-slate-400">
              — {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
