import { useState } from "react";
import AccountDropdown from "./AccountDropdown";
import Sidebar from "./Sidebar";

export default function Navbar({ isPremium, openPaywall }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 px-4 py-3 flex items-center justify-between relative z-50">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-slate-100 font-semibold">
          <div className="h-7 w-7 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm">
            S
          </div>
          <span className="hidden sm:block text-xs tracking-wide text-slate-300">
            CREATOR SPEND TRACKER
          </span>
        </a>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* Upgrade button (desktop) */}
          <button
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-400/40 text-indigo-300 text-xs hover:bg-indigo-500/10 transition"
            onClick={openPaywall}
          >
            Go Pro — $5 one-time
          </button>

          {/* Avatar → DROPDOWN */}
          <div className="relative">
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="h-8 w-8 rounded-full bg-slate-600 cursor-pointer flex items-center justify-center text-white text-sm"
            >
              {localStorage.getItem("subtrack_user_letter") || "S"}
            </div>

            {dropdownOpen && (
              <AccountDropdown close={() => setDropdownOpen(false)} />
            )}
          </div>

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
