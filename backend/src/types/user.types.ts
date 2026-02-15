export interface CreateUserTypes {
  username: string;
  email: string;
  password: string;
}

export interface LoginUserTypes {
  email: string;
  password: string;
}

export interface JwtPayloadTypes {
  userId: string;
}

