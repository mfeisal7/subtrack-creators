// src/components/HowItWorksSection.jsx
import React from "react";

const steps = [
  {
    id: 1,
    label: "Step 1",
    title: "List the tools you actually pay for",
    body: "Add Adobe, Notion, editors, AI tools, hosting, music, storage and anything else that hits your card every month.",
  },
  {
    id: 2,
    label: "Step 2",
    title: "Let SubTrack do the math for you",
    body: "We total your monthly and yearly burn and show where it goes by category, so you can see the silent overhead in seconds.",
  },
  {
    id: 3,
    label: "Step 3",
    title: "Reallocate that money into growth",
    body: "Cancel dead weight tools and move even a fraction of that spend into ads, better production or client acquisition.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative mx-auto mt-24 max-w-6xl rounded-3xl bg-slate-950/95 px-6 py-12 text-slate-100 shadow-[0_18px_60px_rgba(15,23,42,0.75)] ring-1 ring-slate-700/50 lg:px-10 lg:py-14"
    >
      <div className="mb-8 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-violet-300/80">
            HOW IT WORKS
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 lg:text-3xl">
            Go from “no idea where my money goes” to{" "}
            <span className="text-violet-300">“oh… that’s where it is.”</span>
          </h2>
        </div>
        <p className="max-w-xl text-sm text-slate-300/80 lg:text-[15px]">
          SubTrack is intentionally minimal. No complex setup — just three
          simple steps that give you a finance-grade view of your creator stack.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.id}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/60 p-[1px]"
          >
            <div className="relative flex h-full flex-col gap-3 rounded-2xl bg-slate-950/95 p-5 transition-transform duration-200 group-hover:-translate-y-0.5">
              <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-slate-400">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/80 text-[11px] font-semibold text-white shadow-[0_0_0_1px_rgba(15,23,42,0.9)]">
                  {step.id}
                </span>
                {step.label}
              </div>
              <h3 className="text-[15px] font-semibold leading-snug text-slate-50">
                {step.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-300/85">
                {step.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
