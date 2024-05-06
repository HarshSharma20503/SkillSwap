import express from "express";
import { createReport } from "../controllers/report.controllers.js";
import { verifyJWT_username } from "../middlewares/verifyJWT.middleware.js";

const router = express.Router();

router.post("/create", verifyJWT_username, createReport);
// router.get("/", verifyJWT_username, getRequests);

export default router;
