// src/components/Navbar.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import AccountDropdown from "./AccountDropdown";

export default function Navbar({ isPremium, openPaywall }) {
  const { user, loginWithGoogle, signOutUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((x) => !x);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/70">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <img src="/logo-subtrack.svg" alt="SubTrack" className="h-6 opacity-90" />
        </div>

        <div className="flex items-center gap-4">

          {!isPremium && (
            <button
              onClick={openPaywall}
              className="hidden md:inline-block text-xs font-semibold text-indigo-300 hover:text-white transition"
            >
              Go Pro — $5 one-time
            </button>
          )}

          {!user ? (
            <button
              onClick={loginWithGoogle}
              className="px-3 py-1.5 rounded-full bg-indigo-600 text-xs font-semibold text-white hover:bg-indigo-500 transition"
            >
              Sign in
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={toggleMenu}
                className="h-8 w-8 rounded-full bg-slate-800 border border-slate-700 overflow-hidden"
              >
                <img
                  src={user.photoURL}
                  alt="avatar"
                  className="h-full w-full object-cover"
                />
              </button>

              {menuOpen && (
                <AccountDropdown
                  close={closeMenu}
                  logout={signOutUser}
                />
              )}
            </div>
          )}

        </div>
      </div>
    </nav>
  );
}
