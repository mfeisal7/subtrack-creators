export default function AccountDropdown({ close }) {
  return (
    <div className="absolute right-0 mt-2 w-44 bg-slate-800 border border-slate-700 rounded-xl shadow-xl p-3 z-50">
      <p className="text-xs text-slate-300 mb-2">
        {localStorage.getItem("subtrack_email") || "Logged in user"}
      </p>

      <button
        onClick={() => {
          localStorage.removeItem("subtrack_email");
          localStorage.removeItem("subtrack_user_letter");
          localStorage.removeItem("subtrack_premium");
          window.location.href = "/";
        }}
        className="w-full text-left text-sm text-red-300 px-2 py-1 hover:bg-red-500/10 rounded"
      >
        Sign out
      </button>

      <button
        className="w-full text-left text-xs mt-2 text-slate-400 hover:text-white"
        onClick={close}
      >
        Close
      </button>
    </div>
  );
}
