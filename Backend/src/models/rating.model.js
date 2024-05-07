import mongoose, { Schema } from "mongoose";

const ratingSchema = new Schema(
  {
    rating: {
      type: Number,
      required: true,
    },
    rater: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    description: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Rating = mongoose.model("Rating", ratingSchema);
