// src/components/HowItWorks.jsx

const steps = [
  {
    id: 1,
    title: "List your tools",
    description:
      "Add Adobe, Notion, AI tools, plugins, storage and anything else that hits your card each month.",
    badge: "Step 1",
  },
  {
    id: 2,
    title: "See your real burn",
    description:
      "SubTrack groups everything by category and billing cycle so you can see what’s quietly draining your income.",
    badge: "Step 2",
  },
  {
    id: 3,
    title: "Decide what to keep",
    description:
      "Trim unused tools, downgrade plans, or re-allocate that money into ads, better gear or paying yourself.",
    badge: "Step 3",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto mt-20 w-full max-w-6xl px-4 pb-4 sm:px-6 lg:px-8"
    >
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-sky-400">
            HOW IT WORKS
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-100 sm:text-2xl">
            From messy subscriptions to a clear creator burn in 3 steps.
          </h2>
        </div>
        <p className="max-w-md text-sm text-slate-300">
          No complex budgeting setup or spreadsheets. Just add your tools and
          SubTrack shows you where your money is actually going.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step) => (
          <article
            key={step.id}
            className="group rounded-2xl bg-slate-900/90 p-4 text-sm text-slate-200 shadow-[0_18px_60px_rgba(15,23,42,0.5)] ring-1 ring-white/5 transition-transform duration-150 hover:-translate-y-1"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-sky-300 ring-1 ring-sky-500/30">
                {step.badge}
              </span>
              <span className="text-xs font-semibold text-slate-400">
                0{step.id}
              </span>
            </div>
            <h3 className="mb-2 text-base font-semibold text-slate-50">
              {step.title}
            </h3>
            <p className="text-[13px] leading-relaxed text-slate-300">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
