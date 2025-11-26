// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 mt-12">
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-100">SubTrack</p>
          <p className="text-xs text-slate-400 mt-1">
            Tiny, focused spend tracker for creators. One-time $5 Pro unlock,
            no recurring subscription.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-1 text-xs text-slate-400">
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="hover:text-slate-200 transition"
            >
              Contact
            </a>
            <a
              href="#faq"
              className="hover:text-slate-200 transition"
            >
              Support / FAQ
            </a>
          </div>
          <span>
            Support:{" "}
            <a
              href="mailto:mfeisal7@gmail.com?subject=SubTrack%20Support"
              className="text-slate-200 hover:text-white underline underline-offset-2"
            >
              mfeisal7@gmail.com
            </a>
          </span>
          <span>Built by Feisal · © {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
