import type { Response } from "express";
import jwt from "jsonwebtoken";

const generateAuthToken = (res: Response, userId: string) => {
  const secretKey = process.env.JWT_SECRET as string;

  const token: string = jwt.sign({ userId }, secretKey, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true, // prevents JS access
    secure: process.env.NODE_ENV === "production", // HTTPS only in production
    sameSite: "strict", // prevents cross-site issues
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  return token;
};

export default generateAuthToken;
