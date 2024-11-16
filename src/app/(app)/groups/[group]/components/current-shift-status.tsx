import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { he } from "date-fns/locale";
import {
  IconArrowNarrowLeftDashed,
  IconCalendar,
  IconClock,
} from "@tabler/icons-react";
import Shift from "@/interfaces/shift.interface";
import { CoolMode } from "@/components/ui/cool-mode";
import { Button } from "@/components/ui/button";

interface Props {
  currentShift: Shift;
}

export default function CurrentShiftStatus({ currentShift }: Props) {
  return (
    <Card className="flex flex-row p-0 items-center overflow-hidden border border-border">
      {/* TODO: Export this template into a component */}
      <CardHeader className="p-5 flex justify-center items-center bg-accent/50 border-e">
        <CardTitle className="text-md font-normal">המשמרת הנוכחית</CardTitle>
        <CoolMode>
          <Button
            variant="ghost"
            className="
              rounded-xl
              w-min py-5
              px-10
              bg-green-600 hover:bg-green-500
              dark:bg-green-700 dark:hover:bg-green-800
              text-white hover:text-white
              font-bold text-lg
              "
          >
            פעילה
          </Button>
        </CoolMode>
      </CardHeader>

      <CardContent className="p-0 flex-grow items-center">
        <div className="flex flex-row gap-4 justify-center">
          <div>
            <span className="flex gap-1">
              <IconCalendar className="stroke-muted-foreground" />
              <p>{format(currentShift.startsAt, "P", { locale: he })}</p>
            </span>
            <span className="flex gap-1 font-bold">
              <IconClock className="stroke-muted-foreground" />
              <p>{format(currentShift.startsAt, "p", { locale: he })}</p>
            </span>
          </div>

          <IconArrowNarrowLeftDashed
            className="h-12 w-12 stroke-muted-foreground"
            strokeWidth={1}
          />

          <div>
            <span className="flex gap-1">
              <IconCalendar className="stroke-muted-foreground" />
              <p>{format(currentShift.endsAt, "P", { locale: he })}</p>
            </span>
            <span className="flex gap-1 font-bold">
              <IconClock className="stroke-muted-foreground" />
              <p>{format(currentShift.endsAt, "p", { locale: he })}</p>
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
