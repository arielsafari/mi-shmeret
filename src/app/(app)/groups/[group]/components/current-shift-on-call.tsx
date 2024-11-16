import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OnCallDisplay from "../components/on-call-display";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import OnCallPerson from "@/interfaces/on-call-person.interface";

interface Props {
  onCallPeople: OnCallPerson[];
}

export default function CurrentShiftOnCall({ onCallPeople }: Props) {
  return (
    <Card className="p-0 border border-border">
      <CardHeader>
        <CardTitle className="flex flex-row justify-between items-top text-lg">
          <span>מי במשמרת?</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 items-center justify-items-center gap-5">
        {onCallPeople.map((person) => (
          <OnCallDisplay
            key={person.username}
            username={person.username}
            fullName={person.fullName}
            phoneNumber={person.phoneNumber}
            voipNumber={person.voipNumber}
            isShadow={person.isShadow}
          />
        ))}

        <Button variant="ghost" className="w-min mx-auto">
          {/* TODO: Create 'add new on-call person' logic */}
          עוד אחד <IconPlus />
        </Button>
      </CardContent>
    </Card>
  );
}
