import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import OnCallPerson from "@/interfaces/on-call-person.interface";
import OnCallForm from "./on-call-form";

export default function OnCallDisplay(props: OnCallPerson) {
  return (
    <div
      className="
        p-2 
        border rounded-xl shadow-sm 
        flex items-center space-x-4 justify-between 
        bg-slate-100/50
        dark:bg-slate-800/50
      "
    >
      <div className="flex flex-row gap-4 items-center ms-2">
        <Avatar className="size-12">
          <AvatarImage src={props.avatarUrl} alt={props.name} />
          <AvatarFallback>
            {props.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="text-gray-500 dark:text-white ">
          <span className="flex gap-1 items-baseline">
            <span className="text-md font-bold">{props.name}</span>
            {props.isShadow && (
              <span className="text-sm text-muted-foreground">(משמרתן צל)</span>
            )}
          </span>
          <p className="text-sm">{props.phoneNumber}</p>
          <p className="text-sm">VoIP - {props.voipNumber}</p>
        </div>
      </div>

      <OnCallForm {...props} />
    </div>
  );
}
