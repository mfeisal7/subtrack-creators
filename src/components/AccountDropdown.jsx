import { useAuth } from "../context/AuthContext";

export default function AccountDropdown({ close }) {
  const { user, signOutUser } = useAuth();

  async function handleSignOut() {
    try {
      await signOutUser();
    } catch (e) {
      console.error("Sign out failed:", e);
    }
    close();
  }

  return (
    <div className="absolute right-0 mt-2 w-56 bg-slate-800 border border-slate-700 rounded-xl shadow-xl p-3 z-50 animate-fadeIn">

      {/* USER EMAIL */}
      <p className="text-xs text-slate-300 mb-1 truncate px-1">
        {user?.email || "Signed in"}
      </p>
      <p className="text-[10px] text-slate-500 mb-3 px-1">
        {user?.displayName || ""}
      </p>

      {/* SIGN OUT */}
      <button
        onClick={handleSignOut}
        className="w-full text-left text-sm text-red-300 px-2 py-1.5 hover:bg-red-500/10 rounded-lg transition"
      >
        Sign out
      </button>

      {/* CLOSE */}
      <button
        className="w-full text-left text-xs mt-2 text-slate-400 hover:text-white px-2 py-1"
        onClick={close}
      >
        Close
      </button>
    </div>
  );
}
