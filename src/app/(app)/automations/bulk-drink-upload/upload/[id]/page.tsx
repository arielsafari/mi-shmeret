import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { IconChevronLeft } from "@tabler/icons-react";
import { Link } from "@/components/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TargetsTable from "../../components/targets-table";
import { Badge } from "@/components/ui/badge";
import { targets } from "./mock-data";
import { Separator } from "@/components/ui/separator";
import { Upload } from "lucide-react";
import { DownloadTableCSV } from "../../components/download-table-csv";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "העלאת כמות גדולה של שתיות",
};

export default async function UploadPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const currentBulk = params.id;
  const currentStatus = "doneUploading";
  const listStatuses = {
    validation: (
      <Badge className="text-lg rounded-full bg-yellow-700 hover:bg-yellow-600">
        וילדוץ לפני העלאה
      </Badge>
    ),
    uploading: (
      <Badge className="text-lg rounded-full bg-cyan-700 hover:bg-cyan-600">
        בהעלאה...
      </Badge>
    ),
    doneUploading: (
      <Badge className="text-lg rounded-full bg-green-700 hover:bg-green-600">
        כל היעדים הועלו
      </Badge>
    ),
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-baseline">
        <h2 className="text-2xl font-bold tracking-tight">
          העלאה {currentBulk}
        </h2>

        <Button variant="link" className="text-xl" size="xs" asChild>
          <Link href="/automations/bulk-drink-upload">
            חזור
            <IconChevronLeft className="size-4" />
          </Link>
        </Button>
      </div>

      <Card className="p-0 relative overflow-clip">
        <CardHeader className="flex flex-row justify-between gap-3">
          <div>
            <CardTitle>רשימת יעדים</CardTitle>
            <CardDescription>
              זוהי רשימת היעדים שנטענה מהקבצים שהעלת.
            </CardDescription>
          </div>

          <DownloadTableCSV targets={targets} />
          {/* TODO: Add cancel upload button */}
        </CardHeader>

        <Separator />

        <CardHeader
          className="
            py-3 flex-row justify-between items-baseline 
            bg-muted sticky top-0 z-20 border-b mb-5
        "
        >
          <span className="font-semibold font-mono text-md">
            הסטטוס הנוכחי של ההעלאה
          </span>
          {listStatuses[currentStatus]}
        </CardHeader>

        <CardContent>
          {/* TODO: Load targets from backend */}
          <TargetsTable targets={targets} />
        </CardContent>

        <Separator />

        <CardFooter className="py-5 justify-between align-center bg-muted">
          <span className="flex gap-3 items-baseline">
            <span>סה״כ יעדים להעלאה</span>
            <Badge className="text-md">{targets.length}</Badge>
          </span>
          <Button className="group bg-green-700 hover:bg-green-600 text-lg">
            העלה את היעדים
            <Upload
              className="-me-1 ms-2 opacity-60 transition-transform group-hover:-translate-y-0.5"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
