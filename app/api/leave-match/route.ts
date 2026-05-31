import { leaveMatch } from "@/app/competition/actions";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const data = JSON.parse(body);
    if (data.matchId && data.playerId) {
      await leaveMatch(data.matchId, data.playerId);
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
