import { NextResponse } from "next/server";
import packagesData from "@/data/packages.json";

export async function GET() {
  return NextResponse.json(packagesData.packages);
}