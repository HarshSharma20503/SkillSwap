import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
  {
    chatId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Chat",
    },
    sender: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

export const Message = mongoose.model("Message", messageSchema);
