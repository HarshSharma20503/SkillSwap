import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    console.log("\n******** Inside VerifyJWT Function ********");

    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      console.log("token not found");
      throw new ApiError(401, "Unauthorized request");
    }

    console.log("Token Found : ", token);

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token is : ", decodedToken);
    const user = await User.findOne({ email: decodedToken?.email });
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }
    console.log(user);
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid Access Token");
  }
});
