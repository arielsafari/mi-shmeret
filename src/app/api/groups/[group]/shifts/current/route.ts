import Shift from "@/interfaces/shift.interface";
import { getTypedError } from "@/lib/utils";
import { getCurrentShift, updateCurrentShift } from "@/server-actions/shifts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: { group: string } }
) {
  const currentShift = (await getCurrentShift(params.group)) ?? {};
  return NextResponse.json(currentShift);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { group: string } }
) {
  const updatedShift: Shift = await request.json();

  try {
    const shiftAfterUpdate =
      (await updateCurrentShift(params.group, updatedShift)) ?? {};
    return NextResponse.json(shiftAfterUpdate);
  } catch (untypedError) {
    const error = getTypedError(untypedError);

    console.log(
      "While trying to update the shift, got the following error:",
      error
    );
    return NextResponse.json({ error: error });
  }
}
