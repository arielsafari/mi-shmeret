import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Upload } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "אוטומציות",
};

export const automations: { name: string; displayName: string }[] = [
  { name: "bulk-drink-upload", displayName: "העלאת כמות גדולה של שתיות" },
];

export default async function AutomationsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>אוטומציות</CardTitle>
        <CardDescription>בחר אוטומציה שבה תרצה להשתמש.</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {automations.map((automation) => (
            <Link
              href={`/automations/${automation.name}`}
              key={automation.name}
            >
              <Card className="flex p-0 items-center gap-4 flex-row overflow-clip rounded-md transition-all hover:bg-accent cursor-pointer">
                <div className="bg-indigo-700 p-4 text-white">
                  <Upload />
                </div>
                <span className="text-lg">{automation.displayName}</span>
              </Card>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
