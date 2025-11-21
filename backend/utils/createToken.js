import jwt from "jsonwebtoken"

const generateAuthToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });

    res.cookie('jwt', token, {
        httpOnly: true,      // prevents JS access
        secure: process.env.NODE_ENV === 'production', // HTTPS only in production
        sameSite: 'strict',  // prevents cross-site issues
        maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return token;
}

export default generateAuthToken;