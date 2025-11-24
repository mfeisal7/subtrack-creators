import { useState } from "react";
import { Icons } from "./Icon";

export default function AddSubModal({ close, onSubmit }) {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [cycle, setCycle] = useState("monthly");
  const [category, setCategory] = useState("Creative Tools");

  const categories = [
    "Creative Tools",
    "Editing",
    "Music",
    "AI Tools",
    "Productivity",
    "Storage",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseFloat(cost);
    if (!name || isNaN(value) || value <= 0) {
      alert("Enter a valid name and cost greater than 0.");
      return;
    }
    onSubmit({ name, cost: value, cycle, category });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 bg-black/70 backdrop-blur-xl">
      <div className="relative w-full max-w-md rounded-3xl border border-slate-700 bg-slate-950/90 shadow-2xl shadow-black/80 overflow-hidden">
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-transparent to-fuchsia-500/20" />

        <div className="relative z-10 p-5 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Add tool
              </p>
              <h3 className="text-lg font-semibold text-slate-50">
                Track a subscription
              </h3>
            </div>
            <button
              onClick={close}
              className="rounded-full p-1.5 text-slate-500 hover:text-slate-200 hover:bg-slate-800/80 transition"
            >
              <Icons.X size={18} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div>
              <label className="block text-xs text-slate-400 mb-1.5">
                Tool name
              </label>
              <input
                className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/70 focus:border-indigo-500/70"
                placeholder="e.g. Adobe Creative Cloud"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-slate-400 mb-1.5">
                  Cost
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-2.5 text-xs text-slate-500">
                    $
                  </span>
                  <input
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/80 pl-6 pr-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/70 focus:border-indigo-500/70"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="29.00"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1.5">
                  Billing cycle
                </label>
                <select
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2.5 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/70 focus:border-indigo-500/70"
                  value={cycle}
                  onChange={(e) => setCycle(e.target.value)}
                >
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1.5">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`rounded-full px-3 py-1 text-[11px] font-medium transition ${
                      category === cat
                        ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow shadow-indigo-500/40"
                        : "bg-slate-900/70 text-slate-300 border border-slate-700 hover:border-slate-500"
                    }`}
                    onClick={() => setCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 hover:brightness-110 active:scale-[0.98] transition"
              type="submit"
            >
              Save subscription
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
