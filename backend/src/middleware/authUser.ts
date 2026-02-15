import jwt from "jsonwebtoken";
import type { NextFunction, Request, Response } from "express";
import userModel from "../models/user.model.ts";
import type { JwtPayloadDTO } from "../types/user.types.ts";

const authUser = async (req: Request, res: Response, next: NextFunction) => {
  let token: string;

  token = req.cookies.token;

  const secretKey = process.env.JWT_SECRET as string;
  if (token) {
    const decoded = jwt.verify(token, secretKey) as JwtPayloadDTO;
    req.user = await userModel.findById(decoded.userId);
    next();
  } else {
    res.status(401);
    throw new Error("Unauthroized token, no token");
  }
};

export default authUser;
