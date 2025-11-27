// src/components/ChangelogSection.jsx

const entries = [
  {
    date: "Nov 2025",
    label: "Public launch",
    details:
      "Opened SubTrack to early adopters with the core dashboard, categories, and the 3-tool free plan.",
  },
  {
    date: "Nov 2025",
    label: "Creator Pro unlock",
    details:
      "Added one-time $5 Creator Pro unlock via PayPal for unlimited tools, deeper breakdowns and referral link.",
  },
  {
    date: "Nov 2025",
    label: "Contact & support",
    details:
      "Introduced the contact/support area, improved FAQ copy, and polished the pricing & testimonial sections.",
  },
  {
    date: "Planned",
    label: "CSV export & smart insights",
    details:
      "Export your stack to CSV, get nudges when trials end, and surface tools you rarely use.",
  },
];

export default function ChangelogSection() {
  return (
    <section
      id="changelog"
      className="mx-auto mt-20 w-full max-w-5xl px-4 pb-16 sm:px-6 lg:px-8"
    >
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-violet-300">
            CHANGELOG
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-100 sm:text-2xl">
            What’s shipped so far — and what’s coming next.
          </h2>
        </div>
        <p className="max-w-md text-sm text-slate-300">
          SubTrack is intentionally small and focused. This log lets you see how
          it’s evolving over time.
        </p>
      </div>

      <ol className="space-y-3 border-l border-slate-700/60 pl-4">
        {entries.map((item, idx) => (
          <li key={idx} className="relative pl-4">
            {/* Timeline dot */}
            <span className="absolute -left-[9px] mt-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 ring-2 ring-violet-400">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
            </span>

            <div className="mb-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="font-semibold uppercase tracking-[0.16em] text-slate-300">
                {item.date}
              </span>
              <span className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-200 ring-1 ring-slate-700/70">
                {item.label}
              </span>
            </div>
            <p className="max-w-2xl text-[13px] leading-relaxed text-slate-300">
              {item.details}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
