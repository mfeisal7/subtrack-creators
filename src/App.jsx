// src/App.jsx
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ReferralBar from "./components/ReferralBar";
import StatsHeader from "./components/StatsHeader";
import SubscriptionList from "./components/SubscriptionList";
import Sidebar from "./components/Sidebar";
import AddSubModal from "./components/AddSubModal";
import PaywallModal from "./components/PaywallModal";
import EmailCaptureModal from "./components/EmailCaptureModal";
import Footer from "./components/Footer";
import PlanBanner from "./components/PlanBanner";
import TrustBar from "./components/TrustBar";
import FeatureGrid from "./components/FeatureGrid";
import PricingSection from "./components/PricingSection";
import FeatureBenefits from "./components/FeatureBenefits";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactSupport from "./components/ContactSupport";
import HowItWorks from "./components/HowItWorks";
import ChangelogSection from "./components/ChangelogSection";
import { useAuth } from "./context/AuthContext";

// Firebase subscription services
import {
  fetchUserSubscriptions,
  fetchUserPremium,
  setUserPremiumFlag,
  upsertUserSubscription,
  deleteUserSubscription,
} from "./services/subscriptions";

// ✅ Your real PayPal link
const PAYMENT_LINK = "https://www.paypal.com/ncp/payment/8TPHFR6ZHSKDQ";

// Seed subs for new/guest users
const DEFAULT_SUBS = [
  {
    id: "seed-1",
    name: "Adobe Creative Cloud",
    cost: 52.99,
    cycle: "monthly",
    category: "Creative Tools",
  },
  {
    id: "seed-2",
    name: "Notion",
    cost: 10,
    cycle: "monthly",
    category: "Productivity",
  },
  {
    id: "seed-3",
    name: "Descript",
    cost: 15,
    cycle: "monthly",
    category: "Editing",
  },
];

// Read premium state from URL/localStorage
function getInitialPremium() {
  try {
    const url = new URL(window.location.href);

    if (url.searchParams.get("upgraded") === "true") {
      url.searchParams.delete("upgraded");

      const searchString = url.searchParams.toString();
      const cleanUrl =
        url.pathname + (searchString ? "?" + searchString : "") + url.hash;

      window.history.replaceState({}, "", cleanUrl);
      localStorage.setItem("subtrack_premium", "true");
      return true;
    }
  } catch {
    // ignore
  }

  return localStorage.getItem("subtrack_premium") === "true";
}

export default function App() {
  const { user } = useAuth();

  const [subs, setSubs] = useState(DEFAULT_SUBS);
  const [loadingSubs, setLoadingSubs] = useState(true);
  const [isPremium, setIsPremium] = useState(getInitialPremium);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaywallOpen, setIsPaywallOpen] = useState(false);
  const [isEmailCaptureOpen, setIsEmailCaptureOpen] = useState(false);

  // Load subscriptions (Firestore if logged-in, else localStorage/defaults)
  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoadingSubs(true);

      // Guest mode
      if (!user) {
        const saved = localStorage.getItem("subtrack_data");
        const localSubs = saved ? JSON.parse(saved) : DEFAULT_SUBS;

        if (!cancelled) {
          setSubs(localSubs);
          setLoadingSubs(false);
        }
        return;
      }

      // Logged-in: Firestore
      try {
        const remote = await fetchUserSubscriptions(user.uid);
        if (!cancelled) {
          setSubs(remote.length ? remote : DEFAULT_SUBS);
        }
      } catch (err) {
        console.error("Failed to load Firestore subs, falling back:", err);
        const saved = localStorage.getItem("subtrack_data");
        const localSubs = saved ? JSON.parse(saved) : DEFAULT_SUBS;
        if (!cancelled) {
          setSubs(localSubs);
        }
      } finally {
        if (!cancelled) setLoadingSubs(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [user]);

  // Persist subscriptions locally for fast reload
  useEffect(() => {
    localStorage.setItem("subtrack_data", JSON.stringify(subs));
  }, [subs]);

  // Sync premium flag from Firestore when logged in
  useEffect(() => {
    let cancelled = false;

    async function checkPremium() {
      if (!user) return;

      try {
        const remotePremium = await fetchUserPremium(user.uid);
        if (!cancelled && remotePremium) {
          setIsPremium(true);
          localStorage.setItem("subtrack_premium", "true");
        }
      } catch (err) {
        console.error("Failed to fetch user premium:", err);
      }
    }

    checkPremium();
    return () => {
      cancelled = true;
    };
  }, [user]);

  // Mirror premium into localStorage
  useEffect(() => {
    localStorage.setItem("subtrack_premium", isPremium ? "true" : "false");
  }, [isPremium]);

  // Email capture: show after 25s for free users who haven't dismissed
  useEffect(() => {
    if (isPremium) return;
    const alreadyDismissed = localStorage.getItem("subtrack_email_dismissed");
    if (alreadyDismissed) return;
    const timer = setTimeout(() => setIsEmailCaptureOpen(true), 25000);
    return () => clearTimeout(timer);
  }, [isPremium]);

  // Derived numbers
  const totalMonthly = subs.reduce(
    (acc, sub) => acc + (sub.cycle === "monthly" ? sub.cost : sub.cost / 12),
    0
  );
  const totalYearly = totalMonthly * 12;

  const categories = subs.reduce((acc, sub) => {
    const monthlyValue = sub.cycle === "monthly" ? sub.cost : sub.cost / 12;
    acc[sub.category] = (acc[sub.category] || 0) + monthlyValue;
    return acc;
  }, {});

  // Add subscription
  async function handleAddSub(newSub) {
    if (!isPremium && subs.length >= 3) {
      // hit free limit → open paywall
      setIsModalOpen(false);
      setIsPaywallOpen(true);
      return;
    }

    const formatted = {
      id: Date.now().toString(),
      name: newSub.name,
      cost: Number(newSub.cost),
      cycle: newSub.cycle,
      category: newSub.category,
    };

    setSubs((prev) => [...prev, formatted]);

    if (user) {
      try {
        await upsertUserSubscription(user.uid, formatted);
      } catch (err) {
        console.error("Failed to upsert subscription:", err);
      }
    }

    setIsModalOpen(false);
  }

  // Delete subscription
  async function handleDelete(id) {
    setSubs((prev) => prev.filter((s) => s.id !== id));

    if (user) {
      try {
        await deleteUserSubscription(user.uid, id);
      } catch (err) {
        console.error("Failed to delete subscription:", err);
      }
    }
  }

  // Upgrade → open PayPal + mark as premium
  async function handleUpgrade() {
    window.open(PAYMENT_LINK, "_blank", "noopener,noreferrer");

    try {
      if (user) {
        await setUserPremiumFlag(user.uid, true);
      }
      setIsPremium(true);
      localStorage.setItem("subtrack_premium", "true");
    } catch (err) {
      console.error("Failed to mark user as premium:", err);
    } finally {
      setIsPaywallOpen(false);
    }
  }

  // Scroll hero button down to dashboard
  function scrollToApp() {
    const el = document.getElementById("app-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar
        isPremium={isPremium}
        openPaywall={() => setIsPaywallOpen(true)}
      />
      <ReferralBar />

      <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pb-16 pt-6 md:pt-10">
        {/* HERO */}
        <section className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] text-emerald-200 shadow-sm shadow-emerald-900/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>New • Creator Stack Spend Tracker</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight tracking-tight text-slate-50">
              SubTrack shows how much of your
              <span className="text-indigo-300"> creator income </span>
              silently leaks into tools.
            </h1>

            <p className="text-sm md:text-[15px] text-slate-300/90 max-w-xl">
              Track Adobe, Notion, AI tools, editing software, music, storage
              and more. Built to feel like a premium finance dashboard, tuned
              for solo creators.
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

          {/* HERO SIDE CARD */}
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
                Imagine channeling even half of this into ads, better audio, or
                a dedicated editor.
              </p>
            </div>
          </div>
        </section>

        {/* TRUST BAR + FEATURES */}
        <TrustBar />
        <FeatureGrid />

        {/* MAIN APP DASHBOARD */}
        <section id="app-section" className="mt-10 md:mt-14 space-y-6">
          <PlanBanner
            isPremium={isPremium}
            openPaywall={() => setIsPaywallOpen(true)}
          />

          <StatsHeader
            totalMonthly={totalMonthly}
            totalYearly={totalYearly}
            count={subs.length}
          />

          <div className="grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
            <div className="lg:col-span-2 backdrop-blur-xl bg-slate-900/40 border border-slate-700/60 shadow-xl shadow-black/40 rounded-3xl p-5 md:p-6">
              {loadingSubs ? (
                <p className="text-sm text-slate-400">Loading your tools…</p>
              ) : (
                <SubscriptionList
                  subs={subs}
                  onDelete={handleDelete}
                  openModal={() => setIsModalOpen(true)}
                />
              )}
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

        {/* MARKETING / EXPLANATION SECTIONS */}
        <PricingSection
          isPremium={isPremium}
          openPaywall={() => setIsPaywallOpen(true)}
        />

        <HowItWorks />

        <FeatureBenefits />
        <Testimonials />

        <ChangelogSection />

        <FAQ />
        <ContactSupport />
      </main>

      <Footer />

      {/* MODALS */}
      {isModalOpen && (
        <AddSubModal
          close={() => setIsModalOpen(false)}
          onSubmit={handleAddSub}
        />
      )}

      {isPaywallOpen && (
        <PaywallModal
          close={() => setIsPaywallOpen(false)}
          upgrade={handleUpgrade}
          totalMonthly={totalMonthly}
        />
      )}

      {isEmailCaptureOpen && (
        <EmailCaptureModal
          close={() => setIsEmailCaptureOpen(false)}
          totalMonthly={totalMonthly}
        />
      )}
    </div>
  );
}
