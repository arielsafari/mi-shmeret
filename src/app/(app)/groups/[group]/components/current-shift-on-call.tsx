import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OnCallDisplay from "../components/on-call-display";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import OnCallPerson from "@/interfaces/on-call-person.interface";
import OnCallDialog from "./on-call-dialog";
import clsx from "clsx";

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
      <CardContent
        className={clsx(
          "grid grid-cols-1 items-center justify-items-center gap-5",
          {
            "grid-cols-2": onCallPeople.length > 0,
          }
        )}
      >
        {onCallPeople.map((person) => (
          <OnCallDisplay
            key={person.username}
            person={person}
          />
        ))}

        <OnCallDialog>
          <Button variant="ghost">
            {onCallPeople.length > 0 ? "עוד אחד" : "הוסף משמרתן"}
            <IconPlus className="ms-2 size-4" />
          </Button>
        </OnCallDialog>
      </CardContent>
    </Card>
  );
}
