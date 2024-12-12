"use client";

import { Button } from "@/components/ui/button";
import { IconChevronLeft } from "@tabler/icons-react";
import { Link } from "@/components/link";
import { FileDropzone } from "./components/file-dropzone";
import { useState } from "react";
import { DownloadCSVTemplate } from "./components/download-csv-template";

// export const metadata: Metadata = {
//   title: "העלאת כמות גדולה של שתיות",
// };
export const dynamic = "force-dynamic";

export default function BulkDrinkUploadPage() {
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (files: File[]) => {
    setUploadStatus("מעלה...");
    let isValid = true;

    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(
        "/api/automations/bulk-drink-upload/validate-csv",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        isValid = false;
        const result = await response.json();
        setErrorMessage(result.error || result.message);
      }
    }

    if (isValid) {
      const status =
        files.length === 1
          ? "קובץ 1 הועלה בהצלחה"
          : `${files.length} קבצים הועלו בהצלחה`;
      setUploadStatus(status);
    }
    // TODO: After validation, create new upload with the uploaded targets
    // TODO: If success, redirect to the /upload/[id] page
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-baseline">
        <h2 className="text-2xl font-bold tracking-tight">
          העלאת כמות גדולה של שתיות
        </h2>

        <Button variant="link" className="text-xl" size="xs" asChild>
          <Link href="/automations">
            חזור
            <IconChevronLeft className="size-4" />
          </Link>
        </Button>
      </div>

      <div className="w-fit mx-auto">
        <DownloadCSVTemplate />
      </div>

      <FileDropzone onUpload={handleSubmit} />

      {uploadStatus && (
        <div className="text-center text-sm text-muted-foreground">
          <div>{uploadStatus}</div>

          {errorMessage && <span className="text-red-600">{errorMessage}</span>}
        </div>
      )}
    </div>
  );
}
