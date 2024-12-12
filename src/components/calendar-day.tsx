import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getOnCallPeople } from "@/lib/on-call";
import { getHebrewDate, getJewishHolidays } from "@/lib/hebrew-date";

interface CalendarDayProps {
  date: Date;
  dayOfMonth: string;
  isCurrentMonth: boolean;
}

export default async function CalendarDay({
  date,
  dayOfMonth,
  isCurrentMonth,
}: CalendarDayProps) {
  const onCallPeople = await getOnCallPeople(date);
  const hebrewDate = getHebrewDate(date);
  const jewishHolidays = getJewishHolidays(date);

  return (
    <Card
      className={`h-40 overflow-y-auto ${
        isCurrentMonth ? "bg-background" : "bg-muted"
      }`}
    >
      <CardHeader className="p-2">
        <CardTitle
          className={`text-sm ${
            isCurrentMonth ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          {dayOfMonth}
          <span className="text-xs block">{hebrewDate}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        {Array.isArray(jewishHolidays) &&
          jewishHolidays.map((holiday, index) => (
            <div key={index} className="text-xs text-blue-600 font-bold">
              {holiday}
            </div>
          ))}
        {Array.isArray(onCallPeople) &&
          onCallPeople.map((person, index) => (
            <div
              key={index}
              className={`text-xs ${
                isCurrentMonth ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {person}
            </div>
          ))}
      </CardContent>
    </Card>
  );
}
