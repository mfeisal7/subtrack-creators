// src/components/Navbar.jsx
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import AccountDropdown from "./AccountDropdown";

export default function Navbar({ isPremium, openPaywall }) {
  const { user, signInWithGoogle } = useAuth();

  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleAccount = () => setIsAccountOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsAccountOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-3.5">
        {/* Left: logo + subtitle */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-sky-500 shadow-lg shadow-fuchsia-500/40">
            <span className="text-xs font-bold text-white">S</span>
          </div>

          <div className="flex flex-col">
            <span className="text-base md:text-lg font-semibold text-slate-50">
              SubTrack
            </span>
            <span className="text-[11px] md:text-xs font-medium tracking-[0.22em] uppercase text-slate-200/80">
              Creator Spend Tracker
            </span>
          </div>
        </div>

        {/* Right: plan + actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Plan pill */}
          <span className="hidden sm:inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-slate-200">
            <span
              className={`mr-2 h-2 w-2 rounded-full ${
                isPremium ? "bg-emerald-400" : "bg-amber-400"
              }`}
            />
            {isPremium ? "Pro plan" : "Free plan"}
          </span>

          {/* Upgrade button (only when not Pro) */}
          {!isPremium && (
            <button
              onClick={openPaywall}
              className="hidden sm:inline-flex items-center rounded-full bg-slate-50 px-4 py-1.5 text-xs font-semibold text-slate-900 shadow-md shadow-slate-900/40 hover:bg-white transition active:scale-[0.97]"
            >
              Upgrade
            </button>
          )}

          {/* Auth / account */}
          {!user ? (
            <button
              onClick={signInWithGoogle}
              className="inline-flex items-center rounded-full border border-slate-600/80 bg-slate-900/80 px-4 py-1.5 text-xs font-semibold text-slate-100 hover:border-slate-400 hover:bg-slate-800 transition active:scale-[0.97]"
            >
              Sign in
            </button>
          ) : (
            <div
              ref={dropdownRef}
              className="relative inline-flex items-center"
            >
              <button
                onClick={toggleAccount}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-900 shadow-md shadow-slate-900/40 hover:bg-white transition"
              >
                {user.email?.charAt(0).toUpperCase() ?? "U"}
              </button>

              {isAccountOpen && (
                <AccountDropdown isPremium={isPremium} />
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
