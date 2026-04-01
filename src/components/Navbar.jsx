import { useState } from "react";
import AccountDropdown from "./AccountDropdown";
import Sidebar from "./Sidebar";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ isPremium, openPaywall, openLogin }) {
  const { user } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // First letter of display name or email for avatar
  const avatarLetter = user?.displayName?.[0]?.toUpperCase()
    || user?.email?.[0]?.toUpperCase()
    || "?";

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 px-4 py-3 flex items-center justify-between relative z-50">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-slate-100 font-semibold">
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-indigo-500/30">
            S
          </div>
          <span className="text-sm font-semibold tracking-tight text-slate-100">
            SubTrack
          </span>
          <span className="hidden sm:block text-[10px] tracking-wide text-slate-500 mt-0.5">
            by creators, for creators
          </span>
        </a>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* Upgrade button (desktop) — only for free users */}
          {!isPremium && (
            <button
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-400/40 text-indigo-300 text-xs hover:bg-indigo-500/10 transition"
              onClick={openPaywall}
            >
              Go Pro — $5 one-time
            </button>
          )}

          {/* AUTH STATE: show Sign In button for guests, avatar for logged-in */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 cursor-pointer flex items-center justify-center text-white text-sm font-bold shadow shadow-indigo-500/30"
                title={user.email}
              >
                {avatarLetter}
              </button>

              {dropdownOpen && (
                <AccountDropdown close={() => setDropdownOpen(false)} />
              )}
            </div>
          ) : (
            <button
              onClick={openLogin}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition shadow shadow-indigo-500/30 active:scale-[0.97]"
            >
              Sign in
            </button>
          )}

          {/* HAMBURGER → SIDEBAR */}
          <button
            className="md:hidden h-9 w-9 flex items-center justify-center rounded-md border border-slate-700 text-slate-200"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

        </div>
      </nav>

      {/* FULL SIDEBAR COMPONENT */}
      <Sidebar
        open={sidebarOpen}
        close={() => setSidebarOpen(false)}
        openPaywall={openPaywall}
      />
    </>
  );
}
