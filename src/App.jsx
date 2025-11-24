import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import StatsHeader from "./components/StatsHeader";
import SubscriptionList from "./components/SubscriptionList";
import Sidebar from "./components/Sidebar";
import AddSubModal from "./components/AddSubModal";
import PaywallModal from "./components/PaywallModal";
import PlanBanner from "./components/PlanBanner";


// 1) PUT YOUR REAL PAYPAL (OR OTHER) PAYMENT LINK HERE
// Example for PayPal: "https://www.paypal.com/checkoutnow?token=YOUR_TOKEN"
const PAYMENT_LINK = "https://your-paypal-or-payment-link-here";

// Helper: figure out if user is premium from URL / localStorage
function getInitialPremium() {
  try {
    const url = new URL(window.location.href);

    // If payment provider redirected with ?upgraded=true → mark premium and clean URL
    if (url.searchParams.get("upgraded") === "true") {
      url.searchParams.delete("upgraded");

      const searchString = url.searchParams.toString();
      const cleanUrl =
        url.pathname +
        (searchString ? "?" + searchString : "") +
        url.hash;

      window.history.replaceState({}, "", cleanUrl);
      localStorage.setItem("subtrack_premium", "true");
      return true;
    }
  } catch (e) {
    // ignore URL parsing errors
  }

  // Fallback to localStorage
  return localStorage.getItem("subtrack_premium") === "true";
}

export default function App() {
  // Subscriptions
  const [subs, setSubs] = useState(() => {
    const saved = localStorage.getItem("subtrack_data");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            name: "Adobe Creative Cloud",
            cost: 52.99,
            cycle: "monthly",
            category: "Creative Tools",
          },
          {
            id: 2,
            name: "Notion",
            cost: 10,
            cycle: "monthly",
            category: "Productivity",
          },
          {
            id: 3,
            name: "Descript",
            cost: 15,
            cycle: "monthly",
            category: "Editing",
          },
        ];
  });

  // Premium state
  const [isPremium, setIsPremium] = useState(getInitialPremium);

  // UI state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaywallOpen, setIsPaywallOpen] = useState(false);

  // Persist subs
  useEffect(() => {
    localStorage.setItem("subtrack_data", JSON.stringify(subs));
  }, [subs]);

  // Persist premium
  useEffect(() => {
    localStorage.setItem("subtrack_premium", isPremium ? "true" : "false");
  }, [isPremium]);

  // Totals & categories
  const totalMonthly = subs.reduce(
    (acc, sub) => acc + (sub.cycle === "monthly" ? sub.cost : sub.cost / 12),
    0
  );
  const totalYearly = totalMonthly * 12;

  const categories = subs.reduce((acc, sub) => {
    const monthly = sub.cycle === "monthly" ? sub.cost : sub.cost / 12;
    acc[sub.category] = (acc[sub.category] || 0) + monthly;
    return acc;
  }, {});

  // Free tier add logic
  const handleAddSub = (sub) => {
    if (!isPremium && subs.length >= 3) {
      setIsModalOpen(false);
      setIsPaywallOpen(true);
      return;
    }
    setSubs((prev) => [...prev, { ...sub, id: Date.now() }]);
  };

  const handleDelete = (id) => {
    setSubs((prev) => prev.filter((s) => s.id !== id));
  };

  // 2) PayPal / payment link upgrade handler
  const handleUpgrade = () => {
    if (
      !PAYMENT_LINK ||
      PAYMENT_LINK.includes("your-paypal-or-payment-link-here")
    ) {
      alert(
        "Set your real PayPal (or other) payment link in App.jsx (PAYMENT_LINK) before using this."
      );
      return;
    }
    window.location.href = PAYMENT_LINK;
  };

  // Scroll from hero CTA down to the app section
  const scrollToApp = () => {
    const el = document.getElementById("app-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar isPremium={isPremium} openPaywall={() => setIsPaywallOpen(true)} />

      <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10 pb-12 pt-6 space-y-10">
        {/* === Landing hero section === */}
        <section className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 shadow-[0_30px_80px_rgba(0,0,0,0.85)] px-5 py-7 md:px-8 md:py-9">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.3),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.25),_transparent_55%)]" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 items-center">
            {/* Hero text */}
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-200/80">
                SubTrack • For Creators & Freelancers
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-50 leading-tight">
                See exactly how much your{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-fuchsia-300 bg-clip-text text-transparent">
                  subscriptions
                </span>{" "}
                are eating your creator income.
              </h1>
              <p className="text-sm md:text-[15px] text-slate-300/90 max-w-xl">
                Track Adobe, Notion, AI tools, editing software and more in one clean
                view. Free for 3 tools, or unlock unlimited for serious creators.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={scrollToApp}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-5 py-2.5 text-xs md:text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 hover:brightness-110 active:scale-[0.98] transition"
                >
                  Start tracking now
                </button>
                {!isPremium && (
                  <button
                    onClick={() => setIsPaywallOpen(true)}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-950/60 px-4 py-2 text-xs md:text-sm font-medium text-slate-200 hover:border-indigo-400/80 hover:text-white transition"
                  >
                    Preview Pro features
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-6 pt-4 text-xs text-slate-400">
                <div>
                  <p className="text-slate-300 font-semibold">
                    3 tools • Free forever
                  </p>
                  <p>No login, no card required to try it.</p>
                </div>
                <div>
                  <p className="text-slate-300 font-semibold">$5 once • Pro</p>
                  <p>Unlock unlimited tools via secure PayPal checkout.</p>
                </div>
              </div>
            </div>

            {/* Hero side card */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full max-w-sm rounded-3xl border border-slate-700/70 bg-slate-900/80 p-4 shadow-xl shadow-black/60">
                <p className="text-[11px] font-semibold text-slate-300 mb-3">
                  Live snapshot
                </p>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Adobe CC</span>
                    <span>$52.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Notion</span>
                    <span>$10.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Descript</span>
                    <span>$15.00</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700/80 flex justify-between text-xs">
                  <span className="text-slate-400">Monthly burn</span>
                  <span className="font-semibold text-slate-50">
                    {(52.99 + 10 + 15).toFixed(2)}
                  </span>
                </div>
                <p className="mt-2 text-[11px] text-slate-500">
                  Imagine channeling even half of this into ads or better production.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === App dashboard section === */}
<section id="app-section" className="space-y-6 md:space-y-8">
  {/* Free plan banner */}
  <PlanBanner
    isPremium={isPremium}
    openPaywall={() => setIsPaywallOpen(true)}
  />

  <StatsHeader
    totalMonthly={totalMonthly}
    totalYearly={totalYearly}
    isPremium={isPremium}
    openPaywall={() => setIsPaywallOpen(true)}
  />

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    {/* ...rest stays the same */}

            <div className="lg:col-span-2 backdrop-blur-xl bg-slate-900/40 border border-slate-700/60 shadow-xl shadow-black/40 rounded-3xl p-5 md:p-6">
              <SubscriptionList
                subs={subs}
                onDelete={handleDelete}
                openModal={() => setIsModalOpen(true)}
              />
            </div>

            <div className="backdrop-blur-xl bg-slate-900/40 border border-slate-700/60 shadow-xl shadow-black/40 rounded-3xl p-5 md:p-6">
              <Sidebar
                categories={categories}
                totalMonthly={totalMonthly}
                totalYearly={totalYearly}
              />
            </div>
          </div>
        </section>
      </main>

      {isModalOpen && (
        <AddSubModal close={() => setIsModalOpen(false)} onSubmit={handleAddSub} />
      )}

      {isPaywallOpen && (
        <PaywallModal
          close={() => setIsPaywallOpen(false)}
          upgrade={handleUpgrade}
        />
      )}
    </div>
  );
}
