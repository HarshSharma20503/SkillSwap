import express from "express";
import { createRequest } from "../controllers/request.controllers.js";
import { verifyJWT_username } from "../middlewares/verifyJWT.middleware.js";

const router = express.Router();

router.post("/", verifyJWT_username, createRequest);
// router.get("/", verifyJWT_username, getRequests);

export default router;
