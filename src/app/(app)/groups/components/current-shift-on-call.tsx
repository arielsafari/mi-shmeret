import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import OnCallDisplay from "../components/on-call-display";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Shift Registration",
};

export default function CurrentShiftOnCall() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row justify-between items-top text-lg">
          מי במשמרת?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {/* TODO: Load on-call-person from the server */}
          <OnCallDisplay
            name="ישראל כהן"
            phoneNumber="054-9029012"
            voipNumber="1234"
            avatarUrl="https://i.pravatar.cc/150"
            isShadow={true}
          />

          <Button variant="ghost" className="w-min mx-auto">
            {/* TODO: Create 'add new on-call person' logic */}
            עוד אחד <IconPlus />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
