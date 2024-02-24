import { Router } from "express";
import { userAuthGoogle } from "../controllers/user.controllers.js";

const router = Router();

router.route("/auth/google").get(userAuthGoogle);

export default router;
