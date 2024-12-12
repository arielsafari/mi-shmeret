import { Metadata } from "next";
import { getSingleGroup } from "@/server-actions/groups";
import ShiftSection from "./_components/shift-section";

export const dynamic = "force-dynamic";

export async function generateMetadata(
  params: Promise<{ group: string }>
): Promise<Metadata> {
  const group = (await params).group;
  const currentGroup = await getSingleGroup(group);

  return {
    title: currentGroup?.displayName,
  };
}

export default async function ShiftsPage() {
  return <ShiftSection />;
}
