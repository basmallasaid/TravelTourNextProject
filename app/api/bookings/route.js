import { NextResponse } from "next/server";
const MOCK_API = process.env.NEXT_PUBLIC_APIURLBOOKINGS;
export async function GET() {
  try {
    const res = await fetch(MOCK_API, { cache: 'no-store' });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json([]);
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    const res = await fetch(MOCK_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error saving to MockAPI" }, { status: 500 });
  }
}