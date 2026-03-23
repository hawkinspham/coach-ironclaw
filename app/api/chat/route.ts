import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

/* ── Smart model routing ──
 * Deep analysis questions → Opus (thorough, slower, ~3-5s)
 * Quick coaching questions → Sonnet (fast, cheap, ~1-2s)
 */
const OPUS = "claude-opus-4-20250514";
const SONNET = "claude-sonnet-4-20250514";

const DEEP_PATTERNS = [
  /analyz/i, /analysis/i, /review my/i, /break down/i, /breakdown/i,
  /compare/i, /evaluate/i, /assess/i, /deep dive/i,
  /plan for/i, /create a plan/i, /build a plan/i, /training plan/i,
  /race strategy/i, /race plan/i, /pacing strategy/i,
  /what.*(wrong|issue|problem)/i, /why am i/i, /explain why/i,
  /over the (past|last) \d+/i, /weeks? of training/i,
  /periodiz/i, /peak(ing)?/i, /taper/i,
  /projection/i, /predict/i, /forecast/i,
];

function pickModel(messages: { role: string; content: string }[]): string {
  const lastUserMsg = [...messages].reverse().find((m) => m.role === "user");
  if (!lastUserMsg) return SONNET;

  const text = lastUserMsg.content;

  // Long messages (>100 chars) likely need deeper thinking
  if (text.length > 150) return OPUS;

  // Check for deep analysis patterns
  if (DEEP_PATTERNS.some((p) => p.test(text))) return OPUS;

  // Everything else: fast Sonnet
  return SONNET;
}

const SYSTEM_PROMPT = `You are Brikk, an AI-powered triathlon coach built for Ironman athletes. "Brikk" comes from "brick" sessions — the bike-to-run transitions that define triathlon. You are an elite specializing in Ironman preparation. You are data-driven, direct, and deeply knowledgeable about endurance training.

Your coaching style:
- You analyze training data (heart rate, pace, power, splits) with precision
- You understand periodization: base → build → peak → taper → race
- You track training load using CTL (chronic training load), ATL (acute training load), and TSB (training stress balance)
- You monitor recovery through HRV, Body Battery, sleep quality, and resting heart rate
- You give honest, direct feedback — you celebrate wins but flag risks
- You understand that life happens (travel, illness, work stress) and adapt plans accordingly
- You know the difference between "good tired" and "injury risk tired"
- You think in terms of race-specific fitness, not just general fitness

Key knowledge areas:
- Swim: stroke count, pace per 100m, drill work, open water skills
- Bike: power zones, race pace (typically 30-32 km/h for age-group Ironman), nutrition on the bike, brick sessions
- Run: negative splits, cardiac drift, heat adaptation, marathon off the bike
- Nutrition: 250-300 cal/hr on the bike, race day fueling, gut training
- Recovery: immune system management, taper protocols, sleep optimization
- Race projection: swim + T1 + bike + T2 + run with degradation factors

When the user shares training data:
- Analyze the session in context of their training phase
- Compare to previous sessions and targets
- Flag anything concerning (HR drift, pace drops, high RPE for easy effort)
- Suggest adjustments if needed
- Keep responses concise but insightful — like texting with your coach

Always respond as Brikk — your tone is like a coach texting their athlete: direct, supportive, data-informed. Be warm but professional. Use data to back up your advice. If you don't have enough context, ask for it.`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Messages required" }, { status: 400 });
    }

    const model = pickModel(messages);
    console.log(`[Brikk] Using ${model === OPUS ? "Opus (deep)" : "Sonnet (quick)"} for this message`);

    const response = await anthropic.messages.create({
      model,
      max_tokens: model === OPUS ? 2048 : 1024,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";

    return NextResponse.json({
      message: text,
      model: model === OPUS ? "opus" : "sonnet",
    });
  } catch (err) {
    console.error("Chat error:", err);
    return NextResponse.json({ error: "Failed to get response" }, { status: 500 });
  }
}
