"use client";
import { useState } from "react";
import Link from "next/link";

function WaitlistForm({ variant = "large" }: { variant?: "large" | "small" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-green-400 font-medium">
        <span>✓</span>
        <span>You&apos;re on the list! We&apos;ll be in touch.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex ${variant === "large" ? "flex-col sm:flex-row" : "flex-row"} gap-3 w-full max-w-md ${variant === "large" ? "mx-auto" : ""}`}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
        required
        className="flex-1 px-4 py-3 rounded-xl bg-[#111827] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
      />
      <button
        type="submit"
        className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition whitespace-nowrap"
      >
        Join Waitlist
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm mt-1">Something went wrong. Try again.</p>
      )}
    </form>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans">
      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm font-extrabold">
            IC
          </div>
          <span className="text-xl font-bold tracking-tight">Coach IronClaw</span>
        </div>
        <div className="text-sm text-gray-400 border border-gray-700 px-4 py-2 rounded-lg">
          Coming Soon
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-32 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full border border-gray-700 text-xs text-gray-400 mb-8">
          Garmin-powered AI triathlon coaching
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          Your data.{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
            Your coach.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Coach IronClaw syncs with your Garmin, analyzes every swim, bike, and run,
          and delivers personalized Ironman coaching powered by AI. Training plans,
          race projections, and recovery guidance — all driven by your real data.
        </p>
        <div className="flex justify-center">
          <WaitlistForm variant="large" />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything a triathlon coach does. Powered by your Garmin.
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Connect your watch and Coach IronClaw does the rest.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "📊",
              title: "Training Load Analysis",
              desc: "Real-time CTL, ATL, and TSB tracking. Know exactly when to push and when to rest based on your actual training stress.",
            },
            {
              icon: "🏁",
              title: "Race Projections",
              desc: "AI-powered finish time predictions for your next race, updated weekly as your fitness improves.",
            },
            {
              icon: "📋",
              title: "Personalized Plans",
              desc: "18-week periodized training plans that adapt to your schedule, fitness level, and race goals.",
            },
            {
              icon: "💬",
              title: "AI Coaching Chat",
              desc: "Ask Coach IronClaw anything — session analysis, nutrition strategy, race prep. It knows your data.",
            },
            {
              icon: "❤️",
              title: "Recovery Monitoring",
              desc: "HRV, Body Battery, sleep score, and readiness tracked daily to prevent overtraining and illness.",
            },
            {
              icon: "📈",
              title: "Split-Level Analysis",
              desc: "Every run, ride, and swim broken down by splits with pace, HR, cadence, and elevation data.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-[#111827] border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-6 pb-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Up and running in 3 minutes
        </h2>
        <div className="flex flex-col gap-12">
          {[
            {
              step: "1",
              title: "Create your account",
              desc: "Sign up in seconds. No credit card required.",
            },
            {
              step: "2",
              title: "Connect your Garmin",
              desc: "One-click OAuth sync. We pull your activities, health metrics, sleep, HRV, and Body Battery data.",
            },
            {
              step: "3",
              title: "Meet your coach",
              desc: "Coach IronClaw analyzes your training history and builds your personalized dashboard, training plan, and race projection.",
            },
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-lg font-bold shrink-0">
                {s.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-32 text-center">
        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-12 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to train smarter?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Join the waitlist and be the first to experience data-driven AI coaching
            powered by your Garmin.
          </p>
          <div className="flex justify-center">
            <WaitlistForm variant="large" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-[8px] font-extrabold">
              IC
            </div>
            <span className="text-sm text-gray-500">Coach IronClaw</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-gray-300 transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}