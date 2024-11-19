"use server";

import db from "@/lib/db";
import Shift from "@/interfaces/shift.interface";
import { ShiftDocument, ShiftModel } from "@/models/shift.model";
import { getSingleGroup } from "./groups";
import { getTypedError } from "@/lib/utils";

export async function getShiftsOfGroup(group: string) {
  await db();

  return await ShiftModel.find()
    .lean<Shift[]>()
    .populate({
      path: "group",
      match: { name: group },
    });
}

export async function getCurrentShift(group: string) {
  await db();
  const now = new Date();

  return await ShiftModel.findOne({
    startsAt: { $lte: now },
    endsAt: { $gte: now },
  })
    .lean<Shift>()
    .populate({
      path: "group",
      match: { name: group },
    });
}

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

  return startIsBisecting.length !== 0 || endIsBisecting.length !== 0;
}

export async function createShift(newShift: Shift) {
  const currentGroup = await getSingleGroup(newShift.groupName);

  if (!currentGroup)
    throw new Error(`The group ${newShift.groupName} doesn't exists`);

  const shift: ShiftDocument = new ShiftModel({
    ...newShift,
    group: currentGroup,
  });

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
  return shift.toJSON();
}

export async function updateCurrentShift(
  groupName: string,
  updatedShift: Shift
) {
  await db();

  const currentShift = await getCurrentShift(groupName);

  if (!currentShift)
    throw new Error(
      `There's no current shift for group '${groupName}' at the moment.`
    );

  const currentShiftModel: ShiftDocument = await ShiftModel.findOne({
    startsAt: currentShift.startsAt,
    endsAt: currentShift.endsAt,
  }).populate({
    path: "group",
    match: { name: groupName },
  });

  currentShiftModel.startsAt = updatedShift.startsAt;
  currentShiftModel.endsAt = updatedShift.endsAt;
  currentShiftModel.onCall = updatedShift.onCall;

  const updateResult = await currentShiftModel.save();
  if (!updateResult) throw new Error("Can't update a non-existing shift");

  return updateResult.toJSON();
}
