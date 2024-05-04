import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { UnRegisteredUser } from "../models/unRegisteredUser.model.js";
import { generateJWTToken_username } from "../utils/generateJWTToken.js";
import { Message } from "../models/message.model.js";
import { Chat } from "../models/chat.model.js";

export const sendMessage = asyncHandler(async (req, res) => {
  console.log("\n******** Inside sendMessage Controller function ********");

  const { chatId, content } = req.body;
  console.log("Chat ID: ", chatId);
  console.log("Content: ", content);

  const sender = req.user._id;
  console.log("Sender: ", sender);

  const check = await Chat.findOne({ _id: chatId });
  console.log("check: ", check);

  if (!check.users.includes(sender)) {
    throw new ApiError(400, "Chat is not approved");
  }

  const message = await Message.create({
    chatId: chatId,
    sender: sender,
    content: content,
  });

  const newMessages = await Message.find({ chatId: chatId });

  return res.status(201).json(new ApiResponse(201, newMessages, "Message sent successfully"));
});

export const getMessages = asyncHandler(async (req, res) => {
  console.log("\n******** Inside getMessages Controller function ********");

  const chatId = req.params.chatId;
  console.log("Chat ID: ", chatId);

  const messages = await Message.find({ chatId: chatId });

  return res.status(200).json(new ApiResponse(200, messages, "Messages fetched successfully"));
});
