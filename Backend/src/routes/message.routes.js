import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controllers.js";
import { verifyJWT_username } from "../middlewares/verifyJWT.middleware.js";

const router = express.Router();

router.post("/", verifyJWT_username, sendMessage);
router.get("/:chatId", verifyJWT_username, getMessages);

export default router;
