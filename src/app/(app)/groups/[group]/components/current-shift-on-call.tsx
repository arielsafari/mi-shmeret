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
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row justify-between items-top text-lg">
          מי במשמרת?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {onCallPeople.map((person) => (
            <OnCallDisplay
              name={person.name}
              phoneNumber={person.phoneNumber}
              voipNumber={person.voipNumber}
              avatarUrl={person.avatarUrl}
              isShadow={person.isShadow}
            />
          ))}

          <Button variant="ghost" className="w-min mx-auto">
            {/* TODO: Create 'add new on-call person' logic */}
            עוד אחד <IconPlus />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
