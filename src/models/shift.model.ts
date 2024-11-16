import Shift from "@/interfaces/shift.interface";
import mongoose, { Schema, Document, model, Types } from "mongoose";

export interface ShiftDocument extends Document, Omit<Shift, "groupName"> {
  group: Types.ObjectId;
}

export const onCallPersonSchema = new Schema({
  name: String,
  phoneNumber: String,
  voipNumber: String,
  isShadow: Boolean,
});

export const shiftSchema = new Schema<ShiftDocument>(
  {
    group: {
      type: Schema.Types.ObjectId,
      ref: "Group", // Reference to the Group model
      required: [true, "group is required"],
    },
    startsAt: {
      type: Date,
      required: [true, "startsAt is required"],
    },
    endsAt: {
      type: Date,
      required: [true, "endsAt is required"],
    },
    onCall: {
      type: [onCallPersonSchema],
      default: [],
      required: [true, "onCall is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const ShiftModel =
  mongoose.models.Shift || model<ShiftDocument>("Shift", shiftSchema);
