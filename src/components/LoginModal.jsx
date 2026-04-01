// src/components/LoginModal.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Icons } from "./Icon";

export default function LoginModal({ close }) {
  const { signInWithGoogle, signInWithEmail, signUpWithEmail } = useAuth();

  const [tab, setTab] = useState("signin"); // "signin" | "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGoogle() {
    setError("");
    setLoading(true);
    try {
      await signInWithGoogle();
      close();
    } catch (e) {
      setError("Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleEmailSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (tab === "signin") {
        await signInWithEmail(email, password);
      } else {
        await signUpWithEmail(email, password);
      }
      close();
    } catch (e) {
      setError(e.message || "Authentication failed. Check your credentials.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-2xl">
      <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-950 shadow-[0_25px_80px_rgba(15,23,42,0.95)]">
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.2),_transparent_55%)]" />

        <div className="relative z-10 p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white text-xs font-bold">
                  S
                </div>
                <span className="text-xs font-semibold text-slate-400 tracking-wide">SUBTRACK</span>
              </div>
              <h2 className="text-xl font-semibold text-slate-50">
                {tab === "signin" ? "Sign in to your account" : "Create your account"}
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                {tab === "signin"
                  ? "Your stack and Pro status sync across devices."
                  : "Free forever. Upgrade once for unlimited tools."}
              </p>
            </div>
            <button
              onClick={close}
              className="rounded-full p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition flex-shrink-0 ml-2"
              aria-label="Close"
            >
              <Icons.X size={18} />
            </button>
          </div>

          {/* Google button */}
          <button
            onClick={handleGoogle}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 rounded-xl border border-slate-600 bg-slate-900 hover:bg-slate-800 py-2.5 text-sm font-medium text-slate-100 transition active:scale-[0.98] disabled:opacity-60 mb-4"
          >
            {/* Google G icon */}
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/>
              <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/>
              <path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"/>
              <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/>
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-slate-800" />
            <span className="text-[11px] text-slate-500">or with email</span>
            <div className="flex-1 h-px bg-slate-800" />
          </div>

          {/* Tab switcher */}
          <div className="flex rounded-xl bg-slate-900 border border-slate-800 p-0.5 mb-4">
            {["signin", "signup"].map((t) => (
              <button
                key={t}
                onClick={() => { setTab(t); setError(""); }}
                className={`flex-1 rounded-lg py-1.5 text-xs font-semibold transition ${
                  tab === t
                    ? "bg-indigo-600 text-white shadow"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {t === "signin" ? "Sign in" : "Sign up"}
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleEmailSubmit} className="space-y-3">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
            />
            <input
              type="password"
              required
              placeholder="Password"
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
            />

            {error && (
              <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-600 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/40 hover:brightness-110 active:scale-[0.98] transition disabled:opacity-60"
            >
              {loading
                ? "Please wait…"
                : tab === "signin"
                ? "Sign in →"
                : "Create account →"}
            </button>
          </form>

          <p className="text-[11px] text-slate-500 text-center mt-4">
            Your data stays private. We never sell emails.
          </p>
        </div>
      </div>
    </div>
  );
}
