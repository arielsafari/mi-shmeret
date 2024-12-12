"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

export default function CsvImportButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/import-csv", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to import CSV");
      }

      toast({
        title: "CSV Imported",
        description: "On-call data has been successfully imported.",
      });
    } catch (error) {
      console.error("Error importing CSV:", error);
      toast({
        title: "Import Failed",
        description: "There was an error importing the CSV file.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        disabled={isLoading}
        className="hidden"
        id="csv-upload"
      />
      <label htmlFor="csv-upload">
        <Button as="span" disabled={isLoading}>
          {isLoading ? "Importing..." : "Import CSV"}
        </Button>
      </label>
    </div>
  );
}
