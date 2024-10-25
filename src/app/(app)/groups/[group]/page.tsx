import { Metadata } from "next";

import { getCurrentShift } from "@/server-actions/shifts";
import { getSingleGroup } from "@/server-actions/groups";
import Shift from "@/interfaces/shift.interface";
import Group from "@/interfaces/group.interface";
import ActiveShift from "./components/active-shift";
import NonActiveShift from "./components/non-active-shift";

export const metadata: Metadata = {
  title: "Shift Registration",
};

export default async function ShiftsPage({
  params,
}: {
  params: { group: string };
}) {
  const currentGroup: Group = await getSingleGroup(params.group);
  const currentShift: Shift = await getCurrentShift(params.group);
  // TODO: Add refetching the currentShift every minute
  const isShiftActive: boolean = !!currentShift;

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl font-bold tracking-tight">
        קבוצת {currentGroup.displayName}
      </h2>

      {isShiftActive ? (
        <ActiveShift currentShift={currentShift} />
      ) : (
        <NonActiveShift />
      )}
      <div dir="ltr">{JSON.stringify({ currentShift, currentGroup })}</div>
    </div>
  );
}
