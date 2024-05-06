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
  console.log("\n******** Inside createReport Controller function ********");
  const { username, reportedUsername, issue, issueDescription } = req.body;

  if (!username || !reportedUsername || !issue || !issueDescription) {
    return next(new ApiError(400, "Please fill all the details"));
  }

  const reporter = await User.findOne({ username: username });
  const reported = await User.findOne({ username: reportedUsername });

  if (!reporter || !reported) {
    return next(new ApiError(400, "User not found"));
  }

  const chat = await Chat.findOne({
    users: {
      $all: [reported._id, reporter._id],
    },
  });

  if (!chat) {
    return next(new ApiError(400, "User never interacted with the reported user so cannot report"));
  }

  const report = await Report.create({
    reporter: reporter._id,
    reported: reported._id,
    nature: issue,
    description: issueDescription,
  });

  res.status(201).json(new ApiResponse(201, report, "User Reported successfully"));
});
