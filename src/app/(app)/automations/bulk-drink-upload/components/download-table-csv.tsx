"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import Target from "@/interfaces/target.interface";
import downloadCSVFile from "../lib/download-csv-file";

interface Props {
  targets: Target[];
}

export function DownloadTableCSV({ targets }: Props) {
  return (
    <Button onClick={() => downloadCSVFile(targets)}>
      הורד את הטבלה כ-CSV
      <DownloadIcon className="ms-2 h-4 w-4" />
    </Button>
  );
}
