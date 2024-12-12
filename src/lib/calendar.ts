import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  startOfWeek,
  endOfWeek,
} from "date-fns";

export function getCalendarDays(year: number, month: number) {
  const startDate = startOfMonth(new Date(year, month - 1));
  const endDate = endOfMonth(startDate);
  const startWeek = startOfWeek(startDate, { weekStartsOn: 0 }); // 0 for Sunday
  const endWeek = endOfWeek(endDate, { weekStartsOn: 0 });

  return eachDayOfInterval({ start: startWeek, end: endWeek }).map((date) => ({
    date,
    dayOfMonth: format(date, "d"),
    dayOfWeek: format(date, "EEEE"),
    isCurrentMonth: date.getMonth() === month - 1,
  }));
}
