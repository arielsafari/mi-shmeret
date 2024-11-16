import db from "@/lib/db";
import { GroupModel } from "@/models/group.model";
import { unstable_cache } from "next/cache";

export const getGroups = unstable_cache(
  async () => {
    await db();
    return await GroupModel.find();
  },
  ["groups"],
  { revalidate: 3600, tags: ["groups"] }
);

export const getSingleGroup = unstable_cache(
  async (groupName?: string) => {
    await db();

    const fieldsToFilter: { [k: string]: unknown } = {};
    if (groupName) {
      fieldsToFilter.name = groupName;
    }
    return await GroupModel.findOne(fieldsToFilter);
  },
  ["groups/single"],
  { revalidate: 3600, tags: ["groups", "single"] }
);
