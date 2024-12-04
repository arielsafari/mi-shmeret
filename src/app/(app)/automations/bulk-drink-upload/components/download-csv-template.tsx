"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import Target from "@/interfaces/target.interface";
import downloadCSVFile from "../lib/download-csv-file";

export function DownloadCSVTemplate() {
  const exampleTargets: Target[] = [
    {
      identity: "56372819304",
      description: "יעד קרוב",
      ability: "מרגריטה",
      operationId: "112233",
    },
    {
      identity: "98432147365",
      description: "יעד חמוד",
      ability: "בלוגה",
      operationId: "778899",
    },
  ];

  return (
    <Button
      className="group"
      onClick={() =>
        downloadCSVFile(exampleTargets, "targets-upload-template.csv")
      }
    >
      הורד קובץ CSV לדוגמה
      <DownloadIcon
        className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-y-0.5"
        size={16}
        strokeWidth={2}
        aria-hidden="true"
      />
    </Button>
  );
}
