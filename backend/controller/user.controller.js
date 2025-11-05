import { validationResult } from "express-validator";
import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs"

const registerUser = async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(401).json({ error: error.array() })
    }

    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        throw new Error("All filed are required");
    }

    const allreadyExistUser = await userModel.findOne({email});
    if(allreadyExistUser){
        return res.status(401).send("User allready exist");
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    
    const newUser = new userModel({username, email, password: hashPassword})

    try {
        await newUser.save();
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

const loginUser = async (req, res) =>{
    const error = validationResult(req);

    if(!error.isEmpty()){
        return res.status(401).json({ error: error.array()})
    }

    const {email, password} = req.body;

    if(!email || !password){
        throw new Error("All filed are required");
    }

    const allreadyExistUser = await userModel.findOne({ email });

    if(!allreadyExistUser){
        return res.status(401).json({message: 'User not found !'});
    }

    const isValidPassword = await bcrypt.compare(password, allreadyExistUser.password);

    if(!isValidPassword){
        return res.status(401).json({message: "Invalid Password"});
    }

    res.status(200).json({
        _id: allreadyExistUser._id,
        email: allreadyExistUser.email,
        username: allreadyExistUser.username,
    });

}

export { registerUser, loginUser }
