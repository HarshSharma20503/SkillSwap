import express from "express";
// import { createChat, getChats, getChatById, updateChat, deleteChat } from "../controllers/chat.controller.js";
import { verifyJWT_username } from "../middlewares/verifyJWT.middleware.js";

const router = express.Router();

// router.post("/", verifyJWT_username, createChat);
// router.get("/", verifyJWT_username, getChats);
// router.get("/:id", verifyJWT_username, getChatById);

export default router;
