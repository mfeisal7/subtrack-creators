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
      text: "Beautiful gradients, clean typography, and a luxury-style creator dashboard."
    },
    {
      tag: "Power",
      title: "Built for real modern creator stacks",
      text: "Adobe, Notion, AI tools, editing software, hosting, plugins — track it all in seconds."
    },
  ];

  return (
    <section className="mt-16">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-100 mb-6">
        Why creators love SubTrack
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-slate-900/70 border border-slate-700/60 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.6)]"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-2">
              {item.tag}
            </p>
            <h3 className="text-[15px] font-semibold text-slate-50 mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-slate-400">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
