import express from "express";
import { createChat, getChats } from "../controllers/chat.controllers.js";
import { verifyJWT_username } from "../middlewares/verifyJWT.middleware.js";

const router = express.Router();

router.post("/", verifyJWT_username, createChat);
router.get("/", verifyJWT_username, getChats);
// router.get("/:id", verifyJWT_username, getChatById);

export default router;
