import { getTypedError } from "@/lib/utils";
import { createShift } from "@/server-actions/shifts";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: { group: string } }
) {
  const { starts_at, ends_at } = await request.json();

  // TODO: Validate fields

  try {
    const newShift = await createShift({
      startsAt: starts_at,
      endsAt: ends_at,
      onCall: [],
      group: params.group,
    });
    return NextResponse.json(newShift);
  } catch (untypedError) {
    const error = getTypedError(untypedError);

    console.log("While trying to create new shift, got this error:", error);
    return NextResponse.json({ error: error });
  }
}
