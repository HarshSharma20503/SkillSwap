import mongoose, { Schema } from "mongoose";

const unRegisteredUserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const UnRegisteredUser = mongoose.model("UnRegisteredUser", unRegisteredUserSchema);
