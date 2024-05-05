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

  if (!chatId || !content) {
    throw new ApiError(400, "Please provide all the details");
  }

  const sender = req.user._id;
  // console.log("Sender: ", sender);

  // console.log("Chat ID: ", chatId);

  const check = await Chat.findOne({ _id: chatId });
  // console.log("check: ", check);

  if (!check.users.includes(sender)) {
    throw new ApiError(400, "Chat is not approved");
  }

  // console.log("Chat ID: ", chatId);

  const chat = await Chat.findById(chatId);
  if (!chat) {
    throw new ApiError(400, "Chat not found");
  }

  var message = await Message.create({
    chatId: chatId,
    sender: sender,
    content: content,
  });

  message = await message.populate("sender", "username name email picture");
  message = await message.populate("chatId");

  // console.log("Message: ", message);

  message = await User.populate(message, {
    path: "chatId.users",
    select: "username name email picture",
  });

  // console.log("Message: ", message);

  await Chat.findByIdAndUpdate(
    { _id: chatId },
    {
      latestMessage: message,
    }
  );

  return res.status(201).json(new ApiResponse(201, message, "Message sent successfully"));
});

export const getMessages = asyncHandler(async (req, res) => {
  console.log("\n******** Inside getMessages Controller function ********");

  const chatId = req.params.chatId;
  // console.log("Chat ID: ", chatId);

  const messages = await Message.find({ chatId: chatId }).populate("sender", "username name email picture chatId");

  return res.status(200).json(new ApiResponse(200, messages, "Messages fetched successfully"));
});
