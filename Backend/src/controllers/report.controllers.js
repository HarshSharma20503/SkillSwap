import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { UnRegisteredUser } from "../models/unRegisteredUser.model.js";
import { generateJWTToken_username } from "../utils/generateJWTToken.js";
import { Request } from "../models/request.model.js";
import { Chat } from "../models/chat.model.js";
import { Report } from "../models/report.model.js";

export const createReport = asyncHandler(async (req, res, next) => {
  const { receiverID } = req.body;
  const senderID = req.user._id;

  console.log("Sender ID: ", senderID);
  console.log("Receiver ID: ", receiverID);

  const existingReport = await Report.find({ sender: senderID, receiver: receiverID });

  if (existingReport.length > 0) {
    throw new ApiError(400, "Report already exists");
  }

  const receiver = await Report.create({
    sender: senderID,
    receiver: receiverID,
  });

  if (!receiver) return next(new ApiError(500, "Report not created"));

  res.status(201).json(new ApiResponse(201, receiver, "Report created successfully"));
});
