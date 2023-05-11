import User from "../models/userModel";
import catchAsync from "../util/catchAsync";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { AuthenticatedRequest, UserModel } from "../types/modelTypes";
import AppError from "../util/AppError";
import { promisify } from "util";

interface DecodedToken {
  userId: string;
  iat: number;
  exp: number;
}

const createSendToken = (
  user: UserModel,
  statusCode: number,
  res: Response
) => {
  const userId = user._id;
  const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.cookie("jwt", token, {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

export const signUp = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.email && !req.body.password)
      return next(new AppError("Please provide signup details", 400));

    const user = await User.create(req.body);

    createSendToken(user, 200, res);
  }
);

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide email & password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.checkPassword(password, user.password!)))
    return next(new AppError("Incorrect email and Password", 401));

  // if everything ok
  createSendToken(user, 200, res);
};

export const protect = catchAsync(
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    let token: string = "";

    if (req.cookies) {
      token = req.cookies.jwt;
      // console.log("Cookieeee =======>>>>>>",token,req.cookies);
    } else if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // console.log(token);

    if (!token)
      return next(
        new AppError("You are not logged in! Please log in to get access", 401)
      );

    const decoded = (await promisify<string, string>(jwt.verify)(
      token,
      process.env.JWT_SECRET!
    )) as unknown;

    const decodedToken = decoded as DecodedToken;

    const currentUser = await User.findById(decodedToken.userId);

    if (!currentUser)
      return next(
        new AppError(
          "This user belonging to this token does no longer exist.",
          401
        )
      );

    req.user = currentUser;

    next();
  }
);
