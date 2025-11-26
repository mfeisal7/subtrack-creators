import { useState } from "react";
import AccountDropdown from "./AccountDropdown";

export default function Navbar({ isPremium, openPaywall }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2 text-slate-100 font-semibold">
        <div className="h-7 w-7 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm">
          S
        </div>
        <span className="hidden sm:block text-xs tracking-wide text-slate-300">
          CREATOR SPEND TRACKER
        </span>
      </a>

      {/* Right options */}
      <div className="flex items-center gap-4">
        <button
          className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-400/40 text-indigo-300 text-xs hover:bg-indigo-500/10 transition"
          onClick={openPaywall}
        >
          Go Pro — $5 one-time
        </button>

        {/* User avatar → dropdown */}
        <div className="relative">
          <div
            className="h-8 w-8 rounded-full bg-slate-600 cursor-pointer flex items-center justify-center text-sm text-white"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            {/* First letter of email or S */}
            {localStorage.getItem("subtrack_user_letter") || "S"}
          </div>

          {dropdownOpen && (
            <AccountDropdown
              close={() => setDropdownOpen(false)}
            />
          )}
        </div>

        {/* Mobile sidebar toggle */}
        <button
          className="md:hidden h-9 w-9 flex items-center justify-center rounded-md border border-slate-700 text-slate-200"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Mobile slide-in sidebar */}
      {menuOpen && (
        <div
          className="absolute right-2 top-14 bg-slate-800 border border-slate-700 rounded-xl shadow-xl w-48 p-4 flex flex-col gap-3 md:hidden z-50"
        >
          <button
            onClick={openPaywall}
            className="text-left text-slate-100 text-sm px-2 py-1 hover:bg-slate-700 rounded"
          >
            Upgrade to Pro
          </button>
          <button
            onClick={() => setDropdownOpen(true)}
            className="text-left text-slate-100 text-sm px-2 py-1 hover:bg-slate-700 rounded"
          >
            Account
          </button>
        </div>
      )}
    </nav>
  );
}
