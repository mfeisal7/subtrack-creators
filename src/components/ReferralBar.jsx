// src/components/ReferralBar.jsx
import { useEffect, useState } from "react";

const MY_REF_CODE = "feisal_Qubi"; // 👈 change this if you want a different code
const SITE_URL = "https://subtrackus.com";

export default function ReferralBar() {
  const [referrer, setReferrer] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const params = url.searchParams;
      const refFromUrl = params.get("ref");

      if (refFromUrl) {
        setReferrer(refFromUrl);
        localStorage.setItem("subtrack_referrer", refFromUrl);

        // Clean URL (remove ?ref=) but keep path/hash
        params.delete("ref");
        const searchString = params.toString();
        const cleanUrl =
          url.pathname + (searchString ? "?" + searchString : "") + url.hash;
        window.history.replaceState({}, "", cleanUrl);
      } else {
        const stored = localStorage.getItem("subtrack_referrer");
        if (stored) setReferrer(stored);
      }
    } catch {
      // ignore, don't break UI
    }
  }, []);

  const myLink = `${SITE_URL}/?ref=${MY_REF_CODE}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(myLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert("Could not copy link, please copy it manually.");
    }
  };

  return (
    <div className="border-b border-slate-800/80 bg-slate-950/80">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10 py-2.5 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        {/* Left side: referrer notice */}
        <div className="text-[11px] md:text-xs text-slate-300 flex items-center gap-2">
          {referrer ? (
            <>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-400/60 text-[10px] text-emerald-200">
                ★
              </span>
              <span className="truncate">
                You’re visiting from{" "}
                <span className="font-semibold text-slate-50">
                  @{referrer}
                </span>
                ’s referral link. Welcome 👋
              </span>
            </>
          ) : (
            <>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 border border-slate-600 text-[10px] text-slate-200">
                %
              </span>
              <span className="truncate">
                Share SubTrack with other creators and help them see their real
                tool burn.
              </span>
            </>
          )}
        </div>

        {/* Right side: your link */}
        <div className="flex items-center gap-2 md:gap-3">
          <span className="hidden md:inline text-[11px] text-slate-400">
            Your referral:
          </span>
          <div className="flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-1">
            <span className="text-[10px] md:text-[11px] text-slate-300 truncate max-w-[150px] md:max-w-[260px]">
              {myLink}
            </span>
            <button
              onClick={handleCopy}
              className="text-[10px] font-semibold text-indigo-200 hover:text-white bg-indigo-500/10 hover:bg-indigo-500/20 rounded-full px-2 py-0.5 transition"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
