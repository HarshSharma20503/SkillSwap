import { Router } from "express";
import { googleAuthCallback, googleAuthHandler, handleGoogleLoginCallback } from "../controllers/auth.controllers.js";

const router = Router();

router.get("/google", googleAuthHandler);
router.get("/google/callback", googleAuthCallback, handleGoogleLoginCallback);

export default router;
