
import type { Request } from "express";
export interface AuthRequest extends Request {
  user: any;
}

export interface CreateUserTypes {
  username: string;
  email: string;
  password: string;
}

export interface LoginUserTypes {
  username: string;
  userImg: string;
  email: string;
  password: string;
  _id: string;
}

export interface JwtPayloadTypes {
 userId?: string;
}

