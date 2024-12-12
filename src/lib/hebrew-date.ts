import { HDate, HebrewCalendar, Event } from "@hebcal/core";

export function getHebrewDate(date: Date): string {
  const hDate = new HDate(date);
  return hDate.toString();
}

export function getJewishHolidays(date: Date): string[] {
  const hDate = new HDate(date);
  const events = HebrewCalendar.getHolidaysOnDate(hDate, false) as Event[];
  return events ? events.map((event) => event.render("he")) : [];
}
