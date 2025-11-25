// src/components/AccountDropdown.jsx
import { useAuth } from "../context/AuthContext";
import { Icons } from "./Icon";

export default function AccountDropdown({ isPremium }) {
  const { user, signOutUser } = useAuth();

  if (!user) return null;

  const email = user.email || "User";

  return (
    <div className="absolute right-0 mt-2 w-56 rounded-xl bg-slate-900 border border-slate-700 shadow-xl shadow-black/50 p-4 z-50">
      <div className="pb-3 border-b border-slate-700">
        <p className="text-sm font-semibold text-slate-100">{email}</p>
        <p className="text-xs text-slate-400 mt-1">
          {isPremium ? "Pro Plan Active" : "Free Plan"}
        </p>
      </div>

      <button
        onClick={signOutUser}
        className="mt-4 w-full text-left text-sm text-red-400 hover:text-red-300 transition"
      >
        Sign out
      </button>
    </div>
  );
}
