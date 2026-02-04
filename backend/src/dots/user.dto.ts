export interface CreateUserDTO {
  username: string;
  email: string;
  password: string;
}

export interface LoginUserDTO {
  email: string;
  password: string;
}

export interface JwtPayloadDTO{
  userId: string;
}

