// src/components/Testimonials.jsx

const data = [
  {
    name: "James R.",
    role: "YouTuber · 48K subs",
    initials: "JR",
    color: "from-indigo-500 to-violet-600",
    stars: 5,
    text: "I didn't realize I was paying for 3 tools I stopped using 6 months ago. SubTrack surfaced $90/month I was just throwing away. Cancelled them same day.",
    saving: "Saved $90/mo",
  },
  {
    name: "Amira M.",
    role: "Freelance Designer",
    initials: "AM",
    color: "from-fuchsia-500 to-pink-500",
    stars: 5,
    text: "Clean, fast, and honestly beautiful. Every other tool for this is bloated and confusing. SubTrack feels like it was built by someone who actually creates.",
    saving: "Cut 4 unused tools",
  },
  {
    name: "Leo K.",
    role: "Video Editor",
    initials: "LK",
    color: "from-emerald-500 to-teal-500",
    stars: 5,
    text: "The annual burn number hit different. Seeing $1,100/year laid out like that made me audit everything. $19 lifetime was an obvious call.",
    saving: "Saved $35/mo",
  },
  {
    name: "Priya S.",
    role: "Podcast Host & Coach",
    initials: "PS",
    color: "from-amber-500 to-orange-500",
    stars: 5,
    text: "I was skeptical about another 'tracker' but this one is different — no setup, no spreadsheets, just paste your tools in and you're done. Love it.",
    saving: "Replaced a spreadsheet",
  },
];

export default function Testimonials() {
  return (
    <section className="mt-14 md:mt-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400 mb-1">Social proof</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-50">
            Creators love what they find.
          </h2>
          <p className="text-sm text-slate-400 mt-1.5 max-w-lg">
            Most people are shocked the first time they see their real tool spend.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="flex gap-0.5 text-amber-400">
            {"★★★★★".split("").map((s, i) => (
              <span key={i} className="text-lg">{s}</span>
            ))}
          </div>
          <span className="text-xs text-slate-400">5.0 · 4 reviews</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((t) => (
          <figure
            key={t.name}
            className="rounded-3xl bg-slate-900/80 border border-slate-700/70
                       px-5 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.6)]
                       hover:border-indigo-500/50 hover:-translate-y-1
                       transition duration-200 flex flex-col"
          >
            <div className="flex gap-0.5 text-amber-400 text-xs mb-3">
              {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
            </div>

            <p className="text-sm text-slate-100 leading-relaxed mb-4 flex-1">
              &ldquo;{t.text}&rdquo;
            </p>

            <div className="mb-3">
              <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                ✓ {t.saving}
              </span>
            </div>

            <figcaption className="flex items-center gap-2.5">
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
