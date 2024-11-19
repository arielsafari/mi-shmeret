"use server";

import OnCallPerson from "@/interfaces/on-call-person.interface";
import Shift from "@/interfaces/shift.interface";
import { updateCurrentShift } from "@/server-actions/shifts";
import { revalidatePath } from "next/cache";

function isPersonExists(currentShift: Shift, person: OnCallPerson) {
  return !!currentShift.onCall.find((p) => p.username === person.username);
}

export async function handlePersonMutation(
  currentShift: Shift,
  updatedPerson: OnCallPerson
) {
  let updatedShift = currentShift;

  if (isPersonExists(currentShift, updatedPerson)) {
    updatedShift = {
      ...currentShift,
      onCall: currentShift.onCall.map((person) =>
        person.username === updatedPerson.username
          ? { ...person, ...updatedPerson }
          : person
      ),
    };
  } else {
    updatedShift.onCall.push(updatedPerson);
  }

  await updateCurrentShift(currentShift.groupName, updatedShift);
  revalidatePath(`groups/${currentShift.groupName}`);
}
