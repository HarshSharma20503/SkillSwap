import express from "express";
// import { createMessage, getMessages } from "../controllers/message.controller.js";
import { verifyJWT_username } from "../middlewares/verifyJWT.middleware.js";

const router = express.Router();

// router.post("/", verifyJWT_username, sendMessage);
// router.get("/", verifyJWT_username, getMessages);

export default router;
