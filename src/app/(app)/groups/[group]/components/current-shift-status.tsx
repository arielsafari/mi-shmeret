import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { he } from "date-fns/locale";
import {
  IconArrowNarrowLeftDashed,
  IconCalendar,
  IconClock,
} from "@tabler/icons-react";
import Shift from "@/interfaces/shift.interface";

interface Props {
  currentShift: Shift;
}

export default function CurrentShiftStatus({ currentShift }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row justify-between items-top text-lg">
          <span>סטטוס המשמרת הנוכחית</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <div className="flex flex-row gap-4 justify-between">
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
