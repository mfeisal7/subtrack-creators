// src/components/Testimonials.jsx

const data = [
  {
    name: "James",
    role: "YouTuber",
    initials: "JR",
    color: "from-indigo-500 to-violet-500",
    stars: 5,
    text: "I didn't realize I was spending over $150/month on tools for my channel. SubTrack shocked me into cancelling 4 apps.",
    saving: "Saved $60/mo",
  },
  {
    name: "Amira",
    role: "Freelance Designer",
    initials: "AM",
    color: "from-fuchsia-500 to-pink-500",
    stars: 5,
    text: "Clean, fast, and honestly beautiful. This feels like a premium finance dashboard built for creators. Worth every penny.",
    saving: "Cut 3 unused tools",
  },
  {
    name: "Leo",
    role: "Video Editor",
    initials: "LK",
    color: "from-emerald-500 to-teal-500",
    stars: 5,
    text: "The burn rate feature alone is worth the $5 upgrade. No subscriptions, just lifetime access. Exactly what I needed.",
    saving: "Saved $35/mo",
  },
];

export default function Testimonials() {
  return (
    <section className="mt-12 md:mt-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-100">
            What early creators are saying
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Real feedback from creators who saw their actual tool burn for the first time.
          </p>
        </div>
        {/* Aggregate stars */}
        <div className="flex items-center gap-1.5 text-amber-400 flex-shrink-0">
          {"★★★★★".split("").map((s, i) => (
            <span key={i} className="text-lg">{s}</span>
          ))}
          <span className="text-xs text-slate-400 ml-1">5.0 · 3 reviews</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {data.map((t) => (
          <figure
            key={t.name}
            className="rounded-3xl bg-slate-900/85 border border-slate-700/80
                       px-6 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.75)]
                       hover:border-indigo-500/70 hover:-translate-y-1
                       transition-transform transition-colors duration-200 flex flex-col"
          >
            {/* Stars */}
            <div className="flex gap-0.5 text-amber-400 text-xs mb-3">
              {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
            </div>

            {/* Quote */}
            <p className="text-sm md:text-[15px] text-slate-50 leading-relaxed mb-4 flex-1">
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Saving badge */}
            <div className="mb-3">
              <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                ✓ {t.saving}
              </span>
            </div>

            {/* Author */}
            <figcaption className="flex items-center gap-3">
              <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0`}>
                {t.initials}
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-200">{t.name}</p>
                <p className="text-[11px] text-slate-500">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
