import { AuthenticatedRequest } from "../types/modelTypes";
import { NextFunction, Request, Response } from "express";
import * as api from "./handleApis";
import Post from "../models/postModel";
import { PostModel } from "../types/modelTypes";
import catchAsync from "../util/catchAsync";

export const setUser = catchAsync(
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.body.user) req.body.user = req.user?._id;
    next();
  }
);

export const createPost = api.createOne<PostModel>(Post);
export const getAllPost = api.getAll<PostModel>(Post);
export const getPost = api.getOne<PostModel>(Post);
export const deletePost = api.deleteOne<PostModel>(Post);
