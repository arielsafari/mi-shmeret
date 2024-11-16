import { Metadata } from "next";

import { getCurrentShift } from "@/server-actions/shifts";
import { getSingleGroup } from "@/server-actions/groups";
import Shift from "@/interfaces/shift.interface";
import Group from "@/interfaces/group.interface";
import ActiveShift from "./components/active-shift";
import NonActiveShift from "./components/non-active-shift";
import { Button } from "@/components/ui/button";
import { IconChevronLeft } from "@tabler/icons-react";
import { Link } from "@/components/link";

export const metadata: Metadata = {
  title: "Shift Registration",
};

export default async function ShiftsPage(props: {
  params: Promise<{ group: string }>;
}) {
  const params = await props.params;
  const currentGroup: Group = await getSingleGroup(params.group);
  const currentShift: Shift = await getCurrentShift(params.group);
  const isShiftActive: boolean = !!currentShift;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-baseline">
        <h2 className="text-2xl font-bold tracking-tight">
          {currentGroup.displayName}
        </h2>

        <Button variant="link" className="text-xl" size="xs" asChild>
          <Link href="/">
            חזור
            <IconChevronLeft className="size-4" />
          </Link>
        </Button>
      </div>
      {isShiftActive ? (
        <ActiveShift currentShift={currentShift} />
      ) : (
        // TODO: make sure non-active shift is displayed correctly.
        <NonActiveShift />
      )}
    </div>
  );
}
