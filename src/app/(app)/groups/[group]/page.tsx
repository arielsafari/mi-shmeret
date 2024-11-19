import { Metadata } from "next";

import { getCurrentShift } from "@/server-actions/shifts";
import { getSingleGroup } from "@/server-actions/groups";
import { Button } from "@/components/ui/button";
import { IconChevronLeft } from "@tabler/icons-react";
import { Link } from "@/components/link";
import { notFound } from "next/navigation";
import { GroupContextProvider } from "./group.context";
import ShiftSection from "./components/shift-section";

export const metadata: Metadata = {
  title: "Shift Registration",
};

export default async function ShiftsPage(props: {
  params: Promise<{ group: string }>;
}) {
  const params = await props.params;
  const currentGroup = await getSingleGroup(params.group);
  const currentShift = await getCurrentShift(params.group);

  if (!currentGroup) notFound();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-baseline">
        <h2 className="text-2xl font-bold tracking-tight">
          {currentGroup.displayName}
        </h2>

        <Button variant="link" className="text-xl" size="xs" asChild>
          <Link href="/">
            חזור
            <IconChevronLeft className="size-4" />
          </Link>
        </Button>
      </div>
      <GroupContextProvider
        value={{
          currentShift: JSON.parse(JSON.stringify(currentShift)),
          currentGroup: JSON.parse(JSON.stringify(currentGroup)),
        }}
      >
        <ShiftSection />
      </GroupContextProvider>
    </div>
  );
}
