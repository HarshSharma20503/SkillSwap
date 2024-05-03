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
    username: {
      type: String,
      default: "",
    },
    linkedinLink: {
      type: String,
      default: "",
    },

    githubLink: {
      type: String,
      default: "",
    },
    portfolioLink: {
      type: String,
      default: "",
    },
    skillsProficientAt: [
      {
        type: String,
        default: "",
      },
    ],
    skillsToLearn: [
      {
        type: String,
        default: "",
      },
    ],
  },
  { timestamps: true }
);

export const UnRegisteredUser = mongoose.model("UnRegisteredUser", unRegisteredUserSchema);
