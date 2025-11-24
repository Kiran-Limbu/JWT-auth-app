import express from "express";
import { loginUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from "../controller/user.controller.js";
import { body } from "express-validator";
import authUser from "../middleware/authUser.js";


const router = express.Router();

router.post("/register", registerUser);


router.post("/login", loginUser);

router.post("/logout", logoutUser);

router.route("/profile")
    .get(authUser, getUserProfile)
    .put(authUser, updateUserProfile);



export default router;
