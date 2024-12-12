import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";
import Group from "@/interfaces/group.interface";
import { getGroups } from "@/server-actions/groups";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "מי-שמרת",
};

export const dynamic = "force-dynamic";

interface Props {
  collapsed: boolean;
}

export default async function GroupsPage({ collapsed = false }: Props) {
  const groups: Group[] = await getGroups();
  const groupsPerRow = 3;

  return (
    <Card>
      <CardHeader>
        <CardTitle>קבוצות</CardTitle>
        <CardDescription>בחר קבוצה שתרצה לראות.</CardDescription>
      </CardHeader>

      <CardContent>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6`}>
          {groups
            .slice(0, collapsed ? groupsPerRow : undefined)
            .map((group) => (
              <Link href={`/groups/${group.name}`} key={group.name}>
                <Card className="flex items-center flex-col overflow-clip rounded-md p-5 transition-all hover:bg-accent cursor-pointer">
                  <Image
                    src={group.imageSource}
                    alt="Group image"
                    width={200}
                    height={200}
                    priority
                    className="dark:drop-shadow-[0_0_0.75rem_white] drop-shadow-lg size-40"
                  />
                  <p className="text-xl">{group.displayName}</p>
                </Card>
              </Link>
            ))}
        </div>
      </CardContent>

      {collapsed && groups.length > groupsPerRow && (
        <CardFooter className="flex justify-center">
          <Button variant="default" asChild>
            <Link href="/groups">צפה בכל הקבוצות</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
