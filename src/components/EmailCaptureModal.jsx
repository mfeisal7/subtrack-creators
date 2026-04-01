// src/components/EmailCaptureModal.jsx
// ─────────────────────────────────────────────────────────────────
//  CONFIGURE YOUR EMAIL SERVICE BELOW
//
//  Option A – Mailchimp embedded form action URL:
//    https://xxx.list-manage.com/subscribe/post?u=XXXXX&id=XXXXX
//
//  Option B – ConvertKit form subscribe URL:
//    https://app.convertkit.com/forms/XXXXXXX/subscriptions
//
//  Option C – Brevo / any POST-to-email endpoint
//
//  Leave empty ("") and emails are saved to localStorage only
//  until you wire up a real provider.
// ─────────────────────────────────────────────────────────────────
const EMAIL_FORM_ACTION = ""; // ← paste your form action URL here

import { useState } from "react";
import { Icons } from "./Icon";

export default function EmailCaptureModal({ close, totalMonthly = 0 }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    if (EMAIL_FORM_ACTION) {
      try {
        await fetch(EMAIL_FORM_ACTION, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ email, tags: "subtrack-waitlist" }),
        });
      } catch {
        // Fail silently — still mark submitted
      }
    }

    localStorage.setItem("subtrack_email_captured", email);
    localStorage.setItem("subtrack_email_dismissed", "true");
    setLoading(false);
    setSubmitted(true);
  }

  function handleDismiss() {
    localStorage.setItem("subtrack_email_dismissed", "true");
    close();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-4 pb-6 sm:pb-0 bg-black/75 backdrop-blur-xl">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-950 shadow-[0_25px_80px_rgba(15,23,42,0.95)]">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_55%)]" />

        <div className="relative z-10 p-6">
          {submitted ? (
            /* ── SUCCESS STATE ── */
            <div className="text-center py-4">
              <div className="text-4xl mb-3">🎉</div>
              <h2 className="text-xl font-semibold text-slate-50 mb-2">
                You're in!
              </h2>
              <p className="text-sm text-slate-300 mb-5">
                Check your inbox for the free Creator Tool Audit Checklist. We'll also notify you of new SubTrack features.
              </p>
              <button
                onClick={close}
                className="w-full rounded-xl bg-slate-800 border border-slate-700 py-2.5 text-sm text-slate-200 hover:bg-slate-700 transition"
              >
                Back to SubTrack
              </button>
            </div>
          ) : (
            /* ── CAPTURE FORM ── */
            <>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-emerald-300">
                    Free Resource
                  </span>
                  <h2 className="mt-1 text-xl font-semibold text-slate-50 leading-snug">
                    Get the Creator Tool Audit Checklist — free
                  </h2>
                </div>
                <button
                  onClick={handleDismiss}
                  className="rounded-full p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition flex-shrink-0 ml-3"
                  aria-label="Close"
                >
                  <Icons.X size={16} />
                </button>
              </div>

              {/* Dynamic spend callout */}
              {totalMonthly > 0 && (
                <div className="mb-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 px-4 py-3">
                  <p className="text-sm text-indigo-200">
                    You're currently burning{" "}
                    <span className="font-bold text-indigo-100">
                      ${totalMonthly.toFixed(2)}/mo
                    </span>{" "}
                    on tools. The checklist shows you exactly which ones to cut first.
                  </p>
                </div>
              )}

              <p className="text-sm text-slate-300 mb-5">
                A 12-point framework used by solo creators to slash tool spend by 30%+ without losing workflow quality. Yours, free.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-600 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/40 hover:brightness-110 active:scale-[0.98] transition disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send me the free checklist →"}
                </button>
              </form>

              <p className="text-[11px] text-slate-500 text-center mt-3">
                No spam. No subscriptions. Unsubscribe any time.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
