import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import OnCallDisplay from "../components/on-call-display";
import { addHours, format, subHours } from "date-fns";
import { he } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import {
  IconArrowNarrowLeftDashed,
  IconCalendar,
  IconClock,
  IconPlus,
} from "@tabler/icons-react";
import { CoolMode } from "@/components/ui/cool-mode";

export const metadata: Metadata = {
  title: "Shift Registration",
};

export default function ShiftsPage({ params }: { params: { group: string } }) {
  const startsAt = subHours(new Date(), 5);
  const endsAt = addHours(new Date(), 19);
  const isShiftActive: boolean = false;

  return (
    <>
      <div className="space-y-8 mb-8">
        <h2 className="text-2xl font-bold tracking-tight">
          קבוצת {params.group}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-row justify-between items-top text-lg">
              <span>סטטוס המשמרת הנוכחית</span>

              {isShiftActive ? (
                <CoolMode>
                  <Button className="p-5 bg-green-600 hover:bg-green-500 font-bold text-lg">
                    המשמרת פעילה!
                  </Button>
                </CoolMode>
              ) : (
                <Button
                  variant="outline"
                  className="p-5 text-white hover:text-white cursor-default bg-red-800/90 hover:bg-red-800/80 font-bold text-lg"
                >
                  המשמרת לא פעילה
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
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
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-row justify-between items-top text-lg">
              מי במשמרת?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <OnCallDisplay
                name="ישראל כהן"
                phoneNumber="054-9029012"
                voipNumber="1234"
                avatarUrl="https://i.pravatar.cc/150"
                isShadow={true}
              />

              <Button variant="ghost" className="w-min mx-auto">
                עוד אחד <IconPlus />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
