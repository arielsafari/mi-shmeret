import { Metadata } from "next";

import CurrentShiftStatus from "../components/current-shift-status";
import CurrentShiftOnCall from "../components/current-shift-on-call";

export const metadata: Metadata = {
  title: "Shift Registration",
};

export default function ShiftsPage({ params }: { params: { group: string } }) {
  // TODO: Load group from the server
  return (
    <>
      <div className="space-y-8 mb-8">
        <h2 className="text-2xl font-bold tracking-tight">
          קבוצת {params.group}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CurrentShiftStatus />
        <CurrentShiftOnCall />
      </div>
    </>
  );
}
