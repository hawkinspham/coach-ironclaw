import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // For now, store emails in a simple JSON file
    // We'll upgrade this to a database (Supabase) later
    const filePath = path.join(process.cwd(), "waitlist.json");

    let emails: string[] = [];
    try {
      const data = await fs.readFile(filePath, "utf-8");
      emails = JSON.parse(data);
    } catch {
      // File doesn't exist yet, start fresh
    }

    if (!emails.includes(email)) {
      emails.push(email);
      await fs.writeFile(filePath, JSON.stringify(emails, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}