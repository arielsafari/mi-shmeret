import { getGroups } from "@/server-actions/groups";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(await getGroups());
}
