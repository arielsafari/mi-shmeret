"use client";

import * as React from "react";
import { Database, File, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FileDropzoneProps extends React.HTMLAttributes<HTMLDivElement> {
  onFileSelect?: (files: File[]) => void;
  onUpload?: (files: File[]) => void;
}

export function FileDropzone({
  className,
  onFileSelect,
  onUpload,
  ...props
}: FileDropzoneProps) {
  const [isDragging, setIsDragging] = React.useState(false);
  const [files, setFiles] = React.useState<File[]>([]);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      onFileSelect?.(newFiles);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      onFileSelect?.(newFiles);
    }
  };

  const removeFile = (fileToRemove: File) => {
    setFiles(files.filter((file) => file !== fileToRemove));
  };

  const handleUpload = () => {
    onUpload?.(files);
  };

  return (
    <div className={cn("space-y-4", className)} {...props}>
      <div
        className={cn(
          "relative cursor-pointer rounded-lg border-2 border-dashed border-muted-foreground/25 p-12 text-center transition-colors hover:bg-muted/25 bg-white/20 dark:bg-white/5 backdrop-blur-md",
          isDragging && "border-primary bg-muted/25",
          files.length > 0 && "h-32 p-4"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={handleFileInput}
          multiple
        />
        {files.length === 0 ? (
          <div className="flex flex-col items-center gap-2">
            <Database className="h-10 w-10 text-muted-foreground/70" />
            <h3 className="text-xl font-semibold">בחר קבצי CSV</h3>
            <p className="text-sm text-muted-foreground">
              זרוק כאן את הקבצים או לחץ כדי לבחור אילו קבצים להעלות
            </p>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            זרוק כאן קבצים נוספים או לחץ כדי לבחור אילו קבצים להעלות
          </p>
        )}
      </div>
      {files.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium">קבצים שמחכים להעלאה:</h4>
          <ul className="max-h-32 space-y-2 overflow-auto rounded-md border bg-muted p-2">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center space-x-2">
                  <File className="h-4 w-4" />
                  <span>{file.name}</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => removeFile(file)}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">מחק קובץ</span>
                </Button>
              </li>
            ))}
          </ul>
          <Button className="w-full" onClick={handleUpload}>
            העלה את הקבצים
          </Button>
        </div>
      )}
    </div>
  );
}
