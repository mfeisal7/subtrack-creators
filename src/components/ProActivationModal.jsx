// src/components/ProActivationModal.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { submitProRequest } from "../services/subscriptions";

export default function ProActivationModal({ close }) {
  const { user } = useAuth();
  const [paypalEmail, setPaypalEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await submitProRequest(user.uid, user.email, paypalEmail);
      setDone(true);
    } catch (err) {
      setError("Failed to submit request. Please try again or email mfeisal7@gmail.com");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/85 backdrop-blur-2xl">
      <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-950 shadow-[0_30px_100px_rgba(0,0,0,0.9)]">

        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.15),_transparent_60%)]" />

        <div className="relative z-10 p-6">
          {done ? (
            // ── Success state ──
            <div className="text-center py-4">
              <div className="h-14 w-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-2xl mx-auto mb-4">
                🎉
              </div>
              <h2 className="text-xl font-bold text-slate-50 mb-2">
                Request received!
              </h2>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                We'll verify your PayPal payment and activate your Pro account within a few hours. You'll see your plan update automatically next time you visit.
              </p>
              <div className="rounded-xl bg-slate-900 border border-slate-700/50 px-4 py-3 text-left mb-5">
                <p className="text-[11px] text-slate-500 uppercase tracking-wider mb-1">Your account</p>
                <p className="text-sm text-slate-200 font-medium">{user?.email}</p>
              </div>
              <button
                onClick={close}
                className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 font-semibold text-sm transition"
              >
                Got it — back to the app
              </button>
            </div>
          ) : (
            // ── Form state ──
            <>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-xl flex-shrink-0">
                  ✅
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-50">Activate your Pro</h2>
                  <p className="text-xs text-slate-400">Enter the PayPal email you paid with</p>
                </div>
              </div>

              {/* Signed in as */}
              <div className="rounded-xl bg-slate-900 border border-slate-700/50 px-4 py-3 mb-5">
                <p className="text-[11px] text-slate-500 uppercase tracking-wider mb-1">Activating for</p>
                <p className="text-sm text-slate-200 font-medium truncate">{user?.email}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs text-slate-400 block mb-1.5">
                    PayPal email used to pay
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your-paypal@email.com"
                    value={paypalEmail}
                    onChange={(e) => setPaypalEmail(e.target.value)}
                    className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
                  />
                  <p className="text-[11px] text-slate-500 mt-1.5">
                    This helps us match your payment in PayPal. We don't store anything else.
                  </p>
                </div>

                {error && (
                  <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white py-3 font-bold text-sm shadow-lg shadow-emerald-500/30 transition active:scale-[0.98] disabled:opacity-60"
                >
                  {loading ? "Submitting…" : "Submit activation request →"}
                </button>
              </form>

              <button
                onClick={close}
                className="w-full text-[11px] text-slate-500 hover:text-slate-300 mt-3 transition"
              >
                I'll do this later
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
