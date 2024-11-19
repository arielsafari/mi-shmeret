"use server";

import db from "@/lib/db";
import { GroupModel } from "@/models/group.model";
import Group from "@/interfaces/group.interface";

export async function getGroups() {
  await db();
  return await GroupModel.find().lean<Group>();
}

export async function getSingleGroup(groupName?: string) {
  await db();

  const fieldsToFilter: { [k: string]: unknown } = {};
  if (groupName) {
    fieldsToFilter.name = groupName;
  }
  return await GroupModel.findOne(fieldsToFilter);
}
