import Shift from "@/interfaces/shift.interface";
import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/ui/cool-mode";
import CurrentShiftStatus from "../../components/current-shift-status";
import CurrentShiftOnCall from "../../components/current-shift-on-call";

interface Props {
  currentShift: Shift;
}

export default async function ActiveShift({ currentShift }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <CoolMode>
        <Button
          className="
              rounded-xl
              w-full p-5
              bg-green-600 hover:bg-green-500
              dark:text-white dark:bg-green-700 dark:hover:bg-green-800
              font-bold text-lg
            "
        >
          המשמרת פעילה!
        </Button>
      </CoolMode>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CurrentShiftStatus currentShift={currentShift} />
        <CurrentShiftOnCall onCallPeople={currentShift.onCall} />
      </div>
    </div>
  );
}
