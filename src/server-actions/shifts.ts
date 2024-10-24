import Shift from "@/interfaces/shift.interface";

const shifts: Shift[] = [];
// TODO: Load shifts from the DB

export async function getShiftsOfGroup(group: string) {
  console.log({shifts});
  return shifts.filter((shift) => shift.group === group);
}

export async function getCurrentShift(group: string) {
  const shiftsOfTheGroup = await getShiftsOfGroup(group);
  const now = new Date();
  return shiftsOfTheGroup.find(
    (shift) => shift.endsAt >= now && shift.startsAt <= now
  );
}
async function isShiftBisectsExistingShift(newShift: Shift) {
  // Check weather the new shift bisects one of the existing shifts.
  const shiftsOfTheGroup = await getShiftsOfGroup(newShift.group);
  const startIsBisecting = shiftsOfTheGroup.filter(
    (s) =>
      newShift.startsAt >= s.startsAt && newShift.startsAt <= newShift.endsAt
  );
  const endIsBisecting = shiftsOfTheGroup.filter(
    (s) => newShift.endsAt >= s.startsAt && newShift.endsAt <= s.endsAt
  );

  if (startIsBisecting.length !== 0 || endIsBisecting.length !== 0) return true;

  return false;
}

export async function createShift(newShift: Shift) {
  if (await isShiftBisectsExistingShift(newShift)) {
    throw new Error("The new shift bisects an existing shift");
  }

  // TODO: Save to db
  shifts.push(newShift);
  return newShift;
}
