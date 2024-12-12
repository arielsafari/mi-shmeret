import { NextResponse } from "next/server";
import { parse } from "csv-parse";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const csvContent = await file.text();
    const records = parse(csvContent, {
      columns: true,
      skip_empty_lines: true,
    });

    // Validate CSV structure
    const isValidCSV = records.every(
      (record) =>
        "Identity" in record &&
        "Description" in record &&
        "Ability" in record &&
        "Operation ID" in record
    );

    if (!isValidCSV) {
      return NextResponse.json(
        { error: "Invalid CSV structure" },
        { status: 400 }
      );
    }

    // TODO: Insert records into MongoDB
    // const result = await collection.insertMany(records);

    // await client.close();

    return NextResponse.json({
      message: "CSV uploaded and stored successfully",
      // insertedCount: result.insertedCount,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
