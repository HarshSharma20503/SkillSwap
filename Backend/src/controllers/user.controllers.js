import { asyncHandler } from "../utils/asyncHandler.js";

import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const userAuthGoogle = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Login " });
});

export { userAuthGoogle };
