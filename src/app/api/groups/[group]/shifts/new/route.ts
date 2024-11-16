import Shift from "@/interfaces/shift.interface";
import { getTypedError } from "@/lib/utils";
import { createShift } from "@/server-actions/shifts";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  props: { params: Promise<{ group: string }> }
) {
  const params = await props.params;
  const shift: Shift = await request.json();

  try {
    const newShift = await createShift({
      ...shift,
      groupName: params.group,
    });
    return NextResponse.json(newShift);
  } catch (untypedError) {
    const error = getTypedError(untypedError);

    console.log(
      "While trying to create new shift, got the following error:",
      error
    );
    return NextResponse.json({ error: error });
  }
}
