"use client";

import CurrentShiftStatus from "./current-shift-status";
import CurrentShiftOnCall from "./current-shift-on-call";
import { useGroupContext } from "../group.context";
import NonActiveShift from "./non-active-shift";

export default function ShiftSection() {
  const { currentShift } = useGroupContext();

  if (!currentShift) {
    return <NonActiveShift />;
  }

  return (
    <div className="flex flex-col gap-6">
      <CurrentShiftStatus currentShift={currentShift} />
      <CurrentShiftOnCall onCallPeople={currentShift.onCall} />
    </div>
  );
}
