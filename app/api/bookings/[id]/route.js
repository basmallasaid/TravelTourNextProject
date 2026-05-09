import { NextResponse } from "next/server";

const MOCK_API = process.env.NEXT_PUBLIC_APIURLBOOKINGS;

export async function DELETE(request, { params }) {
  const { id } = await params; 
  try {
    const res = await fetch(`${MOCK_API}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete from MockAPI");
    
    return NextResponse.json({ message: "Deleted from MockAPI" });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ message: "Delete failed" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const { id } = await params; 

  try {
    const updatedData = await request.json();
    const res = await fetch(`${MOCK_API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    if (!res.ok) throw new Error("Failed to update MockAPI");

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json({ message: "Update failed" }, { status: 500 });
  }
}