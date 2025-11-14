import { NextResponse } from "next/server";

const events: any[] = [];

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.type || !body.timestamp) {
      return NextResponse.json(
        { error: "Invalid event format" },
        { status: 400 }
      );
    }

    events.push(body);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON" },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json(events);
}
