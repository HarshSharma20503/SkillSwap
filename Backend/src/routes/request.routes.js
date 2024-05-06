import express from "express";
import { createRequest, getRequests, acceptRequest, rejectRequest } from "../controllers/request.controllers.js";
import { verifyJWT_username } from "../middlewares/verifyJWT.middleware.js";

const router = express.Router();

router.post("/create", verifyJWT_username, createRequest);
router.get("/getRequests", verifyJWT_username, getRequests);
router.post("/acceptRequest", verifyJWT_username, acceptRequest);
router.post("/rejectRequest", verifyJWT_username, rejectRequest);

export default router;
