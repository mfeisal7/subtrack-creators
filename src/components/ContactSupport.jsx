// src/components/ContactSupport.jsx
import { useState } from "react";

export default function ContactSupport() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e) {
    e.preventDefault();
    // Opens mailto with the form contents pre-filled — no backend needed
    const subject = encodeURIComponent("SubTrack Support / Feedback");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:mfeisal7@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="mt-16 mb-10 rounded-3xl border border-slate-800/80 bg-slate-950/80 px-5 py-7 md:px-8 md:py-8 shadow-[0_26px_70px_rgba(0,0,0,0.85)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* Left: context */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            Contact
          </p>
          <h2 className="mt-2 text-lg md:text-xl font-semibold text-slate-50">
            Need help or want to say hi?
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            SubTrack is a tiny indie project. Feature requests, bug reports, or
            just want to share your creator stack — I read everything and reply
            within 24–48 hours on weekdays.
          </p>

          <div className="mt-5 rounded-2xl bg-slate-900/70 border border-slate-700/70 p-4 space-y-3">
            <h3 className="text-sm font-semibold text-slate-50">Self-serve first</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#faq"
                  className="inline-flex items-center gap-1 text-indigo-300 hover:text-indigo-200 underline underline-offset-2"
                >
                  View FAQ
                  <span className="text-[10px] text-slate-500">(pricing, Pro, roadmap)</span>
                </a>
              </li>
              <li className="text-slate-400 text-xs">
                If something's broken, mention your browser and include a screenshot — it helps a lot.
              </li>
            </ul>
          </div>
        </div>

        {/* Right: contact form */}
        <div>
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-8">
              <div className="text-3xl mb-3">✉️</div>
              <p className="text-slate-50 font-semibold">Message sent!</p>
              <p className="text-sm text-slate-400 mt-1">Your email app should open. I'll reply within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Bug report, feature idea, or just saying hi…"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-500 py-2.5 text-sm font-semibold text-white transition active:scale-[0.98]"
              >
                Send message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
