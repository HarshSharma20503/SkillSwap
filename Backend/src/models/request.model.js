import mongoose, { Schema } from "mongoose";

const requestSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    receiver: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["Pending", "Rejected", "Connected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export const Request = mongoose.model("Request", requestSchema);
