import { getGroups } from "@/server-actions/groups";
import { NextResponse } from "next/server";

export async function GET() {
  // TODO: Add caching to the data
  return NextResponse.json(await getGroups());
}
