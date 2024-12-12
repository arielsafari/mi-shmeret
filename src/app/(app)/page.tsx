import { Metadata } from "next";
import GroupsPage from "./groups/page";
import AutomationsPage from "./automations/page";

export const metadata: Metadata = {
  title: "מי-שמרת",
};

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <div className="flex flex-col gap-10 mb-20">
      <GroupsPage collapsed={true} />
      <AutomationsPage collapsed={true} />
    </div>
  );
}
