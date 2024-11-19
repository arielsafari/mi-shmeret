"use client";

import Group from "@/interfaces/group.interface";
import Shift from "@/interfaces/shift.interface";
import { createSafeContext } from "@/lib/create-safe-context";

interface GroupContext {
  currentShift: Shift | null;
  currentGroup: Group | null;
}

export const [GroupContextProvider, useGroupContext] =
  createSafeContext<GroupContext>("Group component was not found in the tree");
