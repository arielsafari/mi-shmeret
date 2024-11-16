import { getSingleGroup } from "@/server-actions/groups";
import { getShiftsOfGroup } from "@/server-actions/shifts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  props: { params: Promise<{ group: string }> }
) {
  const params = await props.params;
  const groups = await getSingleGroup(params.group);
  if (groups.length === 0)
    return NextResponse.json({
      error: `Group ${params.group} doesn't exists.`,
    });

  return NextResponse.json(await getShiftsOfGroup(params.group));
}
