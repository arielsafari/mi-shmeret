import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getCalendarDays } from "@/lib/calendar";
import { Button } from "@/components/ui/button";
// import CsvImportButton from "@/components/ui/csv-import-button";
// import DownloadCsvButton from "@/components/ui/download-csv-button";
import CalendarDay from "@/components/calendar-day";

const hebrewMonths = [
  "ינואר",
  "פברואר",
  "מרץ",
  "אפריל",
  "מאי",
  "יוני",
  "יולי",
  "אוגוסט",
  "ספטמבר",
  "אוקטובר",
  "נובמבר",
  "דצמבר",
];

const hebrewDays = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];

export default function CalendarPage({
  params,
}: {
  params: { year: string; month: string };
}) {
  const year = parseInt(params.year, 10);
  const month = parseInt(params.month, 10);

  if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
    notFound();
  }

  const calendarDays = getCalendarDays(year, month);
  const monthName = hebrewMonths[month - 1];

  const prevMonth =
    month === 1 ? { year: year - 1, month: 12 } : { year, month: month - 1 };
  const nextMonth =
    month === 12 ? { year: year + 1, month: 1 } : { year, month: month + 1 };

  return (
    <div dir="rtl" className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          לוח משמרות - {monthName} {year}
        </h1>
        <div className="space-x-2">
          {/* <CsvImportButton /> */}
          {/* <DownloadCsvButton /> */}
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <Button variant="outline" asChild>
          <Link href={`../../calendar/${prevMonth.year}/${prevMonth.month}`}>
            <ChevronRight className="me-2 h-4 w-4" />
            חודש קודם
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href={`../../calendar/${nextMonth.year}/${nextMonth.month}`}>
            חודש הבא
            <ChevronLeft className="ms-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="relative">
        <div className="grid grid-cols-7 gap-px sticky top-0 bg-background z-10">
          {hebrewDays.map((day) => (
            <div
              key={day}
              className="text-center font-bold text-muted-foreground my-2"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="grid overflow-hidden -mt-px flex-1 auto-rows-fr p-px grid-cols-7 gap-px">
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              1
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              2
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              3
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              4
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              5
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              6
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              7
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0 bg-primary text-primary-foreground">
              8
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              9
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              10
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              11
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              12
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              13
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              14
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              15
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              16
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              17
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              18
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              19
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              20
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              21
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              22
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              23
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              24
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              25
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              26
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              27
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              28
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              29
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              30
            </span>
          </div>
          <div className="ring-1 p-2 text-sm text-muted-foreground ring-border overflow-auto">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              31
            </span>
          </div>
          <div className="ring-1 p-2 text-sm ring-border overflow-auto text-muted-foreground/50">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              1
            </span>
          </div>
          <div className="ring-1 p-2 text-sm ring-border overflow-auto text-muted-foreground/50">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              2
            </span>
          </div>
          <div className="ring-1 p-2 text-sm ring-border overflow-auto text-muted-foreground/50">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              3
            </span>
          </div>
          <div className="ring-1 p-2 text-sm ring-border overflow-auto text-muted-foreground/50">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              4
            </span>
          </div>
          <div className="ring-1 p-2 text-sm ring-border overflow-auto text-muted-foreground/50">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              5
            </span>
          </div>
          <div className="ring-1 p-2 text-sm ring-border overflow-auto text-muted-foreground/50">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              6
            </span>
          </div>
          <div className="ring-1 p-2 text-sm ring-border overflow-auto text-muted-foreground/50">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              7
            </span>
          </div>
          <div className="ring-1 p-2 text-sm ring-border overflow-auto text-muted-foreground/50">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              8
            </span>
          </div>
          <div className="ring-1 p-2 text-sm ring-border overflow-auto text-muted-foreground/50">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              9
            </span>
          </div>
          <div className="ring-1 p-2 text-sm ring-border overflow-auto text-muted-foreground/50">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              10
            </span>
          </div>
          <div className="ring-1 p-2 text-sm ring-border overflow-auto text-muted-foreground/50">
            <span className="size-6 grid place-items-center rounded-full mb-1 sticky top-0">
              11
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4">
        {hebrewDays.map((day) => (
          <div key={day} className="text-center font-bold">
            {day}
          </div>
        ))}
        {calendarDays.map(({ date, dayOfMonth, isCurrentMonth }) => (
          <Suspense key={date.toISOString()} fallback={<div>טוען...</div>}>
            <CalendarDay
              date={date}
              dayOfMonth={dayOfMonth}
              isCurrentMonth={isCurrentMonth}
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
}
