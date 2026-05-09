import { NextResponse } from "next/server";

const MOCK_API = process.env.NEXT_PUBLIC_APIURLBOOKINGS;

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    await fetch(`${MOCK_API}/${id}`, { method: "DELETE" });
    return NextResponse.json({ message: "Deleted from MockAPI" });
  } catch (error) {
    return NextResponse.json({ message: "Delete failed" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
  try {
    const updatedData = await request.json();
    const res = await fetch(`${MOCK_API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: "Update failed" }, { status: 500 });
  }
}