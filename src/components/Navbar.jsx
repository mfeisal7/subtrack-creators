import { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import AccountDropdown from "./AccountDropdown";

export default function Navbar({ isPremium, openPaywall }) {
  const { user, signInWithGoogle, signOutUser } = useAuth();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggle = () => setOpen(!open);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo-subtrack.svg"
            alt="SubTrack logo"
            className="h-7 md:h-8 w-auto"
          />
          <div className="hidden sm:block">
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
              Creator spend tracker
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 relative">

          {/* Plan indicator */}
          <div
            className={`hidden sm:inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-medium ${
              isPremium
                ? "border-emerald-400/70 bg-emerald-500/10 text-emerald-200"
                : "border-slate-600/70 bg-slate-900/70 text-slate-200"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isPremium ? "bg-emerald-400" : "bg-amber-300"
              }`}
            />
            <span>{isPremium ? "Pro plan" : "Free plan"}</span>
          </div>

          {/* Upgrade button */}
          {!isPremium && (
            <button
              onClick={openPaywall}
              className="hidden md:inline-flex text-[11px] font-medium text-indigo-200 border border-indigo-400/70 rounded-full px-3 py-1.5 bg-indigo-500/10 hover:bg-indigo-500/20 transition"
            >
              Upgrade
            </button>
          )}

          {/* Login / Avatar */}
          {!user ? (
            <button
              onClick={signInWithGoogle}
              className="text-[11px] font-medium text-slate-50 border border-slate-600/80 rounded-full px-3 py-1.5 bg-slate-900/70 hover:border-indigo-400 hover:text-white transition"
            >
              Sign in
            </button>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <div
                onClick={toggle}
                className="h-8 w-8 rounded-full bg-gradient-to-tr from-slate-700 to-slate-500 flex items-center justify-center text-[10px] font-semibold text-slate-50 border border-slate-300/30 shadow-md shadow-black/40 cursor-pointer hover:scale-[1.05] transition"
              >
                {user.email.charAt(0).toUpperCase()}
              </div>

              {open && (
                <AccountDropdown isPremium={isPremium} />
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
