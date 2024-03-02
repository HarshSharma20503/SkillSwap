import { Router } from "express";
import { UserDetails } from "../controllers/user.controllers.js";
import { verifyJWT_email, verifyJWT_username } from "../middlewares/verifyJWT.middleware.js";
import { UnRegisteredUserDetails } from "../controllers/user.controllers.js";

const router = Router();

router.route("/registered/getDetails").get(verifyJWT_username, UserDetails);
router.route("/unregistered/getDetails").get(verifyJWT_email, UnRegisteredUserDetails);

export default router;
