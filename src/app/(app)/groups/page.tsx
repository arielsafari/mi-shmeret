import { Card } from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";
import Group from "@/interfaces/group.interface";
import { getGroups } from "@/server-actions/groups";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "קבוצות",
};

export default async function GroupsPage() {
  const groups: Group[] = await getGroups();
  return (
    <>
      <div className="space-y-8 mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">קבוצות</h2>
          <p className="text-muted-foreground">בחר קבוצה שתרצה לראות.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Suspense>
          {groups.map((group) => (
            <Link href={`/groups/${group.name}`} key={group.name}>
              <Card className="flex items-center flex-col overflow-clip rounded-md p-5 transition-all hover:bg-accent cursor-pointer">
                <img
                  src={group.imageSource}
                  className="dark:drop-shadow-[0_0_0.75rem_white] drop-shadow-lg size-40"
                />
                <p className="text-xl">{group.displayName}</p>
              </Card>
            </Link>
          ))}
        </Suspense>
      </div>
    </>
  );
}
