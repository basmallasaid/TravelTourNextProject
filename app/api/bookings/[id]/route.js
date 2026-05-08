import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "db.json");

function getDb() {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

function saveDb(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export async function DELETE(request, { params }) {
  const { id } = params;
  const db = getDb();
  db.bookings = db.bookings.filter((b) => b.id !== id);
  saveDb(db);
  return NextResponse.json({ message: "Deleted" });
}

export async function PUT(request, { params }) {
  const { id } = params;
  const updatedData = await request.json();
  const db = getDb();
  const index = db.bookings.findIndex((b) => b.id === id);
  
  if (index !== -1) {
    db.bookings[index] = { ...db.bookings[index], ...updatedData };
    saveDb(db);
    return NextResponse.json(db.bookings[index]);
  }
  return NextResponse.json({ message: "Not Found" }, { status: 404 });
}