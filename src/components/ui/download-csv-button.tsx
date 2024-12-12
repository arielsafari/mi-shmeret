"use client";

import { Button } from "@/components/ui/button";

export default function DownloadCsvButton() {
  const handleDownload = () => {
    const csvContent = `date,person
2024-12-01,Alice
2024-12-01,Bob
2024-12-02,Charlie
2024-12-02,David
2024-12-03,Eve
2024-12-03,Frank`;

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "example_on_call.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return <Button onClick={handleDownload}>הורד קובץ CSV לדוגמה</Button>;
}
