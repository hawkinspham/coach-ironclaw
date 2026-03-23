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
      <div className="text-emerald-400 font-semibold text-sm py-2">
        You&apos;re on the list! We&apos;ll be in touch.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${variant === "large" ? "flex-col sm:flex-row" : ""}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className={`px-4 py-3 rounded-xl bg-[#111827] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition ${
          variant === "large" ? "flex-1 text-base" : "flex-1 text-sm"
        }`}
        required
      />
      <button
        type="submit"
        className={`bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:opacity-90 transition ${
          variant === "large" ? "px-8 py-3 text-base" : "px-5 py-3 text-sm"
        }`}
      >
        Join Waitlist
      </button>
      {status === "error" && (
        <div className="text-red-400 text-xs mt-1">Something went wrong. Try again.</div>
      )}
    </form>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans">
      {/* Nav */}
      <nav className="border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-sm font-extrabold">
              B
            </div>
            <span className="text-xl font-bold tracking-tight">Brikk</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full font-medium border border-orange-500/20">
              Coming Soon
            </span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-block text-xs bg-orange-500/10 text-orange-400 px-4 py-1.5 rounded-full font-medium border border-orange-500/20 mb-6">
          AI-Powered Triathlon Coaching
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Your coach knows<br />
          <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            every workout you&apos;ve done
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Brikk connects to your Garmin, analyzes your training data, and gives you personalized
          coaching powered by AI. Like texting with a coach who never forgets a session.
        </p>
        <div className="max-w-md mx-auto">
          <WaitlistForm variant="large" />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "📊",
              title: "Garmin-Connected",
              desc: "Your health metrics, training load, sleep, HRV, and every session — automatically synced and analyzed.",
            },
            {
              icon: "🧠",
              title: "AI That Learns You",
              desc: "Brikk understands periodization, your training phase, and adapts advice to your specific race and goals.",
            },
            {
              icon: "💬",
              title: "Chat-First Coaching",
              desc: "Ask anything — pacing, nutrition, taper strategy, recovery. Get data-backed answers in seconds.",
            },
            {
              icon: "🏁",
              title: "Race Projections",
              desc: "Real-time finish time estimates based on your actual fitness data, updated every week.",
            },
            {
              icon: "📈",
              title: "Training Load Tracking",
              desc: "CTL, ATL, TSB, injury ratios — all the metrics your coach would track, automated and visualized.",
            },
            {
              icon: "🔒",
              title: "Your Data, Your Coach",
              desc: "Each athlete gets their own private coaching instance. Your data is never shared with other users.",
            },
          ].map((f, i) => (
            <div key={i} className="bg-[#111827] rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition">
              <div className="text-2xl mb-3">{f.icon}</div>
              <div className="font-semibold mb-2">{f.title}</div>
              <div className="text-sm text-gray-400 leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-12">How Brikk Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Connect Garmin", desc: "Link your Garmin account. Brikk syncs your training, health, and sleep data automatically." },
            { step: "2", title: "Chat with Brikk", desc: "Ask about your training, get session analysis, race strategy, nutrition plans — all personalized to your data." },
            { step: "3", title: "Train Smarter", desc: "Brikk tracks your load, flags risks, and adjusts advice as you progress toward race day." },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-lg font-bold mx-auto mb-4">
                {s.step}
              </div>
              <div className="font-semibold mb-2">{s.title}</div>
              <div className="text-sm text-gray-400">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-10">
          <h2 className="text-2xl font-bold mb-4">Ready to train with AI?</h2>
          <p className="text-gray-400 mb-6">Join the waitlist and be first to get access when Brikk launches.</p>
          <div className="max-w-md mx-auto">
            <WaitlistForm variant="small" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-8">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-xs font-extrabold">
                B
              </div>
              <span className="font-semibold">Brikk</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-gray-300 transition">Privacy</Link>
              <Link href="/terms" className="hover:text-gray-300 transition">Terms</Link>
              <a href="mailto:coach@brikk.run" className="hover:text-gray-300 transition">Contact</a>
            </div>
            <div className="text-xs text-gray-600">
              Operated by Be Cause Partners Pte Ltd
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
