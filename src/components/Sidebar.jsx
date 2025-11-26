export default function Sidebar({ open, close, openPaywall }) {
  if (!open) return null;

  return (
    <>
      {/* Dim background */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={close}
      ></div>

      {/* Slide-in menu */}
      <div className="fixed right-0 top-0 h-full w-64 bg-slate-900 border-l border-slate-700 p-6 z-50 shadow-xl animate-slideIn">

        <h3 className="text-slate-200 text-sm mb-6">
          Menu
        </h3>

        <button
          onClick={openPaywall}
          className="w-full text-left text-slate-100 text-sm px-2 py-2 hover:bg-slate-700 rounded"
        >
          Upgrade to Pro
        </button>

        <button
          onClick={() => {
            // Open dropdown-like section
            document.querySelector("#accountButton")?.click();
          }}
          className="mt-2 w-full text-left text-slate-100 text-sm px-2 py-2 hover:bg-slate-700 rounded"
        >
          Account
        </button>

        <button
          onClick={close}
          className="mt-6 text-slate-400 text-xs"
        >
          Close
        </button>
      </div>
    </>
  );
}
