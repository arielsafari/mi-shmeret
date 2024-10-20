import { Card } from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import exampleLogo1 from "./example-logo-1.png";
import Link from "next/link";

export const metadata: Metadata = {
  title: "קבוצות",
};

export default function GroupsPage() {
  const groups = [
    { name: "mador-946", displayName: "מדור 946", imageSource: exampleLogo1 },
  ];
  return (
    <>
      <div className="space-y-8 mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">קבוצות</h2>
          <p className="text-muted-foreground">בחר קבוצה שתרצה לראות.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {groups.map((group) => (
          <Link href={`/groups/${group.name}`} key={group.name}>
            <Card className="flex items-center flex-col overflow-clip rounded-md p-5 transition-all hover:bg-accent cursor-pointer">
              <Image
                src={group.imageSource}
                alt="logo"
                width={100}
                height={100}
                placeholder="blur"
                className="dark:drop-shadow-[0_0_0.75rem_white] drop-shadow-lg"
              />
              <p className="text-xl">{group.displayName}</p>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
