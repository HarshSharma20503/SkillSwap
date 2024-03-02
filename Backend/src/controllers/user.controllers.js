import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const UserDetails = asyncHandler(async (req, res) => {
  console.log("\n******** Inside UserDetails Controller function ********");

  const userDetail = { username: req.user.username, name: req.user.name, email: req.user.email };
  console.log(" userDetail: ", userDetail);
  return res.status(200).json(new ApiResponse(200, userDetail, "User details fetched successfully"));
});

const UnRegisteredUserDetails = asyncHandler(async (req, res) => {
  console.log("\n******** Inside UnRegisteredUserDetails Controller function ********");

  const userDetail = { name: req.user.name, email: req.user.email };
  console.log(" UnRegisteredUserDetail: ", userDetail);
  return res.status(200).json(new ApiResponse(200, userDetail, "User details fetched successfully"));
});

export { UserDetails, UnRegisteredUserDetails };
