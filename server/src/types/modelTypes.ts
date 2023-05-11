import { Request } from "express";
import mongoose, { Document } from "mongoose";

export interface ErrorClass extends Error {
  statusCode: number;
  status: string;
  isOperational: boolean;
}

export interface UserModel {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  email: string;
  password: string | undefined;
  passwordConfirm: string | undefined;
  photo: string;

  checkPassword: (
    inputPassword: string,
    encrytedPassword: string
  ) => Promise<boolean>;
}

export interface PostModel extends Document {
  user: mongoose.Schema.Types.ObjectId;
  description: String;
  photo?: String;
  likes: number;
  likedBy: mongoose.Schema.Types.ObjectId[];
  postedAt: Date;
}

export interface CommentModel extends Document {
  post: mongoose.Schema.Types.ObjectId;
  user: mongoose.Schema.Types.ObjectId;
  comment: string;
  commentedAt: Date;
}

export interface AuthenticatedRequest extends Request {
  user?: UserModel;
}
