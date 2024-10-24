import OnCallPerson from "./on-call-person.interface";

export default interface Shift {
  startsAt: Date;
  endsAt: Date;
  onCall: OnCallPerson[];
  group: string;
}
