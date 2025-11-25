// src/components/FeatureBenefits.jsx

export default function FeatureBenefits() {
  const items = [
    {
      tag: "Clarity",
      title: "Know exactly where your money goes",
      text: "Creators often underestimate how much their tools cost. SubTrack makes it obvious and effortless."
    },
    {
      tag: "Design",
      title: "A premium interface you'll actually enjoy",
      text: "Beautiful gradients, clean typography, and a luxury-style creator dashboard built for daily use."
    },
    {
      tag: "Power",
      title: "Built for real modern creator stacks",
      text: "Adobe, Notion, AI tools, editing software, hosting, plugins — track it all in seconds."
    }
  ];

  return (
    <section className="mt-12 md:mt-16">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-100 mb-4">
        Why creators stick with SubTrack
      </h2>
      <p className="text-sm md:text-base text-slate-400 mb-6 max-w-2xl">
        SubTrack is intentionally small, fast and focused. No bloated feature set — just a clean,
        premium place to see how your tools silently tax your income.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((item) => (
          <div
            key={item.tag}
            className="rounded-3xl bg-slate-900/80 border border-slate-700/70 
                       shadow-[0_18px_40px_rgba(0,0,0,0.65)] px-6 py-6
                       flex flex-col justify-between
                       hover:-translate-y-1 hover:border-indigo-500/70 hover:shadow-indigo-900/50
                       transition-transform transition-shadow duration-200"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400 mb-2">
              {item.tag}
            </p>
            <h3 className="text-base md:text-[17px] font-semibold text-slate-50 mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
