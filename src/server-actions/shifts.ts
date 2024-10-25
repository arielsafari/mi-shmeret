import { revalidateTag, unstable_cache } from "next/cache";

import db from "@/lib/db";
import Shift from "@/interfaces/shift.interface";
import { ShiftDocument, ShiftModel } from "@/models/shift.model";
import { getSingleGroup } from "./groups";
import Group from "@/interfaces/group.interface";
import { getTypedError } from "@/lib/utils";

export const getShiftsOfGroup = unstable_cache(
  async (group: string) => {
    await db();
    return await ShiftModel.find().populate({
      path: "group",
      match: { name: group },
    });
  },
  ["shifts"],
  { revalidate: 60, tags: ["shifts"] }
);

export const getCurrentShift = unstable_cache(
  async (group: string) => {
    await db();
    const now = new Date();

    return await ShiftModel.findOne({
      startsAt: { $lte: now },
      endsAt: { $gte: now },
    }).populate({
      path: "group",
      match: { name: group },
      select: [],
    });
  },
  ["shifts/current"],
  { revalidate: 60, tags: ["shifts/current"] }
);

async function isShiftBisectsExistingShift(groupName: string, newShift: Shift) {
  // Check weather the new shift bisects one of the existing shifts.
  await db();
  const startIsBisecting = await ShiftModel.find({
    startsAt: { $lte: newShift.startsAt },
    endsAt: { $gte: newShift.startsAt },
  }).populate({
    path: "group",
    match: { name: groupName },
  });
  const endIsBisecting = await ShiftModel.find({
    startsAt: { $lte: newShift.endsAt },
    endsAt: { $gte: newShift.endsAt },
  }).populate({
    path: "group",
    match: { name: groupName },
  });

  if (startIsBisecting.length !== 0 || endIsBisecting.length !== 0) return true;

  return false;
}

export async function createShift(newShift: Shift) {
  const currentGroup: Group = await getSingleGroup(newShift.groupName);

  if (!currentGroup)
    throw new Error(`The group ${newShift.groupName} doesn't exists`);

  const shift = new ShiftModel({ ...newShift, group: currentGroup });
  try {
    await shift.validate();
  } catch (untypedError) {
    const error = getTypedError(untypedError);
    throw new Error(error);
  }

  if (newShift.startsAt === newShift.endsAt)
    throw new Error("The new shift start date is the same as the end date");

  if (newShift.startsAt > newShift.endsAt)
    throw new Error("The new shift start date is larger than the end date");

  if (await isShiftBisectsExistingShift(currentGroup.name, newShift))
    throw new Error("The new shift bisects an existing shift");

  await shift.save();
  revalidateTag("shifts/current");

  return shift;
}

export async function updateCurrentShift(
  groupName: string,
  updatedShift: Shift
) {
  await db();
  const now = new Date();

  const updateResult = await ShiftModel.findOneAndUpdate(
    {
      startsAt: { $lte: now },
      endsAt: { $gte: now },
    },
    { ...updatedShift },
    { new: true, useFindAndModify: false }
  ).populate({
    path: "group",
    match: { name: groupName },
  });

  if (!updateResult) throw new Error("Can't update a non-existing shift");

  revalidateTag("shifts/current");

  return updateResult;
}
