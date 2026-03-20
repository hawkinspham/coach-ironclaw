"use client";
import { useState } from "react";
import Link from "next/link";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line,
} from "recharts";
import {
  DEMO_HEALTH, DEMO_TODAY, DEMO_WEEK, DEMO_PMC, DEMO_RACE,
  DEMO_WEEKS, DEMO_VOLUME, DEMO_NOTES, PHASE_COLORS,
} from "./demo-data";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

function sportIcon(sport: string | null) {
  if (!sport) return "📋";
  const s = sport.toLowerCase();
  if (s.includes("swim")) return "🏊";
  if (s.includes("bike") || s.includes("ride")) return "🚴";
  if (s.includes("run")) return "🏃";
  if (s.includes("strength") || s.includes("caleb")) return "💪";
  return "📋";
}

function noteIcon(type: string) {
  switch (type) {
    case "diary": return "📝";
    case "coaching": return "🧠";
    case "milestone": return "🏆";
    case "decision": return "⚡";
    case "injury": return "🩹";
    default: return "📝";
  }
}

function StatCard({ label, value, sub, color }: { label: string; value: string | number; sub: string; color: string }) {
  return (
    <div className="bg-[#111827] rounded-xl p-4 border border-gray-800">
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className="text-2xl font-bold" style={{ color }}>{value}</div>
      <div className="text-xs text-gray-500 mt-1">{sub}</div>
    </div>
  );
}

function DemoBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4 mb-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold text-blue-400">Demo Mode</div>
          <div className="text-xs text-gray-400 mt-1">
            This is sample data. Connect your Garmin to see your own training dashboard.
          </div>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
          Connect Garmin
        </button>
      </div>
    </div>
  );
}

function TodayTab() {
  const h = DEMO_HEALTH;
  const t = DEMO_TODAY;
  const readinessColor = h.readiness >= 60 ? "#10B981" : h.readiness >= 40 ? "#F59E0B" : "#EF4444";

  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl font-bold">{t.date}</div>

      {/* Readiness */}
      <div className="bg-[#111827] rounded-xl p-5 border border-gray-800 text-center">
        <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Training Readiness</div>
        <div className="text-5xl font-extrabold" style={{ color: readinessColor }}>{h.readiness}</div>
        <div className="text-sm mt-2" style={{ color: readinessColor }}>{h.readinessLabel}</div>
      </div>

      {/* Health grid */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard label="HRV" value={h.hrv} sub={`baseline ${h.hrvBaseline}`} color={h.hrv >= h.hrvBaseline ? "#10B981" : "#F59E0B"} />
        <StatCard label="Body Battery" value={h.bodyBattery} sub={h.bodyBattery >= 60 ? "Good" : "Low"} color={h.bodyBattery >= 60 ? "#10B981" : "#F59E0B"} />
        <StatCard label="Sleep" value={`${h.sleepHours}h`} sub={`Score ${h.sleepScore}`} color={h.sleepScore >= 80 ? "#10B981" : "#F59E0B"} />
        <StatCard label="Resting HR" value={h.rhr} sub="bpm" color="#3B82F6" />
        <StatCard label="VO2 Max" value={h.vo2max} sub="Good" color="#10B981" />
        <StatCard label="Stress" value={h.stressAvg} sub="Low" color="#10B981" />
      </div>

      {/* Today's session */}
      <div className="bg-[#111827] rounded-xl p-5 border border-gray-800">
        <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Today&apos;s Session</div>
        <div className="flex items-center gap-3">
          <span className="text-2xl">🚴</span>
          <div>
            <div className="font-semibold">{t.planned}</div>
            <div className="text-sm text-gray-400 mt-1">{t.message}</div>
          </div>
        </div>
      </div>

      {/* Race countdown */}
      <div className="bg-[#111827] rounded-xl p-5 border border-gray-800 text-center">
        <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Days to Race</div>
        <div className="text-4xl font-extrabold text-white">{h.daysToRace}</div>
        <div className="text-sm text-gray-400 mt-1">Ironman Da Nang — May 10, 2026</div>
      </div>
    </div>
  );
}

function WeekTab() {
  const w = DEMO_WEEK;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xl font-bold">Week {w.week}</div>
          <div className="text-sm text-gray-400">{w.dates} — {w.phase}</div>
        </div>
        <div className="text-sm text-gray-400">Target: {w.hours}</div>
      </div>
      <div className="flex flex-col gap-2">
        {DAYS.map((d) => {
          const plan = w.plan[d] || "—";
          const actual = w.actual[d] || "";
          const done = actual !== "";
          return (
            <div key={d} className={`rounded-xl p-3 border ${done ? "bg-emerald-950/20 border-emerald-800/30" : "bg-[#111827] border-gray-800"}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-xs text-gray-500 w-8">{d}</div>
                  <div>
                    <div className="text-sm font-medium">{plan}</div>
                    {done && <div className="text-xs text-emerald-400 mt-0.5">Done: {actual}</div>}
                  </div>
                </div>
                {done && <span className="text-emerald-400 text-sm">✓</span>}
              </div>
            </div>
          );
        })}
      </div>
      {/* Phase timeline */}
      <div className="flex gap-0.5 mt-2">
        {DEMO_WEEKS.map((wk) => (
          <div
            key={wk.week}
            className="flex-1 h-2 rounded"
            style={{
              background: PHASE_COLORS[wk.phase] || "#374151",
              opacity: wk.week === w.week ? 1 : wk.week < w.week ? 0.6 : 0.2,
              border: wk.week === w.week ? "2px solid #fff" : "none",
            }}
            title={`W${wk.week} ${wk.phase}`}
          />
        ))}
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <span>W1 Base</span><span>W9 Build 2</span><span>W13 Peak</span><span>W18 Race</span>
      </div>
    </div>
  );
}

function LoadTab() {
  const h = DEMO_HEALTH;
  const tsbColor = h.tsb > 5 ? "#10B981" : h.tsb > -10 ? "#3B82F6" : h.tsb > -30 ? "#F59E0B" : "#EF4444";
  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl font-bold">Training Load</div>
      <div className="grid grid-cols-3 gap-3">
        <StatCard label="Fitness (CTL)" value={h.ctl} sub="42-day chronic load" color="#3B82F6" />
        <StatCard label="Fatigue (ATL)" value={h.atl} sub="7-day acute load" color="#EF4444" />
        <StatCard label="Form (TSB)" value={h.tsb} sub={h.form} color={tsbColor} />
      </div>
      <div className="bg-[#111827] rounded-xl p-5 border border-gray-800">
        <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">Performance Management Chart</div>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={DEMO_PMC}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
            <XAxis dataKey="week" tick={{ fill: "#6B7280", fontSize: 11 }} />
            <YAxis tick={{ fill: "#6B7280", fontSize: 11 }} />
            <Tooltip contentStyle={{ background: "#1F2937", border: "1px solid #374151", borderRadius: 8, color: "#fff" }} />
            <Line type="monotone" dataKey="ctl" name="Fitness" stroke="#3B82F6" strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="atl" name="Fatigue" stroke="#EF4444" strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="tsb" name="Form" stroke="#10B981" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-[#111827] rounded-xl p-4 border border-gray-800">
        <div className="flex items-center gap-2 mb-2">
          <div className="text-sm font-semibold">Injury Ratio: {h.injuryRatio}</div>
          <span className={`text-xs px-2 py-0.5 rounded-full ${h.injuryRatio < 1.3 ? "bg-emerald-900/50 text-emerald-400" : "bg-amber-900/50 text-amber-400"}`}>
            {h.injuryRatio < 1.3 ? "Safe" : "Caution"}
          </span>
        </div>
        <div className="text-xs text-gray-400">
          Acute:Chronic workload ratio. Stay below 1.5 to minimize injury risk.
        </div>
      </div>
    </div>
  );
}

function RaceTab() {
  const h = DEMO_HEALTH;
  return (
    <div className="flex flex-col gap-4">
      <div className="text-center py-2">
        <div className="text-xs text-gray-500 uppercase tracking-widest">Ironman Da Nang</div>
        <div className="text-6xl font-extrabold mt-1">{h.daysToRace}</div>
        <div className="text-sm text-gray-400">days to race — May 10, 2026</div>
      </div>
      <div className="bg-[#111827] rounded-xl p-5 border border-gray-800 text-center">
        <div className="text-xs text-gray-500 uppercase mb-2">Current Projection</div>
        <div className="text-4xl font-extrabold text-amber-400">{h.raceProjection}</div>
        <div className="text-sm text-gray-400 mt-2">
          Goal: <span className="text-emerald-400 font-semibold">{h.raceGoal}</span>
        </div>
        <div className="text-xs text-emerald-400 mt-2">
          Only {Math.abs(h.raceDelta)} min off sub-12 — {h.raceConfidence} confidence
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {DEMO_RACE.splits.map((s, i) => (
          <div key={i} className="bg-[#111827] rounded-xl p-4 border border-gray-800">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-semibold">{s.leg}</span>
              <span className="text-sm font-mono">{s.time}</span>
            </div>
            <div className="w-full bg-gray-800 rounded h-1.5 mb-2">
              <div className="h-1.5 rounded" style={{ width: `${s.pct}%`, background: s.color }} />
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Target: {s.target}</span>
              {s.sessions > 0 && <span>{s.sessions} sessions</span>}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#111827] rounded-xl p-5 border border-gray-800">
        <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">Projection Trend</div>
        <ResponsiveContainer width="100%" height={160}>
          <LineChart data={DEMO_RACE.projTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
            <XAxis dataKey="week" tick={{ fill: "#6B7280", fontSize: 11 }} />
            <YAxis
              domain={[700, 870]}
              tick={{ fill: "#6B7280", fontSize: 11 }}
              tickFormatter={(v: number) => { const h2 = Math.floor(v / 60); return h2 + ":" + String(v % 60).padStart(2, "0"); }}
            />
            <Tooltip
              contentStyle={{ background: "#1F2937", border: "1px solid #374151", borderRadius: 8, color: "#fff" }}
              formatter={(v: number) => { const h2 = Math.floor(v / 60); return [h2 + ":" + String(v % 60).padStart(2, "0"), "Projected"]; }}
            />
            <Line type="monotone" dataKey="min" stroke="#FBBF24" strokeWidth={2} dot={{ r: 4, fill: "#FBBF24" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function StatsTab() {
  const h = DEMO_HEALTH;
  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl font-bold">Season Progress</div>
      <div className="grid grid-cols-3 gap-3">
        <StatCard label="Total Volume" value={`${h.totalHours}h`} sub={`${h.totalSessions} sessions`} color="#3B82F6" />
        <StatCard label="VO2 Max" value={h.vo2max} sub="Good fitness" color="#10B981" />
        <StatCard label="Compliance" value="92%" sub="across 11 weeks" color="#F59E0B" />
      </div>
      <div className="bg-[#111827] rounded-xl p-5 border border-gray-800">
        <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">Weekly Volume (hours)</div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={DEMO_VOLUME}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
            <XAxis dataKey="week" tick={{ fill: "#6B7280", fontSize: 11 }} />
            <YAxis tick={{ fill: "#6B7280", fontSize: 11 }} />
            <Tooltip contentStyle={{ background: "#1F2937", border: "1px solid #374151", borderRadius: 8, color: "#fff" }} />
            <Bar dataKey="planned" name="Planned" fill="#4B5563" radius={[4, 4, 0, 0]} />
            <Bar dataKey="actual" name="Actual" fill="#3B82F6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-[#111827] rounded-xl p-5 border border-gray-800">
        <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">Sport Balance</div>
        {[
          { sport: "Swim", hours: 22, pct: 13, ideal: 15, color: "#3B82F6" },
          { sport: "Bike", hours: 95, pct: 55, ideal: 50, color: "#10B981" },
          { sport: "Run", hours: 42, pct: 25, ideal: 25, color: "#F59E0B" },
          { sport: "Strength", hours: 12, pct: 7, ideal: 10, color: "#8B5CF6" },
        ].map((s, i) => (
          <div key={i} className="mb-3">
            <div className="flex justify-between mb-1">
              <span className="text-sm">{s.sport}</span>
              <span className="text-xs text-gray-500">{s.hours}h ({s.pct}%) — ideal {s.ideal}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded h-2">
              <div className="h-2 rounded" style={{ width: `${Math.min(100, s.pct * 1.8)}%`, background: s.color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DiaryTab() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl font-bold">Training Diary</div>
      <div className="text-sm text-gray-400">{DEMO_NOTES.length} entries</div>
      {DEMO_NOTES.map((n, i) => (
        <div key={i} className="bg-[#111827] rounded-xl p-4 border border-gray-800">
          <div className="flex gap-3">
            <div className="flex flex-col items-center min-w-[36px]">
              <span className="text-lg">{noteIcon(n.type)}</span>
              {n.sport && <span className="text-sm mt-1">{sportIcon(n.sport)}</span>}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">{n.type}</span>
                <span className="text-xs text-gray-600">{n.date} — W{n.week}</span>
              </div>
              <div className="text-sm text-gray-300 leading-relaxed">{n.content}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PlanTab() {
  const [expanded, setExpanded] = useState<number | null>(11);
  const currentWeek = 11;

  return (
    <div className="flex flex-col gap-2">
      <div className="text-xl font-bold mb-1">18-Week Training Plan</div>
      <div className="text-sm text-gray-400 mb-3">Jan 5 – May 10, 2026 — Ironman Da Nang — Goal: sub-12:00</div>
      {DEMO_WEEKS.map((w) => {
        const isExp = expanded === w.week;
        const isCur = w.week === currentWeek;
        const isPast = w.week < currentWeek;
        const pc = PHASE_COLORS[w.phase] || "#6B7280";
        return (
          <div key={w.week} className={`rounded-xl border overflow-hidden ${isCur ? "bg-blue-950/10 border-blue-800/30" : "bg-[#111827] border-gray-800"}`}>
            <div
              onClick={() => setExpanded(isExp ? null : w.week)}
              className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-800/30 transition"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: pc, opacity: isPast ? 0.6 : 1 }}
                >
                  {w.week}
                </div>
                <div>
                  <div className="text-sm font-semibold">
                    {w.dates}
                    {isCur && <span className="text-xs text-blue-400 ml-2">CURRENT</span>}
                    {w.week === 18 && <span className="text-xs text-pink-400 ml-2">RACE WEEK</span>}
                  </div>
                  <div className="text-xs text-gray-500">
                    {w.phase} — {w.hours}
                    {w.actualHours && isPast && ` → actual: ${w.actualHours}`}
                  </div>
                </div>
              </div>
              <div className="text-gray-500 text-sm">{isExp ? "▲" : "▼"}</div>
            </div>
            {isExp && (
              <div className="px-3 pb-3 border-t border-gray-800/50">
                <div className="mt-2 text-xs text-gray-500">
                  {w.sessions !== null ? `${w.sessions} sessions completed` : "Upcoming"}
                  {w.actualHours && ` — ${w.actualHours} total`}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

const TABS = [
  { id: "today", label: "Today", icon: "📋" },
  { id: "week", label: "Week", icon: "📅" },
  { id: "load", label: "Load", icon: "📊" },
  { id: "race", label: "Race", icon: "🏁" },
  { id: "stats", label: "Stats", icon: "📈" },
  { id: "diary", label: "Diary", icon: "📓" },
  { id: "plan", label: "Plan", icon: "📖" },
];

export default function Dashboard() {
  const [tab, setTab] = useState("today");

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans">
      <div className="max-w-[680px] mx-auto px-4 pt-4 pb-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs font-extrabold">
              IC
            </div>
            <div>
              <div className="text-base font-bold tracking-tight">Coach IronClaw</div>
              <div className="text-xs text-gray-500">Ironman Da Nang — {DEMO_HEALTH.daysToRace} days</div>
            </div>
          </Link>
          <div className="text-right">
            <div className="text-xs text-gray-500">Week 11 of 18</div>
            <div className="text-xs font-semibold" style={{ color: PHASE_COLORS["Build 2"] }}>Build 2</div>
          </div>
        </div>

        {/* Demo banner */}
        <DemoBanner />

        {/* Tab bar */}
        <div className="flex gap-0.5 bg-[#111827] rounded-xl p-1 mb-4 border border-gray-800">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex-1 flex items-center justify-center gap-1 py-2 rounded-lg text-xs font-medium transition ${
                tab === t.id ? "bg-white text-black" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <span className="text-sm">{t.icon}</span>
              <span className="hidden sm:inline">{t.label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        {tab === "today" && <TodayTab />}
        {tab === "week" && <WeekTab />}
        {tab === "load" && <LoadTab />}
        {tab === "race" && <RaceTab />}
        {tab === "stats" && <StatsTab />}
        {tab === "diary" && <DiaryTab />}
        {tab === "plan" && <PlanTab />}
      </div>
    </div>
  );
}
