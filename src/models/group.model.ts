import Group from "@/interfaces/group.interface";
import mongoose, { Schema, Document, model } from "mongoose";

export interface GroupDocument extends Document, Group {}

export const groupSchema = new Schema<GroupDocument>(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "name is required"],
    },
    displayName: {
      type: String,
      unique: true,
      required: [true, "displayName is required"],
    },
    imageSource: {
      type: String,
      required: [true, "imageSource is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const GroupModel =
  mongoose.models.Group || model<GroupDocument>("Group", groupSchema);
