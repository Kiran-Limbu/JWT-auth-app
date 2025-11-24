import { validationResult } from "express-validator";
import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs"
import generateAuthToken from "../utils/createToken.js";

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }

    const allreadyExistUser = await userModel.findOne({ email });
    if (allreadyExistUser) {
        return res.status(400).json({
            success: false,
            message: "User allready exist"
        });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({ username, email, password: hashPassword })

    try {
        await newUser.save();
        generateAuthToken(res, newUser._id);
        res.status(201).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
        })

    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
};

const loginUser = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required",
        });
    }

    const allreadyExistUser = await userModel.findOne({ email });

    if (!allreadyExistUser) {
        return res.status(401).json({ message: 'User not found !' });
    }

    const isValidPassword = await bcrypt.compare(password, allreadyExistUser.password);

    if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid Password" });
    }

    generateAuthToken(res, allreadyExistUser._id);

    res.status(200).json({
        _id: allreadyExistUser._id,
        email: allreadyExistUser.email,
        username: allreadyExistUser.username,
    });

}

const getUserProfile = async (req, res) => {
    const user = await userModel.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
        })
    } else {
        res.status(400).json({ message: "User not found !" });
    }
}

const updateUserProfile = async (req, res) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (user) {
            user.username = req.body.username || user.username;
            user.email = req.body.email || user.email;
        }

        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(req.body.password, salt);
            user.password = hashPassword;
        }

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,

        })
        res.json(updateUserProfile);
    } catch (error) {
        res.status(400).json({ message: "User not found" });
    }
}

const logoutUser = async (req, res) => {
    res.clearCookie('jwt');

    res.status(200).json({ message: "User logged out successfully" });
}

export { registerUser, loginUser, getUserProfile, updateUserProfile, logoutUser }
