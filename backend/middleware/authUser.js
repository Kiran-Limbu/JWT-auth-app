import jwt from 'jsonwebtoken';
import userModel from '../models/user.model.js';


const authUser = async (req, res, next) => {
    let token;

    token = req.cookies.token;

    if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findById(decoded.userId);
        next();
    } else {
        res.status(401)
        throw new Error("Unauthroized token, no token")
    }

}

export default authUser;