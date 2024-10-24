import { getShiftsOfGroup } from "@/server-actions/shifts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: { group: string } }
) {
  // TODO: Add caching to the data

  return NextResponse.json(await getShiftsOfGroup(params.group));
}
