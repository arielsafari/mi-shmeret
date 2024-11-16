import Shift from "@/interfaces/shift.interface";
import CurrentShiftStatus from "./current-shift-status";
import CurrentShiftOnCall from "./current-shift-on-call";

interface Props {
  currentShift: Shift;
}

export default function ActiveShift({ currentShift }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <CurrentShiftStatus currentShift={currentShift} />
      <CurrentShiftOnCall onCallPeople={currentShift.onCall} />
    </div>
  );
}
