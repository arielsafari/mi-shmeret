import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import OnCallPerson from "@/interfaces/on-call-person.interface";
export default function OnCallDisplay(person: OnCallPerson) {
  return (
    <div
      className="
        p-2 
        w-full
        border rounded-xl shadow-sm 
        flex items-center space-x-4 justify-between 
        bg-slate-100/50
        dark:bg-slate-800/50
      "
    >
      <div className="flex flex-row gap-4 items-center ms-2">
        <Avatar className="size-12">
          <AvatarImage src="https://i.pravatar.cc/150" alt={person.fullName} />
          <AvatarFallback>
            {/* {person.fullName
              .split(" ")
              .map((n) => n[0])
              .join("")} */}
          </AvatarFallback>
        </Avatar>
        <div className="text-gray-500 dark:text-white ">
          <span className="flex gap-1 items-baseline">
            <span className="text-md font-bold">{person.fullName}</span>
            {person.isShadow && (
              <span className="text-sm text-muted-foreground">(משמרתן צל)</span>
            )}
          </span>
          <p className="text-sm">{person.phoneNumber}</p>
          <p className="text-sm">VoIP - {person.voipNumber}</p>
        </div>
      </div>

      {/* TODO: Allow editing on-call person */}
    </div>
  );
}
