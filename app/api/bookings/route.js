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

export async function GET() {
  try {
    const db = getDb();
    return NextResponse.json(db.bookings);
  } catch (e) {
    return NextResponse.json([]);
  }
}

export async function POST(request) {
  try {
    const newBooking = await request.json();
    const db = getDb();
    
    const bookingWithId = { 
      ...newBooking, 
      id: Math.random().toString(36).substr(2, 9) 
    };
    
    db.bookings.push(bookingWithId);
    saveDb(db);
    
    return NextResponse.json(bookingWithId, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error saving data" }, { status: 500 });
  }
}