import express from "express";
import { loginUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from "../controller/user.controller.js";
import {body} from "express-validator";
import authUser from "../middleware/authUser.js";


const router = express.Router();

router.post("/register",[
    body('username').isLength({ min: 6 }).withMessage('Username should be 6 letter long'),
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6}).withMessage('Password must be 6 letter long')
], registerUser);

router.post("/login", [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be 6 letter long')
], loginUser);

router.post("/logout", logoutUser);

router.route("/profile")
.get(authUser,getUserProfile)
.put(authUser,updateUserProfile);



export default router;
