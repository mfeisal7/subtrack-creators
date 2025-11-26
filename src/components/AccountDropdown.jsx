// src/components/AccountDropdown.jsx
import { useAuth } from "../context/AuthContext";

export default function AccountDropdown({ close, logout }) {
  const { user } = useAuth();

  if (!user) return null;

  const email = user.email || "User";

  // Close dropdown when clicking an item
  const handleLogout = () => {
    logout();
    close();
  };

  return (
    <div className="absolute right-0 mt-2 w-56 rounded-xl bg-slate-900 border border-slate-700 shadow-xl z-50 p-4">
      <div className="pb-3 border-b border-slate-700">
        <p className="text-sm font-semibold text-slate-100 truncate">
          {email}
        </p>
        <p className="text-xs text-slate-400 mt-1">
          Creator Account
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="mt-4 w-full text-left text-sm text-red-400 hover:text-red-300 transition"
      >
        Sign out
      </button>
    </div>
  );
}
