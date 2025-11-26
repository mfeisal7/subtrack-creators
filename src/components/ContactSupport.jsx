// src/components/ContactSupport.jsx

export default function ContactSupport() {
  return (
    <section
      id="contact"
      className="mt-16 mb-10 rounded-3xl border border-slate-800/80 bg-slate-950/80 px-5 py-7 md:px-8 md:py-8 shadow-[0_26px_70px_rgba(0,0,0,0.85)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* Contact us */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            Contact
          </p>
          <h2 className="mt-2 text-lg md:text-xl font-semibold text-slate-50">
            Need help or want to say hi?
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            SubTrack is a tiny indie project. If you run into issues, have a
            feature request, or just want to share your creator stack, you can
            reach me directly.
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <p className="text-slate-300">
              <span className="text-slate-400">Primary email:</span>{" "}
              <a
                href="mailto:mfeisal7@gmail.com?subject=SubTrack%20Support"
                className="font-medium text-indigo-300 hover:text-indigo-200 underline underline-offset-2"
              >
                mfeisal7@gmail.com
              </a>
            </p>
            <p className="text-xs text-slate-500">
              I aim to reply within 24–48 hours on weekdays.
            </p>
          </div>
        </div>

        {/* Support options */}
        <div className="rounded-2xl bg-slate-900/70 border border-slate-700/70 p-4 md:p-5 space-y-4">
          <h3 className="text-sm font-semibold text-slate-50">
            Support and self-serve help
          </h3>
          <p className="text-xs text-slate-400">
            Before emailing, you can quickly check common questions and planned
            features.
          </p>

          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#faq"
                className="inline-flex items-center gap-1 text-indigo-200 hover:text-indigo-100 underline underline-offset-2"
              >
                View FAQ
                <span className="text-[10px] text-slate-400">
                  (pricing, Pro, roadmap)
                </span>
              </a>
            </li>
            <li className="text-slate-300">
              Status page{" "}
              <span className="text-[11px] text-slate-500">
                (coming soon)
              </span>
            </li>
            <li className="text-slate-300">
              Creator tips newsletter{" "}
              <span className="text-[11px] text-slate-500">
                (planned)
              </span>
            </li>
          </ul>

          <p className="mt-3 text-[11px] text-slate-500">
            If something looks broken (PayPal, login, or data), include a quick
            screenshot and what browser you’re using.
          </p>
        </div>
      </div>
    </section>
  );
}
