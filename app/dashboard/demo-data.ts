// Demo data for the Coach IronClaw dashboard
// This shows sample data so new users can explore the interface before connecting Garmin

export const DEMO_HEALTH = {
  hrv: 52,
  hrvBaseline: 50,
  readiness: 63,
  readinessLabel: "Train as planned",
  bodyBattery: 62,
  sleepHours: 7.3,
  sleepScore: 82,
  rhr: 46,
  vo2max: 51.2,
  stressAvg: 35,
  ctl: 245,
  atl: 280,
  tsb: -35,
  form: "Building",
  injuryRatio: 1.14,
  injuryRisk: false,
  raceProjection: "12:18:00",
  raceGoal: "11:59:59",
  raceDelta: -19,
  raceConfidence: "high",
  daysToRace: 51,
  totalHours: 171.5,
  totalSessions: 116,
};

export const DEMO_TODAY = {
  date: "Thursday, Mar 20",
  dayOfWeek: "Thu",
  planned: "Bike 1:15 (IM Pace)",
  actual: null,
  done: false,
  message: "Week 11, session 6 of 7 planned.",
};

export const DEMO_WEEK = {
  week: 11,
  phase: "Build 2",
  dates: "Mar 16 – Mar 22",
  hours: "~14h",
  plan: {
    Mon: "Swim 3.5k (Drills)",
    Tue: "Bike 1:30 (Intervals)",
    Wed: "Run 1:20 (Bridges) + Caleb",
    Thu: "Bike 1:15 (IM Pace)",
    Fri: "Swim 3.5k (Drills)",
    Sat: "Run 1:45 (Long)",
    Sun: "Bike 4:00 (Long) + Brick 6k",
  },
  actual: {
    Mon: "Swim 2500m / 0:56",
    Tue: "Bike 49.7km / 1:34",
    Wed: "Run 15.4km / 1:24 + Caleb 0:56",
    Thu: "",
    Fri: "",
    Sat: "",
    Sun: "",
  },
};

export const DEMO_PMC = [
  { week: "W1", ctl: 85, atl: 120, tsb: -35 },
  { week: "W2", ctl: 95, atl: 90, tsb: 5 },
  { week: "W3", ctl: 115, atl: 160, tsb: -45 },
  { week: "W4", ctl: 120, atl: 80, tsb: 40 },
  { week: "W5", ctl: 140, atl: 180, tsb: -40 },
  { week: "W6", ctl: 170, atl: 220, tsb: -50 },
  { week: "W7", ctl: 195, atl: 250, tsb: -55 },
  { week: "W8", ctl: 200, atl: 160, tsb: 40 },
  { week: "W9", ctl: 225, atl: 310, tsb: -85 },
  { week: "W10", ctl: 230, atl: 180, tsb: 50 },
  { week: "W11", ctl: 245, atl: 280, tsb: -35 },
];

export const DEMO_RACE = {
  splits: [
    { leg: "Swim 3.8km", time: "1:25:00", target: "1:10-1:20", color: "#3B82F6", pct: 12, sessions: 14 },
    { leg: "T1", time: "0:08:00", target: "<5m", color: "#6B7280", pct: 1, sessions: 0 },
    { leg: "Bike 180km", time: "5:58:00", target: "5:45-6:15", color: "#10B981", pct: 49, sessions: 18 },
    { leg: "T2", time: "0:07:00", target: "<3m", color: "#6B7280", pct: 1, sessions: 0 },
    { leg: "Run 42.2km", time: "4:20:00", target: "4:00-4:30", color: "#F59E0B", pct: 37, sessions: 16 },
  ],
  projTrend: [
    { week: "W1", min: 850 },
    { week: "W3", min: 825 },
    { week: "W5", min: 800 },
    { week: "W7", min: 758 },
    { week: "W9", min: 745 },
    { week: "W11", min: 738 },
  ],
};

export const DEMO_WEEKS = [
  { week: 1, phase: "Base", dates: "Jan 5–11", hours: "8h", actualHours: "7.2h", sessions: 6 },
  { week: 2, phase: "Base", dates: "Jan 12–18", hours: "9h", actualHours: "8.0h", sessions: 5 },
  { week: 3, phase: "Base", dates: "Jan 19–25", hours: "10.5h", actualHours: "11.3h", sessions: 7 },
  { week: 4, phase: "Recovery", dates: "Jan 26–Feb 1", hours: "6h", actualHours: "5.5h", sessions: 4 },
  { week: 5, phase: "Build 1", dates: "Feb 2–8", hours: "11h", actualHours: "12.6h", sessions: 7 },
  { week: 6, phase: "Build 1", dates: "Feb 9–15", hours: "13h", actualHours: "14.0h", sessions: 7 },
  { week: 7, phase: "Build 1", dates: "Feb 16–22", hours: "14h", actualHours: "13.2h", sessions: 6 },
  { week: 8, phase: "Recovery", dates: "Feb 23–Mar 1", hours: "9h", actualHours: "9.1h", sessions: 7 },
  { week: 9, phase: "Build 2", dates: "Mar 2–8", hours: "14h", actualHours: "15.8h", sessions: 7 },
  { week: 10, phase: "Build 2 (Travel)", dates: "Mar 9–15", hours: "7h", actualHours: "5.5h", sessions: 3 },
  { week: 11, phase: "Build 2", dates: "Mar 16–22", hours: "14h", actualHours: null, sessions: null },
  { week: 12, phase: "Build 2", dates: "Mar 23–29", hours: "14h", actualHours: null, sessions: null },
  { week: 13, phase: "Peak", dates: "Mar 30–Apr 5", hours: "15h", actualHours: null, sessions: null },
  { week: 14, phase: "Peak", dates: "Apr 6–12", hours: "16h", actualHours: null, sessions: null },
  { week: 15, phase: "Taper", dates: "Apr 13–19", hours: "12h", actualHours: null, sessions: null },
  { week: 16, phase: "Taper", dates: "Apr 20–26", hours: "9h", actualHours: null, sessions: null },
  { week: 17, phase: "Taper", dates: "Apr 27–May 3", hours: "6h", actualHours: null, sessions: null },
  { week: 18, phase: "Race Week", dates: "May 4–10", hours: "3h", actualHours: null, sessions: null },
];

export const DEMO_VOLUME = [
  { week: "W1", actual: 7.2, planned: 8 },
  { week: "W2", actual: 8.0, planned: 9 },
  { week: "W3", actual: 11.3, planned: 10.5 },
  { week: "W4", actual: 5.5, planned: 6 },
  { week: "W5", actual: 12.6, planned: 11 },
  { week: "W6", actual: 14.0, planned: 13 },
  { week: "W7", actual: 13.2, planned: 14 },
  { week: "W8", actual: 9.1, planned: 9 },
  { week: "W9", actual: 15.8, planned: 14 },
  { week: "W10", actual: 5.5, planned: 7 },
  { week: "W11", actual: 8.2, planned: 14 },
];

export const DEMO_NOTES = [
  {
    date: "Mar 19",
    week: 11,
    type: "diary",
    sport: "bike",
    content: "Quan 2 IM pace ride. 50.37km in 1:32, avg HR 137, max 165, RPE 5, avg speed 32.8 km/h. Working splits averaged 35.9 km/h at HR 148 — well above 32 km/h race target. Split 5 at 38.1 km/h is the fastest 5km split of the entire plan.",
  },
  {
    date: "Mar 18",
    week: 11,
    type: "diary",
    sport: "run",
    content: "8x Saigon Bridges. 15.4km in 1:24, avg HR 152, max 164, RPE 8. Working kms 2-8 averaged 5:09/km at HR 155 — fast for bridge repeats in 25°C heat. Heat-adjusted equivalent: ~4:40/km at 15°C.",
  },
  {
    date: "Mar 18",
    week: 11,
    type: "coaching",
    sport: null,
    content: "Wednesday double: bridge run AM (TRIMP ~350) + Caleb PM (~50) = ~400 combined. Biggest Wednesday of the plan. 3 sessions in 3 days to start W11.",
  },
  {
    date: "Mar 17",
    week: 11,
    type: "diary",
    sport: "bike",
    content: "Quan 2 interval ride. 49.7km in 1:34, avg HR 139, max 162. Working splits averaged 35.0 km/h at HR 148. Split 6 fastest at 36.9 km/h. P-Series performing.",
  },
  {
    date: "Mar 16",
    week: 11,
    type: "diary",
    sport: "swim",
    content: "Pool swim. 2500m in 0:56, avg HR 147, max 159, RPE 6. Split 3 hit 1:56/100m at HR 149 — fastest sustained rep of the plan. First session back after GDC travel week.",
  },
  {
    date: "Mar 7",
    week: 9,
    type: "milestone",
    sport: "bike",
    content: "162.1km ride — longest of the plan. 5:08 ride time, avg speed 31.6 km/h. Followed by 6.81km brick run at IM marathon pace. Combined TRIMP 968 — biggest training day of the entire plan.",
  },
  {
    date: "Feb 22",
    week: 7,
    type: "milestone",
    sport: "bike",
    content: "150km ride — broke previous record of 140.6km. 5:05 ride time, avg HR 119. Held Z2 for 90km steady, pushed 4 laps at tempo around km 105-125. Solid nutrition: ~250-280 cal/hr.",
  },
  {
    date: "Feb 15",
    week: 6,
    type: "coaching",
    sport: null,
    content: "Rewrote race projection engine. Old method predicted 13:35. New method uses December marathon (43.1km, 4:02) + long ride pace (80km+ sessions). New projection: 12:18 — only 19 min off sub-12 goal.",
  },
];

export const PHASE_COLORS: Record<string, string> = {
  "Base": "#6B7280",
  "Recovery": "#10B981",
  "Build 1": "#3B82F6",
  "Build 2": "#8B5CF6",
  "Build 2 (Travel)": "#8B5CF6",
  "Peak": "#F59E0B",
  "Taper": "#EC4899",
  "Race Week": "#EF4444",
};
