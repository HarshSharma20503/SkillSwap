import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UnRegisteredUser } from "../models/unRegisteredUser.model.js";
dotenv.config();

const verifyJWT_email = asyncHandler(async (req, res, next) => {
  try {
    console.log("\n******** Inside verifyJWT_email Function ********");

    const token = req.cookies?.accessTokenRegistration || req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      console.log("token not found");
      throw new ApiError(401, "Please Login");
    }

    // console.log("Token Found : ", token);

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Decoded Token is : ", decodedToken);
    const user = await UnRegisteredUser.findOne({ email: decodedToken?.email }).select(
      "-_id -__v -createdAt -updatedAt"
    );
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }
    console.log("middleware", user);
    req.user = user;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      console.log("Token Expired");
      throw new ApiError(401, "Login Again, Session Expired");
    } else {
      console.log("Error in VerifyJWT Middleware:", error);
      throw new ApiError(401, error.message || "Invalid Access Token");
    }
  }
});

const verifyJWT_username = asyncHandler(async (req, res, next) => {
  try {
    console.log("\n******** Inside verifyJWT_username Function ********");

    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      console.log("token not found");
      throw new ApiError(401, "Please Login");
    }

    // console.log("Token Found : ", token);

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Decoded Token is : ", decodedToken);
    const user = await User.findOne({ username: decodedToken?.username }).select("-__v -createdAt -updatedAt");
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }
    // console.log(user);
    req.user = user;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      console.log("Token Expired");
      throw new ApiError(401, "Please Login");
    } else {
      console.log("Error in VerifyJWT Middleware:", error);
      throw new ApiError(401, error.message || "Invalid Access Token");
    }
  }
});

export { verifyJWT_email, verifyJWT_username };
