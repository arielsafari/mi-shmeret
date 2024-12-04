"use client";

import Target from "@/interfaces/target.interface";
import { format } from "date-fns";

export default function downloadCSVFile(targets: Target[], fileName?: string) {
  // Convert data to CSV
  const headers = ["Identity", "Description", "Ability", "Operation ID"];
  const csvData = targets.map((target) =>
    [
      target.identity,
      target.description,
      target.ability,
      target.operationId,
    ].join(",")
  );
  const csv = [headers.join(","), ...csvData].join("\n");

  // Create and trigger download
  const downloadFileName =
    fileName ?? `targets-${format(new Date(), "yyyy-MM-dd_HH-mm")}.csv`;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", downloadFileName);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
