import { getSingleGroup } from "@/server-actions/groups";
import { getShiftsOfGroup } from "@/server-actions/shifts";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  _request: NextRequest,
  props: { params: Promise<{ group: string }> }
) {
  const params = await props.params;
  const group = await getSingleGroup(params.group);
  if (group)
    return NextResponse.json({
      error: `Group ${params.group} doesn't exists.`,
    });

  return NextResponse.json(await getShiftsOfGroup(params.group));
}
