import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { addHours, format, subHours } from "date-fns";
import { he } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import {
  IconArrowNarrowLeftDashed,
  IconCalendar,
  IconClock,
} from "@tabler/icons-react";
import { CoolMode } from "@/components/ui/cool-mode";

export const metadata: Metadata = {
  title: "Shift Registration",
};

export default function CurrentShiftStatus() {
  const startsAt = subHours(new Date(), 5);
  const endsAt = addHours(new Date(), 19);
  const isShiftActive: boolean = true;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row justify-between items-top text-lg">
          <span>סטטוס המשמרת הנוכחית</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        {isShiftActive ? (
          <CoolMode>
            <Button
              className="
              w-full p-5
            bg-green-600 hover:bg-green-500
            dark:text-white dark:bg-green-700 dark:hover:bg-green-800
            font-bold text-lg
          "
            >
              המשמרת פעילה!
            </Button>
          </CoolMode>
        ) : (
          <Button
            variant="outline"
            className="w-full p-5 text-white hover:text-white cursor-default bg-red-800/90 hover:bg-red-800/80 font-bold text-lg"
          >
            המשמרת לא פעילה
          </Button>
        )}
        <div className="flex flex-row gap-4 justify-between">
          <div>
            <span className="flex gap-1">
              <IconCalendar className="stroke-muted-foreground" />
              <p>{format(startsAt, "P", { locale: he })}</p>
            </span>
            <span className="flex gap-1 font-bold">
              <IconClock className="stroke-muted-foreground" />
              <p>{format(startsAt, "p", { locale: he })}</p>
            </span>
          </div>

          <IconArrowNarrowLeftDashed
            className="h-12 w-12 stroke-muted-foreground"
            strokeWidth={1}
          />

          <div>
            <span className="flex gap-1">
              <IconCalendar className="stroke-muted-foreground" />
              <p>{format(endsAt, "P", { locale: he })}</p>
            </span>
            <span className="flex gap-1 font-bold">
              <IconClock className="stroke-muted-foreground" />
              <p>{format(endsAt, "p", { locale: he })}</p>
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
