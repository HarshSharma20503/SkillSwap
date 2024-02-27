import { Router } from "express";
import { UserDetails } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/verifyJWT.middleware.js";

const router = Router();

router.route("/getDetails").get(verifyJWT, UserDetails);

export default router;
