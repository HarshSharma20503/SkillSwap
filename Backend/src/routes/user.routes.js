import { Router } from "express";
import { UserDetails } from "../controllers/user.controllers.js";
import { verifyJWT_email, verifyJWT_username } from "../middlewares/verifyJWT.middleware.js";
import {
  UnRegisteredUserDetails,
  saveRegUnRegisteredUser,
  saveEduUnRegisteredUser,
  saveAddUnRegisteredUser,
  registerUser,
} from "../controllers/user.controllers.js";

const router = Router();

router.route("/unregistered/getDetails").get(verifyJWT_email, UnRegisteredUserDetails);
router.route("/unregistered/saveRegDetails").post(verifyJWT_email, saveRegUnRegisteredUser);
router.route("/unregistered/saveEduDetail").post(verifyJWT_email, saveEduUnRegisteredUser);
router.route("/unregistered/saveAddDetail").post(verifyJWT_email, saveAddUnRegisteredUser);
router.route("/registerUser").post(verifyJWT_email, registerUser);

router.route("/registered/getDetails/:username").get(verifyJWT_username, UserDetails);

export default router;
